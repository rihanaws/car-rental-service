import type { Metadata } from "next";
import { FleetContent } from "@/components/FleetContent";

export const metadata: Metadata = {
  title: "Our Fleet — Sedans, SUVs, Microbuses & Luxury Cars in Dhaka",
  description:
    "Browse our full fleet of sedans, SUVs, microbuses, and luxury cars available for rent in Dhaka with transparent daily pricing.",
};

export default function FleetPage() {
  return <FleetContent />;
}
