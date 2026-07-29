import type {
  BookingCustomerDetails,
  BookingTripDetails,
  FieldErrors,
  ValidationResult,
} from "@/lib/types";
import type { Translations } from "@/i18n/translations";

const BD_PHONE_REGEX = /^(?:\+?880|0)1[3-9]\d{8}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Pure, testable validation for step 1 of the booking flow (trip details).
 * `messages` is the `booking.validation` slice of the active language
 * dictionary, so error copy stays bilingual without leaking i18n concerns
 * into components.
 */
export function validateTripDetails(
  trip: Partial<BookingTripDetails>,
  messages: Translations["booking"]["validation"]
): ValidationResult {
  const errors: FieldErrors = {};

  if (!trip.pickupArea || trip.pickupArea.trim().length === 0) {
    errors.pickupArea = messages.pickupAreaRequired;
  }
  if (!trip.dropoffArea || trip.dropoffArea.trim().length === 0) {
    errors.dropoffArea = messages.dropoffAreaRequired;
  }
  if (!trip.pickupDate) {
    errors.pickupDate = messages.pickupDateRequired;
  }
  if (!trip.pickupTime) {
    errors.pickupTime = messages.pickupTimeRequired;
  }
  if (!trip.tripType) {
    errors.tripType = messages.tripTypeRequired;
  }

  if (trip.tripType === "round-trip") {
    if (!trip.returnDate) {
      errors.returnDate = messages.returnDateRequired;
    }
    if (!trip.returnTime) {
      errors.returnTime = messages.returnTimeRequired;
    }

    if (trip.pickupDate && trip.pickupTime && trip.returnDate && trip.returnTime) {
      const pickup = new Date(`${trip.pickupDate}T${trip.pickupTime}`);
      const ret = new Date(`${trip.returnDate}T${trip.returnTime}`);
      if (!(ret.getTime() > pickup.getTime())) {
        errors.returnDate = messages.returnBeforePickup;
      }
    }
  }

  return { valid: Object.keys(errors).length === 0, errors };
}

/** Pure, testable validation for step 2 (vehicle selection). */
export function validateVehicleSelection(
  vehicleId: string | undefined,
  messages: Translations["booking"]["validation"]
): ValidationResult {
  const errors: FieldErrors = {};
  if (!vehicleId) {
    errors.vehicleId = messages.vehicleRequired;
  }
  return { valid: Object.keys(errors).length === 0, errors };
}

/** Pure, testable validation for step 3 (customer details). */
export function validateCustomerDetails(
  customer: Partial<BookingCustomerDetails>,
  messages: Translations["booking"]["validation"]
): ValidationResult {
  const errors: FieldErrors = {};

  if (!customer.name || customer.name.trim().length === 0) {
    errors.name = messages.nameRequired;
  }

  if (!customer.phone || customer.phone.trim().length === 0) {
    errors.phone = messages.phoneRequired;
  } else if (!BD_PHONE_REGEX.test(customer.phone.trim())) {
    errors.phone = messages.phoneInvalid;
  }

  if (!customer.email || customer.email.trim().length === 0) {
    errors.email = messages.emailRequired;
  } else if (!EMAIL_REGEX.test(customer.email.trim())) {
    errors.email = messages.emailInvalid;
  }

  return { valid: Object.keys(errors).length === 0, errors };
}

export function isValidBangladeshPhone(phone: string): boolean {
  return BD_PHONE_REGEX.test(phone.trim());
}

export function isValidEmail(email: string): boolean {
  return EMAIL_REGEX.test(email.trim());
}
