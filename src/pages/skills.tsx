import { SKILL_SET } from "@/lib/data";
import { AnimatedSection, AnimatedList } from "@/components/animation";
import SectionTitle from "@/components/section-title";
import SkillCategory from "@/components/skills/skill-category";

export default function Skills() {
  return (
    <AnimatedSection
      id="skills"
      preset="hero"
      as="section"
      className="min-h-[100svh] flex items-center justify-center text-white text-center px-4 w-full p-10 relative"
    >
      <div className="container mx-auto">
        <SectionTitle title="Skill Set" />
        <AnimatedList
          staggerSpeed="normal"
          viewport="always"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {Object.entries(SKILL_SET).map(([categoryName, skills]) => (
            <SkillCategory
              key={`skill_box_${categoryName}`}
              categoryName={categoryName}
              skills={skills}
            />
          ))}
        </AnimatedList>
      </div>
    </AnimatedSection>
  );
}
