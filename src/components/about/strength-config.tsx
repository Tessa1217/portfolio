import type { StrengthKey } from "@/types/strength";
import { FaLayerGroup, FaBook, FaCube, FaCode } from "react-icons/fa";
import { SiTypescript, SiReact, SiVuedotjs } from "react-icons/si";
import { GiCupcake } from "react-icons/gi";

export const ICON_MAP: Record<StrengthKey, React.ReactElement> = {
  architecture: <FaLayerGroup size={30} className="text-white" />,
  culture: <FaBook size={30} className="text-white" />,
  platform: <FaCube size={30} className="text-white" />,
} as const;

export const STRENGTH_COLOR_MAP: Record<StrengthKey, string> = {
  architecture: "primary",
  culture: "secondary",
  platform: "accent-green",
};

interface StrengthColorProps {
  bg: string;
  text: string;
  gradient: string;
  bullet: string;
}

export const COLOR_CLASSES: Record<string, StrengthColorProps> = {
  primary: {
    bg: "bg-primary/10",
    text: "text-primary",
    gradient: "bg-gradient-to-br from-primary to-primary-hover",
    bullet: "bg-primary",
  },
  secondary: {
    bg: "bg-secondary/10",
    text: "text-secondary",
    gradient: "bg-gradient-to-br from-secondary to-secondary-hover",
    bullet: "bg-secondary",
  },
  "accent-green": {
    bg: "bg-accent-green/10",
    text: "text-accent-green",
    gradient: "bg-gradient-to-br from-accent-green to-tertiary-hover",
    bullet: "bg-accent-green",
  },
} as const;

export const TECH_ICON_MAP: Record<string, React.ReactElement> = {
  "Vue.js 3": <SiVuedotjs />,
  TypeScript: <SiTypescript />,
  Composables: <FaCode />,
  "React 19": <SiReact />,
  "Vanilla Extract": <GiCupcake />,
  Turborepo: <FaCode />,
} as const;
