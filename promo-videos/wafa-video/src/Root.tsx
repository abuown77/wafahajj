import { Composition } from "remotion";
import { Explainer } from "./Explainer";

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="Explainer"
      component={Explainer}
      durationInFrames={900}
      fps={30}
      width={1080}
      height={1080}
    />
  );
};
