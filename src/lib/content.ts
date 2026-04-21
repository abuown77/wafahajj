/**
 * Single-source content loader.
 * Imports site.json and exposes it as typed content.
 * Astro's file loader needs arrays; for a single-page site,
 * direct import is simpler and still type-safe.
 */
import siteData from '../content/site.json';

export type Locale = 'en' | 'ar' | 'sv' | 'nb';

export interface I18nString {
  en: string;
  ar: string;
  sv: string;
  nb: string;
}

export interface I18nArray<T> {
  en: T[];
  ar: T[];
  sv: T[];
  nb: T[];
}

export interface FeatureItem { title: string; body: string; }
export interface ProofItem { label: string; detail: string; }
export interface StepItem { title: string; body: string; }

export interface SiteContent {
  id: string;
  nav: { cta: I18nString };
  hero: {
    eyebrow: I18nString;
    headline: I18nString;
    headlineAccent: I18nString;
    subhead: I18nString;
    primaryCta: I18nString;
    secondaryCta: I18nString;
  };
  problem: {
    eyebrow: I18nString;
    headline: I18nString;
    questions: I18nArray<string>;
  };
  solution: {
    eyebrow: I18nString;
    headline: I18nString;
    lead: I18nString;
    body: I18nString;
    afterHadith: I18nString;
    features: I18nArray<FeatureItem>;
  };
  proof: {
    eyebrow: I18nString;
    headline: I18nString;
    items: I18nArray<ProofItem>;
    galleryCaptions: {
      certificate: I18nString;
      hadyReceipt: I18nString;
      arafaThumb: I18nString;
    };
  };
  pricing: {
    eyebrow: I18nString;
    headline: I18nString;
    hajjLabel: I18nString;
    hajjPrice: I18nString;
    hajjSubtitle: I18nString;
    umrahLabel: I18nString;
    umrahPrice: I18nString;
    umrahSubtitle: I18nString;
    pledge: I18nString;
    footnote: I18nString;
  };
  process: {
    eyebrow: I18nString;
    headline: I18nString;
    steps: I18nArray<StepItem>;
  };
  finalCta: {
    headline: I18nString;
    subhead: I18nString;
    primaryCta: I18nString;
    note: I18nString;
  };
  footer: { tagline: I18nString; identity: I18nString; rights: I18nString };
  whatsappPresets: { en: string; ar: string; sv: string; nb: string };
  seo: { title: I18nString; description: I18nString };
}

export const content: SiteContent = siteData as SiteContent;
export const LOCALES: Locale[] = ['en', 'ar', 'sv', 'nb'];
