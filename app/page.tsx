
import Hero from "./components/hero";
import AboutBlock from "./components/AboutBlock";
import ProjectBlock from "./components/ProjectBlock";
import { SmoothScroll } from "./components/ScrollSmoother";

export default function Home() {
  return (

    <main>
      <SmoothScroll>
        <Hero />
        <AboutBlock />
        <ProjectBlock />
      </SmoothScroll>
    </main>

  );
}
