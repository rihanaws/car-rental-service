"use client";

import { useI18n } from "@/i18n/useI18n";
import { Hero } from "@/components/Hero";
import { ServiceCard } from "@/components/ServiceCard";
import { StickyBookBar } from "@/components/StickyBookBar";
import { ShieldIcon, BadgeCheckIcon, TagIcon, ClockIcon } from "@/components/icons/TrustIcons";
import { services } from "@/data/services";

export function HomeContent() {
  const { t } = useI18n();

  const trustItems = [
    { Icon: ShieldIcon, title: t.home.trustSafety, desc: t.home.trustSafetyDesc },
    { Icon: BadgeCheckIcon, title: t.home.trustDrivers, desc: t.home.trustDriversDesc },
    { Icon: TagIcon, title: t.home.trustPricing, desc: t.home.trustPricingDesc },
    { Icon: ClockIcon, title: t.home.trustSupport, desc: t.home.trustSupportDesc },
  ];

  return (
    <>
      <Hero />

      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 md:py-16">
          <div className="mb-8">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-semibold text-text">
              {t.home.servicesTitle}
            </h2>
            <p className="mt-2 text-text/70">{t.home.servicesSubtitle}</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 md:py-16">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-semibold text-text-inverse mb-8">
            {t.home.trustTitle}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trustItems.map((item) => (
              <div key={item.title} className="flex flex-col gap-3">
                <item.Icon className="h-10 w-10 text-accent" />
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-text-inverse">
                  {item.title}
                </h3>
                <p className="text-sm text-text-inverse/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-20 md:hidden" aria-hidden="true" />
      <StickyBookBar />
    </>
  );
}
