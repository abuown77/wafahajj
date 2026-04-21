/**
 * Client-side i18n for Wafa Hajj.
 * - 4 locales: en (default) · ar · sv · nb
 * - Priority: localStorage → UTM → 'en'
 * - NO IP detection. NO auto-switching based on location.
 * - Instant switch (no reload). Saved to localStorage.
 */

export type Locale = 'en' | 'ar' | 'sv' | 'nb';

const STORAGE_KEY = 'wh-lang';
const DEFAULT: Locale = 'en';
const UTM_MAP: Record<string, Locale> = {
  usa: 'en',
  canada: 'en',
  sweden: 'sv',
  norway: 'nb',
};
const RTL_LOCALES: Locale[] = ['ar'];

function isLocale(v: unknown): v is Locale {
  return v === 'en' || v === 'ar' || v === 'sv' || v === 'nb';
}

/** Decide initial locale on first paint. */
export function resolveInitialLocale(): Locale {
  if (typeof window === 'undefined') return DEFAULT;

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isLocale(stored)) return stored;
  } catch { /* storage blocked — fall through */ }

  try {
    const params = new URLSearchParams(window.location.search);
    const utm = params.get('utm_campaign')?.toLowerCase();
    if (utm && utm in UTM_MAP) return UTM_MAP[utm]!;
  } catch { /* malformed URL — ignore */ }

  return DEFAULT;
}

/** Apply locale to DOM: html lang/dir + tab active state. */
export function applyLocale(locale: Locale): void {
  const html = document.documentElement;
  html.setAttribute('lang', locale);
  html.setAttribute('dir', RTL_LOCALES.includes(locale) ? 'rtl' : 'ltr');

  // Tab active state
  document.querySelectorAll<HTMLButtonElement>('[data-lang-tab]').forEach((btn) => {
    const isActive = btn.dataset.langTab === locale;
    btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
    btn.classList.toggle('is-active', isActive);
  });

  // Update dynamic WhatsApp CTA messages
  document.querySelectorAll<HTMLAnchorElement>('[data-wa-link]').forEach((a) => {
    const msg = a.dataset[`waMsg${locale.charAt(0).toUpperCase() + locale.slice(1)}` as keyof DOMStringMap] as string | undefined;
    const number = a.dataset.waNumber ?? '';
    if (msg && number) {
      a.href = `https://wa.me/${number}?text=${encodeURIComponent(msg)}`;
    }
  });
}

export function setLocale(locale: Locale): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, locale);
  } catch { /* storage blocked — continue anyway */ }
  applyLocale(locale);
}

/** Attach click handlers to language tabs. */
export function bindTabs(): void {
  document.querySelectorAll<HTMLButtonElement>('[data-lang-tab]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const next = btn.dataset.langTab;
      if (isLocale(next)) setLocale(next);
    });
  });
}
