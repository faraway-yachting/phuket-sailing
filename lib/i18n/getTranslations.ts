import { type Locale, defaultLocale, locales } from '@/lib/i18n'

import enMessages from '@/messages/en.json'
import frMessages from '@/messages/fr.json'
import deMessages from '@/messages/de.json'
import ruMessages from '@/messages/ru.json'
import thMessages from '@/messages/th.json'
import cnMessages from '@/messages/cn.json'
import arMessages from '@/messages/ar.json'

const allMessages: Record<Locale, Record<string, unknown>> = {
  en: enMessages,
  fr: frMessages,
  de: deMessages,
  ru: ruMessages,
  th: thMessages,
  cn: cnMessages,
  ar: arMessages,
}

export function getTranslations(localeParam: string) {
  const locale: Locale = locales.includes(localeParam as Locale)
    ? (localeParam as Locale)
    : defaultLocale
  const messages = allMessages[locale]

  const t = (key: string): string => {
    const bracketMatch = key.match(/^(.+)\["(.+)"\]$/)
    if (bracketMatch) {
      const [, baseKey, bracketKey] = bracketMatch
      const keys = baseKey.split('.')
      let value: unknown = messages

      for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
          value = (value as Record<string, unknown>)[k]
        } else {
          return key
        }
      }

      if (value && typeof value === 'object' && bracketKey in value) {
        const result = (value as Record<string, unknown>)[bracketKey]
        return typeof result === 'string' ? result : key
      }
      return key
    }

    const keys = key.split('.')
    let value: unknown = messages

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = (value as Record<string, unknown>)[k]
      } else {
        return key
      }
    }

    return typeof value === 'string' ? value : key
  }

  return { t, locale }
}
