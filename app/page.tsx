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
      <CharterStylesSection />
      <SailingPhuketSection />
      <OvernightSailingSection />
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
    <>
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/home/catamaran-aerial-hero.jpg"
            alt="Sailing in Phuket"
            fill
            className="object-cover brightness-75"
            priority
          />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto container-padding text-center text-white">
          <h1 className="text-white mb-6">Phuket Sailing</h1>
          
          <p className="text-xl md:text-2xl mb-10 text-white/95 max-w-4xl mx-auto leading-relaxed">
            Plan your next Sailing Phuket experience in minutes. Choose your boat style, pick the trip length, and we will recommend the best route for your dates—fast, clear, and holiday-easy.
          </p>
          
          <CTAButton trackingId="hero-quote">
            Get Your Individual Quote
          </CTAButton>
        </div>
      </section>
      
      <section className="bg-white py-12">
        <div className="max-w-5xl mx-auto container-padding">
          <ContactCards />
        </div>
      </section>
    </>
  )
}

function JumpLinks() {
  const links = [
    { href: '#charter-style', label: 'Charter Styles', icon: '⛵' },
    { href: '#sailing-phuket', label: 'Sailing Phuket', icon: '🌊' },
    { href: '#overnight', label: 'Overnight Trips', icon: '🌅' },
    { href: '#catamaran-vs-sailing', label: 'Catamaran vs Sailing', icon: '⚖️' },
    { href: '#routes', label: 'Popular Routes', icon: '🗺️' },
    { href: '#included', label: "What's Included", icon: '✓' },
    { href: '#pricing', label: 'Pricing', icon: '💰' },
    { href: '#booking', label: 'Booking', icon: '📅' },
    { href: '#faqs', label: 'FAQs', icon: '❓' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-ocean-50 via-cyan-50 to-ocean-50 border-b-2 border-ocean-200 shadow-lg">
      <div className="max-w-7xl mx-auto container-padding py-4">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9 gap-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative px-4 py-3.5 text-center font-bold text-ocean-700 hover:text-white transition-all duration-300 rounded-2xl hover:bg-gradient-to-br hover:from-ocean-600 hover:to-ocean-700 active:from-ocean-800 active:to-ocean-900 flex flex-col items-center justify-center gap-1.5 shadow-lg hover:shadow-2xl active:shadow-inner hover:scale-105 active:scale-100 bg-white"
            >
              <span className="text-3xl group-hover:scale-110 transition-transform duration-300">{link.icon}</span>
              <span className="text-xs leading-tight">{link.label}</span>
            </a>
          ))}
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
    <section id="charter-style" className="section-padding">
      <div className="max-w-7xl mx-auto container-padding">
        <SectionHeading subtitle="Find the perfect boat and trip style for your Phuket sailing adventure">
          Choose Your Charter Style
        </SectionHeading>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {styles.map((style, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover">
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
                <a href={style.link} className="text-ocean-600 font-semibold hover:text-ocean-800 transition-colors">
                  {style.linkText} →
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 relative overflow-hidden bg-gradient-to-br from-ocean-600 via-ocean-700 to-cyan-700 rounded-3xl shadow-2xl">
          <div className="absolute inset-0 bg-[url('/assets/images/home/catamaran-aerial-hero.jpg')] opacity-10 bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-ocean-900/20 to-transparent"></div>
          
          <div className="relative z-10 text-center p-12 md:p-16">
            <div className="inline-block mb-4 px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
              <span className="text-white/90 text-sm font-semibold">Need Help Choosing?</span>
            </div>
            
            <h3 className="mb-4 text-white text-3xl md:text-4xl font-bold">Not sure what fits best?</h3>
            
            <p className="text-white/95 mb-10 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Send your dates and group size, and we will recommend the perfect match for your adventure.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <CTAButton trackingId="charter-style-quote">Get a Fast Quote</CTAButton>
              <CTAButton variant="whatsapp" href="https://wa.me/6661234562" trackingId="charter-style-whatsapp">
                <MessageCircle className="mr-2 h-6 w-6" />
                WhatsApp Us
              </CTAButton>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span>Instant Response</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span>No Obligation</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span>Best Rates</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SailingPhuketSection() {
  const tripTypes = [
    {
      title: 'Day Sailing (private)',
      description: 'Ideal if you want a full day on the water with swimming, snorkeling, and island stops—without staying overnight.',
      image: '/assets/images/home/day-sailing.webp',
    },
    {
      title: 'Sunset Sailing',
      description: 'Perfect for couples, families, and celebrations. Shorter, scenic, and high-impact.',
      image: '/assets/images/home/Sunset-sailing.jpg',
    },
    {
      title: 'Overnight Sailing (best experience)',
      description: 'More time, more calm, more real holiday. You will explore deeper and avoid the rushed feeling of day-trip logistics.',
      image: '/assets/images/home/overnight-sailing.webp',
    },
  ]

  return (
    <section id="sailing-phuket" className="section-padding bg-ocean-50">
      <div className="max-w-7xl mx-auto container-padding">
        <SectionHeading subtitle="One of the best sailing destinations in Southeast Asia">
          Sailing Phuket
        </SectionHeading>
        
        <p className="text-lg text-center text-neutral-700 max-w-3xl mx-auto mb-12 leading-relaxed">
          Phuket is one of the best sailing hubs in Southeast Asia. Distances between islands are perfect for day trips or multi-night routes. You can choose calm bays, scenic limestone landscapes, snorkeling stops, or remote anchorages that feel far from crowds.
        </p>
        
        <div className="bg-white rounded-2xl p-8 mb-12">
          <h3 className="mb-6">This is what makes Sailing Phuket special:</h3>
          <ul className="grid md:grid-cols-2 gap-4">
            <li className="flex items-start gap-3">
              <span className="text-ocean-600 font-bold text-xl">✓</span>
              <span>Warm water and tropical island scenery</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-ocean-600 font-bold text-xl">✓</span>
              <span>Routes for every mood: relaxed, romantic, adventurous</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-ocean-600 font-bold text-xl">✓</span>
              <span>Options for every group: families, couples, corporate teams, friends, solo travelers</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-ocean-600 font-bold text-xl">✓</span>
              <span>Day trips, sunset sails, or multi-day exploration</span>
            </li>
          </ul>
        </div>
        
        <h3 className="text-center mb-8">What type of trip are you planning?</h3>
        <p className="text-center text-neutral-600 mb-8">Here are the three most common starting points:</p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {tripTypes.map((type, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover">
              <div className="relative h-48">
                <Image
                  src={type.image}
                  alt={type.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-3">{type.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{type.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="relative overflow-hidden bg-gradient-to-r from-ocean-600 via-ocean-700 to-cyan-700 rounded-3xl shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-white/10"></div>
          
          <div className="relative z-10 text-center p-10 md:p-12">
            <div className="inline-flex items-center gap-2 mb-3 px-4 py-1.5 bg-white/15 backdrop-blur-sm rounded-full border border-white/20">
              <svg className="w-4 h-4 text-cyan-300" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
              </svg>
              <span className="text-white/90 text-xs font-semibold uppercase tracking-wide">Route Planning</span>
            </div>
            
            <h3 className="text-white text-2xl md:text-3xl font-bold mb-6">
              Need Help Planning Your Perfect Route?
            </h3>
            
            <p className="text-white/90 text-base md:text-lg mb-8 max-w-2xl mx-auto">
              Explore our expertly crafted sailing itineraries tailored to different trip lengths and preferences.
            </p>
            
            <a 
              href="#" 
              className="inline-flex items-center gap-3 bg-white text-ocean-700 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-ocean-50 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl group"
            >
              <span>View Sailing Itineraries</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function OvernightSailingSection() {
  return (
    <section id="overnight" className="section-padding">
      <div className="max-w-6xl mx-auto container-padding">
        <SectionHeading subtitle="Experience the best of Phuket sailing with multi-day adventures">
          Overnight Sailing Trips Phuket
        </SectionHeading>
        
        <p className="text-lg text-center text-neutral-700 max-w-3xl mx-auto mb-12 leading-relaxed">
          If you want the trip that people talk about for years, choose overnight sailing. Day trips are fun, but overnight is where Phuket becomes quiet, beautiful, and unhurried.
        </p>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h3 className="mb-6">Why overnight sailing feels different</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-ocean-600 font-bold text-xl">✓</span>
                <span>You do not rush back to the pier</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-ocean-600 font-bold text-xl">✓</span>
                <span>You swim when bays are calm</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-ocean-600 font-bold text-xl">✓</span>
                <span>You enjoy sunset and sunrise at anchor</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-ocean-600 font-bold text-xl">✓</span>
                <span>You can reach the best islands with fewer crowds</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-ocean-600 font-bold text-xl">✓</span>
                <span>You get time for snorkeling, beaches, viewpoints, and do nothing moments</span>
              </li>
            </ul>
          </div>
          
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/assets/images/home/overnight-sailing.webp"
              alt="Overnight sailing"
              fill
              className="object-cover"
            />
          </div>
        </div>
        
        <div className="relative overflow-hidden bg-gradient-to-br from-ocean-600 to-ocean-700 text-white rounded-3xl p-8 md:p-12 mb-12 shadow-2xl">
          <div className="absolute inset-0 z-0">
            <Image
              src="/assets/images/home/catamaran-aerial-hero.jpg"
              alt="Catamaran sailing"
              fill
              className="object-cover opacity-20"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-ocean-800/80 via-ocean-700/70 to-cyan-700/80 z-0"></div>
          
          <div className="relative z-10">
            <h3 className="text-white mb-4 text-2xl md:text-3xl font-bold">Our honest recommendation: 5 nights minimum (if you can)</h3>
            <p className="text-lg md:text-xl mb-8 text-white/95 max-w-4xl">
              If your schedule allows, 5+ nights is the sweet spot. That is when you can reach more remote areas and enjoy a calmer experience than the busiest hotspots.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-cyan-400/25 to-cyan-500/20 backdrop-blur-md rounded-2xl p-6 border-2 border-cyan-300/40 hover:border-cyan-300/60 hover:shadow-xl hover:shadow-cyan-400/20 transition-all duration-300 hover:scale-105">
                <h3 className="text-xl text-white mb-2 font-bold drop-shadow-lg">Koh Rok</h3>
                <p className="text-white/95">Clear water and a quieter, more remote feel</p>
              </div>
              <div className="bg-gradient-to-br from-cyan-400/25 to-cyan-500/20 backdrop-blur-md rounded-2xl p-6 border-2 border-cyan-300/40 hover:border-cyan-300/60 hover:shadow-xl hover:shadow-cyan-400/20 transition-all duration-300 hover:scale-105">
                <h3 className="text-xl text-white mb-2 font-bold drop-shadow-lg">Koh Ha</h3>
                <p className="text-white/95">Beautiful lagoons and amazing snorkeling conditions</p>
              </div>
              <div className="bg-gradient-to-br from-cyan-400/25 to-cyan-500/20 backdrop-blur-md rounded-2xl p-6 border-2 border-cyan-300/40 hover:border-cyan-300/60 hover:shadow-xl hover:shadow-cyan-400/20 transition-all duration-300 hover:scale-105">
                <h3 className="text-xl text-white mb-2 font-bold drop-shadow-lg">Butang Islands</h3>
                <p className="text-white/95">7+ nights - fewest crowds, amazing landscapes</p>
              </div>
            </div>
            
            <p className="mt-8 text-white/95 text-lg">
              These areas are typically far less crowded than the most popular day-trip zones like Phang Nga Bay or Phi Phi islands.
            </p>
          </div>
        </div>
        
        <div className="bg-ocean-50 rounded-2xl p-8">
          <h3 className="mb-4">Shorter overnights still work</h3>
          <p className="mb-6">If you have fewer nights, we will plan a route that feels realistic and relaxed:</p>
          
          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-3">
              <span className="font-bold text-ocean-600">1–2 nights:</span>
              <span>nearby highlights like Phi Phi and Racha Islands</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-ocean-600">3–4 nights:</span>
              <span>a bigger loop with more variety of destinations</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-ocean-600">5-14 nights:</span>
              <span>absolute best destinations and deeper exploration of Thai islands and culture</span>
            </li>
          </ul>
          
          <div className="text-center">
            <CTAButton trackingId="overnight-quote">
              📅 Tell us your dates and number of nights
            </CTAButton>
            <p className="mt-6 text-ocean-700 text-lg">
              <a href="#" className="font-bold hover:text-ocean-900 inline-flex items-center gap-2 bg-ocean-100 px-6 py-3 rounded-full hover:bg-ocean-200 transition-all">
                Start here: Overnight Sailing Trips Phuket →
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
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="relative h-64 mb-6 rounded-xl overflow-hidden">
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
            
            <a href="#" className="text-ocean-600 font-semibold hover:text-ocean-800 transition-colors">
              Compare options: Catamaran Charters in Phuket →
            </a>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="relative h-64 mb-6 rounded-xl overflow-hidden">
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
            
            <a href="#" className="text-ocean-600 font-semibold hover:text-ocean-800 transition-colors">
              Compare options: Sailing Yachts in Phuket →
            </a>
          </div>
        </div>
        
        <div className="mt-12 text-center bg-gradient-to-br from-ocean-500 to-ocean-600 rounded-3xl p-12 shadow-2xl border border-ocean-400/30">
          <div className="max-w-2xl mx-auto">
            <h3 className="mb-4 text-white text-3xl font-bold">Still unsure?</h3>
            <p className="text-white/90 mb-8 text-lg">Message us your group size + comfort preferences and we will recommend the best fit.</p>
            <CTAButton trackingId="comparison-quote">Get Personalized Recommendation</CTAButton>
          </div>
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
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover">
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
        
        <div className="mt-12 text-center bg-ocean-50 rounded-2xl p-8">
          <h3 className="mb-4">Want help choosing?</h3>
          <p className="text-ocean-700 font-semibold text-lg">
            <a href="#" className="hover:text-ocean-900">See route ideas: Sailing Itineraries Phuket →</a>
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
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover">
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
          <div className="bg-ocean-50 rounded-2xl p-8">
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
          
          <div className="bg-white rounded-2xl p-8 border-2 border-ocean-200">
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
          
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/assets/images/home/packing.webp"
              alt="What to pack"
              fill
              className="object-cover"
            />
          </div>
        </div>
        
        <div className="mt-12 text-center bg-gradient-to-r from-ocean-600 to-ocean-700 text-white rounded-3xl p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
          <div className="relative z-10">
            <div className="inline-block px-4 py-1 bg-sunset-500 rounded-full text-sm font-bold mb-4">
              ✨ EXCLUSIVE OFFER
            </div>
            <h3 className="text-white mb-6 text-3xl">Want a simple, itemized quote?</h3>
            <CTAButton trackingId="included-quote">💰 Get a Fast Quote</CTAButton>
          </div>
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
          <div className="bg-white rounded-3xl px-6 py-8 md:px-8 md:py-10 shadow-xl border-2 border-ocean-200/50">
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-ocean-500 to-ocean-600 rounded-2xl flex items-center justify-center shadow-lg">
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
          
          <div className="bg-gradient-to-br from-ocean-600 to-ocean-700 rounded-3xl px-6 py-8 md:px-8 md:py-10 shadow-2xl border-2 border-ocean-500/50">
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg">
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
        
        <div className="mt-8 md:mt-12 text-center bg-gradient-to-br from-white to-ocean-50 rounded-3xl p-8 md:p-12 shadow-xl border-2 border-ocean-300">
          <div className="inline-block px-4 py-2 md:px-6 md:py-2 bg-green-500 text-white rounded-full font-bold text-xs md:text-sm mb-4 md:mb-6 animate-bounce">
            💎 BEST VALUE GUARANTEE
          </div>
          <h3 className="mb-3 md:mb-4 text-2xl md:text-3xl">Fastest path to your quote</h3>
          <p className="text-neutral-700 mb-6 md:mb-8 text-base md:text-lg max-w-2xl mx-auto">Send your dates + group size, and we will recommend the best options with clear pricing.</p>
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
        
        <div className="bg-ocean-50 rounded-2xl p-8">
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
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 card-hover"
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
            <div key={index} className="bg-ocean-50 rounded-xl p-6 border border-ocean-200">
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
            className="group flex items-center justify-center gap-3 bg-white hover:bg-ocean-50 text-ocean-700 font-bold px-8 py-5 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 w-full sm:w-auto"
          >
            <Phone className="w-6 h-6" />
            <span className="text-lg">Call Now</span>
          </a>
          
          <a
            href="https://wa.me/6661234562"
            className="group flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-5 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 w-full sm:w-auto"
          >
            <MessageCircle className="w-6 h-6" />
            <span className="text-lg">WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  )
}
