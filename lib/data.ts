import React from "react";
import { CgWorkAlt } from "react-icons/cg";
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
    degree: "B.Tech in CSE (8.13 CGPA)",
    college: "Rajasthan Technical University",
    location: "Kota, Rajasthan",
    date: "2021 - 2025",
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
    title: "SOFTEWARE DEVELOPMENT INTERN",
    company: "Quinbay Technologies",
    location: "Bangalore, Karnataka (On-Site)",
    description: [
      "- Upgraded 3+ microservices to Java 21 and Spring Boot 3, reducing Jenkins CI/CD build times by 60% and improving overall deployment efficiency.",
      "- Resolved 5+ critical issues across APIs and UI, ensuring accurate data flow and enhancing system stability.",
      "- Delivered 3+ new features and fixed UI inconsistencies using Vue.js 3 to streamline the user experience.",
      "- Collaborated with 3+ cross-functional teams to standardize code practices and drive root cause analysis for recurringissues.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2024 -",
  },
  {
    title: "WEB DEVELOPMENT INTERN",
    company: "Acmegrade Pvt. Ltd.",
    location: "Udaipur, Rajasthan (Remote)",
    description: [
      "- Acquired expertise in HTML, CSS, JavaScript, ReactJS, Node.js, Express.js, TypeScript, SQL, and MongoDB, fostering advanced web development capabilities.",
      "- Demonstrated adeptness in database management with SQL and MongoDB, facilitating efficient data storage and retrieval for web applications.",
      "- Actively participated in the development of functional web applications, collaborating within team environments to achieve project objectives and timelines.",
      "- Effectively communicated technical concepts and updates, facilitating collaborative problem-solving and code reviews within the team.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Nov 2023 - Dec 2023",
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
  "Java",
  "Kotlin",
  "JavaScript",
  "TypeScript",
  "React",
  "Android",
  "SpringBoot",
  "Kafka",
  "Vue.js",
  "Redis",
  "Next.js",
  "Node.js",
  "Redux",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Express",
  "PostgreSQL",
  "Python",
] as const;
