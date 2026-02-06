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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-6 sm:pb-10">
        <h3 className="text-center text-[#164e63] text-sm sm:text-base md:text-lg font-medium px-4">
          By submitting this form, you agree to our{" "}
          <Link href="/terms-and-conditions" className="text-[#164e63] font-semibold hover:text-[#14b8a6] transition-colors underline underline-offset-4">
            Terms &amp; Conditions
          </Link>
        </h3>
      </div>
    </div>
  );
}
