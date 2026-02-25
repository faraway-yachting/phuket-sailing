import type { Yacht } from '@/lib/types/home'

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3500'

// In the browser, always route through the Next.js proxy to avoid CORS issues.
// On the server (SSR / API routes), call the backend directly.
const isBrowser = typeof window !== 'undefined'
const YACHTS_BASE = isBrowser ? '/api/yachts' : `${API_BASE}/yacht/all-yachts`

interface YachtsApiResponse {
  statusCode: number
  success: boolean
  message: string
  data: {
    yachts: Yacht[]
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

export async function fetchYachtById(id: string): Promise<Yacht> {
  const res = await fetch(`${API_BASE}/yacht/?id=${id}`, { next: { revalidate: 60 } })
  if (!res.ok) throw new Error(`API responded with ${res.status}`)

  const json = await res.json() as { statusCode: number; success: boolean; message: string; data: Yacht | { yacht: Yacht } }
  if (!json.success) throw new Error(json.message)

  return ('yacht' in json.data) ? (json.data as { yacht: Yacht }).yacht : json.data as Yacht
}

export async function fetchYachtBySlug(slug: string): Promise<Yacht> {
  let page = 1
  while (true) {
    const { yachts, totalPages } = await fetchAllYachts(page, 100)
    const match = yachts.find(y => y.slug === slug)
    if (match) return fetchYachtById(match._id)
    if (page >= totalPages) break
    page++
  }
  throw new Error('Yacht not found')
}

export async function fetchAllYachts(page: number = 1, limit: number = 9) {
  const url = `${YACHTS_BASE}?page=${page}&limit=${limit}&status=published`
  console.log('[fetchAllYachts] GET', url)

  const controller = new AbortController()
  const timeout = setTimeout(() => {
    console.error('[fetchAllYachts] request timed out after 20s:', url)
    controller.abort()
  }, 20000)

  try {
    const res = await fetch(url, { next: { revalidate: 60 }, signal: controller.signal })
    clearTimeout(timeout)
    console.log('[fetchAllYachts] response status:', res.status, 'ok:', res.ok)
    if (!res.ok) throw new Error(`API responded with ${res.status}`)

    const json: YachtsApiResponse = await res.json()
    console.log('[fetchAllYachts] parsed JSON, success:', json.success, 'yachts count:', json.data?.yachts?.length)
    if (!json.success) throw new Error(json.message)

    return {
      yachts: json.data.yachts,
      total: json.data.total,
      totalPages: json.data.totalPages,
    }
  } catch (err) {
    clearTimeout(timeout)
    console.error('[fetchAllYachts] error:', err)
    throw err
  }
}
