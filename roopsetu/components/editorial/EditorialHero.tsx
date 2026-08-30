'use client';

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    }
  }
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function EditorialHero() {
  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="w-full flex flex-col items-center mb-16"
    >
      {/* Category Badge */}
      <motion.div variants={fadeUp} className="mb-4">
        <span className="inline-block px-4 py-1.5 bg-[#f5e6e8] text-gray-800 text-[11px] font-bold tracking-[0.25em] uppercase rounded-full">
          Nails
        </span>
      </motion.div>

      {/* Article Title */}
      <motion.h1 
        variants={fadeUp} 
        className="text-4xl md:text-5xl lg:text-[4rem] font-medium font-playfair text-[#111111] text-center leading-[1.15] mb-5 max-w-4xl px-4 tracking-tight"
      >
        4 Stunning Nail Designs You Need to Try This Season
      </motion.h1>

      {/* Author Metadata */}
      <motion.div 
        variants={fadeUp}
        className="flex items-center justify-center gap-3 mb-6 font-sans text-sm text-[#666666] tracking-wide"
      >
        <span>By <strong className="font-semibold text-[#111111]">Team RoopSetu</strong> &bull; August 2026 &bull; 4 min read</span>
      </motion.div>

      {/* The Hook */}
      <motion.p 
        variants={fadeUp}
        className="text-[17px] md:text-xl text-[#444444] text-center max-w-3xl leading-[1.8] font-sans mb-8 px-4"
      >
        Life is too short for boring manicures. Whether you are looking for an everyday minimalist vibe or a bold statement for the weekend, we’ve rounded up the only four nail art trends you need to know about right now—plus exactly how to recreate them at home.
      </motion.p>

      {/* Hero Image */}
      <motion.div 
        variants={fadeUp}
        className="relative w-full max-w-3xl aspect-square sm:aspect-video rounded-none sm:rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.06)] mb-2"
      >
        <Image 
          src="/images/nails/pink-chrome-v3.jpg" 
          alt="Soft Pink Chrome Nails" 
          fill 
          className="object-cover object-center"
          priority
          sizes="(max-width: 768px) 100vw, 800px"
        />
      </motion.div>
    </motion.div>
  );
}
