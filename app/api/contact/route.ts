import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const webhookUrl = process.env.WEBHOOK_CONTACT_URL
  if (!webhookUrl) {
    return NextResponse.json({ error: 'Webhook not configured' }, { status: 500 })
  }

  try {
    const body = await req.json()
    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })

    if (!res.ok) {
      return NextResponse.json({ error: 'Webhook failed' }, { status: res.status })
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
