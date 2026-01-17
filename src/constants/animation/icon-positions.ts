// constants/icon-positions.ts
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

// 빌드 타임에 한 번만 계산 (서버/클라이언트 동일)
export const ICON_POSITIONS = SKILL_LOGOS.map((logo, i) => {
  const angle = (i / SKILL_LOGOS.length) * (2 * Math.PI);
  const x =
    ORBIT_RADIUS -
    ICON_SIZE / 2 +
    (ORBIT_RADIUS - ICON_SIZE / 2) * Math.cos(angle);
  const y =
    ORBIT_RADIUS -
    ICON_SIZE / 2 +
    (ORBIT_RADIUS - ICON_SIZE / 2) * Math.sin(angle);
  return { logo, x, y };
});

export { ORBIT_RADIUS, ICON_SIZE };
