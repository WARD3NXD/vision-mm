
import Hero from "../components/hero";
import AboutBlock from "../components/AboutBlock";
import ProjectBlock from "../components/ProjectBlock";
import { SmoothScroll } from "../components/ScrollSmoother";
import StatsBlock from "../components/StatsBlock";
import Footer from "../components/Footer";

export default function Home() {
  return (

    <main>
      <SmoothScroll>
        <Hero />
        <AboutBlock />
        <ProjectBlock />
        <StatsBlock />
        <Footer />
      </SmoothScroll>
    </main>

  );
}
