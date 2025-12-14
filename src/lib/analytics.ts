declare global {
  interface Window {
    gtag?: (
      command: 'event' | 'config' | 'js',
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
  }
}

export const GA_TRACKING_ID = 'G-1FRNENPSXP';

// Event names
export const ANALYTICS_EVENTS = {
  CERTIFICATE_VIEW: 'certificate_view',
  CERTIFICATE_CLICK: 'certificate_click',
  PROJECT_VIEW: 'project_view',
  CONTACT_SUBMIT: 'contact_submit',
  LANGUAGE_CHANGE: 'language_change',
  THEME_CHANGE: 'theme_change',
  SOCIAL_CLICK: 'social_click',
  NEWSLETTER_CLICK: 'newsletter_click',
} as const;

/**
 * Track custom events in Google Analytics
 */
export const trackEvent = (
  eventName: string,
  properties?: Record<string, any>
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, properties);
  }
};

/**
 * Track page views
 */
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

/**
 * Track certificate interactions
 */
export const trackCertificate = (
  action: 'view' | 'click',
  certificateTitle: string
) => {
  trackEvent(
    action === 'view'
      ? ANALYTICS_EVENTS.CERTIFICATE_VIEW
      : ANALYTICS_EVENTS.CERTIFICATE_CLICK,
    {
      certificate_title: certificateTitle,
    }
  );
};

/**
 * Track social media clicks
 */
export const trackSocialClick = (platform: string) => {
  trackEvent(ANALYTICS_EVENTS.SOCIAL_CLICK, {
    platform,
  });
};

/**
 * Track language changes
 */
export const trackLanguageChange = (from: string, to: string) => {
  trackEvent(ANALYTICS_EVENTS.LANGUAGE_CHANGE, {
    from_language: from,
    to_language: to,
  });
};

/**
 * Track theme changes
 */
export const trackThemeChange = (theme: string) => {
  trackEvent(ANALYTICS_EVENTS.THEME_CHANGE, {
    theme,
  });
};
