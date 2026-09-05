"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BeautyCarousel from "@/components/home/BeautyCarousel";
import { motion } from "framer-motion";

interface BeautyItem {
  title: string;
  category: string;
  image: string;
  href: string;
}

interface BeautySectionProps {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  items: BeautyItem[];
  reverse?: boolean;
}

export default function BeautySection({
  eyebrow,
  title,
  description,
  href,
  items,
  reverse = false,
}: BeautySectionProps) {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-16"
    >
      <div className={`mb-7 flex flex-col gap-5 sm:items-end sm:justify-between ${reverse ? "sm:flex-row-reverse" : "sm:flex-row"}`}>
        <div className="max-w-xl">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#c9828d]">
            {eyebrow}
          </p>

          <h2 className="font-serif text-[34px] leading-[1.1] tracking-[-0.02em] text-[#292526] sm:text-5xl">
            {title}
          </h2>

          <p className="mt-4 text-[15px] leading-relaxed text-[#77706f]">
            {description}
          </p>
        </div>

        <Link
            href={href}
            className="group shrink-0 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#2B1B20] transition-colors hover:text-[#7A0B2E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A0B2E] focus-visible:ring-offset-4"
          >
            See all
            <ArrowRight size={15} strokeWidth={1.8} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
      </div>

      <BeautyCarousel items={items} />

    </motion.section>
  );
}