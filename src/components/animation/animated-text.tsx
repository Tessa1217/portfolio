import { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { cursorVariants } from "@/constants/animation/animation";

interface AnimatedTextProps {
  texts: string[];
  className?: string;
  speed?: number;
  delay?: number;
  showCursor?: boolean;
}

const AnimatedText = ({
  texts,
  className,
  speed = 200,
  delay = 1,
  showCursor = true,
}: AnimatedTextProps) => {
  const textIndex = useMotionValue(0);
  const baseText = useTransform(textIndex, (latest) => texts[latest] || "");
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.get().slice(0, latest)
  );
  const updatedThisRound = useMotionValue(true);

  useEffect(() => {
    animate(count, speed, {
      type: "tween",
      delay,
      duration: 3,
      ease: "easeIn",
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 1,
      onUpdate(latest) {
        if (updatedThisRound.get() === true && latest > 0) {
          updatedThisRound.set(false);
        } else if (updatedThisRound.get() === false && latest === 0) {
          if (textIndex.get() === texts.length - 1) {
            textIndex.set(0);
          } else {
            textIndex.set(textIndex.get() + 1);
          }
          updatedThisRound.set(true);
        }
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [texts, speed, delay]);

  return (
    <div className={className}>
      <motion.span>{displayText}</motion.span>
      {showCursor && (
        <motion.span
          variants={cursorVariants}
          animate="blinking"
          className="inline-block"
        >
          |
        </motion.span>
      )}
    </div>
  );
};

export default AnimatedText;
