import { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: 'https://phuket-sailing.vercel.app/contact' },
  title: 'Contact Us | Phuket Sailing',
  description:
    'Get in touch with Phuket Sailing. Fill out our form to get a personalized quote for your yacht charter.',
  openGraph: {
    title: 'Contact Us | Phuket Sailing',
    description: 'Get in touch with Phuket Sailing. Fill out our form to get a personalized quote for your yacht charter.',
    images: ['/assets/images/home/catamaran-aerial-hero.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Phuket Sailing',
    description: 'Get in touch with Phuket Sailing. Fill out our form to get a personalized quote for your yacht charter.',
    images: ['/assets/images/home/catamaran-aerial-hero.jpg'],
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
