"use client";
import { useEffect, useState } from "react";
import { parseCookies, setCookie } from "nookies";
import Script from "next/script";

// Google-predefined cookie for translation engine
const COOKIE_NAME = "googtrans";

// Language descriptor type
interface LanguageDescriptor {
  name: string;
  title: string;
}

// Global type for translation config
declare global {
  namespace globalThis {
    var __GOOGLE_TRANSLATION_CONFIG__: {
      languages: LanguageDescriptor[];
      defaultLanguage: string;
    };
  }
}

const LanguageSwitcher = () => {
  const [currentLanguage, setCurrentLanguage] = useState<string>();
  const [languageConfig, setLanguageConfig] = useState<{
    languages: LanguageDescriptor[];
    defaultLanguage: string;
  }>();

  // Initialize translation engine
  useEffect(() => {
    const cookies = parseCookies();
    const existingCookie = cookies[COOKIE_NAME];

    let languageValue: string | undefined;

    if (existingCookie) {
      const sp = existingCookie.split("/");
      if (sp.length > 2) {
        languageValue = sp[2];
      }
    }

    if (globalThis.__GOOGLE_TRANSLATION_CONFIG__ && !languageValue) {
      languageValue = globalThis.__GOOGLE_TRANSLATION_CONFIG__.defaultLanguage;
    }

    if (languageValue) setCurrentLanguage(languageValue);

    if (globalThis.__GOOGLE_TRANSLATION_CONFIG__) {
      setLanguageConfig(globalThis.__GOOGLE_TRANSLATION_CONFIG__);
    }
  }, []);

  if (!currentLanguage || !languageConfig) return null;

  const switchLanguage = (lang: string) => () => {
    setCookie(null, COOKIE_NAME, "/auto/" + lang);
    window.location.reload();
  };

  return (
    <>
      <link rel="preload" href="/assets/translation.js" as="script" />
      <script src="/assets/translation.js"></script>
      <div className="notranslate">
        <select
          value={currentLanguage}
          onChange={(e) => switchLanguage(e.target.value)()}
          className="px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:border-gray-400"
        >
          {languageConfig.languages.map((ld) => (
            <option key={ld.name} value={ld.name}>
              {ld.title}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export { LanguageSwitcher, COOKIE_NAME };
