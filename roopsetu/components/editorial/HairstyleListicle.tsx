'use client';

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

const sections = [
  {
    id: 'easy-waves',
    image: '/images/hair/easy-waves-v2.jpg',
    heading: 'Effortless Everyday Waves',
    body: 'The key to perfect everyday waves isn’t spending hours with a curling iron—it’s about creating movement that looks completely natural. By curling away from the face and leaving the ends straight, you achieve that coveted "lived-in" texture. This style works beautifully on second-day hair, making it the ultimate low-maintenance look for busy mornings.',
    products: [
      { id: '1a', name: 'Texture Spray', desc: 'For that lived-in grit.', image: '/images/products/kodi-v2.jpg', link: 'https://amazon.com' },
      { id: '2a', name: '1.25" Curling Iron', desc: 'The perfect barrel size.', image: '/images/products/opi-v2.jpg', link: 'https://amazon.com' },
      { id: '3a', name: 'Lightweight Hair Oil', desc: 'To smooth the ends.', image: '/images/products/beetles-v2.jpg', link: 'https://amazon.com' },
    ]
  },
  {
    id: 'long-hair',
    image: '/images/hair/long-hair-v2.jpg',
    heading: 'The Elegant Blowout',
    body: 'Nothing says luxury quite like a voluminous, bouncy blowout on long hair. While it looks like you just stepped out of a high-end salon, mastering this at home is easier than you think. The secret lies in tension and cooling. Using a round brush dryer combination helps smooth the cuticle, and pinning the curls while they cool sets the volume for days.',
    products: [
      { id: '1b', name: 'Volumizing Mousse', desc: 'For root lift.', image: '/images/products/opi-v2.jpg', link: 'https://amazon.com' },
      { id: '2b', name: 'Round Brush Dryer', desc: 'The ultimate 2-in-1 tool.', image: '/images/products/kodi-v2.jpg', link: 'https://amazon.com' },
      { id: '3b', name: 'Velcro Rollers', desc: 'To set the bounce.', image: '/images/products/beetles-v2.jpg', link: 'https://amazon.com' },
    ]
  },
  {
    id: 'braids',
    image: '/images/hair/braids-v2.jpg',
    heading: 'The Modern Braided Updo',
    body: 'Braids are no longer just for music festivals. This soft, romantic braided updo is perfect for weddings, date nights, or any time you want to elevate your look while keeping your hair off your neck. By loosely pulling at the edges of the braid (pancaking) before pinning it up, you create an illusion of thicker, fuller hair with an effortlessly chic vibe.',
    products: [
      { id: '1c', name: 'Clear Elastics', desc: 'Invisible hold.', image: '/images/products/opi-v2.jpg', link: 'https://amazon.com' },
      { id: '2c', name: 'Bobby Pins', desc: 'To secure the updo.', image: '/images/products/kodi-v2.jpg', link: 'https://amazon.com' },
      { id: '3c', name: 'Strong Hold Hairspray', desc: 'To keep it all in place.', image: '/images/products/beetles-v2.jpg', link: 'https://amazon.com' },
    ]
  }
];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function HairstyleListicle() {
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
