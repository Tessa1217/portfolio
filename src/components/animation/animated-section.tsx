import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";
import {
  animationPresets,
  viewportOptions,
} from "@/constants/animation/animation";

export interface AnimatedSectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  preset?: keyof typeof animationPresets;
  as?: "div" | "section" | "article" | "main";
  once?: boolean;
  custom?: unknown;
  viewport?: keyof typeof viewportOptions;
  delay?: number;
}

const AnimatedSection = ({
  id,
  children,
  className = "",
  variants,
  preset,
  custom,
  as = "div",
  viewport = "once",
  delay = 0,
}: AnimatedSectionProps) => {
  const MotionComponent = motion[as];
  const { ref, controls } = useInViewAnimation(viewport);

  // Use preset if provided, otherwise use custom variants
  const animationVariants = preset
    ? animationPresets[preset].variants
    : variants;
  const transition = preset ? animationPresets[preset].transition : undefined;

  return (
    <MotionComponent
      id={id}
      ref={ref}
      initial="hidden"
      custom={custom}
      viewport={viewportOptions[viewport]}
      animate={controls}
      variants={animationVariants}
      transition={transition}
      className={className}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </MotionComponent>
  );
};

export default AnimatedSection;
