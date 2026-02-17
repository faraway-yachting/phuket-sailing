import { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: 'https://phuket-sailing.vercel.app/yachts' },
  title: 'Our Yachts | Phuket Sailing',
  description:
    'Browse our fleet of luxury sailing yachts and catamarans available for charter in Phuket. Day trips, overnight and multi-day adventures.',
  openGraph: {
    title: 'Our Yachts | Phuket Sailing',
    description: 'Browse our fleet of luxury sailing yachts and catamarans available for charter in Phuket.',
    images: ['/assets/images/home/hero.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Yachts | Phuket Sailing',
    description: 'Browse our fleet of luxury sailing yachts and catamarans available for charter in Phuket.',
    images: ['/assets/images/home/hero.jpg'],
  },
}

export default function YachtsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
