"use client";

import React, { useEffect, useRef, useState } from "react";

import { motion, useScroll, useTransform } from "framer-motion";

type EducationCardProps = {
  degree: String;
  college: String;
  location: String;
  date: String;
};

const EducationCard = ({
  degree,
  college,
  location,
  date,
}: EducationCardProps) => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth <= 640) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [isMobile]);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: isMobile ? 1 : scaleProgess,
        opacity: isMobile ? 1 : opacityProgess,
      }}>
      <article className="p-4 sm:p-8 rounded-lg bg-gray-50 bg-opacity-60 border-white border-2 border-opacity-80 hover:bg-opacity-100 transition">
        <div className="flex flex-col gap-y-2 sm:gap-y-4">
          <h2 className="text-lg sm:text-xl font-bold">{degree}</h2>
          <div className="flex flex-col">
            <h3 className="text-base sm:text-lg font-medium">{college}</h3>
            <p className="text-xs sm:text-xs font-medium">{location}</p>
          </div>
          <p className="text-sm sm:text-base font-semibold">{date}</p>
        </div>
      </article>
    </motion.div>
  );
};

export default EducationCard;
