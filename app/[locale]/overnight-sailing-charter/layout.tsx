import { Metadata } from 'next'
import { getTranslations } from '@/lib/i18n/getTranslations'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const { t } = getTranslations(locale)
  const title = t('metadata.overnight.title')
  const description = t('metadata.overnight.description')

  return {
    alternates: { canonical: 'https://phuket-sailing.vercel.app/overnight-sailing-charter' },
    title,
    description,
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
      title,
      description,
      images: ['/assets/images/overnight-sailing-charter/hero-catamaran-sunset.jpg'],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/assets/images/overnight-sailing-charter/hero-catamaran-sunset.jpg'],
    },
  }
}

export default function OvernightSailingCharterLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
