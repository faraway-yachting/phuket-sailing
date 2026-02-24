import Link from 'next/link'
import { fetchAllYachts } from '@/lib/api/yachts'
import { locales, localeNames, localeNativeNames, defaultLocale, type Locale } from '@/lib/i18n'
import { translatePath } from '@/lib/slugTranslations'
import { getTranslations } from '@/lib/i18n/getTranslations'

const localeLabels: Record<Locale, string> = {
  en: 'EN',
  fr: 'FR',
  de: 'DE',
  ru: 'RU',
  cn: 'ZH',
  th: 'TH',
  ar: 'AR',
}

function buildPath(locale: string, path: string) {
  const translated = translatePath(locale, path)
  if (locale === defaultLocale) return translated
  return `/${locale}${translated}`
}

function SitemapLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 rounded-lg hover:border-[#164e63] hover:bg-[#164e63]/5 transition-all text-sm text-[#164e63]"
    >
      <span className="text-amber-600">→</span>
      <span className="truncate">{label}</span>
    </Link>
  )
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl font-bold text-[#0a2a35] mb-4 mt-10" style={{ fontFamily: 'var(--font-playfair)' }}>
      {children}
    </h2>
  )
}

export default async function SitemapPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const currentLocale = locale as Locale
  const { t } = getTranslations(currentLocale)

  const mainPages = [
    { label: t('sitemapPage.home'), path: '/' },
    { label: t('sitemapPage.contact'), path: '/contact' },
    { label: t('sitemapPage.termsConditions'), path: '/terms-and-conditions' },
    { label: t('sitemapPage.privacyPolicy'), path: '/privacy-policy' },
    { label: t('sitemapPage.impressum'), path: '/impressum' },
  ]

  const charterServices = [
    { label: t('sitemapPage.catamaranCharter'), path: '/catamaran-charter-phuket' },
    { label: t('sitemapPage.luxuryYachtCharter'), path: '/luxury-yacht-charter' },
    { label: t('sitemapPage.cabinCruise'), path: '/cabin-cruise-phuket' },
    { label: t('sitemapPage.overnightSailing'), path: '/overnight-sailing-charter' },
    { label: t('sitemapPage.bareboatSailing'), path: '/bareboat-sailing-phuket' },
  ]

  let bareboatYachts: { title: string; slug: string }[] = []
  let crewedYachts: { title: string; slug: string }[] = []
  let superYachts: { title: string; slug: string }[] = []
  let totalYachts = 0

  try {
    let page = 1
    let allYachts: { title: string; slug: string; type?: string; tags?: string[] }[] = []
    while (true) {
      const { yachts, totalPages } = await fetchAllYachts(page, 100)
      allYachts = [...allYachts, ...yachts]
      if (page >= totalPages) break
      page++
    }
    totalYachts = allYachts.length
    bareboatYachts = allYachts.filter(y => y.type?.toLowerCase() === 'bareboat').map(y => ({ title: y.title, slug: y.slug }))
    crewedYachts = allYachts.filter(y => y.type?.toLowerCase() !== 'bareboat').map(y => ({ title: y.title, slug: y.slug }))
    superYachts = allYachts.filter(y => y.tags?.some(t => t.toLowerCase() === 'super yacht')).map(y => ({ title: y.title, slug: y.slug }))
  } catch {
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-2">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#0a2a35]" style={{ fontFamily: 'var(--font-playfair)' }}>
            {t('sitemapPage.title')} – {localeNativeNames[currentLocale]}
          </h1>
          <div className="flex gap-2 flex-wrap">
            {locales.map((loc) => (
              <Link
                key={loc}
                href={buildPath(loc, '/sitemap-page')}
                className={`px-3 py-1.5 rounded-md text-xs font-bold uppercase transition-colors ${
                  loc === currentLocale
                    ? 'bg-[#164e63] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {localeLabels[loc]}
              </Link>
            ))}
          </div>
        </div>
        <p className="text-sm text-gray-500 mb-6">
          {t('sitemapPage.allPages')} {localeNativeNames[currentLocale]}
        </p>

        <SectionTitle>{t('sitemapPage.mainPages')}</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {mainPages.map((p) => (
            <SitemapLink key={p.path} href={buildPath(currentLocale, p.path)} label={p.label} />
          ))}
        </div>

        <hr className="my-8 border-gray-200" />

        <SectionTitle>{t('sitemapPage.charterServices')}</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {charterServices.map((p) => (
            <SitemapLink key={p.path} href={buildPath(currentLocale, p.path)} label={p.label} />
          ))}
        </div>

        {bareboatYachts.length > 0 && (
          <>
            <hr className="my-8 border-gray-200" />
            <SectionTitle>{t('sitemapPage.bareboatYachts')}</SectionTitle>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {bareboatYachts.map((y) => (
                <SitemapLink key={y.slug} href={buildPath(currentLocale, `/bareboat/${y.slug}`)} label={y.title} />
              ))}
            </div>
          </>
        )}

        {crewedYachts.length > 0 && (
          <>
            <hr className="my-8 border-gray-200" />
            <SectionTitle>{t('sitemapPage.crewedYachts')}</SectionTitle>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {crewedYachts.map((y) => (
                <SitemapLink key={y.slug} href={buildPath(currentLocale, `/crewed_boats/${y.slug}`)} label={y.title} />
              ))}
            </div>
          </>
        )}

        {superYachts.length > 0 && (
          <>
            <hr className="my-8 border-gray-200" />
            <SectionTitle>{t('sitemapPage.superYachts')}</SectionTitle>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {superYachts.map((y) => (
                <SitemapLink key={y.slug} href={buildPath(currentLocale, `/crewed_boats/${y.slug}`)} label={y.title} />
              ))}
            </div>
          </>
        )}

        <hr className="my-8 border-gray-200" />

        <SectionTitle>{t('sitemapPage.dynamicContent')}</SectionTitle>
        <div className="text-sm text-gray-600 space-y-2 mb-6">
          <p>{t('sitemapPage.dynamicContentIntro')}</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>{t('sitemapPage.dynamicYachtDetails').replace('{count}', String(totalYachts)).replace('{langs}', String(locales.length))}</li>
            <li>{t('sitemapPage.dynamicLanguages')} {locales.map(l => localeNativeNames[l]).join(', ')}</li>
          </ul>
        </div>

        {totalYachts > 0 && (
          <>
            <SectionTitle>{t('sitemapPage.yachtStatistics')}</SectionTitle>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              {[
                { label: t('sitemapPage.totalYachts'), count: totalYachts },
                { label: t('sitemapPage.bareboat'), count: bareboatYachts.length },
                { label: t('sitemapPage.crewed'), count: crewedYachts.length },
                { label: t('sitemapPage.superYachts'), count: superYachts.length },
              ].map((s) => (
                <div key={s.label} className="border border-gray-200 rounded-lg p-4">
                  <p className="text-xs font-bold text-[#0a2a35] uppercase">{s.label}</p>
                  <p className="text-2xl font-bold text-[#164e63]">{s.count}</p>
                </div>
              ))}
            </div>
          </>
        )}

        <SectionTitle>{t('sitemapPage.xmlSitemaps')}</SectionTitle>
        <p className="text-sm text-gray-600 mb-4">
          {t('sitemapPage.xmlSitemapsDesc')}
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <a
            href="/sitemap.xml"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-lg text-white text-sm font-bold text-center transition-all hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #0a1628 0%, #164e63 100%)' }}
          >
            {t('sitemapPage.generalIndex')}
          </a>
          {locales.map((loc) => (
            <a
              key={loc}
              href="/sitemap.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-lg text-white text-sm font-bold text-center transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #0a1628 0%, #0f3a47 100%)' }}
            >
              {localeNativeNames[loc]} ({localeLabels[loc]})
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
