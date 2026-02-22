"use client";

import { motion } from "framer-motion";

import { useSectionInView } from "@/lib/hooks";

const About = () => {
  const { ref } = useSectionInView("About", 0.75);

  return (
    <section
      ref={ref}
      id="about"
      className="scroll-mt-28 flex flex-col items-center gap-y-4 sm:gap-y-8">
      <motion.div
        className="max-w-xl mt-4 sm:mt-0 flex flex-col gap-y-4 sm:gap-y-8"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.175,
        }}>
        <h1 className="sm:text-2xl text-xl font-bold text-center">About Me</h1>
        <p className="text-center text-sm sm:text-base font-medium leading-loose sm:leading-8 sm:[word-spacing:0.25rem]">
          I am a software engineer focused on <strong>backend development</strong>{" "}
          with <strong>Java, Spring Boot, Kafka, Redis, and MongoDB</strong>. I
          work on high-impact systems, resilient APIs, and performance-focused
          workflows, and I also build full-stack products using{" "}
          <strong>React/Next.js</strong>. I enjoy solving reliability and scale
          problems while keeping user experience and product quality strong.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
