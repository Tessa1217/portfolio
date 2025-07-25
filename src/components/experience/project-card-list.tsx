import type { ProjectInformation } from "@/types";
import { motion } from "framer-motion";
import { fadeSlideUp } from "@/constants/animation/animation";
import ProjectCard from "@/components/experience/project-card";

interface ProjectCardListProps {
  projects: ProjectInformation[];
}

const ProjectCardList = ({ projects }: ProjectCardListProps) => {
  return (
    <>
      {projects.map((project) => (
        <motion.div key={project.id} variants={fadeSlideUp}>
          <ProjectCard
            id={project.id}
            title={project.title}
            period={project.period}
            description={project.description}
            tags={project.tags}
            projectType={project.projectType as "Company" | "Personal"}
            backgroundImgUrl={project.backgroundImgUrl}
            githubUrl={project.githubUrl}
            notionPageId={project.notionPageId}
          />
        </motion.div>
      ))}
    </>
  );
};

export default ProjectCardList;
