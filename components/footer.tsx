"use client";

import React from "react";
import { FaReact } from "react-icons/fa";
import { SiFramer, SiVercel } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="w-screen p-4 mt-16 flex flex-col justify-center items-center">
      <div className="w-full h-0.5 bg-gradient-to-r from-[#c6d4ff] to-[#a8ffe3] mb-4"></div>
      <div className="w-full flex flex-wrap justify-between items-center gap-4 px-16">
        <small className="font-semibold">
          &copy; Varun Sharma. All Rights Reserved.
        </small>
        <div className="flex gap-x-4">
          <FaReact className="text-2xl text-blue-500" />
          <SiFramer className="text-2xl text-black" />
          <TbBrandNextjs className="text-2xl text-black" />
          <SiVercel className="text-2xl text-black" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
