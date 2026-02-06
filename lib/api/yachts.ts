import type { Yacht } from '@/lib/types/home'

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3500'

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

export async function fetchFeaturedYachts(limit: number = 3): Promise<Yacht[]> {
  const res = await fetch(
    `${API_BASE}/yacht/all-yachts?page=1&limit=${limit}&status=published`
  )
  if (!res.ok) throw new Error(`API responded with ${res.status}`)

  const json: YachtsApiResponse = await res.json()
  if (!json.success) throw new Error(json.message)

  return json.data.yachts
}

export async function fetchYachtById(id: string): Promise<Yacht> {
  const res = await fetch(`${API_BASE}/yacht/?id=${id}`)
  if (!res.ok) throw new Error(`API responded with ${res.status}`)

  const json = await res.json() as { statusCode: number; success: boolean; message: string; data: Yacht | { yacht: Yacht } }
  if (!json.success) throw new Error(json.message)

  return ('yacht' in json.data) ? (json.data as { yacht: Yacht }).yacht : json.data as Yacht
}

export async function fetchAllYachts(page: number = 1, limit: number = 9) {
  const res = await fetch(
    `${API_BASE}/yacht/all-yachts?page=${page}&limit=${limit}&status=published`
  )
  if (!res.ok) throw new Error(`API responded with ${res.status}`)

  const json: YachtsApiResponse = await res.json()
  if (!json.success) throw new Error(json.message)

  return {
    yachts: json.data.yachts,
    total: json.data.total,
    totalPages: json.data.totalPages,
  }
}
