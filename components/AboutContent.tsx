"use client";

import { useI18n } from "@/i18n/useI18n";
import { ShieldIcon, ClockIcon, BadgeCheckIcon } from "@/components/icons/TrustIcons";

export function AboutContent() {
  const { t } = useI18n();

  const differentiators = [
    { Icon: ClockIcon, title: t.about.diffPunctuality, desc: t.about.diffPunctualityDesc },
    { Icon: ShieldIcon, title: t.about.diffSafety, desc: t.about.diffSafetyDesc },
    { Icon: BadgeCheckIcon, title: t.about.diffCorporate, desc: t.about.diffCorporateDesc },
  ];

  const stats = [
    { label: t.about.yearsOperatingLabel, value: t.about.yearsOperatingValue },
    { label: t.about.fleetSizeLabel, value: t.about.fleetSizeValue },
    { label: t.about.serviceAreasLabel, value: t.about.serviceAreasValue },
  ];

  return (
    <div className="bg-background">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-10 md:py-14">
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-semibold text-text-inverse">
          {t.about.pageTitle}
        </h1>
        <p className="mt-2 text-text-inverse/70">{t.about.pageSubtitle}</p>

        <section className="mt-10 card-hard bg-surface p-6 sm:p-8" style={{ borderRadius: "var(--radius-sharp)" }}>
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-text">
            {t.about.storyTitle}
          </h2>
          <p className="mt-3 text-text/80 leading-relaxed">{t.about.storyBody}</p>
        </section>

        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="card-hard bg-surface p-5 text-center"
              style={{ borderRadius: "var(--radius-sharp)" }}
            >
              <p className="text-2xl font-[family-name:var(--font-heading)] font-semibold text-primary">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-text/70">{stat.label}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-12 font-[family-name:var(--font-heading)] text-2xl font-semibold text-text-inverse">
          {t.about.differentiatorsTitle}
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {differentiators.map((item) => (
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
    </div>
  );
}
