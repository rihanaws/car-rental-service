"use client";

import { useMemo, useState } from "react";
import { useI18n } from "@/i18n/useI18n";
import { FleetCard } from "@/components/FleetCard";
import { VehicleFilter, matchesFilters, type FleetFilters } from "@/components/VehicleFilter";
import { StickyBookBar } from "@/components/StickyBookBar";
import { vehicles } from "@/data/vehicles";

export function FleetContent() {
  const { t } = useI18n();
  const [filters, setFilters] = useState<FleetFilters>({
    category: "all",
    tripType: "all",
    priceBand: "all",
  });

  const filtered = useMemo(
    () => vehicles.filter((v) => matchesFilters(v, filters)),
    [filters]
  );

  return (
    <div className="bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 md:py-14">
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-semibold text-text-inverse">
          {t.fleet.pageTitle}
        </h1>
        <p className="mt-2 text-text-inverse/70">{t.fleet.pageSubtitle}</p>

        <div className="mt-8">
          <VehicleFilter filters={filters} onChange={setFilters} />
        </div>

        <p className="mt-4 text-sm text-text-inverse/60">
          {filtered.length} {t.fleet.resultsCount}
        </p>

        {filtered.length === 0 ? (
          <p className="mt-10 text-text-inverse/70">{t.fleet.noResults}</p>
        ) : (
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((vehicle) => (
              <FleetCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
        )}
      </div>

      <div className="h-20 md:hidden" aria-hidden="true" />
      <StickyBookBar />
    </div>
  );
}
