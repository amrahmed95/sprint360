export async function getRecaptchaToken(action: string): Promise<string> {
  if (typeof window === "undefined") throw new Error("getRecaptchaToken must run in the browser");
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  if (!siteKey) throw new Error("NEXT_PUBLIC_RECAPTCHA_SITE_KEY is not set");

  // wait for grecaptcha to exist (max timeout)
  const waitForGrecaptcha = (): Promise<void> =>
    new Promise((resolve, reject) => {
      const start = Date.now();
      const interval = setInterval(() => {
        if ((window as any).grecaptcha && (window as any).grecaptcha.execute) {
          clearInterval(interval);
          return resolve();
        }
        if (Date.now() - start > 5000) {
          clearInterval(interval);
          return reject(new Error("reCAPTCHA script not loaded or grecaptcha not initialized"));
        }
      }, 100);
    });

  await waitForGrecaptcha();

  return new Promise((resolve, reject) => {
    try {
      window.grecaptcha.ready(() => {
        window.grecaptcha
          .execute(siteKey, { action })
          .then(resolve)
          .catch((err: unknown) => reject(new Error("grecaptcha.execute failed: " + String(err))));
      });
    } catch (err) {
      reject(err);
    }
  });
}
