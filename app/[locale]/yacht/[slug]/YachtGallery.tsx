'use client'

import React, { useState } from 'react'

interface Props {
  images: string[]
  title: string
}

export function YachtGallery({ images, title }: Props) {
  const [mainImageIndex, setMainImageIndex] = useState(0)

  return (
    <div className="mb-6 sm:mb-8">
      <div className="relative h-52 sm:h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden mb-3">
        <img
          src={images[mainImageIndex]}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      {images.length > 1 && (
        <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
          {images.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setMainImageIndex(idx)}
              className={`relative h-16 sm:h-20 rounded-lg overflow-hidden cursor-pointer transition-all ${
                idx === mainImageIndex ? 'ring-2 ring-[#14b8a6] ring-offset-1' : 'hover:opacity-75'
              }`}
            >
              <img src={img} alt={`Photo ${idx + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
