'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'

interface RouteItem {
  title: string
  description: string
  image: string
}

export function HomePopularRoutes({ routes }: { routes: RouteItem[] }) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % routes.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [routes.length])

  const getShuffledRoutes = () => {
    const shuffled = []
    for (let i = 0; i < routes.length; i++) {
      shuffled.push(routes[(activeIndex + i) % routes.length])
    }
    return shuffled
  }

  const displayRoutes = getShuffledRoutes()

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5">
      {/* Left - Large Card */}
      <div className="group relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl cursor-pointer">
        <Image
          src={displayRoutes[0].image}
          alt={displayRoutes[0].title}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover group-hover:scale-105 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 lg:p-8">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3 transition-all duration-500">
            {displayRoutes[0].title}
          </h3>
          <p className="text-white/90 text-sm sm:text-base leading-relaxed line-clamp-3 transition-all duration-500">
            {displayRoutes[0].description}
          </p>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-4 sm:gap-5">
        {/* Top Right - Medium Card */}
        <div className="group relative h-[200px] sm:h-[240px] rounded-2xl overflow-hidden shadow-xl cursor-pointer">
          <Image
            src={displayRoutes[1].image}
            alt={displayRoutes[1].title}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover group-hover:scale-105 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2 transition-all duration-500">
              {displayRoutes[1].title}
            </h3>
            <p className="text-white/90 text-xs sm:text-sm leading-relaxed line-clamp-2 transition-all duration-500">
              {displayRoutes[1].description}
            </p>
          </div>
        </div>

        {/* Bottom Row - Two Small Cards */}
        <div className="grid grid-cols-2 gap-4 sm:gap-5">
          <div className="group relative h-[180px] sm:h-[240px] rounded-2xl overflow-hidden shadow-xl cursor-pointer">
            <Image
              src={displayRoutes[2].image}
              alt={displayRoutes[2].title}
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-cover group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
              <h3 className="text-sm sm:text-base font-bold text-white mb-1 transition-all duration-500">
                {displayRoutes[2].title}
              </h3>
              <p className="text-white/90 text-xs leading-relaxed line-clamp-2 hidden sm:block transition-all duration-500">
                {displayRoutes[2].description}
              </p>
            </div>
          </div>

          <div className="group relative h-[180px] sm:h-[240px] rounded-2xl overflow-hidden shadow-xl cursor-pointer">
            <Image
              src={displayRoutes[3].image}
              alt={displayRoutes[3].title}
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-cover group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
              <h3 className="text-sm sm:text-base font-bold text-white mb-1 transition-all duration-500">
                {displayRoutes[3].title}
              </h3>
              <p className="text-white/90 text-xs leading-relaxed line-clamp-2 hidden sm:block transition-all duration-500">
                {displayRoutes[3].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
