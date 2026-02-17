'use client'

import Image from 'next/image'
import { LocaleLink } from '@/components/shared/LocaleLink'
import { ContactCards } from '@/components/shared/ContactCards'
import { ReviewBadges } from '@/components/shared/ReviewBadges'
import { useLanguage } from '@/components/providers/LanguageProvider'
import { ArrowRight, MessageCircle, Anchor, Ship, Users, MapPin, Check, Heart, Sun, Waves, Compass, Clock, Star, ChevronRight, Home } from 'lucide-react'
import { FAQAccordion } from '@/components/shared/FAQAccordion'
import { BookingCTA } from '@/components/shared/BookingCTA'
import { FeaturedYachts } from '@/components/shared/FeaturedYachts'
import { OvernightSailingFAQSchema } from './faq-schema'

const IMG = '/assets/images/overnight-sailing-charter'

export default function OvernightSailingCharterPage() {
  return (
    <>
      <OvernightSailingFAQSchema />
      <main className="min-h-screen">
        <BreadcrumbNav />
        <HeroSection />
        <ContactCardsSection />
        <FeaturedYachts />
        <CtaBanner />
        <WhatIsSection />
        <WhyChooseSection />
        <RoutesSection />
        <DestinationsSection />
        <FleetSection />
        <IncludedSection />
        <OccasionsSection />
        <TravelersSection />
        <PricingSection />
        <TrustCtaSection />
        <FAQSection />
        <BookingCTA
          title="Start Planning Your Overnight Sailing Charter"
          subtitle="From €1,000/night | Private Catamaran | Fully Crewed | All-Inclusive"
          buttonText="GET YOUR FREE OVERNIGHT SAILING QUOTE →"
        />
      </main>
    </>
  )
}

