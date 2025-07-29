import React from "react";
import { motion } from "framer-motion";
import { useListAnimation } from "@/hooks/useInViewAnimation";
import {
  staggerContainer,
  staggerFast,
  staggerSlow,
} from "@/constants/animation/animation";

export interface AnimatedListProps {
  children: React.ReactNode;
  className?: string;
  staggerSpeed?: "normal" | "fast" | "slow";
  viewport?: "once" | "aggressive" | "conservative" | "always";
  delay?: number;
}

const AnimatedList = ({
  children,
  className = "",
  staggerSpeed = "normal",
  viewport = "once",
  delay = 0,
}: AnimatedListProps) => {
  const { ref, controls } = useListAnimation(viewport);

  const getStaggerVariants = () => {
    switch (staggerSpeed) {
      case "fast":
        return staggerFast;
      case "slow":
        return staggerSlow;
      default:
        return staggerContainer;
    }
  };

  return (
    <motion.div
      ref={ref}
      animate={controls}
      variants={getStaggerVariants()}
      initial="hidden"
      whileInView="visible"
      className={className}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedList;
