import Image from 'next/image'
import { fetchAllYachts } from '@/lib/api/yachts'
import { YachtsGrid } from './YachtsGrid'

export default async function YachtsPage() {
  let yachts: Awaited<ReturnType<typeof fetchAllYachts>> = { yachts: [], total: 0, totalPages: 1 }
  
  try {
    yachts = await fetchAllYachts(1, 9)
  } catch {
    // will render empty state
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero */}
      <div className="relative w-full h-48 sm:h-56 md:h-64">
        <Image
          src="/assets/images/home/hero.jpg"
          alt="Phuket Sailing Yachts"
          fill
          sizes="100vw"
          className="object-cover blur-sm"
          priority
        />
        <div className="absolute inset-0 bg-[#0f3a47]/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-4">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
            All Yachts
          </h1>
          <p className="text-white/90 text-sm sm:text-base text-center max-w-lg drop-shadow-[0_1px_6px_rgba(0,0,0,0.5)]">
            Browse our full fleet of sailing yachts and catamarans
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <YachtsGrid
          initialYachts={yachts.yachts}
          initialPage={1}
          initialTotalPages={yachts.totalPages}
        />
      </div>
    </main>
  )
}
