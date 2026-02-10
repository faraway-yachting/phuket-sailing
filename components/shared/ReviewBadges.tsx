import Image from 'next/image'

export function ReviewBadges() {
  return (
    <div className="mt-4 sm:mt-6 md:mt-8 flex items-center justify-center gap-1.5 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-6 overflow-x-auto">
      {/* Google Reviews */}
      <a
        href="https://www.google.com/search?q=Faraway+Yachting+Phuket&ludocid=17147180263514010749"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex-shrink-0"
      >
        <div className="bg-[#164e63]/30 backdrop-blur-md rounded-lg sm:rounded-xl md:rounded-2xl px-2 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white/30">
          <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 lg:gap-4">
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-sm flex-shrink-0">
              <Image
                src="/assets/images/certificates/google-icon-logo-svgrepo-com.svg"
                alt="Google"
                width={28}
                height={28}
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7"
              />
            </div>
            <div className="text-left min-w-0">
              <div className="text-[9px] sm:text-[10px] md:text-xs font-semibold text-white tracking-wider uppercase whitespace-nowrap">Google Reviews</div>
              <div className="flex items-center gap-0.5 sm:gap-1 md:gap-2 mt-0.5">
                <span className="text-base sm:text-lg md:text-xl font-bold text-white">5.0</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xs sm:text-sm md:text-base">★</span>
                  ))}
                </div>
              </div>
              <div className="text-[9px] sm:text-[10px] md:text-xs text-white/90 mt-0.5 whitespace-nowrap">500+ reviews</div>
            </div>
          </div>
        </div>
      </a>

      {/* Winner Badge */}
      <a
        href="https://www.theworldluxurytravelawards.com/establishment/faraway-yachting-co-ltd/"
        target="_blank"
        rel="noopener noreferrer"
        className="relative group flex-shrink-0"
      >
        <Image
          src="/assets/images/certificates/2025PersonalisedTravelWinnerLogo2631.webp"
          alt="2025 Winner - Best Yacht Charters Thailand"
          width={100}
          height={100}
          className="object-contain w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 transition-all duration-300 hover:scale-105"
        />
      </a>

      {/* TripAdvisor Reviews */}
      <a
        href="https://www.tripadvisor.com/Attraction_Review-g1389361-d4747123-Reviews-Faraway_Yachting_Co_Ltd-Chalong_Phuket_Town_Phuket.html"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex-shrink-0"
      >
        <div className="bg-[#164e63]/30 backdrop-blur-md rounded-lg sm:rounded-xl md:rounded-2xl px-2 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white/30">
          <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 lg:gap-4">
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-sm flex-shrink-0">
              <Image
                src="/assets/images/certificates/tripadvisor-logo-svgrepo-com.svg"
                alt="TripAdvisor"
                width={28}
                height={28}
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7"
              />
            </div>
            <div className="text-left min-w-0">
              <div className="text-[9px] sm:text-[10px] md:text-xs font-semibold text-white tracking-wider uppercase whitespace-nowrap">TripAdvisor</div>
              <div className="flex items-center gap-0.5 sm:gap-1 md:gap-2 mt-0.5">
                <span className="text-base sm:text-lg md:text-xl font-bold text-white">5.0</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xs sm:text-sm md:text-base">★</span>
                  ))}
                </div>
              </div>
              <div className="text-[9px] sm:text-[10px] md:text-xs text-white/90 mt-0.5 whitespace-nowrap">340+ reviews</div>
            </div>
          </div>
        </div>
      </a>
    </div>
  )
}
