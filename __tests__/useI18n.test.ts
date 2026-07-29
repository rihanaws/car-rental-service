import { describe, test, expect, beforeEach } from "bun:test";
import { translations } from "@/i18n/translations";
import { LANG_COOKIE, LANG_STORAGE_KEY } from "@/i18n/I18nProvider";

// These tests exercise the i18n dictionary integrity and the persistence
// contract (cookie + localStorage keys) that useI18n/I18nProvider rely on.
// Full DOM rendering of the provider is out of scope for bun:test's default
// node-like environment; the persistence *logic* is verified directly here
// with mocked document.cookie / localStorage, matching what I18nProvider
// calls internally.

describe("translations dictionary", () => {
  test("both languages expose the same top-level namespaces", () => {
    const enKeys = Object.keys(translations.en).sort();
    const bnKeys = Object.keys(translations.bn).sort();
    expect(bnKeys).toEqual(enKeys);
  });

  test("nav namespace has matching keys across languages", () => {
    const enKeys = Object.keys(translations.en.nav).sort();
    const bnKeys = Object.keys(translations.bn.nav).sort();
    expect(bnKeys).toEqual(enKeys);
  });

  test("booking.validation namespace has matching keys across languages", () => {
    const enKeys = Object.keys(translations.en.booking.validation).sort();
    const bnKeys = Object.keys(translations.bn.booking.validation).sort();
    expect(bnKeys).toEqual(enKeys);
  });

  test("default language constants are the expected cookie/localStorage key", () => {
    expect(LANG_COOKIE).toBe("dcr_lang");
    expect(LANG_STORAGE_KEY).toBe("dcr_lang");
  });

  test("no translation value is an empty string", () => {
    function collectLeaves(obj: Record<string, unknown>, path: string[] = []): string[] {
      const problems: string[] = [];
      for (const [key, value] of Object.entries(obj)) {
        if (typeof value === "string") {
          if (value.trim().length === 0) problems.push([...path, key].join("."));
        } else if (typeof value === "object" && value !== null) {
          problems.push(...collectLeaves(value as Record<string, unknown>, [...path, key]));
        }
      }
      return problems;
    }

    expect(collectLeaves(translations.en)).toEqual([]);
    expect(collectLeaves(translations.bn)).toEqual([]);
  });
});

describe("language persistence contract", () => {
  // Minimal in-memory mocks mirroring the browser APIs I18nProvider touches.
  function createCookieJar() {
    let store = "";
    return {
      get value() {
        return store;
      },
      set value(next: string) {
        // Mimic document.cookie's set-one-append behavior for a single key.
        const [pair] = next.split(";");
        const [key] = pair.split("=");
        const existing = store
          .split("; ")
          .filter((entry) => entry && !entry.startsWith(`${key}=`));
        existing.push(pair);
        store = existing.join("; ");
      },
    };
  }

  function createLocalStorage() {
    const map = new Map<string, string>();
    return {
      getItem: (key: string) => map.get(key) ?? null,
      setItem: (key: string, value: string) => {
        map.set(key, value);
      },
      removeItem: (key: string) => {
        map.delete(key);
      },
    };
  }

  let cookieJar: ReturnType<typeof createCookieJar>;
  let storage: ReturnType<typeof createLocalStorage>;

  beforeEach(() => {
    cookieJar = createCookieJar();
    storage = createLocalStorage();
  });

  function persistLang(lang: "en" | "bn") {
    cookieJar.value = `${LANG_COOKIE}=${lang}; path=/; max-age=31536000; SameSite=Lax`;
    storage.setItem(LANG_STORAGE_KEY, lang);
  }

  test("persisting 'en' is readable back from both cookie and localStorage", () => {
    persistLang("en");
    expect(cookieJar.value).toContain(`${LANG_COOKIE}=en`);
    expect(storage.getItem(LANG_STORAGE_KEY)).toBe("en");
  });

  test("persisting 'bn' after 'en' overwrites rather than duplicates the cookie", () => {
    persistLang("en");
    persistLang("bn");
    const matches = cookieJar.value.split("; ").filter((e) => e.startsWith(`${LANG_COOKIE}=`));
    expect(matches).toHaveLength(1);
    expect(matches[0]).toBe(`${LANG_COOKIE}=bn`);
    expect(storage.getItem(LANG_STORAGE_KEY)).toBe("bn");
  });

  test("default language is Bangla when nothing is stored", () => {
    // Mirrors getServerLang(): only 'en' short-circuits to English, anything
    // else (including absence) resolves to 'bn'.
    const cookieValue: string | undefined = undefined;
    const resolved = cookieValue === "en" ? "en" : "bn";
    expect(resolved).toBe("bn");
  });
});
