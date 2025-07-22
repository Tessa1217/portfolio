import { motion } from "framer-motion";
import { fadeInUp } from "../constants/animation/animation";
import { useInViewAnimation } from "../hooks/useInViewAnimation";
import QuestionCard from "../components/question-card";
import { QUESTION_ANS_ANSWER } from "../lib/data";
import SectionTitle from "../components/section-title";

export default function About() {
  const { ref, controls } = useInViewAnimation();
  return (
    <section className="h-screen flex items-center justify-center text-white">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={fadeInUp}
        className="text-center px-4 w-screen p-10"
      >
        <SectionTitle title="About Me" />
        {QUESTION_ANS_ANSWER.map((qna) => (
          <QuestionCard question={qna.question} answer={qna.answer} />
        ))}
      </motion.div>
    </section>
  );
}
