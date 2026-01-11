import { useState, useEffect } from "react";
import Introduction from "@/pages/introduction";
import About from "@/pages/about";
import Skills from "@/pages/skills";
import Experience from "@/pages/experience";
import AnimatedProgressScroll from "@/components/animation/animated-progress-scroll";
import Navbar from "@/components/layout/navbar";
import AnimatedParticles from "@/components/animation/animated-particles";
import Footer from "@/components/layout/footer";
import { AnimatePresence } from "framer-motion";
import AnimatedCover from "@/components/animation/animated-cover";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Show cover for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>{isLoading && <AnimatedCover />}</AnimatePresence>
      {!isLoading && (
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
      )}
    </>
  );
}

export default App;
