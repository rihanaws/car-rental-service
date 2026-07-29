import type { BookingPayload, BookingResponse } from "@/lib/types";

/**
 * Single choke point for submitting a booking. Everything upstream (the
 * booking stepper UI) only ever calls this function — it does not know or
 * care whether the request eventually involves a payment step, a real
 * database, or auth.
 *
 * TODO: Clerk — once authenticated bookings are required, read the signed-in
 * user (e.g. `auth()` from `@clerk/nextjs/server`) in this function and
 * attach `userId` to the outgoing payload before the fetch call below.
 *
 * TODO: Polar.sh/Paddle — to require payment before a booking is confirmed,
 * insert a checkout-session creation call here (before the POST to
 * `/api/bookings`), then pass the resulting payment/session reference along
 * in the payload so `/api/bookings` (app/api/bookings/route.ts) can persist
 * it against the booking record.
 */
export async function submitBooking(payload: BookingPayload): Promise<BookingResponse> {
  const response = await fetch("/api/bookings", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const body = await response.json().catch(() => ({}));
    throw new BookingSubmitError(
      body?.message ?? "Booking submission failed",
      body?.errors ?? {}
    );
  }

  return (await response.json()) as BookingResponse;
}

export class BookingSubmitError extends Error {
  errors: Record<string, string>;

  constructor(message: string, errors: Record<string, string>) {
    super(message);
    this.name = "BookingSubmitError";
    this.errors = errors;
  }
}
