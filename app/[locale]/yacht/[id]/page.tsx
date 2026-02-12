'use client'

import { LocaleLink } from '@/components/shared/LocaleLink'
import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { fetchYachtById } from '@/lib/api/yachts'
import { useLanguage } from '@/components/providers/LanguageProvider'
import type { Yacht } from '@/lib/types/home'

export default function YachtDetailsPage() {
  const { id } = useParams<{ id: string }>()
  const { t } = useLanguage()
  const [yacht, setYacht] = useState<Yacht | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [mainImageIndex, setMainImageIndex] = useState(0)

  useEffect(() => {
    fetchYachtById(id)
      .then(data => setYacht(data))
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, [id])

  const gallery = yacht
    ? Array.from(new Set([yacht.primaryImage].concat(yacht.galleryImages || [])))
    : []

  if (loading) {
    return (
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-6">
          <span className="text-sm text-gray-400 block mb-3">{t('common.loading')}</span>
          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-md overflow-hidden animate-pulse">
                <div className="h-14 bg-gray-200" />
                <div className="p-6 space-y-4">
                  <div className="h-72 bg-gray-200 rounded-lg" />
                  <div className="h-6 bg-gray-200 rounded w-2/3" />
                  <div className="grid grid-cols-3 gap-4">
                    {[1, 2, 3].map(i => <div key={i} className="h-24 bg-gray-200 rounded-xl" />)}
                  </div>
                  <div className="h-40 bg-gray-200 rounded-xl" />
                </div>
              </div>
            </div>
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-md animate-pulse p-6 space-y-4">
                <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto" />
                <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto" />
                {[1, 2, 3, 4, 5].map(i => <div key={i} className="h-11 bg-gray-200 rounded-lg" />)}
                <div className="h-12 bg-gray-200 rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }

  if (error || !yacht) {
    return (
      <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
        <h1 className="text-2xl font-bold text-[#164e63] mb-3">{t('yachtDetail.notFound')}</h1>
        <p className="text-gray-500 mb-6 text-center max-w-md">
          {t('yachtDetail.notFoundDescription')}
        </p>
        <LocaleLink href="/" className="text-[#14b8a6] font-semibold hover:underline">{t('common.backToHome')}</LocaleLink>
      </main>
    )
  }

  const youtubeEmbed = (() => {
    if (!yacht.videoLink) return null
    const m = yacht.videoLink.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/)
    return m ? `https://www.youtube.com/embed/${m[1]}` : null
  })()

  const specRows = [
    yacht.design && { label: t('yachtDetail.design'), value: yacht.design },
    yacht.built && { label: t('yachtDetail.built'), value: yacht.built },
    yacht.lengthOverall && { label: t('yachtDetail.lengthOverall'), value: yacht.lengthOverall },
    yacht.cruisingSpeed && { label: t('yachtDetail.cruisingSpeed'), value: yacht.cruisingSpeed },
    yacht.fuelCapacity && { label: t('yachtDetail.fuelCapacity'), value: yacht.fuelCapacity },
    yacht.waterCapacity && { label: t('yachtDetail.waterCapacity'), value: yacht.waterCapacity },
  ].filter(Boolean) as { label: string; value: string }[]

  const anchors = [
    { id: 'about', label: t('yachtDetail.aboutBoat'), icon: 'ℹ' },
    ...(yacht.dayCharter ? [{ id: 'day-charter', label: t('yachtDetail.dayCharter'), icon: '☀' }] : []),
    ...(yacht.overnightCharter ? [{ id: 'overnight-charter', label: t('yachtDetail.overnightCharter'), icon: '🌙' }] : []),
    ...(yacht.boatLayout ? [{ id: 'boat-layout', label: t('yachtDetail.boatLayout'), icon: '📐' }] : []),
  ]

  const scrollTo = (sectionId: string) => {
    const el = document.getElementById(sectionId)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const RichText = ({ html }: { html: string }) => (
    <div
      className="text-gray-700 leading-relaxed space-y-3 [&_p]:mb-2 [&_ul]:list-disc [&_ul]:ml-5 [&_ol]:list-decimal [&_ol]:ml-5 [&_li]:mb-1 [&_strong]:text-[#164e63] [&_h2]:text-lg [&_h2]:font-bold [&_h2]:text-[#164e63] [&_h3]:font-bold [&_h3]:text-[#164e63] [&_img]:rounded-lg [&_img]:max-w-full"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-6">
        <LocaleLink href="/" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-[#14b8a6] transition-colors mb-3">
            {t('common.backToHome')}
          </LocaleLink>
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">

          <div className="lg:col-span-2 space-y-6">

            {anchors.length > 1 && (
              <div className="bg-white rounded-xl shadow-md overflow-hidden sticky top-16 sm:top-20 z-40">
              <div className="flex border-b">
                  {anchors.map(a => (
                <button
                      key={a.id}
                      onClick={() => scrollTo(a.id)}
                      className="flex-1 px-2 sm:px-3 md:px-5 py-2.5 sm:py-3 md:py-4 text-[10px] sm:text-xs md:text-sm font-bold text-gray-600 hover:bg-gray-50 hover:text-[#164e63] transition-all"
                    >
                      <span className="inline-flex items-center gap-1.5">
                        <span>{a.icon}</span>
                        <span>{a.label}</span>
                  </span>
                </button>
                  ))}
                </div>
              </div>
            )}

            <div id="about" className="bg-white rounded-xl shadow-md overflow-hidden p-4 sm:p-6 md:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-[#164e63] mb-4 sm:mb-6">{yacht.title}</h2>

              <div className="mb-6 sm:mb-8">
                <div className="relative h-52 sm:h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden mb-3">
                  <img
                    src={gallery[mainImageIndex]}
                    alt={yacht.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                {gallery.length > 1 && (
                  <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                    {gallery.map((img, idx) => (
                      <div
                        key={idx}
                        onClick={() => setMainImageIndex(idx)}
                        className={`relative h-16 sm:h-20 rounded-lg overflow-hidden cursor-pointer transition-all ${
                          idx === mainImageIndex ? 'ring-2 ring-[#14b8a6] ring-offset-1' : 'hover:opacity-75'
                        }`}
                      >
                        <img src={img} alt={`Photo ${idx + 1}`} className="w-full h-full object-cover" />
                          </div>
                        ))}
                      </div>
                )}
              </div>

              {yacht.videoLink && (
                <div className="mb-6">
                  {youtubeEmbed ? (
                    <div className="aspect-video rounded-xl overflow-hidden shadow-md">
                      <iframe
                        src={youtubeEmbed}
                        title="Yacht video"
                        className="w-full h-full"
                        allowFullScreen
                      />
                    </div>
                  ) : (
                    <a
                      href={yacht.videoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#14b8a6] font-semibold hover:underline"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11l-5.196-3v6l5.196-3z M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {t('yachtDetail.watchVideo')}
                    </a>
                  )}
                </div>
              )}

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8">
                      <div className="bg-white border-2 border-[#14b8a6] rounded-xl p-2.5 sm:p-4 text-center">
                        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#14b8a6] mx-auto mb-1 sm:mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                        </svg>
                  <p className="text-[10px] sm:text-xs text-gray-500 mb-1">{t('yachtDetail.length')}</p>
                  <p className="text-sm sm:text-lg font-bold text-[#164e63]">{yacht.length}</p>
                      </div>

                      <div className="bg-white border-2 border-[#14b8a6] rounded-xl p-2.5 sm:p-4 text-center">
                        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#14b8a6] mx-auto mb-1 sm:mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                  <p className="text-[10px] sm:text-xs text-gray-500 mb-1">{t('yachtDetail.boatType')}</p>
                  <p className="text-sm sm:text-lg font-bold text-[#164e63]">{yacht.boatType}</p>
                      </div>

                      <div className="bg-white border-2 border-[#14b8a6] rounded-xl p-2.5 sm:p-4 text-center">
                        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#14b8a6] mx-auto mb-1 sm:mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <rect x="3" y="11" width="7" height="10" rx="1" strokeLinecap="round" strokeLinejoin="round" />
                          <rect x="14" y="11" width="7" height="10" rx="1" strokeLinecap="round" strokeLinejoin="round" />
                          <line x1="3" y1="9" x2="10" y2="9" strokeLinecap="round" />
                          <line x1="14" y1="9" x2="21" y2="9" strokeLinecap="round" />
                        </svg>
                  <p className="text-[10px] sm:text-xs text-gray-500 mb-1">{t('yachtDetail.cabins')}</p>
                  <p className="text-sm sm:text-lg font-bold text-[#164e63]">{yacht.cabins}</p>
                      </div>

                      <div className="bg-white border-2 border-[#14b8a6] rounded-xl p-2.5 sm:p-4 text-center">
                        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#14b8a6] mx-auto mb-1 sm:mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M9 17v1a3 3 0 003 3v0a3 3 0 003-3v-1" strokeLinecap="round" strokeLinejoin="round" />
                          <rect x="6" y="11" width="12" height="6" rx="1" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M12 11V9" strokeLinecap="round" />
                          <path d="M12 9a2 2 0 100-4 2 2 0 000 4z" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                  <p className="text-[10px] sm:text-xs text-gray-500 mb-1">{t('yachtDetail.bathrooms')}</p>
                  <p className="text-sm sm:text-lg font-bold text-[#164e63]">{yacht.bathrooms}</p>
                      </div>

                      <div className="bg-white border-2 border-[#14b8a6] rounded-xl p-2.5 sm:p-4 text-center">
                        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#14b8a6] mx-auto mb-1 sm:mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                  <p className="text-[10px] sm:text-xs text-gray-500 mb-1">{t('yachtDetail.dayCapacity')}</p>
                  <p className="text-sm sm:text-lg font-bold text-[#164e63]">{yacht.passengerDayTrip}</p>
                      </div>

                      <div className="bg-white border-2 border-[#14b8a6] rounded-xl p-2.5 sm:p-4 text-center">
                        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#14b8a6] mx-auto mb-1 sm:mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>
                  <p className="text-[10px] sm:text-xs text-gray-500 mb-1">{t('yachtDetail.nightCapacity')}</p>
                  <p className="text-sm sm:text-lg font-bold text-[#164e63]">{yacht.passengerOvernight}</p>
                      </div>
                    </div>

              {yacht.aboutThisBoat ? (
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-[#164e63] mb-4">{t('yachtDetail.aboutThisBoat')}</h4>
                  <RichText html={yacht.aboutThisBoat} />
                </div>
              ) : specRows.length > 0 ? (
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h4 className="text-lg font-bold text-[#164e63] mb-4">{t('yachtDetail.aboutBoat')}</h4>
                      <ul className="space-y-3">
                    {specRows.map((row, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-gray-700">
                            <svg className="w-5 h-5 text-[#14b8a6] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        <span><strong>{row.label}:</strong> {row.value}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
              ) : null}

              {yacht.specifications && (
                <div className="bg-gray-50 rounded-xl p-6 mt-6">
                  <h4 className="text-lg font-bold text-[#164e63] mb-4">{t('yachtDetail.specifications')}</h4>
                  <RichText html={yacht.specifications} />
                  </div>
                )}

              {yacht.tags && yacht.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-6">
                  {yacht.tags.map((tag, idx) => (
                    <span key={idx} className="inline-block bg-[#14b8a6]/10 text-[#14b8a6] text-xs font-semibold px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {yacht.dayCharter && (
              <div id="day-charter" className="bg-white rounded-xl shadow-md overflow-hidden p-4 sm:p-6 md:p-8">
                <div className="flex items-center gap-3 mb-5">
                  <svg className="w-7 h-7 text-[#14b8a6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  <h3 className="text-xl font-bold text-[#164e63]">{t('yachtDetail.dayCharter')}</h3>
                </div>

                <RichText html={yacht.dayCharter} />
                  </div>
                )}

            {yacht.overnightCharter && (
              <div id="overnight-charter" className="bg-white rounded-xl shadow-md overflow-hidden p-4 sm:p-6 md:p-8">
                <div className="flex items-center gap-3 mb-5">
                  <svg className="w-7 h-7 text-[#14b8a6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                  <h3 className="text-xl font-bold text-[#164e63]">{t('yachtDetail.overnightCharter')}</h3>
                </div>

                <RichText html={yacht.overnightCharter} />
                  </div>
                )}

            {yacht.boatLayout && (
              <div id="boat-layout" className="bg-white rounded-xl shadow-md overflow-hidden p-4 sm:p-6 md:p-8">
                <div className="flex items-center gap-3 mb-5">
                  <svg className="w-7 h-7 text-[#14b8a6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm0 8a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zm12 0a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                  <h3 className="text-xl font-bold text-[#164e63]">{t('yachtDetail.boatLayout')}</h3>
                </div>

                <RichText html={yacht.boatLayout} />
              </div>
            )}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:sticky lg:top-24">

              <h3 className="text-lg font-bold text-[#164e63] text-center mb-4">{yacht.title}</h3>

              <div className="text-center mb-4 space-y-2">
                  <a href="tel:+6661234562" className="flex items-center justify-center gap-2 text-[#164e63] hover:text-[#14b8a6] transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  <span className="font-semibold text-sm">+66 61 234 5623</span>
                  </a>
                  <a href="https://wa.me/6661234562" className="flex items-center justify-center gap-2 text-[#164e63] hover:text-[#14b8a6] transition-colors">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  <span className="font-semibold text-sm">+66 61 234 5623</span>
                  </a>
              </div>

              <form className="space-y-3">
                <input type="text" placeholder={t('yachtDetail.yourName')} required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#14b8a6] focus:border-transparent text-sm" />
                <input type="email" placeholder={t('yachtDetail.email')} required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#14b8a6] focus:border-transparent text-sm" />
                <div className="flex flex-col sm:flex-row gap-2">
                  <select className="w-full sm:w-auto px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#14b8a6] text-sm">
                    <option>+66</option><option>+1</option><option>+44</option>
                  </select>
                  <input type="tel" placeholder={t('yachtDetail.whatsapp')}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#14b8a6] focus:border-transparent text-sm" />
                </div>
                <input type="number" placeholder={t('yachtDetail.noOfGuests')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#14b8a6] focus:border-transparent text-sm" />
                <div className="grid grid-cols-2 gap-2">
                  <input type="date"
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#14b8a6] focus:border-transparent text-sm" />
                  <input type="date"
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#14b8a6] focus:border-transparent text-sm" />
                </div>
                <textarea rows={3} placeholder={t('yachtDetail.commentsRequests')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#14b8a6] focus:border-transparent text-sm resize-none" />
                <button type="submit"
                  className="w-full bg-gradient-to-r from-[#164e63] to-[#0a2a35] hover:from-[#0a2a35] hover:to-[#164e63] text-white font-bold py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                  {t('common.submit')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
