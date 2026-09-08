"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Heart, X, ExternalLink, Sparkles, Filter } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { CategoryInfo, CategoryItem, CATEGORY_ITEMS } from "@/data/categoryData";

type CategoryGalleryProps = {
  category: CategoryInfo;
};

export default function CategoryGallery({ category }: CategoryGalleryProps) {
  const [selectedTag, setSelectedTag] = useState<string>("All");
  const [savedIds, setSavedIds] = useState<Set<string>>(() => new Set());
  const [activeItemModal, setActiveItemModal] = useState<CategoryItem | null>(null);
  const reducedMotion = useReducedMotion();

  // Filter items matching this category slug and selected tag
  const categoryItems = CATEGORY_ITEMS.filter((item) => item.categorySlug === category.slug);
  const filteredItems = selectedTag === "All"
    ? categoryItems
    : categoryItems.filter((item) => item.tag.toLowerCase() === selectedTag.toLowerCase());

  const toggleSave = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setSavedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: reducedMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <main className="min-h-screen bg-[#FFF9F6] pb-24 pt-8">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Breadcrumb & Navigation */}
        <div className="mb-8 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-wider text-[#6F6267] transition-colors hover:text-[#7A0B2E]"
          >
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </Link>

          <span className="rounded-full bg-[#FDF0F2] px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#7A0B2E]">
            {filteredItems.length} {filteredItems.length === 1 ? "Look" : "Looks"}
          </span>
        </div>

        {/* Hero Banner Header */}
        <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-r from-[#2B1B20] via-[#4A1525] to-[#7A0B2E] p-8 text-white sm:p-12 lg:p-16">
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.24em] text-[#FDF0F2] backdrop-blur-md">
              <Sparkles size={12} className="text-[#EADFDB]" />
              {category.title}
            </div>

            <h1 className="mt-4 font-serif text-[42px] leading-[1.02] tracking-[-0.03em] sm:text-5xl lg:text-[60px]">
              {category.title}
            </h1>

            <p className="mt-4 text-[16px] leading-relaxed text-[#EADFDB] sm:text-[18px]">
              {category.subtitle}
            </p>

            <p className="mt-3 text-[14px] leading-relaxed text-white/70 sm:text-[15px]">
              {category.description}
            </p>
          </div>

          {/* Decorative background image blur */}
          <div className="absolute right-0 top-0 hidden h-full w-1/2 opacity-20 sm:block">
            <Image
              src={category.bannerImage}
              alt=""
              fill
              className="object-cover blur-sm"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#2B1B20] via-[#4A1525]/80 to-transparent" />
          </div>
        </div>

        {/* Tag Filter Navigation */}
        <div className="mt-10 flex flex-wrap items-center gap-2.5 border-b border-[#EADFDB] pb-6 sm:gap-3">
          <div className="mr-2 flex items-center gap-1.5 text-[12px] font-bold uppercase tracking-[0.15em] text-[#6F6267]">
            <Filter size={14} />
            <span>Filter:</span>
          </div>

          {category.tags.map((tag) => {
            const isActive = selectedTag.toLowerCase() === tag.toLowerCase();
            return (
              <button
                key={tag}
                type="button"
                onClick={() => setSelectedTag(tag)}
                className={`rounded-full px-4 py-2 text-[12px] font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A0B2E] ${
                  isActive
                    ? "bg-[#7A0B2E] text-white shadow-sm"
                    : "bg-[#FDF0F2] text-[#2B1B20] hover:bg-[#EADFDB]"
                }`}
              >
                {tag}
              </button>
            );
          })}
        </div>

        {/* Image Grid */}
        {filteredItems.length === 0 ? (
          <div className="my-20 text-center">
            <p className="font-serif text-[24px] text-[#2B1B20]">No looks found for &quot;{selectedTag}&quot;</p>
            <p className="mt-2 text-[14px] text-[#6F6267]">Try selecting another filter tag above.</p>
            <button
              onClick={() => setSelectedTag("All")}
              className="mt-6 rounded-full bg-[#7A0B2E] px-6 py-2.5 text-[12px] font-bold uppercase tracking-[0.15em] text-white"
            >
              Show all looks
            </button>
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
          >
            {filteredItems.map((item) => {
              const isSaved = savedIds.has(item.id);
              return (
                <motion.article
                  key={item.id}
                  variants={itemVariants}
                  onClick={() => setActiveItemModal(item)}
                  className="group relative cursor-pointer overflow-hidden rounded-[20px] bg-white border border-[#EADFDB] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  {/* Image Container */}
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#FDF0F2]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      style={{ objectPosition: item.objectPosition ?? "center" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-40" />

                    {/* Tag badge */}
                    <div className="absolute left-4 top-4 z-10">
                      <span className="rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#2B1B20] backdrop-blur-sm shadow-xs">
                        {item.tag}
                      </span>
                    </div>

                    {/* Save heart button */}
                    <button
                      type="button"
                      onClick={(e) => toggleSave(e, item.id)}
                      aria-label={isSaved ? "Remove from saved" : "Save look"}
                      className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#2B1B20] shadow-xs backdrop-blur-sm transition-transform hover:scale-110"
                    >
                      <Heart
                        size={17}
                        strokeWidth={1.8}
                        fill={isSaved ? "#7A0B2E" : "none"}
                        className={isSaved ? "text-[#7A0B2E]" : "text-[#2B1B20]"}
                      />
                    </button>

                    {/* Card Copy overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                      <h3 className="font-serif text-[22px] leading-snug tracking-tight text-white drop-shadow-xs">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-[13px] text-white/80 line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        )}

        {/* Lightbox / Detail Modal */}
        <AnimatePresence>
          {activeItemModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveItemModal(null)}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-xs sm:p-6"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                onClick={(e) => e.stopPropagation()}
                className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-[24px] bg-[#FFF9F6] shadow-2xl md:flex-row"
              >
                {/* Modal Close Button */}
                <button
                  type="button"
                  onClick={() => setActiveItemModal(null)}
                  aria-label="Close modal"
                  className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white transition-transform hover:scale-105"
                >
                  <X size={20} />
                </button>

                {/* Modal Image */}
                <div className="relative aspect-[4/5] w-full bg-[#FDF0F2] md:w-1/2 md:aspect-auto">
                  <Image
                    src={activeItemModal.image}
                    alt={activeItemModal.title}
                    fill
                    className="object-cover"
                    style={{ objectPosition: activeItemModal.objectPosition ?? "center" }}
                  />
                </div>

                {/* Modal Content */}
                <div className="flex w-full flex-col justify-between p-6 sm:p-8 md:w-1/2 overflow-y-auto max-h-[50vh] md:max-h-none">
                  <div>
                    <span className="inline-block rounded-full bg-[#FDF0F2] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#7A0B2E]">
                      {activeItemModal.tag}
                    </span>

                    <h2 className="mt-3 font-serif text-[30px] font-medium leading-tight text-[#2B1B20] sm:text-[34px]">
                      {activeItemModal.title}
                    </h2>

                    <p className="mt-4 text-[14px] leading-relaxed text-[#6F6267] sm:text-[15px]">
                      {activeItemModal.description}
                    </p>

                    {activeItemModal.details && (
                      <div className="mt-6 border-t border-[#EADFDB] pt-6">
                        <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#2B1B20]">
                          Look Details
                        </h4>
                        <ul className="mt-3 space-y-2">
                          {activeItemModal.details.map((detail, index) => (
                            <li key={index} className="flex items-center gap-2 text-[14px] text-[#6F6267]">
                              <span className="h-1.5 w-1.5 rounded-full bg-[#7A0B2E]" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <button
                      type="button"
                      onClick={(e) => toggleSave(e, activeItemModal.id)}
                      className={`flex flex-1 items-center justify-center gap-2 rounded-full py-3 text-[12px] font-bold uppercase tracking-[0.14em] transition-colors ${
                        savedIds.has(activeItemModal.id)
                          ? "bg-[#7A0B2E] text-white"
                          : "border border-[#EADFDB] bg-white text-[#2B1B20] hover:border-[#7A0B2E]"
                      }`}
                    >
                      <Heart size={16} fill={savedIds.has(activeItemModal.id) ? "currentColor" : "none"} />
                      <span>{savedIds.has(activeItemModal.id) ? "Saved" : "Save Look"}</span>
                    </button>

                    {activeItemModal.articleHref && (
                      <Link
                        href={activeItemModal.articleHref}
                        className="flex items-center justify-center gap-2 rounded-full bg-[#2B1B20] py-3 px-5 text-[12px] font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#7A0B2E]"
                      >
                        <span>Article</span>
                        <ExternalLink size={14} />
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
