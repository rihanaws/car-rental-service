import type { Metadata } from "next";
import { ContactContent } from "@/components/ContactContent";

export const metadata: Metadata = {
  title: "Contact Us — Reach Our Dhaka Car Rental Team",
  description:
    "Get in touch with our Dhaka car rental team by phone, WhatsApp, email, or our office in Banani for bookings and enquiries.",
};

export default function ContactPage() {
  return <ContactContent />;
}
