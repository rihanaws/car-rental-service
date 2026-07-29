"use client";

import Link from "next/link";
import { useState } from "react";
import { useI18n } from "@/i18n/useI18n";
import { LanguageToggle } from "@/components/LanguageToggle";

export function NavBar() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: t.nav.home },
    { href: "/fleet", label: t.nav.fleet },
    { href: "/services", label: t.nav.services },
    { href: "/pricing", label: t.nav.pricing },
    { href: "/about", label: t.nav.about },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-text-inverse/10">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6" aria-label={t.nav.primaryNavLabel}>
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="font-[family-name:var(--font-heading)] text-xl font-semibold text-text-inverse tracking-tight"
          >
            ঢাকা <span className="text-accent">Car Rental</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-text-inverse/90 hover:text-accent transition-colors duration-150 ease-out"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <LanguageToggle />
            <Link
              href="/booking"
              className="btn-hard inline-flex min-h-11 items-center justify-center bg-primary px-4 py-2 text-sm font-semibold text-text-inverse"
              style={{ borderRadius: "var(--radius-sharp)" }}
            >
              {t.nav.bookNow}
            </Link>
          </div>

          <button
            type="button"
            className="md:hidden inline-flex min-h-11 min-w-11 items-center justify-center text-text-inverse"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? t.nav.closeMenu : t.nav.menu}</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              {open ? (
                <path
                  d="M6 6L18 18M6 18L18 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7H20M4 12H20M4 17H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div id="mobile-menu" className="md:hidden pb-4 flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="min-h-11 flex items-center px-2 text-base font-medium text-text-inverse hover:text-accent transition-colors duration-150 ease-out"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center justify-between gap-3 pt-3">
              <LanguageToggle />
              <Link
                href="/booking"
                onClick={() => setOpen(false)}
                className="btn-hard inline-flex min-h-11 items-center justify-center bg-primary px-4 py-2 text-sm font-semibold text-text-inverse"
                style={{ borderRadius: "var(--radius-sharp)" }}
              >
                {t.nav.bookNow}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
