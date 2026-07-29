"use client";

import Link from "next/link";
import { useI18n } from "@/i18n/useI18n";
import { serviceIconMap } from "@/components/icons/ServiceIcons";
import { StickyBookBar } from "@/components/StickyBookBar";
import { services } from "@/data/services";
import { formatBDT } from "@/lib/i18nHelpers";
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

function unitLabel(t: ReturnType<typeof useI18n>["t"], unit: Service["rateUnit"]) {
  if (unit === "day") return t.common.perDay;
  if (unit === "hour") return t.common.perHour;
  return t.common.perTrip;
}

export function ServicesContent() {
  const { t, lang } = useI18n();

  return (
    <div className="bg-background">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-10 md:py-14">
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-semibold text-text-inverse">
          {t.services.pageTitle}
        </h1>
        <p className="mt-2 text-text-inverse/70">{t.services.pageSubtitle}</p>

        <div className="mt-10 flex flex-col gap-12">
          {services.map((service) => {
            const Icon = serviceIconMap[service.icon];
            return (
              <section
                key={service.id}
                id={service.id}
                className="card-hard bg-surface p-5 sm:p-8 scroll-mt-24"
                style={{ borderRadius: "var(--radius-sharp)" }}
              >
                <div className="flex items-start gap-4">
                  <div className="text-primary shrink-0">
                    <Icon className="h-12 w-12" />
                  </div>
                  <div>
                    <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-text">
                      {t.services[NAME_KEY[service.id]]}
                    </h2>
                    <p className="mt-2 text-text/70">{t.services[DESC_KEY[service.id]]}</p>
                    <p className="mt-3 font-semibold text-text">
                      {t.services.startingAt} {formatBDT(service.startingRateBDT)}
                      <span className="text-sm font-normal text-text/60">
                        {unitLabel(t, service.rateUnit)}
                      </span>
                    </p>
                  </div>
                </div>

                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-success">
                      {t.services.inclusionsTitle}
                    </h3>
                    <ul className="mt-2 space-y-1.5 text-sm text-text/80 list-disc list-inside">
                      {service.inclusions.map((item) => (
                        <li key={item.en}>{lang === "en" ? item.en : item.bn}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-warning">
                      {t.services.exclusionsTitle}
                    </h3>
                    <ul className="mt-2 space-y-1.5 text-sm text-text/80 list-disc list-inside">
                      {service.exclusions.map((item) => (
                        <li key={item.en}>{lang === "en" ? item.en : item.bn}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/booking"
                    className="btn-hard inline-flex min-h-11 items-center justify-center bg-primary px-5 py-2.5 text-sm font-semibold text-text-inverse"
                    style={{ borderRadius: "var(--radius-sharp)" }}
                  >
                    {t.common.bookNow}
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex min-h-11 items-center justify-center border border-text/30 px-5 py-2.5 text-sm font-semibold text-text hover:bg-text/5 transition-colors duration-150 ease-out"
                    style={{ borderRadius: "var(--radius-sharp)" }}
                  >
                    {t.common.getQuote}
                  </Link>
                </div>
              </section>
            );
          })}
        </div>
      </div>

      <div className="h-20 md:hidden" aria-hidden="true" />
      <StickyBookBar />
    </div>
  );
}
