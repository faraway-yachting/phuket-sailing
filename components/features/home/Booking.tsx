"use client";
import { Button } from "@/components/shared/ui/button";
import { Check, Send, Ship, ThumbsUp, CheckSquare } from "lucide-react";
import { steps, inquiryChecklist } from "@/data/home";

const stepIcons = [Send, Ship, ThumbsUp, CheckSquare];

export function Booking() {
  return (
    <section id="booking" className="py-20 md:py-28 bg-gradient-to-br from-slate-50 via-gray-50 to-sky-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-sky-900 mb-5">
            How Booking Works
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="h-1 w-12 bg-[#164e63] rounded-full"></div>
            <div className="h-2 w-2 bg-amber-500 rounded-full"></div>
            <div className="h-1 w-12 bg-[#164e63] rounded-full"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Simple and fast — from inquiry to sailing in just 4 easy steps
          </p>
        </div>

        {/* Step Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-14 max-w-5xl mx-auto">
          {/* Step 1 & 2 Card */}
          <div className="relative bg-gradient-to-br from-sky-800 via-sky-900 to-slate-900 rounded-3xl p-8 shadow-xl group hover:shadow-2xl transition-all duration-300">
            {/* Gold Number Badge */}
            <div className="absolute -top-4 left-8 w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
              <span className="text-white font-bold text-lg">1</span>
            </div>

            {/* Content */}
            <div className="mt-4">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                Start & Share your details
              </h3>
              <p className="text-sky-100/80 text-base leading-relaxed mb-6">
                {steps[0]}
              </p>

              <div className="border-t border-white/10 pt-6">
                <p className="text-sky-100/80 text-base leading-relaxed">
                  {steps[1]}
                </p>
              </div>
            </div>
          </div>

          {/* Step 3 Card */}
          <div className="relative bg-gradient-to-br from-sky-800 via-sky-900 to-slate-900 rounded-3xl p-8 shadow-xl group hover:shadow-2xl transition-all duration-300">
            {/* Gold Number Badge */}
            <div className="absolute -top-4 left-8 w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
              <span className="text-white font-bold text-lg">2</span>
            </div>

            {/* Content */}
            <div className="mt-4">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                Get tailored recommendations
              </h3>
              <p className="text-sky-100/80 text-base leading-relaxed mb-6">
                {steps[2]}
              </p>

              <div className="border-t border-white/10 pt-6">
                <p className="text-sky-100/80 text-base leading-relaxed">
                  Compare options transparently with clear pricing and details.
                </p>
              </div>
            </div>
          </div>

          {/* Step 4 Card - Inquiry Checklist */}
          <div className="relative bg-gradient-to-br from-sky-800 via-sky-900 to-slate-900 rounded-3xl p-8 shadow-xl group hover:shadow-2xl transition-all duration-300">
            {/* Gold Number Badge */}
            <div className="absolute -top-4 left-8 w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
              <span className="text-white font-bold text-lg">3</span>
            </div>

            {/* Content */}
            <div className="mt-4">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                What to include in your inquiry
              </h3>
              <ul className="space-y-3">
                {inquiryChecklist.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 bg-amber-400/20 rounded flex items-center justify-center mr-3 mt-0.5">
                      <Check className="w-3 h-3 text-amber-400" strokeWidth={3} />
                    </div>
                    <span className="text-sky-100/80 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Final Step - Confirm Banner */}
        <div className="max-w-5xl mx-auto mb-14">
          <div className="relative bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            {/* Left - Step Number & Text */}
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                <span className="text-amber-600 font-bold text-2xl">4</span>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  Confirm and relax
                </h3>
                <p className="text-white/90 text-base">
                  Book with confidence — we handle all the details for your perfect trip
                </p>
              </div>
            </div>

            {/* Right - CTA */}
            <Button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white hover:bg-gray-100 text-amber-600 px-8 py-6 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 whitespace-nowrap"
            >
              Start Your Inquiry
            </Button>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-3xl p-10 text-center border-2 border-sky-200 shadow-xl max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-sky-900 mb-4">
            Ready to start planning?
          </h3>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            Send us your dates and group size — we&apos;ll craft the perfect sailing adventure for you
          </p>
          <Button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-10 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Get Your Individual Quote
          </Button>
        </div>
      </div>
    </section>
  );
}
