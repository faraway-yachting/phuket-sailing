'use client'

import { useState } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { LocaleLink } from '@/components/shared/LocaleLink'
import { useLanguage } from '@/components/providers/LanguageProvider'
import { useYachtCache } from '@/contexts/YachtCacheContext'
import type { Yacht } from '@/lib/types/home'

const PAGE_SIZE = 9

// Strip locale prefix: /en/bareboat-sailing-phuket → /bareboat-sailing-phuket
function stripLocale(pathname: string): string {
  return pathname.replace(/^\/[a-z]{2}(\/|$)/, '/').replace(/\/$/, '') || '/'
}

// Central filter — path → DB field mapping
// type field:  "crewed" | "bareboat"  (set in admin panel per yacht)
// tags field:  string[]               (e.g. ["overnight", "super yacht"])
function getYachtHrefPrefix(pathname: string): string {
  return stripLocale(pathname) === '/bareboat-sailing-phuket' ? '/bareboat' : '/crewed_boats'
}

function filterYachtsByPath(yachts: Yacht[], pathname: string): Yacht[] {
  const path = stripLocale(pathname)

  // Bareboat page → only yachts with type:"bareboat" in the DB
  if (path === '/bareboat-sailing-phuket') {
    return yachts.filter(y => y.type?.toLowerCase() === 'bareboat')
  }

  // Overnight page → only yachts tagged "overnight" in the DB
  if (path === '/overnight-sailing-charter') {
    return yachts.filter(y =>
      y.tags?.some(t => t.toLowerCase() === 'overnight')
    )
  }

  // Luxury yacht charter page → only yachts tagged "super yacht" in the DB
  if (path === '/luxury-yacht-charter') {
    return yachts.filter(y =>
      y.tags?.some(t => t.toLowerCase() === 'super yacht')
    )
  }

  // All other pages → show everything
  return yachts
}

export function FeaturedYachts() {
  const { t } = useLanguage()
  const pathname = usePathname() ?? '/'
  const { yachts: allYachts, loading, error } = useYachtCache()
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)

  const filtered = filterYachtsByPath(allYachts, pathname)
  const yachtPrefix = getYachtHrefPrefix(pathname)
  const visible = filtered.slice(0, visibleCount)
  const hasMoreFiltered = visibleCount < filtered.length

  const handleLoadMore = () => {
    setVisibleCount(v => v + PAGE_SIZE)
  }

  return (
    <section className="py-10 sm:py-14 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#164e63] mb-4">
            {t('featuredYachts.title')}
          </h2>
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="h-1 w-12 bg-[#164e63] rounded-full"></div>
            <div className="h-2 w-2 bg-amber-500 rounded-full"></div>
            <div className="h-1 w-12 bg-[#164e63] rounded-full"></div>
          </div>
        </div>

        {/* Loading Skeleton */}
        {loading && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {Array.from({ length: PAGE_SIZE }, (_, i) => (
              <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-lg animate-pulse">
                <div className="h-64 sm:h-72 bg-gray-200 rounded-t-3xl" />
                <div className="p-5 space-y-3">
                  <div className="h-6 bg-gray-200 rounded w-3/4" />
                  <div className="h-4 bg-gray-100 rounded w-full" />
                  <div className="h-4 bg-gray-100 rounded w-5/6" />
                  <div className="h-10 bg-gray-200 rounded-lg mt-4" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Error state */}
        {!loading && error && (
          <div className="text-center py-12">
            <p className="text-lg text-red-500">Failed to load yachts: {error}</p>
          </div>
        )}

        {/* Empty state */}
        {!loading && !error && filtered.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-gray-500">No yachts available.</p>
          </div>
        )}

        {/* Yacht Cards Grid */}
        {!loading && !error && visible.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {visible.map((yacht) => (
              <LocaleLink
                key={yacht._id}
                href={`${yachtPrefix}/${yacht.slug}`}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer block"
              >
                {/* Image */}
                <div className="relative h-64 sm:h-72 overflow-hidden rounded-t-3xl">
                  <Image
                    src={yacht.primaryImage}
                    alt={yacht.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Price Badge */}
                  <div className="absolute bottom-0 right-0 bg-[#14b8a6] text-white rounded-tl-2xl px-3 sm:px-4 py-2 sm:py-2.5 shadow-lg">
                    <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider leading-tight">{t('featuredYachts.from')}</p>
                    <p className="text-lg sm:text-xl font-bold leading-tight">€{yacht.daytripPriceEuro || yacht.dayTripPrice}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg sm:text-xl font-bold text-[#164e63] mb-3">{yacht.title}</h3>

                  <div className="flex items-center justify-center gap-2 mb-2 text-xs sm:text-sm text-gray-600 flex-wrap">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-[#14b8a6]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      {yacht.type?.toLowerCase() === 'bareboat' ? t('featuredYachts.withoutSkipper') : t('featuredYachts.withSkipper')}
                    </span>
                    <span className="text-gray-300">|</span>
                    <span>{yacht.cabins} {t('featuredYachts.cabins')}</span>
                    <span className="text-gray-300">|</span>
                    <span>{yacht.bathrooms} {t('featuredYachts.bathrooms')}</span>
                  </div>

                  <div className="flex items-center justify-center gap-2 mb-4 text-xs sm:text-sm text-gray-500 flex-wrap">
                    <span>{yacht.length}</span>
                    <span className="text-gray-300">|</span>
                    <span>{yacht.guests} {t('featuredYachts.guests')}</span>
                    <span className="text-gray-300">|</span>
                    <span>{yacht.passengerOvernight} {t('featuredYachts.overnight')}</span>
                  </div>

                  <div className="flex justify-center">
                    <span
                      className="text-white font-bold py-2.5 px-10 rounded-xl text-sm shadow-md inline-flex items-center justify-center"
                      style={{ background: 'linear-gradient(90deg, #A0522D 0%, #FF8C00 100%)' }}
                    >
                      {t('featuredYachts.bookNow')}
                    </span>
                  </div>
                </div>
              </LocaleLink>
            ))}
          </div>
        )}

        {/* Load More */}
        {!loading && hasMoreFiltered && (
          <div className="text-center mt-10 sm:mt-12">
            <button
              onClick={handleLoadMore}
              className="inline-flex items-center justify-center gap-2 text-white font-bold px-10 py-4 rounded-xl text-base transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95"
              style={{ background: 'linear-gradient(135deg, #164e63 0%, #0d3a47 100%)' }}
            >
              {t('featuredYachts.viewMore')}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
