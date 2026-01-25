"use client";
import { useState, useMemo } from "react";
import WorkCardList from "@/components/experience/work-card-list";
import ProjectCardList from "@/components/experience/project-card-list";
import { WORK_EXPERIENCE } from "@/lib/data";
import type { ProjectInformation } from "@/types";

type WorkItem = (typeof WORK_EXPERIENCE)[number];

export default function WorkProjects() {
  const [selectedWorkId, setSelectedWorkId] = useState<WorkItem["id"]>(
    WORK_EXPERIENCE[0].id,
  );

  const projects = useMemo(
    () => WORK_EXPERIENCE.find((w) => w.id === selectedWorkId)?.projects ?? [],
    [selectedWorkId],
  ) as ProjectInformation[];

  const handleWorkCardClick = (id: WorkItem["id"]) => setSelectedWorkId(id);

  return (
    <div className="grid grid-cols-12 md:gap-4 justify-center align-center">
      {/* 회사 이력 리스트 사이드 바*/}
      <aside className="col-span-12 md:col-span-3 lg:col-span-2">
        <WorkCardList
          cards={WORK_EXPERIENCE}
          selectedWorkId={selectedWorkId}
          handleWorkCardClick={handleWorkCardClick}
        />
      </aside>
      {/* 회사 진행 프로젝트 */}
      <section className="col-span-12 md:col-span-9 lg:col-span-10">
        <ProjectCardList
          projects={projects}
          className="w-full mx-auto grid gap-6 grid-cols-[repeat(auto-fit,minmax(300px,1fr))]"
        />
      </section>
    </div>
  );
}
