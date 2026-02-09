/**
 * Centralized API configuration
 * Single source of truth for all API endpoints and webhooks
 */

export const API_CONFIG = {
  // Yachts API Base URL
  yachtsBase: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3500',

  // Contact Form Webhook
  contactWebhook: process.env.NEXT_PUBLIC_WEBHOOK_URL ||
    'https://phpstack-858394-5597469.cloudwaysapps.com/webhook/bc92f5de-31ce-4083-af54-587f0ce18ad7',

  // API Endpoints
  endpoints: {
    yachts: {
      all: '/yacht/all-yachts',
      byId: '/yacht',
    },
  },
} as const;

export type ApiConfig = typeof API_CONFIG;
