import { type ProjectInformation } from "@/types";
import { FaGithub } from "react-icons/fa";
import { RxNotionLogo } from "react-icons/rx";
import { lazy, useState } from "react";
import ProjectModal from "@/components/project-modal";
import { AnimatedCard } from "@/components/animation";
const MarkdownContent = lazy(() => import("@/components/markdown"));

export default function ProjectCard({
  title,
  description,
  tags,
  projectType,
  backgroundImgUrl,
  githubUrl,
  notionPageId,
}: ProjectInformation) {
  const [showNotionModal, setShowNotionModal] = useState(false);

  return (
    <AnimatedCard
      hoverEffect="glow"
      className="relative h-full bg-gray-900 rounded-2xl overflow-hidden transition-transform duration-200"
    >
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-bottom opacity-20"
        style={{ backgroundImage: `url(${backgroundImgUrl})` }}
      />

      {/* Content Container - Flexbox로 내부 레이아웃 제어 */}
      <div className="relative h-full p-6 flex flex-col">
        {/* Type Badge - 고정 영역 */}
        <div className="flex-shrink-0">
          <span
            className={
              `inline-block px-3 py-1 rounded-full text-xs font-medium text-white ` +
              (projectType === "Company" ? "bg-indigo-600" : "bg-green-600")
            }
          >
            {projectType}
          </span>
        </div>

        {/* Title - 고정 영역 */}
        <h3 className="mt-4 flex-shrink-0 text-xl font-semibold text-white leading-snug">
          {title}
        </h3>

        {/* Description - 가변 영역 (남은 공간 차지) */}
        <p className="mt-4 flex-1 text-gray-300 text-sm font-semibold leading-relaxed line-clamp-4 sm:line-clamp-6">
          {description}
        </p>

        {/* Tags - 고정 영역 */}
        <div className="mt-4 flex-shrink-0 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-gray-900 text-xs text-gray-200 px-2 py-1 font-semibold rounded-full whitespace-nowrap"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions - 고정 영역 */}
        <div className="mt-4 flex-shrink-0 flex items-center space-x-4">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-white transition-colors"
              aria-label="GitHub 페이지 열기"
            >
              <FaGithub size={30} />
            </a>
          )}
          {notionPageId && (
            <button
              className="text-gray-200 hover:text-white transition-colors"
              aria-label="Notion 페이지 열기"
              onClick={() => setShowNotionModal(true)}
            >
              <RxNotionLogo size={30} />
            </button>
          )}
        </div>
      </div>

      {/* Modal */}
      {notionPageId && showNotionModal && (
        <ProjectModal onClose={() => setShowNotionModal(false)}>
          <MarkdownContent pageId={notionPageId} />
        </ProjectModal>
      )}
    </AnimatedCard>
  );
}
