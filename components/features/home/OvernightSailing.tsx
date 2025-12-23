"use client";
import { Card } from "@/components/shared/ui/card";
import { Button } from "@/components/shared/ui/button";
import { Check, MapPin, Sparkles } from "lucide-react";
import { overnightBenefits, destinations, tripDurations } from "@/data/home";

export function OvernightSailing() {

  return (
    <section id="overnight-sailing" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-4 lg:px-4 xl:px-8">
        <div className="flex items-center gap-4 mb-6">
          <Sparkles className="w-12 h-12 text-amber-500" />
          <h2 className="text-4xl md:text-5xl font-bold text-sky-900">
            Overnight Sailing Trips Phuket
          </h2>
        </div>

        <p className="text-xl text-gray-700 mb-10 max-w-4xl leading-relaxed">
          If you want the trip that people talk about for years, choose overnight sailing. Day trips are fun, but overnight is where Phuket becomes quiet, beautiful, and unhurried.
        </p>

        <div className="mb-14">
          <h3 className="text-3xl font-bold text-sky-900 mb-7">
            Why overnight sailing feels different
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {overnightBenefits.map((benefit, index) => (
              <div key={index} className="flex items-start bg-gradient-to-br from-sky-50 to-blue-50 p-5 rounded-xl border-2 border-sky-200">
                <Check className="w-6 h-6 text-green-600 mt-0.5 mr-4 flex-shrink-0" />
                <span className="text-gray-700 text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-10 mb-14 border-2 border-amber-200 shadow-xl">
          <h3 className="text-3xl font-bold text-sky-900 mb-5">
            Our honest recommendation: 5 nights minimum (if you can)
          </h3>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            If your schedule allows, <strong className="text-amber-700">5+ nights</strong> is the sweet spot. That&apos;s when you can reach more remote areas and enjoy a calmer experience than the busiest hotspots.
          </p>

          <h4 className="text-2xl font-bold text-sky-900 mb-6">
            Three standout &quot;off-the-beaten-track&quot; destinations:
          </h4>
          <div className="grid md:grid-cols-3 gap-5">
            {destinations.map((dest, index) => (
              <Card key={index} className="p-6 bg-white hover:shadow-xl transition-shadow border-2 border-amber-200">
                <div className="flex items-start mb-3">
                  <MapPin className="w-6 h-6 text-sky-600 mt-0.5 mr-3 flex-shrink-0" />
                  <h5 className="font-bold text-lg text-sky-900">{dest.name}</h5>
                </div>
                <p className="text-gray-600">{dest.description}</p>
              </Card>
            ))}
          </div>
          <p className="text-gray-700 mt-8 leading-relaxed text-lg">
            These areas are typically far less crowded than the most popular day-trip zones like Phang Nga Bay or Phi Phi islands. That&apos;s why we recommend five nights minimum when guests want the best version of Phuket sailing.
          </p>
        </div>

        <div className="mb-14">
          <h3 className="text-3xl font-bold text-sky-900 mb-7">
            Shorter overnights still work
          </h3>
          <p className="text-lg text-gray-700 mb-7">
            If you have fewer nights, we&apos;ll plan a route that feels realistic and relaxed:
          </p>
          <div className="space-y-5">
            {tripDurations.map((trip, index) => (
              <div key={index} className="flex items-start border-l-4 border-sky-600 bg-gradient-to-r from-sky-50 to-transparent pl-6 py-4 rounded-r-xl">
                <div>
                  <h4 className="font-bold text-xl text-sky-900 mb-2">{trip.duration}:</h4>
                  <p className="text-gray-600 text-lg">{trip.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-sky-900 to-blue-900 rounded-3xl p-10 text-center shadow-2xl">
          <p className="text-white text-xl mb-6 leading-relaxed">
            Tell us your dates and number of nights and we&apos;ll recommend the best route.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-10 py-7 text-xl rounded-xl shadow-xl transform hover:scale-105 transition-all"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Start here: Overnight Sailing Trips Phuket →
          </Button>
        </div>
      </div>
    </section>
  );
}
