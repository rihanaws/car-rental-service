"use client";

import { useI18n } from "@/i18n/useI18n";

export function LanguageToggle() {
  const { lang, setLang, t } = useI18n();

  return (
    <div
      className="inline-flex items-center border border-text-inverse/30"
      style={{ borderRadius: "var(--radius-sharp)" }}
      role="group"
      aria-label={t.nav.languageSelectorLabel}
    >
      <button
        type="button"
        onClick={() => setLang("bn")}
        aria-pressed={lang === "bn"}
        className={`px-3 py-2 text-sm font-medium transition-colors duration-150 ease-out min-h-11 min-w-11 ${
          lang === "bn" ? "bg-accent text-text" : "text-text-inverse hover:bg-text-inverse/10"
        }`}
        style={{ borderRadius: "var(--radius-sharp)" }}
      >
        {t.nav.languageNameBangla}
      </button>
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={`px-3 py-2 text-sm font-medium transition-colors duration-150 ease-out min-h-11 min-w-11 ${
          lang === "en" ? "bg-accent text-text" : "text-text-inverse hover:bg-text-inverse/10"
        }`}
        style={{ borderRadius: "var(--radius-sharp)" }}
      >
        {t.nav.languageNameEnglish}
      </button>
    </div>
  );
}
