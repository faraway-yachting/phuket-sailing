import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/shared/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Phuket Sailing – Sailing Phuket & Catamaran Charters (Day + Overnight)',
  description: 'Phuket Sailing makes it easy to plan Sailing Phuket: private sailing yachts, catamaran charters, overnight sailing trips, cabin cruises, bareboat options, and proven itineraries—from relaxed day sails to 14+ night adventures to the best islands of Thailand.',
  keywords: 'Phuket sailing, sailing Phuket, catamaran charters Phuket, overnight sailing trips, yacht charter Phuket, sailing holidays Thailand, sunset sailing Phuket',
  openGraph: {
    title: 'Phuket Sailing – Sailing Phuket & Catamaran Charters',
    description: 'Private sailing yachts, catamaran charters, and overnight sailing trips in Phuket. Explore the best islands of Thailand with professional crew and proven itineraries.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Phuket Sailing – Sailing Phuket & Catamaran Charters',
    description: 'Private sailing yachts, catamaran charters, and overnight sailing trips in Phuket. Explore the best islands of Thailand.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
