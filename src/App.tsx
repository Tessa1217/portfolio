import Introduction from "./pages/introduction";
import About from "./pages/about";
import Skills from "./pages/skills";
import Experience from "@/pages/experience";
import AnimatedProgressScroll from "@/components/animation/animated-progress-scroll";
import Navbar from "@/components/layout/navbar";
import AnimatedEffect from "@/components/animation/animated-effect";
function App() {
  return (
    <>
      <div className="relative">
        <Navbar />
        <div className="fixed inset-0 z-0 pointer-events-none bg-animated-gradient" />
        <div className="fixed w-full h-screen">
          <AnimatedEffect count={100} minSize={2} maxSize={8} />
        </div>
        {/* <HeroBackground /> */}
        <AnimatedProgressScroll />
        <div className="relative z-10">
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
