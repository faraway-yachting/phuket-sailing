'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/components/providers/LanguageProvider'
import { fetchAllYachts } from '@/lib/api/yachts'
import type { Yacht } from '@/lib/types/home'

export default function YachtsPage() {
  const { t } = useLanguage()
  const [yachts, setYachts] = useState<Yacht[]>([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  useEffect(() => {
    setLoading(true)
    fetchAllYachts(page, 9)
      .then(data => {
        setYachts(data.yachts)
        setTotalPages(data.totalPages)
      })
      .catch(() => setYachts([]))
      .finally(() => setLoading(false))
  }, [page])

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero */}
      <div className="relative w-full h-48 sm:h-56 md:h-64">
        <Image
          src="/assets/images/home/hero.jpg"
          alt="Phuket Sailing Yachts"
          fill
          className="object-cover blur-sm"
          priority
        />
        <div className="absolute inset-0 bg-[#0f3a47]/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-4">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
            All Yachts
          </h1>
          <p className="text-white/90 text-sm sm:text-base text-center max-w-lg drop-shadow-[0_1px_6px_rgba(0,0,0,0.5)]">
            Browse our full fleet of sailing yachts and catamarans
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        {/* Loading Skeleton */}
        {loading && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {[1, 2, 3, 4, 5, 6].map(i => (
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

        {/* Yacht Cards */}
        {!loading && (
          <>
            {yachts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-gray-500 text-lg">No yachts available at the moment.</p>
                <Link href="/" className="text-[#14b8a6] font-semibold mt-3 inline-block hover:underline">Back to Home</Link>
              </div>
            ) : (
              <>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                  {yachts.map((yacht) => (
                    <div
                      key={yacht._id}
                      className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                    >
                      {/* Image + Price Badge */}
                      <div className="relative h-64 sm:h-72 overflow-hidden rounded-t-3xl">
                        <Image
                          src={yacht.primaryImage}
                          alt={yacht.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute bottom-0 right-0 bg-[#14b8a6] text-white rounded-tl-2xl px-4 py-2.5 shadow-lg">
                          <p className="text-[10px] font-bold uppercase tracking-wider leading-tight">{t('featuredYachts.perDay')}</p>
                          <p className="text-xl font-bold leading-tight">€{yacht.daytripPriceEuro || yacht.dayTripPrice}</p>
                        </div>
                      </div>

                      {/* Details */}
                      <div className="p-5">
                        <h3 className="text-lg sm:text-xl font-bold text-[#164e63] mb-3">{yacht.title}</h3>

                        <div className="flex items-center justify-center gap-2 mb-2 text-xs text-gray-700">
                          <svg className="w-4 h-4 text-[#14b8a6] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>{t('featuredYachts.withSkipper')}</span>
                          <span className="text-gray-400">|</span>
                          <span>{yacht.cabins} {t('featuredYachts.cabins')}</span>
                          <span className="text-gray-400">|</span>
                          <span>{yacht.bathrooms} {t('featuredYachts.bathrooms')}</span>
                        </div>

                        <div className="flex items-center justify-center gap-2 mb-4 text-xs text-gray-600">
                          <svg className="w-4 h-4 text-[#14b8a6] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                          </svg>
                          <span className="font-medium">{yacht.length}</span>
                          <span className="text-gray-400">|</span>
                          <svg className="w-4 h-4 text-[#14b8a6] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                          <span className="font-medium">{yacht.guests}</span>
                          <span className="text-gray-400">|</span>
                          <svg className="w-4 h-4 text-[#14b8a6] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                          </svg>
                          <span className="font-medium">{yacht.passengerOvernight}</span>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          <Link href="/contact" className="bg-amber-gradient text-white font-bold py-2.5 px-4 rounded-lg text-xs transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 active:scale-95 flex items-center justify-center">
                            {t('featuredYachts.bookNow')}
                          </Link>
                          <Link href={`/yacht/${yacht._id}`} className="border-2 border-[#14b8a6] text-[#14b8a6] hover:bg-[#14b8a6] hover:text-white font-bold py-2.5 px-4 rounded-lg text-xs transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 active:scale-95 flex items-center justify-center">
                            {t('featuredYachts.details')}
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-center gap-2 mt-10 flex-wrap">
                    <button
                      onClick={() => setPage(p => Math.max(1, p - 1))}
                      disabled={page === 1}
                      className="px-4 py-2 rounded-lg border border-[#164e63] text-[#164e63] text-sm font-semibold disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#164e63] hover:text-white transition-colors"
                    >
                      Previous
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
                      <button
                        key={p}
                        onClick={() => setPage(p)}
                        className={`w-9 h-9 rounded-lg text-sm font-semibold transition-colors ${p === page ? 'bg-[#164e63] text-white' : 'border border-gray-200 text-gray-600 hover:border-[#164e63] hover:text-[#164e63]'}`}
                      >
                        {p}
                      </button>
                    ))}
                    <button
                      onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                      disabled={page === totalPages}
                      className="px-4 py-2 rounded-lg border border-[#164e63] text-[#164e63] text-sm font-semibold disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#164e63] hover:text-white transition-colors"
                    >
                      Next
                    </button>
                  </div>
                )}
              </>
            )}
          </>
        )}
      </div>
    </main>
  )
}
