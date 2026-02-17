import { MetadataRoute } from 'next'
import { locales, defaultLocale } from '@/lib/i18n'
import { translatePath } from '@/lib/slugTranslations'

const SITE_URL = 'https://phuket-sailing.vercel.app'

const pages = [
  '/',
  '/catamaran-charter-phuket',
  '/luxury-yacht-charter',
  '/cabin-cruise-phuket',
  '/overnight-sailing-charter',
  '/contact',
  '/yachts',
  '/terms-and-conditions',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []

  for (const page of pages) {
    const enPath = page === '/' ? '' : page

    entries.push({
      url: `${SITE_URL}${enPath}`,
      lastModified: new Date(),
      changeFrequency: page === '/' ? 'weekly' : 'monthly',
      priority: page === '/' ? 1.0 : page === '/terms-and-conditions' ? 0.3 : 0.8,
    })

    for (const locale of locales) {
      if (locale === defaultLocale) continue
      const translatedPath = translatePath(locale, page)
      const fullPath = `/${locale}${translatedPath === '/' ? '' : translatedPath}`

      entries.push({
        url: `${SITE_URL}${fullPath}`,
        lastModified: new Date(),
        changeFrequency: page === '/' ? 'weekly' : 'monthly',
        priority: page === '/' ? 0.9 : page === '/terms-and-conditions' ? 0.2 : 0.7,
      })
    }
  }

  return entries
}
