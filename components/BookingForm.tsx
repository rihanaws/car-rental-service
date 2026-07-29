"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useI18n } from "@/i18n/useI18n";
import { StepTripDetails } from "@/components/booking/StepTripDetails";
import { StepVehicle } from "@/components/booking/StepVehicle";
import { StepCustomerDetails } from "@/components/booking/StepCustomerDetails";
import { StepConfirmation } from "@/components/booking/StepConfirmation";
import {
  validateTripDetails,
  validateVehicleSelection,
  validateCustomerDetails,
} from "@/lib/validation";
import { submitBooking, BookingSubmitError } from "@/lib/booking";
import type {
  BookingCustomerDetails,
  BookingResponse,
  BookingTripDetails,
  TripType,
} from "@/lib/types";

type Step = 1 | 2 | 3 | 4;

export function BookingForm() {
  const { t } = useI18n();
  const searchParams = useSearchParams();

  const [step, setStep] = useState<Step>(1);
  const [trip, setTrip] = useState<Partial<BookingTripDetails>>({});
  const [vehicleId, setVehicleId] = useState<string | undefined>(undefined);
  const [customer, setCustomer] = useState<Partial<BookingCustomerDetails>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [response, setResponse] = useState<BookingResponse | null>(null);

  // Pre-fill from query params (either from Home's quick-booking widget or
  // Fleet's "Request this car" link with ?vehicleId=).
  useEffect(() => {
    const vId = searchParams.get("vehicleId");
    if (vId) setVehicleId(vId);

    const pickupArea = searchParams.get("pickupArea");
    const dropoffArea = searchParams.get("dropoffArea");
    const pickupDate = searchParams.get("pickupDate");
    const pickupTime = searchParams.get("pickupTime");
    const returnDate = searchParams.get("returnDate");
    const returnTime = searchParams.get("returnTime");
    const tripType = searchParams.get("tripType") as TripType | null;

    if (pickupArea || dropoffArea || pickupDate || pickupTime || tripType) {
      setTrip((prev) => ({
        ...prev,
        ...(pickupArea ? { pickupArea } : {}),
        ...(dropoffArea ? { dropoffArea } : {}),
        ...(pickupDate ? { pickupDate } : {}),
        ...(pickupTime ? { pickupTime } : {}),
        ...(returnDate ? { returnDate } : {}),
        ...(returnTime ? { returnTime } : {}),
        ...(tripType ? { tripType } : {}),
      }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const steps: { key: Step; label: string }[] = [
    { key: 1, label: t.booking.stepTripDetails },
    { key: 2, label: t.booking.stepVehicle },
    { key: 3, label: t.booking.stepCustomer },
    { key: 4, label: t.booking.stepConfirmation },
  ];

  function goNextFromTrip() {
    const result = validateTripDetails(trip, t.booking.validation);
    setErrors(result.errors);
    if (result.valid) setStep(2);
  }

  function goNextFromVehicle() {
    const result = validateVehicleSelection(vehicleId, t.booking.validation);
    setErrors(result.errors);
    if (result.valid) setStep(3);
  }

  async function handleFinalSubmit() {
    const result = validateCustomerDetails(customer, t.booking.validation);
    setErrors(result.errors);
    if (!result.valid) return;

    setSubmitting(true);
    setSubmitError(null);
    try {
      const res = await submitBooking({
        trip: trip as BookingTripDetails,
        vehicleId: vehicleId as string,
        customer: customer as BookingCustomerDetails,
      });
      setResponse(res);
      setStep(4);
    } catch (err) {
      if (err instanceof BookingSubmitError) {
        setErrors(err.errors);
        setSubmitError(t.common.validationError);
      } else {
        setSubmitError(t.common.networkError);
      }
    } finally {
      setSubmitting(false);
    }
  }

  function handleBookAnother() {
    setStep(1);
    setTrip({});
    setVehicleId(undefined);
    setCustomer({});
    setErrors({});
    setResponse(null);
    setSubmitError(null);
  }

  return (
    <div>
      <ol className="flex flex-wrap gap-x-6 gap-y-2 mb-8" aria-label={t.booking.pageTitle}>
        {steps.map((s) => (
          <li
            key={s.key}
            aria-current={step === s.key ? "step" : undefined}
            className={`text-sm font-medium flex items-center gap-2 ${
              step >= s.key ? "text-accent" : "text-text-inverse/40"
            }`}
          >
            <span
              className={`flex h-6 w-6 items-center justify-center text-xs font-semibold ${
                step >= s.key ? "bg-accent text-text" : "bg-text-inverse/10 text-text-inverse/60"
              }`}
              style={{ borderRadius: "var(--radius-sharp)" }}
            >
              {s.key}
            </span>
            {s.label}
          </li>
        ))}
      </ol>

      {step === 1 && (
        <div>
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-text-inverse mb-4">
            {t.booking.tripDetailsTitle}
          </h2>
          <StepTripDetails trip={trip} errors={errors} onChange={setTrip} />
          <div className="mt-6 flex justify-end">
            <button
              type="button"
              onClick={goNextFromTrip}
              className="btn-hard min-h-11 bg-primary px-6 py-2.5 text-sm font-semibold text-text-inverse"
              style={{ borderRadius: "var(--radius-sharp)" }}
            >
              {t.common.next}
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-text-inverse mb-4">
            {t.booking.vehicleSelectTitle}
          </h2>
          <StepVehicle
            trip={trip}
            selectedVehicleId={vehicleId}
            error={errors.vehicleId}
            onSelect={setVehicleId}
          />
          <div className="mt-6 flex justify-between">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="min-h-11 border border-text-inverse/30 px-6 py-2.5 text-sm font-semibold text-text-inverse hover:bg-text-inverse/5 transition-colors duration-150 ease-out"
              style={{ borderRadius: "var(--radius-sharp)" }}
            >
              {t.common.back}
            </button>
            <button
              type="button"
              onClick={goNextFromVehicle}
              className="btn-hard min-h-11 bg-primary px-6 py-2.5 text-sm font-semibold text-text-inverse"
              style={{ borderRadius: "var(--radius-sharp)" }}
            >
              {t.common.next}
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-text-inverse mb-4">
            {t.booking.customerDetailsTitle}
          </h2>
          <StepCustomerDetails
            trip={trip}
            vehicleId={vehicleId}
            customer={customer}
            errors={errors}
            onChange={setCustomer}
          />
          {submitError && <p className="mt-4 text-sm text-warning">{submitError}</p>}
          <div className="mt-6 flex justify-between">
            <button
              type="button"
              onClick={() => setStep(2)}
              className="min-h-11 border border-text-inverse/30 px-6 py-2.5 text-sm font-semibold text-text-inverse hover:bg-text-inverse/5 transition-colors duration-150 ease-out"
              style={{ borderRadius: "var(--radius-sharp)" }}
            >
              {t.common.back}
            </button>
            <button
              type="button"
              onClick={handleFinalSubmit}
              disabled={submitting}
              className="btn-hard min-h-11 bg-primary px-6 py-2.5 text-sm font-semibold text-text-inverse disabled:opacity-60"
              style={{ borderRadius: "var(--radius-sharp)" }}
            >
              {submitting ? t.common.submitting : t.booking.confirmAndBook}
            </button>
          </div>
        </div>
      )}

      {step === 4 && response && (
        <StepConfirmation
          response={response}
          trip={trip}
          vehicleId={vehicleId}
          customer={customer}
          onBookAnother={handleBookAnother}
        />
      )}
    </div>
  );
}
