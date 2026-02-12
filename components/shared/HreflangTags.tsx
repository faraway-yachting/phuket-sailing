'use client'

import { usePathname } from 'next/navigation'
import { locales, defaultLocale, localeHtmlLang } from '@/lib/i18n'

const SITE_URL = 'https://phuket-sailing.com'

export function HreflangTags() {
  const pathname = usePathname()
  const pathWithoutLocale = pathname.replace(/^\/(en|fr|de|ru|th|cn|ar)/, '') || '/'

  return (
    <>
      {locales.map((locale) => {
        const path = locale === defaultLocale
          ? (pathWithoutLocale === '/' ? '' : pathWithoutLocale)
          : `/${locale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`
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
        href={`${SITE_URL}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`}
      />
    </>
  )
}
