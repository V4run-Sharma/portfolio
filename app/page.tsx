import Intro from "@/components/intro";
import HeroPullUp from "@/components/hero-pull-up";
import About from "@/components/about";
import Education from "@/components/education";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Experience from "@/components/experience";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center sm:gap-y-16 gap-y-6 sm:pt-28 p-8 pt-20">
      <Intro />
      <HeroPullUp />
      <About />
      <Education />
      <Projects />
      <Skills />
      <Experience />
    </main>
  );
}
