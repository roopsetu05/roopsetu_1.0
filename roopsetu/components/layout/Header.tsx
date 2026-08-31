"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Search, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
  { name: "Nails", href: "/nails" },
  { name: "Hair", href: "/hairstyles" },
  { name: "Makeup", href: "/makeup" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#fcf9f6]/95 backdrop-blur-md relative border-b border-[#eadfdb]">
      <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <Link href="/" className="shrink-0 flex items-center">
          <Image 
            src="/images/roopsetu-logo.png" 
            alt="RoopSetu" 
            width={500} 
            height={150} 
            className="w-[130px] sm:w-[160px] h-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-9 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[14px] font-medium text-[#4b4545] transition-colors hover:text-[#c9828d]"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-1">
          <button
            onClick={() => {
              setIsSearchOpen(!isSearchOpen);
              if (isMenuOpen) setIsMenuOpen(false);
            }}
            aria-label="Search RoopSetu"
            className="flex h-10 w-10 items-center justify-center rounded-full text-[#403a3a] transition hover:bg-[#f3dde0]"
          >
            {isSearchOpen ? <X size={20} strokeWidth={1.8} /> : <Search size={20} strokeWidth={1.8} />}
          </button>

          <button
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
              if (isSearchOpen) setIsSearchOpen(false);
            }}
            aria-label="Open menu"
            className="flex h-10 w-10 items-center justify-center rounded-full text-[#403a3a] transition hover:bg-[#f3dde0] md:hidden"
          >
            {isMenuOpen ? <X size={22} strokeWidth={1.8} /> : <Menu size={22} strokeWidth={1.8} />}
          </button>
        </div>
      </div>

      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-[68px] left-0 right-0 bg-white border-b border-[#eadfdb] shadow-lg z-50 overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center gap-3">
              <Search className="text-[#a96570]" size={20} />
              <input 
                type="text" 
                placeholder="Search beauty trends, articles, and inspiration..." 
                className="w-full bg-transparent border-none outline-none text-[#111111] placeholder:text-gray-400 text-[15px]"
                autoFocus
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-[68px] left-0 right-0 bg-white border-b border-[#eadfdb] shadow-xl z-40 overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-8 gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl font-playfair font-medium text-[#111111] transition-colors hover:text-[#a96570]"
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-8 mt-2 border-t border-[#f0eaea]">
                <Link
                  href="/shop-the-look"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center w-full py-3.5 text-[12px] font-bold text-white uppercase tracking-widest transition-colors bg-[#111111] rounded-full shadow-md hover:bg-[#a85a66]"
                >
                  Shop The Look
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}