import type { Variants } from "framer-motion";

export const particleVariants: Variants = {
  initial: {
    x: 0,
    y: 0,
    scale: 1,
    opacity: 1,
  },
  move: {
    x: [100, -100, 0],
    y: [0, 50, 0],
    scale: [1, 1.2, 1],
    opacity: [1, 0.5, 1],
    transition: {
      duration: 2,
      ease: "easeInOut",
      times: [0, 0.5, 1],
    },
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  whileInView: { opacity: 1 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

export const fadeSlideUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const textContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 1,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.03,
      staggerDirection: 0.7,
    },
  },
};

export const textVariants: Variants = {
  // hidden: { opacity: 0, y: 0 },
  // visible: (i: number) => ({
  //   opacity: 1,
  //   y: 0,
  //   transition: {
  //     delay: i * 0.05,
  //   },
  // }),
  // exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { opacity: { duration: 0 } } },
};

export const cursorVariants: Variants = {
  blinking: {
    opacity: [0, 0, 1, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatDelay: 0,
      ease: "linear",
      times: [0, 0.5, 0.5, 1],
    },
  },
};
