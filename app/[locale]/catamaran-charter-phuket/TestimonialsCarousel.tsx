'use client'

import { useState, useEffect } from 'react'
import { Star } from 'lucide-react'

interface Testimonial {
  quote: string
  author: string
  url: string
}

export function TestimonialsCarousel({ testimonials, sectionTitle }: { testimonials: Testimonial[]; sectionTitle: string }) {
  const [currentPage, setCurrentPage] = useState(0)
  const [cardsPerView, setCardsPerView] = useState(1)

  useEffect(() => {
    const updateCards = () => setCardsPerView(window.innerWidth >= 768 ? 3 : 1)
    updateCards()
    window.addEventListener('resize', updateCards)
    return () => window.removeEventListener('resize', updateCards)
  }, [])

  useEffect(() => {
    setCurrentPage(0)
  }, [cardsPerView])

  const maxStart = Math.max(0, testimonials.length - cardsPerView)
  const currentTestimonials = testimonials.slice(currentPage, currentPage + cardsPerView)

  const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, maxStart))
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 0))

  const getInitial = (name: string) => name.charAt(0).toUpperCase()

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-50 via-gray-50 to-sky-50">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#164e63] mb-5" style={{ fontFamily: "var(--font-playfair)" }}>
            {sectionTitle}
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="h-1 w-12 bg-[#164e63] rounded-full"></div>
            <div className="h-2 w-2 bg-amber-500 rounded-full"></div>
            <div className="h-1 w-12 bg-[#164e63] rounded-full"></div>
          </div>
        </div>

        <div className="relative">
          <button
            onClick={prevPage}
            className="flex absolute -left-2 sm:-left-4 md:-left-14 top-1/2 -translate-y-1/2 w-9 h-9 md:w-12 md:h-12 bg-[#0c3b4a] hover:bg-[#164e63] text-white rounded-full shadow-lg items-center justify-center transition-all duration-300 hover:scale-110 z-20"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextPage}
            className="flex absolute -right-2 sm:-right-4 md:-right-14 top-1/2 -translate-y-1/2 w-9 h-9 md:w-12 md:h-12 bg-[#0c3b4a] hover:bg-[#164e63] text-white rounded-full shadow-lg items-center justify-center transition-all duration-300 hover:scale-110 z-20"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {currentTestimonials.map((testimonial, index) => (
              <a key={index} href={testimonial.url} target="_blank" rel="noopener noreferrer" className="relative bg-gradient-to-br from-[#164e63] via-[#0f3a47] to-[#0a2a35] rounded-3xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center cursor-pointer">
                <div className="absolute -top-5 w-12 h-12 bg-gradient-to-br from-[#14b8a6] to-[#0d9488] rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                  <span className="text-white text-xl font-bold">{getInitial(testimonial.author)}</span>
                </div>

                <div className="mt-4">
                  <h4 className="text-lg font-bold text-white mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
                    {testimonial.author}
                  </h4>
                </div>

                <p className="text-white/80 text-sm leading-relaxed mb-6 flex-1">
                  {testimonial.quote}
                </p>

                <div className="flex items-center gap-1 pt-4 border-t border-white/20 w-full justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxStart + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`transition-all duration-300 rounded-full ${
                currentPage === index ? 'w-8 h-3 bg-[#14b8a6]' : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
