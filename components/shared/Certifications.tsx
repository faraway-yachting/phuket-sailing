import Image from 'next/image'
import Link from 'next/link'

export function Certifications() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-xl shadow-gray-300/30 p-6 sm:p-8">
          <Link href="/terms-and-conditions" className="block text-[#164e63] text-center text-base sm:text-lg font-bold mb-4 sm:mb-6 hover:text-[#14b8a6] transition-colors underline underline-offset-4" style={{ fontFamily: "var(--font-playfair)" }}>
            Booking Terms and Conditions
          </Link>
          
          {/* Tourism Authority Certificate - Featured */}
          <div className="flex flex-col items-center mb-6 sm:mb-8">
            <Image src="/assets/images/certificates/certificate1.png" alt="Tourism Authority of Thailand" width={120} height={120} className="object-contain mb-3 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32" />
            <p className="text-[#164e63] text-sm sm:text-base font-semibold text-center px-4">
              Tourism Authority Thailand OTD Licence #34/02546
            </p>
          </div>

          {/* Other Certificates */}
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
            <Image src="/assets/images/certificates/certificate2.png" alt="TripAdvisor 2016 Certificate of Excellence" width={72} height={72} className="object-contain w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18" />
            <Image src="/assets/images/certificates/certificate3.png" alt="TripAdvisor 2017 Certificate of Excellence" width={72} height={72} className="object-contain w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18" />
            <Image src="/assets/images/certificates/certificate4.png" alt="TripAdvisor 2018 Certificate of Excellence" width={72} height={72} className="object-contain w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18" />
            <Image src="/assets/images/certificates/certificate5.png" alt="TripAdvisor 2019 Certificate of Excellence" width={72} height={72} className="object-contain w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18" />
            <div className="bg-white rounded-xl p-1.5 sm:p-2 shadow-sm">
              <Image src="/assets/images/certificates/certificate6.webp" alt="Travelers Choice 2023" width={64} height={64} className="object-contain w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" />
            </div>
            <Image src="/assets/images/certificates/certificate7.gif" alt="TripAdvisor Travelers Choice Awards 2025" width={88} height={68} className="object-contain w-16 h-12 sm:w-20 sm:h-16 md:w-22 md:h-17" />
            <div className="bg-[#164e63] rounded-full p-2 sm:p-3 shadow-md">
              <Image src="/assets/images/certificates/certificate8.webp" alt="World Luxury Travel Awards 2025 Winner" width={84} height={84} className="object-contain w-16 h-16 sm:w-18 sm:h-18 md:w-21 md:h-21" />
            </div>
            <Image src="/assets/images/certificates/2025PersonalisedTravelWinnerLogo2631.webp" alt="Personalised Travel Winner 2025" width={72} height={72} className="object-contain w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18" />
          </div>
        </div>
      </div>
    </section>
  )
}
