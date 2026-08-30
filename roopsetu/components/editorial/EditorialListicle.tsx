'use client';

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

const sections = [
  {
    id: 'pink-chrome',
    image: '/images/nails/pink-chrome-v3.jpg',
    heading: 'The "Glass Skin" Pink Chrome Mani',
    body: 'Let’s be honest, finding that perfect everyday nail look that transitions effortlessly from aggressive laptop typing to weekend brunches is an absolute struggle. But this soft pink chrome design? It’s the ultimate aesthetic. The sheer jelly pink base gives your natural nail beds a healthy, filtered glow, while the delicate white daisy accents and fine gold swirls keep it playful. It catches the light beautifully without looking overwhelming. If you want to skip the salon trip, you can easily replicate this glass-like finish at home. The secret is layering a high-shine top coat over a finely milled champagne chrome powder.',
    products: [
      { id: '1a', name: 'Rom&nd Mood Pebble Nail (Nu Pink)', desc: 'For the sheer jelly base.', image: '/images/products/opi-v2.jpg', link: 'https://amazon.com' },
      { id: '2a', name: 'Fine Detailer Brush Set', desc: 'For crisp gold lines.', image: '/images/products/kodi-v2.jpg', link: 'https://amazon.com' },
      { id: '3a', name: 'Ultra Glossy Non-Wipe Top Coat', desc: 'For the glass finish.', image: '/images/products/beetles-v2.jpg', link: 'https://amazon.com' },
    ]
  },
  {
    id: 'french-tips',
    image: '/images/nails/french-nails-v2.jpg',
    heading: 'Modern Sage & Pearl French Tips',
    body: 'If you think French tips are stuck in the past, let us introduce you to the modern, earthy upgrade. Sage green is having a massive moment in beauty because it acts like a neutral but feels so much more intentional than a standard nude. This design maps out a gorgeous diagonal color-block on a crisp square nail, split by a liquid-gold wire line. The tiny pearl drop placement at the center pushes it straight into luxury territory. It looks incredibly intricate, but here is the cheat code: use striping tape to get that razor-sharp diagonal line, and apply your pearl with a tiny dot of builder gel so it doesn\'t budge.',
    products: [
      { id: '1b', name: 'Matte Nail Enamel (Matcha Tiramisu)', desc: 'The perfect earthy green.', image: '/images/products/opi-v2.jpg', link: 'https://amazon.com' },
      { id: '2b', name: 'Half-Round 2mm Pearls', desc: 'For the 3D accent.', image: '/images/products/kodi-v2.jpg', link: 'https://amazon.com' },
      { id: '3b', name: 'Striping Tape', desc: 'For razor-sharp color blocking.', image: '/images/products/beetles-v2.jpg', link: 'https://amazon.com' },
    ]
  },
  {
    id: 'almond-nails',
    image: '/images/nails/almond-nails-v2.jpg',
    heading: 'The Celestial Nude',
    body: 'If you love the "barely there" look but still want a bit of magic when your hands catch the sun, this celestial set is the sweet spot. Built on an almond-shaped jelly nail, it combines micro-rhinestones with fine starburst accents. The negative space allows your natural nail to breathe while the gold foil detailing catches the light like tiny constellations. It is the perfect low-maintenance manicure because regrowth is virtually invisible.',
    products: [
      { id: '1c', name: 'Sheer Peach Base Gel', desc: 'For a healthy glow.', image: '/images/products/opi-v2.jpg', link: 'https://amazon.com' },
      { id: '2c', name: 'Tiny Flat-back Rhinestones', desc: 'For the stars.', image: '/images/products/kodi-v2.jpg', link: 'https://amazon.com' },
      { id: '3c', name: 'Precision Rhinestone Glue', desc: 'To keep them secure.', image: '/images/products/beetles-v2.jpg', link: 'https://amazon.com' },
    ]
  },
  {
    id: 'floral-nails',
    image: '/images/nails/floral-nails-v2.jpg',
    heading: 'Soft Blossom & Gold Accents',
    body: 'Detailed floral nail art looks intimidating until you realize it’s mostly just layering simple dots and pulling them into petals. This look mixes a classic sheer base with micro cherry blossoms. It feels airy, clean, and looks just as good with casual knitwear as it does with formalwear. Adding a tiny spec of gold to the center of each blossom elevates the entire look from simple to spectacular.',
    products: [
      { id: '1d', name: 'Nail Art Dotting Tools', desc: 'For perfect petals.', image: '/images/products/opi-v2.jpg', link: 'https://amazon.com' },
      { id: '2d', name: 'Opaque White Art Gel', desc: 'For the blossoms.', image: '/images/products/kodi-v2.jpg', link: 'https://amazon.com' },
      { id: '3d', name: 'Gold Metallic Liner Gel', desc: 'For the centers.', image: '/images/products/beetles-v2.jpg', link: 'https://amazon.com' },
    ]
  },
];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function EditorialListicle() {
  return (
    <div className="w-full">
      {sections.map((section, index) => (
        <section key={section.id} id={section.id} className="mb-24 lg:mb-32">
          {/* Mobile Layout (Stack) */}
          <div className="lg:hidden px-2 mb-16">
            <motion.h2 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="text-3xl font-medium font-playfair text-[#111111] leading-[1.2] mb-6 tracking-tight"
            >
              {section.heading}
            </motion.h2>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="relative w-full aspect-square rounded-xl overflow-hidden mb-6 shadow-sm"
            >
              <Image src={section.image} alt={section.heading} fill className="object-cover" sizes="100vw" />
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <p className="text-[#444444] text-[17px] leading-[1.85] mb-8">{section.body}</p>
              
              <div className="mb-5">
                <span className="text-[12px] font-bold tracking-[0.2em] uppercase text-[#555555]">Tools to recreate this</span>
              </div>
              
              <div 
                className="flex gap-2 pb-6 overflow-x-auto snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {section.products.map(product => (
                  <motion.a
                    key={product.id}
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-none w-[200px] snap-start flex flex-col group bg-white border border-[#f2ebe9] rounded-lg p-3 shadow-[0_4px_16px_rgba(0,0,0,0.02)] transition-all hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:-translate-y-1"
                  >
                    <div className="relative w-full aspect-square mb-3 overflow-hidden">
                      <Image src={product.image} alt={product.name} fill className="object-contain mix-blend-multiply" sizes="200px" />
                    </div>
                    <h4 className="text-[13px] font-playfair font-bold text-[#111111] mb-1.5 leading-snug line-clamp-2">{product.name}</h4>
                    <p className="text-[11px] text-[#666666] mb-3 leading-relaxed line-clamp-2">{product.desc}</p>
                    <div className="mt-auto pt-3 border-t border-[#f2ebe9] flex justify-center">
                      <span className="text-[10px] font-bold tracking-widest uppercase text-[#a96570] transition-colors group-hover:text-[#8a4e58]">Shop Now</span>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Desktop Layout (Asymmetrical Grid) */}
          <div className="hidden lg:grid grid-cols-12 gap-16 items-start relative">
            
            {/* Sticky Left Column: Image */}
            <div className="col-span-5 sticky top-32">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-lg"
              >
                <Image src={section.image} alt={section.heading} fill className="object-cover" sizes="40vw" priority={index === 0} />
              </motion.div>
            </div>
            
            {/* Scrollable Right Column: Text & Commerce */}
            <div className="col-span-7 pt-8 pb-32">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
              >
                <h2 className="text-4xl xl:text-5xl font-medium font-playfair text-[#111111] leading-[1.15] mb-8 tracking-tight">{section.heading}</h2>
                <p className="text-[#444444] text-lg lg:text-xl leading-[1.85] mb-14">{section.body}</p>
                
                <div className="mb-8 border-b border-[#eaeaea] pb-4">
                  <span className="text-[13px] font-bold tracking-[0.2em] uppercase text-[#555555]">Tools to recreate this</span>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {section.products.map(product => (
                    <motion.a
                      key={product.id}
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col group bg-white border border-[#f2ebe9] rounded-lg p-4 shadow-[0_4px_16px_rgba(0,0,0,0.02)] transition-all hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:-translate-y-1"
                    >
                      <div className="relative w-full aspect-square mb-4 overflow-hidden">
                        <Image src={product.image} alt={product.name} fill className="object-contain mix-blend-multiply" sizes="(max-width: 1280px) 33vw, 20vw" />
                      </div>
                      <h4 className="text-[15px] font-playfair font-bold text-[#111111] mb-2 leading-snug line-clamp-2">{product.name}</h4>
                      <p className="text-[13px] text-[#666666] mb-4 leading-relaxed line-clamp-2">{product.desc}</p>
                      
                      <div className="mt-auto pt-4 border-t border-[#f2ebe9] flex justify-center">
                        <span className="text-[11px] font-bold tracking-widest uppercase text-[#a96570] transition-colors group-hover:text-[#8a4e58]">Shop Now &rarr;</span>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
            
          </div>
        </section>
      ))}
    </div>
  );
}
