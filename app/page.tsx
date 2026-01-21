import Image from 'next/image'
import { CTAButton } from '@/components/shared/CTAButton'
import { ContactCards } from '@/components/shared/ContactCards'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { Phone, MessageCircle } from 'lucide-react'

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
            Plan your next Sailing Phuket experience in minutes. Choose your boat style, pick the trip length, and we'll recommend the best route for your dates—fast, clear, and holiday-easy.
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
    <section className="bg-white py-8 sm:py-10 md:py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ContactCards />
      </div>
    </section>
  )
}

function JumpLinks() {
  const linksRow1 = [
    { href: '#charter-style', label: 'Choose Your Charter Style' },
    { href: '#sailing-phuket', label: 'Sailing Phuket' },
    { href: '#overnight', label: 'Overnight Sailing Trips Phuket' },
    { href: '#catamaran-vs-sailing', label: 'Catamaran vs Sailing Yachts' },
    { href: '#routes', label: 'Most Popular Routes' },
  ]

  const linksRow2 = [
    { href: '#included', label: "What's Included" },
    { href: '#pricing', label: 'How Pricing Works' },
    { href: '#booking', label: 'How Booking Works' },
    { href: '#faqs', label: 'FAQs' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-[#164e63] shadow-lg">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-2 sm:py-3">
        <div className="flex flex-col gap-1 sm:gap-2">
          <div className="flex items-center justify-center gap-0.5 sm:gap-1 flex-wrap">
            {linksRow1.map((link, index) => (
              <span key={link.href} className="flex items-center">
                <a
                  href={link.href}
                  className="text-white hover:text-[#ca8a44] transition-colors duration-300 text-xs sm:text-sm whitespace-nowrap px-2 sm:px-3 py-1"
                >
                  {link.label}
                </a>
                {index < linksRow1.length - 1 && (
                  <span className="text-white/40 text-xs sm:text-sm hidden sm:inline">|</span>
                )}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-center gap-0.5 sm:gap-1 flex-wrap">
            {linksRow2.map((link, index) => (
              <span key={link.href} className="flex items-center">
                <a
                  href={link.href}
                  className="text-white hover:text-[#ca8a44] transition-colors duration-300 text-xs sm:text-sm whitespace-nowrap px-2 sm:px-3 py-1"
                >
                  {link.label}
                </a>
                {index < linksRow2.length - 1 && (
                  <span className="text-white/40 text-xs sm:text-sm hidden sm:inline">|</span>
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
  const styles = [
    {
      title: 'Private Sailing Yachts in Phuket',
      description: 'A sailing yacht is the classic choice. You get the true feeling of sailing, a relaxed pace, and a real boat holiday vibe. Perfect for couples, smaller groups, and anyone who loves the romance of sails and sea breeze.',
      link: '#',
      linkText: 'Explore: Sailing Yachts in Phuket',
      image: '/assets/images/home/sailing-yacht.jpg',
    },
    {
      title: 'Catamaran Charters in Phuket',
      description: 'Catamarans are all about space and comfort. They are stable, family-friendly, and great for groups who want more lounging areas, shade, and a social deck layout.',
      link: '#',
      linkText: 'Explore: Catamaran Charters in Phuket',
      image: '/assets/images/home/catamaran.webp',
    },
    {
      title: 'Overnight & Multi-Day Sailing',
      description: 'If you want the best overall experience, go overnight. You get quiet mornings at anchor, less rushing, and routes day trips simply cannot reach.',
      link: '#',
      linkText: 'Explore: Overnight Sailing Trips Phuket',
      image: '/assets/images/home/overnight-sailing.webp',
    },
    {
      title: 'Cabin Cruises Phuket',
      description: 'Want a multi-day sailing trip without renting a whole private boat? Cabin cruises let you book by the cabin. Ideal for solo travelers, couples, and small groups who still want incredible island-hopping at a lower cost.',
      link: '#',
      linkText: 'Explore: Cabin Cruises Phuket',
      image: '/assets/images/home/cabin-cruise.avif',
    },
    {
      title: 'Bareboat Charter Phuket',
      description: 'For confident sailors who want full freedom. Bareboat usually requires a license and proven sailing experience. If you qualify, it is an amazing way to explore on your own terms.',
      link: '#',
      linkText: 'Explore: Bareboat Charter Phuket',
      image: '/assets/images/home/day-sailing.webp',
    },
  ]

  return (
    <section id="charter-style" className="pt-12 sm:pt-16 md:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 md:pb-20">
        <SectionHeading subtitle="Find the perfect boat and trip style for your Phuket sailing adventure">
          Choose Your Charter Style
        </SectionHeading>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {styles.map((style, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg card-hover">
              <div className="relative h-48 sm:h-56">
                <Image
                  src={style.image}
                  alt={style.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl mb-2 sm:mb-3">{style.title}</h3>
                <p className="text-neutral-600 mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">{style.description}</p>
                <a href={style.link} className="text-[#ca8a44] font-semibold hover:text-[#b67934] transition-colors text-sm sm:text-base">
                  {style.linkText} →
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>

      <div className="bg-[#164e63] py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3">Not sure what fits best?</h3>
          <p className="text-white/90 text-sm sm:text-base mb-4">
            Send your dates + group size, and we'll recommend the best match.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center">
            <button className="inline-flex items-center justify-center px-4 sm:px-5 py-2.5 text-sm sm:text-base font-bold text-white bg-[#ca8a44] rounded-lg hover:bg-[#b67934] transition-all duration-300">
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
          {/* Image - Left Side */}
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
            <Image
              src="/assets/images/home/phuket.jpg"
              alt="Sailing in Phuket"
              fill
              className="object-cover rounded-xl sm:rounded-2xl"
            />
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
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#164e63] text-center mb-3 sm:mb-4">
          What type of trip are you planning?
        </h2>
        <p className="text-center text-neutral-600 mb-8 sm:mb-10 md:mb-12 text-base sm:text-lg">Here are the three most common starting points:</p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {tripTypes.map((type, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 sm:h-56">
                <Image
                  src={type.image}
                  alt={type.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-[#164e63] mb-2 sm:mb-3">{type.title}</h3>
                <p className="text-neutral-600 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">{type.description}</p>
                <a href="#" className="text-[#ca8a44] font-semibold hover:text-[#b67934] transition-colors inline-flex items-center gap-1 text-sm sm:text-base">
                  Explore →
                </a>
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
    <section id="overnight" className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/home/overnight-sailing.webp"
          alt="Overnight Sailing Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#164e63]/75"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 text-center">
          Overnight Sailing Trips Phuket
        </h2>

        <p className="text-white text-sm sm:text-base md:text-lg mb-8 sm:mb-10 text-center max-w-3xl mx-auto leading-relaxed">
          If you want the trip that people talk about for years, choose overnight sailing. Day trips are fun, but overnight is where Phuket becomes quiet, beautiful, and unhurried.
        </p>

        <div className="max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="relative h-56 sm:h-72 md:h-96 rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="/assets/images/home/overnight-sailing.webp"
              alt="Overnight Sailing Catamaran at Sunset"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 sm:mb-8">
            Why overnight sailing feels different
          </h3>

          <div className="space-y-3 sm:space-y-4">
          <div className="flex items-start gap-3 sm:gap-4">
            <span className="text-[#ca8a44] text-lg sm:text-xl mt-1 flex-shrink-0">✓</span>
            <p className="text-sm sm:text-base md:text-lg text-white">You don't rush back to the pier</p>
          </div>

          <div className="flex items-start gap-3 sm:gap-4">
            <span className="text-[#ca8a44] text-lg sm:text-xl mt-1 flex-shrink-0">✓</span>
            <p className="text-sm sm:text-base md:text-lg text-white">You swim when bays are calm</p>
          </div>

          <div className="flex items-start gap-3 sm:gap-4">
            <span className="text-[#ca8a44] text-lg sm:text-xl mt-1 flex-shrink-0">✓</span>
            <p className="text-sm sm:text-base md:text-lg text-white">You enjoy sunset and sunrise at anchor</p>
          </div>

          <div className="flex items-start gap-3 sm:gap-4">
            <span className="text-[#ca8a44] text-lg sm:text-xl mt-1 flex-shrink-0">✓</span>
            <p className="text-sm sm:text-base md:text-lg text-white">You can reach the best islands with fewer crowds</p>
          </div>

          <div className="flex items-start gap-3 sm:gap-4">
            <span className="text-[#ca8a44] text-lg sm:text-xl mt-1 flex-shrink-0">✓</span>
            <p className="text-sm sm:text-base md:text-lg text-white">You get time for snorkeling, beaches, viewpoints, and "do nothing" moments</p>
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#164e63] to-[#0a3a4a] rounded-xl p-6 sm:p-8 md:p-12 text-white shadow-xl">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 leading-tight text-white">
            Our honest recommendation: 5 nights minimum (if you can)
          </h2>

          <p className="text-sm sm:text-base md:text-lg mb-8 sm:mb-10 text-white leading-relaxed max-w-4xl">
            If your schedule allows, 5+ nights is the sweet spot. That's when you can reach more remote areas and enjoy a calmer experience than the busiest hotspots.
          </p>

          <h3 className="text-base sm:text-lg md:text-xl font-bold mb-4 sm:mb-6 text-white">
            Three standout "off-the-beaten-track" destinations:
          </h3>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-white/30 hover:border-white/60 hover:bg-white/20 transition-all duration-300">
              <h4 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-white">Koh Rok</h4>
              <p className="text-white/95 text-xs sm:text-sm md:text-base">Clear water and a quieter, more remote feel</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-white/30 hover:border-white/60 hover:bg-white/20 transition-all duration-300">
              <h4 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-white">Koh Ha</h4>
              <p className="text-white/95 text-xs sm:text-sm md:text-base">Beautiful lagoons and amazing snorkeling conditions</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-white/30 hover:border-white/60 hover:bg-white/20 transition-all duration-300 sm:col-span-2 md:col-span-1">
              <h4 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-white">Butang Islands (7+ nights)</h4>
              <p className="text-white/95 text-xs sm:text-sm md:text-base">Fewest crowds, amazing landscapes over and under water</p>
            </div>
          </div>

          <p className="text-sm sm:text-base md:text-lg text-white leading-relaxed">
            These areas are typically far less crowded than the most popular day-trip zones like Phang Nga Bay or Phi Phi islands. That's why we recommend five nights minimum when guests want the best version of Phuket sailing.
          </p>
        </div>

        <div className="mt-8 sm:mt-10 md:mt-12 bg-white rounded-xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-xl border border-gray-100">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#164e63] mb-4 sm:mb-6">
            Shorter overnights still work
          </h3>

          <p className="text-neutral-600 text-base sm:text-lg md:text-xl mb-6 sm:mb-8 leading-relaxed">
            If you have fewer nights, we'll plan a route that feels realistic and relaxed:
          </p>

          <div className="space-y-4 sm:space-y-5 mb-8 sm:mb-10">
            <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
              <span className="text-[#ca8a44] text-xl sm:text-2xl mt-1 flex-shrink-0">•</span>
              <div className="text-sm sm:text-base md:text-lg">
                <span className="font-bold text-[#164e63] text-base sm:text-lg">1–2 nights:</span>
                <span className="text-neutral-700"> nearby highlights like Phi Phi and Racha Islands</span>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
              <span className="text-[#ca8a44] text-xl sm:text-2xl mt-1 flex-shrink-0">•</span>
              <div className="text-sm sm:text-base md:text-lg">
                <span className="font-bold text-[#164e63] text-base sm:text-lg">3–4 nights:</span>
                <span className="text-neutral-700"> a bigger loop with more variety of destinations</span>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
              <span className="text-[#ca8a44] text-xl sm:text-2xl mt-1 flex-shrink-0">•</span>
              <div className="text-sm sm:text-base md:text-lg">
                <span className="font-bold text-[#164e63] text-base sm:text-lg">5-14 nights:</span>
                <span className="text-neutral-700"> absolute best destinations and deeper exploration of Thai islands and culture</span>
              </div>
            </div>
          </div>

          <div className="text-center bg-gradient-to-br from-gray-50 to-white rounded-lg p-6 sm:p-8 border border-gray-100">
            <p className="text-base sm:text-lg md:text-xl text-neutral-700 mb-6 sm:mb-8 leading-relaxed font-medium">
              Tell us your dates and number of nights and we'll recommend the best route.
            </p>

            <button className="inline-flex items-center justify-center px-6 sm:px-8 md:px-10 py-4 sm:py-5 text-base sm:text-lg md:text-xl font-bold text-white bg-gradient-to-r from-[#ca8a44] to-[#b67934] rounded-lg hover:from-[#b67934] hover:to-[#a66824] transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 transform w-full sm:w-auto">
              Tell us your dates and number of nights
            </button>

            <p className="mt-6 sm:mt-8">
              <a href="#overnight" className="text-[#ca8a44] hover:text-[#b67934] font-bold text-sm sm:text-base md:text-lg inline-flex items-center gap-2 transition-colors duration-200">
                → Start here: Overnight Sailing Trips Phuket
              </a>
            </p>
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

            <a href="#" className="text-[#ca8a44] font-semibold hover:text-[#b67934] transition-colors text-sm sm:text-base">
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

            <a href="#" className="text-[#ca8a44] font-semibold hover:text-[#b67934] transition-colors text-sm sm:text-base">
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

  return (
    <section id="routes" className="pt-12 sm:pt-16 md:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 md:pb-20">
        <SectionHeading subtitle="Use these as inspiration. We will finalize the best route for your season and trip length">
          Most Popular Routes
        </SectionHeading>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {routes.map((route, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg card-hover">
              <div className="relative h-48 sm:h-56 md:h-64">
                <Image
                  src={route.image}
                  alt={route.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl mb-2 sm:mb-3">{route.title}</h3>
                <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">{route.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

      <div className="bg-[#164e63] py-5 sm:py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="mb-2 sm:mb-3 text-white text-lg sm:text-xl md:text-2xl font-bold">Want help choosing?</h3>
          <p className="text-[#ca8a44] font-semibold text-sm sm:text-base md:text-lg">
            <a href="#" className="hover:text-[#b67934]">See route ideas: Sailing Itineraries Phuket →</a>
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
          <div className="inline-block px-3 sm:px-4 py-1 bg-[#ca8a44] rounded-full text-xs sm:text-sm font-bold mb-2 sm:mb-3">
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
              <div className="absolute -top-4 left-6 w-10 h-10 bg-gradient-to-br from-[#ca8a44] to-[#b67934] rounded-full flex items-center justify-center shadow-lg border-4 border-white">
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
