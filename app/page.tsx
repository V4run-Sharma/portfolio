import HeroPullUp from "@/components/hero-pull-up";
import Intro from "@/components/intro";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center sm:gap-y-12 gap-y-6 sm:pt-28 p-8 pt-20">
      <Intro />
      <HeroPullUp />
    </main>
  );
}
