import { LucideIcon } from "lucide-react";

// ============================================================================
// Home Page Component Types
// ============================================================================

// WhoItsFor Component Types
export interface Audience {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

// CharterStyles Component Types
export interface CharterStyle {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
  gradient: string;
}

// SailingPhuket Component Types
export interface TripType {
  number: string;
  title: string;
  description: string;
  gradient: string;
}

// JumpLinks Component Types
export interface JumpLink {
  id: string;
  label: string;
  icon: LucideIcon;
}

// Pricing Component Types
export interface PriceAnchor {
  service: string;
  price: string;
  color: string;
}

// FAQs Component Types
export interface FAQ {
  question: string;
  answer: string;
}

// PopularRoutes Component Types
export interface Route {
  name: string;
  subtitle: string;
  description: string;
  image: string;
}

// OvernightSailing Component Types
export interface Destination {
  name: string;
  description: string;
}

export interface TripDuration {
  duration: string;
  description: string;
}

// Yacht (fetched from backend API / MongoDB)
export interface Yacht {
  _id: string;
  title: string;
  slug: string;
  primaryImage: string;
  galleryImages?: string[];
  length: string;
  guests: string;
  cabins: string;
  bathrooms: string;
  dayTripPrice: string;
  overnightPrice: string;
  passengerDayTrip: string;
  passengerOvernight: string;
  boatType: string;
  status: string;
  type: string;
  // Detail-page fields (optional – only present on single-yacht fetch)
  price?: string;
  capacity?: string;
  lengthRange?: string;
  guestsRange?: string;
  daytripPriceEuro?: string;
  dayCharter?: string;
  overnightCharter?: string;
  aboutThisBoat?: string;
  specifications?: string;
  boatLayout?: string;
  videoLink?: string;
  badge?: string;
  design?: string;
  built?: string;
  cruisingSpeed?: string;
  lengthOverall?: string;
  fuelCapacity?: string;
  waterCapacity?: string;
  code?: string;
  tags?: string[];
}

