import type { Metadata } from "next";
import { AboutContent } from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "About Us — Trusted Car Rental Service in Dhaka Since 2016",
  description:
    "Learn about our journey, service areas, fleet size, and what makes our car rental service in Dhaka reliable for individuals and corporates.",
};

export default function AboutPage() {
  return <AboutContent />;
}
