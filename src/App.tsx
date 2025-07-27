import Introduction from "./pages/introduction";
import About from "./pages/about";
import Skills from "./pages/skills";
import Experience from "@/pages/experience";
import AnimatedProgressScroll from "@/components/animation/animated-progress-scroll";
import Navbar from "@/components/layout/navbar";
import AnimatedParticles from "@/components/animation/animated-particles";
function App() {
  return (
    <>
      <div className="relative">
        <Navbar />
        <div className="fixed inset-0 z-0 pointer-events-none bg-[#15182e]" />
        <div className="fixed w-full h-screen">
          <AnimatedParticles count={25} minSize={5} maxSize={60} />
        </div>
        {/* <HeroBackground /> */}
        <AnimatedProgressScroll />
        <div className="relative z-10 flex flex-col space-y-10">
          <Introduction />
          <About />
          <Experience />
          <Skills />
        </div>
      </div>
    </>
  );
}

export default App;
