"use client";

import { Button } from "@/components/shared/ui/button";
import Image from "next/image";
import { Phone, MessageCircle, Mail, MessageSquare } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/images/home/m4eqit0wfdha703wqgif.jpg"
          alt="Phuket Sailing Background"
          fill
          className="object-cover"
          priority
          quality={90}
        />
      </div>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-900/70 via-blue-900/60 to-cyan-900/70"></div>
      {/* Optional pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjMDI4NGM3IiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4xIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>

      <div className="container mx-auto px-4 md:px-4 lg:px-4 xl:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <div className="mb-10">
            <Image
              src="/assets/images/home/sail-away-charter-2.png"
              alt="Sail Away Charters Logo"
              width={320}
              height={85}
              className="w-72 md:w-96 h-auto drop-shadow-lg"
              priority
            />
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-lg">
            Phuket Sailing
          </h1>

          <p className="text-xl md:text-2xl text-white/95 mb-4 max-w-4xl leading-relaxed drop-shadow-md">
            Plan your next <strong className="text-amber-300">Sailing Phuket</strong> experience in minutes.
          </p>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl drop-shadow-md">
            Choose your boat style, pick the trip length, and we&apos;ll recommend the best route for your dates—fast, clear, and holiday-easy.
          </p>

          <div className="mb-14">
            <Button
              size="lg"
              className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-10 py-7 text-xl rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 font-semibold"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Your Individual Quote
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 w-full max-w-4xl">
            <a
              href="tel:+66612345623"
              className="group flex flex-col items-center p-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 border border-sky-100"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-slate-700 to-slate-900 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <span className="font-bold text-gray-900 text-base mb-1">Call Us</span>
              <span className="text-sm text-gray-600">+66 61 234 5623</span>
            </a>

            <a
              href="https://wa.me/66612345623"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 border border-green-100"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-7 h-7 text-white" />
              </div>
              <span className="font-bold text-gray-900 text-base mb-1">WhatsApp</span>
              <span className="text-sm text-gray-600">+66 61 234 5623</span>
            </a>

            <a
              href="mailto:bookings@faraway-yachting.com"
              className="group flex flex-col items-center p-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 border border-blue-100"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-sky-500 to-blue-600 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Mail className="w-7 h-7 text-white" />
              </div>
              <span className="font-bold text-gray-900 text-base mb-1">Email Us</span>
              <span className="text-sm text-gray-600 break-all">bookings@faraway-yachting.com</span>
            </a>

            <a
              href="https://line.me/ti/p/~phuket-sailing"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 border border-green-100"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <MessageSquare className="w-7 h-7 text-white" />
              </div>
              <span className="font-bold text-gray-900 text-base mb-1">Line App</span>
              <span className="text-sm text-gray-600">Connect Now</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
