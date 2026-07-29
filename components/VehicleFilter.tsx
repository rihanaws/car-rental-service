"use client";

import { useI18n } from "@/i18n/useI18n";
import { tripTypeLabel, categoryLabel } from "@/lib/i18nHelpers";
import type { TripType, VehicleCategory } from "@/lib/types";

export type PriceBand = "all" | "low" | "mid" | "high";

export interface FleetFilters {
  category: VehicleCategory | "all";
  tripType: TripType | "all";
  priceBand: PriceBand;
}

const CATEGORIES: VehicleCategory[] = ["sedan", "suv", "microbus", "luxury"];
const TRIP_TYPES: TripType[] = ["hourly", "daily", "one-way", "round-trip"];

export function VehicleFilter({
  filters,
  onChange,
}: {
  filters: FleetFilters;
  onChange: (filters: FleetFilters) => void;
}) {
  const { t } = useI18n();

  return (
    <div className="card-hard bg-surface p-4 sm:p-5 grid gap-4 sm:grid-cols-3" style={{ borderRadius: "var(--radius-sharp)" }}>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="filter-category" className="text-sm font-medium text-text">
          {t.fleet.filterCategory}
        </label>
        <select
          id="filter-category"
          value={filters.category}
          onChange={(e) => onChange({ ...filters, category: e.target.value as FleetFilters["category"] })}
          className="min-h-11 border border-text/20 bg-white px-3 text-sm text-text"
          style={{ borderRadius: "var(--radius-sharp)" }}
        >
          <option value="all">{t.fleet.allCategories}</option>
          {CATEGORIES.map((c) => (
            <option key={c} value={c}>
              {categoryLabel(t, c)}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="filter-trip-type" className="text-sm font-medium text-text">
          {t.fleet.filterTripType}
        </label>
        <select
          id="filter-trip-type"
          value={filters.tripType}
          onChange={(e) => onChange({ ...filters, tripType: e.target.value as FleetFilters["tripType"] })}
          className="min-h-11 border border-text/20 bg-white px-3 text-sm text-text"
          style={{ borderRadius: "var(--radius-sharp)" }}
        >
          <option value="all">{t.fleet.allTripTypes}</option>
          {TRIP_TYPES.map((tt) => (
            <option key={tt} value={tt}>
              {tripTypeLabel(t, tt)}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="filter-price-band" className="text-sm font-medium text-text">
          {t.fleet.filterPriceBand}
        </label>
        <select
          id="filter-price-band"
          value={filters.priceBand}
          onChange={(e) => onChange({ ...filters, priceBand: e.target.value as PriceBand })}
          className="min-h-11 border border-text/20 bg-white px-3 text-sm text-text"
          style={{ borderRadius: "var(--radius-sharp)" }}
        >
          <option value="all">{t.fleet.allPriceBands}</option>
          <option value="low">{t.fleet.priceBandLow}</option>
          <option value="mid">{t.fleet.priceBandMid}</option>
          <option value="high">{t.fleet.priceBandHigh}</option>
        </select>
      </div>
    </div>
  );
}

export function matchesFilters(
  vehicle: { category: VehicleCategory; tripTypes: TripType[]; pricePerDay: number },
  filters: FleetFilters
): boolean {
  if (filters.category !== "all" && vehicle.category !== filters.category) return false;
  if (filters.tripType !== "all" && !vehicle.tripTypes.includes(filters.tripType)) return false;
  if (filters.priceBand === "low" && vehicle.pricePerDay >= 6000) return false;
  if (filters.priceBand === "mid" && (vehicle.pricePerDay < 6000 || vehicle.pricePerDay > 10000)) return false;
  if (filters.priceBand === "high" && vehicle.pricePerDay <= 10000) return false;
  return true;
}
