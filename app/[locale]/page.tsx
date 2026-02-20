import React from 'react'
import Image from 'next/image'
import { LocaleLink } from '@/components/shared/LocaleLink'
import { CTAButton } from '@/components/shared/CTAButton'
import { ContactCards } from '@/components/shared/ContactCards'
import { ReviewBadges } from '@/components/shared/ReviewBadges'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { MessageCircle } from 'lucide-react'
import { FAQAccordion } from '@/components/shared/FAQAccordion'
import { BookingCTA } from '@/components/shared/BookingCTA'
import { FeaturedYachts } from '@/components/shared/FeaturedYachts'
import { HomeFAQSchema } from './faq-schema'
import { getTranslations } from '@/lib/i18n/getTranslations'
import { HomeJumpLinks } from './HomeJumpLinks'
import { HomePopularRoutes } from './HomePopularRoutes'

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const { t } = getTranslations(locale)

  const jumpLinks = [
    { href: '#charter-style', label: t('nav.charterStyles'), icon: 'Anchor' },
    { href: '#sailing-phuket', label: t('nav.sailingPhuket'), icon: 'Sailboat' },
    { href: '#overnight', label: t('nav.overnightTrips'), icon: 'Moon' },
    { href: '#catamaran-vs-sailing', label: t('nav.catamaranVsSailing'), icon: 'Ship' },
    { href: '#routes', label: t('nav.routes'), icon: 'MapPin' },
    { href: '#included', label: t('nav.included'), icon: 'CheckCircle' },
    { href: '#pricing', label: t('nav.pricing'), icon: 'CreditCard' },
    { href: '#booking', label: t('nav.booking'), icon: 'Calendar' },
    { href: '#faqs', label: t('nav.faq'), icon: 'HelpCircle' },
  ]

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
      image: '/assets/images/home/sailing-catamaran.png',
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
      image: '/assets/images/home/SY-cabin.png',
    },
    {
      title: t('charterStyles.bareboat.title'),
      description: t('charterStyles.bareboat.description'),
      link: '/bareboat-charter-phuket',
      linkText: t('charterStyles.bareboat.linkText'),
      image: '/assets/images/home/day-sailing.webp',
    },
  ]

  const tripTypes = [
    { title: t('tripType.day.title'), description: t('tripType.day.description'), image: '/assets/images/home/day-sailing1.jpg' },
    { title: t('tripType.sunset.title'), description: t('tripType.sunset.description'), image: '/assets/images/home/Sunset-sailing.jpg' },
    { title: t('tripType.overnight.title'), description: t('tripType.overnight.description'), image: '/assets/images/home/overnight-sailing2.jpg' },
  ]

  const routes = [
    { title: t('popularRoutes.racha.title'), description: t('popularRoutes.racha.description'), image: '/assets/images/home/racha-island.jpg' },
    { title: t('popularRoutes.coral.title'), description: t('popularRoutes.coral.description'), image: '/assets/images/home/coral-island.webp' },
    { title: t('popularRoutes.phangNga.title'), description: t('popularRoutes.phangNga.description'), image: '/assets/images/home/phang-nga-bay.jpg' },
    { title: t('popularRoutes.kohRokHa.title'), description: t('popularRoutes.kohRokHa.description'), image: '/assets/images/home/koh-rok-koh-ha.jpg' },
  ]

  const audiences = [
    { title: t('whoItsFor.families.title'), description: t('whoItsFor.families.description'), image: '/assets/images/home/family.jpeg' },
    { title: t('whoItsFor.couples.title'), description: t('whoItsFor.couples.description'), image: '/assets/images/home/couple.jpg' },
    { title: t('whoItsFor.corporate.title'), description: t('whoItsFor.corporate.description'), image: '/assets/images/home/corporate.jpg' },
    { title: t('whoItsFor.adventure.title'), description: t('whoItsFor.adventure.description'), image: '/assets/images/home/au6lybsyxqznyrp0816h.jpg' },
    { title: t('whoItsFor.solo.title'), description: t('whoItsFor.solo.description'), image: '/assets/images/home/yacht-guests-hero.jpg' },
    { title: t('whoItsFor.occasions.title'), description: t('whoItsFor.occasions.description'), image: '/assets/images/home/occasion.jpeg' },
  ]

  const bookingSteps = [
    { number: 1, title: t('bookingProcess.step1.title'), description: t('bookingProcess.step1.description') },
    { number: 2, title: t('bookingProcess.step2.title'), description: t('bookingProcess.step2.description') },
    { number: 3, title: t('bookingProcess.step3.title'), description: t('bookingProcess.step3.description') },
    { number: 4, title: t('bookingProcess.step4.title'), description: t('bookingProcess.step4.description') },
  ]

  const faqs = [
    { question: t('faq.bestTime.question'), answer: t('faq.bestTime.answer') },
    { question: t('faq.catamaranVsSailing.question'), answer: t('faq.catamaranVsSailing.answer') },
    { question: t('faq.recommendedNights.question'), answer: t('faq.recommendedNights.answer') },
    { question: t('faq.familyFriendly.question'), answer: t('faq.familyFriendly.answer') },
    { question: t('faq.romantic.question'), answer: t('faq.romantic.answer') },
    { question: t('faq.soloTravelers.question'), answer: t('faq.soloTravelers.answer') },
    { question: t('faq.whatsIncluded.question'), answer: t('faq.whatsIncluded.answer') },
    { question: t('faq.bareboatLicense.question'), answer: t('faq.bareboatLicense.answer') },
    { question: t('faq.chooseItinerary.question'), answer: t('faq.chooseItinerary.answer') },
  ]

  const explorePages = [
    t('explorePages.sailingYachts'),
    t('explorePages.catamaranCharters'),
    t('explorePages.sailingItineraries'),
    t('explorePages.cabinCruises'),
    t('explorePages.bareboatCharter'),
  ]

  return (
    <main className="min-h-screen">
      <HomeFAQSchema />

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/home/hero2.png"
            alt="Sailing in Phuket"
            fill
            sizes="100vw"
            className="object-cover"
            priority
            quality={100}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#164e63]/60 via-[#164e63]/40 to-[#164e63]/60 z-[1]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 sm:py-20 md:py-24 flex justify-center">
          <div className="max-w-3xl text-center">
            <h1 className="font-[family-name:var(--font-playfair)] text-white mb-4 sm:mb-6 leading-[1.2] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold" style={{ textShadow: '3px 3px 12px rgba(0, 0, 0, 0.8), 0 0 30px rgba(0, 0, 0, 0.6)' }}>
              {t('hero.title')}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-white leading-relaxed font-medium max-w-3xl mx-auto" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8), 0 0 15px rgba(0, 0, 0, 0.6)' }}>
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
            <ReviewBadges />
          </div>
        </div>
      </section>

      {/* Jump Links */}
      <HomeJumpLinks links={jumpLinks} />

      {/* Contact Cards */}
      <section className="bg-white py-6 sm:py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactCards />
        </div>
      </section>

      <FeaturedYachts />

      {/* Charter Styles Section */}
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
              <div key={index} className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="grid md:grid-cols-5 gap-0">
                  <div className="relative h-64 md:h-auto md:col-span-2 overflow-hidden">
                    <Image src={charter.image} alt={charter.title} fill sizes="(max-width: 768px) 100vw, 40vw" className="object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#0a2a35]/20"></div>
                    <svg className="absolute bottom-0 right-0 w-full h-32 md:h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                      <polygon points="100,0 100,100 85,100" fill="#0a2a35" opacity="0.85" />
                    </svg>
                  </div>
                  <div className="md:col-span-3 bg-white p-6 sm:p-8 md:p-10 flex flex-col justify-center relative">
                    <div className="absolute left-0 top-0 bottom-0 w-8 md:w-12 bg-gradient-to-r from-[#0a2a35] to-transparent opacity-60"></div>
                    <div className="relative z-10">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#164e63] mb-3 sm:mb-4">{charter.title}</h3>
                      <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">{charter.description}</p>
                      <a href={charter.link} className="inline-flex items-center justify-center bg-gradient-to-r from-[#14b8a6] to-[#0d9488] hover:from-[#0d9488] hover:to-[#0a7a6a] text-white font-bold px-6 py-3 rounded-xl text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 w-fit">
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
              <p className="text-white/80 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed">{t('charterStyles.notSure.description')}</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <LocaleLink href="/contact" className="inline-flex items-center justify-center px-8 sm:px-10 md:px-12 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold text-white bg-amber-gradient rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 whitespace-nowrap">
                  {t('charterStyles.notSure.getQuote')}
                </LocaleLink>
                <button className="inline-flex items-center justify-center px-8 sm:px-10 md:px-12 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold text-white bg-green-600 rounded-xl hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 whitespace-nowrap">
                  <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  {t('charterStyles.notSure.whatsapp')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sailing Phuket Section */}
      <section id="sailing-phuket" className="py-10 sm:py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            <div className="relative h-[280px] sm:h-[380px] md:h-[450px] lg:h-[550px]">
              <div className="absolute left-0 top-[10%] w-[58%] h-[85%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white z-10">
                <Image src="/assets/images/home/phuket1.jpg" alt="Phuket tropical waters" fill sizes="(max-width: 1024px) 58vw, 29vw" className="object-cover" />
              </div>
              <div className="absolute right-0 top-0 w-[48%] h-[42%] rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <Image src="/assets/images/home/phuket2.jpg" alt="Phuket limestone caves" fill sizes="(max-width: 1024px) 48vw, 24vw" className="object-cover" />
              </div>
              <div className="absolute right-0 bottom-0 w-[48%] h-[52%] rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <Image src="/assets/images/home/phuket3.jpg" alt="Phuket James Bond Island" fill sizes="(max-width: 1024px) 48vw, 24vw" className="object-cover" />
              </div>
            </div>
            <div className="w-full">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#164e63] mb-4 sm:mb-6">{t('sailingPhuket.title')}</h2>
              <p className="text-sm sm:text-base md:text-lg text-neutral-700 leading-relaxed mb-6 sm:mb-8">{t('sailingPhuket.description')}</p>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#164e63] mb-4 sm:mb-6">{t('sailingPhuket.whySpecial')}</h3>
              <ul className="space-y-3 sm:space-y-4">
                {['warmWater', 'routes', 'groups', 'trips'].map(k => (
                  <li key={k} className="flex items-start gap-2 sm:gap-3">
                    <span className="text-[#ca8a44] text-xl sm:text-2xl mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-neutral-700 text-sm sm:text-base md:text-lg leading-relaxed">{t(`sailingPhuket.${k}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="bg-white py-6 sm:py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactCards />
        </div>
      </section>

      {/* What Trip Type Section */}
      <section className="py-10 sm:py-14 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#164e63] text-center mb-3 sm:mb-4">{t('tripType.title')}</h2>
          <p className="text-center text-neutral-600 mb-6 sm:mb-8 text-base sm:text-lg">{t('tripType.subtitle')}</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {tripTypes.map((type, index) => (
              <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="relative h-64 sm:h-72 overflow-hidden">
                  <Image src={type.image} alt={type.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 right-4">
                    <button className="bg-amber-gradient text-white px-6 py-2.5 rounded-full font-semibold text-sm shadow-lg transition-all duration-300 transform hover:scale-105">{t('tripType.explore')}</button>
                  </div>
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#164e63] mb-3">{type.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{type.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overnight Sailing Section */}
      <section id="overnight" className="py-10 sm:py-14 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#164e63] mb-6">{t('overnightSailing.title')}</h2>
              <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">{t('overnightSailing.description')}</p>
              <h3 className="text-xl sm:text-2xl font-bold text-[#164e63] mb-6">{t('overnightSailing.whyDifferent')}</h3>
              <ul className="space-y-3 sm:space-y-4">
                {['noRush', 'calmBays', 'sunsetSunrise', 'bestIslands', 'timeForActivities'].map(k => (
                  <li key={k} className="flex items-start gap-3">
                    <span className="text-[#ca8a44] text-xl mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-gray-700 text-base sm:text-lg">{t(`overnightSailing.${k}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Image src="/assets/images/home/overnight-sailing.webp" alt="Overnight Sailing Catamaran" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#164e63]/20 to-transparent"></div>
              </div>
              <div className="hidden sm:block absolute -top-6 -right-6 md:-top-10 md:-right-10 w-40 h-40 md:w-52 md:h-52 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-2xl border-4 sm:border-6 border-white">
                <Image src="/assets/images/home/party.jpg" alt="Guests enjoying yacht experience" fill sizes="256px" className="object-cover" />
              </div>
              <div className="hidden sm:block absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 w-40 h-40 md:w-52 md:h-52 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-2xl border-4 sm:border-6 border-white">
                <Image src="/assets/images/home/couple2.jpg" alt="Couple on overnight sailing trip" fill sizes="256px" className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overnight Recommendation Section */}
      <section className="py-10 sm:py-14 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0">
              <Image src="/assets/images/home/catamaran-aerial-hero.jpg" alt="Aerial view of catamarans" fill sizes="100vw" className="object-cover blur-[2px] scale-105" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-[#164e63]/70 to-[#164e63]/95"></div>
            </div>
            <div className="relative z-10 flex flex-col lg:flex-row min-h-[450px] sm:min-h-[550px] lg:min-h-[600px]">
              <div className="hidden lg:block lg:w-[45%]"></div>
              <div className="w-full lg:w-[55%] p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                <span className="text-teal-300 text-lg sm:text-xl italic mb-2">{t('overnightRecommendation.honestRecommendation')}</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-5 leading-tight text-white">{t('overnightRecommendation.title')}</h2>
                <p className="text-sm sm:text-base md:text-lg mb-6 text-white/90 leading-relaxed">{t('overnightRecommendation.description')}</p>
                <h3 className="text-base sm:text-lg font-bold text-white mb-4">{t('overnightRecommendation.destinations')}</h3>
                <div className="space-y-3 mb-6">
                  {['kohRok', 'kohHa', 'butang'].map(k => (
                    <div key={k} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/20">
                      <h4 className="font-bold text-white text-sm sm:text-base">{t(`overnightRecommendation.${k}.title`)}</h4>
                      <p className="text-white/80 text-xs sm:text-sm">{t(`overnightRecommendation.${k}.description`)}</p>
                    </div>
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-6">{t('overnightRecommendation.lessCrowded')}</p>
              </div>
            </div>
          </div>

          <div className="mt-8 sm:mt-10 md:mt-12 bg-white rounded-xl overflow-hidden shadow-xl border border-gray-100">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-6 sm:p-8 md:p-10 lg:p-12">
                <span className="text-teal-500 text-sm sm:text-base italic mb-2 block">Plan your trip</span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#164e63] mb-6 sm:mb-8">{t('overnightRecommendation.shorterTitle')}</h3>
                <p className="text-neutral-600 text-sm sm:text-base md:text-lg mb-8 leading-relaxed">{t('overnightRecommendation.shorterDescription')}</p>
                <div className="space-y-6 sm:space-y-8">
                  {[
                    { key: 'oneTwoNights', label: '1–2 nights', icon: 'M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z' },
                    { key: 'threeFourNights', label: '3–4 nights', icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7' },
                    { key: 'fiveFourteenNights', label: '5–14 nights', icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z' },
                  ].map(item => (
                    <div key={item.key} className="flex items-start gap-4">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-teal-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 sm:w-7 sm:h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#164e63] text-base sm:text-lg mb-1">{item.label}</h4>
                        <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">{t(`overnightRecommendation.${item.key}`)}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 sm:mt-10">
                  <p className="text-sm sm:text-base text-neutral-600 mb-4">{t('overnightRecommendation.ctaText')}</p>
                  <LocaleLink href="/contact" className="inline-flex items-center justify-center px-6 py-3 text-sm sm:text-base font-bold text-white bg-amber-gradient rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
                    {t('overnightRecommendation.ctaButton')}
                  </LocaleLink>
                  <p className="mt-4">
                    <a href="#overnight" className="text-[#14b8a6] hover:text-[#0d9488] font-semibold text-sm inline-flex items-center gap-1 transition-colors duration-200">{t('overnightRecommendation.ctaLink')}</a>
                  </p>
                </div>
              </div>
              <div className="relative h-[250px] sm:h-[300px] lg:h-auto lg:min-h-[400px]">
                <Image src="/assets/images/home/couple3.jpg" alt="Overnight sailing yacht" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-transparent lg:block hidden"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="bg-white py-6 sm:py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactCards />
        </div>
      </section>

      {/* Catamaran vs Sailing Section */}
      <section id="catamaran-vs-sailing" className="py-10 sm:py-14 bg-ocean-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading subtitle={t('catamaranVsSailing.subtitle')}>{t('catamaranVsSailing.title')}</SectionHeading>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {[
              { titleKey: 'catamaranTitle', items: ['catamaranSpace', 'catamaranShade', 'catamaranVilla', 'catamaranSocial'], linkKey: 'catamaranLink', image: '/assets/images/home/sailing-catamaran.png' },
              { titleKey: 'sailingTitle', items: ['sailingClassic', 'sailingSportier', 'sailingValue', 'sailingRomantic'], linkKey: 'sailingLink', image: '/assets/images/home/sailing-monohull.png' },
            ].map((card) => (
              <div key={card.titleKey} className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
                <div className="relative h-48 sm:h-56 md:h-64 mb-4 sm:mb-6 rounded-2xl overflow-hidden">
                  <Image src={card.image} alt={t(`catamaranVsSailing.${card.titleKey}`)} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                </div>
                <h3 className="mb-4 sm:mb-6 text-lg sm:text-xl">{t(`catamaranVsSailing.${card.titleKey}`)}</h3>
                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  {card.items.map(item => (
                    <li key={item} className="flex items-start gap-2 sm:gap-3">
                      <span className="text-ocean-600 font-bold text-lg sm:text-xl flex-shrink-0">✓</span>
                      <span className="text-sm sm:text-base">{t(`catamaranVsSailing.${item}`)}</span>
                    </li>
                  ))}
                </ul>
                <a href="#" className="text-[#14b8a6] font-semibold hover:text-[#0d9488] transition-colors text-sm sm:text-base">{t(`catamaranVsSailing.${card.linkKey}`)}</a>
              </div>
            ))}
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

      {/* Popular Routes Section */}
      <section id="routes" className="py-10 sm:py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading subtitle={t('popularRoutes.subtitle')}>{t('popularRoutes.title')}</SectionHeading>
          <HomePopularRoutes routes={routes} />
        </div>
        <div className="bg-gray-50 pt-6 sm:pt-8">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-[#164e63] via-[#0f3a47] to-[#0a2a35] rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 text-center">
              <h3 className="mb-3 sm:mb-4 text-white text-xl sm:text-2xl md:text-3xl font-bold">{t('popularRoutes.wantHelp')}</h3>
              <button className="bg-amber-gradient text-white font-bold px-6 py-3 rounded-xl text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95">
                {t('popularRoutes.routeIdeas')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="py-10 sm:py-14 bg-ocean-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading subtitle={t('whoItsFor.subtitle')}>{t('whoItsFor.title')}</SectionHeading>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {audiences.map((audience, index) => (
              <div key={index} className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-64 sm:h-72 md:h-80 cursor-pointer group hover:-translate-y-2">
                <Image src={audience.image} alt={audience.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90"></div>
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 transition-all duration-300">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-white">{audience.title}</h3>
                  <p className="text-white/95 leading-relaxed text-sm sm:text-base">{audience.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section id="included" className="py-10 sm:py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading subtitle={t('whatsIncluded.subtitle')}>{t('whatsIncluded.title')}</SectionHeading>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-10 md:mb-12">
            <div className="bg-ocean-50 rounded-2xl p-6 sm:p-8">
              <h3 className="mb-4 sm:mb-6 text-lg sm:text-xl font-bold text-[#164e63]">{t('whatsIncluded.typicallyIncluded')}</h3>
              <ul className="space-y-2 sm:space-y-3">
                {['professionalCrew', 'safetyEquipment', 'standardSetup', 'routePlanning'].map(k => (
                  <li key={k} className="flex items-start gap-2 sm:gap-3">
                    <span className="text-ocean-600 font-bold text-lg sm:text-xl flex-shrink-0">✓</span>
                    <span className="text-sm sm:text-base">{t(`whatsIncluded.${k}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-ocean-200">
              <h3 className="mb-4 sm:mb-6 text-lg sm:text-xl font-bold text-[#164e63]">{t('whatsIncluded.oftenOptional')}</h3>
              <ul className="space-y-2 sm:space-y-3">
                {['mealsDrinks', 'parkFees', 'specialOccasion', 'waterToys', 'legalArrangements'].map(k => (
                  <li key={k} className="flex items-start gap-2 sm:gap-3">
                    <span className="text-ocean-600 flex-shrink-0">•</span>
                    <span className="text-sm sm:text-base">{t(`whatsIncluded.${k}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div>
              <h3 className="mb-4 sm:mb-6 text-xl sm:text-2xl md:text-3xl font-bold text-[#164e63]">{t('whatsIncluded.whatToPack')}</h3>
              <p className="mb-4 sm:mb-5 text-neutral-700 text-base sm:text-lg">{t('whatsIncluded.keepSimple')}</p>
              <ul className="space-y-2 sm:space-y-3">
                {['swimwear', 'sunscreen', 'coverUp', 'waterproofPouch', 'shoes', 'medication'].map(k => (
                  <li key={k} className="flex items-start gap-2 sm:gap-3">
                    <span className="text-ocean-600 flex-shrink-0 text-lg">•</span>
                    <span className="text-base sm:text-lg">{t(`whatsIncluded.${k}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image src="/assets/images/home/packing.webp" alt="What to pack" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
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

      {/* Pricing Section */}
      <section id="pricing" className="py-10 sm:py-14 bg-ocean-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading subtitle={t('pricing.subtitle')}>{t('pricing.title')}</SectionHeading>
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
                {['boatType', 'privateVsCabin', 'tripLength', 'routeDestination', 'seasonDemand', 'bookingTiming', 'groupSize'].map(k => (
                  <li key={k} className="flex items-start gap-2 sm:gap-3 md:gap-4">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-ocean-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 text-sm sm:text-base md:text-lg">{t(`pricing.${k}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#0d4d5c] backdrop-blur rounded-2xl px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 shadow-2xl border-2 border-white/10">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 md:mb-8">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-lg flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">{t('pricing.priceAnchors')}</h3>
              </div>
              <ul className="space-y-3 sm:space-y-4 md:space-y-6 px-0 sm:px-2">
                {[
                  { key: 'dayTrips', icon: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z', border: true },
                  { key: 'sunsetSailing', icon: 'M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z', border: true },
                  { key: 'overnightCharters', icon: 'M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9', border: true },
                  { key: 'cabinCruises', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4', border: false },
                ].map(item => (
                  <li key={item.key} className={`flex items-start gap-2 sm:gap-3 md:gap-4 ${item.border ? 'pb-3 sm:pb-4 md:pb-5 border-b border-white/20' : ''}`}>
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-cyan-300 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                    <div className="flex-1">
                      <div className="text-white/90 text-xs sm:text-sm md:text-base mb-1">{t(`pricing.${item.key}`)}</div>
                      <div className="text-white font-bold text-base sm:text-lg md:text-xl">{t(`pricing.${item.key}Price`)}</div>
                    </div>
                  </li>
                ))}
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

      {/* Contact Cards */}
      <section className="bg-white py-6 sm:py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactCards />
        </div>
      </section>

      {/* Booking Process Section */}
      <section id="booking" className="py-10 sm:py-14 bg-gradient-to-br from-slate-50 via-gray-50 to-sky-50">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#164e63] mb-5">{t('bookingProcess.title')}</h2>
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="h-1 w-12 bg-[#164e63] rounded-full"></div>
              <div className="h-2 w-2 bg-amber-500 rounded-full"></div>
              <div className="h-1 w-12 bg-[#164e63] rounded-full"></div>
            </div>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">{t('bookingProcess.subtitle')}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14 max-w-6xl mx-auto">
            {bookingSteps.map((step) => (
              <div key={step.number} className="relative bg-gradient-to-br from-[#164e63] via-[#0f3a47] to-[#0a2a35] rounded-3xl p-5 sm:p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="absolute -top-4 left-6 w-10 h-10 bg-gradient-to-br from-[#14b8a6] to-[#0d9488] rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                  <span className="text-white font-bold text-lg">{step.number}</span>
                </div>
                <div className="mt-6">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-white/80 text-sm md:text-base leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mb-8 sm:mb-10 max-w-6xl mx-auto">
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-[#164e63] mb-3">{t('bookingProcess.inquiryChecklist')}</h3>
              <p className="text-gray-600">{t('bookingProcess.inquiryChecklistDescription')}</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-5 md:gap-6">
              {[
                { key: 'howManyGuests', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
                { key: 'dayOrNights', icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
                { key: 'preferredYacht', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
                { key: 'tripStyle', icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' },
                { key: 'mustSeeIslands', icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z' },
              ].map(item => (
                <div key={item.key} className="text-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-gray-100 rounded-full flex items-center justify-center text-[#164e63]">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                    </svg>
                  </div>
                  <h4 className="font-bold text-[#164e63] mb-1">{t(`bookingProcess.${item.key}`)}</h4>
                  <p className="text-sm text-gray-500">{t(`bookingProcess.${item.key}Desc`)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-slate-50 via-gray-50 to-sky-50 pt-6 sm:pt-8">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-[#164e63] via-[#0f3a47] to-[#0a2a35] rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 text-center">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">{t('bookingProcess.readyToPlan')}</h3>
              <p className="text-sm sm:text-base md:text-lg text-white/80 mb-6 sm:mb-8 leading-relaxed">{t('bookingProcess.readyToPlanDescription')}</p>
              <CTAButton href="/contact" trackingId="booking-inquire">{t('bookingProcess.getIndividualQuote')}</CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Pages */}
      <section className="relative py-10 sm:py-14 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/assets/images/home/ynz2xdnl8u0iuplpnrtb.jpg" alt="Background" fill sizes="100vw" className="object-cover blur-md" />
          <div className="absolute inset-0 bg-[#0d4d5c]/70 backdrop-blur-sm"></div>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-white mb-8 sm:mb-10 md:mb-12 text-3xl sm:text-4xl md:text-5xl font-bold">{t('explorePages.title')}</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {explorePages.map((page, index) => (
              <a key={index} href="#" className="bg-[#0d4d5c]/60 backdrop-blur-md rounded-2xl p-5 sm:p-6 md:p-7 hover:bg-[#14b8a6]/40 hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-2xl border border-white/30">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">{page}</h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQAccordion faqs={faqs} title="Frequently Asked Questions – Phuket Sailing" id="faqs" />

      <BookingCTA />
    </main>
  )
}
