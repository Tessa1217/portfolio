import type { ProjectInformation } from "@/types";
import ProjectCard from "@/components/experience/project-card";
import { Animated } from "@/components/animation";

interface ProjectCardListProps {
  projects: ProjectInformation[];
  className?: string;
}

const ProjectCardList = ({ projects, className }: ProjectCardListProps) => {
  return (
    <Animated.List staggerSpeed="normal" viewport="once" className={className}>
      {projects.map((project) => (
        <Animated.ListItem
          key={project.id}
          animation="fadeInUp"
          className="flex justify-center w-full"
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
        </Animated.ListItem>
      ))}
    </Animated.List>
  );
};

export default ProjectCardList;
