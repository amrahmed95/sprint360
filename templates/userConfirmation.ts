export default function userConfirmationTemplate(userName: string) {
  const safeName = userName || "there";
  return `
<!doctype html>
<html>
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <style>
    body { font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial; margin:0; background:#f3f4f6; color:#0f172a; }
    .wrap { max-width:600px; margin:28px auto; background:#fff; border-radius:12px; overflow:hidden; box-shadow:0 10px 30px rgba(2,6,23,0.08); }
    .hero { padding:22px 24px; background:linear-gradient(90deg,#06b6d4,#7c3aed); color:#fff; text-align:center; }
    .content { padding:20px 24px; font-size:15px; line-height:1.6; color:#0f172a; }
    .cta { display:block; text-align:center; margin-top:18px; }
    .button { display:inline-block; padding:10px 16px; border-radius:10px; background:#111827; color:#fff; text-decoration:none; font-weight:600; }
    footer { padding:14px 20px; background:#fbfdff; font-size:13px; color:#6b7280; text-align:center;}
  </style>
</head>
<body>
  <div class="wrap">
    <div class="hero">
      <h1 style="margin:0;font-size:20px;">Thanks, ${safeName}!</h1>
      <div style="opacity:0.95;margin-top:6px;">We received your message — we’ll get back to you shortly.</div>
    </div>

    <div class="content">
      <p>We appreciate you reaching out. One of our team members will review your submission and respond as soon as possible.</p>
      <p>If you'd like to schedule a quick chat instead, you can book time with our team.</p>

      <div class="cta">
        <a class="button" href="${
          process.env.SCHEDULING_LINK || "#"
        }" target="_blank" rel="noopener">Book a meeting</a>
      </div>

      <p style="margin-top:14px;color:#64748b;">If this email reached you in error or you'd like to update your message, just reply to this email.</p>
    </div>

    <footer>
      Sprint 360 • Delivering products with focus and speed
    </footer>
  </div>
</body>
</html>
  `;
}
