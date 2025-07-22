import { motion } from "framer-motion";
import { fadeInUp } from "../constants/animation/animation";
import { useInViewAnimation } from "../hooks/useInViewAnimation";

export default function Introduction() {
  const { ref, controls } = useInViewAnimation();

  return (
    <section className="h-screen flex items-center justify-center text-white">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={fadeInUp}
        className="text-center px-4"
      >
        {/* <h2 className="text-4xl font-bold mb-4">안녕하세요.</h2>
        <h3 className="text-3xl font-bold mb-4">
          Frontend 개발자 권유진입니다.
        </h3>
        <p className="text-lg max-w-xl mx-auto">
          배우는 것을 두려워하지 않고 책임감있게 일하는 개발자입니다.✨
        </p> */}
        <h1 className="text-5xl font-display font-bold mb-6 tracking-tight">
          안녕하세요, 권유진입니다
        </h1>
        <p className="text-lg max-w-3xl leading-relaxed text-white/80">
          <span>배움</span>을 멈추지 않고, <span>책임감</span> 있게 완성하는
          개발자가 되고자 합니다.
        </p>
      </motion.div>
    </section>
  );
}
