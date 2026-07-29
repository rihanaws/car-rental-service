"use client";

import Link from "next/link";
import { useI18n } from "@/i18n/useI18n";

/**
 * Sticky bottom "Book" CTA — mobile only (hidden md and up via .sticky-book-bar
 * in app/globals.css). Meant to be rendered on Home, Fleet, Services, Booking.
 */
export function StickyBookBar() {
  const { t } = useI18n();

  return (
    <div className="sticky-book-bar bg-background border-t border-text-inverse/10 p-3">
      <Link
        href="/booking"
        className="btn-hard flex min-h-11 w-full items-center justify-center bg-primary px-4 py-3 text-sm font-semibold text-text-inverse"
        style={{ borderRadius: "var(--radius-sharp)" }}
      >
        {t.common.bookYourCar}
      </Link>
    </div>
  );
}
