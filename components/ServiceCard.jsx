import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ServiceCard({ title, emoji, slug, startingPrice }) {
  return (
    <div className="bg-white border border-rose/25 rounded-[24px] p-6 shadow-sm hover-card-effect flex flex-col justify-between group">
      <div>
        <div className="bg-rose/20 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          <span className="text-3xl" role="img" aria-label={title}>
            {emoji}
          </span>
        </div>
        <h3 className="font-playfair text-xl font-bold text-charcoal mb-2">{title}</h3>
        <p className="text-mauve font-poppins text-xs font-semibold uppercase tracking-wider mb-6">
          Starting from {startingPrice}
        </p>
      </div>
      <Link
        href={`/${slug}`}
        className="text-gold font-poppins text-sm font-semibold flex items-center gap-1.5 group-hover:translate-x-1 transition-transform duration-200 min-h-[48px] items-center"
      >
        Explore Service <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
