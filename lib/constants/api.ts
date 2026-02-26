export const API_CONFIG = {
  yachtsBase: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3500',

  endpoints: {
    yachts: {
      all: '/yacht/all-yachts',
      byId: '/yacht',
    },
  },
} as const;

export type ApiConfig = typeof API_CONFIG;
