import { fadeInUp } from "@/constants/animation/animation";
import { HERO_IDENTIFICATION, HERO_TEXT } from "@/lib/data";
import AnimatedSection from "@/components/animation/animated-section";
import HeroIllustration from "@/components/hero-illustration";
import AnimatedText from "@/components/animation/animated-text";
import { motion, AnimatePresence } from "framer-motion";

export default function Introduction() {
  return (
    <AnimatedSection
      id="home"
      as="section"
      variants={fadeInUp}
      className="min-h-[100svh] flex flex-row items-center justify-center text-white"
    >
      <div className="container mx-auto xl:px-40 lg:px-20 md:px-15 px-12 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <p className="text-lg font-display font-bold text-[#3CE3BD]">
            안녕하세요, 저는
          </p>
          <div className="space-y-5">
            <AnimatedText
              texts={HERO_IDENTIFICATION}
              className="font-display font-extrabold
                text-4xl lg:text-6xl
                text-white
                whitespace-nowrap"
            />
            <AnimatedText
              texts={HERO_TEXT}
              className="
                font-display font-semibold
                text-2xl lg:text-3xl
                text-white/80
                whitespace-nowrap
              "
            />
            <p className="font-display font-medium text-2xl lg:text-3xl text-white ms-5">
              <span className="font-bold text-[#3CE3BD]">
                Frontend Developer
              </span>
              입니다.
            </p>
          </div>
        </div>
        {/* 일러스트 영역 */}
        <AnimatePresence>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end mb-12 md:mb-0">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
              className="flex-shrink-0 justify-center items-center w-48 h-48 md:w-60 md:h-60 lg:w-90 lg:h-90"
            >
              <HeroIllustration />
            </motion.div>
          </div>
        </AnimatePresence>
      </div>
    </AnimatedSection>
  );
}
