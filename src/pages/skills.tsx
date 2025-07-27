import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/constants/animation/animation";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";
import { SKILL_SET } from "@/lib/data";
import AnimatedSection from "@/components/animation/animated-section";
import SectionTitle from "@/components/section-title";
import SkillCategory from "@/components/skills/skill-category";

export default function Skills() {
  const { ref, controls } = useInViewAnimation();
  return (
    <AnimatedSection
      id="skills"
      variants={fadeInUp}
      as="section"
      className="h-full flex items-center justify-center text-white text-center px-4 w-screen p-10 relative"
    >
      <div className="container mx-auto">
        <SectionTitle title="Skill Set" />
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {Object.entries(SKILL_SET).map(([categoryName, skills]) => (
            <SkillCategory
              key={`skill_box_${categoryName}`}
              categoryName={categoryName}
              skills={skills}
            />
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
