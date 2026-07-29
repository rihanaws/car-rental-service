"use client";

import { Suspense } from "react";
import { useI18n } from "@/i18n/useI18n";
import { BookingForm } from "@/components/BookingForm";

function BookingFormFallback() {
  const { t } = useI18n();
  return <p className="text-text-inverse/70">{t.common.loading}</p>;
}

export function BookingContent() {
  const { t } = useI18n();

  return (
    <div className="bg-background min-h-[70vh]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-10 md:py-14">
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-semibold text-text-inverse">
          {t.booking.pageTitle}
        </h1>
        <p className="mt-2 text-text-inverse/70">{t.booking.pageSubtitle}</p>

        <div className="mt-8">
          <Suspense fallback={<BookingFormFallback />}>
            <BookingForm />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
