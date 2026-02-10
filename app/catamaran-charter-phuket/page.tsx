'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CTAButton } from '@/components/shared/CTAButton'
import { ContactCards } from '@/components/shared/ContactCards'
import { ReviewBadges } from '@/components/shared/ReviewBadges'
import { Phone, MessageCircle, Mail, MapPin, CheckCircle, HelpCircle, ChevronDown, Star, Anchor, Users, Ship, Waves, Shield, Award, Calendar, Clock, Compass, Heart, Sparkles } from 'lucide-react'
import { CatamaranFAQSchema } from './faq-schema'

export default function CatamaranCharterPhuketPage() {
  return (
    <>
      <CatamaranFAQSchema />
      <main className="min-h-screen">
        <HeroSection />
        <ContactCardsSection />
        <CTABlock1 />
        <IntroSection />
        <WhyCatamaranSection />
        <CTABlock2 />
        <CharterOptionsSection />
        <DestinationsSection />
        <TestimonialsSection />
        <CrewAndComfortSection />
        <SpecialMomentsSection />
        <CatamaranVsMonohullSection />
        <CustomExperienceSection />
        <CTABlock3 />
        <PlanYourCharterSection />
        <FAQSection />
        <FinalCTASection />
      </main>
    </>
  )
}

function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/catamaran-charter/hero.jpg"
          alt="Catamaran Charter Phuket"
          fill
          className="object-cover"
          priority
          quality={100}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#164e63]/60 via-[#164e63]/40 to-[#164e63]/60 z-[1]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-10 md:pb-12 flex justify-center">
        <div className="max-w-4xl text-center">
          <h1
            className="font-[family-name:var(--font-playfair)] text-white mb-6 leading-[1.2] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"
            style={{ textShadow: '3px 3px 12px rgba(0, 0, 0, 0.8), 0 0 30px rgba(0, 0, 0, 0.6)' }}
          >
            Catamaran Charter Phuket – Private Sailing in Comfort & Style
          </h1>

          <div className="space-y-4 mb-8">
            <p
              className="text-lg sm:text-xl md:text-2xl text-white leading-relaxed font-medium"
              style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8), 0 0 15px rgba(0, 0, 0, 0.6)' }}
            >
              Charter a private catamaran in Phuket and explore Thailand's most stunning islands the way they deserve to be seen — at your own pace, with your own crew, from a yacht designed for space, stability, and all-day comfort.
            </p>

            <p
              className="text-base sm:text-lg md:text-xl text-white/95 leading-relaxed"
              style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8), 0 0 15px rgba(0, 0, 0, 0.6)' }}
            >
              Whether you're planning a romantic escape to Phi Phi Islands, a family adventure around Phang Nga Bay, or a multi-day cruise south to Koh Lipe, our sailing catamarans deliver the perfect balance of luxury and freedom on the Andaman Sea.
            </p>
          </div>

          <CTAButton
            href="/contact"
            trackingId="catamaran-hero-quote"
            className="!px-6 !py-3 !text-base mb-6"
            style={{ background: 'linear-gradient(90deg, #A0522D 0%, #FF8C00 100%)' }}
          >
            Get Your Free Quote
          </CTAButton>

          <ReviewBadges />
        </div>
      </div>
    </section>
  )
}

function ContactCardsSection() {
  return (
    <section className="bg-white py-6 sm:py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ContactCards />
      </div>
    </section>
  )
}

