'use client'

import { cn } from '@/lib/utils'

interface CTAButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'whatsapp'
  className?: string
  onClick?: () => void
  href?: string
  trackingId?: string
}

export function CTAButton({ 
  children, 
  variant = 'primary', 
  className,
  onClick,
  href,
  trackingId 
}: CTAButtonProps) {
  const handleClick = () => {
    if (trackingId) {
      console.log(`CTA Clicked: ${trackingId}`)
    }
    onClick?.()
  }

  const baseStyles = variant === 'primary' 
    ? 'cta-button'
    : variant === 'whatsapp'
    ? 'inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-white bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(34,197,94,0.5)] hover:scale-110 active:scale-95'
    : 'cta-button-secondary'

  if (href) {
    return (
      <a 
        href={href}
        className={cn(baseStyles, className)}
        onClick={handleClick}
        data-tracking={trackingId}
      >
        {children}
      </a>
    )
  }

  return (
    <button 
      onClick={handleClick}
      className={cn(baseStyles, className)}
      data-tracking={trackingId}
    >
      {children}
    </button>
  )
}
