"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, ArrowRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

type LookItem = {
  id: string;
  image: string;
  alt: string;
  objectPosition?: string;
};

type LookCategory = {
  id: string;
  label: string;
  href: string;
  tagline: string; // short sentence describing the category
  items: LookItem[];
};

const categories: LookCategory[] = [
  {
    id: "nail-art",
    label: "Nail Art",
    href: "/nails",
    tagline: "Chrome finishes, floral details & modern French tips.",
    items: [
      { id: "pink-chrome", alt: "Pink chrome nail art", image: "/images/nails/pink-chrome-v3.jpg" },
      { id: "lavender-marble", alt: "Lavender marble nail art", image: "/images/nails/lavender-marble-nails.jpg" },
      { id: "french-tips", alt: "Minimal French tip nails", image: "/images/nails/french-nails-v2.jpg" },
      { id: "rose-quartz", alt: "Rose quartz nails", image: "/images/nails/rose-quartz-nails.jpg" },
      { id: "floral-nails", alt: "Floral nail art", image: "/images/nails/floral-nails-v2.jpg" },
    ],
  },
  {
    id: "makeup",
    label: "Makeup",
    href: "/makeup",
    tagline: "Smokey glam, soft dewy looks & bridal beauty.",
    items: [
      { id: "smokey-eyes", alt: "Smokey eye makeup", image: "/images/makeup/smokey-eyes.jpg", objectPosition: "center 20%" },
      { id: "espresso-glam", alt: "Espresso soft glam makeup", image: "/images/makeup/espresso-makeup.jpg" },
      { id: "fairy-makeup", alt: "Ethereal soft glam makeup", image: "/images/makeup/fairy-makeup.jpg" },
      { id: "bridal-makeup", alt: "Indian bridal makeup", image: "/images/makeup/bridal-makeup.jpg", objectPosition: "center 18%" },
      { id: "blush-saree", alt: "Blush bridal saree makeup", image: "/images/makeup/blush-bridal-saree.jpg", objectPosition: "center 18%" },
    ],
  },
  {
    id: "hairstyles",
    label: "Hairstyles",
    href: "/hairstyles",
    tagline: "Effortless waves, elegant updos & bridal braids.",
    items: [
      { id: "easy-waves", alt: "Easy waves hairstyle", image: "/images/hair/easy-waves-v2.jpg" },
      { id: "braided-style", alt: "Soft braided hairstyle", image: "/images/hair/braids-v2.jpg" },
      { id: "long-hair", alt: "Elegant long hairstyle", image: "/images/hair/long-hair-v2.jpg" },
      { id: "party-updo", alt: "Party updo hairstyle", image: "/images/hair/party-hair.jpg" },
      { id: "half-up", alt: "Bridal half-up hairstyle", image: "/images/hair/Elegant Half-Up Bridal Hairstyle with Soft Waves for Weddings.jpg", objectPosition: "center 20%" },
    ],
  },
  {
    id: "fashion",
    label: "Fashion",
    href: "/articles",
    tagline: "Traditional looks, saree drapes & festive styling.",
    items: [
      { id: "blush-saree-fashion", alt: "Blush bridal saree fashion", image: "/images/makeup/blush-bridal-saree.jpg", objectPosition: "center 18%" },
      { id: "bridal-style", alt: "Bridal fashion look", image: "/images/makeup/bridal-makeup.jpg", objectPosition: "center 18%" },
      { id: "rose-bun-fashion", alt: "Rose bridal bun look", image: "/images/makeup/bridal-bun.jpg", objectPosition: "center 18%" },
      { id: "soft-glam-fashion", alt: "Soft glam fashion look", image: "/images/makeup/espresso-makeup.jpg" },
      { id: "half-up-fashion", alt: "Elegant celebration hairstyle", image: "/images/hair/Elegant Half-Up Bridal Hairstyle with Soft Waves for Weddings.jpg", objectPosition: "center 20%" },
    ],
  },
  {
    id: "mehndi",
    label: "Mehndi",
    href: "/articles",
    tagline: "Intricate patterns, floral motifs & bridal designs.",
    items: [
      { id: "floral-pattern", alt: "Floral pattern inspiration", image: "/images/nails/floral-nails-v2.jpg" },
      { id: "rose-pattern", alt: "Rose detail inspiration", image: "/images/nails/rose-quartz-nails.jpg" },
      { id: "marble-pattern", alt: "Marble pattern inspiration", image: "/images/nails/lavender-marble-nails.jpg" },
      { id: "blush-pattern", alt: "Blush floral detail", image: "/images/nails/blush-floral-nails.jpg" },
      { id: "french-pattern", alt: "Fine line detail inspiration", image: "/images/nails/french-nails-v2.jpg" },
    ],
  },
  {
    id: "bridal",
    label: "Bridal",
    href: "/articles",
    tagline: "Dream wedding beauty — makeup, hair & jewellery.",
    items: [
      { id: "bridal-face", alt: "Bridal beauty inspiration", image: "/images/makeup/bridal-makeup.jpg", objectPosition: "center 18%" },
      { id: "bridal-saree", alt: "Bridal saree inspiration", image: "/images/makeup/blush-bridal-saree.jpg", objectPosition: "center 18%" },
      { id: "bridal-bun-look", alt: "Rose bridal bun hairstyle", image: "/images/makeup/bridal-bun.jpg", objectPosition: "center 18%" },
      { id: "bridal-half-up", alt: "Half-up bridal hairstyle", image: "/images/hair/Elegant Half-Up Bridal Hairstyle with Soft Waves for Weddings.jpg", objectPosition: "center 20%" },
      { id: "bridal-braid", alt: "Traditional bridal braid", image: "/images/hair/Elegant Traditional Half-Up Braided Hairstyle for Weddings & Festive Celebrations \u2728.jpg", objectPosition: "center 20%" },
    ],
  },
];

