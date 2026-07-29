// Shared domain types used across data files, components, and pages.

export type VehicleCategory = "sedan" | "suv" | "microbus" | "luxury";

export type TripType = "hourly" | "daily" | "one-way" | "round-trip";

export interface Vehicle {
  id: string;
  name: string;
  category: VehicleCategory;
  seats: number;
  transmission: "automatic" | "manual";
  ac: boolean;
  pricePerDay: number; // BDT
  pricePerHour?: number; // BDT, for hourly trips
  imageAlt: string;
  imagePlaceholder: string; // css gradient token key used by FleetCard
  tripTypes: TripType[];
  featured?: boolean;
}

export type ServiceId =
  | "airport-transfer"
  | "city-ride"
  | "outstation-trip"
  | "wedding-car"
  | "corporate-package";

export interface ServiceInclusion {
  en: string;
  bn: string;
}

export interface Service {
  id: ServiceId;
  icon: "plane" | "city" | "road" | "ring" | "briefcase";
  startingRateBDT: number;
  rateUnit: "trip" | "day" | "hour";
  inclusions: ServiceInclusion[];
  exclusions: ServiceInclusion[];
}

export interface BookingTripDetails {
  pickupArea: string;
  dropoffArea: string;
  pickupDate: string; // ISO date (yyyy-mm-dd)
  pickupTime: string; // HH:mm
  returnDate?: string;
  returnTime?: string;
  tripType: TripType;
}

export interface BookingCustomerDetails {
  name: string;
  phone: string;
  email: string;
  company?: string;
  notes?: string;
}

export interface BookingPayload {
  trip: BookingTripDetails;
  vehicleId: string;
  customer: BookingCustomerDetails;
}

export interface BookingResponse {
  id: string;
  status: "received";
  createdAt: string;
  trip: BookingTripDetails;
  vehicleId: string;
  customer: BookingCustomerDetails;
}

export interface FieldErrors {
  [field: string]: string;
}

export interface ValidationResult {
  valid: boolean;
  errors: FieldErrors;
}
