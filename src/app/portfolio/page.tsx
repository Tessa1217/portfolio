import { AnimatePresence } from "framer-motion";
import AnimatedParticles from "@/components/animation/animated-particles";
import AnimatedProgressScroll from "@/components/animation/animated-progress-scroll";
import Introduction from "@/app/portfolio/pages/introduction";
import About from "@/app/portfolio/pages/about";
import Skills from "@/app/portfolio/pages/skills";
import Experience from "@/app/portfolio/pages/experience";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

export default function Portfolio() {
  return (
    <>
      <AnimatePresence mode="wait">
        <div className="relative bg-light-background text-light-text dark:bg-dark-background dark:text-dark-text min-h-screen">
          <Navbar />
          <div className="fixed inset-0 z-0 pointer-events-none" />
          <div className="fixed w-full h-screen">
            <AnimatedParticles count={25} minSize={5} maxSize={60} />
          </div>
          <AnimatedProgressScroll />
          <div className="relative z-10 flex flex-col space-y-10">
            <Introduction />
            <About />
            <Experience />
            <Skills />
            <Footer />
          </div>
        </div>
      </AnimatePresence>
    </>
  );
}
