import { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: 'https://phuket-sailing.vercel.app/privacy-policy' },
  title: 'Privacy Policy | Phuket Sailing | 850+ ★★★★★ Reviews',
  description:
    'Our privacy policy describes how Away Charters Global Pte. Ltd. collects, uses and protects your personal information when you use our yacht charter services in Phuket.',
  openGraph: {
    title: 'Privacy Policy | Phuket Sailing | 850+ ★★★★★ Reviews',
    description: 'How Away Charters Global Pte. Ltd. collects, uses, and protects your personal information.',
    images: ['/assets/images/home/hero.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | Phuket Sailing | 850+ ★★★★★ Reviews',
    description: 'How Away Charters Global Pte. Ltd. collects, uses, and protects your personal information.',
    images: ['/assets/images/home/hero.jpg'],
  },
}

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
