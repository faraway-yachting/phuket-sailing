/**
 * Scroll utilities
 * Centralized smooth scrolling functionality
 */

/**
 * Smoothly scrolls to a section by its ID
 * @param sectionId - The ID of the section to scroll to (without the # prefix)
 */
export function scrollToSection(sectionId: string): void {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

/**
 * Scrolls to the top of the page
 */
export function scrollToTop(): void {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Scrolls to a specific element
 * @param element - The HTML element to scroll to
 */
export function scrollToElement(element: HTMLElement): void {
  element.scrollIntoView({ behavior: 'smooth' });
}
