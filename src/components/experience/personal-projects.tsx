import { motion } from "framer-motion";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";
import { staggerContainer } from "@/constants/animation/animation";
import { PERSONAL_PROJECT_EXPERIENCE } from "@/lib/data";
import ProjectCardList from "@/components/experience/project-card-list";
import type { ProjectInformation } from "@/types";
const PersonalProjects = () => {
  const { ref, controls } = useInViewAnimation();
  const projects = PERSONAL_PROJECT_EXPERIENCE as ProjectInformation[];
  return (
    <div className="grid gap-4">
      <section className="col-span-12">
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(350px,1fr))] px-6"
        >
          <ProjectCardList projects={projects} />
        </motion.div>
      </section>
    </div>
  );
};

export default PersonalProjects;
