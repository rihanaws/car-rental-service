"use client";

import { useI18n } from "@/i18n/useI18n";
import { tripTypeLabel, categoryLabel, formatBDT } from "@/lib/i18nHelpers";
import { getVehicleById } from "@/data/vehicles";
import type { BookingCustomerDetails, BookingTripDetails } from "@/lib/types";

export function StepCustomerDetails({
  trip,
  vehicleId,
  customer,
  errors,
  onChange,
}: {
  trip: Partial<BookingTripDetails>;
  vehicleId?: string;
  customer: Partial<BookingCustomerDetails>;
  errors: Record<string, string>;
  onChange: (customer: Partial<BookingCustomerDetails>) => void;
}) {
  const { t } = useI18n();
  const vehicle = vehicleId ? getVehicleById(vehicleId) : undefined;

  return (
    <div className="grid gap-8 lg:grid-cols-3">
      <div className="lg:col-span-2 grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5 sm:col-span-2">
          <label htmlFor="bk-name" className="text-sm font-medium text-text-inverse">
            {t.booking.fullName}
          </label>
          <input
            id="bk-name"
            type="text"
            value={customer.name ?? ""}
            onChange={(e) => onChange({ ...customer, name: e.target.value })}
            className="min-h-11 border border-text-inverse/20 bg-surface px-3 text-sm text-text"
            style={{ borderRadius: "var(--radius-sharp)" }}
            aria-invalid={Boolean(errors.name)}
          />
          {errors.name && <p className="text-xs text-warning">{errors.name}</p>}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="bk-phone" className="text-sm font-medium text-text-inverse">
            {t.booking.phoneNumber}
          </label>
          <input
            id="bk-phone"
            type="tel"
            placeholder={t.common.phoneExamplePlaceholder}
            value={customer.phone ?? ""}
            onChange={(e) => onChange({ ...customer, phone: e.target.value })}
            className="min-h-11 border border-text-inverse/20 bg-surface px-3 text-sm text-text"
            style={{ borderRadius: "var(--radius-sharp)" }}
            aria-invalid={Boolean(errors.phone)}
          />
          {errors.phone && <p className="text-xs text-warning">{errors.phone}</p>}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="bk-email" className="text-sm font-medium text-text-inverse">
            {t.booking.emailAddress}
          </label>
          <input
            id="bk-email"
            type="email"
            value={customer.email ?? ""}
            onChange={(e) => onChange({ ...customer, email: e.target.value })}
            className="min-h-11 border border-text-inverse/20 bg-surface px-3 text-sm text-text"
            style={{ borderRadius: "var(--radius-sharp)" }}
            aria-invalid={Boolean(errors.email)}
          />
          {errors.email && <p className="text-xs text-warning">{errors.email}</p>}
        </div>

        <div className="flex flex-col gap-1.5 sm:col-span-2">
          <label htmlFor="bk-company" className="text-sm font-medium text-text-inverse">
            {t.booking.companyName} <span className="text-text-inverse/50">({t.common.optional})</span>
          </label>
          <input
            id="bk-company"
            type="text"
            value={customer.company ?? ""}
            onChange={(e) => onChange({ ...customer, company: e.target.value })}
            className="min-h-11 border border-text-inverse/20 bg-surface px-3 text-sm text-text"
            style={{ borderRadius: "var(--radius-sharp)" }}
          />
        </div>

        <div className="flex flex-col gap-1.5 sm:col-span-2">
          <label htmlFor="bk-notes" className="text-sm font-medium text-text-inverse">
            {t.booking.notes} <span className="text-text-inverse/50">({t.common.optional})</span>
          </label>
          <textarea
            id="bk-notes"
            rows={3}
            placeholder={t.booking.notesPlaceholder}
            value={customer.notes ?? ""}
            onChange={(e) => onChange({ ...customer, notes: e.target.value })}
            className="border border-text-inverse/20 bg-surface px-3 py-2 text-sm text-text"
            style={{ borderRadius: "var(--radius-sharp)" }}
          />
        </div>
      </div>

      <aside className="card-hard bg-surface p-5 h-fit" style={{ borderRadius: "var(--radius-sharp)" }}>
        <h3 className="font-[family-name:var(--font-heading)] font-semibold text-text mb-3">
          {t.booking.reviewTitle}
        </h3>
        <dl className="text-sm space-y-2 text-text/80">
          <div>
            <dt className="font-medium text-text/50">{t.booking.reviewTrip}</dt>
            <dd>
              {trip.pickupArea} → {trip.dropoffArea}
            </dd>
            <dd>
              {trip.pickupDate} {trip.pickupTime}
            </dd>
            {trip.tripType && <dd>{tripTypeLabel(t, trip.tripType)}</dd>}
          </div>
          {vehicle && (
            <div>
              <dt className="font-medium text-text/50">{t.booking.reviewVehicle}</dt>
              <dd>
                {vehicle.name} ({categoryLabel(t, vehicle.category)})
              </dd>
              <dd>
                {formatBDT(vehicle.pricePerDay)}
                {t.common.perDay}
              </dd>
            </div>
          )}
        </dl>
      </aside>
    </div>
  );
}
