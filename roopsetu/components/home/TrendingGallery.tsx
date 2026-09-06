"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { trendingLooks } from "@/data/trending";
import TrendingCard from "@/components/home/TrendingCard";

export default function TrendingGallery() {
  const reducedMotion = useReducedMotion();

  // Animation variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: reducedMotion ? 0 : 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const, // Custom editorial ease out
      },
    },
  };

  return (
    <section className="bg-[#FDF0F2] py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        
        {/* ── Section Header ── */}
        <header className="mb-12 flex flex-col gap-6 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.24em] text-[#2B1B20]">
              Trending on RoopSetu
            </p>
            <h2 className="font-serif text-[42px] leading-[1] tracking-[-0.03em] text-[#7A0B2E] sm:text-5xl lg:text-[56px]">
              Looks worth <span className="italic">saving.</span>
            </h2>
            <p className="mt-5 max-w-md text-[14px] leading-relaxed text-[#2B1B20]/80 sm:text-[15px]">
              A curated collection of beauty inspiration, from everyday details to statement looks.
            </p>
          </div>

          <Link
            href="/articles"
            className="group shrink-0 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.15em] text-[#2B1B20] transition-colors duration-300 hover:text-[#7A0B2E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A0B2E] focus-visible:ring-offset-4"
          >
            Explore all
            <ArrowRight
              size={15}
              strokeWidth={2}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </header>

        {/* ── Masonry Gallery ── */}
        {/* We use CSS columns for a lightweight masonry layout. 
            Mobile: 2 columns, Tablet: 3 columns, Desktop: 4 columns. */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="columns-2 gap-3 sm:columns-3 sm:gap-5 lg:columns-4 lg:gap-6"
        >
          {trendingLooks.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="mb-3 inline-block w-full break-inside-avoid sm:mb-5 lg:mb-6"
            >
              <TrendingCard item={item} priority={index < 4} />
            </motion.div>
          ))}
        </motion.div>
        
        {/* ── Load More / Footer ── */}
        <div className="mt-16 flex justify-center sm:mt-20">
          <Link
            href="/articles"
            className="inline-flex items-center justify-center rounded-full border border-[#EADFDB] bg-white px-8 py-3.5 text-[12px] font-bold uppercase tracking-[0.14em] text-[#2B1B20] shadow-sm transition-all duration-300 hover:border-[#7A0B2E] hover:bg-[#7A0B2E] hover:text-white hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A0B2E] focus-visible:ring-offset-4"
          >
            See more inspiration
          </Link>
        </div>

      </div>
    </section>
  );
}
