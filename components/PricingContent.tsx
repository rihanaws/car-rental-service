"use client";

import { useI18n } from "@/i18n/useI18n";
import { categoryLabel, formatBDT } from "@/lib/i18nHelpers";
import { vehicles } from "@/data/vehicles";
import type { VehicleCategory } from "@/lib/types";

const CATEGORIES: VehicleCategory[] = ["sedan", "suv", "microbus", "luxury"];

function categoryStats(category: VehicleCategory) {
  const inCategory = vehicles.filter((v) => v.category === category);
  const minPrice = Math.min(...inCategory.map((v) => v.pricePerDay));
  const maxSeats = Math.max(...inCategory.map((v) => v.seats));
  const minSeats = Math.min(...inCategory.map((v) => v.seats));
  return { minPrice, seatsLabel: minSeats === maxSeats ? `${minSeats}` : `${minSeats}–${maxSeats}` };
}

export function PricingContent() {
  const { t } = useI18n();

  const policies = [
    { title: t.pricing.fuelPolicyTitle, desc: t.pricing.fuelPolicyDesc },
    { title: t.pricing.overtimeTitle, desc: t.pricing.overtimeDesc },
    { title: t.pricing.driverAllowanceTitle, desc: t.pricing.driverAllowanceDesc },
    { title: t.pricing.cancellationTitle, desc: t.pricing.cancellationDesc },
  ];

  return (
    <div className="bg-background">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-10 md:py-14">
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-semibold text-text-inverse">
          {t.pricing.pageTitle}
        </h1>
        <p className="mt-2 text-text-inverse/70">{t.pricing.pageSubtitle}</p>

        <div className="mt-8 overflow-x-auto card-hard bg-surface" style={{ borderRadius: "var(--radius-sharp)" }}>
          <table className="w-full text-sm text-left">
            <caption className="sr-only">{t.pricing.pageTitle}</caption>
            <thead>
              <tr className="border-b border-text/15 bg-text/5">
                <th scope="col" className="px-4 py-3 font-semibold text-text">
                  {t.pricing.tableCategory}
                </th>
                <th scope="col" className="px-4 py-3 font-semibold text-text">
                  {t.pricing.tableSeats}
                </th>
                <th scope="col" className="px-4 py-3 font-semibold text-text">
                  {t.pricing.tableStartingRate}
                </th>
                <th scope="col" className="px-4 py-3 font-semibold text-text">
                  {t.pricing.tableUnit}
                </th>
              </tr>
            </thead>
            <tbody>
              {CATEGORIES.map((category) => {
                const stats = categoryStats(category);
                return (
                  <tr key={category} className="border-b border-text/10 last:border-0">
                    <th scope="row" className="px-4 py-3 font-medium text-text">
                      {categoryLabel(t, category)}
                    </th>
                    <td className="px-4 py-3 text-text/80">{stats.seatsLabel}</td>
                    <td className="px-4 py-3 text-text/80">{formatBDT(stats.minPrice)}</td>
                    <td className="px-4 py-3 text-text/80">{t.common.perDay.replace("/", "")}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <h2 className="mt-12 font-[family-name:var(--font-heading)] text-2xl font-semibold text-text-inverse">
          {t.pricing.policiesTitle}
        </h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {policies.map((policy) => (
            <div
              key={policy.title}
              className="card-hard bg-surface p-5"
              style={{ borderRadius: "var(--radius-sharp)" }}
            >
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-text">
                {policy.title}
              </h3>
              <p className="mt-2 text-sm text-text/70">{policy.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
