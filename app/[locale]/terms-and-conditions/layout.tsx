import { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: 'https://phuket-sailing.vercel.app/terms-and-conditions' },
  title: "Terms & Conditions | Phuket Sailing",
  description:
    "Read our booking terms and conditions for yacht charters with Away Charters Global Pte. Ltd. Valid for all charters booked after September 2025.",
  openGraph: {
    title: 'Terms & Conditions | Phuket Sailing',
    description: 'Read our booking terms and conditions for yacht charters with Away Charters Global Pte. Ltd.',
    images: ['/assets/images/home/hero.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms & Conditions | Phuket Sailing',
    description: 'Read our booking terms and conditions for yacht charters with Away Charters Global Pte. Ltd.',
    images: ['/assets/images/home/hero.jpg'],
  },
}

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
