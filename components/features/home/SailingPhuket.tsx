import { Check, Waves } from "lucide-react";
import { benefits, tripTypes } from "@/data/home";

export function SailingPhuket() {

  return (
    <section id="sailing-phuket" className="py-20 md:py-28 bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50">
      <div className="container mx-auto px-4 md:px-4 lg:px-4 xl:px-8">
        <div className="flex items-center gap-4 mb-6">
          <Waves className="w-12 h-12 text-sky-600" />
          <h2 className="text-4xl md:text-5xl font-bold text-sky-900">
            Sailing Phuket
          </h2>
        </div>

        <p className="text-xl text-gray-700 mb-10 max-w-4xl leading-relaxed">
          Phuket is one of the best sailing hubs in Southeast Asia. Distances between islands are perfect for day trips or multi-night routes. You can choose calm bays, scenic limestone landscapes, snorkeling stops, or remote anchorages that feel far from crowds.
        </p>

        <div className="mb-14">
          <h3 className="text-3xl font-bold text-sky-900 mb-6">
            This is what makes Sailing Phuket special:
          </h3>
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border-2 border-sky-200 shadow-xl">
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mr-4">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-700 text-lg leading-relaxed">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-14">
          <h3 className="text-3xl font-bold text-sky-900 mb-4">
            What type of trip are you planning?
          </h3>
          <p className="text-lg text-gray-700 mb-8">
            Here are the three most common starting points:
          </p>

          <div className="space-y-6">
            {tripTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border-l-8 border-sky-500"
              >
                <div className="flex items-start gap-6">
                  <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${type.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <span className="text-white font-bold text-3xl">{type.number}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-2xl text-sky-900 mb-3">
                      {type.title}
                    </h4>
                    <p className="text-gray-600 text-lg leading-relaxed">{type.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-sky-600 to-blue-700 rounded-3xl p-10 shadow-xl border-4 border-sky-300">
          <p className="text-white text-xl text-center leading-relaxed">
            If you want the best route planning: <span className="font-bold text-amber-300 text-2xl">Sailing Itineraries Phuket →</span>
          </p>
        </div>
      </div>
    </section>
  );
}
