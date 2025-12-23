"use client";
import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function ThankYou() {
  const sp = useSearchParams();
  const name = sp.get("name") || "";

  useEffect(() => {
    if (typeof window !== "undefined") {
      // @ts-ignore
      window.dataLayer = window.dataLayer || [];
      // @ts-ignore
      window.dataLayer.push({ event: "lead_submission" });
    }
  }, []);

  return (
    <main
      className="min-h-screen flex items-center justify-center py-20 px-6"
      style={{ background: "var(--background)" }}
    >
      <div className="max-w-3xl w-full">
        <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.04)] rounded-2xl p-8 shadow-lg backdrop-blur">
          <div className="flex items-start gap-5">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-sky-500 to-blue-400 flex items-center justify-center shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>

            <div className="flex-1">
              <h1 className="text-2xl font-bold text-white">
                Thanks — we received your project brief!
              </h1>
              <p className="mt-3 text-neutral-300">
                {name ? `Hi ${name},` : ""} A Sprint 360 strategist will contact
                you within 1-3 business day to confirm details and propose next
                steps.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={
                    process.env.NEXT_PUBLIC_CALENDLY_LINK ||
                    "https://calendly.com/amr-ahmedm95/30min"
                  }
                  target="_blank"
                  rel="noreferrer"
                  className="btn-cta inline-flex px-4 py-2"
                >
                  Book a Call
                </a>
                {/* <a
                  href="/case-studies"
                  className="px-4 py-2 rounded border border-[rgba(255,255,255,0.06)] text-neutral-200"
                >
                  View case studies
                </a> */}
                <a
                  href="/"
                  className="px-4 py-2 rounded text-neutral-300 hover:text-white"
                >
                  Continue browsing
                </a>
              </div>
            </div>
          </div>

          <div className="mt-6 text-xs text-neutral-500">
            You can also email us at{" "}
            <a href="mailto:contact@sprint360.co" className="text-blue-400">
              contact@sprint360.co
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
