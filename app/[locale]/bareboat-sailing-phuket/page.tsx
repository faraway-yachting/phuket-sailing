import Image from 'next/image'
import { LocaleLink } from '@/components/shared/LocaleLink'
import { ContactCards } from '@/components/shared/ContactCards'
import { ReviewBadges } from '@/components/shared/ReviewBadges'
import { getTranslations } from '@/lib/i18n/getTranslations'
import {
  ArrowRight, MessageCircle, Anchor, Ship, Waves, Wind, Shield, Check, X, Award,
  MapPin, Calendar, ChevronRight, Compass, Star, Users, Ruler, BedDouble, Home,
} from 'lucide-react'
import { FAQAccordion } from '@/components/shared/FAQAccordion'
import { FeaturedYachts } from '@/components/shared/FeaturedYachts'
import { BareboatFAQSchema } from './faq-schema'

const IMG = '/assets/images/bareboat-sailing'

export default async function BareboatSailingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const { t } = getTranslations(locale)

  const faqKeys = [
    'isPhuketGood', 'bestRoutes', 'bestTime', 'vsMediterranean', 'catamaranAndaman',
    'similan', 'highSeason', 'kingsCup', 'vsCrewed', 'licence', 'cost', 'included',
    'skipperFirstDay', 'badWeather', 'licence2'
  ]
  const faqs = faqKeys.map((key) => ({
    question: t(`bareboatSailing.faq.questions.${key}.q`),
    answer: t(`bareboatSailing.faq.questions.${key}.a`),
  }))

  return (
    <main className="min-h-screen bg-white">
      <BareboatFAQSchema />

      {/* ===== BREADCRUMB ===== */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
            <LocaleLink href="/" className="hover:text-[#14b8a6] transition-colors flex items-center gap-1">
              <Home className="w-3.5 h-3.5" />
              Home
            </LocaleLink>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-[#164e63] font-medium">Bareboat Sailing Phuket</span>
          </nav>
        </div>
      </div>

      {/* ===== HERO SECTION ===== */}
      <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
        <Image
          src={`${IMG}/bareboat-hero.jpg`}
          alt="Bareboat sailing on the Andaman Sea"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/50 via-[#164e63]/15 to-transparent" />

        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16 sm:pt-20">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-5 leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]">
            {t('bareboatSailing.hero.title')}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
            {t('bareboatSailing.hero.description')}
          </p>

          <div className="flex justify-center mb-8 sm:mb-10">
            <LocaleLink
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
              style={{ background: 'linear-gradient(90deg, #A0522D 0%, #FF8C00 100%)' }}
            >
              {t('bareboatSailing.hero.ctaQuote')} <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </LocaleLink>
          </div>

          <ReviewBadges />
        </div>
      </section>

      {/* Contact Cards — after hero */}
      <ContactCards />

      {/* ===== CTA BLOCK 1 + YACHTS ===== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Yachts */}
          <div className="mb-12 sm:mb-16">
            <FeaturedYachts />
          </div>

          <div className="bg-gradient-to-br from-[#164e63] to-[#0f3a47] rounded-2xl p-6 sm:p-10 md:p-14 text-center">
            <h3 className="text-2xl sm:text-3xl md:text-4xl text-white font-semibold mb-4">
              {t('bareboatSailing.ctaBlock.title')}
            </h3>
            <p className="text-base sm:text-lg text-white/80 font-light leading-relaxed mb-6 sm:mb-8 max-w-3xl mx-auto">
              {t('bareboatSailing.ctaBlock.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <LocaleLink
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
                style={{ background: 'linear-gradient(90deg, #A0522D 0%, #FF8C00 100%)' }}
              >
                {t('bareboatSailing.ctaBlock.ctaQuote')} <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </LocaleLink>
              <a
                href="https://wa.me/66612345623"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
                style={{ background: 'linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)' }}
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" /> {t('bareboatSailing.ctaBlock.ctaWhatsApp')} <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY PHUKET ===== */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-14 sm:mb-20">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-[#14b8a6] mb-4">{t('bareboatSailing.whyPhuket.label')}</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight text-balance">
                {t('bareboatSailing.whyPhuket.title')}
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-light">
                {t('bareboatSailing.whyPhuket.description')}
              </p>
            </div>
            <div className="relative flex items-center justify-center py-8 sm:py-12">
              {/* Decorative nautical icons */}
              <Compass className="absolute top-0 left-4 sm:left-8 w-8 h-8 sm:w-10 sm:h-10 text-gray-300 opacity-70" />
              <Ship className="absolute top-0 right-4 sm:right-8 w-8 h-8 sm:w-10 sm:h-10 text-gray-300 opacity-70" />
              <Waves className="absolute bottom-0 left-4 sm:left-8 w-8 h-8 sm:w-10 sm:h-10 text-gray-300 opacity-70" />
              <Anchor className="absolute bottom-0 right-4 sm:right-8 w-8 h-8 sm:w-10 sm:h-10 text-gray-300 opacity-70" />

              {/* Blob-shaped image */}
              <div
                className="relative w-[230px] h-[285px] sm:w-[300px] sm:h-[370px] lg:w-[350px] lg:h-[430px] overflow-hidden shadow-2xl"
                style={{ borderRadius: '60% 40% 40% 60% / 55% 55% 45% 45%' }}
              >
                <Image
                  src={`${IMG}/bareboat-routes.jpg`}
                  alt="Phuket islands aerial view"
                  fill
                  sizes="(max-width: 640px) 220px, (max-width: 1024px) 280px, 320px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { key: 'islands', icon: Anchor },
              { key: 'anchorages', icon: Waves },
              { key: 'realSailing', icon: Wind },
            ].map((item) => (
              <div
                key={item.key}
                className="group p-6 sm:p-8 rounded-2xl border border-gray-100 bg-gradient-to-b from-gray-50/50 to-white hover:border-[#14b8a6]/30 hover:shadow-xl hover:shadow-[#14b8a6]/5 transition-all duration-500"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-5 sm:mb-6" style={{ background: 'linear-gradient(to bottom right, #14b8a6, #0d9488)' }}>
                  <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4 leading-snug">{t(`bareboatSailing.whyPhuket.cards.${item.key}.title`)}</h3>
                <p className="text-gray-600 font-light leading-relaxed text-sm sm:text-[15px]">{t(`bareboatSailing.whyPhuket.cards.${item.key}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SAILING ROUTES BY DURATION ===== */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-[#14b8a6] mb-4">{t('bareboatSailing.routes.label')}</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-balance">
            {t('bareboatSailing.routes.title')}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-12 sm:mb-16 font-light max-w-2xl">
            {t('bareboatSailing.routes.subtitle')}
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { key: 'short', image: `${IMG}/bareboat-phangnga.jpg`, duration: '2–3 Nights' },
              { key: 'medium', image: `${IMG}/bareboat-phiphi.jpg`, duration: '4–6 Nights' },
              { key: 'long', image: `${IMG}/bareboat-similan.jpg`, duration: '7+ Nights' },
            ].map((route) => (
              <div key={route.key} className="group rounded-2xl overflow-hidden bg-white border border-gray-100 hover:shadow-2xl hover:shadow-gray-200/60 transition-all duration-500">
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <Image
                    src={route.image}
                    alt={t(`bareboatSailing.routes.items.${route.key}.title`)}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider uppercase text-white rounded-full" style={{ background: 'linear-gradient(90deg, #A0522D 0%, #FF8C00 100%)' }}>
                      {route.duration}
                    </span>
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">{t(`bareboatSailing.routes.items.${route.key}.title`)}</h3>
                  <p className="text-gray-600 font-light leading-relaxed text-sm sm:text-base">{t(`bareboatSailing.routes.items.${route.key}.desc`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SAILING CONDITIONS ===== */}
      <section className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14 sm:mb-20">
            <p className="text-xs tracking-[0.3em] uppercase text-[#14b8a6] mb-4">{t('bareboatSailing.conditions.label')}</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight text-balance max-w-4xl mx-auto">
              {t('bareboatSailing.conditions.title')}
            </h2>
            <div className="w-24 h-[2px] mx-auto mt-8" style={{ background: 'linear-gradient(90deg, #A0522D 0%, #FF8C00 100%)' }} />
          </div>

          {/* High Season */}
          <div className="grid lg:grid-cols-2 gap-0 mb-8 sm:mb-10 rounded-3xl overflow-hidden border border-gray-100 shadow-lg shadow-gray-100/80">
            <div className="relative h-64 sm:h-80 lg:h-auto min-h-[300px] lg:min-h-[360px]">
              <Image src={`${IMG}/bareboat-highseason.jpg`} alt="High season sailing" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
              <div className="absolute top-6 left-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wider uppercase text-white rounded-full backdrop-blur-md bg-[#14b8a6]/80">
                  <Calendar className="w-3.5 h-3.5" />
                  {t('bareboatSailing.conditions.high.months')}
                </span>
              </div>
            </div>
            <div className="p-6 sm:p-10 lg:p-14 flex flex-col justify-center bg-gradient-to-br from-white to-gray-50/50">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center mb-5 sm:mb-6" style={{ background: 'linear-gradient(to bottom right, #14b8a6, #0d9488)' }}>
                <Calendar className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-5 leading-snug">
                {t('bareboatSailing.conditions.high.title')}
              </h3>
              <p className="text-gray-600 font-light leading-relaxed text-sm sm:text-base">
                {t('bareboatSailing.conditions.high.desc')}
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3 mt-6 sm:mt-8">
                {['Clear Skies', 'Steady Winds 10-20kt', 'Calm Seas', 'Peak Season'].map((tag) => (
                  <span key={tag} className="px-3 sm:px-4 py-1 sm:py-1.5 text-xs font-medium tracking-wide rounded-full border border-[#14b8a6]/20 text-[#0d9488] bg-[#14b8a6]/5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Low Season */}
          <div className="grid lg:grid-cols-2 gap-0 mb-8 sm:mb-10 rounded-3xl overflow-hidden border border-gray-100 shadow-lg shadow-gray-100/80">
            <div className="p-6 sm:p-10 lg:p-14 flex flex-col justify-center bg-gradient-to-br from-white to-gray-50/50 order-2 lg:order-1">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center mb-5 sm:mb-6" style={{ background: 'linear-gradient(to bottom right, #164e63, #0f3a47)' }}>
                <Wind className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-5 leading-snug">
                {t('bareboatSailing.conditions.low.title')}
              </h3>
              <p className="text-gray-600 font-light leading-relaxed text-sm sm:text-base">
                {t('bareboatSailing.conditions.low.desc')}
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3 mt-6 sm:mt-8">
                {['Stronger Winds 15-25kt', 'Empty Anchorages', 'Reduced Rates', 'Adventure Sailing'].map((tag) => (
                  <span key={tag} className="px-3 sm:px-4 py-1 sm:py-1.5 text-xs font-medium tracking-wide rounded-full border border-[#164e63]/20 text-[#164e63] bg-[#164e63]/5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative h-64 sm:h-80 lg:h-auto min-h-[300px] lg:min-h-[360px] order-1 lg:order-2">
              <Image src={`${IMG}/bareboat-lowseason.jpg`} alt="Low season sailing" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
              <div className="absolute top-6 left-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wider uppercase text-white rounded-full backdrop-blur-md bg-[#164e63]/80">
                  <Wind className="w-3.5 h-3.5" />
                  {t('bareboatSailing.conditions.low.months')}
                </span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="relative rounded-3xl overflow-hidden border border-gray-100 shadow-lg shadow-gray-100/80">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-56 sm:h-72 lg:h-auto min-h-[280px] lg:min-h-[320px]">
                <Image src={`${IMG}/bareboat-navigation.jpg`} alt="Navigation and passage planning" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                <div className="absolute top-6 left-6">
                  <span className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wider uppercase text-white rounded-full backdrop-blur-md bg-[#FF8C00]/80">
                    <Compass className="w-3.5 h-3.5" />
                    {t('bareboatSailing.conditions.navigation.badge')}
                  </span>
                </div>
              </div>
              <div className="p-6 sm:p-10 lg:p-14 flex flex-col justify-center bg-gradient-to-br from-white to-gray-50/50">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center mb-5 sm:mb-6" style={{ background: 'linear-gradient(90deg, #A0522D 0%, #FF8C00 100%)' }}>
                  <Compass className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-5 leading-snug">
                  {t('bareboatSailing.conditions.navigation.title')}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed text-sm sm:text-base">
                  {t('bareboatSailing.conditions.navigation.desc')}
                </p>
                <div className="flex flex-wrap gap-2 sm:gap-3 mt-6 sm:mt-8">
                  {['Tidal Channels', 'Current Charts', 'Local Knowledge', 'Pre-Departure Briefing'].map((tag) => (
                    <span key={tag} className="px-3 sm:px-4 py-1 sm:py-1.5 text-xs font-medium tracking-wide rounded-full border border-[#FF8C00]/20 text-[#A0522D] bg-[#FF8C00]/5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Cards — mid page */}
      <ContactCards />

      {/* ===== CATAMARAN VS MONOHULL ===== */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-[#14b8a6] mb-4">{t('bareboatSailing.vesselComparison.label')}</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-balance">
              {t('bareboatSailing.vesselComparison.title')}
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 mb-12 sm:mb-16">
            {/* Catamaran */}
            <div className="rounded-2xl overflow-hidden bg-white border border-gray-100 hover:shadow-xl transition-all duration-500">
              <div className="relative h-56 sm:h-72">
                <Image src={`${IMG}/bareboat-fleet.jpg`} alt="Catamaran sailing Phuket" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <span className="inline-flex items-center gap-2 text-white">
                    <Ship className="w-5 h-5 sm:w-6 sm:h-6" />
                    <span className="text-xl sm:text-2xl font-bold">{t('bareboatSailing.vesselComparison.catamaran.name')}</span>
                  </span>
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">{t('bareboatSailing.vesselComparison.catamaran.title')}</h3>
                <p className="text-gray-600 font-light leading-relaxed text-sm sm:text-base">{t('bareboatSailing.vesselComparison.catamaran.desc')}</p>
              </div>
            </div>
            {/* Monohull */}
            <div className="rounded-2xl overflow-hidden bg-white border border-gray-100 hover:shadow-xl transition-all duration-500">
              <div className="relative h-56 sm:h-72">
                <Image src={`${IMG}/bareboat-monohull.jpg`} alt="Monohull sailing Phuket" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <span className="inline-flex items-center gap-2 text-white">
                    <Anchor className="w-5 h-5 sm:w-6 sm:h-6" />
                    <span className="text-xl sm:text-2xl font-bold">{t('bareboatSailing.vesselComparison.monohull.name')}</span>
                  </span>
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">{t('bareboatSailing.vesselComparison.monohull.title')}</h3>
                <p className="text-gray-600 font-light leading-relaxed text-sm sm:text-base">{t('bareboatSailing.vesselComparison.monohull.desc')}</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-6 sm:p-8 md:p-10">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6">{t('bareboatSailing.vesselComparison.whichHull.title')}</h3>
            <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
              <div className="space-y-3">
                <h4 className="text-sm uppercase tracking-wider text-[#14b8a6] font-semibold">{t('bareboatSailing.vesselComparison.catamaran.name')}</h4>
                <p className="text-gray-600 font-light leading-relaxed text-sm">{t('bareboatSailing.vesselComparison.whichHull.catamaran')}</p>
              </div>
              <div className="space-y-3">
                <h4 className="text-sm uppercase tracking-wider text-[#FF8C00] font-semibold">{t('bareboatSailing.vesselComparison.monohull.name')}</h4>
                <p className="text-gray-600 font-light leading-relaxed text-sm">{t('bareboatSailing.vesselComparison.whichHull.monohull')}</p>
              </div>
              <div className="space-y-3">
                <h4 className="text-sm uppercase tracking-wider text-gray-900 font-semibold">{t('bareboatSailing.vesselComparison.whichHull.choiceLabel')}</h4>
                <p className="text-gray-600 font-light leading-relaxed text-sm">{t('bareboatSailing.vesselComparison.whichHull.choiceDesc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FLEET SECTION ===== */}
      <section
        className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{ background: 'linear-gradient(to bottom right, #164e63, #0f3a47, #0a2a35)' }}
      >
        <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.08) 0%, transparent 50%)'}} />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-8">
            <p className="text-xs tracking-[0.3em] uppercase text-[#FF8C00] mb-4">{t('bareboatSailing.fleet.label')}</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
              {t('bareboatSailing.fleet.title')}
            </h2>
            <div className="w-24 h-[2px] mx-auto" style={{ background: 'linear-gradient(90deg, #A0522D 0%, #FF8C00 100%)' }} />
          </div>

          {/* Fleet hero image */}
          <div className="relative h-[280px] sm:h-[350px] lg:h-[420px] rounded-3xl overflow-hidden mb-14 sm:mb-20 shadow-2xl shadow-black/30">
            <Image src={`${IMG}/bareboat-fleet.jpg`} alt="Bareboat fleet in Phuket" fill sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a2a35]/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 right-6 sm:right-8">
              <p className="text-white/80 font-light text-base sm:text-lg max-w-2xl">
                {t('bareboatSailing.fleet.heroCaption')}
              </p>
            </div>
          </div>

          {/* Catamarans */}
          <div className="mb-14 sm:mb-20">
            <div className="flex items-center gap-3 sm:gap-4 mb-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(to bottom right, #14b8a6, #0d9488)' }}>
                <Ship className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                {t('bareboatSailing.fleet.catamarans.heading')}
              </h3>
            </div>
            <p className="text-white/50 font-light text-base sm:text-lg mb-3 sm:mb-4 ml-[52px] sm:ml-16">
              {t('bareboatSailing.fleet.catamarans.models')}
            </p>
            <p className="text-white/60 font-light mb-10 sm:mb-12 max-w-3xl text-sm sm:text-base">
              {t('bareboatSailing.fleet.catamarans.desc')}
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              {[
                { name: 'Lagoon 42', year: '2018', specs: '4 cabins, 4 bathrooms', price: '€4,790', image: `${IMG}/bareboat-lagoon42.jpg`, length: '12.8m', guests: '8-10' },
                { name: 'Lagoon 45', year: '2014', specs: '6 cabins, 4 bathrooms', price: '€4,235', image: `${IMG}/bareboat-lagoon45.jpg`, length: '13.9m', guests: '10-12' },
                { name: 'Fountaine Pajot 47', year: '', specs: '5 cabins, 5 bathrooms', price: '€4,760', image: `${IMG}/bareboat-fp47.jpg`, length: '14.3m', guests: '10-12' },
              ].map((yacht, idx) => (
                <div key={idx} className="group rounded-2xl overflow-hidden bg-white/[0.04] backdrop-blur-sm border border-white/10 hover:border-white/25 hover:bg-white/[0.08] transition-all duration-500">
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <Image src={yacht.image} alt={yacht.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a2a35]/70 to-transparent" />
                    <div className="absolute bottom-4 left-5">
                      <h4 className="text-lg sm:text-xl font-bold text-white">{yacht.name}</h4>
                      {yacht.year && <p className="text-white/50 text-sm">{yacht.year}</p>}
                    </div>
                  </div>
                  <div className="p-5 sm:p-6">
                    <div className="flex items-center gap-4 mb-4 sm:mb-5 text-white/50 text-sm">
                      <span className="flex items-center gap-1.5"><BedDouble className="w-4 h-4" /> {yacht.specs}</span>
                    </div>
                    <div className="flex items-center gap-4 mb-4 sm:mb-5 text-white/50 text-sm">
                      <span className="flex items-center gap-1.5"><Ruler className="w-4 h-4" /> {yacht.length}</span>
                      <span className="flex items-center gap-1.5"><Users className="w-4 h-4" /> {yacht.guests} {t('bareboatSailing.fleet.guests')}</span>
                    </div>
                    <div className="flex items-center justify-between pt-4 sm:pt-5 border-t border-white/10">
                      <div>
                        <p className="text-white/40 text-xs uppercase tracking-wider mb-1">{t('bareboatSailing.fleet.from')}</p>
                        <p className="text-xl sm:text-2xl font-bold text-[#FF8C00]">{yacht.price}<span className="text-sm font-normal text-white/40">/{t('bareboatSailing.fleet.week')}</span></p>
                      </div>
                      <LocaleLink href="/contact" className="inline-flex items-center gap-1 text-xs font-medium px-3 sm:px-4 py-2 rounded-full text-white" style={{ background: 'linear-gradient(90deg, #A0522D 0%, #FF8C00 100%)' }}>
                        {t('bareboatSailing.fleet.viewDetails')} <ChevronRight className="w-3 h-3" />
                      </LocaleLink>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Monohulls */}
          <div className="mb-14 sm:mb-20">
            <div className="flex items-center gap-3 sm:gap-4 mb-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(90deg, #A0522D 0%, #FF8C00 100%)' }}>
                <Anchor className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                {t('bareboatSailing.fleet.monohulls.heading')}
              </h3>
            </div>
            <p className="text-white/50 font-light text-base sm:text-lg mb-3 sm:mb-4 ml-[52px] sm:ml-16">
              {t('bareboatSailing.fleet.monohulls.models')}
            </p>
            <p className="text-white/60 font-light mb-10 sm:mb-12 max-w-3xl text-sm sm:text-base">
              {t('bareboatSailing.fleet.monohulls.desc')}
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              {[
                { name: 'Bavaria 33 Cruiser', year: '', specs: '2 cabins, 1 bathroom', price: '€1,770', image: `${IMG}/bareboat-monohull.jpg`, length: '10.4m', guests: '4-6' },
                { name: 'Bavaria 39', year: '', specs: '3 cabins, 2 bathrooms', price: '€1,930', image: `${IMG}/bareboat-sailing-action.jpg`, length: '12.0m', guests: '6-8' },
                { name: 'Bavaria 45 Holiday', year: '', specs: '4 cabins, 3 bathrooms', price: '€2,980', image: `${IMG}/bareboat-deck.jpg`, length: '13.9m', guests: '8-10' },
              ].map((yacht, idx) => (
                <div key={idx} className="group rounded-2xl overflow-hidden bg-white/[0.04] backdrop-blur-sm border border-white/10 hover:border-white/25 hover:bg-white/[0.08] transition-all duration-500">
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <Image src={yacht.image} alt={yacht.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a2a35]/70 to-transparent" />
                    <div className="absolute bottom-4 left-5">
                      <h4 className="text-lg sm:text-xl font-bold text-white">{yacht.name}</h4>
                      {yacht.year && <p className="text-white/50 text-sm">{yacht.year}</p>}
                    </div>
                  </div>
                  <div className="p-5 sm:p-6">
                    <div className="flex items-center gap-4 mb-4 sm:mb-5 text-white/50 text-sm">
                      <span className="flex items-center gap-1.5"><BedDouble className="w-4 h-4" /> {yacht.specs}</span>
                    </div>
                    <div className="flex items-center gap-4 mb-4 sm:mb-5 text-white/50 text-sm">
                      <span className="flex items-center gap-1.5"><Ruler className="w-4 h-4" /> {yacht.length}</span>
                      <span className="flex items-center gap-1.5"><Users className="w-4 h-4" /> {yacht.guests} {t('bareboatSailing.fleet.guests')}</span>
                    </div>
                    <div className="flex items-center justify-between pt-4 sm:pt-5 border-t border-white/10">
                      <div>
                        <p className="text-white/40 text-xs uppercase tracking-wider mb-1">{t('bareboatSailing.fleet.from')}</p>
                        <p className="text-xl sm:text-2xl font-bold text-[#14b8a6]">{yacht.price}<span className="text-sm font-normal text-white/40">/{t('bareboatSailing.fleet.week')}</span></p>
                      </div>
                      <LocaleLink href="/contact" className="inline-flex items-center gap-1 text-xs font-medium px-3 sm:px-4 py-2 rounded-full text-white" style={{ background: 'linear-gradient(to right, #14b8a6, #0d9488)' }}>
                        {t('bareboatSailing.fleet.viewDetails')} <ChevronRight className="w-3 h-3" />
                      </LocaleLink>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Choosing your yacht */}
          <div className="rounded-3xl overflow-hidden border border-white/10">
            <div className="grid lg:grid-cols-5 gap-0">
              <div className="lg:col-span-2 relative min-h-[250px] sm:min-h-[300px]">
                <Image src={`${IMG}/bareboat-deck.jpg`} alt="Luxury yacht deck" fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0a2a35]/60 hidden lg:block" />
              </div>
              <div className="lg:col-span-3 p-6 sm:p-10 lg:p-14 bg-white/[0.04] backdrop-blur-sm">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4">{t('bareboatSailing.fleet.choosing.title')}</h3>
                <p className="text-white/60 font-light mb-6 sm:mb-8 text-sm sm:text-base">{t('bareboatSailing.fleet.choosing.subtitle')}</p>
                <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
                  {['groupSize', 'sailingStyle', 'budget'].map((key) => (
                    <div key={key} className="flex gap-3 sm:gap-4">
                      <Check className="w-5 h-5 text-[#14b8a6] flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-white font-semibold mb-1 text-sm sm:text-base">{t(`bareboatSailing.fleet.choosing.${key}.label`)}</h4>
                        <p className="text-white/50 font-light text-xs sm:text-sm leading-relaxed">{t(`bareboatSailing.fleet.choosing.${key}.desc`)}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-[#FF8C00] mt-8 sm:mt-10 font-medium text-base sm:text-lg">{t('bareboatSailing.fleet.choosing.cta')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHAT'S INCLUDED ===== */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-[#14b8a6] mb-4">{t('bareboatSailing.included.label')}</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-balance">
              {t('bareboatSailing.included.title')}
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-12 sm:mb-16">
            <div className="relative h-[300px] sm:h-[400px] lg:h-[450px] rounded-2xl overflow-hidden">
              <Image src={`${IMG}/bareboat-sailing-action.jpg`} alt="Yacht deck amenities" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
            <div className="space-y-8 sm:space-y-10">
              {[
                { key: 'whatsIncluded', icon: Check, color: 'emerald' },
                { key: 'whatsExtra', icon: X, color: 'red' },
                { key: 'addOns', icon: Award, color: 'amber' },
              ].map((item) => (
                <div key={item.key}>
                  <div className="flex items-center gap-3 mb-4 sm:mb-5">
                    <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center bg-${item.color}-50`}>
                      <item.icon className={`w-4 h-4 sm:w-5 sm:h-5 text-${item.color}-${item.color === 'red' ? '500' : '600'}`} />
                    </div>
                    <h3 className="text-lg sm:text-2xl font-semibold text-gray-900">{t(`bareboatSailing.included.${item.key}.title`)}</h3>
                  </div>
                  <p className="text-gray-600 font-light leading-relaxed text-sm sm:text-base">
                    {t(`bareboatSailing.included.${item.key}.desc`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== LICENSING, PRICING & BOOKING ===== */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-[#14b8a6] mb-4">{t('bareboatSailing.booking.label')}</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-12 sm:mb-16 text-balance">
            {t('bareboatSailing.booking.title')}
          </h2>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 mb-14 sm:mb-20">
            {/* Pricing */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">{t('bareboatSailing.booking.pricing.title')}</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">{t('bareboatSailing.booking.pricing.subtitle')}</p>
              <div className="space-y-3 sm:space-y-4">
                {[
                  { vessel: 'Bavaria Monohulls', price: 'From €1,610/week' },
                  { vessel: 'Lagoon 42', price: 'From €4,790/week' },
                  { vessel: 'Fountaine Pajot 47', price: 'From €4,760/week' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 sm:p-5 rounded-xl bg-white border border-gray-100">
                    <span className="text-gray-700 font-light text-sm sm:text-base">{item.vessel}</span>
                    <span className="text-lg sm:text-xl font-bold text-gray-900">{item.price}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs sm:text-sm text-gray-500 mt-4 font-light">
                {t('bareboatSailing.booking.pricing.note')}
              </p>
            </div>

            {/* Licence */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">{t('bareboatSailing.booking.licence.title')}</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-5 sm:mb-6 text-sm sm:text-base">{t('bareboatSailing.booking.licence.desc')}</p>
              <div className="space-y-3">
                {['req1', 'req2', 'req3', 'req4'].map((key) => (
                  <div key={key} className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-[#14b8a6] flex-shrink-0" />
                    <span className="text-gray-700 font-light text-sm sm:text-base">{t(`bareboatSailing.booking.licence.${key}`)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Steps */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">{t('bareboatSailing.booking.steps.title')}</h3>
            <p className="text-gray-600 font-light mb-8 sm:mb-10 text-sm sm:text-base">{t('bareboatSailing.booking.steps.subtitle')}</p>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {['step1', 'step2', 'step3', 'step4'].map((key, idx) => (
                <div key={key} className="relative p-6 sm:p-8 rounded-2xl bg-white border border-gray-100 text-center group hover:border-[#14b8a6]/30 hover:shadow-lg transition-all duration-300">
                  <div
                    className="text-4xl sm:text-5xl font-bold mb-3 sm:mb-4 bg-clip-text text-transparent"
                    style={{ backgroundImage: 'linear-gradient(90deg, #A0522D 0%, #FF8C00 100%)' }}
                  >
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">{t(`bareboatSailing.booking.steps.${key}.title`)}</h4>
                  <p className="text-gray-600 font-light text-xs sm:text-sm">{t(`bareboatSailing.booking.steps.${key}.desc`)}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 sm:mt-10">
              <LocaleLink
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
                style={{ background: 'linear-gradient(90deg, #A0522D 0%, #FF8C00 100%)' }}
              >
                {t('bareboatSailing.booking.ctaQuote')} <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </LocaleLink>
              <a
                href="https://wa.me/66612345623"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
                style={{ background: 'linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)' }}
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" /> WhatsApp: +66 61 234 5623
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <FAQAccordion
        faqs={faqs}
        title="Frequently Asked Questions – Bareboat Sailing Phuket"
        id="faq"
      />

      {/* ===== FINAL CTA ===== */}
      <section className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <Image
          src={`${IMG}/bareboat-sunset.jpg`}
          alt="Sunset sailing in Phuket"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/90 via-[#0a1628]/60 to-[#0a1628]/40" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-[#FF8C00] mb-4 sm:mb-6">{t('bareboatSailing.finalCta.label')}</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 text-balance">
            {t('bareboatSailing.finalCta.title')}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/80 mb-8 sm:mb-12 font-light leading-relaxed max-w-2xl mx-auto">
            {t('bareboatSailing.finalCta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <LocaleLink
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
              style={{ background: 'linear-gradient(90deg, #A0522D 0%, #FF8C00 100%)' }}
            >
              {t('bareboatSailing.finalCta.ctaQuote')} <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </LocaleLink>
            <a
              href="https://wa.me/66612345623"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-xl border-2 border-white/30 hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" /> {t('bareboatSailing.finalCta.ctaWhatsApp')} <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <ContactCards />
    </main>
  )
}
