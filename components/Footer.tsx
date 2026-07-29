"use client";

import Link from "next/link";
import { useI18n } from "@/i18n/useI18n";

const WHATSAPP_NUMBER = "8801711234567";

export function Footer() {
  const { t } = useI18n();

  const links = [
    { href: "/", label: t.nav.home },
    { href: "/fleet", label: t.nav.fleet },
    { href: "/services", label: t.nav.services },
    { href: "/pricing", label: t.nav.pricing },
    { href: "/about", label: t.nav.about },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <footer className="bg-background border-t border-text-inverse/10 mt-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 grid gap-10 md:grid-cols-3">
        <div>
          <p className="font-[family-name:var(--font-heading)] text-lg font-semibold text-text-inverse">
            ঢাকা <span className="text-accent">Car Rental</span>
          </p>
          <p className="mt-3 text-sm text-text-inverse/70 max-w-xs">{t.footer.tagline}</p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-accent">
            {t.footer.quickLinks}
          </h2>
          <ul className="mt-4 space-y-2">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-text-inverse/80 hover:text-accent transition-colors duration-150 ease-out"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-accent">
            {t.footer.contactUs}
          </h2>
          <address className="mt-4 not-italic space-y-2 text-sm text-text-inverse/80">
            <p>{t.footer.address}</p>
            <p>
              <a
                href={`tel:${t.footer.phone.replace(/\s|-/g, "")}`}
                className="hover:text-accent transition-colors duration-150 ease-out"
              >
                {t.footer.phone}
              </a>
            </p>
            <p>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors duration-150 ease-out"
              >
                {t.footer.whatsapp}
              </a>
            </p>
            <p>
              <a
                href={`mailto:${t.footer.email}`}
                className="hover:text-accent transition-colors duration-150 ease-out"
              >
                {t.footer.email}
              </a>
            </p>
            <p className="pt-2 text-text-inverse/60">
              {t.footer.hours}: {t.footer.hoursValue}
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-text-inverse/10 py-4">
        <p className="text-center text-xs text-text-inverse/50">
          © {new Date().getFullYear()} Dhaka Car Rental. {t.footer.rightsReserved}
        </p>
      </div>
    </footer>
  );
}
