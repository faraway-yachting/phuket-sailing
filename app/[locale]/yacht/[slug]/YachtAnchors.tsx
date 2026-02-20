'use client'

import React from 'react'

interface AnchorItem {
  id: string
  label: string
  icon: string
}

export function YachtAnchors({ anchors }: { anchors: AnchorItem[] }) {
  const scrollTo = (sectionId: string) => {
    const el = document.getElementById(sectionId)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  if (anchors.length <= 1) return null

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden sticky top-16 sm:top-20 z-40">
      <div className="flex border-b">
        {anchors.map(a => (
          <button
            key={a.id}
            onClick={() => scrollTo(a.id)}
            className="flex-1 px-2 sm:px-3 md:px-5 py-2.5 sm:py-3 md:py-4 text-[10px] sm:text-xs md:text-sm font-bold text-gray-600 hover:bg-gray-50 hover:text-[#164e63] transition-all"
          >
            <span className="inline-flex items-center gap-1.5">
              <span>{a.icon}</span>
              <span>{a.label}</span>
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}
