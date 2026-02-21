import { NextRequest, NextResponse } from 'next/server'

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3500'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const page = searchParams.get('page') ?? '1'
  const limit = searchParams.get('limit') ?? '9'
  const status = searchParams.get('status') ?? 'published'

  const url = `${API_BASE}/yacht/all-yachts?page=${page}&limit=${limit}&status=${status}`

  try {
    const res = await fetch(url)
    const data = await res.json()
    return NextResponse.json(data)
  } catch (err) {
    console.error('[/api/yachts] proxy error:', err)
    return NextResponse.json({ success: false, message: 'Failed to fetch yachts' }, { status: 502 })
  }
}
