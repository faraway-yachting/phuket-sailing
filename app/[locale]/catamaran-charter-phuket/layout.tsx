import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Catamaran Charter Phuket – Private Sailing in Comfort & Style | Phuket Sailing',
  description:
    'Experience luxury catamaran charters in Phuket. Perfect for families, groups, and special events. Explore Phi Phi Islands, Phang Nga Bay, and more with our professional crew. Day trips and overnight charters available.',
  keywords: [
    'catamaran charter phuket',
    'phuket catamaran',
    'luxury catamaran rental',
    'private catamaran charter',
    'phuket sailing',
    'phi phi islands catamaran',
    'phang nga bay charter',
    'catamaran day trip',
    'overnight sailing phuket'
  ],
  openGraph: {
    title: 'Catamaran Charter Phuket – Private Sailing in Comfort & Style',
    description: 'Experience luxury catamaran charters in Phuket. Perfect for families, groups, and special events.',
    images: ['/assets/images/catamaran-charter/hero.jpg'],
    type: 'website',
  },
}

export default function CatamaranCharterLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
