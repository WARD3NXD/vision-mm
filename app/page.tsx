
import Hero from "./components/hero";
import AboutBlock from "./components/AboutBlock";
import ProjectBlock from "./components/ProjectBlock";
import { SmoothScroll } from "./components/ScrollSmoother";
import StatsBlock from "@/app/components/StatsBlock";

export default function Home() {
  return (

    <main>
      <SmoothScroll>
        <Hero />
        <AboutBlock />
        <ProjectBlock />
        <StatsBlock />
      </SmoothScroll>
    </main>

  );
}
