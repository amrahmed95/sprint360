// lib/resend.ts
import { Resend } from 'resend';
import { ContactFormData } from '@/types/contact';
import { developerNotification } from '@/templates/developerNotification';
import userConfirmationTemplate from '@/templates/userConfirmation';

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM_EMAIL = process.env.EMAIL_FROM || 'onboarding@resend.dev';

export async function sendDeveloperNotification(formData: ContactFormData) {
  if (!process.env.RESEND_API_KEY) throw new Error('RESEND_API_KEY not configured');
  return resend.emails.send({
    from: FROM_EMAIL,
    to: process.env.DEVELOPER_EMAIL || 'amr.ahmedm95@gmail.com',
    subject: '🚀 New Contact Form Submission',
    html: developerNotification(formData),
  });
}

export async function sendUserConfirmation(formData: ContactFormData) {
  if (!process.env.RESEND_API_KEY) throw new Error('RESEND_API_KEY not configured');
  return resend.emails.send({
    from: FROM_EMAIL,
    to: formData.email,
    subject: 'Thanks — we received your message!',
    html: userConfirmationTemplate(formData.name),
  });
}
