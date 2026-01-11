"use client";
import type { Variants } from "framer-motion";
import { motion } from "framer-motion";
import Image from "next/image";
import HeroIllustration from "@/components/ui/hero-illustration";
import {
  ICON_POSITIONS,
  ORBIT_RADIUS,
  ICON_SIZE,
} from "@/constants/animation/icon-positions";

const coverVariants: Variants = {
  initial: { opacity: 1 },
  animate: { opacity: 1 },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
      delay: 1.5,
    },
  },
};

const mainContainerVariants: Variants = {
  initial: { scale: 0.5, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
      delay: 0.5,
    },
  },
  exit: {
    scale: 0.5,
    opacity: 0,
    transition: {
      duration: 0.5,
      delay: 0.2,
    },
  },
};

const orbitAnimation = {
  rotate: 360,
};

const orbitTransition = {
  repeat: Infinity,
  duration: 20,
  ease: "linear" as const,
};

const skillIconVariants: Variants = {
  initial: { opacity: 0, scale: 0 },
  animate: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: 1 + i * 0.1,
    },
  }),
  exit: (i: number) => ({
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.3,
      delay: i * 0.05,
    },
  }),
};

const AnimatedCover = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-light-background dark:bg-dark-background"
      variants={coverVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.div
        className="relative flex items-center justify-center"
        style={{
          width: `${ORBIT_RADIUS * 2}px`,
          height: `${ORBIT_RADIUS * 2}px`,
        }}
        variants={mainContainerVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <div className="w-64 h-64">
          <HeroIllustration />
        </div>

        <motion.div
          className="absolute w-full h-full"
          animate={orbitAnimation}
          transition={orbitTransition}
        >
          {ICON_POSITIONS.map(({ logo, x, y }, i) => (
            <motion.div
              key={logo}
              className="absolute"
              style={{
                top: y,
                left: x,
                width: ICON_SIZE,
                height: ICON_SIZE,
              }}
              custom={i}
              variants={skillIconVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <motion.div
                className="w-full h-full relative"
                animate={{ rotate: -360 }}
                transition={{
                  repeat: Infinity,
                  duration: 20,
                  ease: "linear",
                }}
              >
                <Image
                  src={`/logo/${logo}`}
                  alt={logo.replace(".png", "")}
                  fill
                  className="object-contain"
                  sizes={`${ICON_SIZE}px`}
                  priority
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AnimatedCover;
