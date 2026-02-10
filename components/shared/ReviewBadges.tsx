import Image from 'next/image'

export function ReviewBadges() {
  return (
    <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
      {/* Google Reviews */}
      <a
        href="https://www.google.com/search?q=Faraway+Yachting+Phuket&ludocid=17147180263514010749"
        target="_blank"
        rel="noopener noreferrer"
        className="group"
      >
        <div className="bg-[#164e63]/30 backdrop-blur-md rounded-2xl px-4 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white/30">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
              <Image
                src="/assets/images/certificates/google-icon-logo-svgrepo-com.svg"
                alt="Google"
                width={28}
                height={28}
                className="w-7 h-7"
              />
            </div>
            <div className="text-left">
              <div className="text-xs font-semibold text-white tracking-wider uppercase">Google Reviews</div>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-xl font-bold text-white">5.0</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-base">★</span>
                  ))}
                </div>
              </div>
              <div className="text-xs text-white/90 mt-0.5">500+ reviews</div>
            </div>
          </div>
        </div>
      </a>

      {/* Winner Badge */}
      <a
        href="https://www.theworldluxurytravelawards.com/establishment/faraway-yachting-co-ltd/"
        target="_blank"
        rel="noopener noreferrer"
        className="relative group"
      >
        <Image
          src="/assets/images/certificates/2025PersonalisedTravelWinnerLogo2631.webp"
          alt="2025 Winner - Best Yacht Charters Thailand"
          width={100}
          height={100}
          className="object-contain w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 transition-all duration-300 hover:scale-105"
        />
      </a>

      {/* TripAdvisor Reviews */}
      <a
        href="https://www.tripadvisor.com/Attraction_Review-g1389361-d4747123-Reviews-Faraway_Yachting_Co_Ltd-Chalong_Phuket_Town_Phuket.html"
        target="_blank"
        rel="noopener noreferrer"
        className="group"
      >
        <div className="bg-[#164e63]/30 backdrop-blur-md rounded-2xl px-4 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white/30">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
              <Image
                src="/assets/images/certificates/tripadvisor-logo-svgrepo-com.svg"
                alt="TripAdvisor"
                width={28}
                height={28}
                className="w-7 h-7"
              />
            </div>
            <div className="text-left">
              <div className="text-xs font-semibold text-white tracking-wider uppercase">TripAdvisor</div>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-xl font-bold text-white">5.0</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-base">★</span>
                  ))}
                </div>
              </div>
              <div className="text-xs text-white/90 mt-0.5">340+ reviews</div>
            </div>
          </div>
        </div>
      </a>
    </div>
  )
}
