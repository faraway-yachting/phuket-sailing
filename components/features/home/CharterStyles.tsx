"use client";

import { Button } from "@/components/shared/ui/button";
import { styles } from "@/data/home";

export function CharterStyles() {

  return (
    <section id="charter-style" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-4 lg:px-4 xl:px-8">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-sky-900 mb-5">
            Choose Your Charter Style
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find the perfect boat and experience for your Phuket sailing adventure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14 max-w-7xl mx-auto">
          {styles.map((style, index) => {
            const Icon = style.icon;
            const isLast = index === styles.length - 1;

            return (
              <div
                key={index}
                className={`flex flex-col gap-4 items-center bg-gradient-to-br from-gray-50 to-sky-50 rounded-3xl p-4 md:p-6 shadow-lg hover:shadow-2xl transition-all border-2 border-sky-100 ${isLast ? 'md:col-span-2 md:max-w-2xl md:mx-auto' : ''}`}
              >
                <div className={`flex-shrink-0 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br ${style.gradient} rounded-3xl flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform`}>
                  <Icon className="w-12 h-12 md:w-16 md:h-16 text-white" />
                </div>

                <div className="flex-1 text-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-sky-900 mb-4">
                    {style.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-5 text-justify">
                    {style.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-3xl p-10 text-center border-2 border-sky-200 shadow-xl">
          <h3 className="text-2xl font-bold text-sky-900 mb-4">
            Not sure what fits best?
          </h3>
          <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
            Send your dates + group size, and we&apos;ll recommend the best match.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
              Get a Fast Quote
            </Button>
            <Button variant="outline" className="border-2 border-sky-600 text-sky-700 hover:bg-sky-50 px-8 py-6 text-lg rounded-xl font-semibold">
              WhatsApp Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
