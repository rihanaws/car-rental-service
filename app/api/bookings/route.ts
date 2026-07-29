import { NextResponse } from "next/server";
import type { BookingPayload, BookingResponse, FieldErrors } from "@/lib/types";

// TODO: Clerk — if bookings should be tied to a signed-in user, verify the
// session here (e.g. `const { userId } = await auth()` from
// `@clerk/nextjs/server`) before accepting the request, and persist
// `userId` alongside the booking record.
//
// TODO: Polar.sh/Paddle — before returning success, verify a payment/checkout
// reference included in the payload (once lib/booking.ts starts sending one)
// against the billing provider, and only mark the booking `status: "received"`
// after payment is confirmed.

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

const BD_PHONE_REGEX = /^(?:\+?880|0)1[3-9]\d{8}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const VALID_TRIP_TYPES = ["hourly", "daily", "one-way", "round-trip"];

function validatePayload(body: unknown): { errors: FieldErrors; payload?: BookingPayload } {
  const errors: FieldErrors = {};

  if (typeof body !== "object" || body === null) {
    return { errors: { body: "Request body must be a JSON object." } };
  }

  const b = body as Record<string, unknown>;
  const trip = (b.trip ?? {}) as Record<string, unknown>;
  const customer = (b.customer ?? {}) as Record<string, unknown>;
  const vehicleId = b.vehicleId;

  if (!isNonEmptyString(trip.pickupArea)) errors["trip.pickupArea"] = "Pickup area is required.";
  if (!isNonEmptyString(trip.dropoffArea)) errors["trip.dropoffArea"] = "Drop-off area is required.";
  if (!isNonEmptyString(trip.pickupDate)) errors["trip.pickupDate"] = "Pickup date is required.";
  if (!isNonEmptyString(trip.pickupTime)) errors["trip.pickupTime"] = "Pickup time is required.";
  if (!isNonEmptyString(trip.tripType) || !VALID_TRIP_TYPES.includes(trip.tripType as string)) {
    errors["trip.tripType"] = "A valid trip type is required.";
  }
  if (trip.tripType === "round-trip") {
    if (!isNonEmptyString(trip.returnDate)) errors["trip.returnDate"] = "Return date is required for round trips.";
    if (!isNonEmptyString(trip.returnTime)) errors["trip.returnTime"] = "Return time is required for round trips.";
  }

  if (!isNonEmptyString(vehicleId)) errors.vehicleId = "A vehicle selection is required.";

  if (!isNonEmptyString(customer.name)) errors["customer.name"] = "Customer name is required.";
  if (!isNonEmptyString(customer.phone) || !BD_PHONE_REGEX.test((customer.phone as string).trim())) {
    errors["customer.phone"] = "A valid Bangladesh phone number is required.";
  }
  if (!isNonEmptyString(customer.email) || !EMAIL_REGEX.test((customer.email as string).trim())) {
    errors["customer.email"] = "A valid email address is required.";
  }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  return {
    errors: {},
    payload: {
      trip: {
        pickupArea: trip.pickupArea as string,
        dropoffArea: trip.dropoffArea as string,
        pickupDate: trip.pickupDate as string,
        pickupTime: trip.pickupTime as string,
        returnDate: trip.returnDate as string | undefined,
        returnTime: trip.returnTime as string | undefined,
        tripType: trip.tripType as BookingPayload["trip"]["tripType"],
      },
      vehicleId: vehicleId as string,
      customer: {
        name: customer.name as string,
        phone: customer.phone as string,
        email: customer.email as string,
        company: customer.company as string | undefined,
        notes: customer.notes as string | undefined,
      },
    },
  };
}

function generateBookingId(): string {
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).slice(2, 7).toUpperCase();
  return `DCR-${timestamp}-${random}`;
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { message: "Invalid JSON body.", errors: { body: "Could not parse request body as JSON." } },
      { status: 400 }
    );
  }

  const { errors, payload } = validatePayload(body);

  if (!payload) {
    return NextResponse.json(
      { message: "Validation failed.", errors },
      { status: 400 }
    );
  }

  const createdAt = new Date().toISOString();
  const id = generateBookingId();

  // In a real deployment this is where the validated payload would be
  // persisted to the database (e.g. via Prisma + Neon). For this mock API we
  // log it so the request/response cycle is fully observable during dev.
  console.log("[dhaka-car-rental] booking received (would be persisted to DB):", {
    id,
    createdAt,
    ...payload,
  });

  const response: BookingResponse = {
    id,
    status: "received",
    createdAt,
    trip: payload.trip,
    vehicleId: payload.vehicleId,
    customer: payload.customer,
  };

  return NextResponse.json(response, { status: 201 });
}
