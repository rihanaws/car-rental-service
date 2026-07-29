"use client";

import { createContext, useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import { translations, type Translations } from "@/i18n/translations";

export type Lang = "en" | "bn";

export const LANG_COOKIE = "dcr_lang";
export const LANG_STORAGE_KEY = "dcr_lang";

export interface I18nContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
}

export const I18nContext = createContext<I18nContextValue | null>(null);

function persistLang(lang: Lang) {
  if (typeof document !== "undefined") {
    // 1 year expiry, readable cookie so the server can pick it up via next/headers cookies()
    document.cookie = `${LANG_COOKIE}=${lang}; path=/; max-age=31536000; SameSite=Lax`;
  }
  if (typeof window !== "undefined") {
    try {
      window.localStorage.setItem(LANG_STORAGE_KEY, lang);
    } catch {
      // localStorage may be unavailable (private browsing, etc.) — cookie is the source of truth
    }
  }
}

export function I18nProvider({
  children,
  initialLang,
}: {
  children: ReactNode;
  initialLang: Lang;
}) {
  const [lang, setLangState] = useState<Lang>(initialLang);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    persistLang(next);
  }, []);

  // Keep <html data-lang> / lang attributes in sync so app/globals.css can
  // switch the active heading/body font pair, and so assistive tech gets the
  // correct document language.
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.setAttribute("data-lang", lang);
    document.documentElement.setAttribute("lang", lang);
  }, [lang]);

  // On mount, reconcile with localStorage in case it disagrees with the
  // server-rendered cookie value (e.g. user changed language in another tab).
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(LANG_STORAGE_KEY);
      if ((stored === "en" || stored === "bn") && stored !== lang) {
        setLangState(stored);
      }
    } catch {
      // ignore
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const value = useMemo<I18nContextValue>(
    () => ({
      lang,
      setLang,
      t: translations[lang],
    }),
    [lang, setLang]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}
