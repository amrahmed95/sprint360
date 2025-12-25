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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self' https: http: data: blob: 'unsafe-inline' 'unsafe-eval';
                   img-src 'self' data: blob: https: http: *;
                   script-src 'self' 'unsafe-inline' 'unsafe-eval' https: http:;
                   connect-src 'self' https: http:;
                   frame-src 'self' https: http:;"
        />
        <Script
          src="/assets/lang-config.js"
          strategy="beforeInteractive"
          crossOrigin="anonymous"
        />
        <Script
          src="/assets/translation.js"
          strategy="beforeInteractive"
          crossOrigin="anonymous"
        />
        <Script
          src="https://translate.google.com/translate_a/element.js?cb=TranslateInit"
          strategy="afterInteractive"
        />
        {/* reCAPTCHA v3 script — must include render=SITE_KEY */}
        <script
          src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
          async
          defer
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.className} antialiased`}
      >
        <div id="google_translate_element"></div>
        <LayoutContainer>{children}</LayoutContainer>
      </body>
    </html>
  );
}
