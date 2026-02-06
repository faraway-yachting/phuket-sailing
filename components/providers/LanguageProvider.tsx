'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export type Locale = 'en' | 'fr' | 'de' | 'ru' | 'th' | 'cn' | 'ar'

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

// Import all messages statically
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
  const [locale, setLocaleState] = useState<Locale>('en')
  const [messages, setMessages] = useState<Record<string, unknown>>(enMessages)

  const langMap: Record<Locale, string> = {
    en: 'en',
    fr: 'fr',
    de: 'de',
    ru: 'ru',
    th: 'th',
    cn: 'zh-CN',
    ar: 'ar'
  }

  useEffect(() => {
    // Get locale from localStorage or cookie on mount
    const savedLocale = localStorage.getItem('locale') as Locale | null
    if (savedLocale && allMessages[savedLocale]) {
      setLocaleState(savedLocale)
      setMessages(allMessages[savedLocale])
      document.documentElement.lang = langMap[savedLocale]
      document.documentElement.dir = savedLocale === 'ar' ? 'rtl' : 'ltr'
    }
  }, [])

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    setMessages(allMessages[newLocale])
    localStorage.setItem('locale', newLocale)
    document.cookie = `NEXT_LOCALE=${newLocale};path=/;max-age=31536000`

    // Set lang attribute for accessibility (but prevent browser translation)
    document.documentElement.lang = langMap[newLocale]
    document.documentElement.setAttribute('translate', 'no')

    // Set RTL for Arabic
    document.documentElement.dir = newLocale === 'ar' ? 'rtl' : 'ltr'
  }

  // Translation function with dot notation support and bracket notation for keys with dots
  const t = (key: string): string => {
    // Handle bracket notation like terms.sections.1["1.1"]
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

    // Standard dot notation
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
