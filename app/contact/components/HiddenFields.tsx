"use client";
import { useEffect } from "react";

export default function HiddenFields() {
  useEffect(() => {
    const browser = navigator.userAgent;
    const ts = new Date().toISOString();
    (document.getElementById("browser") as HTMLInputElement).value = browser;
    (document.getElementById("timestamp") as HTMLInputElement).value = ts;
  }, []);

  return (
    <div>
      <input id="browser" name="browser" type="hidden" />
      <input id="utm" name="utm" type="hidden" />
      <input id="visitorId" name="visitorId" type="hidden" />
      <input id="timestamp" name="timestamp" type="hidden" />
    </div>
  );
}
