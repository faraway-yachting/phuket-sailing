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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 sm:h-20">
          <LocaleLink href="/" className="flex items-center">
            <div className="relative w-40 h-16 sm:w-52 sm:h-20">
              <Image
                src="/assets/images/logo.png"
                alt="Phuket Sailing Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </LocaleLink>

          <div className="hidden sm:flex items-center gap-8">
            <LocaleLink
              href="/"
              className="text-sm font-medium text-[#164e63] hover:text-[#14b8a6] transition-colors duration-300"
            >
              {t('home')}
            </LocaleLink>
            <LocaleLink
              href="/catamaran-charter-phuket"
              className="text-sm font-medium text-[#164e63] hover:text-[#14b8a6] transition-colors duration-300"
            >
              {t('catamaranCharter')}
            </LocaleLink>
            <LocaleLink
              href="/luxury-yacht-charter"
              className="text-sm font-medium text-[#164e63] hover:text-[#14b8a6] transition-colors duration-300"
            >
              {t('luxuryYachtCharter')}
            </LocaleLink>
            <LocaleLink
              href="/cabin-cruise-phuket"
              className="text-sm font-medium text-[#164e63] hover:text-[#14b8a6] transition-colors duration-300"
            >
              {t('cabinCruise')}
            </LocaleLink>
            <LocaleLink
              href="/overnight-sailing-charter"
              className="text-sm font-medium text-[#164e63] hover:text-[#14b8a6] transition-colors duration-300"
            >
              {t('overnightSailing')}
            </LocaleLink>
            <LocaleLink
              href="/contact"
              className="text-sm font-medium text-[#164e63] hover:text-[#14b8a6] transition-colors duration-300"
            >
              {t('contactUs')}
            </LocaleLink>
          </div>

          <div className="hidden sm:flex items-center gap-4">
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
            className="sm:hidden p-2 rounded-lg text-[#164e63]"
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
          className={`sm:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-[500px] pb-4' : 'max-h-0'
          }`}
        >
          <div className="space-y-2">
            <LocaleLink
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-3 text-[#164e63] font-medium hover:bg-gray-50 hover:text-[#14b8a6] rounded-lg transition-colors"
            >
              {t('home')}
            </LocaleLink>
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
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-3 text-[#164e63] font-medium hover:bg-gray-50 hover:text-[#14b8a6] rounded-lg transition-colors"
            >
              {t('contactUs')}
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
    </header>
  )
}
