"use client";
import { useEffect, useRef, useState } from "react";
import type { Variants } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import HeroIllustration from "@/components/introduction/hero-illustration";
import {
  ICON_POSITIONS,
  ICON_SIZE,
} from "@/constants/animation/icon-positions";
import useStorage from "@/hooks/useLocalStorage";

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

const getDynamicIconPositions = (radius: number, count: number) => {
  return Array.from({ length: count }, (_, i) => {
    const angle = (2 * Math.PI * i) / count;
    return {
      x: radius + radius * Math.cos(angle) - ICON_SIZE / 2,
      y: radius + radius * Math.sin(angle) - ICON_SIZE / 2,
      logo: ICON_POSITIONS[i].logo,
    };
  });
};

const AnimatedCover = () => {
  const [hasOpened, setHasOpened] = useStorage("hasOpened", "session", false);
  const [showCover, setShowCover] = useState(() => {
    return !hasOpened;
  });

  useEffect(() => {
    const handleAfterOpen = () => {
      setHasOpened(true);
      setShowCover(false);
    };

    const timer = setTimeout(() => handleAfterOpen(), 3000);
    return () => clearTimeout(timer);
  }, [setHasOpened]);

  const heroRef = useRef<HTMLDivElement>(null);
  const [heroSize, setHeroSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!heroRef.current) return;
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setHeroSize({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    });
    resizeObserver.observe(heroRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  const ORBIT_RADIUS = Math.max(heroSize.width, heroSize.height) / 2 + 80;

  const dynamicIconPositions = getDynamicIconPositions(
    ORBIT_RADIUS,
    ICON_POSITIONS.length
  );

  return (
    <AnimatePresence>
      {showCover && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-light-background dark:bg-dark-background"
          variants={coverVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <motion.div
            className="relative flex items-center justify-center"
            style={{ width: ORBIT_RADIUS * 2, height: ORBIT_RADIUS * 2 }}
            variants={mainContainerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {/* Hero */}
            <div ref={heroRef} className="relative">
              <HeroIllustration />
            </div>

            <motion.div
              className="absolute w-full h-full"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            >
              {dynamicIconPositions.map(({ logo, x, y }, i) => (
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
      )}
    </AnimatePresence>
  );
};

export default AnimatedCover;