function BreadcrumbNav() {
  return (
    <nav aria-label="breadcrumb" className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-[#3a5a68]">
          <li className="inline-flex items-center gap-1.5">
            <LocaleLink href="/" className="hover:text-[#164e63] transition-colors flex items-center gap-1">
              <Home className="w-3.5 h-3.5" />
              Home
            </LocaleLink>
          </li>
          <li><ChevronRight className="w-3.5 h-3.5 text-[#3a5a68]/50" /></li>
          <li className="inline-flex items-center">
            <span className="text-[#3a5a68]/70">Phuket Sailing Tours</span>
          </li>
          <li><ChevronRight className="w-3.5 h-3.5 text-[#3a5a68]/50" /></li>
          <li className="inline-flex items-center">
            <span className="font-medium text-[#164e63]">Overnight Sailing Charter Phuket</span>
          </li>
        </ol>
      </div>
    </nav>
  )
}

function HeroSection() {
  const { t } = useLanguage()
  return (
    <section className="relative min-h-[90vh] flex items-end justify-center overflow-hidden">
      <Image
        src={`${IMG}/hero-catamaran-sunset.jpg`}
        alt="Overnight Sailing Charter Phuket — Private Catamaran anchored at sunset"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#164e63]/50 via-[#164e63]/35 to-[#164e63]/60" />
      <div className="relative z-10 mx-auto max-w-5xl px-4 pb-12 pt-32 sm:pb-16 sm:pt-40 md:pb-20 md:pt-48 text-center">
        <h1
          className="font-serif text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl text-balance"
          style={{ fontFamily: "var(--font-playfair)", textShadow: '2px 2px 10px rgba(0,0,0,0.6), 0 0 20px rgba(0,0,0,0.4)' }}
        >
          {t('overnightCharter.hero.title')}
        </h1>
        <p
          className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-white md:text-xl"
          style={{ textShadow: '1px 1px 6px rgba(0,0,0,0.6)' }}
        >
          {t('overnightCharter.hero.description')}
        </p>
        <div className="mt-6 flex flex-wrap justify-center items-center gap-2 sm:gap-3">
          {t('overnightCharter.hero.badges').split(' | ').map((badge: string, i: number) => (
            <span key={i} className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs sm:text-sm text-white border border-white/20">
              <Check className="w-3.5 h-3.5 text-[#14b8a6]" />
              {badge}
            </span>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <LocaleLink
            href="/contact"
            className="rounded-xl px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:scale-105 active:scale-95"
            style={{ background: "linear-gradient(90deg, #A0522D 0%, #FF8C00 100%)" }}
          >
            {t('overnightCharter.hero.cta')}
          </LocaleLink>
        </div>
        <ReviewBadges />
      </div>
    </section>
  )
}

function ContactCardsSection() {
  return (
    <section className="py-6 sm:py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ContactCards />
      </div>
    </section>
  )
}

function CtaBanner() {
  const { t } = useLanguage()
  return (
    <section className="bg-gradient-to-br from-slate-50 via-gray-50 to-sky-50 py-6 sm:py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#164e63] via-[#0f3a47] to-[#0a2a35] rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 text-center">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="p-3 bg-white/10 backdrop-blur-sm rounded-full">
              <Anchor className="w-8 h-8 text-[#14b8a6]" />
            </div>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
            {t('overnightCharter.ctaBanner.title')}
          </h2>
          <p className="text-white/80 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto">
            {t('overnightCharter.ctaBanner.text')}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <LocaleLink
              href="/contact"
              className="inline-flex items-center justify-center px-8 sm:px-10 md:px-12 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold text-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 whitespace-nowrap"
              style={{ background: "linear-gradient(90deg, #A0522D 0%, #FF8C00 100%)" }}
            >
              {t('overnightCharter.ctaBanner.cta')}
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </LocaleLink>
            <a
              href="https://wa.me/66612345623"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 sm:px-10 md:px-12 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold text-white bg-green-600 rounded-xl hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 whitespace-nowrap"
            >
              <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              {t('overnightCharter.ctaBanner.whatsapp')}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function WhatIsSection() {
  const { t } = useLanguage()
  const cards = [
    { key: 'yacht', icon: Ship, image: `${IMG}/icon-yacht.png` },
    { key: 'sunrise', icon: Sun, image: `${IMG}/icon-sunrise.png` },
    { key: 'vsDay', icon: Compass, image: `${IMG}/icon-vs-day.png` },
  ]

  return (
    <section className="py-10 sm:py-14 lg:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#164e63]" style={{ fontFamily: "var(--font-playfair)" }}>
            {t('overnightCharter.whatIs.title')}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#3a5a68] max-w-4xl mx-auto leading-relaxed">
            {t('overnightCharter.whatIs.description')}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-3">
          {cards.map((card) => (
            <div key={card.key} className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#e5e7eb] hover:shadow-lg transition-shadow group">
              <div className="relative h-48 overflow-hidden bg-gray-50 flex items-center justify-center">
                <Image
                  src={card.image}
                  alt={t(`overnightCharter.whatIs.cards.${card.key}.title`)}
                  width={120}
                  height={120}
                  className="object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg font-bold text-[#164e63] mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
                  {t(`overnightCharter.whatIs.cards.${card.key}.title`)}
                </h3>
                {card.key === 'vsDay' ? (
                  <div className="space-y-3 text-[#3a5a68] text-sm leading-relaxed">
                    <div>
                      <p className="font-semibold text-[#164e63]">{t('overnightCharter.whatIs.cards.vsDay.dayLabel')}</p>
                      <p>{t('overnightCharter.whatIs.cards.vsDay.dayText')}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-[#164e63]">{t('overnightCharter.whatIs.cards.vsDay.overnightLabel')}</p>
                      <p>{t('overnightCharter.whatIs.cards.vsDay.overnightText')}</p>
                    </div>
                  </div>
                ) : (
                  <p className="text-[#3a5a68] text-sm leading-relaxed">
                    {t(`overnightCharter.whatIs.cards.${card.key}.description`)}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhyChooseSection() {
  const { t } = useLanguage()
  const benefits = [
    { key: 'remoteIslands', image: `${IMG}/benefit-remote-islands.jpg` },
    { key: 'freedom', image: `${IMG}/benefit-freedom.jpg` },
    { key: 'crowds', image: `${IMG}/benefit-crowds.jpg` },
  ]

  return (
    <section className="py-10 sm:py-14 lg:py-20 bg-[#f7f8fa]">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#164e63]" style={{ fontFamily: "var(--font-playfair)" }}>
            {t('overnightCharter.whyChoose.title')}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#3a5a68] max-w-4xl mx-auto">
            {t('overnightCharter.whyChoose.subtitle')}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-3">
          {benefits.map((b) => (
            <div key={b.key} className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#e5e7eb] hover:shadow-lg transition-all group">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={b.image}
                  alt={t(`overnightCharter.whyChoose.benefits.${b.key}.title`)}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#164e63]/80 to-transparent" />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg font-bold text-[#164e63] mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
                  {t(`overnightCharter.whyChoose.benefits.${b.key}.title`)}
                </h3>
                <p className="text-[#3a5a68] text-sm leading-relaxed">
                  {t(`overnightCharter.whyChoose.benefits.${b.key}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function RoutesSection() {
  const { t } = useLanguage()
  const routes = [
    { key: 'oneTwo', icon: Clock },
    { key: 'threeFour', icon: Compass },
    { key: 'five', icon: Star, recommended: true },
    { key: 'sevenPlus', icon: Waves },
  ]

  return (
    <section className="py-10 sm:py-14 lg:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#164e63]" style={{ fontFamily: "var(--font-playfair)" }}>
            {t('overnightCharter.routes.title')}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#3a5a68] max-w-4xl mx-auto">
            {t('overnightCharter.routes.subtitle')}
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-3">
          {routes.map((r) => (
            <div
              key={r.key}
              className={`rounded-xl p-6 sm:p-8 border-2 shadow-sm hover:shadow-lg transition-all relative ${
                r.recommended ? 'border-[#FF8C00] shadow-lg' : 'border-[#e5e7eb] hover:border-[#14b8a6]'
              }`}
            >
              {r.recommended && (
                <div className="absolute top-4 right-4 bg-[#FF8C00] text-white px-4 py-1 rounded-full text-xs font-semibold">
                  {t('overnightCharter.routes.recommended')}
                </div>
              )}
              <h3 className="text-xl sm:text-2xl font-bold text-[#164e63] mb-4 pr-20" style={{ fontFamily: "var(--font-playfair)" }}>
                {t(`overnightCharter.routes.items.${r.key}.title`)}
              </h3>
              <p className="text-[#3a5a68] leading-relaxed mb-6 text-sm">
                {t(`overnightCharter.routes.items.${r.key}.description`)}
              </p>
              <div className="flex flex-wrap items-center gap-3 text-sm text-[#3a5a68] mb-4">
                <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg">
                  <Users className="w-4 h-4 text-[#14b8a6]" />
                  <span>{t(`overnightCharter.routes.items.${r.key}.guests`)}</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg">
                  <MapPin className="w-4 h-4 text-[#14b8a6]" />
                  <span>{t(`overnightCharter.routes.items.${r.key}.ideal`)}</span>
                </div>
              </div>
              <div className="text-xl font-bold text-[#164e63]">
                {t(`overnightCharter.routes.items.${r.key}.price`)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function DestinationsSection() {
  const { t } = useLanguage()
  const destinations = [
    { key: 'phiPhi', image: `${IMG}/island-phiphi.jpg` },
    { key: 'phangNga', image: `${IMG}/island-phangnga.jpg` },
    { key: 'kohRok', image: `${IMG}/island-kohrok.jpg` },
    { key: 'kohLipe', image: `${IMG}/island-kohlipe.jpg` },
    { key: 'racha', image: `${IMG}/island-racha.jpg` },
    { key: 'similan', image: `${IMG}/island-similan.jpg` },
  ]

  return (
    <section className="py-10 sm:py-14 lg:py-20 bg-[#f7f8fa]">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 text-[#14b8a6] mb-4">
            <MapPin className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">Destinations</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#164e63]" style={{ fontFamily: "var(--font-playfair)" }}>
            {t('overnightCharter.destinations.title')}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#3a5a68] max-w-4xl mx-auto">
            {t('overnightCharter.destinations.subtitle')}
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {destinations.map((dest) => (
            <div key={dest.key} className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#e5e7eb] hover:shadow-lg transition-all group flex flex-col">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={dest.image}
                  alt={t(`overnightCharter.destinations.items.${dest.key}.title`)}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#164e63]/90 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <h3 className="text-xl font-bold mb-1">
                    {t(`overnightCharter.destinations.items.${dest.key}.title`)} — {t(`overnightCharter.destinations.items.${dest.key}.subtitle`)}
                  </h3>
                </div>
              </div>
              <div className="p-4 sm:p-6 flex flex-col flex-1">
                <p className="text-[#3a5a68] text-sm leading-relaxed mb-4 flex-1">
                  {t(`overnightCharter.destinations.items.${dest.key}.description`)}
                </p>
                <div className="flex items-center gap-2 text-[#164e63]">
                  <span className="text-lg font-bold">
                    {t(`overnightCharter.destinations.items.${dest.key}.price`)}
                  </span>
                  <span className="text-sm text-[#3a5a68]">|</span>
                  <span className="text-sm text-[#3a5a68]">
                    {t(`overnightCharter.destinations.items.${dest.key}.detail`)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FleetSection() {
  const { t } = useLanguage()
  const vessels = [
    { key: 'hotChilli', image: `${IMG}/vessel-hot-chilli.jpg` },
    { key: 'amadeus', image: `${IMG}/vessel-amadeus.jpg` },
    { key: 'nauti', image: `${IMG}/vessel-nauti.jpg`, luxury: true },
  ]

  return (
    <section className="py-10 sm:py-14 lg:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#164e63]" style={{ fontFamily: "var(--font-playfair)" }}>
            {t('overnightCharter.fleet.title')}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#3a5a68] max-w-4xl mx-auto">
            {t('overnightCharter.fleet.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-3 mb-10 sm:mb-14">
          <div className="bg-gradient-to-br from-[#164e63] to-[#0f3a47] text-white rounded-xl p-6 sm:p-8">
            <Ship className="w-10 h-10 mb-4 text-[#14b8a6]" />
            <h3 className="text-xl sm:text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
              {t('overnightCharter.fleet.benefit1.title')}
            </h3>
            <p className="text-white/90 leading-relaxed text-sm">
              {t('overnightCharter.fleet.benefit1.description')}
            </p>
          </div>
          <div className="bg-gradient-to-br from-[#14b8a6] to-[#0d9488] text-white rounded-xl p-6 sm:p-8">
            <Anchor className="w-10 h-10 mb-4 text-white" />
            <h3 className="text-xl sm:text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
              {t('overnightCharter.fleet.benefit2.title')}
            </h3>
            <p className="text-white/90 leading-relaxed text-sm">
              {t('overnightCharter.fleet.benefit2.description')}
            </p>
          </div>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-center text-[#164e63] mb-8" style={{ fontFamily: "var(--font-playfair)" }}>
          {t('overnightCharter.fleet.fleetTitle')}
        </h3>

        <div className="grid lg:grid-cols-3 gap-3">
          {vessels.map((v) => (
            <div
              key={v.key}
              className={`rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all border-2 ${
                v.luxury ? 'border-[#FF8C00]' : 'border-[#e5e7eb] hover:border-[#FF8C00]'
              }`}
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={v.image}
                  alt={t(`overnightCharter.fleet.vessels.${v.key}.name`)}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
                {v.luxury && (
                  <div className="absolute top-4 right-4 bg-[#FF8C00] text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {t('overnightCharter.fleet.vessels.nauti.tag')}
                  </div>
                )}
              </div>
              <div className="p-4 sm:p-6">
                <h4 className="text-xl font-bold text-[#164e63] mb-3">
                  {t(`overnightCharter.fleet.vessels.${v.key}.name`)}
                </h4>
                <p className="text-[#3a5a68] text-sm leading-relaxed mb-4">
                  {t(`overnightCharter.fleet.vessels.${v.key}.description`)}
                </p>
                <div className="text-xl font-bold text-[#164e63] mb-4">
                  {t(`overnightCharter.fleet.vessels.${v.key}.price`)}
                </div>
                <LocaleLink
                  href="/yachts"
                  className={`inline-flex items-center justify-center gap-2 w-full rounded-xl px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:scale-105 active:scale-95 ${
                    v.luxury ? 'bg-[#FF8C00] hover:bg-[#FF8C00]/90' : 'bg-[#164e63] hover:bg-[#164e63]/90'
                  }`}
                >
                  {t('overnightCharter.fleet.viewFleet')} <ArrowRight className="h-4 w-4" />
                </LocaleLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function IncludedSection() {
  const { t } = useLanguage()
  return (
    <section className="py-10 sm:py-14 lg:py-20 bg-[#f7f8fa]">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#164e63]" style={{ fontFamily: "var(--font-playfair)" }}>
            {t('overnightCharter.included.title')}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#3a5a68] max-w-4xl mx-auto">
            {t('overnightCharter.included.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-3 mb-6">
          <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-[#e5e7eb]">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-[#14b8a6]/10 rounded-full">
                <Image src={`${IMG}/icon-crew.png`} alt="Crew" width={48} height={48} />
              </div>
              <h3 className="text-lg font-bold text-[#164e63]" style={{ fontFamily: "var(--font-playfair)" }}>
                {t('overnightCharter.included.crew.title')}
              </h3>
            </div>
            <p className="text-[#3a5a68] text-sm leading-relaxed">
              {t('overnightCharter.included.crew.description')}
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-[#e5e7eb]">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-[#14b8a6]/10 rounded-full">
                <Image src={`${IMG}/icon-activities.png`} alt="Activities" width={48} height={48} />
              </div>
              <h3 className="text-lg font-bold text-[#164e63]" style={{ fontFamily: "var(--font-playfair)" }}>
                {t('overnightCharter.included.activities.title')}
              </h3>
            </div>
            <p className="text-[#3a5a68] text-sm leading-relaxed">
              {t('overnightCharter.included.activities.description')}
            </p>
          </div>
        </div>

        <div className="rounded-xl p-6 sm:p-8 border-2 border-[#164e63] bg-[#164e63]/5">
          <h3 className="text-lg font-bold text-[#164e63] mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
            {t('overnightCharter.included.extra.title')}
          </h3>
          <p className="text-[#3a5a68] text-sm leading-relaxed">
            {t('overnightCharter.included.extra.description')}
          </p>
        </div>
      </div>
    </section>
  )
}

function OccasionsSection() {
  const { t } = useLanguage()
  const sections = [
    { key: 'honeymoon', icon: Heart },
    { key: 'sunset', icon: Sun },
    { key: 'proposals', icon: Star },
  ]

  return (
    <section className="py-10 sm:py-14 lg:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#164e63]" style={{ fontFamily: "var(--font-playfair)" }}>
            {t('overnightCharter.occasions.title')}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 items-center mb-10 sm:mb-16">
          <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl ring-4 ring-[#164e63]/10 ring-offset-4 ring-offset-white">
            <Image
              src={`${IMG}/occasion-couples.jpg`}
              alt={t('overnightCharter.occasions.honeymoon.title')}
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-8">
            {sections.map((s) => (
              <div key={s.key}>
                <div className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-[#164e63] mb-4">
                  <s.icon className="h-5 w-5 text-[#14b8a6]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#164e63] mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
                  {t(`overnightCharter.occasions.${s.key}.title`)}
                </h3>
                <p className="text-[#3a5a68] text-sm leading-relaxed">
                  {t(`overnightCharter.occasions.${s.key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TravelersSection() {
  const { t } = useLanguage()
  const items = [
    { key: 'solo', image: `${IMG}/occasion-solo.jpg` },
    { key: 'adventure', image: `${IMG}/benefit-remote-islands.jpg` },
    { key: 'groups', image: `${IMG}/occasion-family.jpg` },
  ]

  return (
    <section className="py-10 sm:py-14 lg:py-20 bg-[#f7f8fa]">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#164e63]" style={{ fontFamily: "var(--font-playfair)" }}>
            {t('overnightCharter.travelers.title')}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#3a5a68] max-w-4xl mx-auto">
            {t('overnightCharter.travelers.subtitle')}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-3">
          {items.map((item) => (
            <div key={item.key} className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#e5e7eb] hover:shadow-lg transition-all group">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={item.image}
                  alt={t(`overnightCharter.travelers.items.${item.key}.title`)}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg font-bold text-[#164e63] mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
                  {t(`overnightCharter.travelers.items.${item.key}.title`)}
                </h3>
                <p className="text-[#3a5a68] text-sm leading-relaxed">
                  {t(`overnightCharter.travelers.items.${item.key}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PricingSection() {
  const { t } = useLanguage()
  const tiers = ['budget', 'mid', 'luxury']
  const steps = ['s1', 's2', 's3', 's4']

  return (
    <section className="py-10 sm:py-14 lg:py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#164e63]" style={{ fontFamily: "var(--font-playfair)" }}>
            {t('overnightCharter.pricing.title')}
          </h2>
        </div>

        <div className="mb-12 sm:mb-16">
          <h3 className="text-xl sm:text-2xl font-bold text-[#164e63] mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
            {t('overnightCharter.pricing.costTitle')}
          </h3>
          <p className="text-[#3a5a68] leading-relaxed mb-8 text-sm">
            {t('overnightCharter.pricing.costDescription')}
          </p>

          <div className="grid md:grid-cols-3 gap-3 mb-6">
            {tiers.map((tier) => (
              <div
                key={tier}
                className={`rounded-xl p-6 border-2 transition-all ${
                  tier === 'luxury' ? 'border-[#FF8C00] shadow-lg' : 'border-[#e5e7eb] hover:border-[#14b8a6]'
                }`}
              >
                <div className={`text-sm font-semibold mb-2 ${tier === 'luxury' ? 'text-[#FF8C00]' : 'text-[#14b8a6]'}`}>
                  {t(`overnightCharter.pricing.tiers.${tier}.label`)}
                </div>
                <h4 className="text-lg font-bold text-[#164e63] mb-3">
                  {t(`overnightCharter.pricing.tiers.${tier}.name`)}
                </h4>
                <div className="text-3xl font-bold text-[#164e63] mb-1">
                  {t(`overnightCharter.pricing.tiers.${tier}.price`)}
                </div>
                <p className="text-sm text-[#3a5a68] mb-4">
                  {t(`overnightCharter.pricing.tiers.${tier}.per`)}
                </p>
                <p className="text-[#3a5a68] text-sm leading-relaxed">
                  {t(`overnightCharter.pricing.tiers.${tier}.description`)}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-xl p-6 border-2 border-[#164e63] bg-[#164e63]/5">
            <p className="text-[#3a5a68] text-sm leading-relaxed">
              {t('overnightCharter.pricing.allIncluded')}
            </p>
          </div>
        </div>

        <div className="mb-12 sm:mb-16">
          <h3 className="text-xl sm:text-2xl font-bold text-[#164e63] mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
            {t('overnightCharter.pricing.bestTimeTitle')}
          </h3>
          <p className="text-[#3a5a68] leading-relaxed text-sm">
            {t('overnightCharter.pricing.bestTimeText')}
          </p>
        </div>

        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-[#164e63] mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
            {t('overnightCharter.pricing.bookTitle')}
          </h3>
          <p className="text-[#3a5a68] leading-relaxed mb-8 text-sm">
            {t('overnightCharter.pricing.bookDescription')}
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {steps.map((step, idx) => (
              <div key={step} className="rounded-xl p-6 bg-white shadow-sm border border-[#e5e7eb] text-center">
                <div className="w-12 h-12 bg-[#14b8a6] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {idx + 1}
                </div>
                <h4 className="text-base font-bold text-[#164e63] mb-3">
                  {t(`overnightCharter.pricing.steps.${step}.title`)}
                </h4>
                <p className="text-[#3a5a68] text-sm leading-relaxed">
                  {t(`overnightCharter.pricing.steps.${step}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TrustCtaSection() {
  const { t } = useLanguage()
  const badges = ['b1', 'b2', 'b3', 'b4']

  return (
    <section className="py-14 sm:py-20" style={{ background: "linear-gradient(to bottom right, #164e63, #0f3a47, #0a2a35)" }}>
      <div className="mx-auto max-w-5xl px-4 text-center text-white">
        <div className="mb-8 flex flex-wrap justify-center items-center gap-3">
          {badges.map((b) => (
            <div key={b} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
              <Check className="w-4 h-4 text-[#14b8a6]" />
              <span>{t(`overnightCharter.trustCta.badges.${b}`)}</span>
            </div>
          ))}
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
          {t('overnightCharter.trustCta.title')}
        </h2>
        <p className="text-lg md:text-xl mb-10 text-white/90 max-w-3xl mx-auto leading-relaxed">
          {t('overnightCharter.trustCta.description')}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <LocaleLink
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-4 text-lg font-semibold text-[#164e63] bg-white rounded-xl shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
          >
            {t('overnightCharter.trustCta.cta')} <ArrowRight className="ml-2 w-5 h-5" />
          </LocaleLink>
          <a
            href="https://wa.me/66612345623"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-4 text-lg font-semibold text-white bg-[#14b8a6] rounded-xl shadow-xl transition-all hover:scale-105 hover:bg-[#14b8a6]/90"
          >
            {t('overnightCharter.trustCta.whatsapp')} <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}

function FAQSection() {
  const { t } = useLanguage()
  const faqKeys = ['cost', 'islands', 'nights', 'included', 'honeymoon', 'typicalDay', 'safety', 'vsCabin', 'similan', 'food']

  const faqs = faqKeys.map((key) => ({
    question: t(`overnightCharter.faq.questions.${key}.q`),
    answer: t(`overnightCharter.faq.questions.${key}.a`),
  }))

  return (
    <FAQAccordion
      faqs={faqs}
      title={t('overnightCharter.faq.title')}
      subtitle=""
      id="faq"
    />
  )
}
