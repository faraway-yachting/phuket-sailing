/**
 * Centralized theme constants
 * Single source of truth for colors, gradients, and design tokens
 */

// Color Palettes
export const COLORS = {
  // Primary Ocean Colors
  ocean: {
    50: '#f0fdfa',
    100: '#ccfbf1',
    200: '#99f6e4',
    300: '#5eead4',
    400: '#2dd4bf',
    500: '#14b8a6',
    600: '#0d9488',
    700: '#0f766e',
    800: '#115e59',
    900: '#164e63',
  },

  // Sunset/Amber Colors
  sunset: {
    400: '#d4a574',
    500: '#ca8a44',
    600: '#b67934',
  },

  // Neutral Colors
  neutral: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
  },

  // Semantic Colors
  primary: '#164e63',
  primaryHover: '#0f3a47',
  primaryDark: '#0a2a35',
  secondary: '#1e5a6d',
  accent: '#14b8a6',
  accentHover: '#0d9488',
  success: '#10b981',
  warning: '#f59e0b',
  error: '#ef4444',
  white: '#ffffff',
  black: '#000000',
} as const;

// Common Gradient Patterns (Tailwind classes)
export const GRADIENTS = {
  // Ocean gradients
  oceanDark: 'bg-gradient-to-br from-[#164e63] via-[#0f3a47] to-[#0a2a35]',
  oceanLight: 'bg-gradient-to-br from-sky-50 to-blue-50',
  oceanHero: 'bg-gradient-to-r from-sky-900 to-blue-900',
  oceanMedium: 'bg-gradient-to-br from-sky-600 to-blue-700',

  // Sunset/Amber gradients
  amber: 'bg-gradient-to-r from-amber-500 to-orange-500',
  amberHover: 'bg-gradient-to-r from-amber-600 to-orange-600',
  sunset: 'bg-gradient-to-r from-[#ca8a44] to-[#b67934]',

  // Teal gradients
  teal: 'bg-gradient-to-r from-[#14b8a6] to-[#0d9488]',
  tealBright: 'bg-gradient-to-br from-cyan-500 to-teal-600',

  // Other gradients
  sky: 'bg-gradient-to-br from-sky-500 to-blue-600',
  purple: 'bg-gradient-to-br from-purple-500 to-indigo-600',
  slate: 'bg-gradient-to-br from-slate-600 to-gray-700',
  green: 'bg-gradient-to-br from-green-500 to-green-600',
} as const;

// Icon Gradient Classes (for icon backgrounds)
export const ICON_GRADIENTS = {
  sky: 'from-sky-500 to-blue-600',
  amber: 'from-amber-500 to-orange-600',
  teal: 'from-cyan-500 to-teal-600',
  purple: 'from-purple-500 to-indigo-600',
  slate: 'from-slate-600 to-gray-700',
  green: 'from-green-500 to-green-600',
} as const;

export type Colors = typeof COLORS;
export type Gradients = typeof GRADIENTS;
export type IconGradients = typeof ICON_GRADIENTS;
