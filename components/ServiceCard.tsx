"use client";

import Link from "next/link";
import { useI18n } from "@/i18n/useI18n";
import { serviceIconMap } from "@/components/icons/ServiceIcons";
import type { Service } from "@/lib/types";

const NAME_KEY: Record<Service["id"], "airportTransferName" | "cityRideName" | "outstationTripName" | "weddingCarName" | "corporatePackageName"> = {
  "airport-transfer": "airportTransferName",
  "city-ride": "cityRideName",
  "outstation-trip": "outstationTripName",
  "wedding-car": "weddingCarName",
  "corporate-package": "corporatePackageName",
};

const DESC_KEY: Record<Service["id"], "airportTransferDesc" | "cityRideDesc" | "outstationTripDesc" | "weddingCarDesc" | "corporatePackageDesc"> = {
  "airport-transfer": "airportTransferDesc",
  "city-ride": "cityRideDesc",
  "outstation-trip": "outstationTripDesc",
  "wedding-car": "weddingCarDesc",
  "corporate-package": "corporatePackageDesc",
};

export function ServiceCard({ service }: { service: Service }) {
  const { t } = useI18n();
  const Icon = serviceIconMap[service.icon];
  const name = t.services[NAME_KEY[service.id]];
  const desc = t.services[DESC_KEY[service.id]];

  return (
    <article
      className="card-hard bg-surface flex flex-col gap-3 p-5"
      style={{ borderRadius: "var(--radius-sharp)" }}
    >
      <div className="text-primary">
        <Icon className="h-10 w-10" />
      </div>
      <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-text">
        {name}
      </h3>
      <p className="text-sm text-text/70 flex-1">{desc}</p>
      <Link
        href={`/services#${service.id}`}
        className="text-sm font-semibold text-primary hover:underline underline-offset-4 transition-colors duration-150 ease-out"
      >
        {t.common.viewDetails} →
      </Link>
    </article>
  );
}
