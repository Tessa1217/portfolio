import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";
import { staggerContainer } from "@/constants/animation/animation";
import WorkCardList from "@/components/experience/work-card-list";
import ProjectCardList from "@/components/experience/project-card-list";
import { WORK_EXPERIENCE } from "@/lib/data";
import type { ProjectInformation } from "@/types";

type WorkItem = (typeof WORK_EXPERIENCE)[number];

export default function WorkProjects() {
  const { ref, controls } = useInViewAnimation();
  const [selectedWorkId, setSelectedWorkId] = useState<WorkItem["id"]>(
    WORK_EXPERIENCE[0].id
  );

  const projects = useMemo(
    () => WORK_EXPERIENCE.find((w) => w.id === selectedWorkId)?.projects ?? [],
    [selectedWorkId]
  ) as ProjectInformation[];

  const handleWorkCardClick = (id: WorkItem["id"]) => setSelectedWorkId(id);

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-12 md:gap-4 justify-center align-center">
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
          <ProjectCardList projects={projects} />
        </motion.div>
      </section>
    </div>
  );
}
