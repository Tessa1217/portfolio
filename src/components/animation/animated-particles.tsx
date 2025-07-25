import { motion } from "framer-motion";
import { getAnimatedParticleStyles } from "@/components/animation/animated-particles-styles";

interface AnimatedParticleProps {
  count: number; // particle count
  minSize: number;
  maxSize: number;
}

const AnimatedParticles = ({
  count,
  minSize,
  maxSize,
}: AnimatedParticleProps) => {
  const random = (min: number, max: number) =>
    Math.random() * (max - min) + min;

  const particles = Array.from({ length: count }).map((_, i) => ({
    id: i,
    x: random(0, window.innerWidth),
    y: random(0, window.innerHeight),
    style: getAnimatedParticleStyles({ minSize, maxSize }),
    delay: random(0, 10),
    duration: random(1.5, 5),
  }));

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          className={`absolute ${particle.style.classes}`}
          style={particle.style.styles}
          initial={{
            x: random(0, window.innerWidth),
            y: random(0, window.innerHeight),
            opacity: 0.5,
          }}
          animate={{
            x: [null, Math.random() * window.innerHeight],
            y: [null, Math.random() * window.innerWidth],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 10 + Math.random() * 5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedParticles;
