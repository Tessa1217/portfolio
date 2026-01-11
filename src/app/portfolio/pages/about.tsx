import { Animated } from "@/components/animation";
import SectionTitle from "@/components/ui/section-title";
import Philosophy from "@/components/about/philosophy";
import Strength from "@/components/about/strength";

export default function AboutMe() {
  return (
    <Animated.Section
      id="about"
      animation="fadeInUp"
      as="section"
      className="w-full py-20 text-light-text dark:text-dark-text text-center px-4 min-h-svh"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <Animated.Box animation="fadeInDown" className="text-center mb-16">
          <SectionTitle title="About Me" />
          <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto">
            더 나은 기술을 끊임없이 탐구하고 프로젝트에 적용하는 과정을 즐기며,
            <br className="hidden md:block" />
            이를 통해 얻은 인사이트를 팀원들과 적극적으로 공유하며 함께 성장하는
            개발자입니다.
          </p>
        </Animated.Box>
        {/* Philosophy Cards */}
        <Philosophy />
        {/* Core Strengths */}
        <Strength />
      </div>
    </Animated.Section>
  );
}
