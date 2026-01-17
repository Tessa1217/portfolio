"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { getAnimatedParticleStyles } from "@/components/animation/animated-particles-styles";

interface AnimatedParticleProps {
  count: number; // particle count
  minSize: number;
  maxSize: number;
}

export default function AnimatedParticles({
  count,
  minSize,
  maxSize,
}: AnimatedParticleProps) {
  const [particles] = useState(() => {
    if (typeof window === "undefined") return [];

    const random = (min: number, max: number) =>
      Math.random() * (max - min) + min;

    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: random(0, window.innerWidth),
      y: random(0, window.innerHeight),
      animateX: [null, Math.random() * window.innerHeight],
      animateY: [null, Math.random() * window.innerWidth],
      style: getAnimatedParticleStyles({ minSize, maxSize }),
      delay: random(0, 10),
      duration: 10 + Math.random() * 5,
    }));
  });

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {particles.map((particle, idx) => (
        <motion.div
          key={`particle_${idx}`}
          className={`absolute ${particle.style.classes}`}
          style={particle.style.styles}
          initial={{
            x: particle.x,
            y: particle.y,
            opacity: 0.5,
          }}
          animate={{
            x: particle.animateX,
            y: particle.animateY,
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
