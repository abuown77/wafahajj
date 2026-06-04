import {
  AbsoluteFill,
  Sequence,
  Img,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
  spring,
  interpolate,
} from "remotion";
import { loadFont as loadPlayfair } from "@remotion/google-fonts/PlayfairDisplay";
import { loadFont as loadPlex } from "@remotion/google-fonts/IBMPlexSans";
import { COLORS } from "./theme";
import { CrescentIcon, DocIcon, HandsIcon, CheckIcon } from "./icons";

const { fontFamily: PLAYFAIR } = loadPlayfair();
const { fontFamily: PLEX } = loadPlex();

const SAFE_TOP = 150;
const SAFE_BOTTOM = 170;

// Rise + fade element, staggered by `delay` frames
const Rise: React.FC<{ delay: number; children: React.ReactNode }> = ({ delay, children }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = spring({ frame: frame - delay, fps, config: { damping: 200 } });
  const y = interpolate(s, [0, 1], [40, 0]);
  return <div style={{ opacity: s, transform: `translateY(${y}px)` }}>{children}</div>;
};

const StepScene: React.FC<{
  num: string;
  Icon: React.FC;
  title: string;
  body: string;
}> = ({ num, Icon, title, body }) => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.beige,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: SAFE_TOP,
        paddingBottom: SAFE_BOTTOM,
        paddingLeft: 110,
        paddingRight: 110,
        fontFamily: PLEX,
      }}
    >
      <Rise delay={0}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 30 }}>
          <Icon />
        </div>
      </Rise>
      <Rise delay={6}>
        <div
          style={{
            fontFamily: PLAYFAIR,
            fontSize: 40,
            fontStyle: "italic",
            color: COLORS.gold,
            textAlign: "center",
            marginBottom: 14,
            letterSpacing: 2,
          }}
        >
          Step {num}
        </div>
      </Rise>
      <Rise delay={12}>
        <div
          style={{
            fontFamily: PLAYFAIR,
            fontSize: 58,
            fontWeight: 600,
            color: COLORS.green,
            textAlign: "center",
            lineHeight: 1.2,
            marginBottom: 26,
          }}
        >
          {title}
        </div>
      </Rise>
      <Rise delay={18}>
        <div
          style={{
            fontSize: 34,
            color: COLORS.text,
            textAlign: "center",
            lineHeight: 1.5,
            maxWidth: 760,
          }}
        >
          {body}
        </div>
      </Rise>
    </AbsoluteFill>
  );
};

const Intro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const logoS = spring({ frame, fps, config: { damping: 200 } });
  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.green,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: SAFE_TOP,
        paddingBottom: SAFE_BOTTOM,
        paddingLeft: 100,
        paddingRight: 100,
        fontFamily: PLEX,
      }}
    >
      <div style={{ transform: `scale(${interpolate(logoS, [0, 1], [0.7, 1])})`, opacity: logoS, marginBottom: 36 }}>
        <Img src={staticFile("logo.png")} style={{ width: 200, height: 200, borderRadius: 28 }} />
      </div>
      <Rise delay={14}>
        <div
          style={{
            fontFamily: PLAYFAIR,
            fontSize: 70,
            fontWeight: 700,
            color: COLORS.beige,
            textAlign: "center",
            lineHeight: 1.2,
            marginBottom: 22,
          }}
        >
          Honor those who have passed
        </div>
      </Rise>
      <Rise delay={24}>
        <div
          style={{
            fontSize: 36,
            color: COLORS.gold,
            textAlign: "center",
            lineHeight: 1.5,
            maxWidth: 800,
          }}
        >
          Umrah performed on their behalf — by trusted hands in Mecca.
        </div>
      </Rise>
    </AbsoluteFill>
  );
};

const Outro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const logoS = spring({ frame, fps, config: { damping: 200 } });
  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.burgundy,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: SAFE_TOP,
        paddingBottom: SAFE_BOTTOM,
        paddingLeft: 100,
        paddingRight: 100,
        fontFamily: PLEX,
      }}
    >
      <div style={{ transform: `scale(${interpolate(logoS, [0, 1], [0.7, 1])})`, opacity: logoS, marginBottom: 30 }}>
        <Img src={staticFile("logo.png")} style={{ width: 180, height: 180, borderRadius: 26 }} />
      </div>
      <Rise delay={12}>
        <div
          style={{
            fontFamily: PLAYFAIR,
            fontSize: 56,
            fontStyle: "italic",
            color: COLORS.beige,
            textAlign: "center",
            lineHeight: 1.3,
            marginBottom: 30,
          }}
        >
          A promise kept.<br />A duty fulfilled.
        </div>
      </Rise>
      <Rise delay={22}>
        <div
          style={{
            fontSize: 40,
            fontWeight: 700,
            color: COLORS.gold,
            textAlign: "center",
            marginBottom: 16,
          }}
        >
          Umrah Badal · $199
        </div>
      </Rise>
      <Rise delay={30}>
        <div style={{ fontSize: 34, color: COLORS.beige, textAlign: "center", lineHeight: 1.6 }}>
          www.wafahajj.com<br />Telegram @wafahajj
        </div>
      </Rise>
    </AbsoluteFill>
  );
};

export const Explainer: React.FC = () => {
  // 30fps · 6s per scene · 180 frames each
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.beige }}>
      <Sequence durationInFrames={180}><Intro /></Sequence>
      <Sequence from={180} durationInFrames={180}>
        <StepScene num="1" Icon={DocIcon} title="Register & share their name" body="Tell us who you wish to honor. Add an optional voice note of supplication." />
      </Sequence>
      <Sequence from={360} durationInFrames={180}>
        <StepScene num="2" Icon={HandsIcon} title="A trusted performer completes the Umrah" body="In Mecca, in their name — with care, dignity, and full devotion." />
      </Sequence>
      <Sequence from={540} durationInFrames={180}>
        <StepScene num="3" Icon={CheckIcon} title="You receive full proof" body="A recorded video, the hady receipt, and photos — delivered to you." />
      </Sequence>
      <Sequence from={720} durationInFrames={180}><Outro /></Sequence>
    </AbsoluteFill>
  );
};
