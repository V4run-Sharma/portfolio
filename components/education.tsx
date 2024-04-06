"use client";

import React, { useEffect } from "react";

import { motion } from "framer-motion";

import { education } from "@/lib/data";
import { useActiveSectionContext } from "@/contexts/active-section-context";
import { useInView } from "react-intersection-observer";
import EducationCard from "./education-card";

const Education = () => {
  const { setActiveSection } = useActiveSectionContext();
  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView) {
      setActiveSection("Projects");
    }
  }, [inView]);

  return (
    <section ref={ref} id="education" className="sm:scroll-mt-28">
      <div className="flex flex-col gap-y-4 sm:gap-y-8">
        <h1 className="sm:text-2xl text-xl font-bold text-center">Education</h1>
        <div className="flex flex-col gap-y-4 sm:gap-y-6">
          {education.map((edu, index) => (
            <React.Fragment key={index}>
              <EducationCard
                degree={edu.degree}
                college={edu.college}
                location={edu.location}
                date={edu.date}
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
