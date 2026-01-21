import Image from 'next/image'
import { CTAButton } from '@/components/shared/CTAButton'
import { ContactCards } from '@/components/shared/ContactCards'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { Phone, Mail, MessageCircle } from 'lucide-react'

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
      
      <div className="relative z-10 max-w-7xl mx-auto container-padding w-full py-20">
        <div className="max-w-3xl">
          <h1 className="font-[family-name:var(--font-playfair)] text-white mb-6 leading-[1.2] drop-shadow-2xl text-5xl md:text-6xl lg:text-7xl font-normal">
            Phuket Sailing
          </h1>
          
          <p className="text-lg md:text-xl mb-8 text-white drop-shadow-lg leading-relaxed">
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
    <section className="bg-white py-12">
      <div className="max-w-5xl mx-auto container-padding">
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
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-center gap-1 flex-wrap">
            {linksRow1.map((link, index) => (
              <span key={link.href} className="flex items-center">
                <a
                  href={link.href}
                  className="text-white hover:text-[#ca8a44] transition-colors duration-300 text-sm whitespace-nowrap px-3 py-1"
                >
                  {link.label}
                </a>
                {index < linksRow1.length - 1 && (
                  <span className="text-white/40 text-sm">|</span>
                )}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-center gap-1 flex-wrap">
            {linksRow2.map((link, index) => (
              <span key={link.href} className="flex items-center">
                <a
                  href={link.href}
                  className="text-white hover:text-[#ca8a44] transition-colors duration-300 text-sm whitespace-nowrap px-3 py-1"
                >
                  {link.label}
                </a>
                {index < linksRow2.length - 1 && (
                  <span className="text-white/40 text-sm">|</span>
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
    <section id="charter-style">
      <div className="max-w-7xl mx-auto container-padding">
        <SectionHeading subtitle="Find the perfect boat and trip style for your Phuket sailing adventure">
          Choose Your Charter Style
        </SectionHeading>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {styles.map((style, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg card-hover">
              <div className="relative h-56">
                <Image
                  src={style.image}
                  alt={style.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-3">{style.title}</h3>
                <p className="text-neutral-600 mb-4 leading-relaxed">{style.description}</p>
                <a href={style.link} className="text-[#ca8a44] font-semibold hover:text-[#b67934] transition-colors">
                  {style.linkText} →
                </a>
              </div>
            </div>
          ))}
        </div>
        
      </div>
      
      <div className="bg-[#164e63] py-8 mt-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Not sure what fits best?</h3>
          
          <p className="text-white/90 text-base md:text-lg mb-6">
            Send your dates + group size, and we'll recommend the best match.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="inline-flex items-center justify-center px-6 py-3 text-base font-bold text-white bg-[#ca8a44] rounded-lg hover:bg-[#b67934] transition-all duration-300">
              Get a Fast Quote
            </button>
            <button className="inline-flex items-center justify-center px-6 py-3 text-base font-bold text-white bg-green-600 rounded-lg hover:bg-green-700 transition-all duration-300">
              <MessageCircle className="mr-2 h-5 w-5" />
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
    <section id="sailing-phuket" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image - Left Side */}
          <div className="relative h-[500px] lg:h-[600px]">
            <Image
              src="/assets/images/home/phuket.jpg"
              alt="Sailing in Phuket"
              fill
              className="object-cover rounded-2xl"
            />
          </div>
          
          {/* Text Content - Right Side */}
          <div className="w-full">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#164e63] mb-6">
              Sailing Phuket
            </h2>
            
            <p className="text-base md:text-lg text-neutral-700 leading-relaxed mb-8">
              Phuket is one of the best sailing hubs in Southeast Asia. Distances between islands are perfect for day trips or multi-night routes. You can choose calm bays, scenic limestone landscapes, snorkeling stops, or remote anchorages that feel far from crowds.
            </p>
            
            <h3 className="text-lg md:text-xl font-bold text-[#164e63] mb-6">
              This is what makes Sailing Phuket special:
            </h3>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-[#ca8a44] text-2xl mt-0.5 flex-shrink-0">✓</span>
                <span className="text-neutral-700 text-base md:text-lg leading-relaxed">Warm water and tropical island scenery</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#ca8a44] text-2xl mt-0.5 flex-shrink-0">✓</span>
                <span className="text-neutral-700 text-base md:text-lg leading-relaxed">Routes for every mood: relaxed, romantic, adventurous</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#ca8a44] text-2xl mt-0.5 flex-shrink-0">✓</span>
                <span className="text-neutral-700 text-base md:text-lg leading-relaxed">Options for every group: families, couples, corporate teams, friends, solo travelers</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#ca8a44] text-2xl mt-0.5 flex-shrink-0">✓</span>
                <span className="text-neutral-700 text-base md:text-lg leading-relaxed">Day trips, sunset sails, or multi-day exploration</span>
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
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto container-padding">
        <h2 className="text-3xl md:text-4xl font-bold text-[#164e63] text-center mb-4">
          What type of trip are you planning?
        </h2>
        <p className="text-center text-neutral-600 mb-12 text-lg">Here are the three most common starting points:</p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {tripTypes.map((type, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-56">
                <Image
                  src={type.image}
                  alt={type.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#164e63] mb-3">{type.title}</h3>
                <p className="text-neutral-600 leading-relaxed mb-4">{type.description}</p>
                <a href="#" className="text-[#ca8a44] font-semibold hover:text-[#b67934] transition-colors inline-flex items-center gap-1">
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
    <section id="overnight" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/home/overnight-sailing.webp"
          alt="Overnight Sailing Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#164e63]/75"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto container-padding">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-center">
          Overnight Sailing Trips Phuket
        </h2>
        
        <p className="text-white text-base md:text-lg mb-10 text-center max-w-3xl mx-auto leading-relaxed">
          If you want the trip that people talk about for years, choose overnight sailing. Day trips are fun, but overnight is where Phuket becomes quiet, beautiful, and unhurried.
        </p>
        
        <div className="max-w-2xl mx-auto mb-10">
          <div className="relative h-72 md:h-96 rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="/assets/images/home/overnight-sailing.webp"
              alt="Overnight Sailing Catamaran at Sunset"
              fill
              className="object-cover"
            />
          </div>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
            Why overnight sailing feels different
          </h3>
          
          <div className="space-y-4">
          <div className="flex items-start gap-4">
            <span className="text-[#ca8a44] text-xl mt-1 flex-shrink-0">✓</span>
            <p className="text-base md:text-lg text-white">You don't rush back to the pier</p>
          </div>
          
          <div className="flex items-start gap-4">
            <span className="text-[#ca8a44] text-xl mt-1 flex-shrink-0">✓</span>
            <p className="text-base md:text-lg text-white">You swim when bays are calm</p>
          </div>
          
          <div className="flex items-start gap-4">
            <span className="text-[#ca8a44] text-xl mt-1 flex-shrink-0">✓</span>
            <p className="text-base md:text-lg text-white">You enjoy sunset and sunrise at anchor</p>
          </div>
          
          <div className="flex items-start gap-4">
            <span className="text-[#ca8a44] text-xl mt-1 flex-shrink-0">✓</span>
            <p className="text-base md:text-lg text-white">You can reach the best islands with fewer crowds</p>
          </div>
          
          <div className="flex items-start gap-4">
            <span className="text-[#ca8a44] text-xl mt-1 flex-shrink-0">✓</span>
            <p className="text-base md:text-lg text-white">You get time for snorkeling, beaches, viewpoints, and "do nothing" moments</p>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}

function OvernightRecommendationSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto container-padding">
        <div className="bg-gradient-to-br from-[#164e63] to-[#0a3a4a] rounded-xl p-8 md:p-12 text-white shadow-xl">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight text-white">
            Our honest recommendation: 5 nights minimum (if you can)
          </h2>
          
          <p className="text-base md:text-lg mb-10 text-white leading-relaxed max-w-4xl">
            If your schedule allows, 5+ nights is the sweet spot. That's when you can reach more remote areas and enjoy a calmer experience than the busiest hotspots.
          </p>
          
          <h3 className="text-lg md:text-xl font-bold mb-6 text-white">
            Three standout "off-the-beaten-track" destinations:
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/30 hover:border-white/60 hover:bg-white/20 transition-all duration-300">
              <h4 className="text-lg md:text-xl font-bold mb-3 text-white">Koh Rok</h4>
              <p className="text-white/95 text-sm md:text-base">Clear water and a quieter, more remote feel</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/30 hover:border-white/60 hover:bg-white/20 transition-all duration-300">
              <h4 className="text-lg md:text-xl font-bold mb-3 text-white">Koh Ha</h4>
              <p className="text-white/95 text-sm md:text-base">Beautiful lagoons and amazing snorkeling conditions</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/30 hover:border-white/60 hover:bg-white/20 transition-all duration-300">
              <h4 className="text-lg md:text-xl font-bold mb-3 text-white">Butang Islands (7+ nights)</h4>
              <p className="text-white/95 text-sm md:text-base">Fewest crowds, amazing landscapes over and under water</p>
            </div>
          </div>
          
          <p className="text-base md:text-lg text-white leading-relaxed">
            These areas are typically far less crowded than the most popular day-trip zones like Phang Nga Bay or Phi Phi islands. That's why we recommend five nights minimum when guests want the best version of Phuket sailing.
          </p>
        </div>
        
        <div className="mt-12 bg-white rounded-xl p-10 md:p-12 shadow-xl border border-gray-100">
          <h3 className="text-3xl md:text-4xl font-bold text-[#164e63] mb-6">
            Shorter overnights still work
          </h3>
          
          <p className="text-neutral-600 text-lg md:text-xl mb-8 leading-relaxed">
            If you have fewer nights, we'll plan a route that feels realistic and relaxed:
          </p>
          
          <div className="space-y-5 mb-10">
            <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
              <span className="text-[#ca8a44] text-2xl mt-1 flex-shrink-0">•</span>
              <div className="text-base md:text-lg">
                <span className="font-bold text-[#164e63] text-lg">1–2 nights:</span>
                <span className="text-neutral-700"> nearby highlights like Phi Phi and Racha Islands</span>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
              <span className="text-[#ca8a44] text-2xl mt-1 flex-shrink-0">•</span>
              <div className="text-base md:text-lg">
                <span className="font-bold text-[#164e63] text-lg">3–4 nights:</span>
                <span className="text-neutral-700"> a bigger loop with more variety of destinations</span>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
              <span className="text-[#ca8a44] text-2xl mt-1 flex-shrink-0">•</span>
              <div className="text-base md:text-lg">
                <span className="font-bold text-[#164e63] text-lg">5-14 nights:</span>
                <span className="text-neutral-700"> absolute best destinations and deeper exploration of Thai islands and culture</span>
              </div>
            </div>
          </div>
          
          <div className="text-center bg-gradient-to-br from-gray-50 to-white rounded-lg p-8 border border-gray-100">
            <p className="text-lg md:text-xl text-neutral-700 mb-8 leading-relaxed font-medium">
              Tell us your dates and number of nights and we'll recommend the best route.
            </p>
            
            <button className="inline-flex items-center justify-center px-10 py-5 text-lg md:text-xl font-bold text-white bg-gradient-to-r from-[#ca8a44] to-[#b67934] rounded-lg hover:from-[#b67934] hover:to-[#a66824] transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 transform">
              Tell us your dates and number of nights
            </button>
            
            <p className="mt-8">
              <a href="#overnight" className="text-[#ca8a44] hover:text-[#b67934] font-bold text-base md:text-lg inline-flex items-center gap-2 transition-colors duration-200">
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
    <section id="catamaran-vs-sailing" className="section-padding bg-ocean-50">
      <div className="max-w-6xl mx-auto container-padding">
        <SectionHeading subtitle="If you are stuck choosing, this quick guide usually solves it">
          Catamaran vs Sailing Yacht
        </SectionHeading>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
              <Image
                src="/assets/images/home/catamaran.webp"
                alt="Catamaran"
                fill
                className="object-cover"
              />
            </div>
            
            <h3 className="mb-6">Choose a catamaran if you want</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-ocean-600 font-bold text-xl">✓</span>
                <span>More space and stability (great for kids and groups)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-ocean-600 font-bold text-xl">✓</span>
                <span>More shade and lounging areas</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-ocean-600 font-bold text-xl">✓</span>
                <span>A floating villa feel</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-ocean-600 font-bold text-xl">✓</span>
                <span>A very social layout</span>
              </li>
            </ul>
            
            <a href="#" className="text-[#ca8a44] font-semibold hover:text-[#b67934] transition-colors">
              Compare options: Catamaran Charters in Phuket →
            </a>
          </div>
          
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
              <Image
                src="/assets/images/home/sailing-yacht.jpg"
                alt="Sailing Yacht"
                fill
                className="object-cover"
              />
            </div>
            
            <h3 className="mb-6">Choose a sailing yacht if you want</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-ocean-600 font-bold text-xl">✓</span>
                <span>A more classic sailing sensation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-ocean-600 font-bold text-xl">✓</span>
                <span>A sportier, authentic sailboat experience</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-ocean-600 font-bold text-xl">✓</span>
                <span>Great value for couples and smaller groups</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-ocean-600 font-bold text-xl">✓</span>
                <span>A cozy, romantic atmosphere</span>
              </li>
            </ul>
            
            <a href="#" className="text-[#ca8a44] font-semibold hover:text-[#b67934] transition-colors">
              Compare options: Sailing Yachts in Phuket →
            </a>
          </div>
        </div>
        
      </div>
      
      <div className="bg-[#164e63] py-12 mt-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="mb-4 text-white text-3xl font-bold">Still unsure?</h3>
          <p className="text-white/90 mb-8 text-lg">Message us your group size + comfort preferences and we will recommend the best fit.</p>
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
    <section id="routes" className="section-padding">
      <div className="max-w-7xl mx-auto container-padding">
        <SectionHeading subtitle="Use these as inspiration. We will finalize the best route for your season and trip length">
          Most Popular Routes
        </SectionHeading>
        
        <div className="grid md:grid-cols-2 gap-8">
          {routes.map((route, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg card-hover">
              <div className="relative h-64">
                <Image
                  src={route.image}
                  alt={route.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-3">{route.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{route.description}</p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
      
      <div className="bg-[#164e63] py-6 mt-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="mb-3 text-white text-xl md:text-2xl font-bold">Want help choosing?</h3>
          <p className="text-[#ca8a44] font-semibold text-base md:text-lg">
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
    <section className="section-padding bg-ocean-50">
      <div className="max-w-7xl mx-auto container-padding">
        <SectionHeading subtitle="Sailing adventures for everyone - families, couples, groups, and solo travelers">
          Who Phuket Sailing is perfect for
        </SectionHeading>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg card-hover">
              <div className="relative h-56">
                <Image
                  src={audience.image}
                  alt={audience.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-3">{audience.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{audience.description}</p>
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
    <section id="included" className="section-padding">
      <div className="max-w-6xl mx-auto container-padding">
        <SectionHeading subtitle="Inclusions vary by boat and trip type, but we keep it clear before you confirm anything">
          What is Included
        </SectionHeading>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-ocean-50 rounded-lg p-8">
            <h3 className="mb-6">Typically included on crewed charters</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-ocean-600 font-bold text-xl">✓</span>
                <span>Professional crew (not for bareboat charters)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-ocean-600 font-bold text-xl">✓</span>
                <span>Safety equipment</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-ocean-600 font-bold text-xl">✓</span>
                <span>Standard onboard setup and facilities</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-ocean-600 font-bold text-xl">✓</span>
                <span>Route planning by our management team, support and local guidance</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg p-8 border-2 border-ocean-200">
            <h3 className="mb-6">Often optional (depends on boat / route)</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-ocean-600">•</span>
                <span>Meals and drinks packages</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-ocean-600">•</span>
                <span>National park fees (route-dependent)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-ocean-600">•</span>
                <span>Special occasion setup</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-ocean-600">•</span>
                <span>Extra water toys</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-ocean-600">•</span>
                <span>Everything that is legal can be arranged with enough time</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="mb-6">What to Pack</h3>
            <p className="mb-4 text-neutral-700">Keep it simple:</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <span className="text-ocean-600">•</span>
                <span>Swimwear (bring ideally 3 sets as you might not wear anything else)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-ocean-600">•</span>
                <span>Sunscreen, hat, sunglasses</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-ocean-600">•</span>
                <span>Light cover-up / rash guard for snorkeling (we sell them at 500 THB)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-ocean-600">•</span>
                <span>Waterproof pouch for phone</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-ocean-600">•</span>
                <span>Shoes that can get wet, but are suitable for hiking</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-ocean-600">•</span>
                <span>Any personal medication (we have all kind of medications onboard seasickness, antibiotics, etc.)</span>
              </li>
            </ul>
          </div>
          
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/assets/images/home/packing.webp"
              alt="What to pack"
              fill
              className="object-cover"
            />
          </div>
        </div>
        
      </div>
      
      <div className="bg-[#164e63] py-6 mt-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1 bg-[#ca8a44] rounded-full text-sm font-bold mb-3">
            ✨ EXCLUSIVE OFFER
          </div>
          <h3 className="text-white mb-4 text-2xl md:text-3xl font-bold">Want a simple, itemized quote?</h3>
          <CTAButton trackingId="included-quote">💰 Get a Fast Quote</CTAButton>
        </div>
      </div>
    </section>
  )
}

function PricingSection() {
  return (
    <section id="pricing" className="section-padding bg-ocean-50">
      <div className="max-w-6xl mx-auto container-padding">
        <SectionHeading subtitle="Prices depend on a few factors. This transparency helps you choose quickly">
          How Pricing Works
        </SectionHeading>
        
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 mt-8">
          <div className="bg-white rounded-xl px-6 py-8 md:px-8 md:py-10 shadow-xl border-2 border-ocean-200/50">
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-ocean-500 to-ocean-600 rounded-lg flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-ocean-700">Main pricing drivers</h3>
            </div>
            <ul className="space-y-4 md:space-y-6 px-2">
              <li className="flex items-start gap-3 md:gap-4">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-ocean-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-base md:text-lg">Boat type</span>
              </li>
              <li className="flex items-start gap-3 md:gap-4">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-ocean-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-base md:text-lg">Private charter vs cabin cruise</span>
              </li>
              <li className="flex items-start gap-3 md:gap-4">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-ocean-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-base md:text-lg">Trip length (day / overnight)</span>
              </li>
              <li className="flex items-start gap-3 md:gap-4">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-ocean-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-base md:text-lg">Route & Destination</span>
              </li>
              <li className="flex items-start gap-3 md:gap-4">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-ocean-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-base md:text-lg">Season and demand</span>
              </li>
              <li className="flex items-start gap-3 md:gap-4">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-ocean-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-base md:text-lg">Booking Timing</span>
              </li>
              <li className="flex items-start gap-3 md:gap-4">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-ocean-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-base md:text-lg">Group size and comfort level</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-ocean-600 to-ocean-700 rounded-xl px-6 py-8 md:px-8 md:py-10 shadow-2xl border-2 border-ocean-500/50">
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white">Price anchors</h3>
            </div>
            <ul className="space-y-4 md:space-y-6 px-2">
              <li className="flex items-start gap-3 md:gap-4 pb-4 md:pb-5 border-b border-white/20">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-cyan-300 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <div className="flex-1">
                  <div className="text-white/90 text-sm md:text-base mb-1">Day sailing trips:</div>
                  <div className="text-white font-bold text-lg md:text-xl">from 29,900 THB</div>
                </div>
              </li>
              <li className="flex items-start gap-3 md:gap-4 pb-4 md:pb-5 border-b border-white/20">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-cyan-300 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
                <div className="flex-1">
                  <div className="text-white/90 text-sm md:text-base mb-1">Sunset sailing:</div>
                  <div className="text-white font-bold text-lg md:text-xl">from 24,900 THB</div>
                </div>
              </li>
              <li className="flex items-start gap-3 md:gap-4 pb-4 md:pb-5 border-b border-white/20">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-cyan-300 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                </svg>
                <div className="flex-1">
                  <div className="text-white/90 text-sm md:text-base mb-1">Overnight charters:</div>
                  <div className="text-white font-bold text-lg md:text-xl">from 1000 Euro per night</div>
                </div>
              </li>
              <li className="flex items-start gap-3 md:gap-4">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-cyan-300 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <div className="flex-1">
                  <div className="text-white/90 text-sm md:text-base mb-1">Cabin cruises:</div>
                  <div className="text-white font-bold text-lg md:text-xl">from 1998 Euro per cabin for 5 nights</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
      </div>
      
      <div className="bg-[#164e63] py-6 mt-8 md:mt-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1 bg-green-500 text-white rounded-full font-bold text-xs md:text-sm mb-3">
            💎 BEST VALUE GUARANTEE
          </div>
          <h3 className="mb-3 text-white text-2xl md:text-3xl font-bold">Fastest path to your quote</h3>
          <p className="text-white/90 mb-6 text-base md:text-lg max-w-2xl mx-auto">Send your dates + group size, and we will recommend the best options with clear pricing.</p>
          <CTAButton trackingId="pricing-quote">🎁 Get Your Personalized Quote</CTAButton>
        </div>
      </div>
    </section>
  )
}

function BookingProcessSection() {
  const steps = [
    'Send dates + group size and tell us what experience you are looking for.',
    'Choose your style (sailing yacht / catamaran / cabin cruise / bareboat)',
    'We recommend the best boats + routes (based on season and goals)',
    'Confirm and relax',
  ]

  return (
    <section id="booking" className="section-padding">
      <div className="max-w-6xl mx-auto container-padding">
        <SectionHeading subtitle="Simple and fast - from inquiry to sailing in just 4 easy steps">
          How Booking Works
        </SectionHeading>
        
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-ocean-500 to-ocean-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
                {index + 1}
              </div>
              <p className="text-neutral-700 leading-relaxed">{step}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-ocean-50 rounded-lg p-8">
          <h3 className="mb-6">The 20-second inquiry checklist</h3>
          <ul className="grid md:grid-cols-2 gap-4 mb-8">
            <li className="flex items-start gap-3">
              <span className="text-ocean-600">✓</span>
              <span>How many guests?</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-ocean-600">✓</span>
              <span>Day trip or how many nights?</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-ocean-600">✓</span>
              <span>Preferred yacht?</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-ocean-600">✓</span>
              <span>Family / romantic / adventure / corporate?</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-ocean-600">✓</span>
              <span>Must-see islands (if any)?</span>
            </li>
          </ul>
          
          <div className="text-center">
            <CTAButton trackingId="booking-inquire">🚀 INQUIRE NOW - GET INSTANT RESPONSE</CTAButton>
            <p className="mt-4 text-sm text-ocean-600 font-semibold">
              ⏱️ Average response time: Under 2 hours
            </p>
          </div>
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
    <section className="section-padding bg-ocean-600 text-white">
      <div className="max-w-6xl mx-auto container-padding">
        <h2 className="text-center text-white mb-12">Explore All Pages</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {pages.map((page, index) => (
            <a
              key={index}
              href="#"
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 card-hover"
            >
              <h3 className="text-xl text-white">{page} →</h3>
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
    <section id="faqs" className="section-padding bg-white">
      <div className="max-w-4xl mx-auto container-padding">
        <SectionHeading subtitle="Quick answers to common questions about sailing in Phuket">
          Frequently Asked Questions
        </SectionHeading>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-ocean-50 rounded-lg p-6 border border-ocean-200">
              <h2 className="text-xl font-bold text-ocean-900 mb-3">{faq.question}</h2>
              <p className="text-neutral-700 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FinalCTASection() {
  return (
    <section className="section-padding bg-gradient-to-br from-ocean-600 via-ocean-700 to-ocean-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-sunset-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-ocean-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-4xl mx-auto container-padding text-center relative z-10">
        <h2 className="text-white mb-12">Ready to plan your Phuket Sailing Charter?</h2>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-xl mx-auto">
          <a
            href="tel:+6661234562"
            className="group flex items-center justify-center gap-3 bg-white hover:bg-ocean-50 text-ocean-700 font-bold px-8 py-5 rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 w-full sm:w-auto"
          >
            <Phone className="w-6 h-6" />
            <span className="text-lg">Call Now</span>
          </a>
          
          <a
            href="https://wa.me/6661234562"
            className="group flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-5 rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 w-full sm:w-auto"
          >
            <MessageCircle className="w-6 h-6" />
            <span className="text-lg">WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  )
}
