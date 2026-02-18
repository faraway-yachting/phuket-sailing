'use client'

import { useState } from 'react'
import Image from 'next/image'
import { LocaleLink } from '@/components/shared/LocaleLink'

interface Destination {
  title: string
  description?: string
  subtitle1?: string
  description1?: string
  subtitle2?: string
  description2?: string
  distance: string
  type: string
  link: string
  linkText: string
  image: string
}

export function DestinationsCarousel({ destinations, sectionTitle }: { destinations: Destination[]; sectionTitle: string }) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % destinations.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + destinations.length) % destinations.length)

  const dest = destinations[currentSlide]

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#164e63] mb-12 text-center" style={{ fontFamily: "var(--font-playfair)" }}>
          {sectionTitle}
        </h2>

        <div className="relative">
          <div className={`flex flex-col ${currentSlide === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center justify-center gap-6 md:gap-0 mx-auto`}>
            <div className={`w-full md:w-1/2 bg-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl z-10 ${currentSlide === 1 ? 'md:ml-[-80px]' : 'md:mr-[-80px]'}`}>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#0c3b4a] mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
                {dest.title}
              </h3>

              {dest.subtitle1 ? (
                <div className="space-y-2 mb-4">
                  <p className="text-neutral-600 text-xs md:text-sm leading-relaxed">
                    <span className="font-semibold text-[#0c3b4a]">{dest.subtitle1}:</span> {dest.description1}
                  </p>
                  <p className="text-neutral-600 text-xs md:text-sm leading-relaxed">
                    <span className="font-semibold text-[#0c3b4a]">{dest.subtitle2}:</span> {dest.description2}
                  </p>
                </div>
              ) : (
                <p className="text-neutral-600 leading-relaxed mb-4 text-sm">{dest.description}</p>
              )}

              <div className="h-px w-16 bg-[#0ea5e9] mb-4"></div>

              <div className="flex items-center gap-4 mb-4 text-xs md:text-sm">
                <span className="text-[#0c3b4a] font-semibold">{dest.distance}</span>
                <span className="text-neutral-500">• {dest.type}</span>
              </div>

              <LocaleLink
                href={dest.link}
                className="inline-flex items-center justify-center px-6 md:px-8 py-2.5 md:py-3 bg-[#0c3b4a] hover:bg-[#164e63] text-white text-sm font-semibold rounded-xl transition-all duration-300 hover:scale-105"
              >
                {dest.linkText || 'Know More'}
              </LocaleLink>
            </div>

            <div className="w-full md:w-[45%] relative h-[250px] sm:h-[350px] md:h-[400px] rounded-3xl overflow-hidden shadow-[0_20px_50px_-12px_rgba(12,59,74,0.5)]">
              <Image src={dest.image} alt={dest.title} fill sizes="(max-width: 768px) 100vw, 45vw" className="object-cover" />
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-1 sm:left-0 top-1/2 -translate-y-1/2 md:-translate-x-16 bg-white hover:bg-gray-50 text-[#0c3b4a] p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-20"
            aria-label="Previous destination"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-1 sm:right-0 top-1/2 -translate-y-1/2 md:translate-x-4 bg-white hover:bg-gray-50 text-[#0c3b4a] p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-20"
            aria-label="Next destination"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {destinations.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentSlide === index ? 'w-8 h-3 bg-[#0ea5e9]' : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to destination ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
