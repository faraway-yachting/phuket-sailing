/**
 * ContactInfoCard - Unified contact card component
 * Consolidates 6+ variations of contact cards across the application
 */

import { LucideIcon } from 'lucide-react';

interface ContactInfoCardProps {
  icon: LucideIcon | (() => JSX.Element);
  title: string;
  value: string;
  href: string;
  gradient?: string;
}

export function ContactInfoCard({ icon: Icon, title, value, href, gradient = 'from-emerald-500 to-teal-600' }: ContactInfoCardProps) {
  return (
    <a
      href={href}
      className="group flex flex-col items-center justify-center text-center"
    >
      {/* Outer circle border */}
      <div className="relative mb-3 sm:mb-4">
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gray-100 flex items-center justify-center p-1 transition-all duration-300 group-hover:bg-gray-200 shadow-md group-hover:shadow-lg">
          {/* Inner colored circle */}
          <div className={`bg-gradient-to-br ${gradient} w-full h-full rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-105`}>
            {typeof Icon === 'function' ? (
              <Icon />
            ) : (
              <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
            )}
          </div>
        </div>
      </div>

      <h3 className="text-sm sm:text-base font-bold text-gray-800 mb-1">{title}</h3>

      <p className="text-xs sm:text-sm text-teal-600 font-medium break-words px-2">
        {value}
      </p>
    </a>
  );
}
