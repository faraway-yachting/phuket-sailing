import { Metadata } from 'next'

const META_TITLE = 'Bareboat Sailing Phuket | 5-Star | 850+ Verified Reviews'
const META_DESC = "Sail your own yacht through the Andaman Sea — limestone islands, hidden lagoons, remote anchorages. Licensed sailors only. Full fleet, all seasons. 30 years of expertise. 850+ five-star reviews."

export const metadata: Metadata = {
  alternates: { canonical: 'https://phuket-sailing.vercel.app/bareboat-sailing-phuket' },
  title: META_TITLE,
  description: META_DESC,
  keywords: [
    'bareboat sailing phuket',
    'bareboat charter phuket',
    'bareboat catamaran phuket',
    'sail your own yacht phuket',
    'phuket sailing',
    'andaman sea bareboat',
    'monohull charter phuket',
    'catamaran charter phuket',
    'bareboat thailand',
    'phuket yacht rental',
  ],
  openGraph: {
    title: META_TITLE,
    description: META_DESC,
    images: ['/assets/images/bareboat-sailing/bareboat-hero.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: META_TITLE,
    description: META_DESC,
    images: ['/assets/images/bareboat-sailing/bareboat-hero.jpg'],
  },
}

export default function BareboatSailingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
