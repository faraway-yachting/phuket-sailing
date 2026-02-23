import { LocaleLink } from '@/components/shared/LocaleLink'
import { fetchYachtBySlug } from '@/lib/api/yachts'
import { getTranslations } from '@/lib/i18n/getTranslations'
import { YachtGallery } from './YachtGallery'
import { YachtAnchors } from './YachtAnchors'
import { YachtContactForm } from './YachtContactForm'

function RichText({ html }: { html: string }) {
  return (
    <div
      className="text-gray-700 leading-relaxed space-y-3 [&_p]:mb-2 [&_ul]:list-disc [&_ul]:ml-5 [&_ol]:list-decimal [&_ol]:ml-5 [&_li]:mb-1 [&_strong]:text-[#164e63] [&_h2]:text-lg [&_h2]:font-bold [&_h2]:text-[#164e63] [&_h3]:font-bold [&_h3]:text-[#164e63] [&_img]:rounded-lg [&_img]:max-w-full"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

export async function YachtDetailPage({ locale, slug, backHref = '/' }: { locale: string; slug: string; backHref?: string }) {
  const { t } = getTranslations(locale)

  let yacht
  let error = false
  try {
    yacht = await fetchYachtBySlug(slug)
  } catch {
    error = true
  }

  if (error || !yacht) {
    return (
      <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
        <h1 className="text-2xl font-bold text-[#164e63] mb-3">{t('yachtDetail.notFound')}</h1>
        <p className="text-gray-500 mb-6 text-center max-w-md">
          {t('yachtDetail.notFoundDescription')}
        </p>
        <LocaleLink href={backHref} className="text-[#14b8a6] font-semibold hover:underline">{t('common.backToHome')}</LocaleLink>
      </main>
    )
  }

  const gallery = Array.from(new Set([yacht.primaryImage].concat(yacht.galleryImages || [])))

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

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 pb-6">
        <LocaleLink href={backHref} className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-[#14b8a6] transition-colors mb-3">
          {t('common.backToHome')}
        </LocaleLink>
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">

          <div className="lg:col-span-2 space-y-6">

            <YachtAnchors anchors={anchors} />

            <div id="about" className="bg-white rounded-xl shadow-md overflow-hidden p-4 sm:p-6 md:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-[#164e63] mb-4 sm:mb-6">{yacht.title}</h2>

              <YachtGallery images={gallery} title={yacht.title} />

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
            <YachtContactForm yachtTitle={yacht.title} />
          </div>
        </div>
      </div>
    </main>
  )
}
