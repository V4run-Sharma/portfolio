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
    degree: "Bachelor of Computer Science and Engineering (CGPA: 8.33)",
    college: "Rajasthan Technical University",
    location: "Kota, Rajasthan",
    date: "Nov 2021 - Aug 2025",
  },
  {
    degree: "Senior Secondary Education (Percentage: 92.40%)",
    college: "The Creative Brain Academy",
    location: "Rajsamand, Rajasthan",
    date: "Apr 2019 - Jun 2020",
  },
];

export const experiencesData = [
  {
    title: "SOFTWARE DEVELOPMENT ENGINEER",
    company: "Quinbay Technologies",
    location: "Bengaluru, Karnataka (On-site)",
    description: [
      "- Designed and implemented a Kafka-driven MongoDB cleanup pipeline, deleting data for ~95,000 sellers and reclaiming ~120 GB of storage.",
      "- Optimized high-volume batch deletion workflows, reducing service impact and improving processing efficiency by ~40%.",
      "- Improved backend reliability by implementing failure handling and retry mechanisms for asynchronous jobs, reducing manual intervention by ~30%.",
      "- Designed resilient API contracts for complex payment flows (QRIS, Installments), improving error handling and data consistency.",
      "- Implemented feature flags and persistence logic to enable safer rollouts and A/B testing for registration flows.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Mar 2025 - Present",
  },
  {
    title: "SOFTWARE DEVELOPMENT ENGINEER INTERN",
    company: "Quinbay Technologies",
    location: "Bengaluru, Karnataka (On-site)",
    description: [
      "- Assisted in upgrading 3 microservices to Java 21 and Spring Boot 3, reducing Jenkins CI/CD build times by 65% and improving deployment efficiency by 30%.",
      "- Resolved 5+ critical issues across APIs and UI, ensuring accurate data flow and enhancing system stability.",
      "- Delivered 3+ new features and fixed UI inconsistencies using Vue.js 3 to streamline the user experience.",
      "- Collaborated with 3+ cross-functional teams to standardize code practices and drive root cause analysis for recurring issues.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2024 - Mar 2025",
  },
] as const;

export const projectsData = [
  {
    title: "Spring Boot Correlation ID Starter",
    description:
      "Published a production-ready Spring Boot starter to Maven Central for end-to-end request tracing with correlation IDs, MDC enrichment, HTTP client propagation, and async context propagation.",
    tags: [
      "Java",
      "Spring Boot",
      "Maven Central",
      "WebClient",
      "RestTemplate",
      "MDC",
    ],
    imageUrl: undefined,
    gitRepo: "https://github.com/V4run-Sharma/spring-boot-starter-correlation-id",
    live: "https://central.sonatype.com/artifact/io.github.v4run-sharma/spring-boot-starter-correlation-id",
  },
  {
    title: "Viscord",
    description:
      "Engineered communication pathways for voice, video, and text communities, reducing API call times by ~20% and increasing user engagement by 10% with Clerk auth, moderation tools, and robust real-time collaboration.",
    tags: ["Next.js", "Tailwind CSS", "ShadCN", "LiveKit", "Socket.io", "Clerk"],
    imageUrl: ViscordChat,
    gitRepo: "https://github.com/V4run-Sharma/viscord",
    live: "https://viscord.up.railway.app/",
  },
  {
    title: "Ghar",
    description:
      "Built a real estate platform with advanced search and responsive UX, improving page load times by 40% and reducing bounce rate by 15% while scaling backend operations with Node.js, Express.js, MongoDB, and Firebase.",
    tags: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase",
    ],
    imageUrl: GharHero,
    gitRepo: "https://github.com/V4run-Sharma/ghar",
    live: "https://gharrealestate.onrender.com/",
  },
] as const;

export const skillsData = [
  "Java",
  "Kotlin",
  "HTML/CSS",
  "JavaScript",
  "MySQL",
  "PostgreSQL",
  "Spring Boot",
  "Kafka",
  "Redis",
  "Jetpack Compose",
  "Vue.js",
  "React.js",
  "Node.js",
  "MongoDB",
  "Tailwind CSS",
  "SCSS",
] as const;
