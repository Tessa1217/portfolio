import Image from "next/image";
import { type ProjectInformation } from "@/types";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { SiNotion } from "@react-icons/all-files/si/SiNotion";
import { Animated } from "@/components/animation";
import ProjectLink from "@/components/experience/project-link";

export default function ProjectCard({
  id,
  title,
  description,
  tags,
  projectType,
  backgroundImgUrl,
  githubUrl,
  notionPageId,
}: ProjectInformation) {
  return (
    <Animated.Card
      hoverEffect="glow"
      className="relative w-full max-w-100 h-full max-h-100 bg-light-card dark:bg-dark-card rounded-2xl overflow-hidden transition-transform duration-200 cursor-pointer flex items-center space-x-3 px-4 py-2 z-20"
    >
      {/* Background Image Overlay */}
      <Image
        src={backgroundImgUrl}
        alt={title}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="absolute inset-0 bg-cover bg-bottom opacity-20"
      />
      {/* Content Container - Flexbox로 내부 레이아웃 제어 */}
      <div className="relative h-full p-6 flex flex-col">
        {/* Type Badge - 고정 영역 */}
        <div className="shrink-0">
          <span
            className={
              `inline-block px-3 py-1 rounded-full text-xs font-semibold text-white ` +
              (projectType === "Company" ? "bg-secondary" : "bg-primary")
            }
          >
            {projectType}
          </span>
        </div>

        {/* Title - 고정 영역 */}
        <h3 className="mt-4 shrink-0 text-xl font-semibold text-light-text dark:text-dark-text leading-snug">
          {title}
        </h3>

        {/* Description - 가변 영역 (남은 공간 차지) */}
        <p className="mt-4 flex-1 text-light-text-secondary dark:text-dark-text-secondary text-sm font-semibold leading-relaxed line-clamp-4 sm:line-clamp-6">
          {description}
        </p>

        {/* Tags - 고정 영역 */}
        <div className="mt-4 shrink-0 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-light-background-secondary dark:bg-dark-background-secondary text-xs text-light-text dark:text-dark-text px-2 py-1 font-semibold rounded-full whitespace-nowrap"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions - 고정 영역 */}
        <div className="mt-4 shrink-0 flex items-center space-x-4">
          {githubUrl && (
            <ProjectLink
              href={githubUrl}
              linkType="Github"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light-text dark:text-dark-text hover:text-dark-text-muted dark:hover:text-light-text-muted transition-colors"
              aria-label="GitHub 페이지 열기"
              icon={<FaGithub size={30} />}
            />
          )}
          {notionPageId && (
            <ProjectLink
              href={`/project/${id}`}
              linkType="Notion"
              className="text-light-text dark:text-dark-text hover:text-dark-text-muted dark:hover:text-light-text-muted transition-colors"
              icon={<SiNotion size={30} />}
            />
          )}
        </div>
      </div>
    </Animated.Card>
  );
}
