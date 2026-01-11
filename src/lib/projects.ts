import { WORK_EXPERIENCE, PERSONAL_PROJECT_EXPERIENCE } from "@/lib/data";
import { ProjectInformation } from "@/types";

/**
 * 모든 프로젝트 정보 조회
 * @returns ProjectInformation[] 프로젝트 정보 배열
 */
export function getAllProjects(): ProjectInformation[] {
  const workProjects = getWorkProjects();
  const personalProjects = getPersonalProjects();
  return [...workProjects, ...personalProjects];
}

/**
 * 업무 프로젝트 정보 조회
 * @returns ProjectInformation[] 업무 프로젝트 정보 배열
 */
export function getWorkProjects(): ProjectInformation[] {
  return WORK_EXPERIENCE.flatMap((work) =>
    work.projects.map((project) => ({
      ...project,
      projectType: "Company" as const,
    }))
  );
}

/**
 * 개인 프로젝트 정보 조회
 * @returns ProjectInformation[] 개인 프로젝트 정보 배열
 */
export function getPersonalProjects(): ProjectInformation[] {
  return PERSONAL_PROJECT_EXPERIENCE.map((project) => ({
    ...project,
    projectType: "Personal" as const,
  }));
}

// notionPageId가 있는 프로젝트만 추출
export function getProjectsWithNotion() {
  return getAllProjects().filter((project) => project.notionPageId);
}

// generateStaticParams용 - 프로젝트 id 목록
export function getAllProjectIds() {
  return getProjectsWithNotion().map((project) => ({
    id: project.id.toString(),
  }));
}

// 프로젝트 id로 찾기
export function getProjectById(id: string): ProjectInformation | undefined {
  return getAllProjects().find((project) => project.id === id);
}
