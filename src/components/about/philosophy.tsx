import { Animated } from "@/components/animation";
import { PHILOSOPHY_ABOUT } from "@/lib/data";
import { ICON_MAP, GRADIENT_MAP } from "@/components/about/philosophy-config";
import type { PhilosophyProps, PhilosophyCardProps } from "@/types/philosophy";

export function PhilosophyCard({
  title,
  description,
  icon,
  gradient,
}: PhilosophyCardProps) {
  return (
    <Animated.Card
      hoverEffect="lift"
      className="p-6 bg-light-card dark:bg-dark-card rounded-2xl border border-light-border dark:border-dark-border"
    >
      <div className="flex flex-row align-center items-center">
        <div
          className={`w-8 h-8 p-2 rounded-xl ${gradient} flex items-center justify-center mb-4`}
        >
          {icon}
        </div>
        <h3 className="mx-2 text-xl font-bold text-light-text dark:text-dark-text mb-3">
          {title}
        </h3>
      </div>
      <p className="text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
        {description}
      </p>
    </Animated.Card>
  );
}

export default function Philosophy() {
  const philosophies = PHILOSOPHY_ABOUT as PhilosophyProps[];
  return (
    <>
      <Animated.Box animation="fadeInUp" className="mb-8">
        <h3 className="text-3xl font-bold text-light-text dark:text-dark-text mb-12 text-center">
          Philosophies
        </h3>
      </Animated.Box>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        {philosophies.map((philosophy) => (
          <PhilosophyCard
            key={philosophy.key}
            title={philosophy.title}
            description={philosophy.description}
            icon={ICON_MAP[philosophy.key]}
            gradient={GRADIENT_MAP[philosophy.key]}
          />
        ))}
      </div>
    </>
  );
}
