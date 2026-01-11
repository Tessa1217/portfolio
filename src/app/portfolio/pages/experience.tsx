import { Animated } from "@/components/animation";
import { fadeInUp } from "@/constants/animation/animation";
import ExperienceTabs from "@/components/experience/experience-tab";
import SectionTitle from "@/components/ui/section-title";
import WorkProjects from "@/components/experience/work-projects";
import PersonalProjects from "@/components/experience/personal-projects";

export default function Experience() {
  return (
    <Animated.Section
      id="experience"
      variants={fadeInUp}
      as="section"
      className="w-full py-20 text-white text-center px-4 min-h-[100svh]"
    >
      <div className="container w-full h-full mx-auto px-6">
        <SectionTitle title="Experience" />
        <ExperienceTabs>
          <WorkProjects />
          <PersonalProjects />
        </ExperienceTabs>
      </div>
    </Animated.Section>
  );
}
