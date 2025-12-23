"use client";
import { Card } from "@/components/shared/ui/card";
import { Button } from "@/components/shared/ui/button";
import { Check, Calendar } from "lucide-react";
import { steps, inquiryChecklist, explorePages } from "@/data/home";

export function Booking() {
  return (
    <section id="booking" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-4 lg:px-4 xl:px-8">
        <div className="flex items-center gap-4 mb-6">
          <Calendar className="w-12 h-12 text-sky-600" />
          <h2 className="text-4xl md:text-5xl font-bold text-sky-900">
            How Booking Works
          </h2>
        </div>

        <p className="text-xl text-gray-700 mb-12 leading-relaxed">Simple and fast:</p>

        <div className="grid md:grid-cols-4 gap-5 mb-14">
          {steps.map((step, index) => (
            <Card key={index} className="p-7 text-center bg-gradient-to-br from-sky-50 to-blue-50 border-2 border-sky-200 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-sky-600 to-blue-700 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-5 shadow-lg">
                {index + 1}
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">{step}</p>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-14">
          <Card className="p-10 bg-gradient-to-br from-sky-50 to-blue-50 border-4 border-sky-200 shadow-xl">
            <h3 className="text-2xl font-bold text-sky-900 mb-7">
              The 20-second inquiry checklist
            </h3>
            <ul className="space-y-4">
              {inquiryChecklist.map((item, index) => (
                <li key={index} className="flex items-start">
                  <Check className="w-6 h-6 text-sky-600 mt-1 mr-4 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-10 bg-white border-4 border-gray-200 shadow-xl">
            <h3 className="text-2xl font-bold text-sky-900 mb-7">
              Explore All Pages
            </h3>
            <ul className="space-y-4">
              {explorePages.map((page, index) => (
                <li key={index} className="flex items-center text-sky-600 hover:text-sky-700 font-semibold text-lg cursor-pointer hover:underline">
                  → {page}
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-sky-900 via-blue-900 to-cyan-900 text-white rounded-3xl p-16 text-center shadow-2xl border-4 border-amber-400">
          <h3 className="text-4xl font-bold mb-7 tracking-tight">INQUIRE NOW</h3>
          <p className="text-2xl mb-10 text-sky-100 leading-relaxed max-w-2xl mx-auto">
            Ready to start planning your Phuket sailing adventure?
          </p>
          <Button size="lg" className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-12 py-8 text-2xl rounded-2xl shadow-2xl transform hover:scale-105 transition-all font-bold"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Get Your Individual Quote
          </Button>
        </div>
      </div>
    </section>
  );
}
