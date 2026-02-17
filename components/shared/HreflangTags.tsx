'use client'

import { usePathname, useParams } from 'next/navigation'
import { locales, defaultLocale, localeHtmlLang, type Locale } from '@/lib/i18n'
import { reverseTranslatePath, translatePath } from '@/lib/slugTranslations'

const SITE_URL = 'https://phuket-sailing.vercel.app'

export function HreflangTags() {
  const pathname = usePathname()
  const params = useParams()
  const currentLocale = (params?.locale as Locale) || defaultLocale

  // Strip locale prefix to get the raw path
  const pathWithoutLocale = pathname.replace(/^\/(en|fr|de|ru|th|cn|ar)/, '') || '/'

  // Reverse-translate current locale slug back to English
  const englishPath = reverseTranslatePath(currentLocale, pathWithoutLocale)

  return (
    <>
      {locales.map((locale) => {
        // Translate the English path to this locale's slug
        const translatedPath = translatePath(locale, englishPath)

        const path = locale === defaultLocale
          ? (translatedPath === '/' ? '' : translatedPath)
          : `/${locale}${translatedPath === '/' ? '' : translatedPath}`

        return (
          <link
            key={locale}
            rel="alternate"
            hrefLang={localeHtmlLang[locale]}
            href={`${SITE_URL}${path}`}
          />
        )
      })}
      <link
        rel="alternate"
        hrefLang="x-default"
        href={`${SITE_URL}${englishPath === '/' ? '' : englishPath}`}
      />
    </>
  )
}
