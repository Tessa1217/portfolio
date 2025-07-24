import React from "react";
import { motion } from "framer-motion";

interface AnimatedEffectProps {
  count?: number; // 별 갯수
  minSize?: number; // 별 최소 크기 (px)
  maxSize?: number; // 별 최대 크기 (px)
}

const AnimatedEffect: React.FC<AnimatedEffectProps> = ({
  count = 100,
  minSize = 1,
  maxSize = 3,
}) => {
  // 랜덤값 생성
  const random = (min: number, max: number) =>
    Math.random() * (max - min) + min;

  // 별 데이터 배열
  const stars = Array.from({ length: count }).map((_, i) => ({
    id: i,
    x: random(0, window.innerWidth),
    y: random(0, window.innerHeight),
    size: random(minSize, maxSize),
    delay: random(0, 10),
    duration: random(1.5, 5),
  }));

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            delay: star.delay,
            duration: star.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bg-white rounded-full"
          style={{
            top: star.y,
            left: star.x,
            width: star.size,
            height: star.size,
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedEffect;
