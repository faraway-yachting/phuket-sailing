/**
 * Centralized form constants
 * Single source of truth for form options, country codes, and select values
 */

// Country Codes for Phone Input
export const COUNTRY_CODES = {
  '+66': { flag: '🇹🇭', name: 'TH' },
  '+1': { flag: '🇺🇸', name: 'US' },
  '+44': { flag: '🇬🇧', name: 'GB' },
  '+61': { flag: '🇦🇺', name: 'AU' },
  '+65': { flag: '🇸🇬', name: 'SG' },
  '+49': { flag: '🇩🇪', name: 'DE' },
  '+33': { flag: '🇫🇷', name: 'FR' },
  '+39': { flag: '🇮🇹', name: 'IT' },
  '+34': { flag: '🇪🇸', name: 'ES' },
  '+31': { flag: '🇳🇱', name: 'NL' },
  '+46': { flag: '🇸🇪', name: 'SE' },
  '+47': { flag: '🇳🇴', name: 'NO' },
  '+45': { flag: '🇩🇰', name: 'DK' },
  '+41': { flag: '🇨🇭', name: 'CH' },
  '+43': { flag: '🇦🇹', name: 'AT' },
  '+32': { flag: '🇧🇪', name: 'BE' },
  '+351': { flag: '🇵🇹', name: 'PT' },
  '+48': { flag: '🇵🇱', name: 'PL' },
  '+7': { flag: '🇷🇺', name: 'RU' },
  '+380': { flag: '🇺🇦', name: 'UA' },
  '+86': { flag: '🇨🇳', name: 'CN' },
  '+81': { flag: '🇯🇵', name: 'JP' },
  '+82': { flag: '🇰🇷', name: 'KR' },
  '+91': { flag: '🇮🇳', name: 'IN' },
  '+971': { flag: '🇦🇪', name: 'AE' },
  '+966': { flag: '🇸🇦', name: 'SA' },
  '+972': { flag: '🇮🇱', name: 'IL' },
  '+60': { flag: '🇲🇾', name: 'MY' },
  '+62': { flag: '🇮🇩', name: 'ID' },
  '+63': { flag: '🇵🇭', name: 'PH' },
  '+84': { flag: '🇻🇳', name: 'VN' },
  '+852': { flag: '🇭🇰', name: 'HK' },
  '+886': { flag: '🇹🇼', name: 'TW' },
  '+64': { flag: '🇳🇿', name: 'NZ' },
  '+27': { flag: '🇿🇦', name: 'ZA' },
  '+55': { flag: '🇧🇷', name: 'BR' },
  '+52': { flag: '🇲🇽', name: 'MX' },
  '+20': { flag: '🇪🇬', name: 'EG' },
  '+90': { flag: '🇹🇷', name: 'TR' },
  '+353': { flag: '🇮🇪', name: 'IE' },
  '+358': { flag: '🇫🇮', name: 'FI' },
  '+420': { flag: '🇨🇿', name: 'CZ' },
  '+36': { flag: '🇭🇺', name: 'HU' },
  '+40': { flag: '🇷🇴', name: 'RO' },
  '+30': { flag: '🇬🇷', name: 'GR' },
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
