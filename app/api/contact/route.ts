// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { sendDeveloperNotification, sendUserConfirmation } from '@/lib/resend';
import { saveContactFormToAirtable } from '@/lib/airtable';
import { rateLimiter } from '@/lib/rateLimiter';
import { ContactFormData } from '@/types/contact';

type ErrorResponse = {
  code: string;
  message: string;
  details?: unknown;
};

function errorResponse(code: string, message: string, details?: unknown, status = 400) {
  const payload: ErrorResponse = { code, message, details };
  return NextResponse.json(payload, { status });
}

export async function POST(request: Request) {
  const ip =
    request.headers.get('x-forwarded-for')?.split(',').shift() ||
    request.headers.get('x-real-ip') ||
    'unknown';

  try {
    const body = (await request.json()) as ContactFormData & { recaptchaToken?: string };

    // Basic validation
    if (!body || !body.email || !body.name || !body.message) {
      return errorResponse('validation_error', 'Missing required fields: name, email or message', undefined, 422);
    }

    // 1) rate limiting per IP
    const limitOk = rateLimiter.tryRemoveTokens(ip);
    if (!limitOk) {
      return errorResponse('rate_limited', 'Too many submissions from this IP. Try again later.', undefined, 429);
    }

    // 2) reCAPTCHA v3 validation
    if (!body.recaptchaToken) {
      return errorResponse('recaptcha_missing', 'Missing reCAPTCHA token', undefined, 422);
    }

    const token = body.recaptchaToken;
    const verifyRes = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
      { method: 'POST' }
    );

    const verification = await verifyRes.json();

    if (!verification.success || verification.score < 0.5) {
      return errorResponse(
        'recaptcha_failed',
        'Failed reCAPTCHA verification (low score or invalid).',
        { verification },
        400
      );
    }

    // 3) Save to Airtable
    try {
      await saveContactFormToAirtable(body);
    } catch (err) {
      console.error('airtable error', err);
      return errorResponse('db_error', 'Failed to save the contact form to Airtable.', err, 500);
    }

    // 4) Send notifications
    try {
      await sendDeveloperNotification(body);
    } catch (err) {
      console.error('resend developer email error', err);
      try {
        await sendUserConfirmation(body);
      } catch (err2) {
        console.error('resend user email error', err2);
        return errorResponse('email_failed', 'Failed to send notification emails.', { err, err2 }, 500);
      }
      return errorResponse(
        'email_partial_failure',
        'Saved to DB. Failed to send developer notification, but user confirmation was sent.',
        err,
        207
      );
    }

    // Send confirmation to user (best effort)
    try {
      await sendUserConfirmation(body);
    } catch (err) {
      console.error('resend user email error', err);
      return errorResponse('email_user_failed', 'Saved to DB and notified developer but failed to send confirmation to user.', err, 207);
    }

    return NextResponse.json({ message: 'Form submitted & emails sent successfully!' }, { status: 200 });
  } catch (err) {
    console.error('unhandled error in contact route', err);
    return errorResponse('internal_error', 'An unexpected error occurred.', err, 500);
  }
}
