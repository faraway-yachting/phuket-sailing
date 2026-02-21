import { Metadata } from 'next'
import { getTranslations } from '@/lib/i18n/getTranslations'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const { t } = getTranslations(locale)
  const title = t('metadata.contact.title')
  const description = t('metadata.contact.description')

  return {
    alternates: { canonical: 'https://phuket-sailing.vercel.app/contact' },
    title,
    description,
    openGraph: {
      title,
      description,
      images: ['/assets/images/home/catamaran-aerial-hero.jpg'],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/assets/images/home/catamaran-aerial-hero.jpg'],
    },
  }
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
