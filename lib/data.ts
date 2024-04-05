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

export const experiencesData = [
  {
    title: "MACHINE LEARNING WORKSHOP",
    location: "Udaipur, Rajasthan",
    company: "NASSCOM FutureSkills Prime",
    description:
      "Spearheaded a hands-on workshop delving into Data Analysis and Machine Learning, gaining expertise in Supervised, Unsupervised, and Reinforcement Learning. Proficiently applied statistical methodologies like Linear, Non-Linear, and Polynomial Regression, optimizing model performance and increasing predictive accuracy by 30%.",
    icon: React.createElement(CgWorkAlt),
    date: "Dec 2022",
  },
  {
    title: "DATA ANALYST INTERN",
    location: "Udaipur, Rajasthan (Remote)",
    company: "IBM Skills Build",
    description:
      "Spearheaded a hands-on workshop delving into Data Analysis and Machine Learning, gaining expertise in Supervised, Unsupervised, and Reinforcement Learning. Proficiently applied statistical methodologies like Linear, Non-Linear, and Polynomial Regression, optimizing model performance and increasing predictive accuracy by 30%.",
    icon: React.createElement(FaPython),
    date: "June 2023 - Aug 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Ghar",
    description:
      "A real estate platform where users can buy, sell, and rent properties. Customers can directly contact the property owner and negotiate the price.",
    tags: ["React", "Javascript", "Next.js", "Tailwind", "Redux-Toolkit"],
    imageUrl: GharHero,
  },
  {
    title: "Viscord",
    description:
      "Viscord is a chat application where users can create servers, channels, and text, audio and video chat with other users one-on-one and in the server channels. Users can also upload images and files.",
    tags: ["React", "Next.js", "NeonDB", "Tailwind", "Prisma", "UploadThing"],
    imageUrl: ViscordChat,
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
