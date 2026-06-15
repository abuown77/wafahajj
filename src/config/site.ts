/**
 * Site-wide constants. Single source of truth.
 * Do not duplicate these values in components or content.
 */

export const SITE = {
  url: import.meta.env.PUBLIC_SITE_URL ?? 'https://wafahajj.com',
  name: 'Wafa Hajj',
  nameAr: 'وفاء الحج',
  tagline: 'A promise kept. A duty fulfilled.',
  taglineAr: 'وعدٌ يُوفى، وفريضةٌ تُؤدّى.',
} as const;

export const TELEGRAM = {
  username: import.meta.env.PUBLIC_TELEGRAM_USERNAME ?? 'wafahajj',
  url: `https://t.me/${import.meta.env.PUBLIC_TELEGRAM_USERNAME ?? 'wafahajj'}`,
  display: '@wafahajj',
} as const;

export const WHATSAPP = {
  number: import.meta.env.PUBLIC_WHATSAPP_NUMBER ?? '12342800554',
  url: `https://wa.me/${import.meta.env.PUBLIC_WHATSAPP_NUMBER ?? '12342800554'}`,
  display: '+1 (234) 280-0554',
} as const;

export const CHECKOUT = {
  umrahUrl: import.meta.env.PUBLIC_CHECKOUT_UMRAH_URL
    ?? 'https://wafahajj-shop.fourthwall.com/products/umrah-badal-proxy-umrah-for-a-deceased-parent',
} as const;

/**
 * Orders endpoint — Google Apps Script web app bound to the orders Sheet.
 * Receives each request (incl. voice) and records it; Fourthwall's order
 * webhook hits the same URL to auto-mark payment. Token gates form posts.
 * Not a real secret (exposed in client JS) — just blocks trivial bot posts.
 */
export const ORDERS = {
  endpoint: import.meta.env.PUBLIC_ORDERS_ENDPOINT
    ?? 'https://script.google.com/macros/s/AKfycbx8mnV-2HsPZQ8AeQQXEOiBJDi7LUFrYTS4Mfeoxw_8p9rHvNbDltrLpgI2m26Q4B3N/exec',
  token: import.meta.env.PUBLIC_ORDERS_TOKEN ?? 'wh_8f3kq2mz7xptr9',
} as const;

export const PRICING = {
  hajjBadal: 1990,
  umrahBadal: 199,
  currency: 'USD',
} as const;

export const SACRED_TEXT = {
  hadithArabic: '«حُجَّ عن نفسك، ثم حُجَّ عن شُبرُمة»',
  hadithTransliteration: "Hujja 'an nafsika, thumma hujja 'an Shubrumah",
  hadithMeaning: {
    en: "Perform Hajj for yourself first, then for Shubrumah.",
    ar: "حجَّ عن نفسك أولاً، ثم حجَّ عن شُبرُمة.",
    sv: "Utför Hajj för dig själv först, sedan för Shubrumah.",
    nb: "Utfør Hajj for deg selv først, deretter for Shubrumah.",
  },
} as const;

export const ASSETS = {
  certificate: '/images/certificate.jpg',
  hadyReceipt: '/images/hady-receipt.jpg',
  arafaThumb: '/images/arafa-thumb.jpg',
  ogDefault: '/og-default.jpg',
} as const;

export const LOCALES = ['en', 'ar', 'sv', 'nb'] as const;
export type Locale = typeof LOCALES[number];

export const LOCALE_META: Record<Locale, { label: string; lang: string; dir: 'ltr' | 'rtl' }> = {
  en: { label: 'EN',       lang: 'en', dir: 'ltr' },
  ar: { label: 'العربية', lang: 'ar', dir: 'rtl' },
  sv: { label: 'Svenska', lang: 'sv', dir: 'ltr' },
  nb: { label: 'Norsk',   lang: 'nb', dir: 'ltr' },
};

/**
 * UTM campaign → preselected locale (optional convenience).
 * User can still toggle manually after landing.
 */
export const UTM_LOCALE_MAP: Record<string, Locale> = {
  usa: 'en',
  canada: 'en',
  sweden: 'sv',
  norway: 'nb',
};
