import Image from "next/image";
import { motion } from "framer-motion";
import type { WorkInformation } from "@/types";

interface WorkCardProps extends WorkInformation {
  selected: boolean;
  handleWorkCardClick: (id: number) => void;
}

export default function WorkCard({
  id,
  company,
  period,
  selected,
  logoUrl,
  handleWorkCardClick,
}: WorkCardProps) {
  return (
    <div className="flex flex-col gap-2">
      <motion.button
        onClick={() => handleWorkCardClick(id)}
        type="button"
        layout // Framer Motion 레이아웃 애니메이션
        whileHover={{ scale: 1.02 }}
        className={`
        w-full
        max-w-[100px]
        flex items-center 
        space-x-3 px-4 py-2 
        bg-white
        rounded-md
        min-h-[80px] 
        transition-all duration-200
        relative
        z-20
        ${
          selected
            ? "ring-2 ring-gray-300"
            : "ring-1 ring-gray-600 hover:ring-green-400 hover:bg-gray-700"
        }
      `}
      >
        <div className="absolute top-0 left-0 w-full h-full z-0 opacity-100">
          <Image
            src={logoUrl}
            alt={company}
            fill
            className="
            w-full h-full            
            object-contain             
            border-2 border-transparent 
            transition-colors
            group-hover:border-green-400
          "
          />
        </div>
      </motion.button>
      <div className="flex-1 text-left overflow-hidden">
        <p
          className={`
            text-lg sm:text-base 
            font-semibold 
            truncate
            ${selected ? "text-white" : "text-gray-300"}
          `}
        >
          {company}
        </p>
        <p className="text-xs text-white truncate">{period}</p>
      </div>
    </div>
  );
}
