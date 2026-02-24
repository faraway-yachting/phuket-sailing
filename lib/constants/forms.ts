export const COUNTRY_CODES = {
  '+66': { flag: '🇹🇭', name: 'TH', fullName: 'Thailand' },
  '+1': { flag: '🇺🇸', name: 'US', fullName: 'United States' },
  '+44': { flag: '🇬🇧', name: 'GB', fullName: 'United Kingdom' },
  '+61': { flag: '🇦🇺', name: 'AU', fullName: 'Australia' },
  '+65': { flag: '🇸🇬', name: 'SG', fullName: 'Singapore' },
  '+49': { flag: '🇩🇪', name: 'DE', fullName: 'Germany' },
  '+33': { flag: '🇫🇷', name: 'FR', fullName: 'France' },
  '+39': { flag: '🇮🇹', name: 'IT', fullName: 'Italy' },
  '+34': { flag: '🇪🇸', name: 'ES', fullName: 'Spain' },
  '+31': { flag: '🇳🇱', name: 'NL', fullName: 'Netherlands' },
  '+46': { flag: '🇸🇪', name: 'SE', fullName: 'Sweden' },
  '+47': { flag: '🇳🇴', name: 'NO', fullName: 'Norway' },
  '+45': { flag: '🇩🇰', name: 'DK', fullName: 'Denmark' },
  '+41': { flag: '🇨🇭', name: 'CH', fullName: 'Switzerland' },
  '+43': { flag: '🇦🇹', name: 'AT', fullName: 'Austria' },
  '+32': { flag: '🇧🇪', name: 'BE', fullName: 'Belgium' },
  '+351': { flag: '🇵🇹', name: 'PT', fullName: 'Portugal' },
  '+48': { flag: '🇵🇱', name: 'PL', fullName: 'Poland' },
  '+7': { flag: '🇷🇺', name: 'RU', fullName: 'Russia' },
  '+380': { flag: '🇺🇦', name: 'UA', fullName: 'Ukraine' },
  '+86': { flag: '🇨🇳', name: 'CN', fullName: 'China' },
  '+81': { flag: '🇯🇵', name: 'JP', fullName: 'Japan' },
  '+82': { flag: '🇰🇷', name: 'KR', fullName: 'South Korea' },
  '+91': { flag: '🇮🇳', name: 'IN', fullName: 'India' },
  '+971': { flag: '🇦🇪', name: 'AE', fullName: 'United Arab Emirates' },
  '+966': { flag: '🇸🇦', name: 'SA', fullName: 'Saudi Arabia' },
  '+972': { flag: '🇮🇱', name: 'IL', fullName: 'Israel' },
  '+60': { flag: '🇲🇾', name: 'MY', fullName: 'Malaysia' },
  '+62': { flag: '🇮🇩', name: 'ID', fullName: 'Indonesia' },
  '+63': { flag: '🇵🇭', name: 'PH', fullName: 'Philippines' },
  '+84': { flag: '🇻🇳', name: 'VN', fullName: 'Vietnam' },
  '+852': { flag: '🇭🇰', name: 'HK', fullName: 'Hong Kong' },
  '+886': { flag: '🇹🇼', name: 'TW', fullName: 'Taiwan' },
  '+64': { flag: '🇳🇿', name: 'NZ', fullName: 'New Zealand' },
  '+27': { flag: '🇿🇦', name: 'ZA', fullName: 'South Africa' },
  '+55': { flag: '🇧🇷', name: 'BR', fullName: 'Brazil' },
  '+52': { flag: '🇲🇽', name: 'MX', fullName: 'Mexico' },
  '+20': { flag: '🇪🇬', name: 'EG', fullName: 'Egypt' },
  '+90': { flag: '🇹🇷', name: 'TR', fullName: 'Turkey' },
  '+353': { flag: '🇮🇪', name: 'IE', fullName: 'Ireland' },
  '+358': { flag: '🇫🇮', name: 'FI', fullName: 'Finland' },
  '+420': { flag: '🇨🇿', name: 'CZ', fullName: 'Czech Republic' },
  '+36': { flag: '🇭🇺', name: 'HU', fullName: 'Hungary' },
  '+40': { flag: '🇷🇴', name: 'RO', fullName: 'Romania' },
  '+30': { flag: '🇬🇷', name: 'GR', fullName: 'Greece' },
} as const;

export const YACHT_TYPES = [
  { value: 'sailing', label: 'Sailing Yacht' },
  { value: 'catamaran', label: 'Catamaran' },
  { value: 'cabin', label: 'Cabin Cruise' },
  { value: 'bareboat', label: 'Bareboat Charter' },
  { value: 'crewed-day-charter', label: 'Crewed Day Charter' },
  { value: 'crewed-overnight-charter', label: 'Crewed Overnight Charter' },
  { value: 'unsure', label: 'Not sure' },
] as const;

export const TRIP_TYPES = [
  { value: 'family', label: 'Family' },
  { value: 'romantic', label: 'Romantic' },
  { value: 'adventure', label: 'Adventure' },
  { value: 'corporate', label: 'Corporate' },
  { value: 'celebration', label: 'Special Occasion' },
] as const;

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
