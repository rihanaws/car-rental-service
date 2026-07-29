import type { Service } from "@/lib/types";

// Mock service catalogue. Inclusion/exclusion copy is bilingual and pulled
// directly into Services page sections; starting rates are placeholder BDT figures.
export const services: Service[] = [
  {
    id: "airport-transfer",
    icon: "plane",
    startingRateBDT: 1500,
    rateUnit: "trip",
    inclusions: [
      { en: "Meet & greet at arrivals", bn: "আগমনী লাউঞ্জে অভ্যর্থনা" },
      { en: "Flight tracking for delays", bn: "ফ্লাইট বিলম্ব ট্র্যাকিং" },
      { en: "30 minutes free waiting time", bn: "৩০ মিনিট বিনামূল্যে অপেক্ষা" },
    ],
    exclusions: [
      { en: "Parking fees at terminal", bn: "টার্মিনালের পার্কিং ফি" },
      { en: "Meals and refreshments", bn: "খাবার ও পানীয়" },
    ],
  },
  {
    id: "city-ride",
    icon: "city",
    startingRateBDT: 450,
    rateUnit: "hour",
    inclusions: [
      { en: "Experienced city driver", bn: "অভিজ্ঞ সিটি ড্রাইভার" },
      { en: "Fuel included within package", bn: "প্যাকেজের মধ্যে জ্বালানি অন্তর্ভুক্ত" },
      { en: "Flexible multi-stop routing", bn: "একাধিক স্টপেজের সুবিধা" },
    ],
    exclusions: [
      { en: "Toll and parking charges", bn: "টোল ও পার্কিং চার্জ" },
      { en: "Overtime beyond booked hours", bn: "নির্ধারিত সময়ের অতিরিক্ত ব্যবহার" },
    ],
  },
  {
    id: "outstation-trip",
    icon: "road",
    startingRateBDT: 6500,
    rateUnit: "day",
    inclusions: [
      { en: "Driver allowance included", bn: "ড্রাইভার ভাতা অন্তর্ভুক্ত" },
      { en: "Fuel for standard route", bn: "নির্ধারিত রুটের জ্বালানি" },
      { en: "24/7 roadside support", bn: "সার্বক্ষণিক রোডসাইড সহায়তা" },
    ],
    exclusions: [
      { en: "Toll, ferry, and highway fees", bn: "টোল, ফেরি ও হাইওয়ে ফি" },
      { en: "Driver overnight stay charges", bn: "ড্রাইভারের রাত্রিযাপন খরচ" },
    ],
  },
  {
    id: "wedding-car",
    icon: "ring",
    startingRateBDT: 8000,
    rateUnit: "day",
    inclusions: [
      { en: "Decorated vehicle on request", bn: "অনুরোধে সজ্জিত গাড়ি" },
      { en: "Dedicated formal-dressed driver", bn: "নিবেদিত পোশাকধারী চালক" },
      { en: "Priority scheduling for event day", bn: "অনুষ্ঠানের দিনের জন্য অগ্রাধিকার সময়সূচি" },
    ],
    exclusions: [
      { en: "Flower and ribbon decoration cost", bn: "ফুল ও রিবন সাজসজ্জার খরচ" },
      { en: "Extra stops beyond agreed plan", bn: "নির্ধারিত পরিকল্পনার বাইরের অতিরিক্ত স্টপ" },
    ],
  },
  {
    id: "corporate-package",
    icon: "briefcase",
    startingRateBDT: 35000,
    rateUnit: "day",
    inclusions: [
      { en: "Monthly billing and invoicing", bn: "মাসিক বিলিং ও চালান" },
      { en: "Dedicated account coordinator", bn: "নিবেদিত অ্যাকাউন্ট সমন্বয়কারী" },
      { en: "Priority vehicle availability", bn: "গাড়ির অগ্রাধিকার সহজলভ্যতা" },
    ],
    exclusions: [
      { en: "Fuel beyond contracted mileage", bn: "চুক্তিবদ্ধ মাইলেজের বাইরের জ্বালানি" },
      { en: "Weekend surcharge unless pre-agreed", bn: "পূর্ব-চুক্তি ছাড়া সাপ্তাহিক ছুটির বাড়তি চার্জ" },
    ],
  },
];

export function getServiceById(id: string) {
  return services.find((s) => s.id === id);
}
