import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/smart scheduler.png";
import underconst from "@/public/paddle.jpeg";
import portimag from "@/public/supermarket.webp";

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
    title: "Vidya Mandir Senior Secondary School",
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
] as const;

export const projectsData = [
  {
    title: "Study Scheduler",
    description:
      "A console-based C++ tool to help students plan, track, and manage study hours for each subject. It shows real-time progress and even tells you what’s still pending. Think of it as your nerdy productivity buddy. 😄",
    tags: ["C++"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Paddle and Ball",
    description:
      "A simple Python game where you control a paddle to keep the ball bouncing. Built with Pygame, it's smooth, fast, and fun to play.",
    tags: ["Python", "Pygame"],
    imageUrl: underconst,
  },
  {
    title: "Supermarket Bill Generator",
    description:
      "An array of python programs designed for generating supermarket bills for different products",
    tags: ["Python"],
    imageUrl: portimag,
  },
] as const;

export const skillsData = [
  "C",
  "C++",
  "Java (Basics)",
  "Python (Basics)",
  "SQL",
  "HTML5",
  "CSS3",
  "JavaScript",
  "Java",
  "Git/Github",
  "Visual Studio Code",
  "MySQL",
  "Linux (Basics)",
  "Team Leadership",
  "Communication",
  "Problem Solving",
  "Collaboration",
] as const;
