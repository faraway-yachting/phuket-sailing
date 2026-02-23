import { Metadata } from 'next'
import { YachtDetailPage } from '@/components/shared/yacht/YachtDetailPage'
import { generateYachtMetadata } from '@/components/shared/yacht/generateYachtMetadata'

type Props = { params: Promise<{ locale: string; slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params
  return generateYachtMetadata(locale, slug, 'bareboat')
}

export default async function Page({ params }: Props) {
  const { locale, slug } = await params
  return <YachtDetailPage locale={locale} slug={slug} backHref="/bareboat-sailing-phuket" />
}
