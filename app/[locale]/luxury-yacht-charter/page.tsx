'use client'

import React from 'react'
import Image from 'next/image'
import { useLanguage } from '@/components/providers/LanguageProvider'
import { FAQAccordion } from '@/components/shared/FAQAccordion'
import { ReviewBadges } from '@/components/shared/ReviewBadges'
import { ContactCards } from '@/components/shared/ContactCards'
import { FeaturedYachts } from '@/components/shared/FeaturedYachts'
import {
  Star,
  Award,
  Anchor,
  Sailboat,
  Compass,
  CalendarCheck,
  ArrowRight,
  Waves,
  Users,
  Shield,
  Bed,
  Droplets,
  Wind,
  Music,
  Sun,
  Sunset,
  Moon,
  MapPin,
  Map,
  CloudSun,
  Clock,
  ChefHat,
  LifeBuoy,
  UtensilsCrossed,
  Heart,
  PartyPopper,
  Check,
  X,
  Zap,
  CheckCircle,
  Phone,
  Mail,
  MessageCircle,
} from 'lucide-react'

export default function LuxuryYachtCharterPage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ContactCardsSection />
      <FeaturedYachts />
      <PrivateChartersSection />
      <WhyChooseSection />
      <ExperiencesSection />
      <DestinationsSection />
      <ContactCardsSection />
      <ItinerarySection />
      <CrewSection />
      <WhoSection />
      <ContactCardsSection />
      <ComparisonSection />
      <PlanSection />
      <FaqSection />
    </main>
  )
}

function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <Image
        src="/assets/images/luxury-yacht-charter/hero-luxury-charter.jpg"
        alt="Luxury sailing catamaran on the turquoise Andaman Sea near Phuket"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#164e63]/80 via-[#0f3a47]/70 to-[#0a2a35]/80" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 py-32 text-center">
        <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl text-balance" style={{ fontFamily: "var(--font-playfair)" }}>
          {t('luxuryYachtCharter.hero.title')}
        </h1>
        <p className="mx-auto mt-2 font-serif text-lg text-[#14b8a6] italic md:text-xl" style={{ fontFamily: "var(--font-playfair)" }}>
          {t('luxuryYachtCharter.hero.subtitle')}
        </p>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/90 md:text-xl">
          {t('luxuryYachtCharter.hero.description')}
        </p>

        <div className="mt-10 flex justify-center">
          <a
            href="#quote"
            className="rounded-xl px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:shadow-xl"
            style={{ background: "linear-gradient(90deg, #A0522D 0%, #FF8C00 100%)" }}
          >
            {t('luxuryYachtCharter.hero.cta1')}
          </a>
        </div>

        <ReviewBadges />
      </div>
    </section>
  )
}

function ContactCardsSection() {
  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4">
        <ContactCards />
      </div>
    </section>
  )
}

