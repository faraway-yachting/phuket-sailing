'use client'

import { useState } from 'react'
import { HelpCircle, ChevronDown } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  faqs: FAQItem[]
  title: string
  subtitle?: string
  id?: string
}

export function FAQAccordion({ faqs, title, subtitle, id = 'faq' }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id={id} className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-neutral-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#164e63] mb-4 text-center" style={{ fontFamily: "var(--font-playfair)" }}>
          {title}
        </h2>
        {subtitle && <p className="text-xl text-neutral-600 mb-12 text-center">{subtitle}</p>}

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
                <div className="px-4 sm:px-6 pb-5 pl-10 sm:pl-16 md:pl-20">
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
