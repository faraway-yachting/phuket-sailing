"use client";
import { Button } from "@/components/shared/ui/button";
import { MapPin, Map, Anchor } from "lucide-react";
import { routes } from "@/data/home";
import Image from "next/image";

export function PopularRoutes() {

  return (
    <section id="popular-routes" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-4 lg:px-4 xl:px-8">
        <div className="flex items-center gap-4 mb-6">
          <Map className="w-12 h-12 text-sky-600" />
          <h2 className="text-4xl md:text-5xl font-bold text-sky-900">
            Most Popular Routes
          </h2>
        </div>

        <p className="text-xl text-gray-700 mb-12 leading-relaxed">
          Use these as inspiration. We&apos;ll finalize the best route for your season and trip length.
        </p>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-sky-500 via-cyan-500 to-teal-500 rounded-full hidden md:block"></div>

          <div className="space-y-10">
            {routes.map((route, index) => (
              <div
                key={index}
                className="relative pl-0 md:pl-24"
              >
                <div className="absolute left-4 top-8 w-8 h-8 bg-white border-4 border-sky-500 rounded-full z-10 hidden md:flex items-center justify-center">
                  <div className="w-3 h-3 bg-sky-500 rounded-full"></div>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-sky-100 hover:border-sky-300">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-sky-100 to-blue-100 rounded-2xl flex items-center justify-center">
                      <Image src={route.image} alt={route.name} width={100} height={100} className="object-cover rounded-2xl w-full h-full" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <MapPin className="w-6 h-6 text-sky-600" />
                        <h3 className="text-2xl md:text-3xl font-bold text-sky-900">
                          {route.name}
                        </h3>
                      </div>
                      {route.subtitle && (
                        <p className="text-lg text-gray-500 mb-3 font-medium">{route.subtitle}</p>
                      )}
                      <p className="text-gray-600 text-lg leading-relaxed">{route.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 bg-gradient-to-br from-sky-50 to-blue-50 rounded-3xl p-10 text-center border-2 border-sky-200 shadow-xl">
          <Anchor className="w-16 h-16 text-sky-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-sky-900 mb-4">
            Want help choosing?
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            See route ideas: <span className="font-bold text-sky-700 text-xl">Sailing Itineraries Phuket</span>
          </p>
          <Button 
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-6 text-lg rounded-xl shadow-lg transform hover:scale-105 transition-all">
            Explore Itineraries
          </Button>
        </div>
      </div>
    </section>
  );
}
