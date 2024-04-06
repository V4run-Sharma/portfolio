"use client";

import { motion } from "framer-motion";

const About = () => {
  return (
    <section>
      <motion.div
        className="max-w-xl mt-4 sm:mt-0 flex flex-col gap-y-4"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.175,
        }}>
        <h1 className="sm:text-2xl text-xl font-bold text-center">About Me</h1>
        <p className="text-center text-sm leading-loose sm:[word-spacing:0.25rem]">
          I specialize in crafting professional websites using React, especially
          Next.js. My focus lies in delivering seamless user experiences with a
          keen eye for design and functionality. Continuously refining my skills
          keeps me ahead in the digital landscape, ensuring I deliver top-notch
          results that leave a lasting impression.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