function PrivateChartersSection() {
  const { t } = useLanguage()

  const features = [
    {
      icon: Sailboat,
      title: t('luxuryYachtCharter.privateCharters.features.exclusive.title'),
      description: t('luxuryYachtCharter.privateCharters.features.exclusive.description'),
      cta: t('luxuryYachtCharter.privateCharters.features.exclusive.cta'),
      href: "#yachts",
    },
    {
      icon: Compass,
      title: t('luxuryYachtCharter.privateCharters.features.comfort.title'),
      description: t('luxuryYachtCharter.privateCharters.features.comfort.description'),
      cta: t('luxuryYachtCharter.privateCharters.features.comfort.cta'),
      href: "#yachts",
    },
    {
      icon: CalendarCheck,
      title: t('luxuryYachtCharter.privateCharters.features.tailored.title'),
      description: t('luxuryYachtCharter.privateCharters.features.tailored.description'),
      cta: t('luxuryYachtCharter.privateCharters.features.tailored.cta'),
      href: "#quote",
    },
  ]

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#14b8a6]">
            {t('luxuryYachtCharter.privateCharters.label')}
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-[#164e63] md:text-4xl text-balance" style={{ fontFamily: "var(--font-playfair)" }}>
            {t('luxuryYachtCharter.privateCharters.title')}
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-neutral-200 bg-white p-8 transition-all hover:border-[#14b8a6]/30 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#14b8a6]/10">
                <feature.icon className="h-6 w-6 text-[#14b8a6]" />
              </div>
              <h3 className="mt-5 font-serif text-lg font-semibold text-[#164e63]" style={{ fontFamily: "var(--font-playfair)" }}>
                {feature.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-neutral-600">
                {feature.description}
              </p>
              <a
                href={feature.href}
                className="mt-5 inline-flex items-center gap-2 text-base font-medium text-[#14b8a6] transition-colors hover:text-[#0d9488]"
              >
                {feature.cta}
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhyChooseSection() {
  const { t } = useLanguage()

  const reasons = [
    {
      icon: Waves,
      title: t('luxuryYachtCharter.whyChoose.reasons.refined.title'),
      description: t('luxuryYachtCharter.whyChoose.reasons.refined.description'),
    },
    {
      icon: Users,
      title: t('luxuryYachtCharter.whyChoose.reasons.personal.title'),
      description: t('luxuryYachtCharter.whyChoose.reasons.personal.description'),
    },
    {
      icon: Shield,
      title: t('luxuryYachtCharter.whyChoose.reasons.beyond.title'),
      description: t('luxuryYachtCharter.whyChoose.reasons.beyond.description'),
    },
  ]

  return (
    <section
      className="py-20 lg:py-28"
      style={{ background: "linear-gradient(to bottom right, #164e63, #0f3a47, #0a2a35)" }}
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#14b8a6]">
              {t('luxuryYachtCharter.whyChoose.label')}
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl text-balance" style={{ fontFamily: "var(--font-playfair)" }}>
              {t('luxuryYachtCharter.whyChoose.title')}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/90">
              {t('luxuryYachtCharter.whyChoose.description')}
            </p>

            <div className="mt-10 flex flex-col gap-8">
              {reasons.map((reason) => (
                <div key={reason.title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#14b8a6]/15">
                    <reason.icon className="h-5 w-5 text-[#14b8a6]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white" style={{ fontFamily: "var(--font-playfair)" }}>
                      {reason.title}
                    </h3>
                    <p className="mt-1.5 text-base leading-relaxed text-white/90">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/assets/images/luxury-yacht-charter/yacht-interior.jpg"
                alt="Luxury sailing yacht interior with premium amenities"
                width={640}
                height={480}
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 rounded-xl border border-[#14b8a6]/20 bg-[#164e63]/90 px-6 py-4 backdrop-blur-sm">
              <p className="text-2xl font-bold text-[#14b8a6]">{t('luxuryYachtCharter.whyChoose.badge.years')}</p>
              <p className="text-xs text-white/90">{t('luxuryYachtCharter.whyChoose.badge.label')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ExperiencesSection() {
  const { t } = useLanguage()

  const experiences = [
    {
      number: t('luxuryYachtCharter.experiences.types.day.number'),
      icon: Sun,
      title: t('luxuryYachtCharter.experiences.types.day.title'),
      image: "/assets/images/luxury-yacht-charter/day-charter.jpg",
      imageAlt: "Luxury day sailing charter in Phuket with catamaran anchored in bay",
      description: t('luxuryYachtCharter.experiences.types.day.description'),
    },
    {
      number: t('luxuryYachtCharter.experiences.types.sunset.number'),
      icon: Sunset,
      title: t('luxuryYachtCharter.experiences.types.sunset.title'),
      image: "/assets/images/luxury-yacht-charter/sunset-sailing.jpg",
      imageAlt: "Romantic sunset sailing cruise in Phuket",
      description: t('luxuryYachtCharter.experiences.types.sunset.description'),
    },
    {
      number: t('luxuryYachtCharter.experiences.types.multiDay.number'),
      icon: Moon,
      title: t('luxuryYachtCharter.experiences.types.multiDay.title'),
      image: "/assets/images/luxury-yacht-charter/multi-day.jpg",
      imageAlt: "Luxury sailing yacht anchored in secluded bay at sunrise",
      description: t('luxuryYachtCharter.experiences.types.multiDay.description'),
      recommended: true,
    },
  ]

  return (
    <section id="experiences" className="bg-neutral-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#14b8a6]">
            {t('luxuryYachtCharter.experiences.label')}
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-[#164e63] md:text-4xl text-balance" style={{ fontFamily: "var(--font-playfair)" }}>
            {t('luxuryYachtCharter.experiences.title')}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-neutral-600">
            {t('luxuryYachtCharter.experiences.description')}
          </p>
        </div>

        <div className="mt-16 flex flex-col gap-12">
          {experiences.map((exp, idx) => (
            <div
              key={exp.title}
              className={`group overflow-hidden rounded-2xl border ${
                exp.recommended ? "border-[#14b8a6]/40 shadow-lg" : "border-neutral-200"
              } bg-white`}
            >
              <div
                className={`grid items-stretch lg:grid-cols-2 ${
                  idx % 2 === 1 ? "lg:[direction:rtl]" : ""
                }`}
              >
                <div className="relative aspect-[16/10] lg:aspect-auto">
                  <Image
                    src={exp.image}
                    alt={exp.imageAlt}
                    fill
                    className="object-cover"
                  />
                  {exp.recommended && (
                    <span className="absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold text-white lg:[direction:ltr]" style={{ background: "linear-gradient(90deg, #A0522D 0%, #FF8C00 100%)" }}>
                      {t('luxuryYachtCharter.experiences.types.multiDay.badge')}
                    </span>
                  )}
                </div>
                <div className="flex flex-col justify-center p-8 lg:p-12 lg:[direction:ltr]">
                  <div className="flex items-center gap-3">
                    <span className="font-serif text-3xl font-bold text-[#14b8a6]/30">
                      {exp.number}
                    </span>
                    <exp.icon className="h-5 w-5 text-[#14b8a6]" />
                  </div>
                  <h3 className="mt-3 font-serif text-2xl font-semibold text-[#164e63]" style={{ fontFamily: "var(--font-playfair)" }}>
                    {exp.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-neutral-600">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#quote"
            className="inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-sm font-semibold text-white transition-all hover:opacity-90"
            style={{ background: "linear-gradient(90deg, #A0522D 0%, #FF8C00 100%)" }}
          >
            {t('luxuryYachtCharter.experiences.cta')}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

function DestinationsSection() {
  const { t } = useLanguage()

  const destinations = [
    {
      title: t('luxuryYachtCharter.destinations.islands.phiPhi.title'),
      image: "/assets/images/luxury-yacht-charter/phi-phi-islands.jpg",
      imageAlt: "Phi Phi Islands with limestone cliffs and turquoise water",
      description: t('luxuryYachtCharter.destinations.islands.phiPhi.description'),
    },
    {
      title: t('luxuryYachtCharter.destinations.islands.phangNga.title'),
      image: "/assets/images/luxury-yacht-charter/phang-nga-bay.jpg",
      imageAlt: "Phang Nga Bay dramatic limestone karsts in emerald water",
      description: t('luxuryYachtCharter.destinations.islands.phangNga.description'),
    },
    {
      title: t('luxuryYachtCharter.destinations.islands.hidden.title'),
      image: "/assets/images/luxury-yacht-charter/hidden-gems.jpg",
      imageAlt: "Pristine secluded island with white sand and turquoise water",
      description: t('luxuryYachtCharter.destinations.islands.hidden.description'),
    },
  ]

  return (
    <section id="destinations" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#14b8a6]">
            {t('luxuryYachtCharter.destinations.label')}
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-[#164e63] md:text-4xl text-balance" style={{ fontFamily: "var(--font-playfair)" }}>
            {t('luxuryYachtCharter.destinations.title')}
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {destinations.map((dest) => (
            <div
              key={dest.title}
              className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-all hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={dest.image}
                  alt={dest.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#14b8a6]" />
                  <h3 className="font-serif text-lg font-semibold text-[#164e63]" style={{ fontFamily: "var(--font-playfair)" }}>
                    {dest.title}
                  </h3>
                </div>
                <p className="mt-3 text-base leading-relaxed text-neutral-600">
                  {dest.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-neutral-200 bg-white p-8">
            <h3 className="font-serif text-xl font-semibold text-[#164e63]" style={{ fontFamily: "var(--font-playfair)" }}>
              {t('luxuryYachtCharter.destinations.features.turquoise.title')}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-neutral-600">
              {t('luxuryYachtCharter.destinations.features.turquoise.description')}
            </p>
          </div>
          <div className="rounded-xl border border-neutral-200 bg-white p-8">
            <h3 className="font-serif text-xl font-semibold text-[#164e63]" style={{ fontFamily: "var(--font-playfair)" }}>
              {t('luxuryYachtCharter.destinations.features.hopping.title')}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-neutral-600">
              {t('luxuryYachtCharter.destinations.features.hopping.description')}
            </p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <a
            href="#itinerary"
            className="inline-flex items-center gap-2 text-base font-medium text-[#14b8a6] transition-colors hover:text-[#0d9488]"
          >
            {t('luxuryYachtCharter.destinations.cta')}
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  )
}

function ItinerarySection() {
  const { t } = useLanguage()

  const itineraryFeatures = [
    {
      icon: Map,
      title: t('luxuryYachtCharter.itinerary.features.tailorMade.title'),
      description: t('luxuryYachtCharter.itinerary.features.tailorMade.description'),
    },
    {
      icon: CloudSun,
      title: t('luxuryYachtCharter.itinerary.features.flexible.title'),
      description: t('luxuryYachtCharter.itinerary.features.flexible.description'),
    },
    {
      icon: Clock,
      title: t('luxuryYachtCharter.itinerary.features.unhurried.title'),
      description: t('luxuryYachtCharter.itinerary.features.unhurried.description'),
    },
  ]

  return (
    <section
      id="itinerary"
      className="py-20 lg:py-28"
      style={{ background: "linear-gradient(to bottom right, #164e63, #0f3a47, #0a2a35)" }}
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#14b8a6]">
            {t('luxuryYachtCharter.itinerary.label')}
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl text-balance" style={{ fontFamily: "var(--font-playfair)" }}>
            {t('luxuryYachtCharter.itinerary.title')}
          </h2>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {itineraryFeatures.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-white/10 bg-white/5 p-8"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#14b8a6]/15">
                <feature.icon className="h-6 w-6 text-[#14b8a6]" />
              </div>
              <h3 className="mt-5 font-serif text-lg font-semibold text-white" style={{ fontFamily: "var(--font-playfair)" }}>
                {feature.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-white/90">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#quote"
            className="inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-sm font-semibold text-white transition-all hover:opacity-90"
            style={{ background: "linear-gradient(90deg, #A0522D 0%, #FF8C00 100%)" }}
          >
            {t('luxuryYachtCharter.itinerary.cta')}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

function CrewSection() {
  const { t } = useLanguage()

  const crewMembers = [
    {
      icon: Anchor,
      title: t('luxuryYachtCharter.crew.hospitality.members.captain.title'),
      description: t('luxuryYachtCharter.crew.hospitality.members.captain.description'),
    },
    {
      icon: ChefHat,
      title: t('luxuryYachtCharter.crew.hospitality.members.chef.title'),
      description: t('luxuryYachtCharter.crew.hospitality.members.chef.description'),
    },
    {
      icon: LifeBuoy,
      title: t('luxuryYachtCharter.crew.hospitality.members.deckhand.title'),
      description: t('luxuryYachtCharter.crew.hospitality.members.deckhand.description'),
    },
  ]

  return (
    <section id="crew" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative order-2 lg:order-1">
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/assets/images/luxury-yacht-charter/crew-service.jpg"
                alt="Professional yacht crew serving fresh Thai cuisine"
                width={640}
                height={480}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#14b8a6]">
              {t('luxuryYachtCharter.crew.label')}
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-[#164e63] md:text-4xl text-balance" style={{ fontFamily: "var(--font-playfair)" }}>
              {t('luxuryYachtCharter.crew.title')}
            </h2>

            <div className="mt-4">
              <h3 className="font-semibold text-[#164e63]" style={{ fontFamily: "var(--font-playfair)" }}>
                {t('luxuryYachtCharter.crew.skippers.title')}
              </h3>
              <p className="mt-1.5 text-base leading-relaxed text-neutral-600">
                {t('luxuryYachtCharter.crew.skippers.description')}
              </p>
            </div>

            <h3 className="mt-8 font-serif text-lg font-semibold text-[#164e63]" style={{ fontFamily: "var(--font-playfair)" }}>
              {t('luxuryYachtCharter.crew.hospitality.title')}
            </h3>

            <div className="mt-6 flex flex-col gap-5">
              {crewMembers.map((member) => (
                <div key={member.title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#14b8a6]/10">
                    <member.icon className="h-5 w-5 text-[#14b8a6]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#164e63]" style={{ fontFamily: "var(--font-playfair)" }}>{member.title}</h4>
                    <p className="mt-1 text-base leading-relaxed text-neutral-600">
                      {member.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm italic text-neutral-600">
              {t('luxuryYachtCharter.crew.hospitality.note')}
            </p>

            <div className="mt-8 rounded-xl border border-[#14b8a6]/20 bg-[#14b8a6]/5 p-6">
              <div className="flex items-center gap-2">
                <UtensilsCrossed className="h-5 w-5 text-[#14b8a6]" />
                <h4 className="font-semibold text-[#164e63]" style={{ fontFamily: "var(--font-playfair)" }}>
                  {t('luxuryYachtCharter.crew.dining.title')}
                </h4>
              </div>
              <p className="mt-2 text-base leading-relaxed text-neutral-600">
                {t('luxuryYachtCharter.crew.dining.description')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function WhoSection() {
  const { t } = useLanguage()

  const audiences = [
    {
      icon: Heart,
      image: "/assets/images/luxury-yacht-charter/honeymoon.jpg",
      imageAlt: "Romantic honeymoon dinner on yacht deck at sunset",
      title: t('luxuryYachtCharter.who.audiences.couples.title'),
      description: t('luxuryYachtCharter.who.audiences.couples.description'),
    },
    {
      icon: Users,
      image: "/assets/images/luxury-yacht-charter/family-sailing.jpg",
      imageAlt: "Family enjoying luxury catamaran with children",
      title: t('luxuryYachtCharter.who.audiences.families.title'),
      description: t('luxuryYachtCharter.who.audiences.families.description'),
    },
    {
      icon: PartyPopper,
      title: t('luxuryYachtCharter.who.audiences.celebrations.title'),
      description: t('luxuryYachtCharter.who.audiences.celebrations.description'),
    },
    {
      icon: Compass,
      title: t('luxuryYachtCharter.who.audiences.adventurous.title'),
      description: t('luxuryYachtCharter.who.audiences.adventurous.description'),
    },
  ]

  return (
    <section className="bg-neutral-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#14b8a6]">
            {t('luxuryYachtCharter.who.label')}
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-[#164e63] md:text-4xl text-balance" style={{ fontFamily: "var(--font-playfair)" }}>
            {t('luxuryYachtCharter.who.title')}
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {audiences.map((audience) => (
            <div
              key={audience.title}
              className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-all hover:shadow-lg"
            >
              {audience.image && (
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={audience.image}
                    alt={audience.imageAlt || ""}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="p-6 lg:p-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#14b8a6]/10">
                    <audience.icon className="h-5 w-5 text-[#14b8a6]" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-[#164e63]" style={{ fontFamily: "var(--font-playfair)" }}>
                    {audience.title}
                  </h3>
                </div>
                <p className="mt-3 text-base leading-relaxed text-neutral-600">
                  {audience.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#quote"
            className="inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-sm font-semibold text-white transition-all hover:opacity-90"
            style={{ background: "linear-gradient(90deg, #A0522D 0%, #FF8C00 100%)" }}
          >
            {t('luxuryYachtCharter.who.cta')}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

function ComparisonSection() {
  const { t } = useLanguage()

  const comparisonItems = [
    {
      feature: t('luxuryYachtCharter.comparison.table.rows.privacy.label'),
      luxury: t('luxuryYachtCharter.comparison.table.rows.privacy.luxury'),
      speedboat: t('luxuryYachtCharter.comparison.table.rows.privacy.speedboat'),
    },
    {
      feature: t('luxuryYachtCharter.comparison.table.rows.route.label'),
      luxury: t('luxuryYachtCharter.comparison.table.rows.route.luxury'),
      speedboat: t('luxuryYachtCharter.comparison.table.rows.route.speedboat'),
    },
    {
      feature: t('luxuryYachtCharter.comparison.table.rows.destinations.label'),
      luxury: t('luxuryYachtCharter.comparison.table.rows.destinations.luxury'),
      speedboat: t('luxuryYachtCharter.comparison.table.rows.destinations.speedboat'),
    },
    {
      feature: t('luxuryYachtCharter.comparison.table.rows.meals.label'),
      luxury: t('luxuryYachtCharter.comparison.table.rows.meals.luxury'),
      speedboat: t('luxuryYachtCharter.comparison.table.rows.meals.speedboat'),
    },
    {
      feature: t('luxuryYachtCharter.comparison.table.rows.pace.label'),
      luxury: t('luxuryYachtCharter.comparison.table.rows.pace.luxury'),
      speedboat: t('luxuryYachtCharter.comparison.table.rows.pace.speedboat'),
    },
    {
      feature: t('luxuryYachtCharter.comparison.table.rows.experience.label'),
      luxury: t('luxuryYachtCharter.comparison.table.rows.experience.luxury'),
      speedboat: t('luxuryYachtCharter.comparison.table.rows.experience.speedboat'),
    },
  ]

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#14b8a6]">
            {t('luxuryYachtCharter.comparison.label')}
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-[#164e63] md:text-4xl text-balance" style={{ fontFamily: "var(--font-playfair)" }}>
            {t('luxuryYachtCharter.comparison.title')}
          </h2>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          <div className="rounded-xl border border-neutral-200 bg-white p-8">
            <h3 className="font-serif text-lg font-semibold text-[#164e63]" style={{ fontFamily: "var(--font-playfair)" }}>
              {t('luxuryYachtCharter.comparison.features.privacy.title')}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-neutral-600">
              {t('luxuryYachtCharter.comparison.features.privacy.description')}
            </p>
          </div>
          <div className="rounded-xl border border-neutral-200 bg-white p-8">
            <h3 className="font-serif text-lg font-semibold text-[#164e63]" style={{ fontFamily: "var(--font-playfair)" }}>
              {t('luxuryYachtCharter.comparison.features.access.title')}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-neutral-600">
              {t('luxuryYachtCharter.comparison.features.access.description')}
            </p>
          </div>
          <div className="rounded-xl border border-neutral-200 bg-white p-8">
            <h3 className="font-serif text-lg font-semibold text-[#164e63]" style={{ fontFamily: "var(--font-playfair)" }}>
              {t('luxuryYachtCharter.comparison.features.premium.title')}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-neutral-600">
              {t('luxuryYachtCharter.comparison.features.premium.description')}
            </p>
          </div>
        </div>

        <div className="mt-12 overflow-hidden rounded-xl border border-neutral-200">
          <div
            className="grid grid-cols-3 px-6 py-4"
            style={{ background: "linear-gradient(to bottom right, #164e63, #0f3a47, #0a2a35)" }}
          >
            <div className="text-sm font-medium text-white/90">{t('luxuryYachtCharter.comparison.table.header.feature')}</div>
            <div className="flex items-center gap-2 text-sm font-semibold text-[#14b8a6]">
              <Sailboat className="h-4 w-4" />
              {t('luxuryYachtCharter.comparison.table.header.luxury')}
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-white/80">
              <Zap className="h-4 w-4" />
              {t('luxuryYachtCharter.comparison.table.header.speedboat')}
            </div>
          </div>
          {comparisonItems.map((item, idx) => (
            <div
              key={item.feature}
              className={`grid grid-cols-3 px-6 py-4 ${
                idx % 2 === 0 ? "bg-white" : "bg-neutral-50"
              } ${idx < comparisonItems.length - 1 ? "border-b border-neutral-200" : ""}`}
            >
              <div className="text-sm font-medium text-[#164e63]">{item.feature}</div>
              <div className="flex items-start gap-2 text-sm text-[#164e63]">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#14b8a6]" />
                {item.luxury}
              </div>
              <div className="flex items-start gap-2 text-sm text-neutral-600">
                <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive/60" />
                {item.speedboat}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PlanSection() {
  const { t } = useLanguage()

  const steps = [
    t('luxuryYachtCharter.plan.steps.step1'),
    t('luxuryYachtCharter.plan.steps.step2'),
    t('luxuryYachtCharter.plan.steps.step3'),
    t('luxuryYachtCharter.plan.steps.step4'),
  ]

  const trustItems = [
    t('luxuryYachtCharter.plan.confidence.items.item1'),
    t('luxuryYachtCharter.plan.confidence.items.item2'),
    t('luxuryYachtCharter.plan.confidence.items.item3'),
    t('luxuryYachtCharter.plan.confidence.items.item4'),
    t('luxuryYachtCharter.plan.confidence.items.item5'),
    t('luxuryYachtCharter.plan.confidence.items.item6'),
  ]

  return (
    <section
      id="quote"
      className="py-20 lg:py-28"
      style={{ background: "linear-gradient(to bottom right, #164e63, #0f3a47, #0a2a35)" }}
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#14b8a6]">
            {t('luxuryYachtCharter.plan.label')}
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl text-balance" style={{ fontFamily: "var(--font-playfair)" }}>
            {t('luxuryYachtCharter.plan.title')}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/90">
            {t('luxuryYachtCharter.plan.subtitle')}
          </p>
        </div>

        <div className="mt-12 mx-auto max-w-2xl">
          <div className="flex flex-col gap-6">
            {steps.map((step, idx) => (
              <div key={idx} className="flex gap-4">
                <div
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                  style={{ background: "linear-gradient(90deg, #A0522D 0%, #FF8C00 100%)" }}
                >
                  {idx + 1}
                </div>
                <p className="pt-1 text-base leading-relaxed text-white">{step}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-2xl border border-white/10 bg-white/5 p-8 lg:p-12">
          <div className="flex items-center justify-center gap-2">
            <Shield className="h-5 w-5 text-[#14b8a6]" />
            <h3 className="font-serif text-xl font-semibold text-white" style={{ fontFamily: "var(--font-playfair)" }}>
              {t('luxuryYachtCharter.plan.confidence.title')}
            </h3>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {trustItems.map((item) => (
              <div key={item} className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#14b8a6]" />
                <span className="text-base text-white/90">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 mx-auto max-w-3xl text-center">
          <h3 className="font-serif text-2xl font-bold text-white" style={{ fontFamily: "var(--font-playfair)" }}>
            {t('luxuryYachtCharter.plan.begin.title')}
          </h3>
          <p className="mt-3 text-base text-white/90">
            {t('luxuryYachtCharter.plan.begin.description')}
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="tel:+66612345623"
              className="flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white transition-all hover:opacity-90"
              style={{ background: "linear-gradient(90deg, #A0522D 0%, #FF8C00 100%)" }}
            >
              <Phone className="h-4 w-4" />
              {t('luxuryYachtCharter.plan.begin.phone')}
            </a>
            <a
              href="mailto:booking@faraway-yachting.com"
              className="flex items-center gap-2 rounded-xl border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/60 hover:bg-white/10"
            >
              <Mail className="h-4 w-4" />
              {t('luxuryYachtCharter.plan.begin.email')}
            </a>
            <a
              href="https://wa.me/66612345623"
              className="flex items-center gap-2 rounded-xl border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/60 hover:bg-white/10"
            >
              <MessageCircle className="h-4 w-4" />
              {t('luxuryYachtCharter.plan.begin.whatsapp')}
            </a>
          </div>

          <div className="mt-8">
            <a
              href="https://wa.me/66612345623"
              className="inline-flex items-center gap-2 rounded-xl px-10 py-4 text-base font-bold text-white shadow-lg transition-all hover:opacity-90 hover:shadow-xl"
              style={{ background: "linear-gradient(90deg, #A0522D 0%, #FF8C00 100%)" }}
            >
              {t('luxuryYachtCharter.plan.begin.cta')}
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function FaqSection() {
  const { t } = useLanguage()

  const faqs = [
    {
      question: t('luxuryYachtCharter.faq.questions.what.q'),
      answer: t('luxuryYachtCharter.faq.questions.what.a'),
    },
    {
      question: t('luxuryYachtCharter.faq.questions.difference.q'),
      answer: t('luxuryYachtCharter.faq.questions.difference.a'),
    },
    {
      question: t('luxuryYachtCharter.faq.questions.honeymoon.q'),
      answer: t('luxuryYachtCharter.faq.questions.honeymoon.a'),
    },
    {
      question: t('luxuryYachtCharter.faq.questions.islands.q'),
      answer: t('luxuryYachtCharter.faq.questions.islands.a'),
    },
    {
      question: t('luxuryYachtCharter.faq.questions.firstTime.q'),
      answer: t('luxuryYachtCharter.faq.questions.firstTime.a'),
    },
    {
      question: t('luxuryYachtCharter.faq.questions.included.q'),
      answer: t('luxuryYachtCharter.faq.questions.included.a'),
    },
    {
      question: t('luxuryYachtCharter.faq.questions.bestTime.q'),
      answer: t('luxuryYachtCharter.faq.questions.bestTime.a'),
    },
    {
      question: t('luxuryYachtCharter.faq.questions.cost.q'),
      answer: t('luxuryYachtCharter.faq.questions.cost.a'),
    },
  ]

  return (
    <FAQAccordion
      faqs={faqs}
      title={t('luxuryYachtCharter.faq.title')}
      subtitle={t('luxuryYachtCharter.faq.subtitle')}
      id="faq"
    />
  )
}
