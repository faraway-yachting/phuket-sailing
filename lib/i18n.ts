export const locales = ['en', 'fr', 'de', 'ru', 'th', 'cn', 'ar'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'en'

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale)
}

export const localeNames: Record<Locale, string> = {
  en: 'English',
  fr: 'French',
  de: 'German',
  ru: 'Russian',
  th: 'Thai',
  cn: 'Chinese',
  ar: 'Arabic',
}

export const localeHtmlLang: Record<Locale, string> = {
  en: 'en',
  fr: 'fr',
  de: 'de',
  ru: 'ru',
  th: 'th',
  cn: 'zh-CN',
  ar: 'ar',
}
