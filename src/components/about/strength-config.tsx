import type { StrengthKey } from "@/types/strength";
import { FaLayerGroup } from "@react-icons/all-files/fa/FaLayerGroup";
import { FaBook } from "@react-icons/all-files/fa/FaBook";
import { FaCube } from "@react-icons/all-files/fa/FaCube";
import { FaCode } from "@react-icons/all-files/fa/FaCode";
import { SiTypescript } from "@react-icons/all-files/si/SiTypescript";
import { SiReact } from "@react-icons/all-files/si/SiReact";
import { SiVueDotJs } from "@react-icons/all-files/si/SiVueDotJs";
import { GiCupcake } from "@react-icons/all-files/gi/GiCupcake";

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
  "Vue.js 3": <SiVueDotJs />,
  TypeScript: <SiTypescript />,
  Composables: <FaCode />,
  "React 19": <SiReact />,
  "Vanilla Extract": <GiCupcake />,
  Turborepo: <FaCode />,
} as const;
