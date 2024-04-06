"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDown, BsArrowDownCircleFill } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";

const HeroPullUp = () => {
  return (
    <section>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 250,
        }}>
        <Link href="#about">
          <div className="mt-4 min-[402px]:mt-24 sm:mt-6 flex justify-center items-end sm:w-52 w-24 h-7 border-2 border-white border-opacity-80 bg-gray-50 bg-opacity-40 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] rounded-lg sm:hover:h-24 sm:transition-all">
            <IoIosArrowDown size={24} />
          </div>
        </Link>
      </motion.div>
    </section>
  );
};

export default HeroPullUp;
