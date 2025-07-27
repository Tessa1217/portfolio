import { type SkillInformation } from "@/types";

export default function SkillCard({
  skillName,
  skillIconUrl,
}: SkillInformation) {
  return (
    <div className="flex items-center gap-2 w-full md:w-auto mb-3">
      <img
        src={skillIconUrl}
        alt={skillName}
        className="w-10 h-10 md:w-12 md:h-12"
      />
      <span className="text-lg md:text-xl capitalize font-semibold text-white">
        {skillName}
      </span>
    </div>
  );
}
