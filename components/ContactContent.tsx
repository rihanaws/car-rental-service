"use client";

import { useState, type FormEvent } from "react";
import { useI18n } from "@/i18n/useI18n";
import { isValidEmail, isValidBangladeshPhone } from "@/lib/validation";

const WHATSAPP_NUMBER = "8801711234567";

type Status = "idle" | "sending" | "success" | "error";

export function ContactContent() {
  const { t } = useI18n();
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");

  // NOTE: This posts nowhere real today — it's a client-side mock submit.
  // A future iteration could hit a dedicated `/api/contact` route (mirroring
  // app/api/bookings/route.ts) once the business wants inbound message
  // persistence or email/SMS forwarding.
  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const fieldErrors: Record<string, string> = {};

    if (!form.name.trim()) fieldErrors.name = t.booking.validation.nameRequired;
    if (!form.phone.trim()) fieldErrors.phone = t.booking.validation.phoneRequired;
    else if (!isValidBangladeshPhone(form.phone)) fieldErrors.phone = t.booking.validation.phoneInvalid;
    if (!form.email.trim()) fieldErrors.email = t.booking.validation.emailRequired;
    else if (!isValidEmail(form.email)) fieldErrors.email = t.booking.validation.emailInvalid;
    if (!form.message.trim()) fieldErrors.message = t.common.required;

    setErrors(fieldErrors);
    if (Object.keys(fieldErrors).length > 0) return;

    setStatus("sending");
    try {
      // Simulated network latency for a mock submit.
      await new Promise((resolve) => setTimeout(resolve, 600));
      console.log("[dhaka-car-rental] contact message (mock submit):", form);
      setStatus("success");
      setForm({ name: "", phone: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="bg-background">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-10 md:py-14">
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-semibold text-text-inverse">
          {t.contact.pageTitle}
        </h1>
        <p className="mt-2 text-text-inverse/70">{t.contact.pageSubtitle}</p>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <form
            onSubmit={handleSubmit}
            className="card-hard bg-surface p-6 flex flex-col gap-4"
            style={{ borderRadius: "var(--radius-sharp)" }}
            noValidate
          >
            <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-text">
              {t.contact.formTitle}
            </h2>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="ct-name" className="text-sm font-medium text-text">
                {t.contact.name}
              </label>
              <input
                id="ct-name"
                type="text"
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                className="min-h-11 border border-text/20 bg-white px-3 text-sm text-text"
                style={{ borderRadius: "var(--radius-sharp)" }}
                aria-invalid={Boolean(errors.name)}
              />
              {errors.name && <p className="text-xs text-primary">{errors.name}</p>}
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="ct-phone" className="text-sm font-medium text-text">
                {t.contact.phone}
              </label>
              <input
                id="ct-phone"
                type="tel"
                placeholder={t.common.phoneExamplePlaceholder}
                value={form.phone}
                onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                className="min-h-11 border border-text/20 bg-white px-3 text-sm text-text"
                style={{ borderRadius: "var(--radius-sharp)" }}
                aria-invalid={Boolean(errors.phone)}
              />
              {errors.phone && <p className="text-xs text-primary">{errors.phone}</p>}
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="ct-email" className="text-sm font-medium text-text">
                {t.contact.email}
              </label>
              <input
                id="ct-email"
                type="email"
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                className="min-h-11 border border-text/20 bg-white px-3 text-sm text-text"
                style={{ borderRadius: "var(--radius-sharp)" }}
                aria-invalid={Boolean(errors.email)}
              />
              {errors.email && <p className="text-xs text-primary">{errors.email}</p>}
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="ct-message" className="text-sm font-medium text-text">
                {t.contact.message}
              </label>
              <textarea
                id="ct-message"
                rows={4}
                placeholder={t.contact.messagePlaceholder}
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                className="border border-text/20 bg-white px-3 py-2 text-sm text-text"
                style={{ borderRadius: "var(--radius-sharp)" }}
                aria-invalid={Boolean(errors.message)}
              />
              {errors.message && <p className="text-xs text-primary">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-hard min-h-11 bg-primary px-4 py-2.5 text-sm font-semibold text-text-inverse disabled:opacity-60"
              style={{ borderRadius: "var(--radius-sharp)" }}
            >
              {status === "sending" ? t.contact.sending : t.contact.sendMessage}
            </button>

            {status === "success" && (
              <p role="status" className="text-sm text-success">
                {t.contact.sendSuccess}
              </p>
            )}
            {status === "error" && (
              <p role="alert" className="text-sm text-warning">
                {t.contact.sendError}
              </p>
            )}
          </form>

          <div className="flex flex-col gap-5">
            <div className="card-hard bg-surface p-6" style={{ borderRadius: "var(--radius-sharp)" }}>
              <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-text">
                {t.contact.officeTitle}
              </h2>
              <address className="mt-2 not-italic text-text/80 text-sm">{t.contact.officeAddress}</address>
              <p className="mt-4 text-sm font-medium text-text">{t.contact.openingHoursTitle}</p>
              <p className="text-sm text-text/70">{t.contact.openingHoursValue}</p>
            </div>

            <div className="card-hard bg-surface p-6 flex flex-col gap-3" style={{ borderRadius: "var(--radius-sharp)" }}>
              <a
                href="tel:+8801711234567"
                className="min-h-11 flex items-center justify-center border border-text/20 px-4 text-sm font-semibold text-text hover:bg-text/5 transition-colors duration-150 ease-out"
                style={{ borderRadius: "var(--radius-sharp)" }}
              >
                {t.contact.callUs}
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-11 flex items-center justify-center bg-success text-text-inverse px-4 text-sm font-semibold transition-colors duration-150 ease-out"
                style={{ borderRadius: "var(--radius-sharp)" }}
              >
                {t.contact.whatsappUs}
              </a>
              <a
                href="mailto:hello@dhakacarrental.example"
                className="min-h-11 flex items-center justify-center border border-text/20 px-4 text-sm font-semibold text-text hover:bg-text/5 transition-colors duration-150 ease-out"
                style={{ borderRadius: "var(--radius-sharp)" }}
              >
                {t.contact.emailUs}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
