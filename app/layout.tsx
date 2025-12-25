import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import LayoutContainer from "@/components/layout/LayoutContainer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sprint 360 - Full-Stack Data | AI | Software Development Solutions",
  description:
    "Technology & AI Services Company specializing in Data Analysis, Reports and Insights, Data Science, AI Applications, and Full-Stack Software Development.",
};

// Since headers() is async, we need to export this function
async function getNonce() {
  if (process.env.NODE_ENV === "development") {
    // Generate a static nonce for development
    return "dev-nonce-" + Math.random().toString(36).substring(2);
  }

  const { headers } = await import("next/headers");
  const headerList = await headers();
  return headerList.get("x-nonce") || "";
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const nonce = await getNonce();

  return (
    <html lang="en">
      <head>
        {/* Store nonce in meta tag for client-side scripts if needed */}
        <meta name="csp-nonce" content={nonce} />

        {/* Internal scripts with nonce */}
        <Script
          src="/assets/lang-config.js"
          strategy="beforeInteractive"
          nonce={nonce}
        />
        <Script
          src="/assets/translation.js"
          strategy="beforeInteractive"
          nonce={nonce}
        />

        {/* External scripts */}
        {nonce ? (
          <>
            <Script
              src="https://translate.google.com/translate_a/element.js?cb=TranslateInit"
              strategy="afterInteractive"
              nonce={nonce}
            />
            <Script
              src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
              strategy="afterInteractive"
              nonce={nonce}
            />
          </>
        ) : (
          // Fallback for development/local without NGINX
          <>
            <Script
              src="https://translate.google.com/translate_a/element.js?cb=TranslateInit"
              strategy="afterInteractive"
            />
            <Script
              src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
              strategy="afterInteractive"
            />
          </>
        )}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.className} antialiased`}
      >
        <div id="google_translate_element"></div>
        <LayoutContainer>{children}</LayoutContainer>

        {/* Initialize nonce globally for any dynamically added scripts */}
        {nonce && (
          <script
            nonce={nonce}
            dangerouslySetInnerHTML={{
              __html: `window.__NONCE__ = '${nonce.replace(/'/g, "\\'")}';`,
            }}
          />
        )}
      </body>
    </html>
  );
}
