"use client";

import { useI18n } from "@/i18n/useI18n";
import { VehicleImagePlaceholder } from "@/components/VehicleImagePlaceholder";
import { categoryLabel, formatBDT } from "@/lib/i18nHelpers";
import { vehicles } from "@/data/vehicles";
import type { BookingTripDetails } from "@/lib/types";

export function StepVehicle({
  trip,
  selectedVehicleId,
  error,
  onSelect,
}: {
  trip: Partial<BookingTripDetails>;
  selectedVehicleId?: string;
  error?: string;
  onSelect: (vehicleId: string) => void;
}) {
  const { t } = useI18n();

  const matching = trip.tripType
    ? vehicles.filter((v) => v.tripTypes.includes(trip.tripType!))
    : vehicles;

  return (
    <div>
      <p className="text-text-inverse/70 text-sm mb-4">{t.booking.vehicleSelectSubtitle}</p>
      {error && <p className="text-sm text-warning mb-3">{error}</p>}

      {matching.length === 0 ? (
        <p className="text-text-inverse/70">{t.booking.noVehiclesMatch}</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {matching.map((vehicle) => {
            const selected = vehicle.id === selectedVehicleId;
            return (
              <button
                key={vehicle.id}
                type="button"
                onClick={() => onSelect(vehicle.id)}
                aria-pressed={selected}
                className={`text-left card-hard bg-surface overflow-hidden transition-transform duration-150 ease-out ${
                  selected ? "ring-2 ring-accent" : ""
                }`}
                style={{ borderRadius: "var(--radius-media)" }}
              >
                <VehicleImagePlaceholder
                  placeholderKey={vehicle.imagePlaceholder}
                  alt={vehicle.imageAlt}
                  className="h-28 w-full"
                />
                <div className="p-3">
                  <p className="font-[family-name:var(--font-heading)] font-semibold text-text">
                    {vehicle.name}
                  </p>
                  <p className="text-xs text-primary uppercase tracking-wide mt-0.5">
                    {categoryLabel(t, vehicle.category)}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-text">
                    {t.common.from} {formatBDT(vehicle.pricePerDay)}
                    <span className="text-xs font-normal text-text/60">{t.common.perDay}</span>
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
