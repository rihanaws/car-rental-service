import type { Metadata } from "next";
import { ServicesContent } from "@/components/ServicesContent";

export const metadata: Metadata = {
  title: "Services — Airport, City, Outstation, Wedding & Corporate Rides",
  description:
    "Explore our car rental services in Dhaka: airport transfers, city rides, outstation trips, wedding cars, and corporate packages.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
