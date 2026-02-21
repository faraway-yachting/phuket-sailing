import { Metadata } from 'next'
import { getTranslations } from '@/lib/i18n/getTranslations'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const { t } = getTranslations(locale)
  const title = t('metadata.luxury.title')
  const description = t('metadata.luxury.description')

  return {
    alternates: { canonical: 'https://phuket-sailing.vercel.app/luxury-yacht-charter' },
    title,
    description,
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
      'overnight yacht charter phuket',
    ],
    openGraph: {
      title,
      description,
      images: ['/assets/images/luxury-yacht-charter/hero-luxury-charter.jpg'],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/assets/images/luxury-yacht-charter/hero-luxury-charter.jpg'],
    },
  }
}

export default function LuxuryYachtCharterLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
