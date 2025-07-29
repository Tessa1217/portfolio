import type { QuestionAnswer } from "@/types";
import { FaQuestionCircle } from "react-icons/fa";
import { AnimatedCard } from "@/components/animation";

export default function QuestionCard({ question, answer }: QuestionAnswer) {
  return (
    <AnimatedCard
      hoverEffect="lift"
      className="bg-white/5 border border-white/10 backdrop-blur-md text-white p-6 rounded-3xl shadow-xl mb-10 w-full max-w-3xl mx-auto"
    >
      <h5 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 flex items-center gap-2">
        <span className="font-display text-primary text-2xl">
          <FaQuestionCircle />
        </span>{" "}
        {question}
      </h5>
      <p className="font-display text-base sm:text-lg leading-relaxed text-white/90 text-left">
        {answer}
      </p>
    </AnimatedCard>
  );
}
