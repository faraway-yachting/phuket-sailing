'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { useLanguage, useTranslations, languages } from '@/components/providers/LanguageProvider'
import { LocaleLink } from '@/components/shared/LocaleLink'

const FlagIcon = ({ countryCode, size = 24 }: { countryCode: string; size?: number }) => (
  <img
    src={`https://flagcdn.com/w40/${countryCode}.png`}
    srcSet={`https://flagcdn.com/w80/${countryCode}.png 2x`}
    alt={countryCode.toUpperCase()}
    width={size}
    height={Math.round(size * 0.75)}
    className="rounded-sm object-cover"
    style={{ width: size, height: Math.round(size * 0.75) }}
  />
)

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)
  const [copied, setCopied] = useState<string | null>(null)

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(text)
    setTimeout(() => setCopied(null), 1500)
  }
  const langRef = useRef<HTMLDivElement>(null)

  const { locale, setLocale } = useLanguage()
  const t = useTranslations('nav')

  const currentLang = languages.find(l => l.locale === locale) || languages[0]

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setIsLangOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleLanguageChange = (lang: typeof languages[0], e?: React.MouseEvent) => {
    e?.preventDefault()
    e?.stopPropagation()
    setLocale(lang.locale)
    setIsLangOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="hidden md:block bg-gradient-to-r from-[#0a1628] via-[#0f2035] to-[#0a1628] text-white/80 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-8">
          <div className="flex items-center gap-6">
            <button onClick={() => copyToClipboard('+66 61 2345623')} className="relative flex items-center gap-1.5 hover:text-white transition-colors">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              +66 61 2345623
              {copied === '+66 61 2345623' && <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-semibold text-[#14b8a6] whitespace-nowrap">Copied!</span>}
            </button>
            <button onClick={() => copyToClipboard('info@phuket-sailing.com')} className="relative flex items-center gap-1.5 hover:text-white transition-colors">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              info@phuket-sailing.com
              {copied === 'info@phuket-sailing.com' && <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-semibold text-[#14b8a6] whitespace-nowrap">Copied!</span>}
            </button>
          </div>
          <div className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            160 Robinson Road, #14-04 Singapore
          </div>
        </div>
      </div>
      <div className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center justify-between h-16 lg:h-20">
          <LocaleLink href="/" className="flex items-center">
                <div className="relative w-40 h-16 lg:w-52 lg:h-20">
              <Image
                src="/assets/images/logo.png"
                alt="Phuket Sailing Logo"
                fill
                sizes="120px"
                className="object-contain"
                priority
              />
            </div>
          </LocaleLink>

          <div className="hidden lg:flex items-center gap-4 xl:gap-6">
                <LocaleLink
                  href="/catamaran-charter-phuket"
                  className="text-xs xl:text-sm font-medium text-[#164e63] hover:text-[#14b8a6] transition-colors duration-300 whitespace-nowrap"
                >
                  {t('catamaranCharter')}
                </LocaleLink>
                <LocaleLink
                  href="/luxury-yacht-charter"
                  className="text-xs xl:text-sm font-medium text-[#164e63] hover:text-[#14b8a6] transition-colors duration-300 whitespace-nowrap"
                >
                  {t('luxuryYachtCharter')}
                </LocaleLink>
                <LocaleLink
                  href="/cabin-cruise-phuket"
                  className="text-xs xl:text-sm font-medium text-[#164e63] hover:text-[#14b8a6] transition-colors duration-300 whitespace-nowrap"
                >
                  {t('cabinCruise')}
                </LocaleLink>
                <LocaleLink
                  href="/overnight-sailing-charter"
                  className="text-xs xl:text-sm font-medium text-[#164e63] hover:text-[#14b8a6] transition-colors duration-300 whitespace-nowrap"
                >
                  {t('overnightSailing')}
                </LocaleLink>
                <LocaleLink
                  href="/bareboat-sailing-phuket"
                  className="text-xs xl:text-sm font-medium text-[#164e63] hover:text-[#14b8a6] transition-colors duration-300 whitespace-nowrap"
                >
                  {t('bareboatSailing')}
                </LocaleLink>
              </div>

              <div className="hidden lg:flex items-center gap-3 xl:gap-4">
                <div ref={langRef} className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 px-3 py-2 border-2 border-[#14b8a6] rounded-full hover:bg-gray-50 transition-colors duration-300"
              >
                <FlagIcon countryCode={currentLang.countryCode} size={24} />
                <span className="text-sm font-bold text-[#164e63]">{currentLang.code}</span>
                <svg
                  className={`w-4 h-4 text-[#164e63] transition-transform duration-200 ${isLangOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-xl border border-gray-100 py-1 z-50 animate-fadeIn max-h-80 overflow-y-auto">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      type="button"
                      onClick={(e) => handleLanguageChange(lang, e)}
                      className={`w-full flex items-center gap-2 px-3 py-2 hover:bg-gray-50 transition-colors ${
                        locale === lang.locale ? 'bg-gray-50' : ''
                      }`}
                    >
                      <FlagIcon countryCode={lang.countryCode} size={22} />
                      <span className="text-xs text-gray-500">{lang.code}</span>
                      <span className="text-sm font-medium text-[#164e63]">{lang.name}</span>
                      {locale === lang.locale && (
                        <svg className="w-4 h-4 text-[#14b8a6] ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <LocaleLink
              href="/contact"
              className="bg-amber-gradient text-white font-bold px-6 py-2.5 rounded-xl text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
            >
              {t('bookNow')}
            </LocaleLink>
          </div>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-[#164e63]"
                aria-label="Toggle menu"
              >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </nav>

            <div
              className={`lg:hidden overflow-hidden transition-all duration-300 ${
                isMenuOpen ? 'max-h-[600px] pb-4' : 'max-h-0'
              }`}
            >
          <div className="space-y-2">
            <LocaleLink
              href="/catamaran-charter-phuket"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-3 text-[#164e63] font-medium hover:bg-gray-50 hover:text-[#14b8a6] rounded-lg transition-colors"
            >
              {t('catamaranCharter')}
            </LocaleLink>
            <LocaleLink
              href="/luxury-yacht-charter"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-3 text-[#164e63] font-medium hover:bg-gray-50 hover:text-[#14b8a6] rounded-lg transition-colors"
            >
              {t('luxuryYachtCharter')}
            </LocaleLink>
            <LocaleLink
              href="/cabin-cruise-phuket"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-3 text-[#164e63] font-medium hover:bg-gray-50 hover:text-[#14b8a6] rounded-lg transition-colors"
            >
              {t('cabinCruise')}
            </LocaleLink>
            <LocaleLink
              href="/overnight-sailing-charter"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-3 text-[#164e63] font-medium hover:bg-gray-50 hover:text-[#14b8a6] rounded-lg transition-colors"
            >
              {t('overnightSailing')}
            </LocaleLink>
            <LocaleLink
              href="/bareboat-sailing-phuket"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-3 text-[#164e63] font-medium hover:bg-gray-50 hover:text-[#14b8a6] rounded-lg transition-colors"
            >
              {t('bareboatSailing')}
            </LocaleLink>

            <div className="px-4 py-2">
              <p className="text-xs text-gray-500 mb-2">{t('selectLanguage')}</p>
              <div className="grid grid-cols-4 gap-1.5">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={(e) => handleLanguageChange(lang, e)}
                    className={`flex flex-col items-center p-1.5 rounded-lg transition-colors ${
                      locale === lang.locale
                        ? 'bg-[#14b8a6]/10 border-2 border-[#14b8a6]'
                        : 'bg-gray-50 border-2 border-transparent hover:bg-gray-100'
                    }`}
                  >
                    <FlagIcon countryCode={lang.countryCode} size={20} />
                    <span className="text-[10px] font-medium text-[#164e63] mt-0.5">{lang.code}</span>
                  </button>
                ))}
              </div>
            </div>

            <LocaleLink
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-center bg-amber-gradient text-white font-bold px-5 py-3 rounded-xl transition-all duration-300"
            >
              {t('bookNow')}
            </LocaleLink>
          </div>
        </div>
      </div>
      </div>
    </header>
  )
}
