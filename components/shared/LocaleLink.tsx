'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import { defaultLocale } from '@/lib/i18n'
import { translatePath } from '@/lib/slugTranslations'

interface LocaleLinkProps extends Omit<React.ComponentProps<typeof Link>, 'href'> {
  href: string
}

function buildLocalePath(locale: string, path: string): string {
  // Don't touch external links, mailto, tel, or hash links
  if (path.startsWith('http') || path.startsWith('mailto:') || path.startsWith('tel:') || path.startsWith('#')) return path

  const cleanPath = path.startsWith('/') ? path : `/${path}`

  // Translate the slug for the current locale
  const translatedPath = translatePath(locale, cleanPath)

  if (locale === defaultLocale) return translatedPath
  return `/${locale}${translatedPath}`
}

export function LocaleLink({ href, ...props }: LocaleLinkProps) {
  const params = useParams()
  const locale = (params?.locale as string) || defaultLocale
  return <Link href={buildLocalePath(locale, href)} {...props} />
}

export function useLocalePath() {
  const params = useParams()
  const locale = (params?.locale as string) || defaultLocale
  return (path: string) => buildLocalePath(locale, path)
}
