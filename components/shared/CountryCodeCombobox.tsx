'use client'

import { useState, useRef, useEffect } from 'react'
import { COUNTRY_CODES } from '@/lib/constants/forms'
import { ChevronDown } from 'lucide-react'

interface CountryCodeComboboxProps {
  value: string
  onChange: (value: string) => void
  className?: string
}

export function CountryCodeCombobox({ value, onChange, className }: CountryCodeComboboxProps) {
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState('')
  const ref = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const selected = COUNTRY_CODES.find(c => c.code === value) || COUNTRY_CODES.find(c => c.code === '+66')!

  const filtered = search
    ? COUNTRY_CODES.filter(({ code, name, fullName }) =>
        fullName.toLowerCase().includes(search.toLowerCase()) ||
        name.toLowerCase().includes(search.toLowerCase()) ||
        code.includes(search)
      )
    : COUNTRY_CODES

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
        setSearch('')
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus()
  }, [open])

  return (
    <div ref={ref} className={`relative ${className || ''}`}>
      <button
        type="button"
        onClick={() => { setOpen(!open); setSearch('') }}
        className="flex items-center justify-between gap-1 h-11 w-full px-2.5 rounded-lg border border-gray-200 bg-gray-50 hover:bg-gray-100 transition-colors text-sm"
      >
        <span className="flex items-center gap-1.5 truncate">
          <span>{selected.flag}</span>
          <span className="font-medium text-gray-600">{value}</span>
        </span>
        <ChevronDown className="h-3.5 w-3.5 opacity-50 shrink-0" />
      </button>

      {open && (
        <div className="absolute z-50 top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
          <div className="p-2 border-b border-gray-100">
            <input
              ref={inputRef}
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search country..."
              className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md outline-none focus:ring-2 focus:ring-[#164e63]/20 focus:border-[#164e63]"
            />
          </div>
          <div className="max-h-[240px] overflow-y-auto">
            {filtered.length === 0 ? (
              <div className="py-4 text-center text-sm text-gray-400">No results</div>
            ) : (
              filtered.map(({ code, flag, name, fullName }, idx) => (
                <button
                  key={`${name}-${idx}`}
                  type="button"
                  onClick={() => { onChange(code); setOpen(false); setSearch('') }}
                  className={`flex items-center w-full px-3 py-2.5 text-sm hover:bg-gray-50 transition-colors ${value === code && selected.name === name ? 'bg-[#164e63]/5 font-medium' : ''}`}
                >
                  <span className="w-8 shrink-0">{flag}</span>
                  <span className="flex-1 text-left text-gray-700">{fullName}</span>
                  <span className="text-gray-400 ml-2">{code}</span>
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  )
}
