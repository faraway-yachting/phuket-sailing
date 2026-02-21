import { Metadata } from 'next'
import { getTranslations } from '@/lib/i18n/getTranslations'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const { t } = getTranslations(locale)
  const title = t('metadata.catamaran.title')
  const description = t('metadata.catamaran.description')

  return {
    alternates: { canonical: 'https://phuket-sailing.vercel.app/catamaran-charter-phuket' },
    title,
    description,
    keywords: [
      'catamaran charter phuket',
      'phuket catamaran',
      'luxury catamaran rental',
      'private catamaran charter',
      'phuket sailing',
      'phi phi islands catamaran',
      'phang nga bay charter',
      'catamaran day trip',
      'overnight sailing phuket',
    ],
    openGraph: {
      title,
      description,
      images: ['/assets/images/catamaran-charter/hero.jpg'],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/assets/images/catamaran-charter/hero.jpg'],
    },
  }
}

export default function CatamaranCharterLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
