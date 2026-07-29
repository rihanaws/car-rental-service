import type { Metadata } from "next";
import { PricingContent } from "@/components/PricingContent";

export const metadata: Metadata = {
  title: "Pricing & Policies — Rates, Fuel, Overtime & Cancellation Rules",
  description:
    "See starting rental rates by vehicle category and our fuel, overtime, driver allowance, and cancellation policies.",
};

export default function PricingPage() {
  return <PricingContent />;
}