function CTABlock1() {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-gray-50 to-sky-50 py-6 sm:py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#164e63] via-[#0f3a47] to-[#0a2a35] rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 text-center">
          <p className="text-white/80 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed">
            Planning a catamaran charter in Phuket? Share your dates, group size, and wish list — we'll send a personalized itinerary and quote within 24 hours. No obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center px-8 sm:px-10 md:px-12 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold text-white bg-amber-gradient rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 whitespace-nowrap">
              Get a Free Catamaran Quote
            </Link>
            <a
              href="https://wa.me/66612345623"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 sm:px-10 md:px-12 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold text-white bg-green-600 rounded-xl hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 whitespace-nowrap"
            >
              <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              WhatsApp Us Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function IntroSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#164e63] mb-12 text-center" style={{ fontFamily: "var(--font-playfair)" }}>
            Premium Catamaran Charters in Phuket, Thailand
          </h2>

          {/* Private Sailing Experiences - Text Left, Image Right */}
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8 items-center">
              <div className="md:col-span-3">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#164e63] mb-4">
                  Private Sailing Experiences Designed for Space, Stability & Comfort
                </h3>
                <div className="text-neutral-700 leading-relaxed space-y-4">
                  <p>
                    A catamaran charter gives you something no speedboat, longtail, or standard yacht can match — genuine room to breathe. Twin hulls create a wide, stable platform with expansive deck space for lounging, dining, and watching islands drift by. Below deck, private cabins with ensuite bathrooms mean you never sacrifice comfort for adventure.
                  </p>
                  <p>
                    Our catamarans sit flat on the water. There's no heeling, no rolling, and far less motion than monohull sailboats — making them the most comfortable choice for families with children, guests who get seasick, and anyone who simply wants to relax rather than brace themselves.
                  </p>
                  <p>
                    Every private catamaran charter from Phuket includes a professional crew — licensed skipper, onboard chef, and experienced deckhand — so you don't need any sailing experience. You set the pace. They handle everything else.
                  </p>
                </div>
              </div>
              <div className="md:col-span-2">
                <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/assets/images/catamaran-charter/catamaran-private.jpeg"
                    alt="Private Catamaran Charter Phuket"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Luxury Catamarans - Image Left, Text Right */}
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8 items-center">
              <div className="md:col-span-2 order-2 md:order-1">
                <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/assets/images/catamaran-charter/luxury-catamaran.webp"
                    alt="Luxury Catamaran Phuket"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:col-span-3 order-1 md:order-2">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#164e63] mb-4">
                  Luxury Phuket Catamarans Offering Exceptional Value
                </h3>
                <div className="text-neutral-700 leading-relaxed space-y-4">
                  <p>
                    Premium catamaran charters in Phuket cost 30–50% less than comparable experiences in the Mediterranean, Caribbean, or South Pacific — without compromising on quality, crew standards, or vessel condition. Thailand's lower operating costs mean your budget goes further, whether you're booking a day trip or a week-long expedition.
                  </p>
                  <p>
                    Our fleet ranges from modern 38-foot catamarans ideal for couples and small groups to spacious 45-foot+ vessels that accommodate families and larger parties with four private cabins, air conditioning, and full galley kitchens.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stylish Pricing Banner */}
          <div className="bg-gradient-to-r from-[#164e63] via-[#0f3a47] to-[#164e63] rounded-2xl p-6 sm:p-8 shadow-2xl text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-white">
              <div className="flex flex-col items-center">
                <span className="text-base sm:text-lg md:text-xl font-bold text-amber-300">Day charters</span>
                <span className="text-xl sm:text-2xl md:text-3xl font-bold">from €800</span>
              </div>
              <div className="hidden sm:block w-px h-12 bg-white/30"></div>
              <div className="flex flex-col items-center">
                <span className="text-base sm:text-lg md:text-xl font-bold text-amber-300">Overnight</span>
                <span className="text-xl sm:text-2xl md:text-3xl font-bold">from €1,000/night</span>
              </div>
              <div className="hidden sm:block w-px h-12 bg-white/30"></div>
              <div className="flex flex-col items-center">
                <span className="text-base sm:text-lg md:text-xl font-bold text-amber-300">Premium air-conditioned</span>
                <span className="text-xl sm:text-2xl md:text-3xl font-bold">from €2,500/night</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function WhyCatamaranSection() {
  const features = [
    {
      icon: Ship,
      title: 'Spacious Decks, Smooth Sailing & Modern Design',
      paragraph1: 'The twin-hull design of a sailing catamaran creates nearly double the usable deck space of a monohull of similar length. Wide trampolines at the bow, shaded cockpit dining areas, and open sterns with swim platforms mean your group is never crowded into one spot. On a catamaran, everyone finds their own space — whether that\'s sunbathing, reading in the shade, or watching your kids snorkel from the swim ladder.',
      paragraph2: 'Modern sailing catamarans also feature shallow drafts, allowing them to anchor in protected bays and tuck into turquoise lagoons that deeper-keeled yachts and larger boats simply cannot access. This is a real advantage around Phuket\'s limestone islands, where the best swimming spots often sit in shallow, sheltered water close to shore.'
    },
    {
      icon: Shield,
      title: 'Ideal Safety & Balance of Performance and Relaxation',
      paragraph1: 'Catamarans are among the safest vessels on the water. Twin hulls make them virtually impossible to capsize, and their wide beam provides a stable platform even in choppy conditions. For families with young children, this stability is a genuine safety advantage — kids can move around the deck freely without the constant tipping that comes with monohull sailing.',
      paragraph2: 'This matters especially in Phuket, where speedboat tours remain the most common way tourists visit islands like Phi Phi and James Bond Island. Speedboat accidents in Thai waters make international headlines with troubling regularity — overcrowded boats, high speeds, rough open-water crossings, and limited safety equipment create real risks that tourists often don\'t consider until they\'re onboard. A private catamaran charter is the opposite experience: controlled speeds, professional crew, proper safety equipment, calm sailing, and the freedom to adjust your route if conditions change.'
    },
    {
      icon: Sparkles,
      title: 'A Refined Alternative to Standard Phuket Boat Charters',
      paragraph1: 'Most boat charters in Phuket fall into two categories: budget speedboats that prioritize volume over comfort, or expensive superyachts that price out most travelers. A catamaran charter sits in the sweet spot — genuinely luxurious, beautifully designed, and fully crewed, but at a price point that makes multi-day sailing accessible to couples, families, and friend groups who want something special without spending five figures a night.',
      paragraph2: null
    }
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-neutral-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#164e63] mb-4 text-center" style={{ fontFamily: "var(--font-playfair)" }}>
          Why a Catamaran Is the Best Way to Sail Phuket
        </h2>
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-2">
            <div className="h-1 w-12 bg-[#164e63] rounded-full"></div>
            <div className="h-2 w-2 bg-amber-500 rounded-full"></div>
            <div className="h-1 w-12 bg-[#164e63] rounded-full"></div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 sm:p-8 border border-neutral-100">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#164e63] to-[#14b8a6] rounded-2xl flex items-center justify-center shadow-lg">
                    <feature.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#164e63] mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-700 leading-relaxed mb-4">
                    {feature.paragraph1}
                  </p>
                  {feature.paragraph2 && (
                    <p className="text-neutral-700 leading-relaxed">
                      {feature.paragraph2}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTABlock2() {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-gray-50 to-sky-50 py-6 sm:py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#164e63] via-[#0f3a47] to-[#0a2a35] rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 text-center">
          <div className="text-4xl mb-4">⚓</div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-white">
            Phuket's Peak Sailing Season: November–April
          </h3>
          <p className="text-white/80 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed">
            The Andaman Sea's calmest waters, clearest visibility, and steadiest breezes fall between November and April. Christmas, New Year, and Chinese New Year charters book out 2–3 months ahead. If your dates are flexible, shoulder months (November, April) offer the best availability and value.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center px-8 sm:px-10 md:px-12 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold text-white bg-amber-gradient rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 whitespace-nowrap">
            Check Catamaran Availability
          </Link>
        </div>
      </div>
    </section>
  )
}

function CharterOptionsSection() {
  const options = [
    {
      title: 'Private Day Catamaran Charters',
      price: 'From €800/day',
      perfectFor: 'Departs ~9:00 AM, returns ~5:30 PM | Up to 8 guests',
      description: 'A full-day private catamaran charter is the best way to experience Phuket\'s islands if you\'re short on time. Depart Chalong Bay in the morning, sail to your chosen destination — Phi Phi, Racha Islands, Phang Nga Bay, or Koh Hong — and return by sunset. Lunch prepared by your onboard chef, snorkeling gear, kayaks, and paddleboards are all included.',
      link: '/day-sailing-tours-phuket',
      borderColor: 'border-l-[#14b8a6]',
      accentColor: 'text-[#14b8a6]'
    },
    {
      title: 'Extended Day & Full-Day Sailing',
      price: 'From €1,000/day',
      perfectFor: 'Flexible scheduling | Ideal for Phi Phi full exploration',
      description: 'Want to go further or stay out longer? Extended day charters push departure earlier and return later, giving you time to reach destinations like the far side of Phi Phi or the outer Racha Islands without rushing. These are ideal when you want the depth of an overnight trip but prefer to sleep on land.',
      link: '/contact',
      borderColor: 'border-l-[#164e63]',
      accentColor: 'text-[#164e63]'
    },
    {
      title: 'Overnight & Multi-Day Cruises',
      price: 'From €1,000/night',
      perfectFor: '4 private cabins, ensuite bathrooms | All meals, crew, activities included',
      description: 'Multi-day catamaran cruises unlock Phuket\'s most magical experiences — overnight anchorages in deserted bays, sunrise swims before other boats arrive, and the freedom to explore remote islands that day-trippers never reach. Sleep in private cabins, dine under the stars, and wake up to a new island every morning.',
      link: '/multi-day-sailing-phuket',
      borderColor: 'border-l-amber-500',
      accentColor: 'text-amber-600'
    }
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-neutral-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#164e63] mb-4 text-center" style={{ fontFamily: "var(--font-playfair)" }}>
          Catamaran Charter Options in Phuket
        </h2>
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-2">
            <div className="h-1 w-12 bg-[#164e63] rounded-full"></div>
            <div className="h-2 w-2 bg-amber-500 rounded-full"></div>
            <div className="h-1 w-12 bg-[#164e63] rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto mb-8">
          {options.map((option, index) => (
            <div key={index} className={`rounded-2xl transition-all duration-300 border-l-8 ${option.borderColor} p-6 sm:p-8 group hover:-translate-y-1 ${
              index === 1 ? 'bg-[#0c3b4a] shadow-[0_20px_50px_-12px_rgba(12,59,74,0.25)] hover:shadow-[0_25px_60px_-15px_rgba(12,59,74,0.35)]' : 'bg-gray-50 shadow-[0_20px_50px_-12px_rgba(12,59,74,0.25)] hover:shadow-[0_25px_60px_-15px_rgba(12,59,74,0.35)]'
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

              <p className={`leading-relaxed mb-6 text-sm ${
                index === 1 ? 'text-white/90' : 'text-neutral-700'
              }`}>
                {option.description}
              </p>

              <Link
                href={option.link}
                className={`inline-flex items-center justify-center w-full font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 ${
                  index === 1
                    ? 'bg-white text-[#164e63] hover:bg-gray-100'
                    : 'bg-[#164e63] hover:bg-[#14b8a6] text-white'
                }`}
              >
                Book Now →
              </Link>
            </div>
          ))}
        </div>

        {/* Multi-day routes information */}
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-neutral-700 leading-relaxed text-sm sm:text-base bg-white rounded-2xl p-6 shadow-[0_10px_30px_-8px_rgba(12,59,74,0.20)] border-l-4 border-amber-500">
            <strong className="text-[#164e63]">Popular multi-day routes include:</strong> Phi Phi and Koh Lanta (2–3 nights), Koh Rok and Koh Ha (3–4 nights), and the ultimate expedition south to Koh Lipe and the Butang Archipelago (5–7 nights).
          </p>
        </div>
      </div>
    </section>
  )
}

function DestinationsSection() {
  const destinations = [
    {
      title: 'Catamaran Charter Phi Phi Islands, Maya Bay & Surrounding Lagoons',
      description: 'Thailand\'s most iconic sailing destination. Towering limestone cliffs, Maya Bay (from The Beach), Monkey Beach, Pileh Lagoon, and vibrant coral reefs. A catamaran\'s shallow draft lets you anchor inside Pileh Lagoon where larger vessels can\'t enter — and overnight stays mean you experience Phi Phi after the speedboats leave.',
      distance: '4–5 hours sailing from Chalong Bay',
      type: 'Day trip or overnight',
      link: '/phi-phi-islands-sailing'
    },
    {
      title: 'Catamaran Charter Phang Nga Bay & Dramatic Limestone Landscapes',
      description: 'Vertical limestone karsts rising from emerald water, James Bond Island, hidden sea caves, and traditional floating villages. Kayak through collapsed cave systems into secret hongs (lagoons) that are only accessible at certain tides. Phang Nga Bay is calmer than open-sea destinations, making it ideal for families and first-time sailors.',
      distance: '3–4 hours from Chalong Bay',
      type: 'Perfect for day charters',
      link: '/phang-nga-bay-yacht-charter'
    },
    {
      title: 'Racha Islands & Clear-Water Anchorages',
      subtitle1: 'Snorkeling Reefs, Kayaking Routes & Calm Moorings',
      description1: 'The Racha Islands (Racha Yai and Racha Noi) offer Phuket\'s closest premium anchorage — crystal-clear water, healthy coral reefs, and calm bays that are perfect for snorkeling, kayaking, and paddleboarding. Siam Bay and Batok Bay on Racha Yai provide sheltered overnight moorings with pristine white-sand beaches.',
      subtitle2: 'Secluded Beaches, Coves & Natural Caves',
      description2: 'After day-trip boats depart by mid-afternoon, overnight catamaran guests have entire beaches to themselves. Explore hidden coves along Racha Yai\'s eastern coast, swim through natural rock formations, and enjoy sunset from anchorages with no other boats in sight.',
      distance: '2–3 hours from Chalong Bay',
      type: 'Closest overnight destination | Excellent for families',
      link: '/racha-islands-sailing'
    }
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-neutral-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#164e63] mb-12 text-center" style={{ fontFamily: "var(--font-playfair)" }}>
          Phuket Island Routes & Destinations by Catamaran
        </h2>

        <div className="space-y-8 max-w-5xl mx-auto">
          {destinations.map((dest, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 border border-neutral-200">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#164e63] mb-4">{dest.title}</h3>

              {dest.subtitle1 && (
                <>
                  <h4 className="text-xl font-bold text-[#164e63] mb-3 mt-6">{dest.subtitle1}</h4>
                  <p className="text-neutral-700 leading-relaxed mb-4">{dest.description1}</p>
                </>
              )}

              {dest.subtitle2 && (
                <>
                  <h4 className="text-xl font-bold text-[#164e63] mb-3 mt-6">{dest.subtitle2}</h4>
                  <p className="text-neutral-700 leading-relaxed mb-4">{dest.description2}</p>
                </>
              )}

              {!dest.subtitle1 && (
                <p className="text-neutral-700 leading-relaxed mb-4">{dest.description}</p>
              )}

              <div className="flex flex-wrap gap-4 items-center mb-4 text-sm sm:text-base">
                <span className="text-amber-600 font-semibold">{dest.distance}</span>
                <span className="text-neutral-600">• {dest.type}</span>
              </div>

              <Link
                href={dest.link}
                className="inline-block text-[#164e63] hover:text-[#14b8a6] font-semibold underline underline-offset-4 transition-colors"
              >
                {dest.title.split(' ')[0]} Charter →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  const testimonials = [
    {
      quote: "The catamaran was spotless, spacious, and the crew made us feel like family. We anchored at Phi Phi overnight and had Maya Bay practically to ourselves at sunrise.",
      author: "David & Claire, Canada",
      charter: "3-Night Catamaran Cruise",
      rating: 5
    },
    {
      quote: "We chose a catamaran specifically because our kids get motion sick. Zero issues — they spent the whole trip jumping off the back and snorkeling. Best decision we made.",
      author: "The Tanaka Family, Japan",
      charter: "Private Day Charter, Racha Islands",
      rating: 5
    },
    {
      quote: "We've chartered monohulls in Croatia and Greece. The catamaran in Phuket was more comfortable, the crew was better, and it cost half the price. We're coming back next year.",
      author: "Mark & friends, UK",
      charter: "5-Night Charter, Phi Phi to Koh Lanta",
      rating: 5
    }
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#164e63] to-[#14b8a6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
          What Catamaran Charter Guests Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <p className="text-neutral-700 leading-relaxed mb-6 italic">"{testimonial.quote}"</p>
              <div className="border-t border-neutral-200 pt-4">
                <p className="font-bold text-[#164e63]">{testimonial.author}</p>
                <p className="text-sm text-neutral-600">{testimonial.charter}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/contact"
            className="inline-block text-white hover:text-amber-300 font-semibold underline underline-offset-4 transition-colors text-lg"
          >
            Read all 750+ reviews →
          </Link>
        </div>
      </div>
    </section>
  )
}

function CrewAndComfortSection() {
  const features = [
    {
      icon: Users,
      title: 'Professional Skippers with Local Andaman Sea Knowledge',
      content: 'Every catamaran charter includes a licensed Thai skipper with deep knowledge of the Andaman Sea — tidal patterns, seasonal weather shifts, the best anchorages for each time of day, and quiet snorkeling spots that don\'t appear in tourist guides. With 30 years of collective experience, our captains adjust routes in real time to ensure you get the best conditions and the most rewarding sailing experience.'
    },
    {
      icon: Anchor,
      title: 'Comfortable Cabins, Bathrooms & Shaded Lounge Areas',
      paragraph1: 'Our catamarans feature 3–4 private cabins with queen or double beds, ensuite bathrooms with hot-water showers, and ample storage. Above deck, shaded cockpit areas provide comfortable dining and lounging space protected from the sun, while open foredeck trampolines and swim platforms give you direct access to the water.',
      paragraph2: 'Air-conditioned catamarans are available for guests who want climate-controlled comfort below deck — particularly popular during the warmer months.'
    },
    {
      icon: Award,
      title: 'Freshly Prepared Thai Meals, Drinks & Catering Options',
      paragraph1: 'Your onboard chef prepares every meal fresh from local ingredients. Expect authentic Thai cuisine — green curry, pad thai, tom yum soup, fresh seafood, and tropical fruits — alongside international options on request. Beach BBQs on secluded shores are a highlight of overnight charters.',
      paragraph2: 'All dietary preferences are accommodated: vegetarian, vegan, halal, gluten-free, and allergy-specific menus. For celebrations, we arrange custom cakes, premium seafood platters, and champagne service with advance notice.',
      paragraph3: 'All meals, drinking water, fuel, and activities included — transparent pricing, no hidden fees.'
    }
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#164e63] mb-4 text-center" style={{ fontFamily: "var(--font-playfair)" }}>
          Catamaran Crews, Comfort & Onboard Experience
        </h2>
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-2">
            <div className="h-1 w-12 bg-[#164e63] rounded-full"></div>
            <div className="h-2 w-2 bg-amber-500 rounded-full"></div>
            <div className="h-1 w-12 bg-[#164e63] rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
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
                    <p className="text-neutral-700 leading-relaxed mb-4 text-center">
                      {feature.paragraph2}
                    </p>
                  )}
                  {feature.paragraph3 && (
                    <p className="text-neutral-700 leading-relaxed text-center font-medium text-[#164e63]">
                      {feature.paragraph3}
                    </p>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SpecialMomentsSection() {
  const occasions = [
    {
      icon: Heart,
      title: 'Honeymoons & Romantic Sailing Escapes Phuket',
      content: 'A private catamaran is the most romantic way to experience Phuket\'s islands. Secluded anchorages, sunset dinners on deck, champagne service, and mornings waking up in deserted bays create an intimacy that no resort can match. We specialize in honeymoons, anniversaries, and proposals — with personalized touches like flowers, custom cakes, and candlelit dining arranged on request.',
      link: '/honeymoon-sailing-phuket',
      linkText: 'See Honeymoon Packages →',
      gradient: 'from-pink-50 to-rose-50'
    },
    {
      icon: Users,
      title: 'Phuket Family Holidays & Refined Group Getaways',
      paragraph1: 'Catamarans are the most family-friendly charter option in Phuket. The wide, stable deck means kids can move freely. Shallow protected bays provide safe swimming. Snorkeling gear, kayaks, and paddleboards keep children entertained for hours. And with a professional crew handling sailing, cooking, and safety, parents actually get to relax.',
      paragraph2: 'For friend groups, catamarans offer the perfect shared holiday — enough private cabin space for everyone, but plenty of communal areas for long meals, card games, and late nights under the stars.',
      link: '/family-sailing-phuket',
      linkText: 'Family Sailing Guide →',
      gradient: 'from-blue-50 to-cyan-50'
    },
    {
      icon: Sparkles,
      title: 'Celebrations at Sea Without the Crowds in Phuket',
      content: 'Birthdays, milestone anniversaries, bachelor and bachelorette parties, corporate retreats — a private catamaran gives you an exclusive floating venue with no strangers, no noise restrictions from neighboring tables, and no compromises. We customize decorations, menus, entertainment, and photography with advance planning.',
      link: '/yacht-wedding-phuket',
      linkText: 'Plan a Celebration Charter →',
      gradient: 'from-amber-50 to-orange-50'
    }
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-neutral-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#164e63] mb-4 text-center" style={{ fontFamily: "var(--font-playfair)" }}>
          Private Phuket Catamaran Charters for Special Moments
        </h2>
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-2">
            <div className="h-1 w-12 bg-[#164e63] rounded-full"></div>
            <div className="h-2 w-2 bg-amber-500 rounded-full"></div>
            <div className="h-1 w-12 bg-[#164e63] rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {occasions.map((occasion, index) => (
            <div key={index} className={`bg-gradient-to-br ${occasion.gradient} rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 p-6 sm:p-8 border border-white group`}>
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#164e63] to-[#14b8a6] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <occasion.icon className="w-10 h-10 text-white" />
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#164e63] mb-4 text-center">
                {occasion.title}
              </h3>

              {'content' in occasion ? (
                <p className="text-neutral-700 leading-relaxed mb-6 text-center">
                  {occasion.content}
                </p>
              ) : (
                <>
                  <p className="text-neutral-700 leading-relaxed mb-4 text-center">
                    {occasion.paragraph1}
                  </p>
                  {occasion.paragraph2 && (
                    <p className="text-neutral-700 leading-relaxed mb-6 text-center">
                      {occasion.paragraph2}
                    </p>
                  )}
                </>
              )}

              <Link
                href={occasion.link}
                className="inline-flex items-center justify-center w-full bg-gradient-to-r from-[#164e63] to-[#14b8a6] text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                {occasion.linkText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CatamaranVsMonohullSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#164e63] mb-12 text-center" style={{ fontFamily: "var(--font-playfair)" }}>
          Catamaran Charter vs Monohull Charters
        </h2>

        <div className="max-w-5xl mx-auto mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#164e63] mb-6 text-center">
            More Space, Privacy & Onboard Comfort
          </h3>

          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden min-w-[640px]">
              <thead>
                <tr className="bg-[#164e63] text-white">
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-left font-bold text-sm sm:text-base">Feature</th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-left font-bold text-sm sm:text-base">Catamaran</th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-left font-bold text-sm sm:text-base">Monohull</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-200">
                  <td className="px-4 sm:px-6 py-3 sm:py-4 font-semibold text-neutral-700 text-sm sm:text-base">Deck space</td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4 text-neutral-700 text-sm sm:text-base">Wide beam, dual lounging areas, large cockpit</td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4 text-neutral-600 text-sm sm:text-base">Narrow deck, limited seating</td>
                </tr>
                <tr className="bg-neutral-50 border-b border-neutral-200">
                  <td className="px-4 sm:px-6 py-3 sm:py-4 font-semibold text-neutral-700 text-sm sm:text-base">Stability</td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4 text-neutral-700 text-sm sm:text-base">Flat, minimal rolling — ideal for non-sailors</td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4 text-neutral-600 text-sm sm:text-base">Heels under sail, constant motion</td>
                </tr>
                <tr className="border-b border-neutral-200">
                  <td className="px-4 sm:px-6 py-3 sm:py-4 font-semibold text-neutral-700 text-sm sm:text-base">Cabins</td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4 text-neutral-700 text-sm sm:text-base">3–4 spacious cabins with ensuite bathrooms</td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4 text-neutral-600 text-sm sm:text-base">Typically smaller, fewer ensuites</td>
                </tr>
                <tr className="bg-neutral-50 border-b border-neutral-200">
                  <td className="px-4 sm:px-6 py-3 sm:py-4 font-semibold text-neutral-700 text-sm sm:text-base">Seasickness risk</td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4 text-neutral-700 text-sm sm:text-base">Very low — stable platform</td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4 text-neutral-600 text-sm sm:text-base">Higher — rolling and heeling motion</td>
                </tr>
                <tr>
                  <td className="px-4 sm:px-6 py-3 sm:py-4 font-semibold text-neutral-700 text-sm sm:text-base">Swim access</td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4 text-neutral-700 text-sm sm:text-base">Open stern platforms, easy water entry</td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4 text-neutral-600 text-sm sm:text-base">Ladder access, more difficult</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="max-w-5xl mx-auto prose prose-lg text-neutral-700 leading-relaxed space-y-6">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#164e63] mb-4">
              Access to Quieter Anchorages and Hidden Locations
            </h3>
            <p>
              A catamaran's shallow draft (typically 1.0–1.5 meters) means you can anchor in turquoise shallows, tuck into narrow lagoons, and moor close to beaches that deeper-keeled monohulls can't reach. Around Phuket's limestone islands — particularly Phi Phi's Pileh Lagoon, Koh Hong's inner lagoon, and the sheltered coves of Racha Yai — this translates into dramatically better anchorage positions and more private beach access.
            </p>
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#164e63] mb-4">
              A Calmer, More Elegant Way to Explore Phuket
            </h3>
            <p className="mb-4">
              Monohulls are built for performance sailing — exciting for experienced sailors, but the constant heel and motion can be uncomfortable for guests who just want to relax. A catamaran sails flat, moves smoothly, and provides a calm, civilized experience where the focus is on the destination and the company rather than hanging on.
            </p>
            <p>
              For experienced sailors wanting a sportier experience, we also offer{' '}
              <Link href="/bareboat-charter-phuket" className="text-[#164e63] hover:text-[#14b8a6] underline underline-offset-2">
                monohull and bareboat options →
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function CustomExperienceSection() {
  const experiences = [
    {
      icon: Compass,
      title: 'Custom Itineraries Based on Your Preferences',
      content: 'No two charters are the same. Tell us what matters most to you — snorkeling, photography, remote beaches, nightlife, island hopping, or simply doing nothing — and we\'ll design an itinerary around it. Every private catamaran charter is fully customizable: destinations, timing, activities, meals, and special requests.'
    },
    {
      icon: Waves,
      title: 'Flexible Sailing Routes Guided by Conditions',
      content: 'Our skippers adapt your route based on real-time weather, wind direction, tidal patterns, and sea conditions. If conditions favor a different island or anchorage than planned, your captain will suggest the best alternative — always prioritizing your comfort, safety, and enjoyment over a rigid schedule.'
    },
    {
      icon: Clock,
      title: 'Unhurried Days Focused on Quality Time at Sea',
      content: 'The beauty of a private catamaran charter is that there\'s no schedule to keep except your own. Sleep in. Linger at a snorkeling spot. Stay at anchor while the sun sets. Have a second coffee before raising the sails. This isn\'t a tour — it\'s your time, your way.'
    }
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#164e63] via-[#0f3a47] to-[#164e63]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 text-center" style={{ fontFamily: "var(--font-playfair)" }}>
          Your Phuket Flavor Catamaran Charter Experience
        </h2>
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-2">
            <div className="h-1 w-12 bg-[#164e63] rounded-full"></div>
            <div className="h-2 w-2 bg-amber-500 rounded-full"></div>
            <div className="h-1 w-12 bg-[#164e63] rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {experiences.map((exp, index) => (
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
  )
}

function CTABlock3() {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-gray-50 to-sky-50 py-6 sm:py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#164e63] via-[#0f3a47] to-[#0a2a35] rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 text-center">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-white">
            Your Catamaran Charter Starts with a Conversation
          </h3>
          <p className="text-white/80 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed">
            Every great sailing trip begins with understanding what you want. Tell us your travel dates, group size, preferred destinations, and any special occasions — and we'll build a tailored catamaran itinerary with transparent pricing. No obligation, no pressure.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center px-8 sm:px-10 md:px-12 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold text-white bg-amber-gradient rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 whitespace-nowrap">
              Get Your Free Catamaran Quote
            </Link>
            <a
              href="https://wa.me/66612345623"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 sm:px-10 md:px-12 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold text-white bg-green-600 rounded-xl hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 whitespace-nowrap"
            >
              <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function PlanYourCharterSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#164e63] mb-4 text-center" style={{ fontFamily: "var(--font-playfair)" }}>
          Plan Your Catamaran Charter in Phuket
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
                Select the Right Catamaran and Duration
              </h3>

              <div className="overflow-x-auto -mx-4 sm:mx-0">
            <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden min-w-[640px]">
              <thead>
                <tr className="bg-[#164e63] text-white">
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-left font-bold text-sm sm:text-base">Charter Type</th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-left font-bold text-sm sm:text-base">Duration</th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-left font-bold text-sm sm:text-base">Best For</th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-left font-bold text-sm sm:text-base">Starting Price</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-200">
                  <td className="px-4 sm:px-6 py-3 sm:py-4 font-semibold text-neutral-700 text-sm sm:text-base">Day Charter</td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4 text-neutral-700 text-sm sm:text-base">Full day (8–9 hours)</td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4 text-neutral-700 text-sm sm:text-base">Short stays, specific island visits</td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4 text-amber-600 font-bold text-sm sm:text-base">€800/day</td>
                </tr>
                <tr className="bg-neutral-50 border-b border-neutral-200">
                  <td className="px-4 sm:px-6 py-3 sm:py-4 font-semibold text-neutral-700 text-sm sm:text-base">Extended Day</td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4 text-neutral-700 text-sm sm:text-base">10–12 hours</td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4 text-neutral-700 text-sm sm:text-base">Reaching further destinations</td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4 text-amber-600 font-bold text-sm sm:text-base">€1,000/day</td>
                </tr>
                <tr className="border-b border-neutral-200">
                  <td className="px-4 sm:px-6 py-3 sm:py-4 font-semibold text-neutral-700 text-sm sm:text-base">Overnight</td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4 text-neutral-700 text-sm sm:text-base">2–4 nights</td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4 text-neutral-700 text-sm sm:text-base">Phi Phi, Racha, Koh Lanta circuits</td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4 text-amber-600 font-bold text-sm sm:text-base">€1,000/night</td>
                </tr>
                <tr className="bg-neutral-50 border-b border-neutral-200">
                  <td className="px-4 sm:px-6 py-3 sm:py-4 font-semibold text-neutral-700 text-sm sm:text-base">Multi-Day Expedition</td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4 text-neutral-700 text-sm sm:text-base">5–7 nights</td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4 text-neutral-700 text-sm sm:text-base">Koh Rok, Koh Ha, Koh Lipe</td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4 text-amber-600 font-bold text-sm sm:text-base">€1,000/night</td>
                </tr>
                <tr>
                  <td className="px-4 sm:px-6 py-3 sm:py-4 font-semibold text-neutral-700 text-sm sm:text-base">Premium/Air-Con</td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4 text-neutral-700 text-sm sm:text-base">Any duration</td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4 text-neutral-700 text-sm sm:text-base">Maximum comfort year-round</td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4 text-amber-600 font-bold text-sm sm:text-base">€2,500/night</td>
                </tr>
              </tbody>
            </table>
              </div>

              <div className="mt-6 p-6 bg-neutral-50 rounded-lg">
            <p className="text-neutral-700 mb-2">
              <strong>All prices include:</strong> crew, all meals, drinking water, fuel, mooring, snorkeling gear, kayaks, paddleboards, safety equipment, and accident insurance (1M THB per guest).
            </p>
            <p className="text-neutral-700">
              <strong>Not included:</strong> National park fees (300–400 THB per adult per park, cash), alcoholic beverages.
            </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          <div className="bg-gradient-to-br from-neutral-50 to-white rounded-2xl shadow-lg p-8 border border-neutral-200">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#164e63] mb-4">
              Sail Phuket with Confidence and Comfort
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#164e63] flex-shrink-0 mt-0.5" />
                <span className="text-neutral-700">750+ five-star reviews from international travelers across Google, TripAdvisor, and booking platforms</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#164e63] flex-shrink-0 mt-0.5" />
                <span className="text-neutral-700">30 years of Andaman Sea experience — our team knows these waters better than anyone</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#164e63] flex-shrink-0 mt-0.5" />
                <span className="text-neutral-700">Tourism Authority of Thailand licensed (OTD #34/02546)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#164e63] flex-shrink-0 mt-0.5" />
                <span className="text-neutral-700">World Luxury Travel Awards Winner 2025</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#164e63] flex-shrink-0 mt-0.5" />
                <span className="text-neutral-700">Free rescheduling or full refund if we cancel for weather — your safety always comes first</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-neutral-50 to-white rounded-2xl shadow-lg p-8 border border-neutral-200">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#164e63] mb-4">
              Speak with Our Phuket-Based Charter Specialists
            </h3>
            <p className="text-neutral-700 leading-relaxed">
              Our team is based at Chalong Bay, Phuket's main yacht harbor — 15 minutes from Phuket Town, 30 minutes from Patong, 40 minutes from the airport. We're not a booking aggregator or overseas call center. You deal directly with the people who manage the fleet, brief the crews, and sail these waters every day.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'How much does a catamaran charter cost in Phuket?',
      answer: 'Day charters start from €800. Overnight catamaran charters from €1,000/night. Premium air-conditioned catamarans from €2,500/night. All prices include crew, meals, fuel, and activities — no hidden fees.'
    },
    {
      question: 'How many guests can a catamaran accommodate?',
      answer: 'Our catamarans have 3–4 private cabins accommodating up to 8 overnight guests. For day charters, we can host up to 10–12 guests depending on the vessel. Every booking is private — you won\'t share with strangers.'
    },
    {
      question: 'Do I need sailing experience to charter a catamaran?',
      answer: 'Not at all. Every crewed catamaran charter includes a licensed skipper who handles all sailing. You\'re free to participate or simply relax. For experienced sailors, we also offer bareboat catamaran charters (valid license required).'
    },
    {
      question: 'Are catamarans safe for children?',
      answer: 'Yes — catamarans are the safest and most family-friendly charter option. The wide, stable platform means very little motion, safety railings and netting are standard, and life jackets are provided for all ages. Our crews are experienced with families and keep kids engaged with water activities.'
    },
    {
      question: 'What\'s the difference between a catamaran and a monohull charter?',
      answer: 'Catamarans are wider, more stable, and have more deck and cabin space. They don\'t heel (lean) under sail, making them far more comfortable for guests who aren\'t experienced sailors. They also have shallower drafts, allowing access to anchorages and lagoons monohulls can\'t reach.'
    },
    {
      question: 'Which islands can I visit on a catamaran from Phuket?',
      answer: 'Day trips: Phi Phi Islands, Racha Islands, Phang Nga Bay, Koh Hong. Multi-day: Koh Lanta, Koh Rok, Koh Ha, Similan Islands, Koh Lipe. Your itinerary is fully customizable.'
    },
    {
      question: 'What\'s included in the charter price?',
      answer: 'Professional crew, all meals, drinking water, fuel, mooring, snorkeling gear, kayaks, paddleboards, safety equipment, and accident insurance. National park fees and alcoholic beverages are extra.'
    },
    {
      question: 'When is the best time for a catamaran charter in Phuket?',
      answer: 'November to April offers the best conditions — calm seas, clear skies, and steady sailing winds. December to March is peak season and books earliest. For quieter waters and lower prices, November and April are excellent shoulder months.'
    },
    {
      question: 'How far in advance should I book?',
      answer: 'Peak season (Dec–Mar): 2–4 weeks minimum. Christmas/New Year: 2–3 months recommended. For the best catamaran selection, booking early is always worthwhile — especially for multi-day charters.'
    },
    {
      question: 'What if the weather is bad?',
      answer: 'We reschedule for free, suggest alternative sheltered routes, or provide a full refund if we cancel for safety reasons. Our skippers monitor conditions constantly and will always prioritize your safety and comfort.'
    }
  ]

  return (
    <section id="faq" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-neutral-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#164e63] mb-4 text-center" style={{ fontFamily: "var(--font-playfair)" }}>
          Frequently Asked Questions
        </h2>
        <p className="text-xl text-neutral-600 mb-12 text-center">Catamaran Charters Phuket</p>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden border border-neutral-200">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-neutral-50 transition-colors duration-200"
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className="w-10 h-10 bg-[#164e63] rounded-full flex items-center justify-center flex-shrink-0">
                    <HelpCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg font-bold text-[#164e63] pr-4">{faq.question}</span>
                </div>
                <ChevronDown
                  className={`w-6 h-6 text-[#164e63] transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 pl-20">
                  <p className="text-neutral-700 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FinalCTASection() {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-gray-50 to-sky-50 py-6 sm:py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#164e63] via-[#0f3a47] to-[#0a2a35] rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 text-center">
          <h2 className="text-white mb-4 text-xl sm:text-2xl md:text-3xl font-bold">Book Your Phuket Catamaran Charter</h2>

          <p className="text-white/90 text-sm sm:text-base md:text-lg mb-6">
            Private Catamaran Sailing from €800/Day | Day Trips | Overnight Cruises | Multi-Day Expeditions
          </p>

          <p className="text-white/80 text-sm sm:text-base mb-6">Three ways to get started:</p>

          <div className="space-y-3 mb-8 text-white/90 text-sm sm:text-base max-w-2xl mx-auto text-left">
            <div className="flex items-start gap-2">
              <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <span>Call/WhatsApp: <a href="https://wa.me/66612345623" className="text-amber-300 hover:text-amber-200 font-semibold">+66 61 234 5623</a> — We respond within 1 hour during business hours</span>
            </div>
            <div className="flex items-start gap-2">
              <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <span>Email: <a href="mailto:booking@faraway-yachting.com" className="text-amber-300 hover:text-amber-200 font-semibold">booking@faraway-yachting.com</a> — Custom itinerary & quote within 24 hours</span>
            </div>
            <div className="flex items-start gap-2">
              <MessageCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <span>Line App: Connect instantly</span>
            </div>
          </div>

          <Link href="/contact" className="inline-flex items-center justify-center px-8 sm:px-10 md:px-12 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold text-white bg-amber-gradient rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 whitespace-nowrap mb-6">
            GET YOUR FREE CATAMARAN QUOTE →
          </Link>

          <div className="border-t border-white/20 pt-6 mt-6">
            <div className="flex items-start gap-2 text-white/70 text-xs sm:text-sm max-w-2xl mx-auto text-left mb-2">
              <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <span>Office: Chalong Bay, Phuket — 15 minutes from Phuket Town, 30 minutes from Patong, 40 minutes from the airport</span>
            </div>
            <p className="text-white/60 text-xs text-center">
              Tourism Authority of Thailand Licensed (OTD #34/02546) • Fully Insured • World Luxury Travel Awards Winner 2025
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
