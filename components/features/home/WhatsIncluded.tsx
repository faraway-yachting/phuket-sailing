"use client";
import { Card } from "@/components/shared/ui/card";
import { Button } from "@/components/shared/ui/button";
import { Check, Circle, Backpack } from "lucide-react";
import { typicallyIncluded, oftenOptional } from "@/data/home";

export function WhatsIncluded() {

  return (
    <section id="whats-included" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-4 lg:px-4 xl:px-8">
        <div className="flex items-center gap-4 mb-6">
          <Backpack className="w-12 h-12 text-sky-600" />
          <h2 className="text-4xl md:text-5xl font-bold text-sky-900">
            What&apos;s Included
          </h2>
        </div>

        <p className="text-xl text-gray-700 mb-12 leading-relaxed">
          Inclusions vary by boat and trip type, but we keep it clear before you confirm anything.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-14">
          <Card className="p-10 bg-gradient-to-br from-green-50 to-emerald-50 border-4 border-green-200 shadow-xl">
            <h3 className="text-2xl font-bold text-sky-900 mb-7">
              Typically included on crewed charters
            </h3>
            <ul className="space-y-4">
              {typicallyIncluded.map((item, index) => (
                <li key={index} className="flex items-start">
                  <Check className="w-6 h-6 text-green-600 mt-1 mr-4 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-10 bg-gradient-to-br from-blue-50 to-sky-50 border-4 border-blue-200 shadow-xl">
            <h3 className="text-2xl font-bold text-sky-900 mb-7">
              Often optional (depends on boat / route)
            </h3>
            <ul className="space-y-4">
              {oftenOptional.map((item, index) => (
                <li key={index} className="flex items-start">
                  <Circle className="w-6 h-6 text-sky-600 mt-1 mr-4 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-3xl p-10 border-2 border-gray-200 shadow-xl">
          <h3 className="text-3xl font-bold text-sky-900 mb-6">
            What to Pack
          </h3>
          <p className="text-lg text-gray-700 mb-6">Keep it simple:</p>
          <ul className="space-y-3 text-gray-700 text-lg mb-8">
            <li className="flex items-center"><span className="text-sky-600 font-bold mr-3">•</span> Swimwear (bring ideally 3 sets as you might not wear anything else)</li>
            <li className="flex items-center"><span className="text-sky-600 font-bold mr-3">•</span> Sunscreen, hat, sunglasses</li>
            <li className="flex items-center"><span className="text-sky-600 font-bold mr-3">•</span> Light cover-up / rash guard for snorkeling (we sell them at 500 THB)</li>
            <li className="flex items-center"><span className="text-sky-600 font-bold mr-3">•</span> Waterproof pouch for phone</li>
            <li className="flex items-center"><span className="text-sky-600 font-bold mr-3">•</span> Shoes that can get wet, but are suitable for hiking</li>
            <li className="flex items-center"><span className="text-sky-600 font-bold mr-3">•</span> Any personal medication (we have all kind of medications onboard seasickness, antibiotics, etc.)</li>
          </ul>
          <Button
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-6 text-lg rounded-xl shadow-lg transform hover:scale-105 transition-all">
            Want a simple, itemized quote? Get a Fast Quote →
          </Button>
        </div>
      </div>
    </section>
  );
}
