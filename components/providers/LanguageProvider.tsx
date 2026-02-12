'use client'

import React, { createContext, useContext, ReactNode } from 'react'
import { useParams, useRouter, usePathname } from 'next/navigation'
import { type Locale, locales, defaultLocale, localeHtmlLang } from '@/lib/i18n'

export type { Locale }

interface LanguageContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
  messages: Record<string, unknown>
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const localeData: Record<Locale, { code: string; name: string; countryCode: string }> = {
  en: { code: 'EN', name: 'English', countryCode: 'us' },
  fr: { code: 'FR', name: 'French', countryCode: 'fr' },
  de: { code: 'DE', name: 'German', countryCode: 'de' },
  ru: { code: 'RU', name: 'Russian', countryCode: 'ru' },
  th: { code: 'TH', name: 'Thai', countryCode: 'th' },
  cn: { code: 'CN', name: 'Chinese', countryCode: 'cn' },
  ar: { code: 'AR', name: 'Arabic', countryCode: 'sa' },
}

export const languages = Object.entries(localeData).map(([key, value]) => ({
  locale: key as Locale,
  ...value,
}))

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

export function LanguageProvider({ children }: { children: ReactNode }) {
  const params = useParams()
  const router = useRouter()
  const pathname = usePathname()

  const paramLocale = params?.locale as string
  const locale: Locale = locales.includes(paramLocale as Locale) ? (paramLocale as Locale) : defaultLocale
  const messages = allMessages[locale]

  const setLocale = (newLocale: Locale) => {
    document.cookie = `NEXT_LOCALE=${newLocale};path=/;max-age=31536000`
    document.documentElement.lang = localeHtmlLang[newLocale]
    document.documentElement.dir = newLocale === 'ar' ? 'rtl' : 'ltr'

    const segments = pathname.split('/')
    const currentHasLocale = locales.includes(segments[1] as Locale)
    if (currentHasLocale) {
      segments.splice(1, 1)
    }
    const pathWithoutLocale = segments.join('/') || '/'
    if (newLocale === defaultLocale) {
      router.push(pathWithoutLocale)
    } else {
      router.push(`/${newLocale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`)
    }
  }

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

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t, messages }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export function useTranslations(namespace?: string) {
  const { t, messages } = useLanguage()

  if (namespace) {
    return (key: string) => t(`${namespace}.${key}`)
  }

  return t
}
