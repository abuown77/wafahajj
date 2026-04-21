/**
 * Site-wide constants. Single source of truth.
 * Do not duplicate these values in components or content.
 */

export const SITE = {
  url: import.meta.env.PUBLIC_SITE_URL ?? 'https://wafahajj.com',
  name: 'Wafa Hajj',
  nameAr: 'وفاء الحج',
  tagline: 'A promise kept. A pillar fulfilled.',
  taglineAr: 'وفاءٌ للعهد، وإتمامٌ للركن.',
} as const;

export const WHATSAPP = {
  number: import.meta.env.PUBLIC_WHATSAPP_NUMBER ?? '12342800554',
  display: '+1 (234) 280-0554',
} as const;

export const PRICING = {
  hajjBadal: 1990,
  umrahBadal: 150,
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
