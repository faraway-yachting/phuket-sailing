"use client";

import { Button } from "@/components/shared/ui/button";
import { styles } from "@/data/home";

export function CharterStyles() {
  return (
    <section id="charter-style" className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="heading-section mb-6">
            Choose Your Charter Style
          </h2>
          <p className="text-body-large max-w-3xl mx-auto text-gray-600">
            Find the perfect boat and experience for your Phuket sailing adventure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-7xl mx-auto">
          {styles.map((style, index) => {
            const Icon = style.icon;
            const isLast = index === styles.length - 1;

            return (
              <div
                key={index}
                className={`flex flex-col gap-6 items-center card-elevated-hover p-8 md:p-10 ${isLast ? 'md:col-span-2 md:max-w-2xl md:mx-auto' : ''}`}
              >
                <div className={`flex-shrink-0 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br ${style.gradient} rounded-3xl flex items-center justify-center shadow-xl transform hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-12 h-12 md:w-16 md:h-16 text-white" />
                </div>

                <div className="flex-1 text-center">
                  <h3 className="heading-subsection mb-5">
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

        <div className="gradient-ocean rounded-3xl p-12 text-center border border-sky-200 shadow-xl">
          <h3 className="heading-subsection mb-5">
            Not sure what fits best?
          </h3>
          <p className="text-body-large text-gray-700 mb-8 max-w-2xl mx-auto">
            Send your dates + group size, and we&apos;ll recommend the best match.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="button-primary px-10 py-6 text-lg rounded-xl"
            >
              Get a Fast Quote
            </Button>
            <Button variant="outline" className="border-2 border-sky-600 text-sky-700 hover:bg-sky-50 px-10 py-6 text-lg rounded-xl font-semibold transition-all duration-300">
              WhatsApp Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
