import React from "react";
import { motion } from "framer-motion";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";
import {
  fadeInUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  slideInFromBottom,
} from "@/constants/animation/animation";

type ValidElement =
  | "div"
  | "span"
  | "p"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6";

export interface AnimatedElementProps {
  children: React.ReactNode;
  className?: string;
  listChildren?: boolean;
  animation?:
    | "fadeInUp"
    | "fadeInDown"
    | "fadeInLeft"
    | "fadeInRight"
    | "scaleIn"
    | "slideInFromBottom";
  delay?: number;
  duration?: number;
  as?: ValidElement;
}

const AnimatedElement = ({
  children,
  className = "",
  listChildren = false,
  animation = "fadeInUp",
  delay = 0,
  duration,
  as = "div",
}: AnimatedElementProps) => {
  const { ref, controls } = useInViewAnimation();

  const getVariants = () => {
    const baseVariants = {
      fadeInUp,
      fadeInDown,
      fadeInLeft,
      fadeInRight,
      scaleIn,
      slideInFromBottom,
    }[animation];

    if (duration) {
      return {
        ...baseVariants,
        visible: {
          ...baseVariants.visible,
          transition: {
            duration,
          },
        },
      };
    }

    return baseVariants;
  };

  // Motion Component 렌더링
  const renderMotionComponent = () => {
    const variants = getVariants();
    const baseProps = {
      variants,
      className,
      style: { transitionDelay: `${delay}s` },
    };

    const props = listChildren
      ? baseProps
      : { ...baseProps, ref, animate: controls, initial: "hidden" as const };

    const MotionComponent = motion[as as ValidElement];

    return <MotionComponent {...props}>{children}</MotionComponent>;
  };

  return renderMotionComponent();
};

export default AnimatedElement;
