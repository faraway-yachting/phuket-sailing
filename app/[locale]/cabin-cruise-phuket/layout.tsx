import { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: 'https://phuket-sailing.vercel.app/cabin-cruise-phuket' },
  title: 'Cabin Cruise Phuket | 5-Star | 850+ Reviews',
  description:
    'Enjoy the ultimate adventure with a Cabin Cruise Phuket. Sail through Phi Phi, Phang Nga Bay, and more in comfort with private cabins and personalized service.',
  keywords: [
    'cabin cruise phuket',
    'phuket cabin cruise',
    'cabin cruise sailing',
    'phuket sailing cruise',
    'phi phi cabin cruise',
    'phang nga bay cabin cruise',
    'multi-day sailing phuket',
    'overnight cabin cruise',
    'private cabin sailing',
    'andaman sea cruise'
  ],
  openGraph: {
    title: 'Cabin Cruise Phuket | 5-Star | 850+ Reviews',
    description: 'Enjoy the ultimate adventure with a Cabin Cruise Phuket. Sail through Phi Phi, Phang Nga Bay, and more in comfort with private cabins and personalized service.',
    images: ['/assets/images/cabin-cruise-phuket/cabin-cruise-hero.avif'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cabin Cruise Phuket | 5-Star | 850+ Reviews',
    description: 'Enjoy the ultimate adventure with a Cabin Cruise Phuket. Sail through Phi Phi, Phang Nga Bay, and more.',
    images: ['/assets/images/cabin-cruise-phuket/cabin-cruise-hero.avif'],
  },
}

export default function CabinCruiseLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
