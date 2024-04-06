"use client";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";

const Header = () => {
  return (
    <header className="z-[999] relative hidden sm:block">
      <motion.div
        className="hidden sm:flex items-center justify-center fixed top-0 left-1/2 -translate-x-1/2 h-[4.5rem] w-full rounded-none border-2 border-white border-opacity-80 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}>
        <nav>
          <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-2 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
            {links.map((link) => (
              <li className="flex items-center justify-center" key={link.hash}>
                <Link
                  className="flex w-full items-center justify-center px-3 hover:text-gray-950 transition "
                  href={link.hash}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </header>
  );
};

export default Header;
