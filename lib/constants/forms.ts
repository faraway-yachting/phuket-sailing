/**
 * Centralized form constants
 * Single source of truth for form options, country codes, and select values
 */

// Country Codes for Phone Input
export const COUNTRY_CODES = {
  '+66': { flag: '🇹🇭', name: 'Thailand' },
  '+1': { flag: '🇺🇸', name: 'USA' },
  '+44': { flag: '🇬🇧', name: 'UK' },
  '+61': { flag: '🇦🇺', name: 'Australia' },
  '+65': { flag: '🇸🇬', name: 'Singapore' },
} as const;

// Yacht Type Options (consolidated from multiple forms)
export const YACHT_TYPES = [
  { value: 'sailing', label: 'Sailing Yacht' },
  { value: 'catamaran', label: 'Catamaran' },
  { value: 'cabin', label: 'Cabin Cruise' },
  { value: 'bareboat', label: 'Bareboat Charter' },
  { value: 'crewed-day-charter', label: 'Crewed Day Charter' },
  { value: 'crewed-overnight-charter', label: 'Crewed Overnight Charter' },
  { value: 'unsure', label: 'Not sure' },
] as const;

// Trip Type Options
export const TRIP_TYPES = [
  { value: 'family', label: 'Family' },
  { value: 'romantic', label: 'Romantic' },
  { value: 'adventure', label: 'Adventure' },
  { value: 'corporate', label: 'Corporate' },
  { value: 'celebration', label: 'Special Occasion' },
] as const;

// Preferred Communication Channels
export const COMMUNICATION_CHANNELS = [
  { value: 'email', label: 'Email' },
  { value: 'phone', label: 'Phone' },
  { value: 'whatsapp', label: 'WhatsApp' },
  { value: 'line', label: 'Line' },
] as const;

export type CountryCode = keyof typeof COUNTRY_CODES;
export type YachtType = typeof YACHT_TYPES[number]['value'];
export type TripType = typeof TRIP_TYPES[number]['value'];
export type CommunicationChannel = typeof COMMUNICATION_CHANNELS[number]['value'];
