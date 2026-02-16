'use client'

import { Phone, Mail, MessageCircle, MapPin } from 'lucide-react'
import { LocaleLink } from '@/components/shared/LocaleLink'

interface BookingCTAProps {
  title?: string
  subtitle?: string
  buttonText?: string
}

export function BookingCTA({
  title = "Start Planning Your Charter",
  subtitle = "Private Sailing from €800/Day | Day Trips | Overnight Cruises | Multi-Day Expeditions",
  buttonText = "GET YOUR FREE QUOTE →",
}: BookingCTAProps) {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-gray-50 to-sky-50 py-6 sm:py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#164e63] via-[#0f3a47] to-[#0a2a35] rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 text-center">

          <h2 className="text-white mb-4 text-xl sm:text-2xl md:text-3xl font-bold" style={{ fontFamily: "var(--font-playfair)" }}>
            {title}
          </h2>

          <p className="text-white/90 text-sm sm:text-base md:text-lg mb-6">
            {subtitle}
          </p>

          <p className="text-white/80 text-sm sm:text-base mb-6">Three ways to get started:</p>

          <div className="space-y-3 mb-8 text-white/90 text-sm sm:text-base max-w-2xl mx-auto text-left">
            <div className="flex items-start gap-2">
              <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <span>
                Call/WhatsApp:{' '}
                <a href="https://wa.me/66612345623" className="text-amber-300 hover:text-amber-200 font-semibold">
                  +66 61 234 5623
                </a>{' '}
                — We respond within 1 hour during business hours
              </span>
            </div>
            <div className="flex items-start gap-2">
              <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <span>
                Email:{' '}
                <a href="mailto:booking@faraway-yachting.com" className="text-amber-300 hover:text-amber-200 font-semibold">
                  booking@faraway-yachting.com
                </a>{' '}
                — Custom itinerary & quote within 24 hours
              </span>
            </div>
            <div className="flex items-start gap-2">
              <MessageCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <span>Line App: <a href="https://line.me/ti/p/IF91DcUiYa" target="_blank" rel="noopener noreferrer" className="text-amber-300 hover:text-amber-200 font-semibold underline">Connect</a></span>
            </div>
          </div>

          <LocaleLink
            href="/contact"
            className="inline-flex items-center justify-center px-8 sm:px-10 md:px-12 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold text-white bg-amber-gradient rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 whitespace-nowrap mb-6"
          >
            {buttonText}
          </LocaleLink>

          <div className="border-t border-white/20 pt-6 mt-6">
            <div className="flex items-start gap-2 text-white/70 text-xs sm:text-sm max-w-2xl mx-auto text-left mb-2">
              <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <span className="leading-relaxed">Office: Chalong Bay, Phuket — 15 minutes from Phuket Town, 30 minutes from Patong, 40 minutes from the airport</span>
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
