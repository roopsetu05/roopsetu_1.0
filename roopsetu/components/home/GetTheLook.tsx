"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const featuredLook = {
  category: "Nail Art",
  title: "Soft floral nails",
  description: "A delicate combination of soft tones, fine details and a glossy finish.",
  image: "/images/nails/floral-nails-v2.jpg",
  alt: "Soft floral nails inspiration",
  details: [
    { number: "01", title: "Soft nude base" },
    { number: "02", title: "Fine floral accents" },
    { number: "03", title: "Glossy finish" },
  ],
};

export default function GetTheLook() {
  const reducedMotion = useReducedMotion();

  // Animation variants
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const } },
  };

  const imageVariant = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <section className="overflow-hidden bg-[#FFF9F6] py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.header
          initial={reducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="flex flex-col items-center text-center max-w-2xl mx-auto"
        >
          <motion.p variants={fadeUpVariant} className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#7A0B2E]">
            Get the look
          </motion.p>
          <motion.h2
            variants={fadeUpVariant}
            className="mt-4 font-serif text-[43px] leading-[1.05] tracking-[-0.03em] text-[#2B1B20] sm:text-5xl lg:text-[56px]"
          >
            Recreate the inspiration.
          </motion.h2>
          <motion.p variants={fadeUpVariant} className="mt-5 max-w-xl text-[14px] leading-relaxed text-[#6F6267] sm:text-[15px]">
            Discover the details behind a look you love and find what brings it together.
          </motion.p>
        </motion.header>

        {/* Content Area */}
        <div className="mt-16 lg:mt-24 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 lg:items-center">
          {/* Image Column */}
          <motion.div
            initial={reducedMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={imageVariant}
            className="lg:col-span-6 xl:col-span-7"
          >
            <div className="relative mx-auto aspect-[3/4] sm:aspect-[4/5] lg:aspect-[4/5] xl:aspect-[3/4] w-full max-w-[500px] lg:max-w-none overflow-hidden rounded-[20px] bg-[#FDF0F2] sm:rounded-[24px]">
              <Image
                src={featuredLook.image}
                alt={featuredLook.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                style={{ objectPosition: "center" }}
              />
            </div>
          </motion.div>

          {/* Details Column */}
          <motion.div
            initial={reducedMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center max-w-[500px] mx-auto lg:max-w-none lg:mx-0 w-full"
          >
            <motion.div variants={fadeUpVariant}>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#6F6267]">The Details</p>
              <h3 className="mt-3 font-serif text-[32px] sm:text-[36px] text-[#2B1B20] leading-tight">
                {featuredLook.title}
              </h3>
              <p className="mt-4 text-[14px] sm:text-[15px] leading-relaxed text-[#6F6267]">
                {featuredLook.description}
              </p>
            </motion.div>

            <motion.div variants={fadeUpVariant} className="mt-10 sm:mt-12">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#6F6267]">What makes the look</p>
              <ul className="mt-6 flex flex-col gap-6">
                {featuredLook.details.map((detail, index) => (
                  <li key={index} className="group flex items-start gap-4">
                    <span className="text-[12px] font-medium text-[#D98AA0] pt-0.5">{detail.number}</span>
                    <span className="text-[15px] font-medium text-[#2B1B20] transition-colors duration-300 group-hover:text-[#7A0B2E]">
                      {detail.title}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeUpVariant} className="mt-12 sm:mt-16">
              <Link
                href="/articles"
                className="group inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.15em] text-[#2B1B20] transition-colors duration-300 hover:text-[#7A0B2E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A0B2E] focus-visible:ring-offset-4"
              >
                Explore the look
                <ArrowRight size={14} strokeWidth={2} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
