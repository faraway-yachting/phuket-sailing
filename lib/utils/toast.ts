/**
 * Toast notification utilities
 * Centralized toast configurations for consistent messaging
 */

import { toast } from 'sonner';

/**
 * Standard toast duration in milliseconds
 */
const TOAST_DURATION = 5000;

/**
 * Toast notification helpers with consistent styling and duration
 */
export const toastMessages = {
  /**
   * Show success toast for form submission
   */
  formSuccess: () =>
    toast.success('Form Submitted Successfully!', {
      description: "Thank you for your inquiry! We'll get back to you soon.",
      duration: TOAST_DURATION,
    }),

  /**
   * Show error toast for form submission failure
   */
  formError: () =>
    toast.error('Submission Failed', {
      description: 'There was an error submitting your form. Please try again or contact us directly.',
      duration: TOAST_DURATION,
    }),

  /**
   * Show generic success toast
   */
  success: (message: string, description?: string) =>
    toast.success(message, {
      description,
      duration: TOAST_DURATION,
    }),

  /**
   * Show generic error toast
   */
  error: (message: string, description?: string) =>
    toast.error(message, {
      description,
      duration: TOAST_DURATION,
    }),

  /**
   * Show info toast
   */
  info: (message: string, description?: string) =>
    toast.info(message, {
      description,
      duration: TOAST_DURATION,
    }),

  /**
   * Show warning toast
   */
  warning: (message: string, description?: string) =>
    toast.warning(message, {
      description,
      duration: TOAST_DURATION,
    }),
};
