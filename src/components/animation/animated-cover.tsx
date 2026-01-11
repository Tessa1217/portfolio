import type { Variants } from "framer-motion";
import { motion } from "framer-motion";
import HeroIllustration from "@/components/hero-illustration";

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
  transition: {
    repeat: Infinity,
    duration: 20,
    ease: "linear",
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

const SKILL_LOGOS = [
  "React.png",
  "TypeScript.png",
  "JavaScript.png",
  "Vite.js.png",
  "Tailwind CSS.png",
  "Git.png",
];

const ORBIT_RADIUS = 160;
const ICON_SIZE = 48;

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
        {/* Central Illustration */}
        <div className="w-64 h-64">
          <HeroIllustration />
        </div>

        {/* Orbiting Icons */}
        <motion.div
          className="absolute w-full h-full"
          animate={orbitAnimation}
          transition={orbitTransition}
        >
          {SKILL_LOGOS.map((logo, i) => {
            const angle = (i / SKILL_LOGOS.length) * (2 * Math.PI);
            const x =
              ORBIT_RADIUS -
              ICON_SIZE / 2 +
              (ORBIT_RADIUS - ICON_SIZE / 2) * Math.cos(angle);
            const y =
              ORBIT_RADIUS -
              ICON_SIZE / 2 +
              (ORBIT_RADIUS - ICON_SIZE / 2) * Math.sin(angle);

            return (
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
                <motion.img
                  src={`/logo/${logo}`}
                  alt={logo.replace(".png", "")}
                  className="w-full h-full object-contain"
                  animate={{ rotate: -360 }}
                  transition={{
                    repeat: Infinity,
                    duration: 20,
                    ease: "linear",
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AnimatedCover;
