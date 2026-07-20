import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function ServiceCard({ title, emoji, slug, startingPrice, image, description }) {
  return (
    <Link
      href={`/${slug}`}
      className="relative bg-white border border-rose/20 rounded-[28px] shadow-sm hover-card-lift flex flex-col justify-between group overflow-hidden cursor-pointer h-full"
    >
      {/* Service Image Container */}
      <div className="relative h-48 w-full overflow-hidden bg-rose/10">
        <img
          src={image || '/images/home-hero.png'}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />

        {/* Floating Emoji Badge */}
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full shadow-md flex items-center gap-1.5 border border-white/40">
          <span className="text-base" role="img" aria-label={title}>
            {emoji}
          </span>
          <span className="text-xs font-bold text-charcoal font-poppins">{title}</span>
        </div>

        {/* Floating Price Pill */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between z-10">
          <span className="bg-gold/95 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold font-poppins shadow-md flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5" /> From {startingPrice}
          </span>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h3 className="font-playfair text-2xl font-bold text-charcoal mb-2 group-hover:text-mauve transition-colors duration-200">
            {title}
          </h3>
          {description && (
            <p className="text-charcoal/70 font-poppins text-xs leading-relaxed line-clamp-2">
              {description}
            </p>
          )}
        </div>

        {/* Footer CTA */}
        <div className="flex items-center justify-between text-sm font-semibold font-poppins text-mauve group-hover:text-gold transition-colors duration-200 border-t border-rose/10 pt-4 mt-auto">
          <span>View Prices & Book</span>
          <div className="w-8 h-8 rounded-full bg-rose/15 group-hover:bg-gold/20 flex items-center justify-center transition-colors">
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
          </div>
        </div>
      </div>
    </Link>
  );
}

