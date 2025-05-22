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
        I am a creative and analytical thinker who thrives on solving complex
        problems. Passionate about technology, I am constantly seeking
        innovative ways to integrate diverse functionalities into seamless
        solutions. My projects reflect my ambition to simplify users’
        experiences by combining multiple tasks into unified systems. Whether
        I’m working on{" "}
        <span className="font-medium">
          an AI model to streamline everyday services
        </span>{" "}
        or{" "}
        <span className="font-medium">
          developing a tool to enhance writing quality
        </span>
        , I approach each challenge with curiosity and determination. I value{" "}
        <span className="italic">efficiency, precision, and creativity</span> in
        my work, and I’m driven by a desire to make technology more intuitive
        and accessible for everyone.
      </p>
    </motion.section>
  );
}
