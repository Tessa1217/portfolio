import { fadeInUp } from "@/constants/animation/animation";
import { QUESTION_ANS_ANSWER } from "@/lib/data";
import QuestionCard from "@/components/question-card";
import SectionTitle from "@/components/section-title";
import AnimatedSection from "@/components/animation/animated-section";

export default function About() {
  return (
    <>
      <AnimatedSection
        id="about"
        variants={fadeInUp}
        as="section"
        className="min-h-[100svh] flex items-center justify-center text-white text-center px-4 w-screen p-10"
      >
        <div className="flex flex-col">
          <SectionTitle title="About Me" />
          {QUESTION_ANS_ANSWER.map((qna) => (
            <QuestionCard
              key={qna.key}
              question={qna.question}
              answer={qna.answer}
            />
          ))}
        </div>
      </AnimatedSection>
    </>
  );
}
