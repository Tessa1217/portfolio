import { HERO_IDENTIFICATION, HERO_TEXT } from "@/lib/data";
import { AnimatedSection } from "@/components/animation";
import HeroIllustration from "@/components/hero-illustration";
import AnimatedText from "@/components/animation/animated-text";

export default function Introduction() {
  return (
    <AnimatedSection
      id="home"
      preset="hero"
      as="section"
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
        <div className="w-[70%] md:w-1/2 lg:w-1/3 flex justify-center md:justify-end mb-12 md:mb-0">
          <HeroIllustration />
        </div>
      </div>
    </AnimatedSection>
  );
}
