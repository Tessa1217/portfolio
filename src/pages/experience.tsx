import { useState } from "react";
import { fadeInUp } from "@/constants/animation/animation";
import AnimatedSection from "@/components/animation/animated-section";
import SectionTitle from "@/components/section-title";
import WorkProjects from "@/components/experience/work-projects";
import PersonalProjects from "@/components/experience/personal-projects";

const TABS = ["Work Projects", "Personal Projects"] as const;

export default function Experience() {
  const [activeTab, setActiveTab] =
    useState<(typeof TABS)[number]>("Work Projects");

  return (
    <AnimatedSection
      id="experience"
      variants={fadeInUp}
      as="section"
      className="w-full py-20 text-white text-center px-4 min-h-[100svh]"
    >
      <div className="container w-full h-full mx-auto px-6">
        <SectionTitle title="Experience" />
        <div className="flex justify-center space-x-4 mb-12">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full transition font-semibold
                ${
                  activeTab === tab
                    ? "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 font-extrabold"
                    : "bg-accent text-white"
                }
                hover:opacity-90
                `}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="container mx-auto px-6 mb-16">
          {activeTab === "Work Projects" && <WorkProjects />}
          {activeTab === "Personal Projects" && <PersonalProjects />}
        </div>
      </div>
    </AnimatedSection>
  );
}
