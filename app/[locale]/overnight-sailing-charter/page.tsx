import Image from 'next/image'
import { LocaleLink } from '@/components/shared/LocaleLink'
import { ContactCards } from '@/components/shared/ContactCards'
import { ReviewBadges } from '@/components/shared/ReviewBadges'
import { getTranslations } from '@/lib/i18n/getTranslations'
import { ArrowRight, MessageCircle, Anchor, Ship, Users, MapPin, Check, Heart, Sun, Waves, Compass, Clock, Star, ChevronRight, Home } from 'lucide-react'
import { FAQAccordion } from '@/components/shared/FAQAccordion'
import { BookingCTA } from '@/components/shared/BookingCTA'
import { FeaturedYachts } from '@/components/shared/FeaturedYachts'
import { OvernightSailingFAQSchema } from './faq-schema'

const IMG = '/assets/images/overnight-sailing-charter'

export default async function OvernightSailingCharterPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const { t } = getTranslations(locale)

  const faqKeys = ['cost', 'islands', 'nights', 'included', 'honeymoon', 'typicalDay', 'safety', 'vsCabin', 'similan', 'food']
  const faqs = faqKeys.map((key) => ({
    question: t(`overnightCharter.faq.questions.${key}.q`),
    answer: t(`overnightCharter.faq.questions.${key}.a`),
  }))

  const whatIsCards = [
    { key: 'yacht', icon: Ship, image: `/assets/images/luxury-yacht-charter/luxury-charter.jpg` },
    { key: 'sunrise', icon: Sun, image: `/assets/images/luxury-yacht-charter/sunset-sailing.jpg` },
    { key: 'vsDay', icon: Compass, image: `${IMG}/benefit-crowds.jpg` },
  ]

  const benefits = [
    { key: 'remoteIslands', image: `${IMG}/benefit-remote-islands.jpg` },
    { key: 'freedom', image: `${IMG}/benefit-freedom.jpg` },
    { key: 'crowds', image: `${IMG}/benefit-crowds.jpg` },
  ]

  const routes = [
    { key: 'oneTwo', icon: Clock },
    { key: 'threeFour', icon: Compass },
    { key: 'five', icon: Star, recommended: true },
    { key: 'sevenPlus', icon: Waves },
  ]

  const destinations = [
    { key: 'phiPhi', image: `${IMG}/island-phiphi.jpg` },
    { key: 'phangNga', image: `${IMG}/island-phangnga.jpg` },
    { key: 'kohRok', image: `${IMG}/island-kohrok.jpg` },
    { key: 'kohLipe', image: `${IMG}/island-kohlipe.jpg` },
    { key: 'racha', image: `${IMG}/island-racha.jpg` },
    { key: 'similan', image: `${IMG}/island-similan.jpg` },
  ]

  const vessels = [
    { key: 'hotChilli', image: `${IMG}/hot-chilli.jpeg` },
    { key: 'amadeus', image: `${IMG}/amadeus.jpg` },
    { key: 'nauti', image: `${IMG}/nauty-by-nature.jpg`, luxury: true },
    { key: 'miaKai', image: `/assets/images/luxury-yacht-charter/hero-luxury-charter.jpg`, luxury: true },
  ]

  const occasionSections = [
    { key: 'honeymoon', icon: Heart },
    { key: 'sunset', icon: Sun },
    { key: 'proposals', icon: Star },
  ]

  const travelerItems = [
    { key: 'solo', image: `${IMG}/occasion-solo.jpg` },
    { key: 'adventure', image: `/assets/images/cabin-cruise-phuket/snorkeling-activities.jpg` },
    { key: 'groups', image: `${IMG}/occasion-family.jpg` },
  ]

  const tiers = ['budget', 'mid', 'luxury', 'superyacht']
  const steps = ['s1', 's2', 's3', 's4']
  const trustBadges = ['b1', 'b2', 'b3', 'b4']

  return (
    <>
      <OvernightSailingFAQSchema />
      <main className="min-h-screen">
        {/* BreadcrumbNav */}
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

        {/* HeroSection */}
        <section className="relative min-h-[90vh] flex items-end justify-center overflow-hidden">
          <Image
            src={`${IMG}/hero-catamaran-sunset.jpg`}
            alt="Overnight Sailing Charter Phuket — Private Catamaran anchored at sunset"
            fill
            sizes="100vw"
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

        {/* ContactCardsSection */}
        <section className="py-6 sm:py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ContactCards />
          </div>
        </section>

        <FeaturedYachts />

        {/* CtaBanner */}
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

        {/* WhatIsSection */}
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
              {whatIsCards.map((card) => (
                <div key={card.key} className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#e5e7eb] hover:shadow-lg transition-shadow group">
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={card.image}
                      alt={t(`overnightCharter.whatIs.cards.${card.key}.title`)}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
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

        {/* WhyChooseSection */}
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
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
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

        {/* RoutesSection */}
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
                  <h3 className="text-xl sm:text-2xl font-bold text-[#164e63] mb-4 pr-20 sm:pr-24" style={{ fontFamily: "var(--font-playfair)" }}>
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

        {/* DestinationsSection */}
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
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h3 className="text-lg font-bold text-white drop-shadow-md mb-1">
                        {t(`overnightCharter.destinations.items.${dest.key}.title`)} — {t(`overnightCharter.destinations.items.${dest.key}.subtitle`)}
                      </h3>
                    </div>
                  </div>
                  <div className="p-4 sm:p-6 flex flex-col flex-1">
                    <p className="text-[#3a5a68] text-sm leading-relaxed mb-4 flex-1">
                      {t(`overnightCharter.destinations.items.${dest.key}.description`)}
                    </p>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[#164e63]">
                      <span className="text-lg font-bold">
                        {t(`overnightCharter.destinations.items.${dest.key}.price`)}
                      </span>
                      <span className="text-sm text-[#3a5a68] hidden sm:inline">|</span>
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

        {/* FleetSection */}
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
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
                  {t('overnightCharter.fleet.benefit1.title')}
                </h3>
                <p className="text-white/90 leading-relaxed text-sm">
                  {t('overnightCharter.fleet.benefit1.description')}
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#164e63] to-[#0f3a47] text-white rounded-xl p-6 sm:p-8">
                <Anchor className="w-10 h-10 mb-4 text-[#14b8a6]" />
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
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

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {vessels.map((v) => (
                <div
                  key={v.key}
                  className="rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all border-2 border-[#e5e7eb] hover:border-[#164e63]"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={v.image}
                      alt={t(`overnightCharter.fleet.vessels.${v.key}.name`)}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover hover:scale-110 transition-transform duration-500"
                    />
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
                      href="/overnight-sailing-charter"
                      className="inline-flex items-center justify-center gap-2 w-full rounded-xl px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:scale-105 active:scale-95 bg-[#164e63] hover:bg-[#164e63]/90"
                    >
                      {t('overnightCharter.fleet.viewFleet')} <ArrowRight className="h-4 w-4" />
                    </LocaleLink>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IncludedSection */}
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
              <div className="bg-gradient-to-br from-[#164e63] to-[#0f3a47] rounded-xl p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-white/10 rounded-full">
                    <Image src={`${IMG}/icon-crew.png`} alt="Crew" width={48} height={48} />
                  </div>
                  <h3 className="text-lg font-bold text-white" style={{ fontFamily: "var(--font-playfair)" }}>
                    {t('overnightCharter.included.crew.title')}
                  </h3>
                </div>
                <p className="text-white/80 text-sm leading-relaxed">
                  {t('overnightCharter.included.crew.description')}
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#164e63] to-[#0f3a47] rounded-xl p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-white/10 rounded-full">
                    <Image src={`${IMG}/icon-activities.png`} alt="Activities" width={48} height={48} />
                  </div>
                  <h3 className="text-lg font-bold text-white" style={{ fontFamily: "var(--font-playfair)" }}>
                    {t('overnightCharter.included.activities.title')}
                  </h3>
                </div>
                <p className="text-white/80 text-sm leading-relaxed">
                  {t('overnightCharter.included.activities.description')}
                </p>
              </div>
            </div>

            <div className="rounded-xl p-6 sm:p-8 bg-gradient-to-br from-[#164e63] to-[#0f3a47]">
              <h3 className="text-lg font-bold text-white mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
                {t('overnightCharter.included.extra.title')}
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                {t('overnightCharter.included.extra.description')}
              </p>
            </div>
          </div>
        </section>

        {/* OccasionsSection */}
        <section className="py-10 sm:py-14 lg:py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center mb-10 sm:mb-14">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#164e63]" style={{ fontFamily: "var(--font-playfair)" }}>
                {t('overnightCharter.occasions.title')}
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[#3a5a68] max-w-3xl mx-auto">
                {t('overnightCharter.occasions.description')}
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 items-center mb-10 sm:mb-16">
              <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl ring-4 ring-[#164e63]/10 ring-offset-4 ring-offset-white">
                <Image
                  src={`${IMG}/occasion-couples.jpg`}
                  alt={t('overnightCharter.occasions.honeymoon.title')}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="space-y-8">
                {occasionSections.map((s) => (
                  <div key={s.key}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex-shrink-0 inline-flex items-center justify-center h-10 w-10 rounded-lg bg-[#14b8a6]/15">
                        <s.icon className="h-5 w-5 text-[#14b8a6]" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-[#164e63]" style={{ fontFamily: "var(--font-playfair)" }}>
                        {t(`overnightCharter.occasions.${s.key}.title`)}
                      </h3>
                    </div>
                    <p className="text-[#3a5a68] text-sm leading-relaxed">
                      {t(`overnightCharter.occasions.${s.key}.description`)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TravelersSection */}
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
              {travelerItems.map((item) => (
                <div key={item.key} className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#e5e7eb] hover:shadow-lg transition-all group">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={t(`overnightCharter.travelers.items.${item.key}.title`)}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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

        {/* PricingSection */}
        <section className="py-10 sm:py-14 lg:py-20 bg-gradient-to-b from-neutral-50 to-white">
          <div className="mx-auto max-w-6xl px-4">

            {/* Section Header */}
            <div className="text-center mb-10 sm:mb-14">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#164e63] mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
                {t('overnightCharter.pricing.title')}
              </h2>
              <div className="flex justify-center">
                <div className="flex items-center gap-2">
                  <div className="h-1 w-12 bg-[#164e63] rounded-full" />
                  <div className="h-2 w-2 bg-amber-500 rounded-full" />
                  <div className="h-1 w-12 bg-[#164e63] rounded-full" />
                </div>
              </div>
            </div>

            {/* Pricing Tiers */}
            <div className="mb-10 sm:mb-14">
              <h3 className="text-xl sm:text-2xl font-bold text-[#164e63] mb-3 text-center" style={{ fontFamily: "var(--font-playfair)" }}>
                {t('overnightCharter.pricing.costTitle')}
              </h3>
              <p className="text-[#3a5a68] leading-relaxed mb-8 text-sm text-center max-w-3xl mx-auto">
                {t('overnightCharter.pricing.costDescription')}
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
                {tiers.map((tier, index) => (
                  <div
                    key={tier}
                    className={`rounded-2xl transition-all duration-300 border-l-8 p-5 sm:p-6 md:p-8 hover:-translate-y-1 ${
                      index === 1
                        ? 'bg-[#0c3b4a] border-[#14b8a6] shadow-[0_20px_50px_-12px_rgba(12,59,74,0.4)]'
                        : 'bg-white border-[#164e63] shadow-[0_10px_30px_-8px_rgba(12,59,74,0.15)] hover:shadow-[0_20px_40px_-12px_rgba(12,59,74,0.25)]'
                    }`}
                  >
                    <div className={`text-xs font-bold uppercase tracking-widest mb-3 ${index === 1 ? 'text-[#14b8a6]' : 'text-[#14b8a6]'}`}>
                      {t(`overnightCharter.pricing.tiers.${tier}.label`)}
                    </div>
                    <h4 className={`text-lg font-bold mb-4 ${index === 1 ? 'text-white' : 'text-[#164e63]'}`} style={{ fontFamily: "var(--font-playfair)" }}>
                      {t(`overnightCharter.pricing.tiers.${tier}.name`)}
                    </h4>
                    <div className={`pb-4 mb-4 border-b ${index === 1 ? 'border-white/20' : 'border-[#e5e7eb]'}`}>
                      <span className={`text-3xl font-bold ${index === 1 ? 'text-white' : 'text-[#164e63]'}`}>
                        {t(`overnightCharter.pricing.tiers.${tier}.price`)}
                      </span>
                      <span className={`text-sm ml-2 ${index === 1 ? 'text-white/90' : 'text-[#3a5a68]'}`}>
                        {t(`overnightCharter.pricing.tiers.${tier}.per`)}
                      </span>
                    </div>
                    <p className={`text-sm leading-relaxed ${index === 1 ? 'text-white' : 'text-[#3a5a68]'}`}>
                      {t(`overnightCharter.pricing.tiers.${tier}.description`)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="rounded-xl p-5 bg-white border-l-4 border-[#164e63] shadow-sm">
                <p className="text-[#3a5a68] text-sm leading-relaxed">
                  <span className="font-semibold text-[#164e63]">All-inclusive: </span>
                  {t('overnightCharter.pricing.allIncluded')}
                </p>
              </div>
            </div>

            {/* Best Time */}
            <div className="mb-10 sm:mb-14 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[#e5e7eb]">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 inline-flex items-center justify-center h-12 w-12 rounded-xl bg-[#14b8a6]/15">
                  <Sun className="h-6 w-6 text-[#14b8a6]" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#164e63] mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
                    {t('overnightCharter.pricing.bestTimeTitle')}
                  </h3>
                  <p className="text-[#3a5a68] leading-relaxed text-sm">
                    {t('overnightCharter.pricing.bestTimeText')}
                  </p>
                </div>
              </div>
            </div>

            {/* Booking Steps */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#164e63] mb-3 text-center" style={{ fontFamily: "var(--font-playfair)" }}>
                {t('overnightCharter.pricing.bookTitle')}
              </h3>
              <p className="text-[#3a5a68] leading-relaxed mb-8 text-sm text-center max-w-2xl mx-auto">
                {t('overnightCharter.pricing.bookDescription')}
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-5">
                {steps.map((step, idx) => (
                  <div key={step} className="relative rounded-2xl p-6 pt-8 bg-gradient-to-br from-[#164e63] to-[#0f3a47] shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="absolute -top-4 left-5 w-9 h-9 bg-[#14b8a6] text-white rounded-full flex items-center justify-center text-base font-bold shadow-lg">
                      {idx + 1}
                    </div>
                    <h4 className="text-base font-bold text-white mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
                      {t(`overnightCharter.pricing.steps.${step}.title`)}
                    </h4>
                    <p className="text-white/75 text-sm leading-relaxed">
                      {t(`overnightCharter.pricing.steps.${step}.description`)}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* TrustCtaSection */}
        <section className="py-14 sm:py-20" style={{ background: "linear-gradient(to bottom right, #164e63, #0f3a47, #0a2a35)" }}>
          <div className="mx-auto max-w-5xl px-4 text-center text-white">
            <div className="mb-8 flex flex-wrap justify-center items-center gap-2 sm:gap-3">
              {trustBadges.map((b) => (
                <div key={b} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm">
                  <Check className="w-4 h-4 text-[#14b8a6]" />
                  <span>{t(`overnightCharter.trustCta.badges.${b}`)}</span>
                </div>
              ))}
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-white" style={{ fontFamily: "var(--font-playfair)" }}>
              {t('overnightCharter.trustCta.title')}
            </h2>
            <p className="text-lg md:text-xl mb-10 text-white/90 max-w-3xl mx-auto leading-relaxed">
              {t('overnightCharter.trustCta.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <LocaleLink
                href="/contact"
                className="cta-button"
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

        {/* FAQSection */}
        <FAQAccordion
          faqs={faqs}
          title="Frequently Asked Questions – Overnight Sailing Charter Phuket"
          subtitle=""
          id="faq"
        />

        <BookingCTA variant="overnight" />
      </main>
    </>
  )
}
