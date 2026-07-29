import type { Translations } from "@/i18n/translations";
import type { TripType, VehicleCategory } from "@/lib/types";

export function tripTypeLabel(t: Translations, tripType: TripType): string {
  switch (tripType) {
    case "hourly":
      return t.common.tripTypeHourly;
    case "daily":
      return t.common.tripTypeDaily;
    case "one-way":
      return t.common.tripTypeOneWay;
    case "round-trip":
      return t.common.tripTypeRoundTrip;
  }
}

export function categoryLabel(t: Translations, category: VehicleCategory): string {
  switch (category) {
    case "sedan":
      return t.common.categorySedan;
    case "suv":
      return t.common.categorySuv;
    case "microbus":
      return t.common.categoryMicrobus;
    case "luxury":
      return t.common.categoryLuxury;
  }
}

export function formatBDT(amount: number): string {
  return `৳${amount.toLocaleString("en-US")}`;
}
