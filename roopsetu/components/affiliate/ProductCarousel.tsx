'use client';

import Image from 'next/image';
import { ShoppingBag, ArrowRight } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  brand: string;
  price: string;
  image: string;
  affiliateLink: string;
}

interface ProductCarouselProps {
  title?: string;
  products: Product[];
}

export default function ProductCarousel({ title = 'Shop the Look', products }: ProductCarouselProps) {
  if (!products || products.length === 0) return null;

  return (
    <div className="my-14 p-6 sm:p-8 bg-gradient-to-b from-[#fdfbfb] to-white border border-[#f2ecea] rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
      <div className="flex items-end justify-between mb-8">
        <h3 className="text-3xl font-bold font-playfair tracking-tight text-gray-900">{title}</h3>
        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#c9828d] hidden sm:block">
          Curated Products
        </span>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {products.map((product) => (
          <a
            key={product.id}
            href={product.affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center bg-white border border-gray-100 rounded-3xl p-5 transition-all duration-300 hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] hover:-translate-y-1 relative"
          >
            {/* Image Container with precise aspect ratio */}
            <div className="relative w-full aspect-square mb-5 overflow-hidden rounded-2xl bg-white">
              <Image 
                src={product.image} 
                alt={product.name} 
                fill 
                className="object-contain p-2 transition-transform duration-700 ease-out group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              {/* Hover overlay buy button */}
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 text-sm font-bold text-gray-900 shadow-lg">
                  <ShoppingBag size={14} />
                  Shop
                </div>
              </div>
            </div>
            
            {/* Product Details */}
            <div className="text-center w-full flex-grow flex flex-col">
              <span className="text-[10px] font-bold tracking-[0.25em] text-gray-400 uppercase mb-2 block">{product.brand}</span>
              <h4 className="text-sm font-medium leading-snug text-gray-800 line-clamp-2 mb-3">{product.name}</h4>
              
              <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between w-full">
                <span className="text-base font-bold font-serif text-gray-900">{product.price}</span>
                <div className="w-8 h-8 rounded-full bg-[#f8f6f5] flex items-center justify-center text-gray-400 group-hover:bg-[#c9828d] group-hover:text-white transition-colors">
                  <ArrowRight size={14} strokeWidth={2.5} />
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
