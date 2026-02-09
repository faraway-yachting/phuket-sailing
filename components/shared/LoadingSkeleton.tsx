/**
 * LoadingSkeleton - Reusable skeleton component with variants
 * Consolidates 3 identical loading patterns
 */

interface LoadingSkeletonProps {
  variant?: 'card' | 'text' | 'grid';
  count?: number;
  className?: string;
}

export function LoadingSkeleton({ variant = 'card', count = 1, className = '' }: LoadingSkeletonProps) {
  if (variant === 'text') {
    return (
      <div className={`space-y-3 ${className}`}>
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className="h-4 bg-gray-200 rounded animate-pulse" />
        ))}
      </div>
    );
  }

  if (variant === 'grid') {
    return (
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className="bg-white rounded-2xl p-6 shadow-lg animate-pulse">
            <div className="w-full h-48 bg-gray-200 rounded-xl mb-4" />
            <div className="h-6 bg-gray-200 rounded mb-3" />
            <div className="h-4 bg-gray-200 rounded mb-2" />
            <div className="h-4 bg-gray-200 rounded w-3/4" />
          </div>
        ))}
      </div>
    );
  }

  // card variant (default)
  return (
    <div className={`bg-white rounded-2xl p-6 shadow-lg animate-pulse ${className}`}>
      <div className="w-full h-48 bg-gray-200 rounded-xl mb-4" />
      <div className="h-6 bg-gray-200 rounded mb-3" />
      <div className="h-4 bg-gray-200 rounded mb-2" />
      <div className="h-4 bg-gray-200 rounded w-3/4" />
    </div>
  );
}
