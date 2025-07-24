import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";

export interface AnimatedSectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  variants: Variants;
  as?: "div" | "section";
  once?: boolean;
  custom?: unknown;
}

const AnimatedSection = ({
  id,
  children,
  className = "",
  variants,
  custom,
  as = "div",
  once = false,
}: AnimatedSectionProps) => {
  const MotionComponent = motion[as ?? "div"];
  const { ref, controls } = useInViewAnimation();

  return (
    <MotionComponent
      id={id}
      ref={ref}
      initial="hideen"
      custom={custom}
      viewport={{ once, amount: 0.3 }}
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </MotionComponent>
  );
};

export default AnimatedSection;
