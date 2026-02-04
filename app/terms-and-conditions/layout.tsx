import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Terms & Conditions | Phuket Sailing",
  description:
    "Read our booking terms and conditions for yacht charters with Faraway Yachting Co. Ltd. Valid for all charters booked after September 2025.",
}

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
