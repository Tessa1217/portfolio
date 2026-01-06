import SkillCard from "@/components/skills/skill-card";
import { type SkillInformation } from "@/types";
import { AnimatedCard, AnimatedElement } from "@/components/animation";

interface SkillCategoryProps {
  categoryName: string;
  skills: SkillInformation[];
}

export default function SkillCategory({
  categoryName,
  skills,
}: SkillCategoryProps) {
  return (
    <AnimatedElement listChildren={true} animation="fadeInUp">
      <AnimatedCard
        hoverEffect="scale"
        className="h-full bg-white/10 backdrop-blur-sm p-10 rounded-lg shadow-xl max-w-md w-full text-center"
      >
        <h3 className="text-2xl uppercase font-header mb-8 text-white">
          {categoryName}
        </h3>
        <div className="flex flex-wrap gap-4">
          {skills.map((skill) => (
            <SkillCard key={`${categoryName}_${skill.id}`} {...skill} />
          ))}
        </div>
      </AnimatedCard>
    </AnimatedElement>
  );
}
