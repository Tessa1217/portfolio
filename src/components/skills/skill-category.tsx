import SkillCard from "@/components/skills/skill-card";
import { fadeSlideUp } from "@/constants/animation/animation";
import { type SkillInformation } from "@/types";
import { motion } from "framer-motion";

interface SkillCategoryProps {
  categoryName: string;
  skills: SkillInformation[];
}

export default function SkillCategory({
  categoryName,
  skills,
}: SkillCategoryProps) {
  return (
    <motion.div
      variants={fadeSlideUp}
      className="bg-gray-800 rounded-2xl p-6 flex flex-col h-full"
    >
      <h3 className="text-2xl uppercase font-header mb-8 text-white">
        {categoryName}
      </h3>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill) => (
          <SkillCard key={`${categoryName}_${skill.id}`} {...skill} />
        ))}
      </div>
    </motion.div>
  );
}
