"use client";
import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";
import {
  fadeInUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  slideInFromBottom,
  hoverScale,
  hoverLift,
  hoverGlow,
  staggerFast,
  staggerContainer,
  staggerSlow,
} from "@/constants/animation/animation";

type AnimationType =
  | "fadeInUp"
  | "fadeInDown"
  | "fadeInLeft"
  | "fadeInRight"
  | "scaleIn"
  | "slideInFromBottom";

type StaggerEffect = "normal" | "fast" | "slow";

type HoverEffect = "scale" | "lift" | "glow" | "none";

type ViewportType = "once" | "aggressive" | "conservative" | "always";

type HTMLElement =
  | "div"
  | "section"
  | "article"
  | "main"
  | "span"
  | "p"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6";

interface BaseAnimatedProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

interface BoxProps extends BaseAnimatedProps {
  as?: HTMLElement;
  animation?: AnimationType;
  hoverEffect?: HoverEffect;
  viewport?: ViewportType;
  variants?: Variants;
  duration?: number;
  onClick?: () => void;
}

function Box({
  children,
  className = "",
  as = "div",
  animation = "fadeInUp",
  hoverEffect = "none",
  viewport = "once",
  variants,
  delay = 0,
  duration,
  onClick,
}: BoxProps) {
  const { ref, controls } = useInViewAnimation(viewport);
  const MotionComponent = motion[as];

  const animationVariants = variants || getAnimationVariants(animation);
  const hoverVariants = getHoverVariants(hoverEffect);

  const mergedVariants = {
    ...animationVariants,
    ...hoverVariants,
  };

  return (
    <MotionComponent
      ref={ref}
      animate={controls}
      variants={mergedVariants}
      initial="hidden"
      whileHover={hoverEffect !== "none" ? "hover" : undefined}
      className={className}
      onClick={onClick}
      transition={duration ? { duration } : undefined}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </MotionComponent>
  );
}

interface SectionProps extends BaseAnimatedProps {
  id?: string;
  as?: "div" | "section" | "article" | "main";
  animation?: AnimationType;
  viewport?: ViewportType;
  variants?: Variants;
}

function Section({
  id,
  children,
  className = "",
  as = "section",
  animation = "fadeInUp",
  viewport = "once",
  variants,
  delay = 0,
}: SectionProps) {
  const { ref, controls } = useInViewAnimation(viewport);
  const MotionComponent = motion[as];
  const animationVariants = variants || getAnimationVariants(animation);

  return (
    <MotionComponent
      id={id}
      ref={ref}
      animate={controls}
      variants={animationVariants}
      initial="hidden"
      className={`scroll-mt-8 ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </MotionComponent>
  );
}

interface CardProps extends BaseAnimatedProps {
  hoverEffect?: HoverEffect;
  onClick?: () => void;
  viewport?: ViewportType;
}

function Card({
  children,
  className = "",
  hoverEffect = "scale",
  viewport = "once",
  delay = 0,
  onClick,
}: CardProps) {
  const { ref, controls } = useInViewAnimation(viewport);
  const hoverVariants = getHoverVariants(hoverEffect);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      variants={hoverVariants}
      initial="initial"
      whileHover={hoverEffect !== "none" ? "hover" : undefined}
      className={className}
      onClick={onClick}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </motion.div>
  );
}

interface ListProps extends BaseAnimatedProps {
  staggerDelay?: number;
  viewport?: ViewportType;
  staggerSpeed?: StaggerEffect;
}

function List({
  children,
  className = "",
  viewport = "once",
  staggerSpeed = "normal",
  delay = 0,
}: ListProps) {
  const { ref, controls } = useInViewAnimation(viewport);

  const staggerVariants: Variants = getStaggerVariants(staggerSpeed);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      variants={staggerVariants}
      initial="hidden"
      whileInView="visible"
      className={className}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </motion.div>
  );
}

interface ListItemProps extends BaseAnimatedProps {
  as?: HTMLElement;
  animation?: AnimationType;
  variants?: Variants;
  hoverEffect?: HoverEffect;
}

function ListItem({
  children,
  className = "",
  as = "div",
  animation = "fadeInUp",
  hoverEffect = "none",
  variants,
  delay = 0,
}: ListItemProps) {
  const MotionComponent = motion[as];
  const animationVariants = variants || getAnimationVariants(animation);
  const hoverVariants = getHoverVariants(hoverEffect);

  const mergedVariants = {
    ...animationVariants,
    ...hoverVariants,
  };

  return (
    <MotionComponent
      variants={mergedVariants}
      className={className}
      style={{ transitionDelay: `${delay}s` }}
      whileHover={hoverEffect !== "none" ? "hover" : undefined}
    >
      {children}
    </MotionComponent>
  );
}

function getAnimationVariants(animation: AnimationType): Variants {
  const animationMap = {
    fadeInUp,
    fadeInDown,
    fadeInLeft,
    fadeInRight,
    scaleIn,
    slideInFromBottom,
  };

  return animationMap[animation];
}

function getHoverVariants(effect: HoverEffect): Variants {
  const effectMap = {
    scale: hoverScale,
    lift: hoverLift,
    glow: hoverGlow,
    none: { initial: {}, hover: {} },
  };

  return effectMap[effect];
}

function getStaggerVariants(staggerSpeed: StaggerEffect): Variants {
  switch (staggerSpeed) {
    case "fast":
      return staggerFast;
    case "slow":
      return staggerSlow;
    default:
      return staggerContainer;
  }
}

// 개별 export도 유지 (하위 호환성)
export { Box, Section, Card, List, ListItem };

// 타입 export
export type { BoxProps, SectionProps, CardProps, ListProps, ListItemProps };
