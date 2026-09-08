
import Hero from "../components/hero";
import AboutBlock from "../components/AboutBlock";
import ProjectBlock from "../components/ProjectBlock";
import { SmoothScroll } from "../components/ScrollSmoother";
import StatsBlock from "../components/StatsBlock";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import TechBlock from "../components/TechBlock";

export default function Home() {
  return (

    <main>
      <NavBar />
      <SmoothScroll>
        <Hero />
        <AboutBlock />
        <ProjectBlock />
        <TechBlock />
        <StatsBlock />
        <Footer />
      </SmoothScroll>
    </main>

  );
}
