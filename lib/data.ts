import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaPython } from "react-icons/fa";
import GharHero from "@/public/GharHero.webp";
import ViscordChat from "@/public/ViscordChat.webp";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const education = [
  {
    degree: "B.Tech in CSE (8.43 CGPA)",
    college: "Techno India NJR Institute of Technology",
    location: "Udaipur, Rajasthan",
    date: "2021 - 2025 (Expected)",
  },
  {
    degree: "Senior Secondary (92.40%)",
    college: "The Creative Brain Academy",
    location: "Rajsamand, Rajasthan",
    date: "2018 - 2020",
  },
];

export const experiencesData = [
  {
    title: "MACHINE LEARNING WORKSHOP",
    company: "NASSCOM FutureSkills Prime",
    location: "Udaipur, Rajasthan",
    description:
      "Spearheaded a hands-on workshop delving into Data Analysis and Machine Learning, gaining expertise in Supervised, Unsupervised, and Reinforcement Learning. Proficiently applied statistical methodologies like Linear, Non-Linear, and Polynomial Regression, optimizing model performance and increasing predictive accuracy by 30%.",
    icon: React.createElement(CgWorkAlt),
    date: "Dec 2022",
  },
  {
    title: "DATA ANALYST INTERN",
    company: "IBM Skills Build",
    location: "Udaipur, Rajasthan (Remote)",
    description:
      "Spearheaded a hands-on workshop delving into Data Analysis and Machine Learning, gaining expertise in Supervised, Unsupervised, and Reinforcement Learning. Proficiently applied statistical methodologies like Linear, Non-Linear, and Polynomial Regression, optimizing model performance and increasing predictive accuracy by 30%.",
    icon: React.createElement(FaPython),
    date: "June 2023 - Aug 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Viscord",
    description:
      "Viscord is a chat application where users can create servers, channels, and text, audio and video chat with other users one-on-one and in the server channels. Users can also upload images and files.",
    tags: ["React", "Next.js", "NeonDB", "Tailwind", "Prisma", "UploadThing"],
    imageUrl: ViscordChat,
    gitRepo: "https://github.com/V4run-Sharma/viscord",
    live: "https://viscord-two.vercel.app",
  },
  {
    title: "Ghar",
    description:
      "A real estate platform where users can buy, sell, and rent properties. Customers can directly contact the property owner and negotiate the price.",
    tags: ["React", "Javascript", "Next.js", "Tailwind", "Redux-Toolkit"],
    imageUrl: GharHero,
    gitRepo: "https://github.com/V4run-Sharma/ghar",
    live: "https://gharrealestate.onrender.com",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Redux",
  "Docker",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Python",
] as const;
