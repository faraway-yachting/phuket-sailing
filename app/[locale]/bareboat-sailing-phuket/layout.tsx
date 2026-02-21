import { Metadata } from 'next'
import { getTranslations } from '@/lib/i18n/getTranslations'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const { t } = getTranslations(locale)
  const title = t('metadata.bareboat.title')
  const description = t('metadata.bareboat.description')

  return {
    alternates: { canonical: 'https://phuket-sailing.vercel.app/bareboat-sailing-phuket' },
    title,
    description,
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
      title,
      description,
      images: ['/assets/images/bareboat-sailing/bareboat-hero.jpg'],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/assets/images/bareboat-sailing/bareboat-hero.jpg'],
    },
  }
}

export default function BareboatSailingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
