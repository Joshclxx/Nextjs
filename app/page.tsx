"use client";

import { motion, useSpring, useScroll } from "motion/react";
import Camp from "@/components/Camp";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import React from "react";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 10,
          originX: 0,
          backgroundColor: "#284AA6",
        }}
      />

      <div className="bg-gradient-to-r from-[#239EAB] to-[#43B8C6]">
        <Hero />
        <Camp />
        <Guide />
        <Features />
        <GetApp />
      </div>
    </>
  );
}
