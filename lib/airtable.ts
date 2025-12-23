import { ContactFormData } from '../types/contact';

const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;
const AIRTABLE_TABLE_ID = process.env.AIRTABLE_TABLE_ID; // prefer tbl... id
const AIRTABLE_TABLE_NAME = process.env.AIRTABLE_TABLE_NAME; // fallback if you prefer name

if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID || (!AIRTABLE_TABLE_ID && !AIRTABLE_TABLE_NAME)) {
  throw new Error(
    'Missing Airtable env vars. Provide AIRTABLE_API_KEY, AIRTABLE_BASE_ID and either AIRTABLE_TABLE_ID or AIRTABLE_TABLE_NAME'
  );
}

const tableSegment = AIRTABLE_TABLE_ID ?? encodeURIComponent(AIRTABLE_TABLE_NAME!);
const url = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${tableSegment}`;


export async function saveContactFormToAirtable(formData: ContactFormData) {
  // Format submission date in friendly Airtable-compatible string: "December 10, 2025"
  const formattedDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // Coerce consent to a boolean (Airtable checkbox expects true/false)
  const consentValue = (() => {
    const v: any = (formData as any).consent;
    if (typeof v === 'boolean') return v;
    if (typeof v === 'string') {
      const s = v.toLowerCase();
      return s === 'true' || s === 'on' || s === '1';
    }
    return false;
  })();

  const payload = {
    fields: {
      Name: formData.name,
      Email: formData.email,
      ProjectType: formData.projectType,
      Timeline: formData.timeline,
      CurrentChallenge: formData.currentChallenge ?? '',
      Company: formData.company ?? '',
      CompanySize: formData.companySize ?? '',
      BusinessContext: formData.businessContext ?? '',
      Message: formData.message ?? '',
      Referral: formData.referral ?? '',
      PreferredContactMethod: formData.preferredContactMethod ?? '',
      Consent: consentValue,
      SubmissionDate: formattedDate,
    },
  };

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${AIRTABLE_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    // Prefer structured JSON error
    let body: any;
    try {
      body = await res.json();
    } catch {
      body = await res.text();
    }
    console.error('Airtable API error:', res.status, body, 'request payload:', JSON.stringify(payload));
    const message = body && body.error && body.error.message ? body.error.message : String(body);
    throw new Error(`Airtable API error ${res.status}: ${message}`);
  }

  return res.json();
}