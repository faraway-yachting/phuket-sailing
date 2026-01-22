'use client'
import React from 'react'
import Image from 'next/image'
import { CTAButton } from '@/components/shared/CTAButton'
import { ContactCards } from '@/components/shared/ContactCards'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { Phone, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <JumpLinks />
      <ContactCardsSection />
      <CharterStylesSection />
      <SailingPhuketSection />
      <WhatTripTypeSection />
      <OvernightSailingSection />
      <OvernightRecommendationSection />
      <CatamaranVsSailingSection />
      <PopularRoutesSection />
      <WhoItsForSection />
      <WhatsIncludedSection />
      <PricingSection />
      <BookingProcessSection />
      <ExplorePages />
      <FAQSection />
      <FinalCTASection />
    </main>
  )
}

function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/home/hero.jpg"
          alt="Sailing in Phuket"
          fill
          className="object-cover"
          priority
          quality={100}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent z-[1]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 sm:py-16 md:py-20">
        <div className="max-w-3xl">
          <h1 className="font-[family-name:var(--font-playfair)] text-white mb-4 sm:mb-6 leading-[1.2] drop-shadow-2xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal">
            Phuket Sailing
          </h1>

          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-white drop-shadow-lg leading-relaxed">
            Plan your next Sailing Phuket experience in minutes.
            <br/> Choose your boat style, pick the trip length,
            <br/> and we'll recommend the best route for your
            <br/> dates—fast, clear, and holiday-easy.
          </p>

          <CTAButton trackingId="hero-quote" className="!px-6 !py-3 !text-base">
            GET YOUR INDIVIDUAL QUOTE
          </CTAButton>
        </div>
      </div>
    </section>
  )
}

function ContactCardsSection() {
  return (
    <section className="bg-white py-4 sm:py-5 md:py-6">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ContactCards />
      </div>
    </section>
  )
}

