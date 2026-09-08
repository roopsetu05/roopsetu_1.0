"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, Search, Heart, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
  { name: "Discover", href: "/discover" },
  { name: "Categories", href: "/categories" },
  { name: "Shop", href: "/shop" },
  { name: "Journal", href: "/journal" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Close menu/search on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setIsSearchOpen(false);
  }, [pathname]);

  return (
    <header
      className="sticky top-0 z-50 bg-[#FFF9F6]/98 backdrop-blur-sm border-b border-[#eadfdb]"
      role="banner"
    >
      <div className="mx-auto flex h-[76px] lg:h-[80px] max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:px-16">

        {/* ── LEFT ZONE ── */}
        <div className="flex flex-1 items-center justify-start">
          {/* Mobile Hamburger */}
          <button
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
              if (isSearchOpen) setIsSearchOpen(false);
            }}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            className="md:hidden flex h-10 w-10 items-center justify-start text-[#2B1B20] hover:text-[#7A0B2E] transition-colors focus-visible:outline-none"
          >
            {isMenuOpen
              ? <X size={24} strokeWidth={1.5} />
              : <Menu size={24} strokeWidth={1.5} />}
          </button>

          {/* Desktop Logo */}
          <Link
            href="/"
            className="hidden md:flex shrink-0 items-center transition-opacity hover:opacity-75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A0B2E] rounded"
            aria-label="RoopSetu — Home"
          >
            <Image
              src="/images/roopsetu-logo-perfect.png"
              alt="RoopSetu"
              width={160}
              height={50}
              className="w-[148px] h-auto object-contain"
              priority
            />
          </Link>
        </div>

        {/* ── CENTER ZONE ── */}
        <div className="flex shrink-0 items-center justify-center">
          {/* Mobile Logo */}
          <Link
            href="/"
            className="md:hidden shrink-0 flex items-center justify-center transition-opacity hover:opacity-75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A0B2E] rounded"
            aria-label="RoopSetu — Home"
          >
            <Image
              src="/images/roopsetu-logo-perfect.png"
              alt="RoopSetu"
              width={120}
              height={40}
              className="w-[120px] h-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center gap-8 lg:gap-10"
            aria-label="Main navigation"
          >
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group relative text-[14px] font-medium tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A0B2E] rounded px-1
                    ${isActive
                      ? "text-[#7A0B2E]"
                      : "text-[#2B1B20] hover:text-[#7A0B2E]"
                    }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-[1.5px] transition-all duration-300 ease-out bg-[#7A0B2E]
                      ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                  />
                </Link>
              );
            })}
          </nav>
        </div>

        {/* ── RIGHT ZONE ── */}
        <div className="flex flex-1 items-center justify-end gap-2 sm:gap-3">
          <button
            onClick={() => {
              setIsSearchOpen(!isSearchOpen);
              if (isMenuOpen) setIsMenuOpen(false);
            }}
            aria-label={isSearchOpen ? "Close search" : "Search"}
            aria-expanded={isSearchOpen}
            aria-controls="search-panel"
            className="flex h-10 w-10 items-center justify-center rounded-full text-[#2B1B20] hover:text-[#7A0B2E] hover:bg-[#FDF0F2] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A0B2E]"
          >
            {isSearchOpen
              ? <X size={20} strokeWidth={1.5} />
              : <Search size={20} strokeWidth={1.5} />}
          </button>

          <Link
            href="/saved"
            aria-label="Saved inspiration"
            className="flex h-10 w-10 items-center justify-center rounded-full text-[#2B1B20] hover:text-[#7A0B2E] hover:bg-[#FDF0F2] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A0B2E]"
          >
            <Heart size={20} strokeWidth={1.5} />
          </Link>
        </div>
      </div>

      {/* Search Panel */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            id="search-panel"
            role="search"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="absolute top-full left-0 right-0 bg-[#FFF9F6] border-b border-[#eadfdb] shadow-[0_8px_32px_-8px_rgba(43,27,32,0.08)] z-50 overflow-hidden"
          >
            <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16 py-5 flex items-center gap-4">
              <Search className="text-[#7A0B2E] shrink-0" size={20} strokeWidth={1.5} />
              <input
                type="search"
                placeholder="Search beauty inspiration, looks, tutorials..."
                className="w-full bg-transparent border-none outline-none text-[#2B1B20] placeholder:text-[#6F6267] font-serif text-[20px] lg:text-[22px]"
                autoFocus
                aria-label="Search beauty inspiration"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-label="Navigation menu"
            aria-modal="true"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="md:hidden absolute top-full left-0 right-0 bg-[#FFF9F6] z-40 border-t border-[#eadfdb] shadow-[0_16px_40px_-8px_rgba(43,27,32,0.12)]"
            style={{ minHeight: "calc(100vh - 76px)" }}
          >
            <nav
              className="flex flex-col px-6 pt-8 pb-12 gap-1"
              aria-label="Mobile navigation"
            >
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                    className={`font-serif text-[36px] leading-tight font-medium py-3 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A0B2E] rounded px-1
                      ${isActive ? "text-[#7A0B2E]" : "text-[#2B1B20] hover:text-[#7A0B2E]"}`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}