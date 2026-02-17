import { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: 'https://phuket-sailing.vercel.app/overnight-sailing-charter' },
  title: 'Overnight Sailing Charter Phuket | 5-Star | 850+ Reviews',
  description:
    'Sail overnight on a private catamaran in Phuket — Phi Phi Islands, Phang Nga Bay down to Koh Lipe. Fully crewed, all meals included. 850+ five-star reviews.',
  keywords: [
    'overnight sailing charter phuket',
    'overnight sailing phuket',
    'phuket overnight catamaran',
    'private sailing charter phuket',
    'andaman sea sailing charter',
    'multi-night sailing phuket',
    'koh rok sailing charter',
    'koh lipe sailing phuket',
    'similan islands sailing',
    'phuket sailing adventure',
  ],
  openGraph: {
    title: 'Overnight Sailing Charter Phuket | 5-Star | 850+ Reviews',
    description: 'Sail overnight on a private catamaran in Phuket — Phi Phi Islands, Phang Nga Bay down to Koh Lipe. Fully crewed, all meals included. 850+ five-star reviews.',
    images: ['/assets/images/overnight-sailing-charter/hero-catamaran-sunset.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Overnight Sailing Charter Phuket | 5-Star | 850+ Reviews',
    description: 'Sail overnight on a private catamaran in Phuket — Phi Phi Islands, Phang Nga Bay down to Koh Lipe. Fully crewed, all meals included. 850+ five-star reviews.',
    images: ['/assets/images/overnight-sailing-charter/hero-catamaran-sunset.jpg'],
  },
}

export default function OvernightSailingCharterLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
