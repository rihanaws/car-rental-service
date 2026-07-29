import type { Metadata } from "next";
import { HomeContent } from "@/components/HomeContent";

export const metadata: Metadata = {
  title: "Dhaka Car Rental — Safe, Reliable Car Hire in Dhaka",
  description:
    "Book verified drivers and well-maintained cars for airport transfers, city rides, outstation trips, weddings, and corporate travel across Dhaka, Bangladesh.",
  openGraph: {
    title: "Dhaka Car Rental — Safe, Reliable Car Hire in Dhaka",
    description:
      "Book verified drivers and well-maintained cars for airport transfers, city rides, outstation trips, weddings, and corporate travel across Dhaka, Bangladesh.",
    type: "website",
    locale: "bn_BD",
    alternateLocale: "en_US",
    url: "https://dhakacarrental.example",
  },
};

export default function HomePage() {
  return <HomeContent />;
}
