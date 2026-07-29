"use client";

import Link from "next/link";
import { useI18n } from "@/i18n/useI18n";
import { VehicleImagePlaceholder } from "@/components/VehicleImagePlaceholder";
import { categoryLabel, formatBDT } from "@/lib/i18nHelpers";
import type { Vehicle } from "@/lib/types";

export function FleetCard({ vehicle }: { vehicle: Vehicle }) {
  const { t } = useI18n();

  return (
    <article
      className="card-hard bg-surface flex flex-col overflow-hidden"
      style={{ borderRadius: "var(--radius-media)" }}
    >
      <VehicleImagePlaceholder
        placeholderKey={vehicle.imagePlaceholder}
        alt={vehicle.imageAlt}
        className="h-40 w-full"
      />
      <div className="p-4 flex flex-col flex-1 gap-3">
        <div>
          <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-text">
            {vehicle.name}
          </h3>
          <p className="text-xs uppercase tracking-wide text-primary font-medium mt-1">
            {categoryLabel(t, vehicle.category)}
          </p>
        </div>

        <dl className="grid grid-cols-3 gap-2 text-xs text-text/70">
          <div>
            <dt className="font-medium text-text/50">{t.common.seats}</dt>
            <dd>{vehicle.seats}</dd>
          </div>
          <div>
            <dt className="font-medium text-text/50">{t.common.transmission}</dt>
            <dd>{vehicle.transmission === "automatic" ? t.common.automatic : t.common.manual}</dd>
          </div>
          <div>
            <dt className="font-medium text-text/50">{t.common.acLabel}</dt>
            <dd>{vehicle.ac ? t.common.acAvailable : t.common.noAc}</dd>
          </div>
        </dl>

        <div className="mt-auto flex items-center justify-between pt-2">
          <p className="text-text font-semibold">
            <span className="text-xs font-normal text-text/60">{t.common.from} </span>
            {formatBDT(vehicle.pricePerDay)}
            <span className="text-xs font-normal text-text/60">{t.common.perDay}</span>
          </p>
        </div>

        <Link
          href={`/booking?vehicleId=${vehicle.id}`}
          className="btn-hard inline-flex min-h-11 items-center justify-center bg-primary px-4 py-2 text-sm font-semibold text-text-inverse"
          style={{ borderRadius: "var(--radius-sharp)" }}
        >
          {t.common.requestThisCar}
        </Link>
      </div>
    </article>
  );
}
