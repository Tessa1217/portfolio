import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";
import { staggerContainer, fadeSlideUp } from "@/constants/animation/animation";
import WorkCardList from "@/components/experience/work-card-list";
import ProjectCard from "@/components/experience/project-card";
import { WORK_EXPERIENCE } from "@/lib/data";

type WorkItem = (typeof WORK_EXPERIENCE)[number];

export default function WorkProjects() {
  const { ref, controls } = useInViewAnimation();
  const [selectedWorkId, setSelectedWorkId] = useState<WorkItem["id"]>(
    WORK_EXPERIENCE[0].id
  );

  const projects = useMemo(
    () => WORK_EXPERIENCE.find((w) => w.id === selectedWorkId)?.projects ?? [],
    [selectedWorkId]
  );

  const handleWorkCardClick = (id: WorkItem["id"]) => setSelectedWorkId(id);

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-12 md:gap-4">
      {/* 회사 이력 리스트 사이드 바*/}
      <aside className="col-span-12 md:col-span-3 lg:col-span-2">
        <WorkCardList
          cards={WORK_EXPERIENCE}
          selectedWorkId={selectedWorkId}
          handleWorkCardClick={handleWorkCardClick}
        />
      </aside>
      <section className="col-span-12 md:col-span-9 lg:col-span-10">
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(350px,1fr))] px-6"
        >
          {projects.map((project) => (
            <motion.div key={project.projectId} variants={fadeSlideUp}>
              <ProjectCard
                projectId={project.projectId}
                title={project.title}
                description={project.description}
                tags={project.tags}
                projectType={project.projectType as "Company" | "Personal"}
                backgroundImgUrl={project.backgroundImgUrl}
                githubUrl={project.githubUrl}
                notionUrl={project.notionUrl}
                onClick={() => console.log("hii")}
              />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
