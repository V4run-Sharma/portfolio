"use client";

import { useRef, useState } from "react";

import Link from "next/link";

import { BiX } from "react-icons/bi";
import { LiaLinkedinIn } from "react-icons/lia";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsGithub, BsTwitterX } from "react-icons/bs";

import { motion } from "framer-motion";

import { links } from "@/lib/data";
import useOnClickOutside from "@/hooks/close-mobile-menu";
import ThemeToggle from "@/components/theme-toggle";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useOnClickOutside(ref, () => setIsOpen(false));

  return (
    <header ref={ref} className="absolute block sm:hidden">
      <motion.button
        type="button"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed top-4 right-4 z-10 ${
          isOpen ? "p-1" : "p-2"
        } border-2 border-white border-opacity-40 bg-gray-50 bg-opacity-80 shadow-lg shadow-black/3 backdrop-blur-[10rem] rounded-lg dark:bg-slate-800/90 dark:border-slate-600/60`}>
        {isOpen ? (
          <BiX size={24} className="text-gray-950 dark:text-slate-100" />
        ) : (
          <GiHamburgerMenu
            size={16}
            className="text-gray-950 dark:text-slate-100"
          />
        )}
      </motion.button>
      {isOpen ? (
        <>
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0,
            }}
            className="fixed top-4 right-16 z-10"
          >
            <ThemeToggle />
          </motion.div>
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.15,
            }}
            className="fixed top-4 right-52 z-10 p-1 border-2 border-white border-opacity-40 bg-[#0077b5] shadow-lg shadow-black/10 rounded-lg">
            <a
              href="https://linkedin.com/in/varunsharmao2"
              target="_blank"
              rel="noopener noreferrer">
              <LiaLinkedinIn color="white" size={24} />
            </a>
          </motion.div>
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.1,
            }}
            className="fixed top-4 right-40 z-10 p-2 border-2 border-white border-opacity-40 bg-[#2b3137] shadow-lg shadow-black/10 rounded-lg">
            <a
              href="https://github.com/V4run-Sharma"
              target="_blank"
              rel="noopener noreferrer">
              <BsGithub color="#030712" size={16} fill="white" />
            </a>
          </motion.div>
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.05,
            }}
            className="fixed top-4 right-28 z-10 p-2 border-2 border-white border-opacity-40 bg-black shadow-lg shadow-black/10 backdrop-blur-[10rem] rounded-lg">
            <a
              href="https://twitter.com/V4runSharma"
              target="_blank"
              rel="noopener noreferrer">
              <BsTwitterX color="#030712" size={16} fill="white" />
            </a>
          </motion.div>
          <motion.nav
            className="fixed top-16 right-4 z-10 border-2 px-4 border-white border-opacity-40 bg-gray-50 bg-opacity-80 shadow-lg shadow-gray-500/3 backdrop-blur-[0.5rem] rounded-lg"
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
        </>
      ) : null}
    </header>
  );
};

export default MobileMenu;
