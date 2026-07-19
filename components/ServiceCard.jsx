import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function ServiceCard({ title, emoji, slug, startingPrice }) {
  return (
    <Link
      href={`/${slug}`}
      className="relative bg-white border border-rose/20 rounded-[28px] p-7 shadow-sm hover-card-lift flex flex-col justify-between group overflow-hidden cursor-pointer"
    >
      {/* Subtle gradient accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-rose/15 to-transparent rounded-bl-full pointer-events-none" />

      <div className="relative z-10">
        <div className="bg-gradient-to-br from-rose/25 to-rose/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-sm">
          <span className="text-3xl" role="img" aria-label={title}>
            {emoji}
          </span>
        </div>
        <h3 className="font-playfair text-xl font-bold text-charcoal mb-1.5">{title}</h3>
        <div className="flex items-center gap-2 mb-6">
          <Sparkles className="w-3.5 h-3.5 text-gold" />
          <p className="text-gold font-poppins text-xs font-bold uppercase tracking-wider">
            Starting from {startingPrice}
          </p>
        </div>
      </div>

      <div
        className="flex items-center gap-2 text-sm font-semibold font-poppins text-mauve group-hover:text-gold transition-colors duration-200 min-h-[48px] border-t border-rose/10 pt-4 mt-auto"
      >
        <span>View Prices & Book</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
      </div>
    </Link>
  );
}
