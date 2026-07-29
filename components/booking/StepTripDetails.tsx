"use client";

import { useI18n } from "@/i18n/useI18n";
import { tripTypeLabel } from "@/lib/i18nHelpers";
import type { BookingTripDetails, TripType } from "@/lib/types";

const TRIP_TYPES: TripType[] = ["hourly", "daily", "one-way", "round-trip"];

export function StepTripDetails({
  trip,
  errors,
  onChange,
}: {
  trip: Partial<BookingTripDetails>;
  errors: Record<string, string>;
  onChange: (trip: Partial<BookingTripDetails>) => void;
}) {
  const { t } = useI18n();
  const isRoundTrip = trip.tripType === "round-trip";

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="bk-pickup-area" className="text-sm font-medium text-text-inverse">
          {t.home.pickupArea}
        </label>
        <input
          id="bk-pickup-area"
          type="text"
          placeholder={t.home.pickupAreaPlaceholder}
          value={trip.pickupArea ?? ""}
          onChange={(e) => onChange({ ...trip, pickupArea: e.target.value })}
          className="min-h-11 border border-text-inverse/20 bg-surface px-3 text-sm text-text"
          style={{ borderRadius: "var(--radius-sharp)" }}
          aria-invalid={Boolean(errors.pickupArea)}
        />
        {errors.pickupArea && <p className="text-xs text-warning">{errors.pickupArea}</p>}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="bk-dropoff-area" className="text-sm font-medium text-text-inverse">
          {t.home.dropoffArea}
        </label>
        <input
          id="bk-dropoff-area"
          type="text"
          placeholder={t.home.dropoffAreaPlaceholder}
          value={trip.dropoffArea ?? ""}
          onChange={(e) => onChange({ ...trip, dropoffArea: e.target.value })}
          className="min-h-11 border border-text-inverse/20 bg-surface px-3 text-sm text-text"
          style={{ borderRadius: "var(--radius-sharp)" }}
          aria-invalid={Boolean(errors.dropoffArea)}
        />
        {errors.dropoffArea && <p className="text-xs text-warning">{errors.dropoffArea}</p>}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="bk-pickup-date" className="text-sm font-medium text-text-inverse">
          {t.home.pickupDate}
        </label>
        <input
          id="bk-pickup-date"
          type="date"
          value={trip.pickupDate ?? ""}
          onChange={(e) => onChange({ ...trip, pickupDate: e.target.value })}
          className="min-h-11 border border-text-inverse/20 bg-surface px-3 text-sm text-text"
          style={{ borderRadius: "var(--radius-sharp)" }}
          aria-invalid={Boolean(errors.pickupDate)}
        />
        {errors.pickupDate && <p className="text-xs text-warning">{errors.pickupDate}</p>}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="bk-pickup-time" className="text-sm font-medium text-text-inverse">
          {t.home.pickupTime}
        </label>
        <input
          id="bk-pickup-time"
          type="time"
          value={trip.pickupTime ?? ""}
          onChange={(e) => onChange({ ...trip, pickupTime: e.target.value })}
          className="min-h-11 border border-text-inverse/20 bg-surface px-3 text-sm text-text"
          style={{ borderRadius: "var(--radius-sharp)" }}
          aria-invalid={Boolean(errors.pickupTime)}
        />
        {errors.pickupTime && <p className="text-xs text-warning">{errors.pickupTime}</p>}
      </div>

      {isRoundTrip && (
        <>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="bk-return-date" className="text-sm font-medium text-text-inverse">
              {t.home.returnDate}
            </label>
            <input
              id="bk-return-date"
              type="date"
              value={trip.returnDate ?? ""}
              onChange={(e) => onChange({ ...trip, returnDate: e.target.value })}
              className="min-h-11 border border-text-inverse/20 bg-surface px-3 text-sm text-text"
              style={{ borderRadius: "var(--radius-sharp)" }}
              aria-invalid={Boolean(errors.returnDate)}
            />
            {errors.returnDate && <p className="text-xs text-warning">{errors.returnDate}</p>}
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="bk-return-time" className="text-sm font-medium text-text-inverse">
              {t.home.returnTime}
            </label>
            <input
              id="bk-return-time"
              type="time"
              value={trip.returnTime ?? ""}
              onChange={(e) => onChange({ ...trip, returnTime: e.target.value })}
              className="min-h-11 border border-text-inverse/20 bg-surface px-3 text-sm text-text"
              style={{ borderRadius: "var(--radius-sharp)" }}
              aria-invalid={Boolean(errors.returnTime)}
            />
            {errors.returnTime && <p className="text-xs text-warning">{errors.returnTime}</p>}
          </div>
        </>
      )}

      <div className="flex flex-col gap-1.5 sm:col-span-2">
        <label htmlFor="bk-trip-type" className="text-sm font-medium text-text-inverse">
          {t.home.tripType}
        </label>
        <select
          id="bk-trip-type"
          value={trip.tripType ?? ""}
          onChange={(e) => onChange({ ...trip, tripType: e.target.value as TripType })}
          className="min-h-11 border border-text-inverse/20 bg-surface px-3 text-sm text-text"
          style={{ borderRadius: "var(--radius-sharp)" }}
          aria-invalid={Boolean(errors.tripType)}
        >
          <option value="" disabled>
            {t.home.tripType}
          </option>
          {TRIP_TYPES.map((tt) => (
            <option key={tt} value={tt}>
              {tripTypeLabel(t, tt)}
            </option>
          ))}
        </select>
        {errors.tripType && <p className="text-xs text-warning">{errors.tripType}</p>}
      </div>
    </div>
  );
}
