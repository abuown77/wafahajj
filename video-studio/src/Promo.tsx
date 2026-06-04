import React from 'react';
import {
  AbsoluteFill,
  Img,
  interpolate,
  Series,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import {BrandIntro} from './BrandIntro';
import {Crescent} from './Crescent';
import {BRAND, COLORS, GOLD_GRADIENT, GREEN_BG} from './brand';
import {FONT_PLAYFAIR, FONT_ARABIC, FONT_INTER} from './fonts';

export type PromoProps = {
  headline: string;
  body: string;
  cta: string;
  arabic: boolean; // هل المحتوى عربي (يقلب الاتجاه ويستخدم الخط العربي)
};

const goldText: React.CSSProperties = {
  backgroundImage: GOLD_GRADIENT,
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  color: 'transparent',
  WebkitTextFillColor: 'transparent',
};

// مشهد الرسالة: عنوان بطل + نص داعم
const MessageScene: React.FC<PromoProps> = ({headline, body, arabic}) => {
  const frame = useCurrentFrame();
  const {fps, width} = useVideoConfig();
  const s = width / 1080;
  const bodyFont = arabic ? FONT_ARABIC : FONT_INTER;
  const headFont = arabic ? FONT_ARABIC : FONT_PLAYFAIR;

  const hIn = spring({frame, fps, config: {damping: 200, mass: 0.8}});
  const bIn = spring({frame: frame - 16, fps, config: {damping: 200}});

  return (
    <AbsoluteFill
      style={{
        background: GREEN_BG,
        alignItems: 'center',
        justifyContent: 'center',
        padding: `0 ${110 * s}px`,
        direction: arabic ? 'rtl' : 'ltr',
      }}
    >
      <div style={{position: 'absolute', top: 70 * s, opacity: 0.85}}>
        <Crescent size={120 * s} glow={0.7} ring={false} />
      </div>
      <div style={{textAlign: 'center', maxWidth: 880 * s}}>
        <div
          style={{
            ...goldText,
            fontFamily: headFont,
            fontWeight: 700,
            fontSize: (arabic ? 78 : 84) * s,
            lineHeight: 1.12,
            opacity: hIn,
            transform: `translateY(${interpolate(hIn, [0, 1], [28 * s, 0])}px)`,
          }}
        >
          {headline}
        </div>
        <div
          style={{
            fontFamily: bodyFont,
            fontWeight: 400,
            fontSize: 40 * s,
            lineHeight: 1.5,
            color: COLORS.beige,
            marginTop: 34 * s,
            opacity: bIn,
            transform: `translateY(${interpolate(bIn, [0, 1], [22 * s, 0])}px)`,
          }}
        >
          {body}
        </div>
      </div>
    </AbsoluteFill>
  );
};

// مشهد الختام: الشعار الكامل + الدعوة للفعل + الموقع وتلجرام
const OutroScene: React.FC<PromoProps> = ({cta, arabic}) => {
  const frame = useCurrentFrame();
  const {fps, width} = useVideoConfig();
  const s = width / 1080;

  const logoIn = spring({frame, fps, config: {damping: 200, mass: 0.8}});
  const ctaIn = spring({frame: frame - 18, fps, config: {damping: 200}});
  const linkIn = spring({frame: frame - 32, fps, config: {damping: 200}});

  return (
    <AbsoluteFill
      style={{
        background: GREEN_BG,
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: FONT_INTER,
      }}
    >
      <Img
        src={staticFile('namemark.png')}
        style={{
          width: 420 * s,
          opacity: logoIn,
          transform: `scale(${interpolate(logoIn, [0, 1], [0.85, 1])})`,
        }}
      />
      <div
        style={{
          fontFamily: arabic ? FONT_ARABIC : FONT_PLAYFAIR,
          fontStyle: arabic ? 'normal' : 'italic',
          fontSize: 44 * s,
          color: COLORS.goldLight,
          marginTop: 30 * s,
          textAlign: 'center',
          padding: `0 ${100 * s}px`,
          opacity: ctaIn,
          transform: `translateY(${interpolate(ctaIn, [0, 1], [18 * s, 0])}px)`,
        }}
      >
        {cta}
      </div>
      <div
        style={{
          display: 'flex',
          gap: 40 * s,
          marginTop: 46 * s,
          opacity: linkIn,
          color: COLORS.beige,
          fontSize: 32 * s,
          fontWeight: 500,
        }}
      >
        <span>{BRAND.website}</span>
        <span style={{color: COLORS.gold}}>•</span>
        <span>{BRAND.telegram}</span>
      </div>
    </AbsoluteFill>
  );
};

// الفيديو الإعلاني الكامل: مقدمة → رسالة → ختام
export const Promo: React.FC<PromoProps> = (props) => {
  const {fps} = useVideoConfig();
  return (
    <Series>
      <Series.Sequence durationInFrames={2.5 * fps}>
        <BrandIntro showTagline={false} />
      </Series.Sequence>
      <Series.Sequence durationInFrames={4 * fps}>
        <MessageScene {...props} />
      </Series.Sequence>
      <Series.Sequence durationInFrames={3 * fps}>
        <OutroScene {...props} />
      </Series.Sequence>
    </Series>
  );
};
