"use client";

import React from "react";
import { FaReact } from "react-icons/fa";
import { SiFramer, SiVercel } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="w-screen py-4 sm:px-4 mt-16 flex flex-col justify-center items-center">
      <div className="w-full h-0.5 bg-gradient-to-r from-[#c6d4ff] to-[#a8ffe3] mb-4"></div>
      <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4 sm:px-16">
        <small className="font-semibold">
          &copy; Varun Sharma. All Rights Reserved.
        </small>
        <div className="flex gap-x-2 justify-center items-center">
          <a href="https://react.dev" target="_blank"></a>
          <FaReact className="text-2xl text-blue-500" />
          <a href="https://www.framer.com/motion/" target="_blank"></a>
          <SiFramer className="text-2xl text-black" />
          <a href="https://nextjs.org" target="_blank"></a>
          <TbBrandNextjs className="text-2xl text-black" />
          <a href="https://vercel.com" target="_blank"></a>
          <SiVercel className="text-2xl text-black" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
