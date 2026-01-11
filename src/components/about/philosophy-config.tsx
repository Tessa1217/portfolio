import type { PhilosophyKey } from "@/types/philosophy";

import { FaLightbulb, FaUsers, FaRocket } from "react-icons/fa";

export const ICON_MAP: Record<PhilosophyKey, React.ReactElement> = {
  curiosity: <FaLightbulb size={30} className="text-white" />,
  share: <FaUsers size={30} className="text-white" />,
  enhancement: <FaRocket size={30} className="text-white" />,
} as const;

export const GRADIENT_MAP: Record<PhilosophyKey, string> = {
  curiosity: "bg-gradient-to-br from-primary to-primary-hover",
  share: "bg-gradient-to-br from-secondary to-secondary-hover",
  enhancement: "bg-gradient-to-br from-accent-green to-success",
} as const;
