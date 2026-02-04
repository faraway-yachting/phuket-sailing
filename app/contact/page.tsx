import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/features/home/ContactForm";

export const metadata = {
  title: "Contact Us | Phuket Sailing",
  description:
    "Get in touch with Phuket Sailing. Fill out our form to get a personalized quote for your yacht charter.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#f8fffe]">
      {/* Hero Banner */}
      <div className="relative w-full h-64 sm:h-72 md:h-80">
        <Image
          src="/assets/images/home/catamaran-aerial-hero.jpg"
          alt="Phuket Sailing"
          fill
          className="object-cover blur-sm"
          priority
        />
        <div className="absolute inset-0 bg-[#0f3a47]/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-4">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
            Contact Us
          </h1>
          <p className="text-white/90 text-base sm:text-lg md:text-xl text-center max-w-xl drop-shadow-[0_1px_6px_rgba(0,0,0,0.5)]">
            Plan your perfect sailing adventure with our expert team
          </p>
        </div>
      </div>

      {/* Contact Form Section */}
      <ContactForm />

      {/* Terms Link */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <h3 className="text-center text-[#164e63] text-lg font-medium">
          By submitting this form, you agree to our{" "}
          <Link href="/terms" className="text-[#164e63] font-semibold hover:text-[#14b8a6] transition-colors underline underline-offset-4">
            Terms &amp; Conditions
          </Link>
        </h3>
      </div>

      {/* Certifications & Awards */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-xl shadow-gray-300/30 p-8">
          <h3 className="text-[#164e63] text-center text-lg font-semibold mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
            Our Certifications &amp; Awards
          </h3>
          <div className="w-12 h-0.5 bg-gradient-to-r from-[#14b8a6] to-[#FF8C00] rounded-full mx-auto mb-6" />

          {/* Tourism Authority Certificate - Featured */}
          <div className="flex flex-col items-center mb-8">
            <Image src="/assets/images/certificates/certificate1.png" alt="Tourism Authority of Thailand" width={120} height={120} className="object-contain mb-3" />
            <p className="text-[#164e63] text-base font-semibold text-center">
              Tourism Authority Thailand OTD Licence #34/02546
            </p>
          </div>

          {/* Other Certificates */}
          <div className="flex flex-wrap justify-center items-center gap-6">
            <Image src="/assets/images/certificates/certificate2.png" alt="TripAdvisor 2016 Certificate of Excellence" width={72} height={72} className="object-contain" />
            <Image src="/assets/images/certificates/certificate3.png" alt="TripAdvisor 2017 Certificate of Excellence" width={72} height={72} className="object-contain" />
            <Image src="/assets/images/certificates/certificate4.png" alt="TripAdvisor 2018 Certificate of Excellence" width={72} height={72} className="object-contain" />
            <Image src="/assets/images/certificates/certificate5.png" alt="TripAdvisor 2019 Certificate of Excellence" width={72} height={72} className="object-contain" />
            <div className="bg-white rounded-xl p-2 shadow-sm">
              <Image src="/assets/images/certificates/certificate6.webp" alt="Travelers Choice 2023" width={64} height={64} className="object-contain" />
            </div>
            <Image src="/assets/images/certificates/certificate7.gif" alt="TripAdvisor Travelers Choice Awards 2025" width={88} height={68} className="object-contain" />
            <div className="bg-[#164e63] rounded-full p-3 shadow-md">
              <Image src="/assets/images/certificates/certificate8.webp" alt="World Luxury Travel Awards 2025 Winner" width={84} height={84} className="object-contain" />
            </div>
            <Image src="/assets/images/certificates/2025PersonalisedTravelWinnerLogo2631.webp" alt="Personalised Travel Winner 2025" width={72} height={72} className="object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
}
