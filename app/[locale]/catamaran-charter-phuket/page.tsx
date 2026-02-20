import React from 'react'
import Image from 'next/image'
import { LocaleLink } from '@/components/shared/LocaleLink'
import { CTAButton } from '@/components/shared/CTAButton'
import { ContactCards } from '@/components/shared/ContactCards'
import { ReviewBadges } from '@/components/shared/ReviewBadges'
import { FeaturedYachts } from '@/components/shared/FeaturedYachts'
import { getTranslations } from '@/lib/i18n/getTranslations'
import { Phone, MessageCircle, Mail, MapPin, CheckCircle, Star, Anchor, Users, Ship, Waves, Shield, Award, Calendar, Clock, Compass } from 'lucide-react'
import { FAQAccordion } from '@/components/shared/FAQAccordion'
import { BookingCTA } from '@/components/shared/BookingCTA'
import { CatamaranFAQSchema } from './faq-schema'
import { DestinationsCarousel } from './DestinationsCarousel'
import { TestimonialsCarousel } from './TestimonialsCarousel'

export default async function CatamaranCharterPhuketPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const { t } = getTranslations(locale)

  const faqs = [
    { question: t('catamaranCharter.faq.questions.cost.q'), answer: t('catamaranCharter.faq.questions.cost.a') },
    { question: t('catamaranCharter.faq.questions.guests.q'), answer: t('catamaranCharter.faq.questions.guests.a') },
    { question: t('catamaranCharter.faq.questions.experience.q'), answer: t('catamaranCharter.faq.questions.experience.a') },
    { question: t('catamaranCharter.faq.questions.children.q'), answer: t('catamaranCharter.faq.questions.children.a') },
    { question: t('catamaranCharter.faq.questions.difference.q'), answer: t('catamaranCharter.faq.questions.difference.a') },
    { question: t('catamaranCharter.faq.questions.islands.q'), answer: t('catamaranCharter.faq.questions.islands.a') },
    { question: t('catamaranCharter.faq.questions.included.q'), answer: t('catamaranCharter.faq.questions.included.a') },
    { question: t('catamaranCharter.faq.questions.bestTime.q'), answer: t('catamaranCharter.faq.questions.bestTime.a') },
    { question: t('catamaranCharter.faq.questions.advance.q'), answer: t('catamaranCharter.faq.questions.advance.a') },
    { question: t('catamaranCharter.faq.questions.weather.q'), answer: t('catamaranCharter.faq.questions.weather.a') },
  ]

  const destinations = [
    {
      title: t('catamaranCharter.destinations.phiPhi.title'),
      description: t('catamaranCharter.destinations.phiPhi.description'),
      distance: t('catamaranCharter.destinations.phiPhi.distance'),
      type: t('catamaranCharter.destinations.phiPhi.type'),
      link: '/phi-phi-islands-sailing',
      linkText: t('catamaranCharter.destinations.phiPhi.linkText'),
      image: '/assets/images/catamaran-charter/mayabay.jpg'
    },
    {
      title: t('catamaranCharter.destinations.racha.title'),
      subtitle1: t('catamaranCharter.destinations.racha.subtitle1'),
      description1: t('catamaranCharter.destinations.racha.description1'),
      subtitle2: t('catamaranCharter.destinations.racha.subtitle2'),
      description2: t('catamaranCharter.destinations.racha.description2'),
      distance: t('catamaranCharter.destinations.racha.distance'),
      type: t('catamaranCharter.destinations.racha.type'),
      link: '/racha-islands-sailing',
      linkText: t('catamaranCharter.destinations.racha.linkText'),
      image: '/assets/images/home/racha-island.jpg'
    },
    {
      title: t('catamaranCharter.destinations.phangNga.title'),
      description: t('catamaranCharter.destinations.phangNga.description'),
      distance: t('catamaranCharter.destinations.phangNga.distance'),
      type: t('catamaranCharter.destinations.phangNga.type'),
      link: '/phang-nga-bay-yacht-charter',
      linkText: t('catamaranCharter.destinations.phangNga.linkText'),
      image: '/assets/images/home/phuket2.jpg'
    }
  ]

  const testimonials = [
    { quote: t('catamaranCharter.testimonials.testimonial1.quote'), author: t('catamaranCharter.testimonials.testimonial1.author'), url: 'https://maps.app.goo.gl/9tDweePvmhzqguD28' },
    { quote: t('catamaranCharter.testimonials.testimonial2.quote'), author: t('catamaranCharter.testimonials.testimonial2.author'), url: 'https://maps.app.goo.gl/qSX9m3XRVBAA1ETx8' },
    { quote: t('catamaranCharter.testimonials.testimonial3.quote'), author: t('catamaranCharter.testimonials.testimonial3.author'), url: 'https://maps.app.goo.gl/znDCvaW7y1c7P3bD9' },
    { quote: t('catamaranCharter.testimonials.testimonial4.quote'), author: t('catamaranCharter.testimonials.testimonial4.author'), url: 'https://maps.app.goo.gl/okBG4Djrd7yRwqJ17' },
    { quote: t('catamaranCharter.testimonials.testimonial5.quote'), author: t('catamaranCharter.testimonials.testimonial5.author'), url: 'https://maps.app.goo.gl/d4XsD7mviWsdh6bx8' },
    { quote: t('catamaranCharter.testimonials.testimonial6.quote'), author: t('catamaranCharter.testimonials.testimonial6.author'), url: 'https://maps.app.goo.gl/GPpavLEa3Xhh5C4n7' },
    { quote: t('catamaranCharter.testimonials.testimonial7.quote'), author: t('catamaranCharter.testimonials.testimonial7.author'), url: 'https://maps.app.goo.gl/RwB5zh8GNM3ReC6S7' }
  ]

  const whyCatamaranSections = [
    {
      image: '/assets/images/catamaran-charter/luxury-catamaran.webp',
      imageAlt: 'Luxury Catamaran Phuket',
      imageLeft: true,
      title: t('catamaranCharter.whyCatamaran.features.space.title'),
      paragraph1: t('catamaranCharter.whyCatamaran.features.space.p1'),
      paragraph2: null,
    },
    {
      image: '/assets/images/home/hero3.jpeg',
      imageAlt: 'Catamaran Party Phuket',
      imageLeft: false,
      title: t('catamaranCharter.whyCatamaran.features.safety.title'),
      paragraph1: t('catamaranCharter.whyCatamaran.features.safety.p1'),
      paragraph2: null,
    },
    {
      image: '/assets/images/catamaran-charter/catamaran-party.jpeg',
      imageAlt: 'Bareboat Catamaran Phuket',
      imageLeft: true,
      title: t('catamaranCharter.whyCatamaran.features.alternative.title'),
      paragraph1: t('catamaranCharter.whyCatamaran.features.alternative.p1'),
      paragraph2: null,
    },
  ]

  const charterOptions = [
    {
      title: t('catamaranCharter.charterOptions.options.day.title'),
      price: t('catamaranCharter.charterOptions.options.day.price'),
      perfectFor: t('catamaranCharter.charterOptions.options.day.perfectFor'),
      description: t('catamaranCharter.charterOptions.options.day.description'),
      link: '/day-sailing-tours-phuket',
      borderColor: 'border-l-[#164e63]',
      accentColor: 'text-[#164e63]'
    },
    {
      title: t('catamaranCharter.charterOptions.options.extended.title'),
      price: t('catamaranCharter.charterOptions.options.extended.price'),
      perfectFor: t('catamaranCharter.charterOptions.options.extended.perfectFor'),
      description: t('catamaranCharter.charterOptions.options.extended.description'),
      link: '/contact',
      borderColor: 'border-l-[#164e63]',
      accentColor: 'text-[#164e63]'
    },
    {
      title: t('catamaranCharter.charterOptions.options.overnight.title'),
      price: t('catamaranCharter.charterOptions.options.overnight.price'),
      perfectFor: t('catamaranCharter.charterOptions.options.overnight.perfectFor'),
      description: t('catamaranCharter.charterOptions.options.overnight.description'),
      link: '/multi-day-sailing-phuket',
      borderColor: 'border-l-[#164e63]',
      accentColor: 'text-[#164e63]'
    }
  ]

  const crewFeatures = [
    {
      icon: Users,
      title: t('catamaranCharter.crew.features.skippers.title'),
      content: t('catamaranCharter.crew.features.skippers.content')
    },
    {
      icon: Anchor,
      title: t('catamaranCharter.crew.features.comfort.title'),
      paragraph1: t('catamaranCharter.crew.features.comfort.p1'),
      paragraph2: t('catamaranCharter.crew.features.comfort.p2')
    },
    {
      icon: Award,
      title: t('catamaranCharter.crew.features.meals.title'),
      paragraph1: t('catamaranCharter.crew.features.meals.p1'),
      paragraph2: t('catamaranCharter.crew.features.meals.p2')
    }
  ]

  const occasions = [
    {
      title: t('catamaranCharter.specialMoments.honeymoon.title'),
      description: t('catamaranCharter.specialMoments.honeymoon.content'),
      link: '/honeymoon-sailing-phuket',
      linkText: t('catamaranCharter.specialMoments.honeymoon.linkText'),
      image: '/assets/images/catamaran-charter/couple-catamaran.webp',
    },
    {
      title: t('catamaranCharter.specialMoments.family.title'),
      description: `${t('catamaranCharter.specialMoments.family.p1')} ${t('catamaranCharter.specialMoments.family.p2')}`,
      link: '/family-sailing-phuket',
      linkText: t('catamaranCharter.specialMoments.family.linkText'),
      image: '/assets/images/catamaran-charter/group-catamaran.jpg',
    },
    {
      title: t('catamaranCharter.specialMoments.celebrations.title'),
      description: t('catamaranCharter.specialMoments.celebrations.content'),
      link: '/yacht-wedding-phuket',
      linkText: t('catamaranCharter.specialMoments.celebrations.linkText'),
      image: '/assets/images/catamaran-charter/celebration-catamaran.jpg',
    }
  ]

  const vsMonohullFeatures = [
    'deckSpace', 'stability', 'cabins', 'seasickness', 'swimAccess',
  ]

  const customExperiences = [
    {
      icon: Compass,
      title: t('catamaranCharter.customExperience.itineraries.title'),
      content: t('catamaranCharter.customExperience.itineraries.content')
    },
    {
      icon: Waves,
      title: t('catamaranCharter.customExperience.routes.title'),
      content: t('catamaranCharter.customExperience.routes.content')
    },
    {
      icon: Clock,
      title: t('catamaranCharter.customExperience.unhurried.title'),
      content: t('catamaranCharter.customExperience.unhurried.content')
    }
  ]

  return (
    <>
      <CatamaranFAQSchema />
      <main className="min-h-screen">
        {/* HeroSection */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/assets/images/catamaran-charter/hero.jpg"
              alt="Catamaran Charter Phuket"
              fill
              sizes="100vw"
              className="object-cover"
              priority
              quality={100}
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-b from-[#164e63]/60 via-[#164e63]/40 to-[#164e63]/60 z-[1]"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 sm:pt-32 md:pt-36 pb-8 sm:pb-10 md:pb-12 flex justify-center">
            <div className="max-w-4xl text-center">
              <h1
                className="font-[family-name:var(--font-playfair)] text-white mb-6 leading-[1.2] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold"
                style={{ textShadow: '3px 3px 12px rgba(0, 0, 0, 0.8), 0 0 30px rgba(0, 0, 0, 0.6)' }}
              >
                {t('catamaranCharter.hero.title')}
              </h1>

              <div className="space-y-4 mb-8">
                <p
                  className="text-lg sm:text-xl md:text-2xl text-white leading-relaxed font-medium"
                  style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8), 0 0 15px rgba(0, 0, 0, 0.6)' }}
                >
                  {t('catamaranCharter.hero.description1')}
                </p>

                {t('catamaranCharter.hero.description2') && (
                  <p
                    className="text-base sm:text-lg md:text-xl text-white/95 leading-relaxed"
                    style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8), 0 0 15px rgba(0, 0, 0, 0.6)' }}
                  >
                    {t('catamaranCharter.hero.description2')}
                  </p>
                )}
              </div>

              <CTAButton
                href="/contact"
                trackingId="catamaran-hero-quote"
                className="!px-6 !py-3 !text-base mb-6"
                style={{ background: 'linear-gradient(90deg, #A0522D 0%, #FF8C00 100%)' }}
              >
                {t('catamaranCharter.hero.cta')}
              </CTAButton>

              <ReviewBadges />
            </div>
          </div>
        </section>

        {/* ContactCardsSection */}
        <section className="bg-white py-6 sm:py-8">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <ContactCards />
          </div>
        </section>

        <FeaturedYachts />

        {/* CTABlock1 */}
        <section className="bg-gradient-to-br from-slate-50 via-gray-50 to-sky-50 py-6 sm:py-8">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-[#164e63] via-[#0f3a47] to-[#0a2a35] rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 text-center">
              <p className="text-white/80 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed">
                {t('catamaranCharter.cta1.text')}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <LocaleLink href="/contact" className="inline-flex items-center justify-center px-8 sm:px-10 md:px-12 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold text-white bg-amber-gradient rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 whitespace-nowrap">
                  {t('catamaranCharter.cta1.button1')}
                </LocaleLink>
                <a
                  href="https://wa.me/66612345623"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 sm:px-10 md:px-12 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold text-white bg-green-600 rounded-xl hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 whitespace-nowrap"
                >
                  <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  {t('catamaranCharter.cta1.button2')}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* IntroSection */}
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#164e63] mb-12 text-center" style={{ fontFamily: "var(--font-playfair)" }}>
                {t('catamaranCharter.intro.title')}
              </h2>

              {/* Private Sailing Experiences - Text Left, Image Right */}
              <div className="mb-2">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-12 items-center">
                  <div className="md:col-span-3">
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#164e63] mb-4">
                      {t('catamaranCharter.intro.section1.title')}
                    </h3>
                    <div className="text-neutral-700 leading-relaxed space-y-4">
                      <p>{t('catamaranCharter.intro.section1.p1')}</p>
                      <p>{t('catamaranCharter.intro.section1.p2')}</p>
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    {/* Blob image with floating icons */}
                    <div className="relative flex items-center justify-center py-10 px-6">
                      {/* Top-right: Ship icon */}
                      <div className="absolute top-2 right-2 text-gray-300">
                        <Ship className="w-10 h-10 sm:w-14 sm:h-14" strokeWidth={1} />
                      </div>
                      {/* Bottom-left: Waves icon */}
                      <div className="absolute bottom-2 left-0 text-gray-300">
                        <Waves className="w-10 h-10 sm:w-14 sm:h-14" strokeWidth={1} />
                      </div>
                      {/* Bottom-right: Anchor icon */}
                      <div className="absolute bottom-4 right-0 text-gray-200">
                        <Anchor className="w-8 h-8 sm:w-12 sm:h-12" strokeWidth={1} />
                      </div>
                      {/* Top-left: Compass icon */}
                      <div className="absolute top-4 left-0 text-gray-200">
                        <Compass className="w-8 h-8 sm:w-11 sm:h-11" strokeWidth={1} />
                      </div>
                      {/* Blob-shaped image */}
                      <div className="relative w-56 h-72 sm:w-80 sm:h-96 md:w-[340px] md:h-[400px]"
                        style={{ borderRadius: '60% 40% 50% 50% / 50% 60% 40% 50%' }}
                      >
                        <Image
                          src="/assets/images/catamaran-charter/Catamaran-private.jpeg"
                          alt="Private Catamaran Charter Phuket"
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover"
                          style={{ borderRadius: '60% 40% 50% 50% / 50% 60% 40% 50%' }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Luxury Catamarans - Image Left, Text Right */}
              <div className="mb-12">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-12 items-center">
                  <div className="md:col-span-2 order-2 md:order-1">
                    {/* Rounded rectangle with icon decorations */}
                    {/* Blob image with floating icons */}
                    <div className="relative flex items-center justify-center py-10 px-6">
                      {/* Top-left: Anchor icon */}
                      <div className="absolute top-2 left-2 text-gray-300">
                        <Anchor className="w-10 h-10 sm:w-14 sm:h-14" strokeWidth={1} />
                      </div>
                      {/* Bottom-right: Waves icon */}
                      <div className="absolute bottom-2 right-0 text-gray-300">
                        <Waves className="w-10 h-10 sm:w-14 sm:h-14" strokeWidth={1} />
                      </div>
                      {/* Top-right: Compass icon */}
                      <div className="absolute top-4 right-0 text-gray-200">
                        <Compass className="w-8 h-8 sm:w-11 sm:h-11" strokeWidth={1} />
                      </div>
                      {/* Bottom-left: Ship icon */}
                      <div className="absolute bottom-4 left-0 text-gray-200">
                        <Ship className="w-8 h-8 sm:w-12 sm:h-12" strokeWidth={1} />
                      </div>
                      {/* Blob-shaped image (mirrored blob shape) */}
                      <div className="relative w-56 h-72 sm:w-80 sm:h-96 md:w-[340px] md:h-[400px]"
                        style={{ borderRadius: '40% 60% 50% 50% / 60% 40% 60% 40%' }}
                      >
                        <Image
                          src="/assets/images/catamaran-charter/catamaran-family.jpg"
                          alt="Luxury Catamaran Phuket"
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover"
                          style={{ borderRadius: '40% 60% 50% 50% / 60% 40% 60% 40%' }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-3 order-1 md:order-2">
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#164e63] mb-4">
                      {t('catamaranCharter.intro.section2.title')}
                    </h3>
                    <div className="text-neutral-700 leading-relaxed space-y-4">
                      <p>{t('catamaranCharter.intro.section2.p1')}</p>
                      <p>{t('catamaranCharter.intro.section2.p2')}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pricing Cards */}
              <div className="grid sm:grid-cols-3 gap-3 sm:gap-4">
                {[
                  { label: t('catamaranCharter.intro.pricing.dayCharters'), price: `${t('catamaranCharter.intro.pricing.from')} €800` },
                  { label: t('catamaranCharter.intro.pricing.overnight'), price: `${t('catamaranCharter.intro.pricing.from')} €1,000/night` },
                  { label: t('catamaranCharter.intro.pricing.premium'), price: `${t('catamaranCharter.intro.pricing.from')} €2,500/night` },
                ].map((item, idx) => (
                  <div key={idx} className="p-4 sm:p-5 rounded-xl text-center" style={{ background: 'linear-gradient(to bottom right, #164e63, #0f3a47, #0a2a35)' }}>
                    <span className="block text-white font-semibold text-sm sm:text-base mb-2">{item.label}</span>
                    <span className="block text-lg sm:text-xl font-bold text-[#14b8a6]">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* WhyCatamaranSection */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-neutral-50 to-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#164e63] mb-4 text-center" style={{ fontFamily: "var(--font-playfair)" }}>
              {t('catamaranCharter.whyCatamaran.title')}
            </h2>
            <div className="flex justify-center mb-16">
              <div className="flex items-center gap-2">
                <div className="h-1 w-12 bg-[#164e63] rounded-full"></div>
                <div className="h-2 w-2 bg-amber-500 rounded-full"></div>
                <div className="h-1 w-12 bg-[#164e63] rounded-full"></div>
              </div>
            </div>

            <div className="space-y-16 md:space-y-0">
              {whyCatamaranSections.map((section, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-start gap-8 md:gap-0 ${
                    index === 0 ? 'md:mb-0' : index === 1 ? 'md:-mt-44' : 'md:-mt-24'
                  }`}
                  style={{ zIndex: index + 1 }}
                >
                  {section.imageLeft ? (
                    <>
                      {/* Image LEFT */}
                      <div className={`w-full md:w-[48%] flex-shrink-0 ${index === 2 ? 'md:-mt-6' : ''}`}>
                        <div className="relative h-72 sm:h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-[0_20px_50px_-12px_rgba(12,59,74,0.25)]">
                          <Image src={section.image} alt={section.imageAlt} fill sizes="(max-width: 768px) 100vw, 48vw" className="object-cover" />
                        </div>
                      </div>
                      {/* Text RIGHT */}
                      <div className={`w-full md:w-[52%] md:pl-12 bg-white md:bg-transparent md:py-8 ${index === 2 ? 'md:mt-8' : ''}`}>
                        <h3 className="text-2xl sm:text-3xl font-bold text-[#164e63] mb-4">
                          {section.title}
                        </h3>
                        <p className="text-neutral-600 leading-relaxed mb-3 text-sm sm:text-base">{section.paragraph1}</p>
                        {section.paragraph2 && (
                          <p className="text-neutral-600 leading-relaxed mb-5 text-sm sm:text-base">{section.paragraph2}</p>
                        )}
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Text LEFT - Centered */}
                      <div className="w-full md:w-[52%] md:pr-12 bg-white md:bg-transparent order-2 md:order-1 flex items-center md:mt-8">
                        <div>
                          <h3 className="text-2xl sm:text-3xl font-bold text-[#164e63] mb-4">
                            {section.title}
                          </h3>
                          <p className="text-neutral-600 leading-relaxed mb-3 text-sm sm:text-base">{section.paragraph1}</p>
                          {section.paragraph2 && (
                            <p className="text-neutral-600 leading-relaxed mb-5 text-sm sm:text-base">{section.paragraph2}</p>
                          )}
                        </div>
                      </div>
                      {/* Image RIGHT - Overlapping image */}
                      <div className="w-full md:w-[44%] flex-shrink-0 md:pr-16 order-1 md:order-2 md:-mt-32">
                        <div className="relative h-72 sm:h-80 md:h-[420px] lg:h-[480px] rounded-3xl overflow-hidden shadow-[0_20px_50px_-12px_rgba(12,59,74,0.25)]" style={{ zIndex: 10 }}>
                          <Image src={section.image} alt={section.imageAlt} fill sizes="(max-width: 768px) 100vw, 44vw" className="object-cover" />
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTABlock2 */}
        <section className="bg-gradient-to-br from-slate-50 via-gray-50 to-sky-50 py-6 sm:py-8">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-[#164e63] via-[#0f3a47] to-[#0a2a35] rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 text-center">
              <div className="text-4xl mb-4">{t('catamaranCharter.cta2.icon')}</div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-white">
                {t('catamaranCharter.cta2.title')}
              </h3>
              <p className="text-white/80 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed">
                {t('catamaranCharter.cta2.text')}
              </p>
              <LocaleLink href="/contact" className="inline-flex items-center justify-center px-8 sm:px-10 md:px-12 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold text-white bg-amber-gradient rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 whitespace-nowrap">
                {t('catamaranCharter.cta2.button')}
              </LocaleLink>
            </div>
          </div>
        </section>

        {/* CharterOptionsSection */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-neutral-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#164e63] mb-4 text-center" style={{ fontFamily: "var(--font-playfair)" }}>
              {t('catamaranCharter.charterOptions.title')}
            </h2>
            <div className="flex justify-center mb-12">
              <div className="flex items-center gap-2">
                <div className="h-1 w-12 bg-[#164e63] rounded-full"></div>
                <div className="h-2 w-2 bg-amber-500 rounded-full"></div>
                <div className="h-1 w-12 bg-[#164e63] rounded-full"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto mb-8">
              {charterOptions.map((option, index) => (
                <div key={index} className={`rounded-2xl transition-all duration-300 border-l-8 ${option.borderColor} p-6 sm:p-8 group hover:-translate-y-1 ${
                  index === 1 ? 'bg-[#0c3b4a] shadow-[0_20px_50px_-12px_rgba(12,59,74,0.25)] hover:shadow-[0_25px_60px_-15px_rgba(12,59,74,0.35)]' : 'bg-gray-50 shadow-[0_20px_50px_-12px_rgba(12,59,74,0.5)] hover:shadow-[0_25px_60px_-15px_rgba(12,59,74,0.6)]'
                }`}>
                  <h3 className={`text-xl sm:text-2xl font-bold mb-3 ${
                    index === 1 ? 'text-white' : 'text-[#164e63]'
                  }`}>
                    {option.title}
                  </h3>

                  <div className={`mb-4 pb-4 border-b ${
                    index === 1 ? 'border-white/30' : 'border-neutral-200'
                  }`}>
                    <span className={`text-2xl sm:text-3xl font-bold ${
                      index === 1 ? 'text-white' : option.accentColor
                    } block`}>{option.price}</span>
                  </div>

                  <p className={`text-sm font-semibold mb-4 italic ${
                    index === 1 ? 'text-white/90' : 'text-neutral-600'
                  }`}>{option.perfectFor}</p>

                  <p className={`leading-relaxed text-sm ${
                    index === 1 ? 'text-white/90 mb-12' : 'text-neutral-700 mb-6'
                  }`}>
                    {option.description}
                  </p>

                  <LocaleLink
                    href={option.link}
                    className={`inline-flex items-center justify-center w-full font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 ${
                      index === 1
                        ? 'bg-white text-[#164e63] hover:bg-gray-100'
                        : 'bg-[#164e63] hover:bg-[#14b8a6] text-white'
                    }`}
                  >
                    {index === 0 ? t('catamaranCharter.charterOptions.options.day.linkText') : index === 1 ? t('catamaranCharter.charterOptions.options.extended.linkText') : t('catamaranCharter.charterOptions.options.overnight.linkText')}
                  </LocaleLink>
                </div>
              ))}
            </div>

            {/* Multi-day routes information */}
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-neutral-700 leading-relaxed text-sm sm:text-base bg-white rounded-2xl p-6 shadow-[0_10px_30px_-8px_rgba(12,59,74,0.20)] border-l-4 border-[#164e63]">
                <strong className="text-[#164e63]">{t('catamaranCharter.charterOptions.multiDayInfo')}</strong>
              </p>
            </div>
          </div>
        </section>

        {/* DestinationsSection */}
        <DestinationsCarousel destinations={destinations} sectionTitle={t('catamaranCharter.destinations.title')} />

        {/* ContactCardsSection */}
        <section className="bg-white py-6 sm:py-8">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <ContactCards />
          </div>
        </section>

        {/* TestimonialsSection */}
        <TestimonialsCarousel testimonials={testimonials} sectionTitle={t('catamaranCharter.testimonials.title')} />

        {/* CrewAndComfortSection */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-neutral-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#164e63] mb-4 text-center" style={{ fontFamily: "var(--font-playfair)" }}>
              {t('catamaranCharter.crew.title')}
            </h2>
            <div className="flex justify-center mb-12">
              <div className="flex items-center gap-2">
                <div className="h-1 w-12 bg-[#164e63] rounded-full"></div>
                <div className="h-2 w-2 bg-amber-500 rounded-full"></div>
                <div className="h-1 w-12 bg-[#164e63] rounded-full"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
              {crewFeatures.map((feature, index) => (
                <div key={index} className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 sm:p-8 border border-neutral-100 group">
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#164e63] to-[#14b8a6] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-10 h-10 text-white" />
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#164e63] mb-4 text-center">
                    {feature.title}
                  </h3>

                  {'content' in feature ? (
                    <p className="text-neutral-700 leading-relaxed text-center">
                      {feature.content}
                    </p>
                  ) : (
                    <>
                      <p className="text-neutral-700 leading-relaxed mb-4 text-center">
                        {feature.paragraph1}
                      </p>
                      {feature.paragraph2 && (
                        <p className="text-neutral-700 leading-relaxed text-center">
                          {feature.paragraph2}
                        </p>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SpecialMomentsSection */}
        <section className="py-10 sm:py-14 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#164e63] mb-4">
                {t('catamaranCharter.specialMoments.title')}
              </h2>
              <div className="flex items-center justify-center gap-2">
                <div className="h-1 w-12 bg-[#164e63] rounded-full"></div>
                <div className="h-2 w-2 bg-amber-500 rounded-full"></div>
                <div className="h-1 w-12 bg-[#164e63] rounded-full"></div>
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8">
              {occasions.map((occasion, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="grid md:grid-cols-5 gap-0">
                    <div className="relative h-64 md:h-auto md:col-span-2 overflow-hidden">
                      <Image
                        src={occasion.image}
                        alt={occasion.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 40vw"
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
                          {occasion.title}
                        </h3>

                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
                          {occasion.description}
                        </p>

                        <LocaleLink
                          href={occasion.link}
                          className="inline-flex items-center justify-center bg-gradient-to-r from-[#14b8a6] to-[#0d9488] hover:from-[#0d9488] hover:to-[#0a7a6a] text-white font-bold px-6 py-3 rounded-xl text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 w-fit"
                        >
                          {occasion.linkText}
                        </LocaleLink>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ContactCardsSection */}
        <section className="bg-white py-6 sm:py-8">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <ContactCards />
          </div>
        </section>

        {/* CatamaranVsMonohullSection */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-14">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#164e63] mb-4">
                {t('catamaranCharter.vsMonohull.title')}
              </h2>
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="h-1 w-12 bg-[#164e63] rounded-full"></div>
                <div className="h-2 w-2 bg-amber-500 rounded-full"></div>
                <div className="h-1 w-12 bg-[#164e63] rounded-full"></div>
              </div>
              <p className="text-base sm:text-lg text-neutral-600 max-w-3xl mx-auto">
                {t('catamaranCharter.vsMonohull.subtitle')}
              </p>
            </div>

            <div className="max-w-5xl mx-auto mb-10 sm:mb-14">
              <div className="bg-gradient-to-br from-[#164e63] via-[#0f3a47] to-[#0a2a35] rounded-2xl shadow-xl overflow-hidden">
                <div className="grid grid-cols-2">
                  <div className="relative h-52 sm:h-60 md:h-72 overflow-hidden">
                    <Image src="/assets/images/catamaran-charter/Catamaran_luxury.jpg" alt="Catamaran" fill sizes="50vw" className="object-cover" />
                  </div>
                  <div className="relative h-52 sm:h-60 md:h-72 overflow-hidden border-l-2 border-[#164e63]">
                    <Image src="/assets/images/home/day-sailing1.jpg" alt="Monohull" fill sizes="50vw" className="object-cover" />
                  </div>
                </div>

                <div className="grid grid-cols-2 border-b border-white/10">
                  <div className="px-4 sm:px-6 py-3 sm:py-4 text-center">
                    <span className="font-bold text-sm sm:text-base text-white uppercase tracking-wider">{t('catamaranCharter.vsMonohull.table.catamaran')}</span>
                  </div>
                  <div className="px-4 sm:px-6 py-3 sm:py-4 text-center border-l border-white/10">
                    <span className="font-bold text-sm sm:text-base text-white uppercase tracking-wider">{t('catamaranCharter.vsMonohull.table.monohull')}</span>
                  </div>
                </div>

                {vsMonohullFeatures.map((key, i) => (
                  <div key={key} className={`grid grid-cols-2 border-b border-white/10 ${i % 2 === 0 ? 'bg-white/5' : 'bg-white/[0.02]'}`}>
                    <div className="px-4 sm:px-6 py-4 sm:py-5">
                      <span className="text-[#14b8a6] text-[10px] sm:text-xs font-semibold uppercase tracking-wider">{t(`catamaranCharter.vsMonohull.table.${key}.label`)}: </span>
                      <span className="text-white text-[11px] sm:text-sm leading-relaxed">{t(`catamaranCharter.vsMonohull.table.${key}.catamaran`)}</span>
                    </div>
                    <div className="px-4 sm:px-6 py-4 sm:py-5 border-l border-white/10">
                      <span className="text-[#14b8a6] text-[10px] sm:text-xs font-semibold uppercase tracking-wider">{t(`catamaranCharter.vsMonohull.table.${key}.label`)}: </span>
                      <span className="text-white text-[11px] sm:text-sm leading-relaxed">{t(`catamaranCharter.vsMonohull.table.${key}.monohull`)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-neutral-100 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-[#164e63] to-[#14b8a6] rounded-xl flex items-center justify-center mb-5">
                  <Anchor className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#164e63] mb-3">
                  {t('catamaranCharter.vsMonohull.anchorage.title')}
                </h3>
                <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">
                  {t('catamaranCharter.vsMonohull.anchorage.text')}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-neutral-100 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-[#164e63] to-[#14b8a6] rounded-xl flex items-center justify-center mb-5">
                  <Waves className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#164e63] mb-3">
                  {t('catamaranCharter.vsMonohull.calm.title')}
                </h3>
                <p className="text-neutral-600 leading-relaxed mb-3 text-sm sm:text-base">
                  {t('catamaranCharter.vsMonohull.calm.p1')}
                </p>
                <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">
                  {t('catamaranCharter.vsMonohull.calm.p2')}{' '}
                  <LocaleLink href="/bareboat-charter-phuket" className="text-[#14b8a6] hover:text-[#164e63] font-medium underline underline-offset-2 transition-colors">
                    {t('catamaranCharter.vsMonohull.calm.link')}
                  </LocaleLink>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CustomExperienceSection */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#164e63] via-[#0f3a47] to-[#164e63]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 text-center" style={{ fontFamily: "var(--font-playfair)" }}>
              {t('catamaranCharter.customExperience.title')}
            </h2>
            <div className="flex justify-center mb-12">
              <div className="flex items-center gap-2">
                <div className="h-1 w-12 bg-[#164e63] rounded-full"></div>
                <div className="h-2 w-2 bg-amber-500 rounded-full"></div>
                <div className="h-1 w-12 bg-[#164e63] rounded-full"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
              {customExperiences.map((exp, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 p-6 sm:p-8 border border-white/20 group">
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <exp.icon className="w-10 h-10 text-[#164e63]" />
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 text-center">
                    {exp.title}
                  </h3>

                  <p className="text-white/90 leading-relaxed text-center">
                    {exp.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTABlock3 */}
        <section className="bg-gradient-to-br from-slate-50 via-gray-50 to-sky-50 py-6 sm:py-8">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-[#164e63] via-[#0f3a47] to-[#0a2a35] rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 text-center">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-white">
                {t('catamaranCharter.cta3.title')}
              </h3>
              <p className="text-white/80 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed">
                {t('catamaranCharter.cta3.text')}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <LocaleLink href="/contact" className="inline-flex items-center justify-center px-8 sm:px-10 md:px-12 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold text-white bg-amber-gradient rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 whitespace-nowrap">
                  {t('catamaranCharter.cta3.button1')}
                </LocaleLink>
                <a
                  href="https://wa.me/66612345623"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 sm:px-10 md:px-12 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold text-white bg-green-600 rounded-xl hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 whitespace-nowrap"
                >
                  <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  {t('catamaranCharter.cta3.button2')}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* PlanYourCharterSection */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-neutral-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#164e63] mb-4 text-center" style={{ fontFamily: "var(--font-playfair)" }}>
              {t('catamaranCharter.planCharter.title')}
            </h2>
            <div className="flex justify-center mb-12">
              <div className="flex items-center gap-2">
                <div className="h-1 w-12 bg-[#164e63] rounded-full"></div>
                <div className="h-2 w-2 bg-amber-500 rounded-full"></div>
                <div className="h-1 w-12 bg-[#164e63] rounded-full"></div>
              </div>
            </div>

            <div className="max-w-6xl mx-auto mb-12">
              <div className="bg-gradient-to-br from-[#164e63] to-[#14b8a6] rounded-3xl p-1 shadow-xl">
                <div className="bg-white rounded-[calc(1.5rem-4px)] p-6 sm:p-8">
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#164e63] mb-6 text-center flex items-center justify-center gap-3">
                    <Calendar className="w-8 h-8 text-[#14b8a6]" />
                    {t('catamaranCharter.planCharter.selectTitle')}
                  </h3>

                  <div className="overflow-x-auto -mx-4 sm:mx-0">
                <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden min-w-[480px]">
                  <thead>
                    <tr className="bg-[#164e63] text-white">
                      <th className="px-2 sm:px-4 md:px-6 py-3 sm:py-4 text-left font-bold text-xs sm:text-sm md:text-base">{t('catamaranCharter.planCharter.table.charterType')}</th>
                      <th className="px-2 sm:px-4 md:px-6 py-3 sm:py-4 text-left font-bold text-xs sm:text-sm md:text-base">{t('catamaranCharter.planCharter.table.duration')}</th>
                      <th className="px-2 sm:px-4 md:px-6 py-3 sm:py-4 text-left font-bold text-xs sm:text-sm md:text-base">{t('catamaranCharter.planCharter.table.bestFor')}</th>
                      <th className="px-2 sm:px-4 md:px-6 py-3 sm:py-4 text-left font-bold text-xs sm:text-sm md:text-base">{t('catamaranCharter.planCharter.table.startingPrice')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-neutral-200">
                      <td className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 font-semibold text-neutral-700 text-xs sm:text-sm md:text-base">{t('catamaranCharter.planCharter.table.dayCharter.type')}</td>
                      <td className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-neutral-700 text-xs sm:text-sm md:text-base">{t('catamaranCharter.planCharter.table.dayCharter.duration')}</td>
                      <td className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-neutral-700 text-xs sm:text-sm md:text-base">{t('catamaranCharter.planCharter.table.dayCharter.bestFor')}</td>
                      <td className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-amber-600 font-bold text-xs sm:text-sm md:text-base">{t('catamaranCharter.planCharter.table.dayCharter.price')}</td>
                    </tr>
                    <tr className="bg-neutral-50 border-b border-neutral-200">
                      <td className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 font-semibold text-neutral-700 text-xs sm:text-sm md:text-base">{t('catamaranCharter.planCharter.table.extendedDay.type')}</td>
                      <td className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-neutral-700 text-xs sm:text-sm md:text-base">{t('catamaranCharter.planCharter.table.extendedDay.duration')}</td>
                      <td className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-neutral-700 text-xs sm:text-sm md:text-base">{t('catamaranCharter.planCharter.table.extendedDay.bestFor')}</td>
                      <td className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-amber-600 font-bold text-xs sm:text-sm md:text-base">{t('catamaranCharter.planCharter.table.extendedDay.price')}</td>
                    </tr>
                    <tr className="border-b border-neutral-200">
                      <td className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 font-semibold text-neutral-700 text-xs sm:text-sm md:text-base">{t('catamaranCharter.planCharter.table.overnight.type')}</td>
                      <td className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-neutral-700 text-xs sm:text-sm md:text-base">{t('catamaranCharter.planCharter.table.overnight.duration')}</td>
                      <td className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-neutral-700 text-xs sm:text-sm md:text-base">{t('catamaranCharter.planCharter.table.overnight.bestFor')}</td>
                      <td className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-amber-600 font-bold text-xs sm:text-sm md:text-base">{t('catamaranCharter.planCharter.table.overnight.price')}</td>
                    </tr>
                    <tr className="bg-neutral-50 border-b border-neutral-200">
                      <td className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 font-semibold text-neutral-700 text-xs sm:text-sm md:text-base">{t('catamaranCharter.planCharter.table.multiDay.type')}</td>
                      <td className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-neutral-700 text-xs sm:text-sm md:text-base">{t('catamaranCharter.planCharter.table.multiDay.duration')}</td>
                      <td className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-neutral-700 text-xs sm:text-sm md:text-base">{t('catamaranCharter.planCharter.table.multiDay.bestFor')}</td>
                      <td className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-amber-600 font-bold text-xs sm:text-sm md:text-base">{t('catamaranCharter.planCharter.table.multiDay.price')}</td>
                    </tr>
                    <tr>
                      <td className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 font-semibold text-neutral-700 text-xs sm:text-sm md:text-base">{t('catamaranCharter.planCharter.table.premium.type')}</td>
                      <td className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-neutral-700 text-xs sm:text-sm md:text-base">{t('catamaranCharter.planCharter.table.premium.duration')}</td>
                      <td className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-neutral-700 text-xs sm:text-sm md:text-base">{t('catamaranCharter.planCharter.table.premium.bestFor')}</td>
                      <td className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-amber-600 font-bold text-xs sm:text-sm md:text-base">{t('catamaranCharter.planCharter.table.premium.price')}</td>
                    </tr>
                  </tbody>
                </table>
                  </div>

                  <div className="mt-6 p-6 bg-neutral-50 rounded-lg">
                <p className="text-neutral-700 mb-2">
                  <strong>{t('catamaranCharter.planCharter.includes.title')}</strong> {t('catamaranCharter.planCharter.includes.text')}
                </p>
                <p className="text-neutral-700">
                  <strong>{t('catamaranCharter.planCharter.includes.notIncluded')}</strong> {t('catamaranCharter.planCharter.includes.notIncludedText')}
                </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-5xl mx-auto space-y-8">
              <div className="bg-gradient-to-br from-[#164e63] via-[#0f3a47] to-[#0a2a35] rounded-2xl shadow-lg p-5 sm:p-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  {t('catamaranCharter.planCharter.confidence.title')}
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#14b8a6] flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">{t('catamaranCharter.planCharter.confidence.points.reviews')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#14b8a6] flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">{t('catamaranCharter.planCharter.confidence.points.experience')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#14b8a6] flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">{t('catamaranCharter.planCharter.confidence.points.licensed')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#14b8a6] flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">{t('catamaranCharter.planCharter.confidence.points.award')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#14b8a6] flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">{t('catamaranCharter.planCharter.confidence.points.refund')}</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-neutral-50 to-white rounded-2xl shadow-lg p-5 sm:p-8 border border-neutral-200">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#164e63] mb-4">
                  {t('catamaranCharter.planCharter.specialists.title')}
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  {t('catamaranCharter.planCharter.specialists.text')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQSection */}
        <FAQAccordion
          faqs={faqs}
          title="Frequently Asked Questions – Catamaran Charter Phuket"
          subtitle=""
        />

        <BookingCTA variant="catamaran" />
      </main>
    </>
  )
}
