"use client";
import React, { useEffect, useState } from "react";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { useSectionInView } from "@/lib/hooks";
import { experiencesData } from "@/lib/data";

const isDarkTheme = () => {
  if (typeof document === "undefined") return false;

  const root = document.documentElement;
  return (
    root.classList.contains("dark") ||
    root.getAttribute("data-theme") === "dark" ||
    document.body.classList.contains("theme-dark")
  );
};

type ExperienceHighlightsProps = {
  highlights: readonly string[];
  className?: string;
};

const ExperienceHighlights = ({
  highlights,
  className = "",
}: ExperienceHighlightsProps) => {
  return (
    <ul className={className}>
      {highlights.map((highlight, index) => (
        <li key={index}>{highlight}</li>
      ))}
    </ul>
  );
};

const Experience = () => {
  const { ref } = useSectionInView("Experience", 0.5);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const syncTheme = () => setDarkMode(isDarkTheme());
    syncTheme();

    const rootObserver = new MutationObserver(syncTheme);
    rootObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "data-theme"],
    });

    const bodyObserver = new MutationObserver(syncTheme);
    bodyObserver.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      rootObserver.disconnect();
      bodyObserver.disconnect();
    };
  }, []);

  const timelineContentStyle = darkMode
    ? {
        background: "#0f172a",
        color: "#f8fafc",
        boxShadow: "0 0 0 4px #1e293b",
        border: "0.5px solid rgb(148 163 184 / 0.3)",
        textAlign: "left" as const,
        padding: "1rem",
      }
    : {
        background: "#f3f4f6",
        color: "#020617",
        boxShadow: "0 0 0 4px #f9fafb",
        border: "0.5px solid white",
        textAlign: "left" as const,
        padding: "1rem",
      };

  const timelineArrowStyle = {
    borderRight: `0.4rem solid ${darkMode ? "#cbd5e1" : "#020617"}`,
    margin: "0 0.5rem",
  };

  return (
    <section id="experience" ref={ref} className="scroll-mt-28">
      <h1 className="sm:text-2xl text-xl font-bold text-center mb-4 sm:mb-8">
        Experience
      </h1>
      <article className="hidden sm:block">
        <VerticalTimeline lineColor={darkMode ? "#334155" : "#c6d4ff"}>
          {experiencesData.map((exp, index) => (
            <React.Fragment key={index}>
              <VerticalTimelineElement
                visible={true}
                contentStyle={timelineContentStyle}
                contentArrowStyle={timelineArrowStyle}
                date={exp.date}
                dateClassName="!text-gray-700 dark:!text-slate-100 !font-bold !text-sm !capitalize"
                icon={exp.icon}
                iconStyle={{
                  padding: "0rem",
                  background: darkMode ? "#0f172a" : "#f3f4f6",
                  fontSize: "1.5rem",
                }}
              >
                <h3 className="font-semibold! text-xl! capitalize!">
                  {exp.title}
                </h3>
                <p className="mt-0! text-lg!">{exp.company}</p>
                <p className="text-sm! mt-0! text-gray-500! dark:text-slate-300!">
                  {exp.location}
                </p>
                <ExperienceHighlights
                  highlights={exp.highlights}
                  className="mt-3! list-disc! space-y-2! pl-5! text-gray-700! dark:text-slate-200!"
                />
              </VerticalTimelineElement>
            </React.Fragment>
          ))}
        </VerticalTimeline>
      </article>
      <article className="flex flex-col gap-y-4 sm:hidden">
        {experiencesData.map((exp, index) => (
          <React.Fragment key={index}>
            <div className="p-[1.5px] rounded-lg bg-linear-to-b from-[#c6d4ff] to-[#a8ffe3] flex justify-center items-center">
              <div className="w-full h-full flex flex-col text-gray-950 dark:text-slate-100 p-4 bg-gray-100 hover:bg-gray-50 dark:bg-slate-900/90 dark:hover:bg-slate-900 transition rounded-md">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full border border-white/80 bg-white p-1">
                    {exp.icon}
                  </div>
                  <h3 className="font-semibold capitalize">{exp.title}</h3>
                </div>
                <p>{exp.company}</p>
                <p className="text-xs text-gray-500 dark:text-slate-300">
                  {exp.location}
                </p>
                <p className="text-xs text-gray-600 font-bold dark:text-slate-200">
                  {exp.date}
                </p>
                <ExperienceHighlights
                  highlights={exp.highlights}
                  className="mt-4 list-disc space-y-2 pl-4 text-xs font-medium leading-5 text-gray-500 dark:text-slate-300"
                />
              </div>
            </div>
          </React.Fragment>
        ))}
      </article>
    </section>
  );
};

export default Experience;
