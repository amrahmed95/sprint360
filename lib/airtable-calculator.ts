interface CalculatorLeadPayload {
  name: string;
  email: string;
  CurrentChallenge: string;
  submissionDate?: string;
}

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

const calcUrl = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${tableSegment}`;

export async function saveCalculatorLeadToAirtable(data: CalculatorLeadPayload) {
  const formattedDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const payload = {
    fields: {
      Name: data.name,
      Email: data.email,
      CurrentChallenge: data.CurrentChallenge,
      SubmissionDate: formattedDate,
    },
  };

  const res = await fetch(calcUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${AIRTABLE_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    let body: any;
    try {
      body = await res.json();
    } catch {
      body = await res.text();
    }
    console.error("Airtable API error:", res.status, body);
    throw new Error(`Airtable error: ${res.status}`);
  }

  return res.json();
}
