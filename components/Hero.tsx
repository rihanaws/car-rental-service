"use client";

import Link from "next/link";
import { useI18n } from "@/i18n/useI18n";
import { QuickBookingWidget } from "@/components/QuickBookingWidget";

export function Hero() {
  const { t } = useI18n();

  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 md:py-16 grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <h1 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-semibold text-text-inverse leading-tight">
            {t.home.heroTitle}
          </h1>
          <p className="mt-4 text-base text-text-inverse/80 max-w-lg">{t.home.heroSubtitle}</p>
          <Link
            href="/booking"
            className="btn-hard mt-6 inline-flex min-h-11 items-center justify-center bg-primary px-6 py-3 text-base font-semibold text-text-inverse"
            style={{ borderRadius: "var(--radius-sharp)" }}
          >
            {t.home.heroCta}
          </Link>

          <div
            role="img"
            aria-label={t.home.heroImageAlt}
            className="mt-8 h-40 md:h-52 w-full hidden md:block"
            style={{
              background:
                "linear-gradient(120deg, #14231C 0%, #2F5233 45%, #C4622D 100%)",
              borderRadius: "var(--radius-media)",
            }}
          >
            <svg viewBox="0 0 200 80" className="w-full h-full opacity-30" aria-hidden="true">
              <path
                d="M0 60H200"
                stroke="#F6F1E7"
                strokeWidth="2"
                strokeDasharray="8 6"
              />
              <rect x="20" y="20" width="14" height="30" fill="none" stroke="#F6F1E7" strokeWidth="1.5" />
              <rect x="40" y="10" width="14" height="40" fill="none" stroke="#F6F1E7" strokeWidth="1.5" />
              <rect x="150" y="16" width="14" height="34" fill="none" stroke="#F6F1E7" strokeWidth="1.5" />
              <path
                d="M80 62L86 48C87 45 90 44 93 44H120C124 44 127 45 129 48L140 55V62H132C132 65 129 68 126 68C123 68 120 65 120 62H100C100 65 97 68 94 68C91 68 88 65 88 62H80Z"
                fill="none"
                stroke="#F6F1E7"
                strokeWidth="1.5"
              />
            </svg>
          </div>
        </div>

        <QuickBookingWidget />
      </div>
    </section>
  );
}
