import { motion, AnimatePresence } from "framer-motion";
import {
  textVariants,
  textContainerVariants,
} from "@/constants/animation/animation";

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const AnimatedText = ({ text, className }: AnimatedTextProps) => {
  const letters = Array.from(text || "");

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={text}
        variants={textContainerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={className}
      >
        {letters.map((char, i) =>
          char === " " ? (
            <span className="inline-block">&nbsp;</span>
          ) : (
            <motion.span
              key={char + i}
              variants={textVariants}
              className="inline-block"
            >
              {char}
            </motion.span>
          )
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimatedText;
