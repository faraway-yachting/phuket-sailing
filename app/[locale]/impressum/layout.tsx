import { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: 'https://phuket-sailing.vercel.app/impressum' },
  title: 'Impressum | Phuket Sailing | 850+ ★★★★★ Reviews',
  description:
    'Legal information and company details for Phuket Sailing — Away Charters Global Pte. Ltd., yacht charter services in Phuket, Thailand.',
  openGraph: {
    title: 'Impressum | Phuket Sailing | 850+ ★★★★★ Reviews',
    description: 'Legal information and company details for Phuket Sailing.',
    images: ['/assets/images/home/hero.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Impressum | Phuket Sailing | 850+ ★★★★★ Reviews',
    description: 'Legal information and company details for Phuket Sailing.',
    images: ['/assets/images/home/hero.jpg'],
  },
}

export default function ImpressumLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
