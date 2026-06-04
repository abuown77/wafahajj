import React from 'react';
import {COLORS} from './brand';

// هلال ذهبي مرسوم بالكود — مطابق لروح شعار وفاء الحج (بلا كعبة، بساطة ووقار)
export const Crescent: React.FC<{
  size: number;
  glow?: number; // 0..1 شدّة التوهّج
  ring?: boolean; // الحلقة الرفيعة المحيطة
}> = ({size, glow = 1, ring = true}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      style={{display: 'block', overflow: 'visible'}}
    >
      <defs>
        <linearGradient id="crescentGold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#EBD08A" />
          <stop offset="50%" stopColor={COLORS.gold} />
          <stop offset="100%" stopColor="#9E751F" />
        </linearGradient>
        <radialGradient id="crescentGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={COLORS.gold} stopOpacity={0.55 * glow} />
          <stop offset="60%" stopColor={COLORS.gold} stopOpacity={0.12 * glow} />
          <stop offset="100%" stopColor={COLORS.gold} stopOpacity={0} />
        </radialGradient>
        <mask id="crescentMask">
          <rect x="0" y="0" width="200" height="200" fill="black" />
          <circle cx="98" cy="100" r="70" fill="white" />
          <circle cx="128" cy="90" r="62" fill="black" />
        </mask>
      </defs>

      {/* توهّج خلفي */}
      <circle cx="100" cy="100" r="100" fill="url(#crescentGlow)" />

      {/* الحلقة الرفيعة */}
      {ring && (
        <circle
          cx="100"
          cy="100"
          r="92"
          fill="none"
          stroke={COLORS.gold}
          strokeOpacity={0.55}
          strokeWidth={1.5}
        />
      )}

      {/* الهلال */}
      <circle
        cx="98"
        cy="100"
        r="70"
        fill="url(#crescentGold)"
        mask="url(#crescentMask)"
      />
    </svg>
  );
};
