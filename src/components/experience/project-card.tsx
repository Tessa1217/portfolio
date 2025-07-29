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
      className="relative min-h-[400px] bg-gray-900 rounded-2xl overflow-hidden transition-transform duration-200 sm:max-w-sm pointer-none"
    >
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-bottom opacity-20"
        style={{ backgroundImage: `url(${backgroundImgUrl})` }}
      />
      <div className="relative min-h-[400px] p-6 flex flex-col h-full justify-between">
        {/* Type Badge */}
        <span
          className={
            `self-start px-3 py-1 rounded-full text-xs font-medium text-white ` +
            (projectType === "Company" ? "bg-indigo-600" : "bg-green-600")
          }
        >
          {projectType}
        </span>

        {/* Title & Description */}
        <h3 className="mt-4 text-xl font-semibold text-white leading-snug">
          {title}
        </h3>
        <p className="mt-4 flex-1 text-gray-300 text-sm font-semibold leading-relaxed">
          {description}
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-gray-900 text-xs text-gray-200 px-2 py-1 font-semibold rounded-full whitespace-nowrap"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-4 flex items-center space-x-4">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-white transition-colors"
            >
              <FaGithub size={30} />
            </a>
          )}
          {notionPageId && (
            <button
              className="text-gray-200 hover:text-white transition-colors"
              onClick={() => setShowNotionModal(true)}
            >
              <RxNotionLogo size={30} />
            </button>
          )}
          {notionPageId && showNotionModal && (
            <ProjectModal onClose={() => setShowNotionModal(false)}>
              <MarkdownContent pageId={notionPageId} />
            </ProjectModal>
          )}
        </div>
      </div>
    </AnimatedCard>
  );
}
