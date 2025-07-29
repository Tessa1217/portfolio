import { PERSONAL_PROJECT_EXPERIENCE } from "@/lib/data";
import ProjectCardList from "@/components/experience/project-card-list";
import type { ProjectInformation } from "@/types";
const PersonalProjects = () => {
  const projects = PERSONAL_PROJECT_EXPERIENCE as ProjectInformation[];
  return (
    <div className="grid gap-4">
      <section className="col-span-12">
        <ProjectCardList
          projects={projects}
          className="w-full max-w-screen-xl mx-auto grid gap-6 grid-cols-[repeat(auto-fit,minmax(300px,1fr))]"
        />
      </section>
    </div>
  );
};

export default PersonalProjects;
