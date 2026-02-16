import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Luxury Sailing Yacht Charter Phuket - 30 years of experience. 850+ five-star reviews.',
  description:
    'Book award winning luxury sailing yacht charter in Phuket with Phuket Sailing. Private catamarans and sailing yachts to Phi Phi Islands, Koh Rok, Phang Nga Bay and Koh Lipe. Perfect for honeymoons, couples and small groups.',
  keywords: [
    'luxury yacht charter phuket',
    'private yacht phuket',
    'luxury sailing phuket',
    'phuket yacht charter',
    'luxury catamaran phuket',
    'private sailing charter',
    'phi phi islands yacht',
    'phang nga bay charter',
    'honeymoon sailing phuket',
    'overnight yacht charter phuket'
  ],
  openGraph: {
    title: 'Luxury Sailing Yacht Charter Phuket - 30 years of experience. 850+ five-star reviews.',
    description: 'Book award winning luxury sailing yacht charter in Phuket with Phuket Sailing. Private catamarans and sailing yachts to Phi Phi Islands, Koh Rok, Phang Nga Bay and Koh Lipe. Perfect for honeymoons, couples and small groups.',
    images: ['/assets/images/luxury-yacht-charter/hero-luxury-charter.jpg'],
    type: 'website',
  },
}

export default function LuxuryYachtCharterLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
