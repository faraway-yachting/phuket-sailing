import { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: 'https://phuket-sailing.vercel.app/sitemap-page' },
  title: 'Sitemap | Phuket Sailing | 850+ ★★★★★ Reviews',
  description:
    'Complete sitemap of Phuket Sailing — browse all pages, yacht charters, destinations, and services available in 7 languages.',
  openGraph: {
    title: 'Sitemap | Phuket Sailing | 850+ ★★★★★ Reviews',
    description: 'Complete sitemap of Phuket Sailing — browse all pages, yacht charters, destinations, and services.',
    images: ['/assets/images/home/hero.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sitemap | Phuket Sailing | 850+ ★★★★★ Reviews',
    description: 'Complete sitemap of Phuket Sailing — browse all pages, yacht charters, destinations, and services.',
    images: ['/assets/images/home/hero.jpg'],
  },
}

export default function SitemapLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
