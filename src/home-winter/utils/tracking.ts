export type ContactButtonType = "WhatsApp" | "Phone";

export interface UtmParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  gclid?: string;
  sccid?: string;
  ttclid?: string;
}

export interface BookingClickPayload {
  packageId?: string;
  packageName: string;
  packagePrice: number | null;
  buttonType: ContactButtonType;
  placement: "hero" | "package_card" | "header" | "floating_mobile";
}

export interface ConfirmedBookingPayload {
  bookingReference: string;
  packageName: string;
  packagePrice: number;
  paymentMethod?: "cash" | "mada" | "tabby" | "tamara";
}

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
    snaptr?: (...args: unknown[]) => void;
    ttq?: {
      track: (eventName: string, params?: Record<string, unknown>) => void;
    };
    DorhTracking?: {
      getAttributionData: () => {
        campaignSource: string;
        utmParams: UtmParams;
      };
      trackBookingIntentClick: (payload: BookingClickPayload) => void;
      trackConfirmedBooking: (payload: ConfirmedBookingPayload) => void;
    };
  }
}

const UTM_STORAGE_KEY = "dorh_spa_utm_attribution_v1";

const TRACKED_KEYS: (keyof UtmParams)[] = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "gclid",
  "sccid",
  "ttclid",
];

/**
 * Captures UTM & ad click parameters from current URL and persists them in sessionStorage
 * so campaign attribution is retained across the entire landing page session.
 */
export function initAttributionTracking(): {
  campaignSource: string;
  utmParams: UtmParams;
} {
  if (typeof window === "undefined") {
    return { campaignSource: "direct", utmParams: {} };
  }

  let stored: UtmParams = {};
  try {
    const raw = window.sessionStorage.getItem(UTM_STORAGE_KEY);
    if (raw) {
      stored = JSON.parse(raw) as UtmParams;
    }
  } catch {
    // Ignore sessionStorage read issues in restricted privacy modes
  }

  const searchParams = new URLSearchParams(window.location.search);
  const current: UtmParams = { ...stored };

  TRACKED_KEYS.forEach((key) => {
    const val =
      searchParams.get(key) ||
      (key === "sccid" ? searchParams.get("ScCid") : null);
    if (val) {
      current[key] = val;
    }
  });

  try {
    if (Object.keys(current).length > 0) {
      window.sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(current));
    }
  } catch {
    // Ignore sessionStorage write issues
  }

  const campaignSource = resolveCampaignSource(current);

  const api = {
    getAttributionData: () => ({
      campaignSource: resolveCampaignSource(getStoredUtmParams()),
      utmParams: getStoredUtmParams(),
    }),
    trackBookingIntentClick,
    trackConfirmedBooking,
  };

  window.DorhTracking = api;

  return { campaignSource, utmParams: current };
}

export function getStoredUtmParams(): UtmParams {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.sessionStorage.getItem(UTM_STORAGE_KEY);
    if (raw) return JSON.parse(raw) as UtmParams;
  } catch {
    // fallback to URL parsing
  }

  const searchParams = new URLSearchParams(window.location.search);
  const fallback: UtmParams = {};
  TRACKED_KEYS.forEach((key) => {
    const val =
      searchParams.get(key) ||
      (key === "sccid" ? searchParams.get("ScCid") : null);
    if (val) fallback[key] = val;
  });
  return fallback;
}

export function resolveCampaignSource(utm: UtmParams): string {
  if (utm.utm_source) return utm.utm_source.toLowerCase();
  if (utm.sccid) return "snapchat";
  if (utm.ttclid) return "tiktok";
  if (utm.gclid) return "google";

  if (typeof document !== "undefined" && document.referrer) {
    try {
      const refHost = new URL(document.referrer).hostname.toLowerCase();
      if (refHost.includes("snapchat")) return "snapchat";
      if (refHost.includes("tiktok")) return "tiktok";
      if (refHost.includes("google")) return "google";
      if (refHost.includes("instagram") || refHost.includes("facebook")) {
        return "meta";
      }
      return refHost;
    } catch {
      return "direct";
    }
  }

  return "direct";
}

/**
 * Records a WhatsApp or Phone button click as a Contact / Lead Intent event.
 * IMPORTANT: Intentionally separated from Purchase / Confirmed Booking events
 * so ad platforms do not count mere clicks as completed purchases.
 */
export function trackBookingIntentClick(payload: BookingClickPayload): void {
  if (typeof window === "undefined") return;

  const utmParams = getStoredUtmParams();
  const campaignSource = resolveCampaignSource(utmParams);

  const eventData = {
    event: "booking_contact_click",
    event_stage: "click_intent", // Distinct from 'booking_confirmed'
    package_id: payload.packageId || "general_inquiry",
    package_name: payload.packageName,
    package_price: payload.packagePrice,
    currency: "SAR",
    button_type: payload.buttonType, // 'WhatsApp' | 'Phone'
    placement: payload.placement,
    campaign_source: campaignSource,
    ...utmParams,
    timestamp: new Date().toISOString(),
  };

  // 1. Google Tag Manager dataLayer (preserves existing GTM-MJ8TTBJQ setup)
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(eventData);

  // 2. Google Ads / GA4 gtag (Lead contact intent, NOT purchase)
  if (typeof window.gtag === "function") {
    window.gtag("event", "contact_click_intent", {
      package_name: payload.packageName,
      value: payload.packagePrice ?? 199,
      currency: "SAR",
      button_type: payload.buttonType,
      campaign_source: campaignSource,
      ...utmParams,
    });
  }

  // 3. Snapchat Pixel (Custom contact intent event, NOT PURCHASE)
  if (typeof window.snaptr === "function") {
    window.snaptr("track", "CUSTOM_EVENT_1", {
      item_category: payload.buttonType,
      description: payload.packageName,
      price: payload.packagePrice ?? 199,
      currency: "SAR",
    });
  }

  // 4. TikTok Pixel ('Contact' intent event, NOT CompletePayment)
  if (window.ttq && typeof window.ttq.track === "function") {
    window.ttq.track("Contact", {
      content_id: payload.packageId || "general_inquiry",
      content_name: payload.packageName,
      content_type: "product",
      value: payload.packagePrice ?? 199,
      currency: "SAR",
      description: `${payload.buttonType} | ${campaignSource}`,
    });
  }
}

/**
 * Separate handler exclusively for confirmed bookings (e.g., triggered via CRM callback or confirmation page).
 */
export function trackConfirmedBooking(payload: ConfirmedBookingPayload): void {
  if (typeof window === "undefined") return;

  const utmParams = getStoredUtmParams();
  const campaignSource = resolveCampaignSource(utmParams);

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "booking_confirmed",
    event_stage: "confirmed_booking",
    transaction_id: payload.bookingReference,
    package_name: payload.packageName,
    package_price: payload.packagePrice,
    currency: "SAR",
    payment_method: payload.paymentMethod || "unspecified",
    campaign_source: campaignSource,
    ...utmParams,
  });
}
