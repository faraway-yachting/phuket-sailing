"use client";
import { Button } from "@/components/shared/ui/button";
import {
  Check,
  Sun,
  Moon,
  Bed,
  Users,
  Anchor,
  CircleDollarSign,
} from "lucide-react";
import { pricingFactors, priceAnchors } from "@/data/home";

const priceIcons = [Sun, Moon, Bed, Users];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-sky-900 mb-5">
            How Pricing Works
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="h-1 w-12 bg-[#164e63] rounded-full"></div>
            <div className="h-2 w-2 bg-amber-500 rounded-full"></div>
            <div className="h-1 w-12 bg-[#164e63] rounded-full"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Prices depend on a few factors. This transparency helps you choose quickly
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-14 max-w-6xl mx-auto">
          {/* Main Pricing Drivers Card */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-sky-100 hover:border-sky-200">
            {/* Card Header */}
            <div className="bg-gradient-to-r from-sky-50 to-blue-50 p-6 md:p-8 border-b border-sky-100">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-sky-500 to-sky-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <CircleDollarSign className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-sky-900">
                  Main pricing drivers
                </h3>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-6 md:p-8">
              <ul className="space-y-4">
                {pricingFactors.map((factor, index) => (
                  <li key={index} className="flex items-center group/item p-3 rounded-xl hover:bg-sky-50 transition-colors">
                    <div className="flex-shrink-0 w-8 h-8 bg-sky-100 rounded-lg flex items-center justify-center mr-4">
                      <Check className="w-5 h-5 text-sky-600" strokeWidth={2.5} />
                    </div>
                    <span className="text-gray-700 text-lg group-hover/item:text-sky-900 transition-colors">
                      {factor}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Price Anchors Card */}
          <div className="rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-sky-600 via-sky-700 to-sky-800">
            {/* Card Header */}
            <div className="p-6 md:p-8 border-b border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white/15 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20">
                  <Anchor className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  Price anchors
                </h3>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-6 md:p-8">
              <div className="space-y-4">
                {priceAnchors.map((item, index) => {
                  const Icon = priceIcons[index % priceIcons.length];
                  return (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/10 hover:border-white/20 transition-all duration-300"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-white/15 rounded-xl flex items-center justify-center">
                          <Icon className="w-5 h-5 text-amber-300" />
                        </div>
                        <span className="text-white/90 text-lg">{item.service}:</span>
                      </div>
                      <span className="font-bold text-white text-lg md:text-xl">
                        {item.price}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Note */}
              <p className="mt-6 text-sky-200 text-sm text-center">
                * Prices vary by season, boat type, and group size
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-3xl p-10 text-center border-2 border-sky-200 shadow-xl max-w-4xl mx-auto">
          <Anchor className="w-16 h-16 text-sky-600 mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl font-bold text-sky-900 mb-4">
            Get your personalized quote
          </h3>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            Send your dates + group size, and we&apos;ll recommend the best options with clear pricing
          </p>
          <Button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 md:px-10 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Request Your Free Quote
          </Button>
        </div>
      </div>
    </section>
  );
}
