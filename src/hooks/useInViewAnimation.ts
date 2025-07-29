import { useAnimationControls } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { viewportOptions } from "@/constants/animation/animation";

type ViewportOption = keyof typeof viewportOptions;

export const useInViewAnimation = (viewportType: ViewportOption = "once") => {
  const controls = useAnimationControls();
  const { ref, inView } = useInView({
    ...viewportOptions[viewportType],
    threshold: viewportOptions[viewportType].amount || 0.3,
  });

  if (inView) {
    controls.start("visible");
  }

  return { ref, controls };
};

// 특정 케이스 훅
export const useCardAnimation = (viewport: ViewportOption = "once") =>
  useInViewAnimation(viewport);
export const useListAnimation = (viewport: ViewportOption = "aggressive") =>
  useInViewAnimation(viewport);
export const useHeroAnimation = (viewport: ViewportOption = "conservative") =>
  useInViewAnimation(viewport);
export const useContinuousAnimation = (viewport: ViewportOption = "always") =>
  useInViewAnimation(viewport);
