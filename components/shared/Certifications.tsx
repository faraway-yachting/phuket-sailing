'use client'

import Image from 'next/image'
import { LocaleLink } from '@/components/shared/LocaleLink'

export function Certifications() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-xl shadow-gray-300/30 p-8 sm:p-12">
          <LocaleLink href="/terms-and-conditions" className="block text-[#164e63] text-center text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 hover:text-[#14b8a6] transition-colors underline underline-offset-4" style={{ fontFamily: "var(--font-playfair)" }}>
            Booking Terms and Conditions
          </LocaleLink>

          {/* Tourism Authority Certificate - Featured */}
          <div className="flex flex-col items-center mb-8 sm:mb-12">
            <Image src="/assets/images/certificates/certificate1.png" alt="Tourism Authority of Thailand" width={160} height={160} className="object-contain mb-4 w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40" />
            <p className="text-[#164e63] text-sm sm:text-base md:text-lg font-semibold text-center px-4">
              Tourism Authority Thailand OTD Licence #34/02546
            </p>
          </div>

          {/* Other Certificates */}
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8">
            <Image src="/assets/images/certificates/certificate2.png" alt="TripAdvisor 2016 Certificate of Excellence" width={96} height={96} className="object-contain w-20 h-20 sm:w-22 sm:h-22 md:w-24 md:h-24" />
            <Image src="/assets/images/certificates/certificate3.png" alt="TripAdvisor 2017 Certificate of Excellence" width={96} height={96} className="object-contain w-20 h-20 sm:w-22 sm:h-22 md:w-24 md:h-24" />
            <Image src="/assets/images/certificates/certificate4.png" alt="TripAdvisor 2018 Certificate of Excellence" width={96} height={96} className="object-contain w-20 h-20 sm:w-22 sm:h-22 md:w-24 md:h-24" />
            <Image src="/assets/images/certificates/certificate5.png" alt="TripAdvisor 2019 Certificate of Excellence" width={96} height={96} className="object-contain w-20 h-20 sm:w-22 sm:h-22 md:w-24 md:h-24" />
            <div className="bg-white rounded-xl p-2 sm:p-3 shadow-sm">
              <Image src="/assets/images/certificates/certificate6.webp" alt="Travelers Choice 2023" width={88} height={88} className="object-contain w-16 h-16 sm:w-20 sm:h-20 md:w-22 md:h-22" />
            </div>
            <Image src="/assets/images/certificates/certificate7.gif" alt="TripAdvisor Travelers Choice Awards 2025" width={120} height={96} className="object-contain w-20 h-16 sm:w-24 sm:h-20 md:w-28 md:h-24" />
            <div className="bg-[#164e63] rounded-full p-2 sm:p-2.5 shadow-md">
              <Image src="/assets/images/certificates/certificate8.webp" alt="World Luxury Travel Awards 2025 Winner" width={112} height={112} className="object-contain w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28" />
            </div>
            <Image src="/assets/images/certificates/2025PersonalisedTravelWinnerLogo2631.webp" alt="Personalised Travel Winner 2025" width={96} height={96} className="object-contain w-20 h-20 sm:w-22 sm:h-22 md:w-24 md:h-24" />
          </div>
        </div>
      </div>
    </section>
  )
}
