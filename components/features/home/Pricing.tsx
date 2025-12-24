"use client";
import { Card } from "@/components/shared/ui/card";
import { Button } from "@/components/shared/ui/button";
import { DollarSign, TrendingUp } from "lucide-react";
import { pricingFactors, priceAnchors } from "@/data/home";

export function Pricing() {
  return (
    <section id="pricing" className="section-padding gradient-ocean">
      <div className="container mx-auto container-padding">
        <div className="flex items-center gap-4 mb-8">
          <TrendingUp className="w-12 h-12 text-sky-600" />
          <h2 className="heading-section">
            How Pricing Works
          </h2>
        </div>

        <p className="text-body-large text-gray-700 mb-14 leading-relaxed">
          Prices depend on a few factors. This transparency helps you choose quickly.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="p-10 card-elevated">
            <h3 className="heading-subsection mb-8">
              Main pricing drivers
            </h3>
            <ul className="space-y-5">
              {pricingFactors.map((factor, index) => (
                <li key={index} className="flex items-center text-gray-700 text-lg">
                  <DollarSign className="w-6 h-6 text-sky-600 mr-4 flex-shrink-0" />
                  {factor}
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-10 card-elevated">
            <h3 className="heading-subsection mb-8">
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

        <div className="gradient-ocean-dark text-white rounded-3xl p-12 text-center shadow-2xl border-2 border-amber-400/60">
          <h3 className="text-3xl font-bold mb-6">
            Fastest path to your perfect charter
          </h3>
          <p className="text-xl mb-10 text-sky-100 leading-relaxed max-w-2xl mx-auto">
            Send your dates + group size, and we&apos;ll recommend the best options with clear pricing.
          </p>
          <Button 
            size="lg" 
            className="button-primary px-12 py-7 text-xl rounded-xl"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Your Personalized Quote
          </Button>
        </div>
      </div>
    </section>
  );
}
