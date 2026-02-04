'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CTAButton } from '@/components/shared/CTAButton'
import { ContactCards } from '@/components/shared/ContactCards'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { Phone, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react'
import { useLanguage } from '@/components/providers/LanguageProvider'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <JumpLinks />
      <ContactCardsSection />
      <FeaturedYachtsSection />
      <CharterStylesSection />
      <SailingPhuketSection />
      <SailingContactSection />
      <WhatTripTypeSection />
      <OvernightSailingSection />
      <OvernightRecommendationSection />
      <CatamaranContactSection />
      <CatamaranVsSailingSection />
      <PopularRoutesSection />
      <WhoItsForSection />
      <WhatsIncludedSection />
      <PricingSection />
      <BookingContactSection />
      <BookingProcessSection />
      <ExplorePages />
      <FAQSection />
      <FinalCTASection />
    </main>
  )
}

function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/home/hero2.png"
          alt="Sailing in Phuket"
          fill
          className="object-cover blur-[2px]"
          priority
          quality={100}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-l from-black/50 via-black/20 to-transparent z-[1]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 sm:py-16 md:py-20 flex justify-end">
        <div className="max-w-xl ml-16 sm:ml-20 md:ml-24 lg:ml-32">
          <h1 className="font-[family-name:var(--font-playfair)] text-white mb-4 sm:mb-6 leading-[1.2] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7), 0 0 20px rgba(0, 0, 0, 0.5)' }}>
            {t('hero.title')}
          </h1>

          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-white leading-relaxed max-w-xl" style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.8), 0 0 10px rgba(0, 0, 0, 0.6)' }}>
            {t('hero.description')}
          </p>

          <CTAButton 
            href="/contact" 
            trackingId="hero-quote" 
            className="!px-6 !py-3 !text-base"
            style={{ background: 'linear-gradient(90deg, #A0522D 0%, #FF8C00 100%)' }}
          >
            {t('hero.cta')}
          </CTAButton>
        </div>
      </div>
    </section>
  )
}

function ContactCardsSection() {
  return (
    <section className="bg-white py-6 sm:py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ContactCards />
      </div>
    </section>
  )
}

