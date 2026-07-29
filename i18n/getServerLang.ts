import { cookies } from "next/headers";
import { LANG_COOKIE, type Lang } from "@/i18n/I18nProvider";

/**
 * Server-side read of the persisted language cookie so the root layout can
 * render the correct language on first paint (no flash of wrong language).
 * Default language is Bangla when no cookie is present.
 */
export async function getServerLang(): Promise<Lang> {
  const cookieStore = await cookies();
  const value = cookieStore.get(LANG_COOKIE)?.value;
  return value === "en" ? "en" : "bn";
}
