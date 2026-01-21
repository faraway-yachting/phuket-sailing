"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/shared/ui/button";
import { Check, Ship, Sailboat, ArrowRight, MessageCircle } from "lucide-react";
import { catamaranFeatures, sailingFeatures } from "@/data/home";

export function CatamaranVsSailing() {
  return (
    <section id="catamaran-vs-sailing" className="py-20 md:py-28 bg-gradient-to-b from-white via-sky-50/50 to-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block px-4 py-2 bg-[#164e63]/10 text-[#164e63] text-sm font-semibold rounded-full mb-4 tracking-wide uppercase">
            Quick Guide
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#164e63] mb-6">
            Catamaran vs Sailing Yacht
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="h-1 w-12 bg-[#164e63] rounded-full"></div>
            <div className="h-2 w-2 bg-amber-500 rounded-full"></div>
            <div className="h-1 w-12 bg-[#164e63] rounded-full"></div>
          </div>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            If you&apos;re stuck choosing, this quick comparison usually solves it
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-16 max-w-6xl mx-auto">
          {/* Catamaran Card */}
          <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
            {/* Image Container */}
            <div className="relative h-64 md:h-72 overflow-hidden">
              <Image
                src="/assets/images/home/catamaran.webp"
                alt="Catamaran charter in Phuket"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#164e63]/90 via-[#164e63]/40 to-transparent"></div>

              {/* Icon Badge */}
              <div className="absolute top-4 left-4 w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30">
                <Ship className="w-7 h-7 text-white" />
              </div>

              {/* Title on Image */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                  Choose a Catamaran
                </h3>
                <p className="text-white/80 text-lg font-medium">If you want...</p>
              </div>
            </div>

            {/* Features Content */}
            <div className="p-6 md:p-8">
              <ul className="space-y-4 mb-8">
                {catamaranFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start group/item">
                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-full flex items-center justify-center mr-4 mt-0.5 shadow-sm">
                      <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                    </div>
                    <span className="text-gray-700 text-lg leading-relaxed group-hover/item:text-[#164e63] transition-colors">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/catamaran-charters-phuket"
                className="inline-flex items-center gap-2 text-[#ca8a44] hover:text-[#b67934] font-semibold text-lg group/link transition-colors"
              >
                <span>Compare Catamaran Options</span>
                <ArrowRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Sailing Yacht Card */}
          <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
            {/* Image Container */}
            <div className="relative h-64 md:h-72 overflow-hidden">
              <Image
                src="/assets/images/home/sailing-yacht.jpg"
                alt="Sailing yacht charter in Phuket"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#164e63]/90 via-[#164e63]/40 to-transparent"></div>

              {/* Icon Badge */}
              <div className="absolute top-4 left-4 w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30">
                <Sailboat className="w-7 h-7 text-white" />
              </div>

              {/* Title on Image */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                  Choose a Sailing Yacht
                </h3>
                <p className="text-white/80 text-lg font-medium">If you want...</p>
              </div>
            </div>

            {/* Features Content */}
            <div className="p-6 md:p-8">
              <ul className="space-y-4 mb-8">
                {sailingFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start group/item">
                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-sky-500 to-blue-600 rounded-full flex items-center justify-center mr-4 mt-0.5 shadow-sm">
                      <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                    </div>
                    <span className="text-gray-700 text-lg leading-relaxed group-hover/item:text-[#164e63] transition-colors">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/sailing-yachts-phuket"
                className="inline-flex items-center gap-2 text-[#ca8a44] hover:text-[#b67934] font-semibold text-lg group/link transition-colors"
              >
                <span>Compare Sailing Yacht Options</span>
                <ArrowRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Still Unsure CTA */}
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-[#164e63] to-[#0f3a47] rounded-3xl transform rotate-1 opacity-20"></div>
          <div className="relative bg-gradient-to-r from-[#164e63] to-[#0f3a47] rounded-3xl p-8 md:p-12 text-center overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur rounded-2xl mb-6">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Still unsure which to choose?
              </h3>
              <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
                Share your group size and comfort preferences — we&apos;ll recommend the perfect match for your trip
              </p>
              <Button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#ca8a44] hover:bg-[#b67934] text-white px-8 md:px-10 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Get a Personalized Recommendation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