const AUTO_ADVANCE_MS = 3800;
const PAUSE_AFTER_INTERACTION_MS = 6000;

export default function BeautyDiscovery() {
  const [activeCategoryId, setActiveCategoryId] = useState(categories[0].id);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [savedIds, setSavedIds] = useState<Set<string>>(() => new Set());
  const reducedMotion = useReducedMotion();

  const activeCategory = categories.find((c) => c.id === activeCategoryId) ?? categories[0];
  const activeImage = activeCategory.items[activeImageIndex];

  // ── Auto-advance timer ──
  const autoTimer = useRef<ReturnType<typeof setInterval> | null>(null);
  const pauseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useRef(false);
  const isPaused = useRef(false);

  const advanceImage = useCallback(() => {
    setDirection(1);
    setActiveImageIndex((prev) => {
      const cat = categories.find((c) => c.id === activeCategoryId) ?? categories[0];
      return (prev + 1) % cat.items.length;
    });
  }, [activeCategoryId]);

  const startAutoAdvance = useCallback(() => {
    if (autoTimer.current) clearInterval(autoTimer.current);
    isPaused.current = false;
    autoTimer.current = setInterval(() => {
      if (!isInView.current || isPaused.current) return;
      advanceImage();
    }, AUTO_ADVANCE_MS);
  }, [advanceImage]);

  const pauseAutoAdvance = useCallback(() => {
    isPaused.current = true;
    if (pauseTimer.current) clearTimeout(pauseTimer.current);
    pauseTimer.current = setTimeout(() => {
      isPaused.current = false;
    }, PAUSE_AFTER_INTERACTION_MS);
  }, []);

  // IntersectionObserver — only auto-advance when visible
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isInView.current = entry.isIntersecting;
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    startAutoAdvance();
    return () => {
      observer.disconnect();
      if (autoTimer.current) clearInterval(autoTimer.current);
      if (pauseTimer.current) clearTimeout(pauseTimer.current);
    };
  }, [startAutoAdvance]);

  // Reset auto-advance when category changes
  useEffect(() => {
    startAutoAdvance();
  }, [activeCategoryId, startAutoAdvance]);

  const selectCategory = (id: string) => {
    setActiveCategoryId(id);
    setActiveImageIndex(0);
    setDirection(1);
    pauseAutoAdvance();
  };

  const selectImage = (index: number) => {
    setDirection(index >= activeImageIndex ? 1 : -1);
    setActiveImageIndex(index);
    pauseAutoAdvance();
  };

  const toggleSaved = (id: string) => {
    setSavedIds((current) => {
      const next = new Set(current);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <motion.section
      ref={sectionRef}
      aria-labelledby="find-a-look-title"
      initial={reducedMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="overflow-hidden bg-[#FFF9F6] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 xl:gap-20 lg:items-start">
          
          {/* Left Column: Header & Tabs */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <header className="max-w-2xl">
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#7A0B2E]">Find a look</p>
              <h2 id="find-a-look-title" className="mt-4 font-serif text-[43px] leading-[0.94] tracking-[-0.045em] text-[#2B1B20] sm:text-5xl lg:text-[62px]">
                Find the look <span className="block italic">that feels like you.</span>
              </h2>
              <p className="mt-5 max-w-xl text-[14px] leading-7 text-[#6F6267] sm:text-[15px]">
                Explore beauty inspiration across nails, makeup, hair, fashion, mehndi and bridal looks.
              </p>
            </header>
            <div className="mt-10 lg:mt-8">
              {/* Category tabs */}
              <div role="tablist" aria-label="Beauty categories" className="-mx-5 overflow-x-auto px-5 [scrollbar-width:none] sm:mx-0 sm:px-0">
                <div className="flex w-max min-w-full gap-6 border-b border-[#EADFDB] pr-5 sm:gap-8 lg:flex-col lg:gap-4 lg:border-b-0 lg:border-l lg:pl-6 lg:pr-0 lg:w-auto">
                  {categories.map((category) => {
                    const active = category.id === activeCategoryId;
                    return (
                      <button
                        key={category.id}
                        id={`tab-${category.id}`}
                        role="tab"
                        type="button"
                        aria-selected={active}
                        aria-controls="find-a-look-panel"
                        tabIndex={active ? 0 : -1}
                        onClick={() => selectCategory(category.id)}
                        onKeyDown={(event) => {
                          if (event.key !== "ArrowRight" && event.key !== "ArrowLeft" && event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
                          event.preventDefault();
                          const index = categories.findIndex((item) => item.id === category.id);
                          const nextIndex = (event.key === "ArrowRight" || event.key === "ArrowDown") ? (index + 1) % categories.length : (index - 1 + categories.length) % categories.length;
                          selectCategory(categories[nextIndex].id);
                          document.getElementById(`tab-${categories[nextIndex].id}`)?.focus();
                        }}
                        className={`relative min-h-11 shrink-0 pb-3 text-[12px] font-semibold uppercase tracking-[0.13em] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A0B2E] focus-visible:ring-offset-4 lg:text-left lg:py-2 lg:pb-2 lg:min-h-0 ${active ? "text-[#7A0B2E]" : "text-[#6F6267] hover:text-[#2B1B20]"}`}
                      >
                        {category.label}
                        {active && <motion.span layoutId="find-a-look-active-tab" className="absolute inset-x-0 -bottom-px h-px bg-[#7A0B2E] lg:inset-y-0 lg:-left-6 lg:right-auto lg:bottom-auto lg:h-full lg:w-px" transition={{ duration: 0.25 }} />}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Image Panel */}
          <div className="lg:col-span-6 lg:col-start-7 mt-12 lg:mt-0">
            <div id="find-a-look-panel" role="tabpanel" aria-labelledby={`tab-${activeCategory.id}`}>
              {/* ── Row: tagline (left) + See All (right) ── */}
              <div className="flex items-center justify-between gap-4 mb-4 lg:mb-6 lg:justify-end">
                <p className="text-[13px] leading-relaxed text-[#6F6267] sm:text-[14px] lg:hidden">
                  {activeCategory.tagline}
                </p>
                <Link
                  href={activeCategory.href}
                  className="group shrink-0 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.15em] text-[#2B1B20] transition-colors duration-300 hover:text-[#7A0B2E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A0B2E] focus-visible:ring-offset-4"
                >
                  See all
                  <ArrowRight size={14} strokeWidth={2} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>


            {/* ── Image panel ── */}
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[780px] lg:max-w-[480px] lg:h-[clamp(500px,70vh,700px)] lg:aspect-auto overflow-hidden rounded-[24px] bg-[#FDF0F2] sm:rounded-[28px]">
              <AnimatePresence initial={false} mode="wait" custom={direction}>
                <motion.div
                  key={activeImage.id}
                  custom={direction}
                  initial={reducedMotion ? false : { opacity: 0, x: direction * 34 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={reducedMotion ? undefined : { opacity: 0, x: direction * -24 }}
                  transition={{ duration: reducedMotion ? 0 : 0.52, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <Image src={activeImage.image} alt={activeImage.alt} fill priority={activeCategoryId === "nail-art" && activeImageIndex === 0} sizes="(max-width: 1024px) calc(100vw - 40px), 480px" className="object-cover" style={{ objectPosition: activeImage.objectPosition ?? "center" }} />
                </motion.div>
              </AnimatePresence>

              {/* Save button */}
              <button type="button" onClick={() => toggleSaved(activeImage.id)} aria-label={savedIds.has(activeImage.id) ? "Remove image from saved" : "Save image"} aria-pressed={savedIds.has(activeImage.id)} className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#FFF9F6]/92 text-[#2B1B20] shadow-sm transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A0B2E]">
                <Heart size={18} strokeWidth={1.7} fill={savedIds.has(activeImage.id) ? "#7A0B2E" : "none"} className={savedIds.has(activeImage.id) ? "text-[#7A0B2E]" : ""} />
              </button>

              {/* Counter — bottom left */}
              <div className="absolute left-5 bottom-5 z-10 sm:left-6 sm:bottom-6">
                <span className="text-[10px] font-semibold tracking-[0.2em] text-[#FFF9F6]">{String(activeImageIndex + 1).padStart(2, "0")} / {String(activeCategory.items.length).padStart(2, "0")}</span>
              </div>
            </div>

            {/* ── Pagination dots — centered below the image ── */}
            <div className="flex items-center justify-center gap-2.5 pt-5" role="tablist" aria-label={`${activeCategory.label} images`}>
              {activeCategory.items.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => selectImage(index)}
                  role="tab"
                  aria-selected={index === activeImageIndex}
                  aria-label={`Show image ${index + 1}`}
                  className={`rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A0B2E] focus-visible:ring-offset-2 ${
                    index === activeImageIndex
                      ? "w-7 h-2.5 bg-[#7A0B2E]"
                      : "w-2.5 h-2.5 bg-[#d6ccc9] hover:bg-[#c9828d]"
                  }`}
                />
              ))}
            </div>

            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}