'use client'

import Image from 'next/image'
import { LocaleLink } from '@/components/shared/LocaleLink'
import { ContactCards } from '@/components/shared/ContactCards'
import { ReviewBadges } from '@/components/shared/ReviewBadges'
import { useLanguage } from '@/components/providers/LanguageProvider'
import { ArrowRight, MessageCircle, Anchor, Crown, Users, Compass, Ship, Clock, MapPin, BedDouble, ShipWheel, Utensils, UtensilsCrossed, Waves, Sunset, Heart, User, Check, DollarSign } from 'lucide-react'
import { FAQAccordion } from '@/components/shared/FAQAccordion'
import { BookingCTA } from '@/components/shared/BookingCTA'
import { FeaturedYachts } from '@/components/shared/FeaturedYachts'
import { CabinCruiseFAQSchema } from './faq-schema'

export default function CabinCruisePhuketPage() {
  return (
    <>
      <CabinCruiseFAQSchema />
      <main className="min-h-screen">
        <HeroSection />
        <ContactCardsSection />
        <FeaturedYachts />
        <CtaBanner />
        <PrivateCabinsSection />
        <ContactCardsSection />
        <WhyChooseSection />
        <ItinerarySection />
        <DestinationsSection />
        <LifeOnboardSection />
        <DiningActivitiesSection />
        <IdealForSection />
        <ComparisonSection />
        <FAQSection />
        <BookingCTA
          title="Start Planning Your Cabin Cruise"
          subtitle="Cabin Cruises from €1,199/Day | Multi-Day Sailing | Private Cabins | All-Inclusive"
          buttonText="GET YOUR FREE CABIN CRUISE QUOTE →"
        />
      </main>
    </>
  )
}

