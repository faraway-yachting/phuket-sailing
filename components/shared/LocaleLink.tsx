'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import { defaultLocale } from '@/lib/i18n'

interface LocaleLinkProps extends Omit<React.ComponentProps<typeof Link>, 'href'> {
  href: string
}

function buildLocalePath(locale: string, path: string): string {
  if (path.startsWith('http') || path.startsWith('mailto:') || path.startsWith('tel:') || path.startsWith('#')) return path
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  if (locale === defaultLocale) return cleanPath
  return `/${locale}${cleanPath}`
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
