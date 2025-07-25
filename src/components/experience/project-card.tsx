import { motion } from "framer-motion";
import { type ProjectInformation } from "@/types";
import { FaGithub } from "react-icons/fa";
import { RxNotionLogo } from "react-icons/rx";

const hoverEffect = {
  hover: { scale: 1.02, boxShadow: "0 8px 24px rgba(0,0,0,0.2)" },
};

export default function ProjectCard({
  title,
  description,
  tags,
  projectType,
  backgroundImgUrl,
  githubUrl,
  notionPageId,
}: ProjectInformation) {
  return (
    <motion.div
      variants={hoverEffect}
      whileHover="hover"
      className="relative min-h-[400px] bg-gray-800 rounded-2xl overflow-hidden cursor-pointer transition-transform duration-200"
    >
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-bottom opacity-20"
        style={{ backgroundImage: `url(${backgroundImgUrl})` }}
      />
      <div className="relative p-6 flex flex-col h-full">
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
        <h3 className="mt-2 text-xl font-semibold text-white leading-snug">
          {title}
        </h3>
        <p className="mt-2 flex-1 text-gray-300 text-sm leading-relaxed">
          {description}
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-gray-700 text-xs text-gray-200 px-2 py-1 rounded-full whitespace-nowrap"
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
              <FaGithub size={20} />
            </a>
          )}
          {notionPageId && (
            <a
              href={notionPageId}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-white transition-colors"
            >
              <RxNotionLogo size={20} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
