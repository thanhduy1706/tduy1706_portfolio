"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

/**
 * About component renders a section with information about the author.
 * Uses motion animation for section visibility and a custom hook for section view management.
 *
 * @returns {JSX.Element} A section element with a heading and two paragraphs about personal and professional interests.
 */
export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      id="about"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I enrolled in a coding bootcamp on YouTube and learned{" "}
        <span className="font-medium">frontend web development</span>. I{" "}
        <span className="underline">love</span> the feeling of finally figuring
        out a solution to a problem. My core stack is{" "}
        <span className="font-medium">React, Next.js, and Node.js</span>. I am
        also familiar with TypeScript. I am always looking to learn new
        technologies. I am currently looking for a{" "}
        <span className="font-medium">intern position</span> as a Frontend
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy watching
        movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about <span className="font-medium">Back-end</span>. I'm also
        learning how to build a mobile application.
      </p>
    </motion.section>
  );
}
