'use client'

import { useState, useEffect } from 'react'
import { Anchor, Sailboat, Moon, Ship, MapPin, CheckCircle, CreditCard, Calendar, HelpCircle } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  Anchor, Sailboat, Moon, Ship, MapPin, CheckCircle, CreditCard, Calendar, HelpCircle,
}

interface JumpLink {
  href: string
  label: string
  icon: string
}

export function HomeJumpLinks({ links }: { links: JumpLink[] }) {
  const [activeLink, setActiveLink] = useState('')

  useEffect(() => {
    const handleHashChange = () => {
      setActiveLink(window.location.hash || links[0]?.href || '')
    }

    const handleScroll = () => {
      const sections = links.map(link => {
        const id = link.href.replace('#', '')
        const element = document.getElementById(id)
        if (element) {
          const rect = element.getBoundingClientRect()
          return { href: link.href, top: rect.top, bottom: rect.bottom }
        }
        return null
      }).filter(Boolean)

      const current = sections.find(section =>
        section && section.top <= 100 && section.bottom >= 100
      )

      if (current) {
        setActiveLink(current.href)
      } else if (sections.length > 0 && window.scrollY < 100) {
        setActiveLink(links[0]?.href || '')
      }
    }

    handleHashChange()
    handleScroll()
    window.addEventListener('hashchange', handleHashChange)
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [links])

  return (
    <nav className="bg-white border-t border-gray-200">
      <div className="flex flex-wrap items-center justify-center gap-0.5 sm:gap-1 md:flex-nowrap py-3 sm:py-4">
        {links.map((link) => {
          const Icon = iconMap[link.icon] || Anchor
          const isActive = activeLink === link.href || (!activeLink && link.href === links[0]?.href)
          return (
            <a
              key={link.href}
              href={link.href}
              className={`flex items-center gap-1 sm:gap-1.5 transition-colors duration-200 text-xs sm:text-sm font-medium whitespace-nowrap px-2 sm:px-3 py-2 sm:py-2.5 border-t ${
                isActive
                  ? 'text-[#0c3a47] border-[#0c3a47] border-t-2'
                  : 'text-gray-600 hover:text-[#164e63] border-gray-200'
              }`}
            >
              <Icon className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 ${
                isActive ? 'text-[#0c3a47]' : 'text-[#14b8a6]'
              }`} />
              <span>{link.label}</span>
            </a>
          )
        })}
      </div>
    </nav>
  )
}
