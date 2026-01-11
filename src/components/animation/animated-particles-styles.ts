"use client";
const shapes = ["circle", "square", "triangle"] as const;
const colors = ["orange", "sky", "purple", "green", "pink"] as const;
export interface AnimatedParticleProps {
  minSize: number;
  maxSize: number;
}

export function getAnimatedParticleStyles({
  minSize,
  maxSize,
}: AnimatedParticleProps) {
  // particle size
  const size = Math.random() * (maxSize - minSize) + minSize;

  const colorMap = {
    orange: { class: "bg-orange", code: "oklch(0.7682 0.1422 40.26)" },
    sky: { class: "bg-sky-blue", code: "oklch(0.8548 0.095 224.65)" },
    purple: { class: "bg-light-purple", code: "oklch(0.7723 0.1204 284.28)" },
    green: { class: "bg-green", code: "oklch(0.889 0.1786 167.29)" },
    pink: { class: "bg-pink", code: "oklch(0.8333 0.1498 324.86)" },
  };

  // particle shape map
  const shapeMap = {
    circle: "opacity-20 rounded-full",
    square: "opacity-20 ",
    triangle: "opacity-20 bg-transparent",
  };

  // index for color and shape
  const colorKey = colors[Math.floor(Math.random() * colors.length)];
  const shapeKey = shapes[Math.floor(Math.random() * shapes.length)];

  const { class: colorClass, code: colorCode } = colorMap[colorKey];
  const shapeClass = shapeMap[shapeKey];

  // triangle styles require borders
  const shapeStyles =
    shapeKey === "triangle"
      ? {
          width: 0,
          height: 0,
          borderLeft: `${size / 2}px solid transparent`,
          borderRight: `${size / 2}px solid transparent`,
          borderBottom: `${size}px solid ${colorCode}`,
        }
      : { width: `${size}px`, height: `${size}px` };

  const classes =
    shapeKey === "triangle" ? shapeClass : `${colorClass} ${shapeClass}`;

  return {
    classes,
    styles: shapeStyles,
  };
}
