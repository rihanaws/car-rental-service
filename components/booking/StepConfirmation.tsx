"use client";

import Link from "next/link";
import { useI18n } from "@/i18n/useI18n";
import { tripTypeLabel, categoryLabel, formatBDT } from "@/lib/i18nHelpers";
import { getVehicleById } from "@/data/vehicles";
import type { BookingCustomerDetails, BookingResponse, BookingTripDetails } from "@/lib/types";

export function StepConfirmation({
  response,
  trip,
  vehicleId,
  customer,
  onBookAnother,
}: {
  response: BookingResponse;
  trip: Partial<BookingTripDetails>;
  vehicleId?: string;
  customer: Partial<BookingCustomerDetails>;
  onBookAnother: () => void;
}) {
  const { t } = useI18n();
  const vehicle = vehicleId ? getVehicleById(vehicleId) : undefined;

  return (
    <div className="card-hard bg-surface p-6 sm:p-8 text-center" style={{ borderRadius: "var(--radius-sharp)" }}>
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center bg-success text-text-inverse" style={{ borderRadius: "var(--radius-sharp)" }}>
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" aria-hidden="true">
          <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-text">
        {t.booking.confirmationTitle}
      </h2>
      <p className="mt-2 text-text/70 max-w-md mx-auto">{t.booking.confirmationMessage}</p>

      <dl className="mt-6 text-left max-w-sm mx-auto space-y-2 text-sm text-text/80 border-t border-text/10 pt-4">
        <div className="flex justify-between">
          <dt className="font-medium">{t.booking.bookingIdLabel}</dt>
          <dd className="font-mono">{response.id}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="font-medium">{t.booking.bookingStatusLabel}</dt>
          <dd className="capitalize">{response.status}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="font-medium">{t.booking.reviewTrip}</dt>
          <dd className="text-right">
            {trip.pickupArea} → {trip.dropoffArea}
            <br />
            {trip.pickupDate} {trip.pickupTime}
            {trip.tripType && <> · {tripTypeLabel(t, trip.tripType)}</>}
          </dd>
        </div>
        {vehicle && (
          <div className="flex justify-between">
            <dt className="font-medium">{t.booking.reviewVehicle}</dt>
            <dd className="text-right">
              {vehicle.name}
              <br />
              {categoryLabel(t, vehicle.category)} · {formatBDT(vehicle.pricePerDay)}
              {t.common.perDay}
            </dd>
          </div>
        )}
        <div className="flex justify-between">
          <dt className="font-medium">{t.booking.reviewCustomer}</dt>
          <dd className="text-right">
            {customer.name}
            <br />
            {customer.phone}
          </dd>
        </div>
      </dl>

      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <button
          type="button"
          onClick={onBookAnother}
          className="btn-hard inline-flex min-h-11 items-center justify-center bg-primary px-5 py-2.5 text-sm font-semibold text-text-inverse"
          style={{ borderRadius: "var(--radius-sharp)" }}
        >
          {t.booking.bookAnother}
        </button>
        <Link
          href="/"
          className="inline-flex min-h-11 items-center justify-center border border-text/30 px-5 py-2.5 text-sm font-semibold text-text hover:bg-text/5 transition-colors duration-150 ease-out"
          style={{ borderRadius: "var(--radius-sharp)" }}
        >
          {t.nav.home}
        </Link>
      </div>
    </div>
  );
}
