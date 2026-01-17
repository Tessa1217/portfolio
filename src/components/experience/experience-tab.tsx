"use client";
import { useState, ReactNode } from "react";

const TABS = ["Work Projects", "Personal Projects"] as const;

export default function ExperienceTabs({
  children,
}: {
  children: ReactNode[];
}) {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <div className="flex justify-center space-x-4 mb-12">
        {TABS.map((tab, tabIndex) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tabIndex)}
            className={`px-4 py-2 rounded-full transition font-semibold text-light-text dark:text-dark-text
              ${
                activeTab === tabIndex
                  ? "bg-secondary-active font-extrabold text-white"
                  : "outline-secondary"
              }
              hover:opacity-90
            `}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="container mx-auto px-6 mb-16">
        {children.map((section, sectionIndex) => (
          <div
            key={sectionIndex}
            className={activeTab === sectionIndex ? "block" : "hidden"}
          >
            {section}
          </div>
        ))}
      </div>
    </>
  );
}
