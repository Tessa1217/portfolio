import { PERSONAL_PROJECT_EXPERIENCE } from "@/lib/data";
import ProjectCardList from "@/components/experience/project-card-list";
import type { ProjectInformation } from "@/types";
const PersonalProjects = () => {
  const projects = PERSONAL_PROJECT_EXPERIENCE as ProjectInformation[];

  return (
    <div className="grid gap-4 px-4 sm:px-6 lg:px-8">
      <section className="col-span-12">
        <ProjectCardList
          projects={projects}
          className="
    w-full 
    max-w-7xl 
    mx-auto 
    grid 
    gap-6                      
    grid-cols-1 
    sm:grid-cols-2 
    lg:grid-cols-3
    
    /* 같은 행의 카드 높이 통일 */
    items-stretch
    [&>*]:h-full
    
    /* 최소 높이 설정 (선택사항) */
    auto-rows-[minmax(400px,auto)]
  "
        />
      </section>
    </div>
  );
};

export default PersonalProjects;
