import type { ProjectInformation } from "@/types";
import ProjectCard from "@/components/experience/project-card";
import { AnimatedList, AnimatedElement } from "@/components/animation";

interface ProjectCardListProps {
  projects: ProjectInformation[];
  className?: string;
}

const ProjectCardList = ({ projects, className }: ProjectCardListProps) => {
  return (
    <AnimatedList staggerSpeed="normal" viewport="once" className={className}>
      {projects.map((project) => (
        <AnimatedElement
          key={project.id}
          listChildren={true}
          animation="fadeInUp"
        >
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
        </AnimatedElement>
      ))}
    </AnimatedList>
  );
};

export default ProjectCardList;