function JumpLinks() {
  const { t } = useLanguage()

  const links = [
    { href: '#charter-style', label: t('nav.charterStyles') },
    { href: '#sailing-phuket', label: t('nav.sailingPhuket') },
    { href: '#overnight', label: t('nav.overnightTrips') },
    { href: '#catamaran-vs-sailing', label: t('nav.catamaranVsSailing') },
    { href: '#routes', label: t('nav.routes') },
    { href: '#included', label: t('nav.included') },
    { href: '#pricing', label: t('nav.pricing') },
    { href: '#booking', label: t('nav.booking') },
    { href: '#faqs', label: t('nav.faq') },
  ]

  return (
    <nav className="py-2 sm:py-4">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="bg-white/90 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-2xl p-2.5 sm:p-3 md:p-5 lg:p-6 border border-white/20">
          <div className="flex flex-wrap items-center justify-center gap-x-1.5 sm:gap-x-2 md:gap-x-3 gap-y-1 sm:gap-y-1.5 md:gap-y-2">
            {links.map((link, index) => (
              <span key={link.href} className="flex items-center gap-1.5 sm:gap-2 md:gap-3">
                <a
                  href={link.href}
                  className="text-[#164e63] hover:text-[#0891b2] transition-colors duration-300 text-[10px] sm:text-xs md:text-sm lg:text-base font-medium whitespace-nowrap px-0.5 sm:px-1"
                >
                  {link.label}
                </a>
                {index < links.length - 1 && (
                  <span className="text-gray-300 text-[10px] sm:text-xs md:text-sm lg:text-base">|</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

function YachtFormSection() {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-ocean-50 relative">
      <div className="absolute inset-0 bg-[url('/assets/images/home/catamaran-aerial-hero.jpg')] opacity-5 bg-fixed bg-center bg-cover"></div>
      <div className="max-w-4xl mx-auto container-padding relative z-10">
        <div className="text-center mb-8">
          <div className="inline-block px-6 py-2 bg-sunset-500 text-white rounded-full font-bold text-sm mb-4 animate-pulse">
            🔥 POPULAR - Book Your Dream Yacht Now
          </div>
        </div>
      </div>
    </section>
  )
}

function FeaturedYachtsSection() {
  const { t } = useLanguage()

  const yachts = [
    {
      name: 'Serenity Seeker',
      image: '/assets/images/home/catamaran.webp',
      length: '51 ft',
      guests: 30,
      beds: 8,
      cabins: 4,
      bathrooms: 4,
      pricePerDay: 399,
      currency: '$',
    },
    {
      name: 'Ocean Whisperer',
      image: '/assets/images/home/sailing-yacht.jpg',
      length: '45 ft',
      guests: 12,
      beds: 6,
      cabins: 3,
      bathrooms: 3,
      pricePerDay: 199,
      currency: '$',
    },
    {
      name: 'Majestic Pearl',
      image: '/assets/images/home/overnight-sailing.webp',
      length: '58 ft',
      guests: 40,
      beds: 12,
      cabins: 5,
      bathrooms: 5,
      pricePerDay: 799,
      currency: '$',
    }
  ]

  return (
    <section className="py-10 sm:py-14 bg-gradient-to-b from-gray-50 to-white">
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

        {/* Yacht Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {yachts.map((yacht, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Yacht Image with Price Badge */}
              <div className="relative h-64 sm:h-72 overflow-hidden rounded-t-3xl">
                <Image
                  src={yacht.image}
                  alt={yacht.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Price Badge - Bottom Right Corner */}
                <div className="absolute bottom-0 right-0 bg-[#14b8a6] text-white rounded-tl-2xl px-4 py-2.5 shadow-lg">
                  <p className="text-[10px] font-bold uppercase tracking-wider leading-tight">{t('featuredYachts.perDay')}</p>
                  <p className="text-xl font-bold leading-tight">{yacht.currency}{yacht.pricePerDay}</p>
                </div>
              </div>

              {/* Yacht Details */}
              <div className="p-5">
                <h3 className="text-lg sm:text-xl font-bold text-[#164e63] mb-3">
                  {yacht.name}
                </h3>

                {/* First Line - With Skipper, Cabins, Bathrooms */}
                <div className="flex items-center justify-center gap-2 mb-2 text-xs text-gray-700">
                  <svg className="w-4 h-4 text-[#14b8a6] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{t('featuredYachts.withSkipper')}</span>
                  <span className="text-gray-400">|</span>
                  <svg className="w-4 h-4 text-[#14b8a6] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <rect x="3" y="11" width="7" height="10" rx="1" strokeLinecap="round" strokeLinejoin="round" />
                    <rect x="14" y="11" width="7" height="10" rx="1" strokeLinecap="round" strokeLinejoin="round" />
                    <line x1="3" y1="9" x2="10" y2="9" strokeLinecap="round" />
                    <line x1="14" y1="9" x2="21" y2="9" strokeLinecap="round" />
                  </svg>
                  <span>{yacht.cabins} {t('featuredYachts.cabins')}</span>
                  <span className="text-gray-400">|</span>
                  <svg className="w-4 h-4 text-[#14b8a6] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M9 17v1a3 3 0 003 3v0a3 3 0 003-3v-1" strokeLinecap="round" strokeLinejoin="round" />
                    <rect x="6" y="11" width="12" height="6" rx="1" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 11V9" strokeLinecap="round" />
                    <path d="M12 9a2 2 0 100-4 2 2 0 000 4z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
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
                  <span className="font-medium">{yacht.beds}</span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <Link href="/contact" className="bg-amber-gradient text-white font-bold py-2.5 px-4 rounded-lg text-xs transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 active:scale-95 flex items-center justify-center">
                    {t('featuredYachts.bookNow')}
                  </Link>
                  <Link href={`/yacht/${index + 1}`} className="border-2 border-[#14b8a6] text-[#14b8a6] hover:bg-[#14b8a6] hover:text-white font-bold py-2.5 px-4 rounded-lg text-xs transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 active:scale-95 flex items-center justify-center">
                    {t('featuredYachts.details')}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 sm:mt-12">
          <a
            href="#"
            className="inline-flex items-center justify-center bg-gradient-to-r from-[#164e63] to-[#0d3a47] hover:from-[#0d3a47] hover:to-[#164e63] text-white font-bold px-8 sm:px-12 py-4 rounded-xl text-base sm:text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95"
          >
            {t('featuredYachts.viewAll')}
          </a>
        </div>
      </div>
    </section>
  )
}

function CharterStylesSection() {
  const { t } = useLanguage()

  const charterStyles = [
    {
      title: t('charterStyles.sailing.title'),
      description: t('charterStyles.sailing.description'),
      link: '/sailing-yachts-phuket',
      linkText: t('charterStyles.sailing.linkText'),
      image: '/assets/images/home/sailing-yacht.jpg',
    },
    {
      title: t('charterStyles.catamaran.title'),
      description: t('charterStyles.catamaran.description'),
      link: '/catamaran-charters-phuket',
      linkText: t('charterStyles.catamaran.linkText'),
      image: '/assets/images/home/catamaran.webp',
    },
    {
      title: t('charterStyles.overnight.title'),
      description: t('charterStyles.overnight.description'),
      link: '/overnight-sailing-phuket',
      linkText: t('charterStyles.overnight.linkText'),
      image: '/assets/images/home/overnight-sailing.webp',
    },
    {
      title: t('charterStyles.cabin.title'),
      description: t('charterStyles.cabin.description'),
      link: '/cabin-cruises-phuket',
      linkText: t('charterStyles.cabin.linkText'),
      image: '/assets/images/home/cabin-cruise.avif',
    },
    {
      title: t('charterStyles.bareboat.title'),
      description: t('charterStyles.bareboat.description'),
      link: '/bareboat-charter-phuket',
      linkText: t('charterStyles.bareboat.linkText'),
      image: '/assets/images/home/day-sailing.webp',
    },
  ]

  return (
    <section id="charter-style" className="py-10 sm:py-14 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#164e63] mb-4">
            {t('charterStyles.title')}
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="h-1 w-12 bg-[#164e63] rounded-full"></div>
            <div className="h-2 w-2 bg-amber-500 rounded-full"></div>
            <div className="h-1 w-12 bg-[#164e63] rounded-full"></div>
          </div>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {charterStyles.map((charter, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="grid md:grid-cols-5 gap-0">
                <div className="relative h-64 md:h-auto md:col-span-2 overflow-hidden">
                  <Image
                    src={charter.image}
                    alt={charter.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#0a2a35]/20"></div>
                  <svg className="absolute bottom-0 right-0 w-full h-32 md:h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <polygon points="100,0 100,100 85,100" fill="#0a2a35" opacity="0.85" />
                  </svg>
                </div>

                <div className="md:col-span-3 bg-white p-6 sm:p-8 md:p-10 flex flex-col justify-center relative">
                  <div className="absolute left-0 top-0 bottom-0 w-8 md:w-12 bg-gradient-to-r from-[#0a2a35] to-transparent opacity-60"></div>

                  <div className="relative z-10">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#164e63] mb-3 sm:mb-4">
                      {charter.title}
                    </h3>

                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
                      {charter.description}
                    </p>

                    <a
                      href={charter.link}
                      className="inline-flex items-center justify-center bg-gradient-to-r from-[#14b8a6] to-[#0d9488] hover:from-[#0d9488] hover:to-[#0a7a6a] text-white font-bold px-6 py-3 rounded-lg text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 w-fit"
                    >
                      {t('charterStyles.explore')}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-br from-slate-50 via-gray-50 to-sky-50 pt-6 sm:pt-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#164e63] via-[#0f3a47] to-[#0a2a35] rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 text-center">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-white">{t('charterStyles.notSure.title')}</h3>
            <p className="text-white/80 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed">
              {t('charterStyles.notSure.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 sm:px-10 md:px-12 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold text-white bg-amber-gradient rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 whitespace-nowrap">
                {t('charterStyles.notSure.getQuote')}
              </Link>
              <button className="inline-flex items-center justify-center px-8 sm:px-10 md:px-12 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold text-white bg-green-600 rounded-full hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 whitespace-nowrap">
                <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                {t('charterStyles.notSure.whatsapp')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SailingPhuketSection() {
  const { t } = useLanguage()

  return (
    <section id="sailing-phuket" className="py-10 sm:py-14 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          <div className="relative h-[350px] sm:h-[450px] md:h-[500px] lg:h-[550px]">
            <div className="absolute left-0 top-[10%] w-[58%] h-[85%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white z-10">
              <Image
                src="/assets/images/home/phuket1.jpg"
                alt="Phuket tropical waters"
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute right-0 top-0 w-[48%] h-[42%] rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <Image
                src="/assets/images/home/phuket2.jpg"
                alt="Phuket limestone caves"
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute right-0 bottom-0 w-[48%] h-[52%] rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <Image
                src="/assets/images/home/phuket3.jpg"
                alt="Phuket James Bond Island"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="w-full">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#164e63] mb-4 sm:mb-6">
              {t('sailingPhuket.title')}
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-neutral-700 leading-relaxed mb-6 sm:mb-8">
              {t('sailingPhuket.description')}
            </p>

            <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#164e63] mb-4 sm:mb-6">
              {t('sailingPhuket.whySpecial')}
            </h3>

            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-[#ca8a44] text-xl sm:text-2xl mt-0.5 flex-shrink-0">✓</span>
                <span className="text-neutral-700 text-sm sm:text-base md:text-lg leading-relaxed">{t('sailingPhuket.warmWater')}</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-[#ca8a44] text-xl sm:text-2xl mt-0.5 flex-shrink-0">✓</span>
                <span className="text-neutral-700 text-sm sm:text-base md:text-lg leading-relaxed">{t('sailingPhuket.routes')}</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-[#ca8a44] text-xl sm:text-2xl mt-0.5 flex-shrink-0">✓</span>
                <span className="text-neutral-700 text-sm sm:text-base md:text-lg leading-relaxed">{t('sailingPhuket.groups')}</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-[#ca8a44] text-xl sm:text-2xl mt-0.5 flex-shrink-0">✓</span>
                <span className="text-neutral-700 text-sm sm:text-base md:text-lg leading-relaxed">{t('sailingPhuket.trips')}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function SailingContactSection() {
  return (
    <section className="bg-white py-6 sm:py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ContactCards />
      </div>
    </section>
  )
}

function WhatTripTypeSection() {
  const { t } = useLanguage()

  const tripTypes = [
    {
      title: t('tripType.day.title'),
      description: t('tripType.day.description'),
      image: '/assets/images/home/day-sailing.webp',
    },
    {
      title: t('tripType.sunset.title'),
      description: t('tripType.sunset.description'),
      image: '/assets/images/home/Sunset-sailing.jpg',
    },
    {
      title: t('tripType.overnight.title'),
      description: t('tripType.overnight.description'),
      image: '/assets/images/home/overnight-sailing2.jpg',
    },
  ]

  return (
    <section className="py-10 sm:py-14 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#164e63] text-center mb-3 sm:mb-4">
          {t('tripType.title')}
        </h2>
        <p className="text-center text-neutral-600 mb-6 sm:mb-8 text-base sm:text-lg">{t('tripType.subtitle')}</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {tripTypes.map((type, index) => (
            <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <Image
                  src={type.image}
                  alt={type.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                <div className="absolute bottom-4 right-4">
                  <button className="bg-amber-gradient text-white px-6 py-2.5 rounded-full font-semibold text-sm shadow-lg transition-all duration-300 transform hover:scale-105">
                    {t('tripType.explore')}
                  </button>
                </div>
              </div>

              <div className="p-5 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-[#164e63] mb-3">
                  {type.title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {type.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function OvernightSailingSection() {
  const { t } = useLanguage()

  return (
    <section id="overnight" className="py-10 sm:py-14 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#164e63] mb-6">
              {t('overnightSailing.title')}
            </h2>

            <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
              {t('overnightSailing.description')}
            </p>

            <h3 className="text-xl sm:text-2xl font-bold text-[#164e63] mb-6">
              {t('overnightSailing.whyDifferent')}
            </h3>

            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-[#ca8a44] text-xl mt-0.5 flex-shrink-0">✓</span>
                <span className="text-gray-700 text-base sm:text-lg">{t('overnightSailing.noRush')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#ca8a44] text-xl mt-0.5 flex-shrink-0">✓</span>
                <span className="text-gray-700 text-base sm:text-lg">{t('overnightSailing.calmBays')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#ca8a44] text-xl mt-0.5 flex-shrink-0">✓</span>
                <span className="text-gray-700 text-base sm:text-lg">{t('overnightSailing.sunsetSunrise')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#ca8a44] text-xl mt-0.5 flex-shrink-0">✓</span>
                <span className="text-gray-700 text-base sm:text-lg">{t('overnightSailing.bestIslands')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#ca8a44] text-xl mt-0.5 flex-shrink-0">✓</span>
                <span className="text-gray-700 text-base sm:text-lg">{t('overnightSailing.timeForActivities')}</span>
              </li>
            </ul>
          </div>

          {/* Right Side - Image with Overlays */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative h-[400px] sm:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/images/home/overnight-sailing.webp"
                alt="Overnight Sailing Catamaran"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#164e63]/20 to-transparent"></div>
            </div>

            {/* Top Right Circle - Yacht Guests */}
            <div className="absolute -top-8 -right-8 sm:-top-12 sm:-right-12 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl border-4 sm:border-6 border-white">
              <Image
                src="/assets/images/home/party.jpg"
                alt="Guests enjoying yacht experience"
                fill
                className="object-cover"
              />
            </div>

            {/* Bottom Right Circle - Couple */}
            <div className="absolute -bottom-8 -right-8 sm:-bottom-12 sm:-right-12 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl border-4 sm:border-6 border-white">
              <Image
                src="/assets/images/home/couple2.jpg"
                alt="Couple on overnight sailing trip"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function OvernightRecommendationSection() {
  const { t } = useLanguage()

  return (
    <section className="py-10 sm:py-14 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0">
            <Image
              src="/assets/images/home/catamaran-aerial-hero.jpg"
              alt="Aerial view of catamarans"
              fill
              className="object-cover blur-[2px] scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-[#164e63]/70 to-[#164e63]/95"></div>
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row min-h-[550px] sm:min-h-[600px]">
            <div className="hidden lg:block lg:w-[45%]"></div>

            <div className="w-full lg:w-[55%] p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center">
              <span className="text-teal-300 text-lg sm:text-xl italic mb-2">{t('overnightRecommendation.honestRecommendation')}</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-5 leading-tight text-white">
                {t('overnightRecommendation.title')}
              </h2>

              <p className="text-sm sm:text-base md:text-lg mb-6 text-white/90 leading-relaxed">
                {t('overnightRecommendation.description')}
              </p>

              <h3 className="text-base sm:text-lg font-bold text-white mb-4">
                {t('overnightRecommendation.destinations')}
              </h3>

              <div className="space-y-3 mb-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/20">
                  <h4 className="font-bold text-white text-sm sm:text-base">{t('overnightRecommendation.kohRok.title')}</h4>
                  <p className="text-white/80 text-xs sm:text-sm">{t('overnightRecommendation.kohRok.description')}</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/20">
                  <h4 className="font-bold text-white text-sm sm:text-base">{t('overnightRecommendation.kohHa.title')}</h4>
                  <p className="text-white/80 text-xs sm:text-sm">{t('overnightRecommendation.kohHa.description')}</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/20">
                  <h4 className="font-bold text-white text-sm sm:text-base">{t('overnightRecommendation.butang.title')}</h4>
                  <p className="text-white/80 text-xs sm:text-sm">{t('overnightRecommendation.butang.description')}</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-6">
                {t('overnightRecommendation.lessCrowded')}
              </p>
              
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-10 md:mt-12 bg-white rounded-xl overflow-hidden shadow-xl border border-gray-100">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="p-6 sm:p-8 md:p-10 lg:p-12">
              <span className="text-teal-500 text-sm sm:text-base italic mb-2 block">Plan your trip</span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#164e63] mb-6 sm:mb-8">
                {t('overnightRecommendation.shorterTitle')}
              </h3>

              <p className="text-neutral-600 text-sm sm:text-base md:text-lg mb-8 leading-relaxed">
                {t('overnightRecommendation.shorterDescription')}
              </p>

              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-teal-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#164e63] text-base sm:text-lg mb-1">1–2 nights</h4>
                    <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">{t('overnightRecommendation.oneTwoNights')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-teal-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#164e63] text-base sm:text-lg mb-1">3–4 nights</h4>
                    <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">{t('overnightRecommendation.threeFourNights')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-teal-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#164e63] text-base sm:text-lg mb-1">5–14 nights</h4>
                    <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">{t('overnightRecommendation.fiveFourteenNights')}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 sm:mt-10">
                <p className="text-sm sm:text-base text-neutral-600 mb-4">
                  {t('overnightRecommendation.ctaText')}
                </p>
                <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 text-sm sm:text-base font-bold text-white bg-amber-gradient rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                  {t('overnightRecommendation.ctaButton')}
                </Link>
                <p className="mt-4">
                  <a href="#overnight" className="text-[#14b8a6] hover:text-[#0d9488] font-semibold text-sm inline-flex items-center gap-1 transition-colors duration-200">
                    {t('overnightRecommendation.ctaLink')}
                  </a>
                </p>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="relative h-[300px] lg:h-auto min-h-[400px]">
              <Image
                src="/assets/images/home/couple3.jpg"
                alt="Overnight sailing yacht"
                fill
                className="object-cover object-center"
              />
              {/* Subtle gradient overlay for blending */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-transparent lg:block hidden"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CatamaranContactSection() {
  return (
    <section className="bg-white py-6 sm:py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ContactCards />
      </div>
    </section>
  )
}

function CatamaranVsSailingSection() {
  const { t } = useLanguage()

  return (
    <section id="catamaran-vs-sailing" className="py-10 sm:py-14 bg-ocean-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading subtitle={t('catamaranVsSailing.subtitle')}>
          {t('catamaranVsSailing.title')}
        </SectionHeading>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
            <div className="relative h-48 sm:h-56 md:h-64 mb-4 sm:mb-6 rounded-2xl overflow-hidden">
              <Image
                src="/assets/images/home/catamaran.webp"
                alt="Catamaran"
                fill
                className="object-cover"
              />
            </div>

            <h3 className="mb-4 sm:mb-6 text-lg sm:text-xl">{t('catamaranVsSailing.catamaranTitle')}</h3>
            <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-ocean-600 font-bold text-lg sm:text-xl flex-shrink-0">✓</span>
                <span className="text-sm sm:text-base">{t('catamaranVsSailing.catamaranSpace')}</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-ocean-600 font-bold text-lg sm:text-xl flex-shrink-0">✓</span>
                <span className="text-sm sm:text-base">{t('catamaranVsSailing.catamaranShade')}</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-ocean-600 font-bold text-lg sm:text-xl flex-shrink-0">✓</span>
                <span className="text-sm sm:text-base">{t('catamaranVsSailing.catamaranVilla')}</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-ocean-600 font-bold text-lg sm:text-xl flex-shrink-0">✓</span>
                <span className="text-sm sm:text-base">{t('catamaranVsSailing.catamaranSocial')}</span>
              </li>
            </ul>

            <a href="#" className="text-[#14b8a6] font-semibold hover:text-[#0d9488] transition-colors text-sm sm:text-base">
              {t('catamaranVsSailing.catamaranLink')}
            </a>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
            <div className="relative h-48 sm:h-56 md:h-64 mb-4 sm:mb-6 rounded-2xl overflow-hidden">
              <Image
                src="/assets/images/home/ynz2xdnl8u0iuplpnrtb.jpg"
                alt="Sailing Yacht"
                fill
                className="object-cover"
              />
            </div>

            <h3 className="mb-4 sm:mb-6 text-lg sm:text-xl">{t('catamaranVsSailing.sailingTitle')}</h3>
            <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-ocean-600 font-bold text-lg sm:text-xl flex-shrink-0">✓</span>
                <span className="text-sm sm:text-base">{t('catamaranVsSailing.sailingClassic')}</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-ocean-600 font-bold text-lg sm:text-xl flex-shrink-0">✓</span>
                <span className="text-sm sm:text-base">{t('catamaranVsSailing.sailingSportier')}</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-ocean-600 font-bold text-lg sm:text-xl flex-shrink-0">✓</span>
                <span className="text-sm sm:text-base">{t('catamaranVsSailing.sailingValue')}</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-ocean-600 font-bold text-lg sm:text-xl flex-shrink-0">✓</span>
                <span className="text-sm sm:text-base">{t('catamaranVsSailing.sailingRomantic')}</span>
              </li>
            </ul>

            <a href="#" className="text-[#14b8a6] font-semibold hover:text-[#0d9488] transition-colors text-sm sm:text-base">
              {t('catamaranVsSailing.sailingLink')}
            </a>
          </div>
        </div>

      </div>

      <div className="bg-ocean-50 pt-6 sm:pt-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#164e63] via-[#0f3a47] to-[#0a2a35] rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 text-center">
            <h3 className="mb-3 sm:mb-4 text-white text-xl sm:text-2xl md:text-3xl font-bold">{t('catamaranVsSailing.stillUnsure')}</h3>
            <p className="text-white/80 mb-6 sm:mb-8 text-sm sm:text-base md:text-lg leading-relaxed">{t('catamaranVsSailing.stillUnsureDescription')}</p>
            <CTAButton href="/contact" trackingId="comparison-quote">{t('catamaranVsSailing.getRecommendation')}</CTAButton>
          </div>
        </div>
      </div>
    </section>
  )
}

function PopularRoutesSection() {
  const { t } = useLanguage()

  const routes = [
    {
      title: t('popularRoutes.racha.title'),
      description: t('popularRoutes.racha.description'),
      image: '/assets/images/home/racha-island.webp',
    },
    {
      title: t('popularRoutes.coral.title'),
      description: t('popularRoutes.coral.description'),
      image: '/assets/images/home/coral-island.webp',
    },
    {
      title: t('popularRoutes.phangNga.title'),
      description: t('popularRoutes.phangNga.description'),
      image: '/assets/images/home/phang-nga-bay.jpg',
    },
    {
      title: t('popularRoutes.kohRokHa.title'),
      description: t('popularRoutes.kohRokHa.description'),
      image: '/assets/images/home/koh-rok-koh-ha.jpg',
    },
  ]

  const [activeIndex, setActiveIndex] = React.useState(0)

  // Auto-shuffle every 4 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % routes.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [routes.length])

  // Get shuffled routes based on activeIndex
  const getShuffledRoutes = () => {
    const shuffled = []
    for (let i = 0; i < routes.length; i++) {
      shuffled.push(routes[(activeIndex + i) % routes.length])
    }
    return shuffled
  }

  const displayRoutes = getShuffledRoutes()

  return (
    <section id="routes" className="py-10 sm:py-14 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading subtitle={t('popularRoutes.subtitle')}>
          {t('popularRoutes.title')}
        </SectionHeading>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5">
          {/* Left - Large Card */}
          <div className="group relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl cursor-pointer">
            <Image
              src={displayRoutes[0].image}
              alt={displayRoutes[0].title}
              fill
              className="object-cover group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 lg:p-8">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3 transition-all duration-500">
                {displayRoutes[0].title}
              </h3>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed line-clamp-3 transition-all duration-500">
                {displayRoutes[0].description}
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4 sm:gap-5">
            {/* Top Right - Medium Card */}
            <div className="group relative h-[200px] sm:h-[240px] rounded-2xl overflow-hidden shadow-xl cursor-pointer">
              <Image
                src={displayRoutes[1].image}
                alt={displayRoutes[1].title}
                fill
                className="object-cover group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2 transition-all duration-500">
                  {displayRoutes[1].title}
                </h3>
                <p className="text-white/90 text-xs sm:text-sm leading-relaxed line-clamp-2 transition-all duration-500">
                  {displayRoutes[1].description}
                </p>
              </div>
            </div>

            {/* Bottom Row - Two Small Cards */}
            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              {/* Card 3 */}
              <div className="group relative h-[180px] sm:h-[240px] rounded-2xl overflow-hidden shadow-xl cursor-pointer">
                <Image
                  src={displayRoutes[2].image}
                  alt={displayRoutes[2].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                  <h3 className="text-sm sm:text-base font-bold text-white mb-1 transition-all duration-500">
                    {displayRoutes[2].title}
                  </h3>
                  <p className="text-white/90 text-xs leading-relaxed line-clamp-2 hidden sm:block transition-all duration-500">
                    {displayRoutes[2].description}
                  </p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="group relative h-[180px] sm:h-[240px] rounded-2xl overflow-hidden shadow-xl cursor-pointer">
                <Image
                  src={displayRoutes[3].image}
                  alt={displayRoutes[3].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                  <h3 className="text-sm sm:text-base font-bold text-white mb-1 transition-all duration-500">
                    {displayRoutes[3].title}
                  </h3>
                  <p className="text-white/90 text-xs leading-relaxed line-clamp-2 hidden sm:block transition-all duration-500">
                    {displayRoutes[3].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="bg-gray-50 pt-6 sm:pt-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#164e63] via-[#0f3a47] to-[#0a2a35] rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 text-center">
            <h3 className="mb-3 sm:mb-4 text-white text-xl sm:text-2xl md:text-3xl font-bold">{t('popularRoutes.wantHelp')}</h3>
            <button className="bg-amber-gradient text-white font-bold px-6 py-3 rounded-full text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95">
              {t('popularRoutes.routeIdeas')}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

function WhoItsForSection() {
  const { t } = useLanguage()

  const audiences = [
    {
      title: t('whoItsFor.families.title'),
      description: t('whoItsFor.families.description'),
      image: '/assets/images/home/family.jpeg',
    },
    {
      title: t('whoItsFor.couples.title'),
      description: t('whoItsFor.couples.description'),
      image: '/assets/images/home/couple.jpg',
    },
    {
      title: t('whoItsFor.corporate.title'),
      description: t('whoItsFor.corporate.description'),
      image: '/assets/images/home/corporate.jpg',
    },
    {
      title: t('whoItsFor.adventure.title'),
      description: t('whoItsFor.adventure.description'),
      image: '/assets/images/home/au6lybsyxqznyrp0816h.jpg',
    },
    {
      title: t('whoItsFor.solo.title'),
      description: t('whoItsFor.solo.description'),
      image: '/assets/images/home/yacht-guests-hero.jpg',
    },
    {
      title: t('whoItsFor.occasions.title'),
      description: t('whoItsFor.occasions.description'),
      image: '/assets/images/home/occasion.jpeg',
    },
  ]

  return (
    <section className="py-10 sm:py-14 bg-ocean-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading subtitle={t('whoItsFor.subtitle')}>
          {t('whoItsFor.title')}
        </SectionHeading>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {audiences.map((audience, index) => (
            <div key={index} className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-64 sm:h-72 md:h-80 cursor-pointer group hover:-translate-y-2">
              <Image
                src={audience.image}
                alt={audience.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Shaded bottom gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90"></div>

              {/* Content overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 transition-all duration-300">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-white">{audience.title}</h3>
                <p className="text-white/95 leading-relaxed text-sm sm:text-base">{audience.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhatsIncludedSection() {
  const { t } = useLanguage()

  return (
    <section id="included" className="py-10 sm:py-14 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading subtitle={t('whatsIncluded.subtitle')}>
          {t('whatsIncluded.title')}
        </SectionHeading>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-10 md:mb-12">
          <div className="bg-ocean-50 rounded-2xl p-6 sm:p-8">
            <h3 className="mb-4 sm:mb-6 text-lg sm:text-xl font-bold text-[#164e63]">{t('whatsIncluded.typicallyIncluded')}</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-ocean-600 font-bold text-lg sm:text-xl flex-shrink-0">✓</span>
                <span className="text-sm sm:text-base">{t('whatsIncluded.professionalCrew')}</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-ocean-600 font-bold text-lg sm:text-xl flex-shrink-0">✓</span>
                <span className="text-sm sm:text-base">{t('whatsIncluded.safetyEquipment')}</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-ocean-600 font-bold text-lg sm:text-xl flex-shrink-0">✓</span>
                <span className="text-sm sm:text-base">{t('whatsIncluded.standardSetup')}</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-ocean-600 font-bold text-lg sm:text-xl flex-shrink-0">✓</span>
                <span className="text-sm sm:text-base">{t('whatsIncluded.routePlanning')}</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-ocean-200">
            <h3 className="mb-4 sm:mb-6 text-lg sm:text-xl font-bold text-[#164e63]">{t('whatsIncluded.oftenOptional')}</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-ocean-600 flex-shrink-0">•</span>
                <span className="text-sm sm:text-base">{t('whatsIncluded.mealsDrinks')}</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-ocean-600 flex-shrink-0">•</span>
                <span className="text-sm sm:text-base">{t('whatsIncluded.parkFees')}</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-ocean-600 flex-shrink-0">•</span>
                <span className="text-sm sm:text-base">{t('whatsIncluded.specialOccasion')}</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-ocean-600 flex-shrink-0">•</span>
                <span className="text-sm sm:text-base">{t('whatsIncluded.waterToys')}</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-ocean-600 flex-shrink-0">•</span>
                <span className="text-sm sm:text-base">{t('whatsIncluded.legalArrangements')}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
          <div>
            <h3 className="mb-4 sm:mb-6 text-xl sm:text-2xl md:text-3xl font-bold text-[#164e63]">{t('whatsIncluded.whatToPack')}</h3>
            <p className="mb-4 sm:mb-5 text-neutral-700 text-base sm:text-lg">{t('whatsIncluded.keepSimple')}</p>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-ocean-600 flex-shrink-0 text-lg">•</span>
                <span className="text-base sm:text-lg">{t('whatsIncluded.swimwear')}</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-ocean-600 flex-shrink-0 text-lg">•</span>
                <span className="text-base sm:text-lg">{t('whatsIncluded.sunscreen')}</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-ocean-600 flex-shrink-0 text-lg">•</span>
                <span className="text-base sm:text-lg">{t('whatsIncluded.coverUp')}</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-ocean-600 flex-shrink-0 text-lg">•</span>
                <span className="text-base sm:text-lg">{t('whatsIncluded.waterproofPouch')}</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-ocean-600 flex-shrink-0 text-lg">•</span>
                <span className="text-base sm:text-lg">{t('whatsIncluded.shoes')}</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-ocean-600 flex-shrink-0 text-lg">•</span>
                <span className="text-base sm:text-lg">{t('whatsIncluded.medication')}</span>
              </li>
            </ul>
          </div>

          <div className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/assets/images/home/packing.webp"
              alt="What to pack"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </div>

      <div className="bg-white pt-6 sm:pt-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#164e63] via-[#0f3a47] to-[#0a2a35] rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 text-center">
            <h3 className="text-white mb-6 sm:mb-8 text-xl sm:text-2xl md:text-3xl font-bold">{t('whatsIncluded.wantQuote')}</h3>
            <CTAButton href="/contact" trackingId="included-quote">{t('whatsIncluded.getFastQuote')}</CTAButton>
          </div>
        </div>
      </div>
    </section>
  )
}

function PricingSection() {
  const { t } = useLanguage()

  return (
    <section id="pricing" className="py-10 sm:py-14 bg-ocean-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading subtitle={t('pricing.subtitle')}>
          {t('pricing.title')}
        </SectionHeading>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mt-6 sm:mt-8">
          <div className="bg-white rounded-xl px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 shadow-xl border-2 border-ocean-200/50">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 md:mb-8">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-[#0d4d5c] rounded-lg flex items-center justify-center shadow-lg flex-shrink-0">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-bg-[#0d4d5c]">{t('pricing.mainDrivers')}</h3>
            </div>
            <ul className="space-y-3 sm:space-y-4 md:space-y-6 px-0 sm:px-2">
              <li className="flex items-start gap-2 sm:gap-3 md:gap-4">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-ocean-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm sm:text-base md:text-lg">{t('pricing.boatType')}</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 md:gap-4">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-ocean-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm sm:text-base md:text-lg">{t('pricing.privateVsCabin')}</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 md:gap-4">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-ocean-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm sm:text-base md:text-lg">{t('pricing.tripLength')}</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 md:gap-4">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-ocean-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm sm:text-base md:text-lg">{t('pricing.routeDestination')}</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 md:gap-4">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-ocean-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm sm:text-base md:text-lg">{t('pricing.seasonDemand')}</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 md:gap-4">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-ocean-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm sm:text-base md:text-lg">{t('pricing.bookingTiming')}</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 md:gap-4">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-ocean-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm sm:text-base md:text-lg">{t('pricing.groupSize')}</span>
              </li>
            </ul>
          </div>
          
          <div className=" bg-[#0d4d5c] backdrop-blur rounded-2xl px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 shadow-2xl border-2 border-white/10">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 md:mb-8">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-lg flex-shrink-0">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">{t('pricing.priceAnchors')}</h3>
            </div>
            <ul className="space-y-3 sm:space-y-4 md:space-y-6 px-0 sm:px-2">
              <li className="flex items-start gap-2 sm:gap-3 md:gap-4 pb-3 sm:pb-4 md:pb-5 border-b border-white/20">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-cyan-300 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <div className="flex-1">
                  <div className="text-white/90 text-xs sm:text-sm md:text-base mb-1">{t('pricing.dayTrips')}</div>
                  <div className="text-white font-bold text-base sm:text-lg md:text-xl">{t('pricing.dayTripsPrice')}</div>
                </div>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 md:gap-4 pb-3 sm:pb-4 md:pb-5 border-b border-white/20">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-cyan-300 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
                <div className="flex-1">
                  <div className="text-white/90 text-xs sm:text-sm md:text-base mb-1">{t('pricing.sunsetSailing')}</div>
                  <div className="text-white font-bold text-base sm:text-lg md:text-xl">{t('pricing.sunsetSailingPrice')}</div>
                </div>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 md:gap-4 pb-3 sm:pb-4 md:pb-5 border-b border-white/20">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-cyan-300 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                </svg>
                <div className="flex-1">
                  <div className="text-white/90 text-xs sm:text-sm md:text-base mb-1">{t('pricing.overnightCharters')}</div>
                  <div className="text-white font-bold text-base sm:text-lg md:text-xl">{t('pricing.overnightChartersPrice')}</div>
                </div>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 md:gap-4">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-cyan-300 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <div className="flex-1">
                  <div className="text-white/90 text-xs sm:text-sm md:text-base mb-1">{t('pricing.cabinCruises')}</div>
                  <div className="text-white font-bold text-base sm:text-lg md:text-xl">{t('pricing.cabinCruisesPrice')}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

      </div>

      <div className="bg-ocean-50 pt-6 sm:pt-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#164e63] via-[#0f3a47] to-[#0a2a35] rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 text-center">
            <h3 className="mb-3 sm:mb-4 text-white text-xl sm:text-2xl md:text-3xl font-bold">{t('pricing.fastestPath')}</h3>
            <p className="text-white/80 mb-6 sm:mb-8 text-sm sm:text-base md:text-lg leading-relaxed">{t('pricing.fastestPathDescription')}</p>
            <CTAButton href="/contact" trackingId="pricing-quote">{t('pricing.getPersonalizedQuote')}</CTAButton>
          </div>
        </div>
      </div>
    </section>
  )
}

function BookingContactSection() {
  return (
    <section className="bg-white py-6 sm:py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ContactCards />
      </div>
    </section>
  )
}

function BookingProcessSection() {
  const { t } = useLanguage()

  const steps = [
    {
      number: 1,
      title: t('bookingProcess.step1.title'),
      description: t('bookingProcess.step1.description'),
    },
    {
      number: 2,
      title: t('bookingProcess.step2.title'),
      description: t('bookingProcess.step2.description'),
    },
    {
      number: 3,
      title: t('bookingProcess.step3.title'),
      description: t('bookingProcess.step3.description'),
    },
    {
      number: 4,
      title: t('bookingProcess.step4.title'),
      description: t('bookingProcess.step4.description'),
    },
  ]

  return (
    <section id="booking" className="py-10 sm:py-14 bg-gradient-to-br from-slate-50 via-gray-50 to-sky-50">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#164e63] mb-5">
            {t('bookingProcess.title')}
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="h-1 w-12 bg-[#164e63] rounded-full"></div>
            <div className="h-2 w-2 bg-amber-500 rounded-full"></div>
            <div className="h-1 w-12 bg-[#164e63] rounded-full"></div>
          </div>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {t('bookingProcess.subtitle')}
          </p>
        </div>

        {/* Step Cards - 4 columns */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14 max-w-6xl mx-auto">
          {steps.map((step) => (
            <div key={step.number} className="relative bg-gradient-to-br from-[#164e63] via-[#0f3a47] to-[#0a2a35] rounded-3xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              {/* Gold Number Badge */}
              <div className="absolute -top-4 left-6 w-10 h-10 bg-gradient-to-br from-[#14b8a6] to-[#0d9488] rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                <span className="text-white font-bold text-lg">{step.number}</span>
              </div>

              {/* Content */}
              <div className="mt-6">
                <h3 className="text-lg md:text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-8 sm:mb-10 max-w-6xl mx-auto">
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-[#164e63] mb-3">
              {t('bookingProcess.inquiryChecklist')}
            </h3>
            <p className="text-gray-600">
              {t('bookingProcess.inquiryChecklistDescription')}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
            <div className="text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-gray-100 rounded-full flex items-center justify-center text-[#164e63]">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="font-bold text-[#164e63] mb-1">{t('bookingProcess.howManyGuests')}</h4>
              <p className="text-sm text-gray-500">{t('bookingProcess.howManyGuestsDesc')}</p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-gray-100 rounded-full flex items-center justify-center text-[#164e63]">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="font-bold text-[#164e63] mb-1">{t('bookingProcess.dayOrNights')}</h4>
              <p className="text-sm text-gray-500">{t('bookingProcess.dayOrNightsDesc')}</p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-gray-100 rounded-full flex items-center justify-center text-[#164e63]">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-bold text-[#164e63] mb-1">{t('bookingProcess.preferredYacht')}</h4>
              <p className="text-sm text-gray-500">{t('bookingProcess.preferredYachtDesc')}</p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-gray-100 rounded-full flex items-center justify-center text-[#164e63]">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="font-bold text-[#164e63] mb-1">{t('bookingProcess.tripStyle')}</h4>
              <p className="text-sm text-gray-500">{t('bookingProcess.tripStyleDesc')}</p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-gray-100 rounded-full flex items-center justify-center text-[#164e63]">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="font-bold text-[#164e63] mb-1">{t('bookingProcess.mustSeeIslands')}</h4>
              <p className="text-sm text-gray-500">{t('bookingProcess.mustSeeIslandsDesc')}</p>
            </div>
          </div>
        </div>

      </div>

      <div className="bg-gradient-to-br from-slate-50 via-gray-50 to-sky-50 pt-6 sm:pt-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#164e63] via-[#0f3a47] to-[#0a2a35] rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 text-center">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
              {t('bookingProcess.readyToPlan')}
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-white/80 mb-6 sm:mb-8 leading-relaxed">
              {t('bookingProcess.readyToPlanDescription')}
            </p>
            <CTAButton href="/contact" trackingId="booking-inquire">
              {t('bookingProcess.getIndividualQuote')}
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  )
}

function ExplorePages() {
  const { t } = useLanguage()

  const pages = [
    t('explorePages.sailingYachts'),
    t('explorePages.catamaranCharters'),
    t('explorePages.sailingItineraries'),
    t('explorePages.cabinCruises'),
    t('explorePages.bareboatCharter'),
  ]

  return (
    <section className="relative py-10 sm:py-14 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/home/ynz2xdnl8u0iuplpnrtb.jpg"
          alt="Background"
          fill
          className="object-cover blur-md"
        />
        <div className="absolute inset-0 bg-[#0d4d5c]/70 backdrop-blur-sm"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-white mb-8 sm:mb-10 md:mb-12 text-3xl sm:text-4xl md:text-5xl font-bold">{t('explorePages.title')}</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {pages.map((page, index) => (
            <a
              key={index}
              href="#"
              className="bg-[#0d4d5c]/60 backdrop-blur-md rounded-2xl p-5 sm:p-6 md:p-7 hover:bg-[#14b8a6]/40 hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-2xl border border-white/30"
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">{page}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQSection() {
  const { t } = useLanguage()

  const faqs = [
    {
      question: t('faq.bestTime.question'),
      answer: t('faq.bestTime.answer'),
    },
    {
      question: t('faq.catamaranVsSailing.question'),
      answer: t('faq.catamaranVsSailing.answer'),
    },
    {
      question: t('faq.recommendedNights.question'),
      answer: t('faq.recommendedNights.answer'),
    },
    {
      question: t('faq.familyFriendly.question'),
      answer: t('faq.familyFriendly.answer'),
    },
    {
      question: t('faq.romantic.question'),
      answer: t('faq.romantic.answer'),
    },
    {
      question: t('faq.soloTravelers.question'),
      answer: t('faq.soloTravelers.answer'),
    },
    {
      question: t('faq.whatsIncluded.question'),
      answer: t('faq.whatsIncluded.answer'),
    },
    {
      question: t('faq.bareboatLicense.question'),
      answer: t('faq.bareboatLicense.answer'),
    },
    {
      question: t('faq.chooseItinerary.question'),
      answer: t('faq.chooseItinerary.answer'),
    },
  ]

  return (
    <section id="faqs" className="py-10 sm:py-14 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading subtitle={t('faq.subtitle')}>
          {t('faq.title')}
        </SectionHeading>

        <div className="space-y-4 sm:space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-ocean-50 rounded-lg p-4 sm:p-6 border border-ocean-200">
              <h2 className="text-lg sm:text-xl font-bold text-ocean-900 mb-2 sm:mb-3">{faq.question}</h2>
              <p className="text-neutral-700 leading-relaxed text-sm sm:text-base">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FinalCTASection() {
  const { t } = useLanguage()

  return (
    <section className="bg-gradient-to-br from-slate-50 via-gray-50 to-sky-50 py-6 sm:py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#164e63] via-[#0f3a47] to-[#0a2a35] rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 text-center">
          <h2 className="text-white mb-6 sm:mb-8 text-xl sm:text-2xl md:text-3xl font-bold">{t('finalCta.title')}</h2>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-xl mx-auto">
            <a
              href="tel:+6661234562"
              className="group flex items-center justify-center gap-2 sm:gap-3 bg-white hover:bg-ocean-50 text-ocean-700 font-semibold px-8 sm:px-10 md:px-12 py-3 sm:py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 w-full sm:w-auto whitespace-nowrap"
            >
              <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="text-sm sm:text-base md:text-lg">{t('finalCta.callNow')}</span>
            </a>

            <a
              href="https://wa.me/6661234562"
              className="group flex items-center justify-center gap-2 sm:gap-3 bg-green-600 hover:bg-green-700 text-white font-semibold px-8 sm:px-10 md:px-12 py-3 sm:py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 w-full sm:w-auto whitespace-nowrap"
            >
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="text-sm sm:text-base md:text-lg">{t('finalCta.whatsapp')}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
