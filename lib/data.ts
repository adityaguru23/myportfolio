import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/ncdr.png";
import underconst from "@/public/under_construction.jpg";
import portimag from "@/public/portfolio.png";

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
    title: "The Hindu Senior Secondary School",
    location: "Chennai, India",
    description: "I completed my High School Graduation.",
    icon: React.createElement(LuGraduationCap),
    date: "2009 - 2023",
  },
  {
    title: "SRM Easwari Engineering College",
    location: "Chennai, India",
    description:
      "I am currently pursuing my Undergraduate Studies in the field of Computer Science and Engineering",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2027",
  },
  {
    title: "BLockchain Research Intern",
    location: "Chennai, India",
    description:
      "I'm now a Blockchain Research Intern. Leading a team of Blockchain Interns",
    icon: React.createElement(FaReact),
    date: "2025 - present",
  },
] as const;

export const projectsData = [
  {
    title: "ncdr",
    description:
      "This is a small project i did with caesar cipher encoding. I added a unique feature callled random mode what does it do? husshh🤫",
    tags: ["React", "Next.js", "Tailwind"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Friendly Draw",
    description:
      "A excalidraw like applications with extra suprising features 🤔. Under construction rn.....",
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind",
      "Redux",
      "TurboRepo",
      "WebSockets",
    ],
    imageUrl: underconst,
  },
  {
    title: "Personal Potfolio",
    description: "Just this site 😉",
    tags: ["React", "Next.js", "Tailwind", "Framer"],
    imageUrl: portimag,
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
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
  "Rust",
  "Solidity",
  "Ether/Web3.js",
  "C",
  "C++",
  "Java",
  "SQL",
  "AWS",
  "EC2",
  "ZenML",
  "Docker",
  "Nginx",
  "Linux",
  "GitHub",
  "Vercel",
] as const;
