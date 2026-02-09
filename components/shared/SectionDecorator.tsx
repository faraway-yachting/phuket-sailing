/**
 * SectionDecorator - Three-dot section divider pattern
 * Consolidates 10+ instances of the same pattern
 */

interface SectionDecoratorProps {
  className?: string;
}

export function SectionDecorator({ className = '' }: SectionDecoratorProps) {
  return (
    <div className={`flex items-center justify-center gap-2 ${className}`}>
      <div className="h-1 w-12 bg-[#164e63] rounded-full"></div>
      <div className="h-2 w-2 bg-amber-500 rounded-full"></div>
      <div className="h-1 w-12 bg-[#164e63] rounded-full"></div>
    </div>
  );
}
