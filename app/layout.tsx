import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || ''

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  metadataBase: new URL('https://phuket-sailing.vercel.app'),
  title: {
    default: 'Phuket Sailing – Private Yacht & Catamaran Charters | 850+ ★★★★★ Reviews',
    template: '%s | 850+ ★★★★★ Reviews',
  },
  description: 'Sail Phuket\'s most beautiful islands with Phuket Sailing — 30 years of experience, 850+ ★★★★★ reviews. Private yachts, catamarans, overnight trips to Phi Phi, Racha Islands & Koh Lipe. Get your custom quote today.',
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
  alternates: {
    canonical: 'https://phuket-sailing.vercel.app',
  },
  openGraph: {
    title: 'Phuket Sailing – Private Yacht & Catamaran Charters | 850+ ★★★★★ Reviews',
    description: 'Sail Phuket\'s most beautiful islands with Phuket Sailing — 30 years of experience, 850+ ★★★★★ reviews. Private yachts, catamarans, overnight trips to Phi Phi, Racha Islands & Koh Lipe. Get your custom quote today.',
    url: 'https://phuket-sailing.vercel.app',
    siteName: 'Phuket Sailing',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/assets/images/home/hero2.png',
        width: 1200,
        height: 630,
        alt: 'Phuket Sailing – Private Yacht & Catamaran Charters',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Phuket Sailing – Private Yacht & Catamaran Charters | 850+ ★★★★★ Reviews',
    description: 'Sail Phuket\'s most beautiful islands with Phuket Sailing — 30 years of experience, 850+ ★★★★★ reviews. Private yachts, catamarans, overnight trips to Phi Phi, Racha Islands & Koh Lipe.',
    images: ['/assets/images/home/hero2.png'],
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
    icon: '/assets/images/favicon.png',
  },
  // verification: {
  //   google: 'ADD_YOUR_GOOGLE_VERIFICATION_CODE_HERE',
  // },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" translate="no" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <meta name="google" content="notranslate" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Phuket Sailing',
              url: 'https://phuket-sailing.vercel.app',
              logo: 'https://phuket-sailing.vercel.app/assets/images/home/sail-away-charter-2.png',
              description: 'Private yacht and catamaran charters in Phuket, Thailand. 30 years of experience, 850+ five-star reviews.',
              foundingDate: '1996',
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+66-61-234-5623',
                contactType: 'reservations',
                areaServed: 'TH',
                availableLanguage: ['English', 'French', 'German', 'Russian', 'Thai', 'Chinese', 'Arabic'],
              },
              sameAs: [
                'https://wa.me/66612345623',
              ],
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '5.0',
                reviewCount: '850',
                bestRating: '5',
                worstRating: '1',
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Phuket Sailing',
              image: 'https://phuket-sailing.vercel.app/assets/images/home/hero2.png',
              url: 'https://phuket-sailing.vercel.app',
              telephone: '+66-61-2345623',
              email: 'info@phuket-sailing.com',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Phuket',
                addressCountry: 'TH',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 7.8804,
                longitude: 98.3923,
              },
              priceRange: '€€€',
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                opens: '08:00',
                closes: '20:00',
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Phuket Sailing',
              url: 'https://phuket-sailing.vercel.app',
              inLanguage: ['en', 'fr', 'de', 'ru', 'th', 'zh-CN', 'ar'],
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://phuket-sailing.vercel.app/yachts?q={search_term_string}',
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
        {GTM_ID && (
          <Script
            id="gtm-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`,
            }}
          />
        )}
      </head>
      <body className={inter.className}>
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}
        {children}
      </body>
    </html>
  )
}