function HeroSection() {
  const { t } = useLanguage()
  return (
    <section className="relative min-h-[90vh] flex items-end justify-center overflow-hidden">
      <Image
        src="/assets/images/cabin-cruise-phuket/cabin-cruise-hero.avif"
        alt="Cabin Cruise Phuket"
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
          {t('cabinCruise.hero.title')}
        </h1>

        <p
          className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-white md:text-xl"
          style={{ textShadow: '1px 1px 6px rgba(0,0,0,0.6)' }}
        >
          {t('cabinCruise.hero.description')}
        </p>

        <div className="mt-10 flex justify-center">
          <LocaleLink
            href="/contact"
            className="rounded-xl px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:shadow-xl"
            style={{ background: "linear-gradient(90deg, #A0522D 0%, #FF8C00 100%)" }}
          >
            {t('cabinCruise.hero.cta')}
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
          <p className="text-white/80 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed">
            {t('cabinCruise.ctaBanner.text')}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <LocaleLink
              href="/contact"
              className="inline-flex items-center justify-center px-8 sm:px-10 md:px-12 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold text-white bg-amber-gradient rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 whitespace-nowrap"
            >
              {t('cabinCruise.ctaBanner.cta')}
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </LocaleLink>
            <a
              href="https://wa.me/66612345623"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 sm:px-10 md:px-12 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold text-white bg-green-600 rounded-xl hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 whitespace-nowrap"
            >
              <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              {t('cabinCruise.ctaBanner.whatsapp')}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function PrivateCabinsSection() {
  const { t } = useLanguage()
  return (
    <section className="py-10 sm:py-14 lg:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 text-[#14b8a6] mb-4">
            <Anchor className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">{t('cabinCruise.cabins.badge')}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#164e63]" style={{ fontFamily: "var(--font-playfair)" }}>
            {t('cabinCruise.cabins.title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-10 items-center mb-12 sm:mb-20">
          <div className="relative rounded-xl overflow-hidden aspect-[4/3] shadow-xl">
            <Image
              src="/assets/images/cabin-cruise-phuket/cabin-cruise-hero.avif"
              alt={t('cabinCruise.cabins.card1.title')}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#164e63] mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
              {t('cabinCruise.cabins.card1.title')}
            </h3>
            <p className="text-[#3a5a68] leading-relaxed mb-4">{t('cabinCruise.cabins.card1.p1')}</p>
            <p className="text-[#3a5a68] leading-relaxed">{t('cabinCruise.cabins.card1.p2')}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-10 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-xl sm:text-2xl font-bold text-[#164e63] mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
              {t('cabinCruise.cabins.card2.title')}
            </h3>
            <p className="text-[#3a5a68] leading-relaxed mb-4">{t('cabinCruise.cabins.card2.p1')}</p>
            <p className="text-[#3a5a68] leading-relaxed mb-6">{t('cabinCruise.cabins.card2.p2')}</p>
            <div className="flex items-center gap-2 rounded-lg bg-[#164e63] px-3 py-2">
              <span className="text-xs font-medium text-white">
                {t('cabinCruise.cabins.card2.from')} <span className="text-base font-bold text-amber-400">€1,199</span>{t('cabinCruise.cabins.card2.perDay')}
              </span>
              <span className="text-white/30">|</span>
              <span className="text-xs text-white/80">{t('cabinCruise.cabins.card2.departs')}</span>
              <span className="text-white/30">|</span>
              <span className="text-xs text-white/80">{t('cabinCruise.cabins.card2.guests')}</span>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden aspect-[4/3] shadow-xl order-1 md:order-2">
            <Image
              src="/assets/images/cabin-cruise-phuket/cabin-interior.jpg"
              alt={t('cabinCruise.cabins.card2.title')}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function WhyChooseSection() {
  const { t } = useLanguage()
  const features = [
    { icon: Crown, key: 'luxury' },
    { icon: Users, key: 'limited' },
    { icon: Compass, key: 'curated' },
  ]

  return (
    <section className="py-10 sm:py-14 lg:py-20 bg-[#f7f8fa]">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#164e63]" style={{ fontFamily: "var(--font-playfair)" }}>
            {t('cabinCruise.whyChoose.title')}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#3a5a68] max-w-2xl mx-auto">
            {t('cabinCruise.whyChoose.subtitle')}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          {features.map((f) => (
            <div key={f.key} className="bg-white rounded-xl p-5 sm:p-6 shadow-sm border border-[#e5e7eb] hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center h-14 w-14 rounded-lg bg-[#164e63] mb-5">
                <f.icon className="h-7 w-7 text-[#14b8a6]" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#164e63] mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
                {t(`cabinCruise.whyChoose.features.${f.key}.title`)}
              </h3>
              {t(`cabinCruise.whyChoose.features.${f.key}.description`).split('\n').map((paragraph: string, i: number) => (
                <p key={i} className="text-[#3a5a68] leading-relaxed text-[15px] mb-3 last:mb-0">{paragraph}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ItinerarySection() {
  const { t } = useLanguage()
  return (
    <section className="py-10 sm:py-14 lg:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 text-[#14b8a6] mb-4">
            <Ship className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">{t('cabinCruise.itinerary.badge')}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#164e63]" style={{ fontFamily: "var(--font-playfair)" }}>
            {t('cabinCruise.itinerary.title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-10 items-center mb-10 sm:mb-16">
          <div className="relative rounded-xl overflow-hidden aspect-[4/3] shadow-xl">
            <Image
              src="/assets/images/cabin-cruise-phuket/sunset-anchor.jpg"
              alt={t('cabinCruise.itinerary.multiDay.title')}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#164e63] mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
              {t('cabinCruise.itinerary.multiDay.title')}
            </h3>
            <p className="text-[#3a5a68] leading-relaxed mb-4">{t('cabinCruise.itinerary.multiDay.p1')}</p>
            <p className="text-[#3a5a68] leading-relaxed mb-6">{t('cabinCruise.itinerary.multiDay.p2')}</p>
            <div className="flex items-center gap-2 rounded-lg bg-[#164e63] px-3 py-2 mb-5">
              <span className="text-xs font-medium text-white">{t('cabinCruise.itinerary.multiDay.price')}</span>
              <span className="text-white/30">|</span>
              <span className="text-xs text-white/80">{t('cabinCruise.itinerary.multiDay.cabins')}</span>
              <span className="text-white/30">|</span>
              <span className="text-xs text-white/80">{t('cabinCruise.itinerary.multiDay.meals')}</span>
            </div>
            <LocaleLink
              href="/contact"
              className="inline-flex items-center gap-2 text-[#14b8a6] font-semibold hover:text-[#0d9488] transition-colors"
            >
              {t('cabinCruise.itinerary.multiDay.cta')} <ArrowRight className="h-4 w-4" />
            </LocaleLink>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-10 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-xl sm:text-2xl font-bold text-[#164e63] mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
              {t('cabinCruise.itinerary.balanced.title')}
            </h3>
            <p className="text-[#3a5a68] leading-relaxed mb-4">{t('cabinCruise.itinerary.balanced.p1')}</p>
            <p className="text-[#3a5a68] leading-relaxed mb-6">{t('cabinCruise.itinerary.balanced.p2')}</p>
            <div className="flex items-center gap-2 rounded-lg bg-[#164e63] px-3 py-2">
              <span className="text-xs font-medium text-white">{t('cabinCruise.itinerary.balanced.price')}</span>
              <span className="text-white/30">|</span>
              <span className="text-xs text-white/80">{t('cabinCruise.itinerary.balanced.time')}</span>
              <span className="text-white/30">|</span>
              <span className="text-xs text-white/80">{t('cabinCruise.itinerary.balanced.guests')}</span>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden aspect-[4/3] shadow-xl order-1 md:order-2">
            <Image
              src="/assets/images/cabin-cruise-phuket/snorkeling-activities.jpg"
              alt={t('cabinCruise.itinerary.balanced.title')}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function DestinationsSection() {
  const { t } = useLanguage()
  const destinations = [
    { key: 'phiPhi', image: '/assets/images/cabin-cruise-phuket/phi-phi-sailing.jpg' },
    { key: 'phangNga', image: '/assets/images/cabin-cruise-phuket/phang-nga-bay.jpg' },
    { key: 'bays', image: '/assets/images/cabin-cruise-phuket/white-beach-bay.jpg' },
  ]

  return (
    <section className="py-10 sm:py-14 lg:py-20 bg-[#f7f8fa]">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 text-[#14b8a6] mb-4">
            <MapPin className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">{t('cabinCruise.destinations.badge')}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#164e63]" style={{ fontFamily: "var(--font-playfair)" }}>
            {t('cabinCruise.destinations.title')}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          {destinations.map((dest) => (
            <div key={dest.key} className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#e5e7eb] hover:shadow-lg transition-shadow group flex flex-col">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={dest.image}
                  alt={t(`cabinCruise.destinations.items.${dest.key}.title`)}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center rounded-md bg-white/90 backdrop-blur-sm px-3 py-1 text-sm font-bold text-[#A0522D]">
                    {t(`cabinCruise.destinations.items.${dest.key}.pricing`)}
                  </span>
                </div>
              </div>
              <div className="p-4 sm:p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-[#164e63] mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
                  {t(`cabinCruise.destinations.items.${dest.key}.title`)}
                </h3>
                {t(`cabinCruise.destinations.items.${dest.key}.description`).split('\n').map((p: string, i: number) => (
                  <p key={i} className="text-[#3a5a68] text-sm leading-relaxed mb-3 last:mb-4">{p}</p>
                ))}
                <p className="text-xs font-medium text-[#164e63] mb-4">
                  {t(`cabinCruise.destinations.items.${dest.key}.details`)}
                </p>
                <div className="mt-auto">
                  <LocaleLink
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 w-full rounded-xl px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:scale-105 active:scale-95 bg-gradient-to-r from-[#164e63] to-[#0d3a47] hover:from-[#0d3a47] hover:to-[#164e63]"
                  >
                    {t(`cabinCruise.destinations.items.${dest.key}.linkText`)} <ArrowRight className="h-4 w-4" />
                  </LocaleLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function LifeOnboardSection() {
  const { t } = useLanguage()
  const features = [
    { icon: BedDouble, key: 'cabins', image: '/assets/images/cabin-cruise-phuket/cabin-interior.jpg' },
    { icon: ShipWheel, key: 'design', image: '/assets/images/cabin-cruise-phuket/cabin-cruise.jpg' },
    { icon: Utensils, key: 'decks', image: '/assets/images/cabin-cruise-phuket/deck-dining.jpg' },
  ]

  return (
    <section className="py-10 sm:py-14 lg:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#164e63]" style={{ fontFamily: "var(--font-playfair)" }}>
            {t('cabinCruise.lifeOnboard.title')}
          </h2>
        </div>

        {features.map((f, idx) => (
          <div key={f.key} className={`grid md:grid-cols-2 gap-4 items-center ${idx < features.length - 1 ? 'mb-10 sm:mb-16' : ''}`}>
            <div className={idx % 2 === 1 ? 'order-2' : ''}>
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-[#164e63] mb-5">
                <f.icon className="h-6 w-6 text-[#14b8a6]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#164e63] mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
                {t(`cabinCruise.lifeOnboard.features.${f.key}.title`)}
              </h3>
              {t(`cabinCruise.lifeOnboard.features.${f.key}.description`).split('\n').map((paragraph: string, i: number) => (
                <p key={i} className="text-[#3a5a68] leading-relaxed text-sm mb-3 last:mb-0">{paragraph}</p>
              ))}
            </div>
            <div className={`relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl ring-4 ring-[#164e63]/10 ring-offset-4 ring-offset-white ${idx % 2 === 1 ? 'order-1' : ''}`}>
              <Image src={f.image} alt={t(`cabinCruise.lifeOnboard.features.${f.key}.title`)} fill className="object-cover" />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function DiningActivitiesSection() {
  const { t } = useLanguage()
  const cards = [
    { icon: UtensilsCrossed, key: 'dining', image: '/assets/images/cabin-cruise-phuket/gourmet-dining.jpg' },
    { icon: Waves, key: 'activities', image: '/assets/images/cabin-cruise-phuket/snorkeling-activities.jpg' },
    { icon: Sunset, key: 'evenings', image: '/assets/images/cabin-cruise-phuket/sunset-anchor.jpg' },
  ]

  return (
    <section className="py-10 sm:py-14 lg:py-20 bg-[#f7f8fa]">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#164e63]" style={{ fontFamily: "var(--font-playfair)" }}>
            {t('cabinCruise.diningActivities.title')}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#3a5a68] max-w-2xl mx-auto">
            {t('cabinCruise.diningActivities.subtitle')}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          {cards.map((card) => (
            <div key={card.key} className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#e5e7eb]">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image src={card.image} alt={t(`cabinCruise.diningActivities.cards.${card.key}.title`)} fill className="object-cover" />
              </div>
              <div className="p-4 sm:p-6">
                <div className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-[#164e63]/10 mb-4">
                  <card.icon className="h-5 w-5 text-[#164e63]" />
                </div>
                <h3 className="text-lg font-bold text-[#164e63] mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
                  {t(`cabinCruise.diningActivities.cards.${card.key}.title`)}
                </h3>
                <p className="text-[#3a5a68] text-sm leading-relaxed">
                  {t(`cabinCruise.diningActivities.cards.${card.key}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function IdealForSection() {
  const { t } = useLanguage()
  const personas = [
    { icon: Heart, key: 'couples', image: '/assets/images/cabin-cruise-phuket/couple-sailing.jpg' },
    { icon: User, key: 'solo', image: '/assets/images/cabin-cruise-phuket/deck-dining.jpg' },
    { icon: Users, key: 'friends', image: '/assets/images/cabin-cruise-phuket/friends-sailing.jpg' },
  ]

  return (
    <section className="py-10 sm:py-14 lg:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#164e63]" style={{ fontFamily: "var(--font-playfair)" }}>
            {t('cabinCruise.idealFor.title')}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          {personas.map((p) => (
            <div key={p.key} className="rounded-xl overflow-hidden bg-white shadow-sm border border-[#e5e7eb] hover:shadow-md transition-shadow group">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={p.image}
                  alt={t(`cabinCruise.idealFor.personas.${p.key}.title`)}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 sm:p-6">
                <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-[#14b8a6]/10 mb-4">
                  <p.icon className="h-5 w-5 text-[#14b8a6]" />
                </div>
                <h3 className="text-lg font-bold text-[#164e63] mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
                  {t(`cabinCruise.idealFor.personas.${p.key}.title`)}
                </h3>
                <p className="text-[#3a5a68] text-sm leading-relaxed">
                  {t(`cabinCruise.idealFor.personas.${p.key}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ComparisonSection() {
  const { t } = useLanguage()
  const comparisons = [
    { icon: Check, key: 'accessible' },
    { icon: DollarSign, key: 'shared' },
    { icon: ShipWheel, key: 'crew' },
  ]

  return (
    <section className="py-10 sm:py-14 lg:py-20" style={{ background: "linear-gradient(to bottom right, #164e63, #0f3a47, #0a2a35)" }}>
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "var(--font-playfair)" }}>
            {t('cabinCruise.comparison.title')}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/70 max-w-2xl mx-auto">
            {t('cabinCruise.comparison.subtitle')}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          {comparisons.map((item) => (
            <div key={item.key} className="rounded-xl p-6 sm:p-8 bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-[#14b8a6]/20 mb-5">
                <item.icon className="h-6 w-6 text-[#14b8a6]" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
                {t(`cabinCruise.comparison.items.${item.key}.title`)}
              </h3>
              <p className="text-white/70 leading-relaxed text-[15px]">
                {t(`cabinCruise.comparison.items.${item.key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQSection() {
  const { t } = useLanguage()

  const faqKeys = ['cost', 'guests', 'experience', 'children', 'difference', 'islands', 'included', 'bestTime', 'booking']

  const faqs = faqKeys.map((key) => ({
    question: t(`cabinCruise.faq.questions.${key}.q`),
    answer: t(`cabinCruise.faq.questions.${key}.a`),
  }))

  return (
    <FAQAccordion
      faqs={faqs}
      title={t('cabinCruise.faq.title')}
      subtitle={t('cabinCruise.faq.subtitle')}
      id="faq"
    />
  )
}
