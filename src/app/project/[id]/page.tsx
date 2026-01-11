import { getAllProjectIds, getProjectById } from "@/lib/projects";
import { getNotionPageMarkdown } from "@/lib/notion";
import { notFound } from "next/navigation";
import NotionMarkdown from "@/components/markdown/NotionMarkdown";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

// 빌드 시 모든 프로젝트 페이지 생성 (id 기준)
export async function generateStaticParams() {
  const projects = getAllProjectIds();

  return projects.map((project) => ({
    id: project.id,
  }));
}
// 메타데이터 생성
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} - 유진 Portfolio`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: project.backgroundImgUrl ? [project.backgroundImgUrl] : [],
    },
  };
}

// ISR 설정
export const revalidate = 3600; // 1시간마다 재검증

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project || !project.notionPageId) {
    notFound();
  }

  // Notion 마크다운 가져오기
  const markdown = await getNotionPageMarkdown(project.notionPageId);

  return (
    <div className="min-h-screen bg-light-background dark:bg-dark-background py-20">
      <article className="container mx-auto px-6 max-w-4xl">
        {/* 뒤로가기 버튼 */}
        <Link
          href="/portfolio/#experience"
          className="inline-flex items-center gap-2 text-light-text dark:text-dark-text hover:opacity-70 transition-opacity mb-8"
        >
          ← Back to Experience
        </Link>

        {/* 프로젝트 헤더 */}
        <div className="mb-12">
          {/* 배경 이미지 */}
          {project.backgroundImgUrl && (
            <div className="relative w-full h-64 mb-6 rounded-2xl overflow-hidden">
              <Image
                src={project.backgroundImgUrl}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
          {/* 프로젝트 타입 뱃지 */}
          <span
            className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white mb-4 ${
              project.projectType === "Company"
                ? "bg-indigo-600"
                : "bg-green-600"
            }`}
          >
            {project.projectType}
          </span>

          {/* 제목 */}
          <h1 className="text-4xl font-bold mb-4 text-light-text dark:text-dark-text">
            {project.title}
          </h1>

          {/* 설명 */}
          <p className="text-xl text-light-text-secondary dark:text-dark-text-secondary mb-4">
            {project.description}
          </p>

          {/* 기간 */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
              📅 {project.period}
            </span>
          </div>
          {/* 기술 스택 태그 */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="bg-secondary-active text-xs text-light-text dark:text-dark-text px-3 py-1 font-semibold rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        {/* 구분선 */}
        <hr className="border-gray-200 dark:border-gray-700 mb-12" />
        {/* Notion 마크다운 컨텐츠 */}
        <div
          className="prose prose-lg max-w-none dark:prose-invert
          prose-headings:text-light-text dark:prose-headings:text-dark-text
          prose-p:text-light-text-secondary dark:prose-p:text-dark-text-secondary
          prose-strong:text-light-text dark:prose-strong:text-dark-text
          prose-code:text-light-text dark:prose-code:text-dark-text
          prose-pre:bg-light-card dark:prose-pre:bg-dark-card
          prose-a:text-indigo-600 dark:prose-a:text-indigo-400
        "
        >
          <NotionMarkdown>{markdown}</NotionMarkdown>
        </div>
      </article>
    </div>
  );
}
