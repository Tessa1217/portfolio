import Introduction from "./pages/introduction";
import About from "./pages/about";
import Skills from "./pages/skills";
import { ScrollProgress } from "./components/scroll-progress";
function App() {
  return (
    <>
      <div className="relative">
        <div className="fixed inset-0 z-0 bg-animated-gradient pointer-events-none" />
        <ScrollProgress />
        <div className="relative z-10">
          <Introduction />
          <About />
          <Skills />
        </div>
      </div>
    </>
  );
}

export default App;
