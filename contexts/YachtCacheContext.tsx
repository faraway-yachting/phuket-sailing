'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { fetchAllYachts } from '@/lib/api/yachts'
import type { Yacht } from '@/lib/types/home'

interface YachtCacheContextType {
  yachts: Yacht[]
  loading: boolean
  error: string | null
  refreshYachts: () => void
}

const YachtCacheContext = createContext<YachtCacheContextType | undefined>(undefined)

// Module-level singleton — shared across all mounts, survives StrictMode double-invoke
let _promise: Promise<Yacht[]> | null = null
let _yachts: Yacht[] = []

async function startFetch(): Promise<Yacht[]> {
  if (_promise) {
    console.log('[YachtCache] reusing existing promise')
    return _promise
  }
  console.log('[YachtCache] starting fetch...')
  _promise = (async () => {
    try {
      const { yachts: batch, totalPages } = await fetchAllYachts(1)
      console.log('[YachtCache] page 1:', batch.length, 'yachts, totalPages:', totalPages)
      // Set _yachts after page 1 so subscribers can show cards immediately
      _yachts = batch
      const pages = totalPages ?? 1
      const all = [...batch]
      // Fetch remaining pages sequentially (no delay — production DB is fine)
      for (let i = 2; i <= Math.min(pages, 20); i++) {
        const { yachts: extra } = await fetchAllYachts(i)
        all.push(...extra)
        _yachts = [...all] // update incrementally so UI can reflect new yachts
        console.log('[YachtCache] page', i, ':', extra.length, 'yachts, total so far:', _yachts.length)
      }
      console.log('[YachtCache] all pages done, total:', _yachts.length)
      return _yachts
    } catch (err) {
      _promise = null
      console.error('[YachtCache] fetch failed:', err)
      throw err
    }
  })()
  return _promise
}

export function YachtCacheProvider({ children }: { children: ReactNode }) {
  const [yachts, setYachts] = useState<Yacht[]>(_yachts)
  const [loading, setLoading] = useState(_yachts.length === 0)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (_yachts.length > 0) {
      setYachts(_yachts)
      setLoading(false)
      return
    }

    let cancelled = false

    // Poll every 150ms: as soon as page 1 is cached, show cards immediately
    // without waiting for all remaining pages to finish
    const interval = setInterval(() => {
      if (_yachts.length > 0 && !cancelled) {
        setYachts([..._yachts])
        setLoading(false)
      }
    }, 150)

    startFetch()
      .then(all => {
        clearInterval(interval)
        if (!cancelled) {
          setYachts(all)
          setLoading(false)
        }
      })
      .catch(err => {
        clearInterval(interval)
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Failed to load yachts')
          setLoading(false)
        }
      })

    return () => {
      cancelled = true
      clearInterval(interval)
    }
  }, [])

  const refreshYachts = () => {
    _promise = null
    _yachts = []
    setLoading(true)
    setError(null)
    startFetch()
      .then(all => {
        setYachts(all)
        setLoading(false)
      })
      .catch(err => {
        setError(err instanceof Error ? err.message : 'Failed to load yachts')
        setLoading(false)
      })
  }

  return (
    <YachtCacheContext.Provider value={{ yachts, loading, error, refreshYachts }}>
      {children}
    </YachtCacheContext.Provider>
  )
}

export function useYachtCache() {
  const context = useContext(YachtCacheContext)
  if (!context) throw new Error('useYachtCache must be used within YachtCacheProvider')
  return context
}
