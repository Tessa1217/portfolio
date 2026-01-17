export type PhilosophyKey = "curiosity" | "share" | "enhancement";

export interface PhilosophyProps {
  key: PhilosophyKey;
  title: string;
  description: string;
}

export interface PhilosophyCardProps extends PhilosophyProps {
  icon: React.ReactElement;
  gradient: string;
}
