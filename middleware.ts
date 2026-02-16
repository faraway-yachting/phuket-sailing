import { NextRequest, NextResponse } from 'next/server'
import { locales, defaultLocale, isValidLocale } from '@/lib/i18n'
import {
  reverseTranslateSlug,
  translateSlug,
} from '@/lib/slugTranslations'

const nonDefaultLocales = locales.filter((l) => l !== defaultLocale)

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Skip static assets early
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/assets') ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  // 1. Redirect /en/... to /... (English should have no locale prefix)
  if (pathname.startsWith(`/${defaultLocale}/`) || pathname === `/${defaultLocale}`) {
    const url = request.nextUrl.clone()
    url.pathname = pathname.replace(`/${defaultLocale}`, '') || '/'
    return NextResponse.redirect(url)
  }

  // 2. Handle non-default locales (fr, de, ru, th, cn, ar)
  const localeMatch = nonDefaultLocales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (localeMatch) {
    const locale = localeMatch
    const pathAfterLocale = pathname.replace(`/${locale}`, '') || '/'

    // If it's just the locale root (e.g. /fr), pass through
    if (pathAfterLocale === '/') return NextResponse.next()

    const segments = pathAfterLocale.slice(1).split('/')
    const firstSegment = segments[0]

    // Check if the first segment is a translated slug for this locale
    const englishSlug = reverseTranslateSlug(locale, firstSegment)

    if (englishSlug && englishSlug !== firstSegment) {
      // It's a translated slug — rewrite internally to the English folder path
      segments[0] = englishSlug
      const url = request.nextUrl.clone()
      url.pathname = `/${locale}/${segments.join('/')}`
      return NextResponse.rewrite(url)
    }

    // Check if the first segment is an English slug that should be translated
    const translatedSlug = translateSlug(locale, firstSegment)
    if (translatedSlug && translatedSlug !== firstSegment) {
      // Redirect to the properly translated URL for SEO consistency
      segments[0] = translatedSlug
      const url = request.nextUrl.clone()
      url.pathname = `/${locale}/${segments.join('/')}`
      return NextResponse.redirect(url)
    }

    // No translation needed (unknown path, or slug is the same)
    return NextResponse.next()
  }

  // 3. No locale prefix — this is English
  // Check if user has a non-default locale cookie
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value
  if (cookieLocale && isValidLocale(cookieLocale) && cookieLocale !== defaultLocale) {
    // Translate path slugs to the target locale before redirecting
    const segments = pathname.slice(1).split('/').filter(Boolean)
    if (segments.length > 0) {
      segments[0] = translateSlug(cookieLocale, segments[0])
    }
    const url = request.nextUrl.clone()
    url.pathname = `/${cookieLocale}${segments.length > 0 ? '/' + segments.join('/') : ''}`
    return NextResponse.redirect(url)
  }

  // 4. Default: rewrite to /en/... (internal only, URL stays clean for English)
  const url = request.nextUrl.clone()
  url.pathname = `/${defaultLocale}${pathname}`
  return NextResponse.rewrite(url)
}

export const config = {
  matcher: ['/((?!_next|api|assets|favicon.ico|.*\\..*).*)'],
}
