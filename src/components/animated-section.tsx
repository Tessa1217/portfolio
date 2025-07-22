import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useInView } from "react-intersection-observer";

export const AnimatedSection = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className: string;
}) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.section>
  );
};
