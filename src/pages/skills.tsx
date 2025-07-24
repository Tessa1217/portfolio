import { motion } from "framer-motion";
import {
  staggerContainer,
  fadeSlideUp,
  fadeInUp,
} from "@/constants/animation/animation";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";
import { SKILL_SET } from "@/lib/data";
import AnimatedSection from "@/components/animation/animated-section";
import SectionTitle from "@/components/section-title";

export default function Skills() {
  const { ref, controls } = useInViewAnimation();
  return (
    <AnimatedSection
      id="skills"
      variants={fadeInUp}
      as="section"
      className="flex items-center justify-center text-white text-center px-4 w-screen p-10 relative"
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
          {Object.entries(SKILL_SET).map(([category, skills]) => (
            <motion.div
              key={category}
              variants={fadeSlideUp}
              className="bg-gray-800 rounded-2xl p-6 flex flex-col h-full"
            >
              <h3 className="text-2xl uppercase font-header mb-8 text-white">
                {category}
              </h3>
              <div className="flex flex-wrap gap-4">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 w-full md:w-auto mb-3"
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-10 h-10 md:w-12 md:h-12"
                    />
                    <span className="text-lg md:text-xl capitalize font-semibold text-white">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
