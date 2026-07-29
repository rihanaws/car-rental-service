"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useI18n } from "@/i18n/useI18n";
import { validateTripDetails } from "@/lib/validation";
import { tripTypeLabel } from "@/lib/i18nHelpers";
import type { BookingTripDetails, TripType } from "@/lib/types";

const TRIP_TYPES: TripType[] = ["hourly", "daily", "one-way", "round-trip"];

export function QuickBookingWidget() {
  const { t } = useI18n();
  const router = useRouter();

  const [trip, setTrip] = useState<Partial<BookingTripDetails>>({
    tripType: "daily",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const isRoundTrip = trip.tripType === "round-trip";

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const result = validateTripDetails(trip, t.booking.validation);
    setErrors(result.errors);
    if (!result.valid) return;

    const params = new URLSearchParams();
    Object.entries(trip).forEach(([key, value]) => {
      if (value) params.set(key, String(value));
    });
    router.push(`/booking?${params.toString()}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="card-hard bg-surface p-5 sm:p-6 flex flex-col gap-4"
      style={{ borderRadius: "var(--radius-sharp)" }}
      noValidate
    >
      <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-text">
        {t.home.quickBookingTitle}
      </h2>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="qb-pickup-area" className="text-sm font-medium text-text">
            {t.home.pickupArea}
          </label>
          <input
            id="qb-pickup-area"
            type="text"
            placeholder={t.home.pickupAreaPlaceholder}
            value={trip.pickupArea ?? ""}
            onChange={(e) => setTrip((v) => ({ ...v, pickupArea: e.target.value }))}
            className="min-h-11 border border-text/20 bg-white px-3 text-sm text-text"
            style={{ borderRadius: "var(--radius-sharp)" }}
            aria-invalid={Boolean(errors.pickupArea)}
            aria-describedby={errors.pickupArea ? "qb-pickup-area-error" : undefined}
          />
          {errors.pickupArea && (
            <p id="qb-pickup-area-error" className="text-xs text-primary">
              {errors.pickupArea}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="qb-dropoff-area" className="text-sm font-medium text-text">
            {t.home.dropoffArea}
          </label>
          <input
            id="qb-dropoff-area"
            type="text"
            placeholder={t.home.dropoffAreaPlaceholder}
            value={trip.dropoffArea ?? ""}
            onChange={(e) => setTrip((v) => ({ ...v, dropoffArea: e.target.value }))}
            className="min-h-11 border border-text/20 bg-white px-3 text-sm text-text"
            style={{ borderRadius: "var(--radius-sharp)" }}
            aria-invalid={Boolean(errors.dropoffArea)}
            aria-describedby={errors.dropoffArea ? "qb-dropoff-area-error" : undefined}
          />
          {errors.dropoffArea && (
            <p id="qb-dropoff-area-error" className="text-xs text-primary">
              {errors.dropoffArea}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="qb-pickup-date" className="text-sm font-medium text-text">
            {t.home.pickupDate}
          </label>
          <input
            id="qb-pickup-date"
            type="date"
            value={trip.pickupDate ?? ""}
            onChange={(e) => setTrip((v) => ({ ...v, pickupDate: e.target.value }))}
            className="min-h-11 border border-text/20 bg-white px-3 text-sm text-text"
            style={{ borderRadius: "var(--radius-sharp)" }}
            aria-invalid={Boolean(errors.pickupDate)}
          />
          {errors.pickupDate && <p className="text-xs text-primary">{errors.pickupDate}</p>}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="qb-pickup-time" className="text-sm font-medium text-text">
            {t.home.pickupTime}
          </label>
          <input
            id="qb-pickup-time"
            type="time"
            value={trip.pickupTime ?? ""}
            onChange={(e) => setTrip((v) => ({ ...v, pickupTime: e.target.value }))}
            className="min-h-11 border border-text/20 bg-white px-3 text-sm text-text"
            style={{ borderRadius: "var(--radius-sharp)" }}
            aria-invalid={Boolean(errors.pickupTime)}
          />
          {errors.pickupTime && <p className="text-xs text-primary">{errors.pickupTime}</p>}
        </div>

        {isRoundTrip && (
          <>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="qb-return-date" className="text-sm font-medium text-text">
                {t.home.returnDate}
              </label>
              <input
                id="qb-return-date"
                type="date"
                value={trip.returnDate ?? ""}
                onChange={(e) => setTrip((v) => ({ ...v, returnDate: e.target.value }))}
                className="min-h-11 border border-text/20 bg-white px-3 text-sm text-text"
                style={{ borderRadius: "var(--radius-sharp)" }}
                aria-invalid={Boolean(errors.returnDate)}
              />
              {errors.returnDate && <p className="text-xs text-primary">{errors.returnDate}</p>}
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="qb-return-time" className="text-sm font-medium text-text">
                {t.home.returnTime}
              </label>
              <input
                id="qb-return-time"
                type="time"
                value={trip.returnTime ?? ""}
                onChange={(e) => setTrip((v) => ({ ...v, returnTime: e.target.value }))}
                className="min-h-11 border border-text/20 bg-white px-3 text-sm text-text"
                style={{ borderRadius: "var(--radius-sharp)" }}
                aria-invalid={Boolean(errors.returnTime)}
              />
              {errors.returnTime && <p className="text-xs text-primary">{errors.returnTime}</p>}
            </div>
          </>
        )}

        <div className="flex flex-col gap-1.5 sm:col-span-2">
          <label htmlFor="qb-trip-type" className="text-sm font-medium text-text">
            {t.home.tripType}
          </label>
          <select
            id="qb-trip-type"
            value={trip.tripType}
            onChange={(e) => setTrip((v) => ({ ...v, tripType: e.target.value as TripType }))}
            className="min-h-11 border border-text/20 bg-white px-3 text-sm text-text"
            style={{ borderRadius: "var(--radius-sharp)" }}
          >
            {TRIP_TYPES.map((tt) => (
              <option key={tt} value={tt}>
                {tripTypeLabel(t, tt)}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="btn-hard min-h-11 bg-primary px-4 py-3 text-sm font-semibold text-text-inverse"
        style={{ borderRadius: "var(--radius-sharp)" }}
      >
        {t.home.findVehicles}
      </button>
    </form>
  );
}