function JumpLinks() {
  const links = [
    { href: '#charter-style', label: 'Choose Your Charter Style' },
    { href: '#sailing-phuket', label: 'Sailing Phuket' },
    { href: '#overnight', label: 'Overnight Sailing Trips' },
    { href: '#catamaran-vs-sailing', label: 'Catamaran vs Sailing' },
    { href: '#routes', label: 'Popular Routes' },
    { href: '#included', label: "What's Included" },
    { href: '#pricing', label: 'Pricing' },
    { href: '#booking', label: 'Booking' },
    { href: '#faqs', label: 'FAQs' },
  ]

  return (
    <nav className="sticky top-0 z-50 -mt-8 sm:-mt-10 md:-mt-12 lg:-mt-14">
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

function CharterStylesSection() {
  const [currentSlide, setCurrentSlide] = React.useState(0)

  const styles = [
    {
      title: 'Private Sailing Yachts',
      link: '#',
      linkText: 'Explore',
      image: '/assets/images/home/sailing-yacht.jpg',
    },
    {
      title: 'Catamaran Charters',
      link: '#',
      linkText: 'Explore',
      image: '/assets/images/home/catamaran.webp',
    },
    {
      title: 'Overnight Sailing',
      link: '#',
      linkText: 'Explore',
      image: '/assets/images/home/overnight-sailing.webp',
    },
    {
      title: 'Cabin Cruises',
      link: '#',
      linkText: 'Explore',
      image: '/assets/images/home/cabin-cruise.avif',
    },
    {
      title: 'Bareboat Charter',
      link: '#',
      linkText: 'Explore',
      image: '/assets/images/home/day-sailing.webp',
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % styles.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + styles.length) % styles.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  // Calculate visible cards (current + 2 on each side)
  const getVisibleCards = () => {
    const visible = []
    for (let i = -2; i <= 2; i++) {
      const index = (currentSlide + i + styles.length) % styles.length
      visible.push({ ...styles[index], position: i, originalIndex: index })
    }
    return visible
  }

  return (
    <section id="charter-style" className="pt-8 sm:pt-10 md:pt-12 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-10 md:pb-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#164e63] mb-4">
            Choose Your Charter Style
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-1 w-12 bg-[#164e63] rounded-full"></div>
            <div className="h-2 w-2 bg-amber-500 rounded-full"></div>
            <div className="h-1 w-12 bg-[#164e63] rounded-full"></div>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative mt-8">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-[#0891b2] hover:bg-[#0e7490] rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-[#0891b2] hover:bg-[#0e7490] rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Cards Container */}
          <div className="overflow-hidden px-12 sm:px-16">
            <div className="relative h-[550px] sm:h-[600px] flex items-center justify-center">
              {getVisibleCards().map((style, idx) => {
                const { position, originalIndex } = style
                const isCenter = position === 0

                return (
                  <div
                    key={`${originalIndex}-${idx}`}
                    className="absolute transition-all duration-500 ease-in-out cursor-pointer"
                    style={{
                      left: `${50 + position * 22}%`,
                      transform: `translateX(-50%) scale(${isCenter ? 1 : 0.85})`,
                      zIndex: isCenter ? 10 : 5 - Math.abs(position),
                      opacity: Math.abs(position) > 2 ? 0 : isCenter ? 1 : 0.6,
                    }}
                    onClick={() => !isCenter && goToSlide(originalIndex)}
                  >
                    <div className={`bg-white rounded-2xl overflow-hidden shadow-xl w-[320px] sm:w-[380px] transition-all duration-300 ${isCenter ? 'shadow-2xl' : ''}`}>
                      {/* Image */}
                      <div className="relative h-[400px] sm:h-[480px]">
                        <Image
                          src={style.image}
                          alt={style.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                        {/* Content Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                          <div className="flex items-center justify-center gap-2 mb-2">
                            <div className="h-px w-6 bg-white/60"></div>
                            <div className="h-1 w-1 bg-white/60 rounded-full"></div>
                          </div>
                          <h3 className="text-white text-lg sm:text-xl font-bold text-center mb-4">
                            {style.title}
                          </h3>
                          <button className="w-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 border border-white/30">
                            {style.linkText}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {styles.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentSlide
                    ? 'w-8 h-2 bg-[#0891b2]'
                    : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

      </div>

      <div className="bg-[#164e63] py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3">Not sure what fits best?</h3>
          <p className="text-white/90 text-sm sm:text-base mb-4">
            Send your dates + group size, and we'll recommend the best match.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center">
            <button className="inline-flex items-center justify-center px-4 sm:px-5 py-2.5 text-sm sm:text-base font-bold text-white bg-[#14b8a6] rounded-lg hover:bg-[#0d9488] transition-all duration-300">
              Get a Fast Quote
            </button>
            <button className="inline-flex items-center justify-center px-4 sm:px-5 py-2.5 text-sm sm:text-base font-bold text-white bg-green-600 rounded-lg hover:bg-green-700 transition-all duration-300">
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp Us
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

function SailingPhuketSection() {
  return (
    <section id="sailing-phuket" className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Image Collage - Left Side */}
          <div className="relative h-[350px] sm:h-[450px] md:h-[500px] lg:h-[550px]">
            {/* Left large image - Main */}
            <div className="absolute left-0 top-[10%] w-[58%] h-[85%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white z-10">
              <Image
                src="/assets/images/home/phuket1.jpg"
                alt="Phuket tropical waters"
                fill
                className="object-cover"
              />
            </div>

            {/* Top right image */}
            <div className="absolute right-0 top-0 w-[48%] h-[42%] rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <Image
                src="/assets/images/home/phuket2.jpg"
                alt="Phuket limestone caves"
                fill
                className="object-cover"
              />
            </div>

            {/* Bottom right image */}
            <div className="absolute right-0 bottom-0 w-[48%] h-[52%] rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <Image
                src="/assets/images/home/phuket3.jpg"
                alt="Phuket James Bond Island"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Text Content - Right Side */}
          <div className="w-full">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#164e63] mb-4 sm:mb-6">
              Sailing Phuket
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-neutral-700 leading-relaxed mb-6 sm:mb-8">
              Phuket is one of the best sailing hubs in Southeast Asia. Distances between islands are perfect for day trips or multi-night routes. You can choose calm bays, scenic limestone landscapes, snorkeling stops, or remote anchorages that feel far from crowds.
            </p>

            <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#164e63] mb-4 sm:mb-6">
              This is what makes Sailing Phuket special:
            </h3>

            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-[#ca8a44] text-xl sm:text-2xl mt-0.5 flex-shrink-0">✓</span>
                <span className="text-neutral-700 text-sm sm:text-base md:text-lg leading-relaxed">Warm water and tropical island scenery</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-[#ca8a44] text-xl sm:text-2xl mt-0.5 flex-shrink-0">✓</span>
                <span className="text-neutral-700 text-sm sm:text-base md:text-lg leading-relaxed">Routes for every mood: relaxed, romantic, adventurous</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-[#ca8a44] text-xl sm:text-2xl mt-0.5 flex-shrink-0">✓</span>
                <span className="text-neutral-700 text-sm sm:text-base md:text-lg leading-relaxed">Options for every group: families, couples, corporate teams, friends, solo travelers</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-[#ca8a44] text-xl sm:text-2xl mt-0.5 flex-shrink-0">✓</span>
                <span className="text-neutral-700 text-sm sm:text-base md:text-lg leading-relaxed">Day trips, sunset sails, or multi-day exploration</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function WhatTripTypeSection() {
  const tripTypes = [
    {
      title: 'Day Sailing',
      description: 'Ideal if you want a holiday on the water with swimming, and boat-day-ish vibes without staying overnight.',
      image: '/assets/images/home/day-sailing.webp',
    },
    {
      title: 'Sunset Sailing',
      description: 'Perfect for couples, families, and celebrations. Shorter, scenic, and charming.',
      image: '/assets/images/home/Sunset-sailing.jpg',
    },
    {
      title: 'Overnight Sailing Boat rental/charter',
      description: 'More time, more calm, more real holiday.',
      image: '/assets/images/home/overnight-sailing.webp',
    },
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#164e63] text-center mb-3 sm:mb-4">
          What type of trip are you planning?
        </h2>
        <p className="text-center text-neutral-600 mb-8 sm:mb-10 md:mb-12 text-base sm:text-lg">Here are the three most common starting points:</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {tripTypes.map((type, index) => (
            <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              {/* Image Container */}
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <Image
                  src={type.image}
                  alt={type.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                {/* Explore Button Badge */}
                <div className="absolute bottom-4 right-4">
                  <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2.5 rounded-full font-semibold text-sm shadow-lg transition-all duration-300 transform hover:scale-105">
                    Explore
                  </button>
                </div>
              </div>

              {/* Content */}
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
  return (
    <section id="overnight" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Text Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#164e63] mb-6">
              Overnight Sailing Trips Phuket
            </h2>

            <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
              If you want the trip that people talk about for years, choose overnight sailing. Day trips are fun, but overnight is where Phuket becomes quiet, beautiful, and unhurried.
            </p>

            <h3 className="text-xl sm:text-2xl font-bold text-[#164e63] mb-6">
              Why overnight sailing feels different
            </h3>

            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-[#ca8a44] text-xl mt-0.5 flex-shrink-0">✓</span>
                <span className="text-gray-700 text-base sm:text-lg">You don't rush back to the pier</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#ca8a44] text-xl mt-0.5 flex-shrink-0">✓</span>
                <span className="text-gray-700 text-base sm:text-lg">You swim when bays are calm</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#ca8a44] text-xl mt-0.5 flex-shrink-0">✓</span>
                <span className="text-gray-700 text-base sm:text-lg">You enjoy sunset and sunrise at anchor</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#ca8a44] text-xl mt-0.5 flex-shrink-0">✓</span>
                <span className="text-gray-700 text-base sm:text-lg">You can reach the best islands with fewer crowds</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#ca8a44] text-xl mt-0.5 flex-shrink-0">✓</span>
                <span className="text-gray-700 text-base sm:text-lg">You get time for snorkeling, beaches, viewpoints, and "do nothing" moments</span>
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
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Banner with Background Image */}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/assets/images/home/catamaran-aerial-hero.jpg"
              alt="Aerial view of catamarans"
              fill
              className="object-cover blur-[2px] scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-[#164e63]/70 to-[#164e63]/95"></div>
          </div>

          {/* Content - Right Side */}
          <div className="relative z-10 flex flex-col lg:flex-row min-h-[550px] sm:min-h-[600px]">
            {/* Empty left side for image visibility */}
            <div className="hidden lg:block lg:w-[45%]"></div>

            {/* Text Content - Right Side */}
            <div className="w-full lg:w-[55%] p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center">
              <span className="text-teal-300 text-lg sm:text-xl italic mb-2">Our honest recommendation</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-5 leading-tight text-white">
                5 nights minimum (if you can)
              </h2>

              <p className="text-sm sm:text-base md:text-lg mb-6 text-white/90 leading-relaxed">
                If your schedule allows, 5+ nights is the sweet spot. That's when you can reach more remote areas and enjoy a calmer experience than the busiest hotspots.
              </p>

              <h3 className="text-base sm:text-lg font-bold text-white mb-4">
                Three standout "off-the-beaten-track" destinations:
              </h3>

              {/* Destination Cards */}
              <div className="space-y-3 mb-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/20">
                  <h4 className="font-bold text-white text-sm sm:text-base">Koh Rok</h4>
                  <p className="text-white/80 text-xs sm:text-sm">Clear water and a quieter, more remote feel</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/20">
                  <h4 className="font-bold text-white text-sm sm:text-base">Koh Ha</h4>
                  <p className="text-white/80 text-xs sm:text-sm">Beautiful lagoons and amazing snorkeling conditions</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/20">
                  <h4 className="font-bold text-white text-sm sm:text-base">Butang Islands (7+ nights)</h4>
                  <p className="text-white/80 text-xs sm:text-sm">Fewest crowds, amazing landscapes over and under water</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-6">
                These areas are typically far less crowded than the most popular day-trip zones like Phang Nga Bay or Phi Phi islands. That's why we recommend five nights minimum when guests want the best version of Phuket sailing.
              </p>
              
            </div>
          </div>
        </div>

        {/* Shorter Overnights Section - New Design */}
        <div className="mt-8 sm:mt-10 md:mt-12 bg-white rounded-xl overflow-hidden shadow-xl border border-gray-100">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left Side - Content */}
            <div className="p-6 sm:p-8 md:p-10 lg:p-12">
              {/* Header */}
              <span className="text-teal-500 text-sm sm:text-base italic mb-2 block">Plan your trip</span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#164e63] mb-6 sm:mb-8">
                Shorter overnights still work
              </h3>

              <p className="text-neutral-600 text-sm sm:text-base md:text-lg mb-8 leading-relaxed">
                If you have fewer nights, we'll plan a route that feels realistic and relaxed:
              </p>

              {/* Feature Items with Icons */}
              <div className="space-y-6 sm:space-y-8">
                {/* 1-2 Nights */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-teal-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#164e63] text-base sm:text-lg mb-1">1–2 nights</h4>
                    <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">Nearby highlights like Phi Phi and Racha Islands</p>
                  </div>
                </div>

                {/* 3-4 Nights */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-teal-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#164e63] text-base sm:text-lg mb-1">3–4 nights</h4>
                    <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">A bigger loop with more variety of destinations</p>
                  </div>
                </div>

                {/* 5-14 Nights */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-teal-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#164e63] text-base sm:text-lg mb-1">5–14 nights</h4>
                    <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">Absolute best destinations and deeper exploration of Thai islands and culture</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 sm:mt-10">
                <p className="text-sm sm:text-base text-neutral-600 mb-4">
                  Tell us your dates and number of nights and we'll recommend the best route.
                </p>
                <button className="inline-flex items-center justify-center px-6 py-3 text-sm sm:text-base font-bold text-white bg-gradient-to-r from-[#14b8a6] to-[#0d9488] rounded-lg hover:from-[#0d9488] hover:to-[#0f766e] transition-all duration-300 shadow-lg hover:shadow-xl">
                  Tell us your dates and number of nights
                </button>
                <p className="mt-4">
                  <a href="#overnight" className="text-[#14b8a6] hover:text-[#0d9488] font-semibold text-sm inline-flex items-center gap-1 transition-colors duration-200">
                    → Start here: Overnight Sailing Trips Phuket
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

function CatamaranVsSailingSection() {
  return (
    <section id="catamaran-vs-sailing" className="pt-12 sm:pt-16 md:pt-20 bg-ocean-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 md:pb-20">
        <SectionHeading subtitle="If you are stuck choosing, this quick guide usually solves it">
          Catamaran vs Sailing Yacht
        </SectionHeading>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          <div className="bg-white rounded-lg p-6 sm:p-8 shadow-lg">
            <div className="relative h-48 sm:h-56 md:h-64 mb-4 sm:mb-6 rounded-lg overflow-hidden">
              <Image
                src="/assets/images/home/catamaran.webp"
                alt="Catamaran"
                fill
                className="object-cover"
              />
            </div>

            <h3 className="mb-4 sm:mb-6 text-lg sm:text-xl">Choose a catamaran if you want</h3>
            <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-ocean-600 font-bold text-lg sm:text-xl flex-shrink-0">✓</span>
                <span className="text-sm sm:text-base">More space and stability (great for kids and groups)</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-ocean-600 font-bold text-lg sm:text-xl flex-shrink-0">✓</span>
                <span className="text-sm sm:text-base">More shade and lounging areas</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-ocean-600 font-bold text-lg sm:text-xl flex-shrink-0">✓</span>
                <span className="text-sm sm:text-base">A floating villa feel</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-ocean-600 font-bold text-lg sm:text-xl flex-shrink-0">✓</span>
                <span className="text-sm sm:text-base">A very social layout</span>
              </li>
            </ul>

            <a href="#" className="text-[#14b8a6] font-semibold hover:text-[#0d9488] transition-colors text-sm sm:text-base">
              Compare options: Catamaran Charters in Phuket →
            </a>
          </div>

          <div className="bg-white rounded-lg p-6 sm:p-8 shadow-lg">
            <div className="relative h-48 sm:h-56 md:h-64 mb-4 sm:mb-6 rounded-lg overflow-hidden">
              <Image
                src="/assets/images/home/sailing-yacht.jpg"
                alt="Sailing Yacht"
                fill
                className="object-cover"
              />
            </div>

            <h3 className="mb-4 sm:mb-6 text-lg sm:text-xl">Choose a sailing yacht if you want</h3>
            <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-ocean-600 font-bold text-lg sm:text-xl flex-shrink-0">✓</span>
                <span className="text-sm sm:text-base">A more classic sailing sensation</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-ocean-600 font-bold text-lg sm:text-xl flex-shrink-0">✓</span>
                <span className="text-sm sm:text-base">A sportier, authentic sailboat experience</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-ocean-600 font-bold text-lg sm:text-xl flex-shrink-0">✓</span>
                <span className="text-sm sm:text-base">Great value for couples and smaller groups</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-ocean-600 font-bold text-lg sm:text-xl flex-shrink-0">✓</span>
                <span className="text-sm sm:text-base">A cozy, romantic atmosphere</span>
              </li>
            </ul>

            <a href="#" className="text-[#14b8a6] font-semibold hover:text-[#0d9488] transition-colors text-sm sm:text-base">
              Compare options: Sailing Yachts in Phuket →
            </a>
          </div>
        </div>

      </div>

      <div className="bg-[#164e63] py-8 sm:py-10 md:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="mb-3 sm:mb-4 text-white text-xl sm:text-2xl md:text-3xl font-bold">Still unsure?</h3>
          <p className="text-white/90 mb-6 sm:mb-8 text-base sm:text-lg">Message us your group size + comfort preferences and we will recommend the best fit.</p>
          <CTAButton trackingId="comparison-quote">Get Personalized Recommendation</CTAButton>
        </div>
      </div>
    </section>
  )
}

function PopularRoutesSection() {
  const routes = [
    {
      title: 'Racha Islands (Racha Yai / Racha Noi)',
      description: 'A favorite for clear water and snorkeling. Great for both sailing yachts and catamarans. A strong choice when you want a clean tropical island day without overcomplicating the plan.',
      image: '/assets/images/home/racha-island.webp',
    },
    {
      title: 'Coral Island',
      description: 'Easy, relaxed, and popular for swimming and beach time. Great for families, mixed groups, and visitors who want a fun day on the sea with simple logistics.',
      image: '/assets/images/home/coral-island.webp',
    },
    {
      title: 'Phang Nga Bay',
      description: 'Iconic limestone scenery, calm water, and incredible photos. Often perfect for mixed groups, corporate outings, and travelers who love sightseeing and dramatic landscapes.',
      image: '/assets/images/home/phang-nga-bay.jpg',
    },
    {
      title: 'Koh Rok & Koh Ha (best with 5+ nights)',
      description: 'If your goal is fewer crowds and more wow, these routes shine on longer charters. Quiet anchorages and that rare feeling of space.',
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
    <section id="routes" className="pt-12 sm:pt-16 md:pt-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 md:pb-20">
        <SectionHeading subtitle="Use these as inspiration. We will finalize the best route for your season and trip length">
          Most Popular Routes
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

      <div className="bg-[#164e63] py-5 sm:py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="mb-2 sm:mb-3 text-white text-lg sm:text-xl md:text-2xl font-bold">Want help choosing?</h3>
          <p className="text-[#14b8a6] font-semibold text-sm sm:text-base md:text-lg">
            <a href="#" className="hover:text-[#0d9488]">See route ideas: Sailing Itineraries Phuket →</a>
          </p>
        </div>
      </div>
    </section>
  )
}

function WhoItsForSection() {
  const audiences = [
    {
      title: 'Families & kids',
      description: 'Family-friendly routes, stable boat recommendations, calm swim stops, and the right pacing. Catamarans are often ideal because of space and stability.',
      image: '/assets/images/home/family.jpeg',
    },
    {
      title: 'Couples & romantic getaways',
      description: 'Sunset sails, quiet anchor nights, and private time in beautiful places. Great for honeymoons, anniversaries, and proposals.',
      image: '/assets/images/home/couple.jpg',
    },
    {
      title: 'Corporate & team-building groups',
      description: 'Sailing creates real connection. It is fun, premium, and relaxed—without feeling formal.',
      image: '/assets/images/home/corporate.jpg',
    },
    {
      title: 'Adventure seekers',
      description: 'Longer charters unlock hiking, diving, and off-the-beaten-track islands. If you want exploration, we will build a route that feels like a real adventure.',
      image: '/assets/images/home/au6lybsyxqznyrp0816h.jpg',
    },
    {
      title: 'Solo travelers & small friend groups',
      description: 'Cabin cruises are perfect here. You get the multi-day experience without paying for a full private charter.',
      image: '/assets/images/home/yacht-guests-hero.jpg',
    },
    {
      title: 'Special occasions',
      description: 'Milestone birthdays (50th/60th), honeymoons, anniversaries—tell us what you are celebrating and we will help plan a surprise onboard.',
      image: '/assets/images/home/occasion.jpeg',
    },
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-ocean-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading subtitle="Sailing adventures for everyone - families, couples, groups, and solo travelers">
          Who Phuket Sailing is perfect for
        </SectionHeading>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {audiences.map((audience, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg card-hover">
              <div className="relative h-48 sm:h-56">
                <Image
                  src={audience.image}
                  alt={audience.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl mb-2 sm:mb-3">{audience.title}</h3>
                <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">{audience.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhatsIncludedSection() {
  return (
    <section id="included" className="pt-12 sm:pt-16 md:pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 md:pb-20">
        <SectionHeading subtitle="Inclusions vary by boat and trip type, but we keep it clear before you confirm anything">
          What is Included
        </SectionHeading>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-10 md:mb-12">
          <div className="bg-ocean-50 rounded-lg p-6 sm:p-8">
            <h3 className="mb-4 sm:mb-6 text-lg sm:text-xl">Typically included on crewed charters</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-ocean-600 font-bold text-lg sm:text-xl flex-shrink-0">✓</span>
                <span className="text-sm sm:text-base">Professional crew (not for bareboat charters)</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-ocean-600 font-bold text-lg sm:text-xl flex-shrink-0">✓</span>
                <span className="text-sm sm:text-base">Safety equipment</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-ocean-600 font-bold text-lg sm:text-xl flex-shrink-0">✓</span>
                <span className="text-sm sm:text-base">Standard onboard setup and facilities</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-ocean-600 font-bold text-lg sm:text-xl flex-shrink-0">✓</span>
                <span className="text-sm sm:text-base">Route planning by our management team, support and local guidance</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6 sm:p-8 border-2 border-ocean-200">
            <h3 className="mb-4 sm:mb-6 text-lg sm:text-xl">Often optional (depends on boat / route)</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-ocean-600 flex-shrink-0">•</span>
                <span className="text-sm sm:text-base">Meals and drinks packages</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-ocean-600 flex-shrink-0">•</span>
                <span className="text-sm sm:text-base">National park fees (route-dependent)</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-ocean-600 flex-shrink-0">•</span>
                <span className="text-sm sm:text-base">Special occasion setup</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-ocean-600 flex-shrink-0">•</span>
                <span className="text-sm sm:text-base">Extra water toys</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-ocean-600 flex-shrink-0">•</span>
                <span className="text-sm sm:text-base">Everything that is legal can be arranged with enough time</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
          <div>
            <h3 className="mb-4 sm:mb-6 text-lg sm:text-xl">What to Pack</h3>
            <p className="mb-3 sm:mb-4 text-neutral-700 text-sm sm:text-base">Keep it simple:</p>
            <ul className="space-y-1.5 sm:space-y-2">
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-ocean-600 flex-shrink-0">•</span>
                <span className="text-sm sm:text-base">Swimwear (bring ideally 3 sets as you might not wear anything else)</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-ocean-600 flex-shrink-0">•</span>
                <span className="text-sm sm:text-base">Sunscreen, hat, sunglasses</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-ocean-600 flex-shrink-0">•</span>
                <span className="text-sm sm:text-base">Light cover-up / rash guard for snorkeling (we sell them at 500 THB)</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-ocean-600 flex-shrink-0">•</span>
                <span className="text-sm sm:text-base">Waterproof pouch for phone</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-ocean-600 flex-shrink-0">•</span>
                <span className="text-sm sm:text-base">Shoes that can get wet, but are suitable for hiking</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-ocean-600 flex-shrink-0">•</span>
                <span className="text-sm sm:text-base">Any personal medication (we have all kind of medications onboard seasickness, antibiotics, etc.)</span>
              </li>
            </ul>
          </div>

          <div className="relative h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/assets/images/home/packing.webp"
              alt="What to pack"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </div>

      <div className="bg-[#164e63] py-5 sm:py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-3 sm:px-4 py-1 bg-[#14b8a6] rounded-full text-xs sm:text-sm font-bold mb-2 sm:mb-3">
            ✨ EXCLUSIVE OFFER
          </div>
          <h3 className="text-white mb-3 sm:mb-4 text-xl sm:text-2xl md:text-3xl font-bold">Want a simple, itemized quote?</h3>
          <CTAButton trackingId="included-quote">💰 Get a Fast Quote</CTAButton>
        </div>
      </div>
    </section>
  )
}

function PricingSection() {
  return (
    <section id="pricing" className="pt-12 sm:pt-16 md:pt-20 bg-ocean-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 md:pb-20">
        <SectionHeading subtitle="Prices depend on a few factors. This transparency helps you choose quickly">
          How Pricing Works
        </SectionHeading>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mt-6 sm:mt-8">
          <div className="bg-white rounded-xl px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 shadow-xl border-2 border-ocean-200/50">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 md:mb-8">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-ocean-500 to-ocean-600 rounded-lg flex items-center justify-center shadow-lg flex-shrink-0">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-ocean-700">Main pricing drivers</h3>
            </div>
            <ul className="space-y-3 sm:space-y-4 md:space-y-6 px-0 sm:px-2">
              <li className="flex items-start gap-2 sm:gap-3 md:gap-4">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-ocean-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm sm:text-base md:text-lg">Boat type</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 md:gap-4">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-ocean-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm sm:text-base md:text-lg">Private charter vs cabin cruise</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 md:gap-4">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-ocean-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm sm:text-base md:text-lg">Trip length (day / overnight)</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 md:gap-4">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-ocean-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm sm:text-base md:text-lg">Route & Destination</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 md:gap-4">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-ocean-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm sm:text-base md:text-lg">Season and demand</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 md:gap-4">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-ocean-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm sm:text-base md:text-lg">Booking Timing</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 md:gap-4">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-ocean-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm sm:text-base md:text-lg">Group size and comfort level</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-ocean-600 to-ocean-700 rounded-xl px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 shadow-2xl border-2 border-ocean-500/50">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 md:mb-8">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-lg flex-shrink-0">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">Price anchors</h3>
            </div>
            <ul className="space-y-3 sm:space-y-4 md:space-y-6 px-0 sm:px-2">
              <li className="flex items-start gap-2 sm:gap-3 md:gap-4 pb-3 sm:pb-4 md:pb-5 border-b border-white/20">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-cyan-300 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <div className="flex-1">
                  <div className="text-white/90 text-xs sm:text-sm md:text-base mb-1">Day sailing trips:</div>
                  <div className="text-white font-bold text-base sm:text-lg md:text-xl">from 29,900 THB</div>
                </div>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 md:gap-4 pb-3 sm:pb-4 md:pb-5 border-b border-white/20">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-cyan-300 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
                <div className="flex-1">
                  <div className="text-white/90 text-xs sm:text-sm md:text-base mb-1">Sunset sailing:</div>
                  <div className="text-white font-bold text-base sm:text-lg md:text-xl">from 24,900 THB</div>
                </div>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 md:gap-4 pb-3 sm:pb-4 md:pb-5 border-b border-white/20">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-cyan-300 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                </svg>
                <div className="flex-1">
                  <div className="text-white/90 text-xs sm:text-sm md:text-base mb-1">Overnight charters:</div>
                  <div className="text-white font-bold text-base sm:text-lg md:text-xl">from 1000 Euro per night</div>
                </div>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 md:gap-4">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-cyan-300 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <div className="flex-1">
                  <div className="text-white/90 text-xs sm:text-sm md:text-base mb-1">Cabin cruises:</div>
                  <div className="text-white font-bold text-base sm:text-lg md:text-xl">from 1998 Euro per cabin for 5 nights</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

      </div>

      <div className="bg-[#164e63] py-5 sm:py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-3 sm:px-4 py-1 bg-green-500 text-white rounded-full font-bold text-xs sm:text-sm mb-2 sm:mb-3">
            💎 BEST VALUE GUARANTEE
          </div>
          <h3 className="mb-2 sm:mb-3 text-white text-xl sm:text-2xl md:text-3xl font-bold">Fastest path to your quote</h3>
          <p className="text-white/90 mb-4 sm:mb-6 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">Send your dates + group size, and we will recommend the best options with clear pricing.</p>
          <CTAButton trackingId="pricing-quote">🎁 Get Your Personalized Quote</CTAButton>
        </div>
      </div>
    </section>
  )
}

function BookingProcessSection() {
  const steps = [
    {
      number: 1,
      title: 'Share your details',
      description: 'Send dates + group size and tell us what experience you are looking for.',
    },
    {
      number: 2,
      title: 'Choose your style',
      description: 'Choose your style (sailing yacht / catamaran / cabin cruise / bareboat)',
    },
    {
      number: 3,
      title: 'Get recommendations',
      description: 'We recommend the best boats + routes (based on season and goals)',
    },
    {
      number: 4,
      title: 'Confirm and relax',
      description: 'Book with confidence — we handle all the details for your perfect trip',
    },
  ]

  return (
    <section id="booking" className="pt-12 sm:pt-16 md:pt-20 bg-gradient-to-br from-slate-50 via-gray-50 to-sky-50">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 pb-12 sm:pb-16 md:pb-20">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#164e63] mb-5">
            How Booking Works
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="h-1 w-12 bg-[#164e63] rounded-full"></div>
            <div className="h-2 w-2 bg-amber-500 rounded-full"></div>
            <div className="h-1 w-12 bg-[#164e63] rounded-full"></div>
          </div>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Simple and fast — from inquiry to sailing in just 4 easy steps
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

        {/* 20-Second Inquiry Checklist */}
        <div className="mb-14 max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-[#164e63] mb-3">
              The 20-second inquiry checklist
            </h3>
            <p className="text-gray-600">
              Just answer these 5 quick questions and we&apos;ll handle the rest
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center text-[#164e63]">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="font-bold text-[#164e63] mb-1">How many guests?</h4>
              <p className="text-sm text-gray-500">Tell us your group size</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center text-[#164e63]">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="font-bold text-[#164e63] mb-1">Day trip or nights?</h4>
              <p className="text-sm text-gray-500">Choose your trip length</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center text-[#164e63]">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-bold text-[#164e63] mb-1">Preferred yacht?</h4>
              <p className="text-sm text-gray-500">Catamaran or sailing yacht</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center text-[#164e63]">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="font-bold text-[#164e63] mb-1">Trip style?</h4>
              <p className="text-sm text-gray-500">Family / romantic / adventure</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center text-[#164e63]">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="font-bold text-[#164e63] mb-1">Must-see islands?</h4>
              <p className="text-sm text-gray-500">Any specific destinations</p>
            </div>
          </div>
        </div>

      </div>

      {/* CTA Section - Full Width */}
      <div className="bg-gradient-to-r from-[#164e63] to-[#0f3a47] py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to start planning?
          </h3>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Send us your dates and group size — we&apos;ll craft the perfect sailing adventure for you
          </p>
          <CTAButton trackingId="booking-inquire">
            Get Your Individual Quote
          </CTAButton>
        </div>
      </div>
    </section>
  )
}

function ExplorePages() {
  const pages = [
    'Sailing Yachts in Phuket',
    'Catamaran Charters in Phuket',
    'Sailing Itineraries Phuket',
    'Cabin Cruises Phuket',
    'Bareboat Charter Phuket',
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-ocean-600 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-white mb-8 sm:mb-10 md:mb-12 text-2xl sm:text-3xl md:text-4xl">Explore All Pages</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {pages.map((page, index) => (
            <a
              key={index}
              href="#"
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 hover:bg-white/20 transition-all duration-300 card-hover"
            >
              <h3 className="text-lg sm:text-xl text-white">{page} →</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQSection() {
  const faqs = [
    {
      question: 'What is the best time for Sailing Phuket?',
      answer: 'Most guests prefer calmer, drier months, but Phuket can work year-round with the right route choices. We will recommend the best itinerary for your exact dates based on season, sea conditions, and comfort level. Note, the prices in low season between May and October are ca. 30-40% cheaper!',
    },
    {
      question: 'Is a catamaran better than a sailing yacht in Phuket?',
      answer: 'Catamarans offer more space and stability, which families and groups love. Sailing yachts feel more classic and real sailing. The best choice depends on your group size, comfort preferences, and the vibe you want onboard.',
    },
    {
      question: 'How many nights do you recommend for the best experience?',
      answer: 'If possible, we recommend 5 nights minimum. That is when you can reach quieter areas like Koh Rok and Koh Ha, which usually feel much less crowded than Phuket most popular day-trip destinations.',
    },
    {
      question: 'Are your Sailing Phuket trips family-friendly?',
      answer: 'Yes. We can recommend stable boats, calm swim stops, and family-friendly routes. Catamarans are often the easiest choice for kids because they have more space, shade, and stability—especially for relaxed day trips.',
    },
    {
      question: 'Is Phuket sailing good for couples and romantic getaways?',
      answer: 'Absolutely. Couples love sunset sails and overnight anchorages for privacy and atmosphere. If it is a honeymoon, anniversary, or proposal, tell us early and we will recommend the best boat and help plan a surprise.',
    },
    {
      question: 'Can solo travelers book without renting a full boat?',
      answer: 'Yes. With Cabin Cruises Phuket, you can book by the cabin. It is ideal for solo travelers, couples, or small friend groups who want a multi-day sailing experience at a lower cost than a private charter.',
    },
    {
      question: 'What is included in a crewed sailing charter?',
      answer: 'Inclusions vary by boat, but crewed charters typically include the boat, crew, all meals, safety equipment, and standard onboard setup. Extras like drinks, park fees, and special setups depend on the vessel and route. We confirm everything upfront.',
    },
    {
      question: 'Do we need a license for bareboat charter Phuket?',
      answer: 'Usually yes. Bareboat charters typically require a valid license and strong proof of experience. If you are unsure, we can recommend a crewed charter instead or discuss what is required based on your sailing background.',
    },
    {
      question: 'Can you help us choose the best itinerary?',
      answer: 'Yes. Share your dates, number of nights, group size, and priorities (snorkeling, beaches, quiet islands, adventure). We will recommend a realistic route that suits the season and gives you the best overall experience.',
    },
  ]

  return (
    <section id="faqs" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading subtitle="Quick answers to common questions about sailing in Phuket">
          Frequently Asked Questions
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
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-ocean-600 via-ocean-700 to-ocean-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-48 sm:w-72 h-48 sm:h-72 bg-sunset-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-64 sm:w-96 h-64 sm:h-96 bg-ocean-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-white mb-8 sm:mb-10 md:mb-12 text-2xl sm:text-3xl md:text-4xl">Ready to plan your Phuket Sailing Charter?</h2>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center max-w-xl mx-auto">
          <a
            href="tel:+6661234562"
            className="group flex items-center justify-center gap-2 sm:gap-3 bg-white hover:bg-ocean-50 text-ocean-700 font-bold px-6 sm:px-8 py-4 sm:py-5 rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 w-full sm:w-auto"
          >
            <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="text-base sm:text-lg">Call Now</span>
          </a>

          <a
            href="https://wa.me/6661234562"
            className="group flex items-center justify-center gap-2 sm:gap-3 bg-green-500 hover:bg-green-600 text-white font-bold px-6 sm:px-8 py-4 sm:py-5 rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 w-full sm:w-auto"
          >
            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="text-base sm:text-lg">WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  )
}
