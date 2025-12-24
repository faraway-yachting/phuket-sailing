"use client";

import { Button } from "@/components/shared/ui/button";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center overflow-hidden py-8 sm:py-0">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/images/home/catamaran-aerial-hero.jpg"
          alt="Phuket Sailing Background - Aerial View of Catamaran"
          fill
          className="object-cover"
          priority
          quality={90}
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-sky-900/70 via-blue-900/60 to-sky-900/70"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjMDI4NGM3IiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4xIi8+PC9nPjwvc3ZnPg==')] opacity-5"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <div className="mb-8 sm:mb-12 md:mb-14">
            <div className="inline-block bg-white rounded-xl sm:rounded-2xl px-3 py-2.5 sm:px-5 sm:py-4 shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
              <Image
                src="/assets/images/home/sail-away-charter-2.png"
                alt="Sail Away Charters Logo"
                width={180}
                height={48}
                className="w-36 sm:w-44 md:w-52 h-auto"
                priority
              />
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 sm:mb-10 md:mb-12 tracking-tight [text-shadow:_0_4px_20px_rgba(0,0,0,0.5),_0_2px_8px_rgba(0,0,0,0.3)] px-2">
            Phuket Sailing
          </h1>

          <div className="mb-8 sm:mb-12 md:mb-14 space-y-4 sm:space-y-5 md:space-y-6 max-w-4xl w-full px-2">
            <div className="inline-block bg-black/20 backdrop-blur-sm rounded-xl sm:rounded-2xl px-4 py-3 sm:px-6 sm:py-4 border border-white/10 w-full sm:w-auto">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight [text-shadow:_0_3px_15px_rgba(0,0,0,0.6),_0_1px_5px_rgba(0,0,0,0.4)]">
                Plan your perfect{" "}
                <span className="text-amber-300 [text-shadow:_0_2px_10px_rgba(251,191,36,0.4)]">Sailing Phuket</span>{" "}
                adventure in minutes
              </p>
            </div>
            <div className="inline-block bg-black/15 backdrop-blur-sm rounded-lg sm:rounded-xl px-4 py-2.5 sm:px-5 sm:py-3 border border-white/10 max-w-3xl w-full sm:w-auto">
              <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed font-medium [text-shadow:_0_2px_10px_rgba(0,0,0,0.5)]">
                Select your boat style, choose your trip duration, and we&apos;ll recommend the ideal route for your dates—simple, transparent, and designed for your perfect holiday.
              </p>
            </div>
          </div>

          <div className="w-full sm:w-auto px-4 sm:px-0">
            <Button
              size="lg"
              className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto px-8 py-6 sm:px-12 sm:py-8 text-lg sm:text-xl rounded-full"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Your Individual Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
