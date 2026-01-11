import { Animated } from "@/components/animation";

export default function SectionTitle({ title }: { title: string }) {
  return (
    <Animated.Box
      animation="fadeInUp"
      as="h3"
      className="text-4xl font-bold mb-10 font-header text-light-text dark:text-dark-text"
    >
      {title}
    </Animated.Box>
  );
}
