import { COLORS } from "./theme";

const S = 150;

export const CrescentIcon: React.FC = () => (
  <svg width={S} height={S} viewBox="0 0 100 100">
    <path
      d="M70 12 A40 40 0 1 0 70 88 A32 32 0 1 1 70 12 Z"
      fill={COLORS.gold}
    />
  </svg>
);

export const DocIcon: React.FC = () => (
  <svg width={S} height={S} viewBox="0 0 100 100" fill="none" stroke={COLORS.gold} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round">
    <path d="M28 14 h32 l16 16 v56 a4 4 0 0 1 -4 4 H28 a4 4 0 0 1 -4 -4 V18 a4 4 0 0 1 4 -4 Z" />
    <path d="M58 14 v18 h18" />
    <path d="M36 50 h28 M36 62 h28 M36 74 h18" />
  </svg>
);

export const HandsIcon: React.FC = () => (
  <svg width={S} height={S} viewBox="0 0 100 100" fill="none" stroke={COLORS.gold} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round">
    <path d="M50 20 a14 14 0 1 0 0.01 0" />
    <path d="M22 84 c0 -16 12 -26 28 -26 s28 10 28 26" />
    <path d="M50 40 l4 8 l9 1 l-7 6 l2 9 l-8 -5 l-8 5 l2 -9 l-7 -6 l9 -1 Z" fill={COLORS.gold} stroke="none" opacity={0.9} />
  </svg>
);

export const CheckIcon: React.FC = () => (
  <svg width={S} height={S} viewBox="0 0 100 100" fill="none" stroke={COLORS.gold} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="50" cy="50" r="34" />
    <path d="M36 51 l10 11 l20 -24" />
  </svg>
);
