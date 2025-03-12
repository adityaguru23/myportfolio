"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am a passionate developer exploring{" "}
        <span className="font-medium">
          Solana, Rust, and frontend technologies
        </span>
        . My journey started with an interest in blockchain and Web3, and I have
        been actively building decentralized applications. I enjoy working with{" "}
        <span className="font-medium">React, Next.js, and TypeScript</span>, and
        I am also learning Tailwind CSS to improve my design skills. I love the
        problem-solving aspect of programming, especially when it comes to{" "}
        <span className="italic">
          optimizing performance and writing clean code
        </span>
        . My projects include blockchain-based supply chain management, NFT
        dApps, and decentralized finance solutions. I am currently looking for
        opportunities in{" "}
        <span className="font-medium">AI and Web3 startups</span> to grow as a
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I focus on fitness,
        working towards a lean and strong physique. My workouts include{" "}
        <span className="font-medium">
          calisthenics, hypertrophy training, and mobility drills
        </span>
        . I also enjoy learning about{" "}
        <span className="font-medium">history, philosophy, and design</span> to
        enhance my creativity. My current goal is to improve my frontend skills
        and build better UI/UX for Web3 applications.
      </p>
    </motion.section>
  );
}
