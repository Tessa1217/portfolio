import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useInViewAnimation } from "../hooks/useInViewAnimation";

export interface MotionReveal {
  children: React.ReactNode;
  className?: string;
  variants: Variants;
  as?: "div" | "section" | "h3" | "span";
  once?: boolean;
}

const MotionWrapper = ({
  children,
  className = "",
  variants,
  as = "div",
  once = false,
}: MotionReveal) => {
  const MotionComponent = motion[as ?? "div"];
  const { ref, controls } = useInViewAnimation();

  return (
    <MotionComponent
      ref={ref}
      initial="hideen"
      viewport={{ once, amount: 0.3 }}
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </MotionComponent>
  );
};

export default MotionWrapper;
