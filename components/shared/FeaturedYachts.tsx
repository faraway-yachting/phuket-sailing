'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { LocaleLink } from '@/components/shared/LocaleLink'
import { useLanguage } from '@/components/providers/LanguageProvider'
import { fetchAllYachts } from '@/lib/api/yachts'
import type { Yacht } from '@/lib/types/home'

export function FeaturedYachts() {
  const { t } = useLanguage()
  const [yachts, setYachts] = useState<Yacht[]>([])
  const [loading, setLoading] = useState(true)
  const [loadingMore, setLoadingMore] = useState(false)
  const [nextPage, setNextPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)

  useEffect(() => {
    fetchAllYachts(1, 9)
      .then(data => {
        if (data.yachts.length > 0) setYachts(data.yachts)
        if (data.total <= 9) setHasMore(false)
      })
      .catch(() => setHasMore(false))
      .finally(() => setLoading(false))
  }, [])

  const handleLoadMore = () => {
    setLoadingMore(true)
    fetchAllYachts(nextPage, 9)
      .then(data => {
        setYachts(prev => {
          const existingIds = new Set(prev.map(y => y._id))
          const newYachts = data.yachts.filter(y => !existingIds.has(y._id))
          return [...prev, ...newYachts]
        })
        setNextPage(p => p + 1)
        if (data.yachts.length < 9) setHasMore(false)
      })
      .catch(() => {})
      .finally(() => setLoadingMore(false))
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
            {Array.from({ length: 9 }, (_, i) => i + 1).map(i => (
              <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-lg animate-pulse">
                <div className="h-64 sm:h-72 bg-gray-200 rounded-t-3xl" />
                <div className="p-5 space-y-3">
                  <div className="h-6 bg-gray-200 rounded w-3/4" />
                  <div className="h-4 bg-gray-100 rounded w-full" />
                  <div className="h-4 bg-gray-100 rounded w-5/6" />
                  <div className="flex gap-2 mt-4">
                    <div className="h-10 bg-gray-200 rounded-lg flex-1" />
                    <div className="h-10 bg-gray-200 rounded-lg flex-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Yacht Cards Grid */}
        {!loading && yachts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-gray-500">Loading yachts...</p>
          </div>
        )}

        {!loading && yachts.length > 0 && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {yachts.map((yacht) => (
            <LocaleLink
              key={yacht._id}
              href={`/yacht/${yacht.slug}`}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer block"
            >
              {/* Yacht Image with Price Badge */}
              <div className="relative h-64 sm:h-72 overflow-hidden rounded-t-3xl">
                <Image
                  src={yacht.primaryImage}
                  alt={yacht.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Price Badge - Bottom Right Corner */}
                <div className="absolute bottom-0 right-0 bg-[#14b8a6] text-white rounded-tl-2xl px-2.5 sm:px-4 py-2 sm:py-2.5 shadow-lg">
                  <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider leading-tight">{t('featuredYachts.from')}</p>
                  <p className="text-lg sm:text-xl font-bold leading-tight">€{yacht.daytripPriceEuro || yacht.dayTripPrice}</p>
                </div>
              </div>

              {/* Yacht Details */}
              <div className="p-5">
                <h3 className="text-lg sm:text-xl font-bold text-[#164e63] mb-3">
                  {yacht.title}
                </h3>

                    {/* First Line - With Skipper, Cabins, Bathrooms */}
                    <div className="flex items-center justify-center gap-1 mb-2 text-[12px] sm:text-[13px] text-gray-700 flex-wrap">
                  <svg className="w-[18px] h-[18px] text-[#14b8a6] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{t('featuredYachts.withSkipper')}</span>
                  <span className="text-gray-400 mx-1">|</span>
                  <svg className="w-[18px] h-[18px] text-[#14b8a6] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <rect x="3" y="11" width="7" height="10" rx="1" strokeLinecap="round" strokeLinejoin="round" />
                    <rect x="14" y="11" width="7" height="10" rx="1" strokeLinecap="round" strokeLinejoin="round" />
                    <line x1="3" y1="9" x2="10" y2="9" strokeLinecap="round" />
                    <line x1="14" y1="9" x2="21" y2="9" strokeLinecap="round" />
                  </svg>
                  <span>{yacht.cabins} {t('featuredYachts.cabins')}</span>
                  <span className="text-gray-400 mx-1">|</span>
                  <svg className="w-[18px] h-[18px] text-[#14b8a6] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M9 17v1a3 3 0 003 3v0a3 3 0 003-3v-1" strokeLinecap="round" strokeLinejoin="round" />
                    <rect x="6" y="11" width="12" height="6" rx="1" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 11V9" strokeLinecap="round" />
                    <path d="M12 9a2 2 0 100-4 2 2 0 000 4z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>{yacht.bathrooms} {t('featuredYachts.bathrooms')}</span>
                </div>

                    <div className="flex items-center justify-center gap-1 mb-4 text-[12px] sm:text-[13px] text-gray-600 flex-wrap">
                  <svg className="w-[18px] h-[18px] text-[#14b8a6] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                  <span className="font-medium">{yacht.length}</span>
                  <span className="text-gray-400 mx-1">|</span>
                  <svg className="w-[18px] h-[18px] text-[#14b8a6] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="font-medium">{yacht.guests}</span>
                  <span className="text-gray-400 mx-1">|</span>
                  <svg className="w-[18px] h-[18px] text-[#14b8a6] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <span className="font-medium">{yacht.passengerOvernight}</span>
                </div>

                <div className="flex justify-center">
                  <span className="bg-amber-gradient text-white font-bold py-2.5 px-8 sm:px-14 md:px-20 rounded-xl text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 active:scale-95 inline-flex items-center justify-center">
                    {t('featuredYachts.bookNow')}
                  </span>
                </div>
              </div>
            </LocaleLink>
          ))}
        </div>
        )}

        {hasMore && (
          <div className="text-center mt-10 sm:mt-12">
            <button
              onClick={handleLoadMore}
              disabled={loadingMore}
              className="inline-flex items-center justify-center bg-gradient-to-r from-[#164e63] to-[#0d3a47] hover:from-[#0d3a47] hover:to-[#164e63] text-white font-bold px-8 sm:px-12 py-4 rounded-xl text-base sm:text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 disabled:opacity-70 disabled:cursor-wait"
            >
              {t('featuredYachts.viewMore')}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
