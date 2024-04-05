"use client";
import { useState } from "react";

import Link from "next/link";

import { motion } from "framer-motion";

import { GiHamburgerMenu } from "react-icons/gi";
import { BsGithub, BsTwitterX } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";

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
        className={`fixed top-4 right-40 z-10 p-1 border-2 border-[#ffb7b7] border-opacity-40 bg-[#c6d4ff] bg-opacity-20 shadow-lg shadow-black/[0.03] backdrop-blur-[10rem] rounded-lg active:scale-110 transition`}>
        <a href="https://linkedin.com/in/varunsharmao2" target="_blank">
          <LiaLinkedin color="#030712" size={24} />
        </a>
      </motion.div>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: -0.2,
        }}
        className={`fixed top-4 right-28 z-10 p-2 border-2 border-[#ffb7b7] border-opacity-40 bg-[#c6d4ff] bg-opacity-20 shadow-lg shadow-black/[0.03] backdrop-blur-[10rem] rounded-lg active:scale-110 transition`}>
        <a href="https://github.com/V4run-Sharma" target="_blank">
          <BsGithub color="#030712" size={16} />
        </a>
      </motion.div>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: -0.35,
        }}
        className={`fixed top-4 right-16 z-10 p-2 border-2 border-[#ffb7b7] border-opacity-40 bg-[#c6d4ff] bg-opacity-20 shadow-lg shadow-black/[0.03] backdrop-blur-[10rem] rounded-lg active:scale-110 transition`}>
        <a href="https://twitter.com/V4runSharma" target="_blank">
          <BsTwitterX color="#030712" size={16} />
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
        } border-2 border-[#ffb7b7] border-opacity-40 bg-[#c6d4ff] bg-opacity-20 shadow-lg shadow-black/[0.03] backdrop-blur-[10rem] rounded-lg active:scale-110 transition`}>
        {isOpen ? (
          <BiX color="#030712" size={24} />
        ) : (
          <GiHamburgerMenu color="#030712" size={16} />
        )}
      </motion.div>
      {isOpen ? (
        <motion.nav
          className="fixed top-16 right-4 z-10 border-2 px-4 border-[#ffb7b7] border-opacity-40 bg-gray-50 bg-opacity-60 shadow-lg shadow-black/[0.03] backdrop-blur-[2rem] rounded-lg"
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
