'use client'

import React, { useState, useTransition } from 'react'
import Image from 'next/image'
import { LocaleLink } from '@/components/shared/LocaleLink'
import { useLanguage } from '@/components/providers/LanguageProvider'
import { fetchAllYachts } from '@/lib/api/yachts'
import type { Yacht } from '@/lib/types/home'

interface Props {
  initialYachts: Yacht[]
  initialPage: number
  initialTotalPages: number
}

export function YachtsGrid({ initialYachts, initialPage, initialTotalPages }: Props) {
  const { t } = useLanguage()
  const [yachts, setYachts] = useState<Yacht[]>(initialYachts)
  const [page, setPage] = useState(initialPage)
  const [totalPages, setTotalPages] = useState(initialTotalPages)
  const [isPending, startTransition] = useTransition()

  const changePage = (newPage: number) => {
    startTransition(async () => {
      try {
        const data = await fetchAllYachts(newPage, 9)
        setYachts(data.yachts)
        setTotalPages(data.totalPages)
        setPage(newPage)
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } catch {
        // keep current state on error
      }
    })
  }

  return (
    <>
      {yachts.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-500 text-lg">No yachts available at the moment.</p>
          <LocaleLink href="/" className="text-[#14b8a6] font-semibold mt-3 inline-block hover:underline">Back to Home</LocaleLink>
        </div>
      ) : (
        <>
          <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 transition-opacity duration-300 ${isPending ? 'opacity-50' : ''}`}>
            {yachts.map((yacht) => (
              <LocaleLink
                key={yacht._id}
                href={`/yacht/${yacht.slug}`}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer block"
              >
                <div className="relative h-64 sm:h-72 overflow-hidden rounded-t-3xl">
                  <Image
                    src={yacht.primaryImage}
                    alt={yacht.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 right-0 bg-[#14b8a6] text-white rounded-tl-2xl px-4 py-2.5 shadow-lg">
                    <p className="text-[10px] font-bold uppercase tracking-wider leading-tight">{t('featuredYachts.from')}</p>
                    <p className="text-xl font-bold leading-tight">€{yacht.daytripPriceEuro || yacht.dayTripPrice}</p>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-lg sm:text-xl font-bold text-[#164e63] mb-3">{yacht.title}</h3>

                  <div className="flex items-center justify-center gap-1 mb-2 text-[13px] text-gray-700">
                    <svg className="w-[18px] h-[18px] text-[#14b8a6] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{t('featuredYachts.withSkipper')}</span>
                    <span className="text-gray-400 mx-1">|</span>
                    <span>{yacht.cabins} {t('featuredYachts.cabins')}</span>
                    <span className="text-gray-400 mx-1">|</span>
                    <span>{yacht.bathrooms} {t('featuredYachts.bathrooms')}</span>
                  </div>

                  <div className="flex items-center justify-center gap-1 mb-4 text-[13px] text-gray-600">
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
                    <span className="bg-amber-gradient text-white font-bold py-2.5 px-8 sm:px-12 rounded-xl text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 active:scale-95 inline-flex items-center justify-center">
                      {t('featuredYachts.bookNow')}
                    </span>
                  </div>
                </div>
              </LocaleLink>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-1 sm:gap-2 mt-10 flex-wrap px-4">
              <button
                onClick={() => changePage(Math.max(1, page - 1))}
                disabled={page === 1 || isPending}
                className="px-3 sm:px-4 py-2 rounded-lg border border-[#164e63] text-[#164e63] text-xs sm:text-sm font-semibold disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#164e63] hover:text-white transition-colors"
              >
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
                <button
                  key={p}
                  onClick={() => changePage(p)}
                  disabled={isPending}
                  className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg text-xs sm:text-sm font-semibold transition-colors ${p === page ? 'bg-[#164e63] text-white' : 'border border-gray-200 text-gray-600 hover:border-[#164e63] hover:text-[#164e63]'}`}
                >
                  {p}
                </button>
              ))}
              <button
                onClick={() => changePage(Math.min(totalPages, page + 1))}
                disabled={page === totalPages || isPending}
                className="px-3 sm:px-4 py-2 rounded-lg border border-[#164e63] text-[#164e63] text-xs sm:text-sm font-semibold disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#164e63] hover:text-white transition-colors"
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </>
  )
}
