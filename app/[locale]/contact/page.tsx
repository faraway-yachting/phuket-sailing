import Image from "next/image";
import { ContactForm } from "@/components/features/home/ContactForm";


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
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
            Contact Us
          </h1>
          <p className="text-white/90 text-base sm:text-lg md:text-xl text-center max-w-xl drop-shadow-[0_1px_6px_rgba(0,0,0,0.5)]">
            Plan your perfect sailing adventure with our expert team
          </p>
        </div>
      </div>

      {/* Contact Form Section */}
      <ContactForm />

    </div>
  );
}
