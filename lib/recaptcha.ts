export async function verifyRecaptcha(token: string, ip?: string) {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) {
    console.warn('RECAPTCHA_SECRET_KEY not set');
    return { success: false, error: 'missing_secret' };
  }

  const params = new URLSearchParams();
  params.append('secret', secret);
  params.append('response', token);
  if (ip) params.append('remoteip', ip);

  try {
    const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      body: params,
    });
    const json = await res.json();
    // json has: success, score, action, challenge_ts, hostname, error-codes
    return json;
  } catch (err) {
    console.error('recaptcha verify error', err);
    return { success: false, error: 'fetch_error', details: err };
  }
}
