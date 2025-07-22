import { useAnimationControls } from "framer-motion";
import { useInView } from "react-intersection-observer";
export const useInViewAnimation = () => {
  const controls = useAnimationControls(); // v7 스타일
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  if (inView) {
    controls.start("visible");
  }

  return { ref, controls };
};
