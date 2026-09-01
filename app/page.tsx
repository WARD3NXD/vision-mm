
import Hero from "./components/hero";
import AboutBlock from "./components/AboutBlock";
import { SmoothScroll } from "./components/ScrollSmoother";

export default function Home() {
  return (

    <main>
      <SmoothScroll>
        <Hero />
        <AboutBlock />
      </SmoothScroll>
    </main>

  );
}
