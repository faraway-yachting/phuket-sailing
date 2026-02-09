/**
 * useScrollToSection hook
 * Custom hook for smooth scrolling to sections
 */

import { useCallback } from 'react';
import { scrollToSection } from '../utils/scroll';

/**
 * Hook that returns a memoized scroll function
 * Useful for navigation components that need to scroll to different sections
 */
export function useScrollToSection() {
  const handleScrollToSection = useCallback((sectionId: string) => {
    scrollToSection(sectionId);
  }, []);

  return handleScrollToSection;
}
