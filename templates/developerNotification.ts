export const developerNotification = (formData) => {
  const now = new Date().toLocaleString();
  return `
<!doctype html>
<html>
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial; margin:0; padding:0; background:#f6f8fb; color:#0f172a; }
    .container { max-width:600px; margin:28px auto; background:white; border-radius:10px; box-shadow:0 8px 30px rgba(16,24,40,0.08); overflow:hidden; }
    .header { padding:20px 24px; background:linear-gradient(90deg,#0ea5a4,#6366f1); color:white; }
    .body { padding:20px 24px; }
    .grid { display:flex; flex-wrap:wrap; gap:8px; margin-top: 12px; }
    .meta { flex:1 1 45%; background:#f1f5f9; padding:10px; border-radius:8px; font-size:14px; }
    .message { margin-top:16px; white-space:pre-wrap; }
    footer { padding:16px 24px; font-size:13px; color:#475569; background:#fbfdff; }
    .label { color:#94a3b8; font-size:12px; margin-bottom:4px; display:block; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2 style="margin:0;font-size:20px;">New Contact Form Submission</h2>
      <div style="opacity:0.95;font-size:13px;margin-top:4px;">${now}</div>
    </div>

    <div class="body">
      <p style="margin:0 0 8px 0;color:#0f172a;">You received a new message via the contact form. Key details are below.</p>

      <div class="grid">
        <div class="meta">
          <span class="label">Name</span>
          <div>${formData.name || "-"}</div>
        </div>
        <div class="meta">
          <span class="label">Email</span>
          <div>${formData.email || "-"}</div>
        </div>

        <div class="meta">
          <span class="label">Company</span>
          <div>${formData.company || "-"}</div>
        </div>

        <div class="meta">
          <span class="label">Project Type</span>
          <div>${formData.projectType || "-"}</div>
        </div>

        <div class="meta">
          <span class="label">Timeline</span>
          <div>${formData.timeline || "-"}</div>
        </div>

        <div class="meta">
          <span class="label">Company Size</span>
          <div>${formData.companySize || "-"}</div>
        </div>
      </div>

      <div class="message">
        <h4 style="margin:12px 0 6px 0;">Message</h4>
        <div style="font-size:15px; line-height:1.5; color:#0f172a;">${(
          formData.message || "-"
        ).replace(/\n/g, "<br/>")}</div>
      </div>

      <div style="margin-top:16px;">
        <a href="mailto:${
          formData.email
        }" style="display:inline-block;padding:10px 14px;border-radius:8px;background:#0ea5a4;color:#fff;text-decoration:none;font-weight:600;font-size:14px;">Reply to sender</a>
      </div>
    </div>

    <footer>
      <div>Sent via Sprint 360 contact form</div>
    </footer>
  </div>
</body>
</html>
  `;
};
