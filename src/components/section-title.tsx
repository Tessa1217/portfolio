import { motion } from "framer-motion";
import { fadeSlideUp } from "../constants/animation/animation";
import { useInViewAnimation } from "../hooks/useInViewAnimation";
export default function SectionTitle({ title }: { title: string }) {
  const { ref, controls } = useInViewAnimation();
  return (
    <motion.h3
      ref={ref}
      animate={controls}
      variants={fadeSlideUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      className="text-4xl font-bold mb-10 font-header"
    >
      {title}
    </motion.h3>
  );
}
