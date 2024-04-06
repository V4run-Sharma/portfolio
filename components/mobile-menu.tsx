"use client";
import { useState } from "react";

import Link from "next/link";

import { motion } from "framer-motion";

import { GiHamburgerMenu } from "react-icons/gi";
import { BsGithub, BsTwitterX } from "react-icons/bs";
import { LiaLinkedin, LiaLinkedinIn } from "react-icons/lia";

import { links } from "@/lib/data";
import { BiX } from "react-icons/bi";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="absolute block sm:hidden">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: -0.05,
        }}
        className={`fixed top-4 right-40 z-10 p-1 border-2 border-white border-opacity-40 bg-[#0077b5] shadow-lg shadow-black/[0.1] rounded-lg`}>
        <a href="https://linkedin.com/in/varunsharmao2" target="_blank">
          <LiaLinkedinIn color="white" size={24} />
        </a>
      </motion.div>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: -0.2,
        }}
        className={`fixed top-4 right-28 z-10 p-2 border-2 border-white border-opacity-40 bg-[#2b3137] shadow-lg shadow-black/[0.1] rounded-lg`}>
        <a href="https://github.com/V4run-Sharma" target="_blank">
          <BsGithub color="#030712" size={16} fill="white" />
        </a>
      </motion.div>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: -0.35,
        }}
        className={`fixed top-4 right-16 z-10 p-2 border-2 border-white border-opacity-40 bg-black shadow-lg shadow-black/[0.1] backdrop-blur-[10rem] rounded-lg`}>
        <a href="https://twitter.com/V4runSharma" target="_blank">
          <BsTwitterX color="#030712" size={16} fill="white" />
        </a>
      </motion.div>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: -0.5,
        }}
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed top-4 right-4 z-10 ${
          isOpen ? "p-1" : "p-2"
        } border-2 border-black border-opacity-40 bg-[#d0f2f7] bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[10rem] rounded-lg`}>
        {isOpen ? (
          <BiX color="#030712" size={24} />
        ) : (
          <GiHamburgerMenu color="#030712" size={16} />
        )}
      </motion.div>
      {isOpen ? (
        <motion.nav
          className="fixed top-16 right-4 z-10 border-2 px-4 border-white border-opacity-40 bg-[#d0f2f7] bg-opacity-80 shadow-lg shadow-gray-500/[0.3] backdrop-blur-[3rem] rounded-lg"
          initial={{ y: -100, scaleY: 0, opacity: 0 }}
          animate={{ y: 0, scaleY: 1, opacity: 1 }}>
          <ul>
            {links.map((link) => (
              <li key={link.hash} className="py-2 font-semibold">
                <Link href={link.hash}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </motion.nav>
      ) : null}
    </header>
  );
};

export default MobileMenu;
