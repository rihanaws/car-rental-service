import type { Metadata } from "next";
import { BookingContent } from "@/components/BookingContent";

export const metadata: Metadata = {
  title: "Book a Car — Fast, Simple Reservations in Dhaka",
  description:
    "Reserve your car in three simple steps: trip details, vehicle selection, and your contact information.",
};

export default function BookingPage() {
  return <BookingContent />;
}
