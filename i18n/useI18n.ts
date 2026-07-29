"use client";

import { useContext } from "react";
import { I18nContext, type I18nContextValue } from "@/i18n/I18nProvider";

/**
 * Access the current language, the setter, and the typed translation
 * dictionary for that language: `t.home.heroTitle`, `t.common.bookNow`, etc.
 */
export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return ctx;
}
