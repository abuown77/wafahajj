import React from 'react';
import {Composition} from 'remotion';
import {BrandIntro} from './BrandIntro';
import {Promo, PromoProps} from './Promo';

// نص افتراضي إنجليزي (أمريكا/كندا/السويد/النرويج)
const defaultPromo: PromoProps = {
  headline: 'Fulfil their Hajj.\nHonour their memory.',
  body: 'We perform Hajj & Umrah by proxy for your departed loved ones — with proof, dignity, and care.',
  cta: 'A promise kept. A duty fulfilled.',
  arabic: false,
};

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* مقدمة الهوية المستقلة — مربّع */}
      <Composition
        id="BrandIntro"
        component={BrandIntro}
        durationInFrames={90}
        fps={30}
        width={1080}
        height={1080}
        defaultProps={{showTagline: true}}
      />

      {/* الفيديو الإعلاني — مربّع (فيسبوك/إنستغرام بوست) */}
      <Composition
        id="PromoSquare"
        component={Promo}
        durationInFrames={Math.round(9.5 * 30)}
        fps={30}
        width={1080}
        height={1080}
        defaultProps={defaultPromo}
      />

      {/* الفيديو الإعلاني — عمودي (ريلز/ستوري/تيك توك) */}
      <Composition
        id="PromoVertical"
        component={Promo}
        durationInFrames={Math.round(9.5 * 30)}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={defaultPromo}
      />
    </>
  );
};
