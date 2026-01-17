import Image from "next/image";
import { type SkillInformation } from "@/types";

export default function SkillCard({
  skillName,
  skillIconUrl,
}: SkillInformation) {
  return (
    <div className="flex items-center gap-2 w-full md:w-auto mb-3">
      <Image
        src={skillIconUrl}
        alt={skillName}
        width={100}
        height={100}
        className="w-10 h-10 md:w-12 md:h-12"
      />
      <span className="text-lg md:text-xl capitalize font-semibold text-light-text-secondary dark:text-dark-text-secondary">
        {skillName}
      </span>
    </div>
  );
}
