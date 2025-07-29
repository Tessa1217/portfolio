import React from "react";
import { motion } from "framer-motion";
import { useCardAnimation } from "@/hooks/useInViewAnimation";
import {
  hoverScale,
  hoverLift,
  hoverGlow,
} from "@/constants/animation/animation";

export interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: "scale" | "lift" | "glow" | "none";
  delay?: number;
  onClick?: () => void;
}

const AnimatedCard = ({
  children,
  className = "",
  hoverEffect = "scale",
  delay = 0,
  onClick,
}: AnimatedCardProps) => {
  const { ref, controls } = useCardAnimation();

  const getHoverVariants = () => {
    switch (hoverEffect) {
      case "scale":
        return hoverScale;
      case "lift":
        return hoverLift;
      case "glow":
        return hoverGlow;
      default:
        return {};
    }
  };

  return (
    <motion.div
      ref={ref}
      animate={controls}
      variants={getHoverVariants()}
      initial="initial"
      whileHover={hoverEffect !== "none" ? "hover" : undefined}
      className={className}
      onClick={onClick}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;
