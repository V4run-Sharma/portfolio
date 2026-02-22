"use client";

import Link from "next/link";
import Image from "next/image";

import { BsArrowRight, BsGithub, BsTwitterX } from "react-icons/bs";
import { LiaLinkedinIn } from "react-icons/lia";
import { FaClipboardList } from "react-icons/fa";

import { motion } from "framer-motion";

import me from "@/public/me.webp";
import { useSectionInView } from "@/lib/hooks";

const Intro = () => {
  const { ref } = useSectionInView("Home", 0.5);
  return (
    <section
      ref={ref}
      id="home"
      className="flex flex-col items-center justify-center scroll-mt-28 sm:gap-y-8 gap-y-4"
    >
      <div className="relative h-fit w-fit">
        <motion.div
          className="w-56 h-56 rounded-full border-4 border-white overflow-hidden"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "tween",
            duration: 0.25,
          }}
        >
          <Image
            src={me}
            width={500}
            height={500}
            priority={true}
            alt="Varun's Photo"
            className="object-cover scale-150"
          />
        </motion.div>
      </div>
      <div className="max-w-xl">
        <motion.p
          className="sm:text-2xl text-lg leading-loose text-gray-950 font-semibold text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 250,
          }}
        >
          Hello, I am <span className="font-bold">Varun Sharma</span>. I build{" "}
          <span className="italic">scalable backend systems</span> and{" "}
          <span className="italic">full-stack products</span> with{" "}
          <span className="underline">Java and Spring Boot</span>.
        </motion.p>
      </div>
      <div className="flex flex-wrap gap-4 justify-center items-center">
        <motion.button
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 250,
          }}
        >
          <Link
            href="#contact"
            className="flex justify-center items-center gap-x-3 w-fit px-8 py-4 text-sm font-medium rounded-full bg-gray-700 text-gray-50 shadow-lg hover:scale-110 hover:bg-gray-950 group transition duration-300"
          >
            Contact Me{" "}
            <BsArrowRight
              size={16}
              strokeWidth={1.5}
              className="group-hover:translate-x-1 transition"
            />
          </Link>
        </motion.button>
        <motion.button
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 300,
            delay: 0.05,
          }}
        >
          <a
            href="/Varun%20Sharma%20Resume%20Updated.pdf"
            target="_blank"
          >
            <p className="flex justify-center items-center gap-x-3 w-fit px-[30px] py-[12px] text-base font-medium border-2 border-white border-opacity-80 bg-gray-50 bg-opacity-40 shadow-lg shadow-black/3 backdrop-blur-[0.5rem] rounded-full  hover:scale-110 hover:bg-opacity-100 transition duration-300">
              Resume
              <FaClipboardList size={16} />
            </p>
          </a>
        </motion.button>
        <motion.button
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 300,
            delay: 0.1,
          }}
          className="hidden sm:block"
        >
          <a href="https://linkedin.com/in/varunsharmao2" target="_blank">
            <div className="p-2 border-2 border-white border-opacity-80 bg-[#0077b5] shadow-lg shadow-black/3 backdrop-blur-[0.5rem] rounded-full hover:scale-110 transition duration-300">
              <LiaLinkedinIn color="white" size={32} className="" />
            </div>
          </a>
        </motion.button>
        <motion.button
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 300,
            delay: 0.1,
          }}
          className="hidden sm:block"
        >
          <a href="https://github.com/V4run-Sharma" target="_blank">
            <div className="p-3 border-2 border-white border-opacity-80 bg-[#2b3137] shadow-lg shadow-black/3 backdrop-blur-[0.5rem] rounded-full hover:scale-110 transition duration-300">
              <BsGithub color="white" size={24} className="" />
            </div>
          </a>
        </motion.button>
        <motion.button
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 300,
            delay: 0.1,
          }}
          className="hidden sm:block"
        >
          <a href="https://twitter.com/V4runSharma" target="_blank">
            <div className="p-3 border-2 border-white border-opacity-80 bg-black shadow-lg shadow-black/3 backdrop-blur-[0.5rem] rounded-full hover:scale-110 transition duration-300">
              <BsTwitterX color="white" size={24} className="" />
            </div>
          </a>
        </motion.button>
      </div>
    </section>
  );
};

export default Intro;
