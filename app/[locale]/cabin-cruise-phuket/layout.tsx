import { Metadata } from 'next'
import { getTranslations } from '@/lib/i18n/getTranslations'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const { t } = getTranslations(locale)
  const title = t('metadata.cabin.title')
  const description = t('metadata.cabin.description')

  return {
    alternates: { canonical: 'https://phuket-sailing.vercel.app/cabin-cruise-phuket' },
    title,
    description,
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
      'andaman sea cruise',
    ],
    openGraph: {
      title,
      description,
      images: ['/assets/images/cabin-cruise-phuket/cabin-cruise-hero.avif'],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/assets/images/cabin-cruise-phuket/cabin-cruise-hero.avif'],
    },
  }
}

export default function CabinCruiseLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
