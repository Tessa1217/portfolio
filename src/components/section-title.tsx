import { AnimatedElement } from "@/components/animation";

export default function SectionTitle({ title }: { title: string }) {
  return (
    <AnimatedElement
      animation="fadeInUp"
      as="h3"
      className="text-4xl font-bold mb-10 font-header"
    >
      {title}
    </AnimatedElement>
  );
}
