import { Metadata } from 'next'
import { fetchYachtBySlug } from '@/lib/api/yachts'

const SITE_URL = 'https://phuket-sailing.vercel.app'

export async function generateYachtMetadata(locale: string, slug: string, section: string): Promise<Metadata> {
  try {
    const yacht = await fetchYachtBySlug(slug)
    const title = `${yacht.title} – Charter in Phuket`
    const description = `Charter ${yacht.title} in Phuket. ${yacht.length} ${yacht.boatType}, ${yacht.cabins} cabins, up to ${yacht.guests} guests. Day trips from €${yacht.daytripPriceEuro || yacht.dayTripPrice}.`
    const url = `${SITE_URL}/${locale}/${section}/${slug}`

    return {
      title,
      description,
      openGraph: {
        title,
        description,
        images: yacht.primaryImage ? [{ url: yacht.primaryImage, width: 1200, height: 630, alt: yacht.title }] : [],
        type: 'website',
        url,
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: yacht.primaryImage ? [yacht.primaryImage] : [],
      },
      alternates: { canonical: url },
    }
  } catch {
    return {
      title: 'Yacht Charter Phuket',
      description: 'Explore our fleet of sailing yachts and catamarans for charter in Phuket.',
    }
  }
}
