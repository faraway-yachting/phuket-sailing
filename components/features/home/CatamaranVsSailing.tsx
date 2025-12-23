"use client";
import { Card } from "@/components/shared/ui/card";
import { Button } from "@/components/shared/ui/button";
import { Check, Ship, Sailboat } from "lucide-react";
import { catamaranFeatures, sailingFeatures } from "@/data/home";

export function CatamaranVsSailing() {

  return (
    <section id="catamaran-vs-sailing" className="py-20 md:py-28 bg-gradient-to-br from-slate-50 via-gray-50 to-sky-50">
      <div className="container mx-auto px-4 md:px-4 lg:px-4 xl:px-8">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-sky-900 mb-5">
            Catamaran vs Sailing Yacht
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            If you&apos;re stuck choosing, this quick guide usually solves it.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-14">
          <Card className="p-10 bg-gradient-to-br from-cyan-50 to-teal-50 border-4 border-cyan-200 hover:shadow-2xl transition-all">
            <div className="flex items-center gap-4 mb-7">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Ship className="w-9 h-9 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-sky-900">
                Choose a catamaran
              </h3>
            </div>
            <p className="text-lg text-sky-700 font-semibold mb-5">If you want:</p>
            <ul className="space-y-4 mb-8">
              {catamaranFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="w-6 h-6 text-cyan-600 mt-0.5 mr-4 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">{feature}</span>
                </li>
              ))}
            </ul>
            <Button variant="link" className="p-0 text-cyan-600 hover:text-cyan-700 font-bold text-lg">
              Compare options: Catamaran Charters in Phuket →
            </Button>
          </Card>

          <Card className="p-10 bg-gradient-to-br from-sky-50 to-blue-50 border-4 border-sky-200 hover:shadow-2xl transition-all">
            <div className="flex items-center gap-4 mb-7">
              <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Sailboat className="w-9 h-9 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-sky-900">
                Choose a sailing yacht
              </h3>
            </div>
            <p className="text-lg text-sky-700 font-semibold mb-5">If you want:</p>
            <ul className="space-y-4 mb-8">
              {sailingFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="w-6 h-6 text-sky-600 mt-0.5 mr-4 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">{feature}</span>
                </li>
              ))}
            </ul>
            <Button variant="link" className="p-0 text-sky-600 hover:text-sky-700 font-bold text-lg">
              Compare options: Sailing Yachts in Phuket →
            </Button>
          </Card>
        </div>

        <div className="bg-white rounded-3xl p-10 shadow-xl text-center border-2 border-sky-200">
          <h3 className="text-2xl font-bold text-sky-900 mb-4">
            Still unsure?
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            Message us your group size + comfort preferences and we&apos;ll recommend the best fit.
          </p>
          <Button
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-6 text-lg rounded-xl shadow-lg transform hover:scale-105 transition-all">
            Get Personalized Recommendation
          </Button>
        </div>
      </div>
    </section>
  );
}
