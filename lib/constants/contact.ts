/**
 * Centralized contact information
 * Single source of truth for all contact details across the application
 */

export const CONTACT_INFO = {
  // Phone
  phone: '+66 61 234 5623',
  phoneRaw: '66612345623', // For tel: and WhatsApp links
  phoneLink: 'tel:+66612345623',

  // Email
  email: 'info@phuket-sailing.com',
  emailLink: 'mailto:info@phuket-sailing.com',
  bookingEmail: 'bookings@faraway-yachting.com',
  bookingEmailLink: 'mailto:bookings@faraway-yachting.com',

  // WhatsApp
  whatsapp: 'https://wa.me/66612345623',
  whatsappRaw: '66612345623',

  // Line
  line: 'https://line.me/ti/p/~phuket-sailing',
  lineId: 'phuket-sailing',

  // Address
  address: '40/1 Chaofa Road, Moo 9 Tambon Chalong, Amphoe Mueang Phuket, Chang Wat Phuket 83130',
  addressShort: 'Chalong, Phuket 83130',

  // Social Media
  social: {
    facebook: 'https://facebook.com/phuket-sailing',
    instagram: 'https://instagram.com/phuket-sailing',
  },

  // Business Info
  companyName: 'Phuket Sailing',
  tagline: 'Sailing Charters & Catamaran Charters in Phuket, Thailand',
  description: 'Your specialist for sailing and catamaran charters in Phuket. Discover the best islands of Thailand.',
  established: '2010',
} as const;

export type ContactInfo = typeof CONTACT_INFO;
