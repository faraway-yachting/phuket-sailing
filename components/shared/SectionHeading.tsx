interface SectionHeadingProps {
  children: React.ReactNode
  subtitle?: string
  centered?: boolean
}

export function SectionHeading({ children, subtitle, centered = true }: SectionHeadingProps) {
  return (
    <div className={`mb-10 ${centered ? 'text-center' : ''}`}>
      <h2 className={`mb-4 ${centered ? 'mx-auto' : ''}`}>
        {children}
      </h2>
      
      <div className={`flex items-center gap-4 mb-3 ${centered ? 'justify-center' : ''}`}>
        <div className="h-1 w-20 bg-gradient-to-r from-ocean-500 to-ocean-600 rounded-full shadow-sm"></div>
        <div className="h-2 w-2 bg-ocean-600 rounded-full"></div>
        <div className="h-1 w-20 bg-gradient-to-r from-ocean-600 to-ocean-500 rounded-full shadow-sm"></div>
      </div>
      
      {subtitle && (
        <p className={`text-lg text-neutral-600 max-w-3xl ${centered ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
