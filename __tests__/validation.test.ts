import { describe, test, expect } from "bun:test";
import {
  validateTripDetails,
  validateVehicleSelection,
  validateCustomerDetails,
  isValidBangladeshPhone,
  isValidEmail,
} from "@/lib/validation";
import { translations } from "@/i18n/translations";

const messages = translations.en.booking.validation;

describe("validateTripDetails", () => {
  test("fails when required fields are missing", () => {
    const result = validateTripDetails({}, messages);
    expect(result.valid).toBe(false);
    expect(result.errors.pickupArea).toBe(messages.pickupAreaRequired);
    expect(result.errors.dropoffArea).toBe(messages.dropoffAreaRequired);
    expect(result.errors.pickupDate).toBe(messages.pickupDateRequired);
    expect(result.errors.pickupTime).toBe(messages.pickupTimeRequired);
    expect(result.errors.tripType).toBe(messages.tripTypeRequired);
  });

  test("passes for a valid daily trip", () => {
    const result = validateTripDetails(
      {
        pickupArea: "Gulshan 2",
        dropoffArea: "Banani",
        pickupDate: "2026-08-01",
        pickupTime: "10:00",
        tripType: "daily",
      },
      messages
    );
    expect(result.valid).toBe(true);
    expect(Object.keys(result.errors)).toHaveLength(0);
  });

  test("requires return date/time for round trips", () => {
    const result = validateTripDetails(
      {
        pickupArea: "Gulshan 2",
        dropoffArea: "Banani",
        pickupDate: "2026-08-01",
        pickupTime: "10:00",
        tripType: "round-trip",
      },
      messages
    );
    expect(result.valid).toBe(false);
    expect(result.errors.returnDate).toBe(messages.returnDateRequired);
    expect(result.errors.returnTime).toBe(messages.returnTimeRequired);
  });

  test("rejects a return date/time before pickup", () => {
    const result = validateTripDetails(
      {
        pickupArea: "Gulshan 2",
        dropoffArea: "Banani",
        pickupDate: "2026-08-05",
        pickupTime: "10:00",
        returnDate: "2026-08-04",
        returnTime: "10:00",
        tripType: "round-trip",
      },
      messages
    );
    expect(result.valid).toBe(false);
    expect(result.errors.returnDate).toBe(messages.returnBeforePickup);
  });

  test("accepts a return date/time after pickup", () => {
    const result = validateTripDetails(
      {
        pickupArea: "Gulshan 2",
        dropoffArea: "Banani",
        pickupDate: "2026-08-04",
        pickupTime: "10:00",
        returnDate: "2026-08-05",
        returnTime: "09:00",
        tripType: "round-trip",
      },
      messages
    );
    expect(result.valid).toBe(true);
  });
});

describe("validateVehicleSelection", () => {
  test("fails when no vehicle is selected", () => {
    const result = validateVehicleSelection(undefined, messages);
    expect(result.valid).toBe(false);
    expect(result.errors.vehicleId).toBe(messages.vehicleRequired);
  });

  test("passes when a vehicle is selected", () => {
    const result = validateVehicleSelection("sedan-corolla", messages);
    expect(result.valid).toBe(true);
  });
});

describe("validateCustomerDetails", () => {
  test("fails when required fields are missing", () => {
    const result = validateCustomerDetails({}, messages);
    expect(result.valid).toBe(false);
    expect(result.errors.name).toBe(messages.nameRequired);
    expect(result.errors.phone).toBe(messages.phoneRequired);
    expect(result.errors.email).toBe(messages.emailRequired);
  });

  test("rejects an invalid Bangladesh phone number", () => {
    const result = validateCustomerDetails(
      { name: "Rihan", phone: "12345", email: "rihan@example.com" },
      messages
    );
    expect(result.valid).toBe(false);
    expect(result.errors.phone).toBe(messages.phoneInvalid);
  });

  test("rejects an invalid email address", () => {
    const result = validateCustomerDetails(
      { name: "Rihan", phone: "01711234567", email: "not-an-email" },
      messages
    );
    expect(result.valid).toBe(false);
    expect(result.errors.email).toBe(messages.emailInvalid);
  });

  test("passes with valid name, phone, and email", () => {
    const result = validateCustomerDetails(
      { name: "Rihan", phone: "01711234567", email: "rihan@example.com" },
      messages
    );
    expect(result.valid).toBe(true);
  });

  test("accepts phone numbers with +880 country code", () => {
    const result = validateCustomerDetails(
      { name: "Rihan", phone: "+8801812345678", email: "rihan@example.com" },
      messages
    );
    expect(result.valid).toBe(true);
  });
});

describe("isValidBangladeshPhone", () => {
  test("accepts local 01XXXXXXXXX format", () => {
    expect(isValidBangladeshPhone("01911234567")).toBe(true);
  });

  test("rejects too-short numbers", () => {
    expect(isValidBangladeshPhone("0191123")).toBe(false);
  });

  test("rejects numbers not starting with a valid operator prefix", () => {
    expect(isValidBangladeshPhone("02011234567")).toBe(false);
  });
});

describe("isValidEmail", () => {
  test("accepts a standard email", () => {
    expect(isValidEmail("hello@dhakacarrental.example")).toBe(true);
  });

  test("rejects an email without a domain", () => {
    expect(isValidEmail("hello@")).toBe(false);
  });
});
