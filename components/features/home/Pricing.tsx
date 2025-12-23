"use client";
import { Card } from "@/components/shared/ui/card";
import { Button } from "@/components/shared/ui/button";
import { DollarSign, TrendingUp } from "lucide-react";
import { pricingFactors, priceAnchors } from "@/data/home";

export function Pricing() {

  return (
    <section id="pricing" className="py-20 md:py-28 bg-gradient-to-br from-slate-50 via-gray-50 to-sky-50">
      <div className="container mx-auto px-4 md:px-4 lg:px-4 xl:px-8">
        <div className="flex items-center gap-4 mb-6">
          <TrendingUp className="w-12 h-12 text-sky-600" />
          <h2 className="text-4xl md:text-5xl font-bold text-sky-900">
            How Pricing Works
          </h2>
        </div>

        <p className="text-xl text-gray-700 mb-12 leading-relaxed">
          Prices depend on a few factors. This transparency helps you choose quickly.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-14">
          <Card className="p-10 bg-white border-2 border-sky-200 shadow-xl">
            <h3 className="text-2xl font-bold text-sky-900 mb-7">
              Main pricing drivers
            </h3>
            <ul className="space-y-4">
              {pricingFactors.map((factor, index) => (
                <li key={index} className="flex items-center text-gray-700 text-lg">
                  <DollarSign className="w-6 h-6 text-sky-600 mr-4 flex-shrink-0" />
                  {factor}
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-10 bg-white border-2 border-sky-200 shadow-xl">
            <h3 className="text-2xl font-bold text-sky-900 mb-7">
              Price anchors
            </h3>
            <div className="space-y-5">
              {priceAnchors.map((item, index) => (
                <div key={index} className="flex justify-between items-center border-l-4 border-sky-600 pl-5 py-3 bg-gradient-to-r from-sky-50 to-transparent rounded-r-lg">
                  <span className="text-gray-700 text-lg">{item.service}:</span>
                  <span className="font-bold text-sky-700 text-lg">{item.price}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-sky-900 to-blue-900 text-white rounded-3xl p-12 text-center shadow-2xl border-4 border-amber-400">
          <h3 className="text-3xl font-bold mb-5">
            Fastest path to your perfect charter
          </h3>
          <p className="text-xl mb-8 text-sky-100 leading-relaxed max-w-2xl mx-auto">
            Send your dates + group size, and we&apos;ll recommend the best options with clear pricing.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-10 py-7 text-xl rounded-xl shadow-2xl transform hover:scale-105 transition-all"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Get Your Personalized Quote
          </Button>
        </div>
      </div>
    </section>
  );
}
