import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { WhatsAppButton } from '@/components/shared/WhatsAppButton'
import { Navbar } from '@/components/shared/Navbar'
import { LanguageProvider } from '@/components/providers/LanguageProvider'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'Phuket Sailing – Sailing Phuket & Catamaran Charters (Day + Overnight)',
  description: 'Phuket Sailing makes it easy to plan Sailing Phuket: private sailing yachts, catamaran charters, overnight sailing trips, cabin cruises, bareboat options, and proven itineraries—from relaxed day sails to 14+ night adventures to the best islands of Thailand.',
  keywords: [
    'Phuket sailing',
    'sailing Phuket',
    'catamaran charters Phuket',
    'overnight sailing Phuket',
    'sailing yacht Phuket',
    'cabin cruise Phuket',
    'bareboat charter Phuket',
    'sunset sailing Phuket',
    'Koh Rok',
    'Koh Ha',
    'Phi Phi sailing',
    'Phang Nga Bay sailing',
  ],
  authors: [{ name: 'Phuket Sailing' }],
  openGraph: {
    title: 'Phuket Sailing – Sailing Phuket & Catamaran Charters',
    description: 'Private sailing yachts, catamaran charters, overnight trips, and cabin cruises. Explore Thailand\'s best islands with expert local crew.',
    url: 'https://phuket-sailing.com',
    siteName: 'Phuket Sailing',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'What is the best time for Sailing Phuket?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Most guests prefer calmer, drier months, but Phuket can work year-round with the right route choices. We\'ll recommend the best itinerary for your exact dates based on season, sea conditions, and comfort level. Note, the prices in low season between May and October are ca. 30-40% cheaper!',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Is a catamaran better than a sailing yacht in Phuket?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Catamarans offer more space and stability, which families and groups love. Sailing yachts feel more classic and "real sailing." The best choice depends on your group size, comfort preferences, and the vibe you want onboard.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How many nights do you recommend for the best experience?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'If possible, we recommend 5 nights minimum. That\'s when you can reach quieter areas like Koh Rok and Koh Ha, which usually feel much less crowded than Phuket\'s most popular day-trip destinations.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Are your Sailing Phuket trips family-friendly?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes. We can recommend stable boats, calm swim stops, and family-friendly routes. Catamarans are often the easiest choice for kids because they have more space, shade, and stability—especially for relaxed day trips.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Is Phuket sailing good for couples and romantic getaways?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Absolutely. Couples love sunset sails and overnight anchorages for privacy and atmosphere. If it\'s a honeymoon, anniversary, or proposal, tell us early and we\'ll recommend the best boat and help plan a surprise.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Can solo travelers book without renting a full boat?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes. With Cabin Cruises Phuket, you can book by the cabin. It\'s ideal for solo travelers, couples, or small friend groups who want a multi-day sailing experience at a lower cost than a private charter.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'What\'s included in a crewed sailing charter?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Inclusions vary by boat, but crewed charters typically include the boat, crew, all meals, safety equipment, and standard onboard setup. Extras like drinks, park fees, and special setups depend on the vessel and route. We confirm everything upfront.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Do we need a license for bareboat charter Phuket?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Usually yes. Bareboat charters typically require a valid license and/or strong proof of experience. If you\'re unsure, we can recommend a crewed charter instead or discuss what\'s required based on your sailing background.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Can you help us choose the best itinerary?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes. Share your dates, number of nights, group size, and priorities (snorkeling, beaches, quiet islands, adventure). We\'ll recommend a realistic route that suits the season and gives you the best overall experience.',
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <LanguageProvider>
          <Navbar />
          {children}
          <WhatsAppButton />
        </LanguageProvider>
      </body>
    </html>
  )
}
