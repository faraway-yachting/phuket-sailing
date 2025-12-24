"use client";
import { Card } from "@/components/shared/ui/card";
import { Button } from "@/components/shared/ui/button";
import { Check, Calendar } from "lucide-react";
import { steps, inquiryChecklist, explorePages } from "@/data/home";

export function Booking() {
  return (
    <section id="booking" className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="flex items-center gap-4 mb-8">
          <Calendar className="w-12 h-12 text-sky-600" />
          <h2 className="heading-section">
            How Booking Works
          </h2>
        </div>

        <p className="text-body-large text-gray-700 mb-14 leading-relaxed">Simple and fast:</p>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {steps.map((step, index) => (
            <Card key={index} className="p-8 text-center card-elevated-hover">
              <div className="w-16 h-16 bg-gradient-to-br from-sky-600 to-blue-700 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg">
                {index + 1}
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">{step}</p>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="p-10 gradient-ocean border border-sky-200 shadow-xl">
            <h3 className="heading-subsection mb-8">
              The 20-second inquiry checklist
            </h3>
            <ul className="space-y-5">
              {inquiryChecklist.map((item, index) => (
                <li key={index} className="flex items-start">
                  <Check className="w-6 h-6 text-sky-600 mt-1 mr-4 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-10 card-elevated">
            <h3 className="heading-subsection mb-8">
              Explore All Pages
            </h3>
            <ul className="space-y-5">
              {explorePages.map((page, index) => (
                <li key={index} className="flex items-center text-sky-600 hover:text-sky-700 font-semibold text-lg cursor-pointer hover:underline transition-colors duration-300">
                  → {page}
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <div className="gradient-ocean-dark text-white rounded-3xl p-16 text-center shadow-2xl border-2 border-amber-400/60">
          <h3 className="text-4xl font-bold mb-8 tracking-tight">INQUIRE NOW</h3>
          <p className="text-2xl mb-12 text-sky-100 leading-relaxed max-w-2xl mx-auto">
            Ready to start planning your Phuket sailing adventure?
          </p>
          <Button 
            size="lg" 
            className="button-primary px-14 py-8 text-2xl rounded-2xl font-bold"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Your Individual Quote
          </Button>
        </div>
      </div>
    </section>
  );
}
