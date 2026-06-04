import React from 'react';
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import {Crescent} from './Crescent';
import {BRAND, COLORS, GOLD_GRADIENT, GREEN_BG} from './brand';
import {FONT_PLAYFAIR, FONT_ARABIC, FONT_INTER} from './fonts';

const goldText: React.CSSProperties = {
  backgroundImage: GOLD_GRADIENT,
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  color: 'transparent',
  WebkitTextFillColor: 'transparent',
};

// مقدمة الهوية القابلة لإعادة الاستخدام: هلال يطلع + الاسم + الشعار النصّي
export const BrandIntro: React.FC<{showTagline?: boolean}> = ({
  showTagline = true,
}) => {
  const frame = useCurrentFrame();
  const {fps, width} = useVideoConfig();
  const s = width / 1080; // عامل القياس حسب أبعاد الفيديو

  const crescentIn = spring({frame, fps, config: {damping: 200, mass: 0.8}});
  const crescentY = interpolate(crescentIn, [0, 1], [40 * s, 0]);
  const crescentScale = interpolate(crescentIn, [0, 1], [0.6, 1]);
  const glow = interpolate(frame, [0, 30, 40], [0, 0.4, 1], {
    extrapolateRight: 'clamp',
  });

  const nameIn = spring({
    frame: frame - 18,
    fps,
    config: {damping: 200, mass: 0.7},
  });
  const nameY = interpolate(nameIn, [0, 1], [30 * s, 0]);

  const arIn = spring({frame: frame - 30, fps, config: {damping: 200}});
  const taglineIn = spring({frame: frame - 48, fps, config: {damping: 200}});

  return (
    <AbsoluteFill
      style={{
        background: GREEN_BG,
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: FONT_INTER,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 18 * s,
        }}
      >
        <div
          style={{
            transform: `translateY(${crescentY}px) scale(${crescentScale})`,
            opacity: crescentIn,
          }}
        >
          <Crescent size={240 * s} glow={glow} />
        </div>

        <div
          style={{
            transform: `translateY(${nameY}px)`,
            opacity: nameIn,
            textAlign: 'center',
          }}
        >
          <div
            style={{
              ...goldText,
              fontFamily: FONT_PLAYFAIR,
              fontWeight: 700,
              fontSize: 96 * s,
              lineHeight: 1,
              letterSpacing: 1 * s,
            }}
          >
            {BRAND.nameEn}
          </div>
          <div
            style={{
              opacity: arIn,
              fontFamily: FONT_ARABIC,
              fontWeight: 600,
              fontSize: 46 * s,
              color: COLORS.beige,
              marginTop: 14 * s,
              letterSpacing: 2 * s,
            }}
          >
            {BRAND.nameAr}
          </div>
        </div>

        {showTagline && (
          <div
            style={{
              opacity: taglineIn,
              transform: `translateY(${interpolate(taglineIn, [0, 1], [16 * s, 0])}px)`,
              fontFamily: FONT_PLAYFAIR,
              fontStyle: 'italic',
              fontSize: 30 * s,
              color: COLORS.goldLight,
              marginTop: 10 * s,
              textAlign: 'center',
            }}
          >
            {BRAND.taglineEn}
          </div>
        )}
      </div>
    </AbsoluteFill>
  );
};
