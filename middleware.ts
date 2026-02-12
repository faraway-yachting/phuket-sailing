import { NextRequest, NextResponse } from 'next/server'
import { locales, defaultLocale, isValidLocale } from '@/lib/i18n'

const nonDefaultLocales = locales.filter((l) => l !== defaultLocale)

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname.startsWith(`/${defaultLocale}/`) || pathname === `/${defaultLocale}`) {
    const url = request.nextUrl.clone()
    url.pathname = pathname.replace(`/${defaultLocale}`, '') || '/'
    return NextResponse.redirect(url)
  }

  const hasNonDefaultLocale = nonDefaultLocales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )
  if (hasNonDefaultLocale) return NextResponse.next()

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/assets') ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value
  if (cookieLocale && isValidLocale(cookieLocale) && cookieLocale !== defaultLocale) {
    const url = request.nextUrl.clone()
    url.pathname = `/${cookieLocale}${pathname}`
    return NextResponse.redirect(url)
  }

  const url = request.nextUrl.clone()
  url.pathname = `/${defaultLocale}${pathname}`
  return NextResponse.rewrite(url)
}

export const config = {
  matcher: ['/((?!_next|api|assets|favicon.ico|.*\\..*).*)'],
}
