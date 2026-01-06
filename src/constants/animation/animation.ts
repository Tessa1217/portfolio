import type { Variants } from "framer-motion";

export const transitions = {
  smooth: { duration: 0.6, ease: "easeOut" },
  fast: { duration: 0.3, ease: "easeOut" },
  slow: { duration: 1, ease: "easeInOut" },
  bounce: { duration: 0.6, ease: "easeOut", type: "spring", stiffness: 100 },
} as const;

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.smooth,
  },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.smooth,
  },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: transitions.smooth,
  },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: transitions.smooth,
  },
};

export const fadeSlideUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.smooth,
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: transitions.bounce,
  },
};

export const slideInFromBottom: Variants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.smooth,
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

export const staggerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const staggerSlow: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.5,
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

export const hoverScale: Variants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: transitions.fast,
  },
};

export const hoverLift: Variants = {
  initial: { y: 0, boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" },
  hover: {
    y: -8,
    boxShadow: "0 20px 25px rgba(0, 0, 0, 0.15)",
    transition: transitions.fast,
  },
};

export const hoverGlow: Variants = {
  initial: { boxShadow: "0 0 0 rgba(60, 227, 189, 0)" },
  hover: {
    boxShadow: "0 0 20px rgba(60, 227, 189, 0.3)",
    transition: transitions.fast,
  },
};

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

export const animationPresets = {
  card: {
    variants: fadeSlideUp,
    transition: transitions.smooth,
  },
  list: {
    variants: staggerContainer,
    transition: transitions.smooth,
  },
  text: {
    variants: textContainerVariants,
    transition: transitions.smooth,
  },
  hero: {
    variants: fadeInUp,
    transition: transitions.slow,
  },
  skill: {
    variants: scaleIn,
    transition: transitions.bounce,
  },
} as const;

// Viewport options
export const viewportOptions = {
  once: { once: true, amount: 0.3 },
  always: { once: false, amount: 0.3 },
  aggressive: { once: true, amount: 0.1 },
  conservative: { once: true, amount: 0.5 },
} as const;
