"use client";

import { motion, AnimatePresence } from "framer-motion";
import CategorySection from "./CategorySection";
import { useState, useEffect } from "react";

// Rotating headings and soft colors
const heroHeadings = [
  { text: "Wellness", color: "#6B5B95" }, // Muted Lavender variant
  { text: "Stress relief", color: "#4B8673" },    // Sage Green
  { text: "Better sleep", color: "#4F46E5" },    // Soft Indigo
  { text: "Stronger Immunity.", color: "#B45309" },   // Warm Amber
  { text: "Radiant Beauty ", color: "#DB2777" },       // Dusty Rose
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % heroHeadings.length),
      3500
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col items-center text-center px-6 md:px-16 py-10 bg-white">
      {/* Headline + rotating phrase */}
      <div className="mb-4">
        <AnimatePresence mode="wait">
          <motion.h1
            key={heroHeadings[index].text}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold leading-tight"
            style={{ color: heroHeadings[index].color }}
          >
            {heroHeadings[index].text} 
          </motion.h1>
        </AnimatePresence>
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">Simplified</h1>
      </div>

      {/* Subheading */}
      <p className="max-w-2xl text-lg text-gray-700 mb-8">
        Clean, clinically formulated supplements and beauty products designed for everyday confidence.
      </p>

      {/* CTA Button */}
      {/* <button className="px-8 py-3 rounded-full bg-[#C8A2C8] text-white text-lg shadow-md hover:bg-[#a87fa8] transition-colors mb-12">
        Shop Now
      </button> */}
  <CategorySection/>
      {/* Product Mockup */}
      
 {/* <div className="relative w-full h-[600px] md:h-[700px] "> */}
        {/* <img
          src="/images/hero-2.jpg"
          alt="GlowRx Products"
          className="w-full h-full object-cover rounded-xl"
        /> */}
        {/* Overlay for readability */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-transparent"></div>
      </div> */}

    </section>
  );
}
