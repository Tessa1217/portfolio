import { fadeInUp } from "@/constants/animation/animation";
import { QUESTION_ANS_ANSWER } from "@/lib/data";
import QuestionCard from "@/components/question-card";
import SectionTitle from "@/components/section-title";
import MotionWrapper from "@/components/motion-wrapper";

export default function About() {
  return (
    <section className="h-screen flex items-center justify-center text-white">
      <MotionWrapper
        variants={fadeInUp}
        className="text-center px-4 w-screen p-10"
      >
        <SectionTitle title="About Me" />
        {QUESTION_ANS_ANSWER.map((qna) => (
          <QuestionCard
            key={qna.key}
            question={qna.question}
            answer={qna.answer}
          />
        ))}
      </MotionWrapper>
    </section>
  );
}
