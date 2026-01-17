import AnimatedParticles from "@/components/animation/animated-particles";
import AnimatedProgressScroll from "@/components/animation/animated-progress-scroll";
import Introduction from "@/components/introduction/introduction";
import About from "@/components/about/about";
import Skills from "@/components/skills/skills";
import Experience from "@/components/experience/experience";
import Footer from "@/components/layout/footer";

export default function Portfolio() {
  return (
    <>
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
    </>
  );
}
