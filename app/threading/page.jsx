'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, CheckCircle2, ArrowRight, Plus, Check } from 'lucide-react';
import { services } from '@/lib/services';
import { useCart } from '@/lib/CartContext';

export default function Threading() {
  const data = services.threading;
  const { addToCart, removeFromCart, isItemInCart } = useCart();

  const serviceDetails = [
    {
      name: 'Eyebrows',
      price: '₹40',
      desc: 'Precision shaping to frame your face beautifully.',
      tag: 'Most Popular',
      tagColor: 'bg-[#fed65b] text-[#745c00]',
      duration: '15 Mins',
      emoji: '✨',
      featured: true,
    },
    {
      name: 'Upper Lips',
      price: '₹30',
      desc: 'Smooth and gentle hair removal for a flawless, clean finish.',
      emoji: '💋',
      duration: '10 Mins',
    },
    {
      name: 'Forehead',
      price: '₹30',
      desc: 'Clear away fine forehead baby hairs to achieve a brighter facial complexion.',
      emoji: '🌟',
      duration: '10 Mins',
    },
    {
      name: 'Chin',
      price: '₹20',
      desc: 'Quick and highly effective hair threading designed specifically for sensitive skin.',
      emoji: '🌸',
      duration: '10 Mins',
      tag: 'Budget Friendly',
      tagColor: 'bg-[#c2dbbd] text-[#0c200d]',
    },
    {
      name: 'Sidelocks',
      price: '₹60',
      desc: 'Precision sidelocks hair trimming to define your profile with clean, sharp lines.',
      emoji: '💫',
      duration: '15 Mins',
    },
  ];

  return (
    <div className="animate-fade-in font-poppins min-h-screen">
      {/* ═══════ Hero Banner ═══════ */}
      <section className="relative h-[45vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-rose/15 to-cream">
        <div className="absolute inset-0 z-0">
          <img
            alt="Professional threading session"
            className="w-full h-full object-cover opacity-15"
            src="/images/threading-hero.png"
          />
        </div>
        <div className="container relative z-10 px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-rose/30 text-mauve px-4 py-1.5 rounded-full mb-4">
            <span className="text-xs font-bold uppercase tracking-widest flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-gold" /> Precise Grooming
            </span>
          </div>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Threading Services {data.emoji}
          </h1>
          <p className="text-charcoal/80 max-w-xl mx-auto text-sm sm:text-base leading-relaxed mb-6">
            Precise shaping for perfect brows and more. Experience the art of traditional threading refined for modern luxury.
          </p>

          {/* Price range pill */}
          <div className="inline-flex items-center gap-2 price-tag text-sm">
            Starting from <span className="font-playfair font-bold text-lg">{data.startingPrice}</span>
          </div>
        </div>
      </section>

      {/* ═══════ Service Menu ═══════ */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-3">
            <span className="text-mauve font-poppins text-xs font-semibold uppercase tracking-widest">
              Our Offerings
            </span>
            <h2 className="font-playfair text-3xl font-bold text-charcoal">Service Menu</h2>
            <div className="section-divider mx-auto" />
          </div>

          {/* Featured Card — Eyebrows */}
          <div className="mb-8">
            <div className="bg-gradient-to-br from-cream to-rose/10 rounded-[28px] p-6 sm:p-8 border border-rose/15 shadow-md hover-card-lift flex flex-col sm:flex-row gap-6 items-center relative overflow-hidden">
              {/* Decorative glow */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
              
              <div className="w-full sm:w-1/3 h-44 rounded-2xl overflow-hidden shrink-0 border border-rose/10 shadow-sm">
                <img
                  alt="Eyebrow threading"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  src="/images/eyebrow-threading.png"
                />
              </div>
              <div className="flex-1 space-y-4 w-full relative z-10">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="font-playfair text-2xl font-bold text-charcoal">Eyebrows</h3>
                    <p className="text-charcoal/70 text-sm font-poppins mt-1">
                      Precision shaping to frame your face beautifully.
                    </p>
                  </div>
                  <span className="font-playfair text-3xl font-bold gradient-text-gold shrink-0">₹40</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-[#fed65b] text-[#745c00] font-semibold px-3 py-1 rounded-full text-xs font-poppins">
                    Most Popular
                  </span>
                  <span className="bg-[#c2dbbd] text-[#0c200d] font-semibold px-3 py-1 rounded-full text-xs font-poppins">
                    15 Mins
                  </span>
                </div>
                {isItemInCart('Threading', 'Eyebrows') ? (
                  <button
                    onClick={() => removeFromCart('Threading', 'Eyebrows')}
                    className="inline-flex items-center gap-1.5 bg-gold text-white px-6 py-3 rounded-full font-semibold text-sm hover:scale-105 btn-active-scale transition-all shadow-md cursor-pointer"
                  >
                    Remove from cart <Check className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={() => addToCart({ category: 'Threading', name: 'Eyebrows', price: '₹40' })}
                    className="inline-flex items-center gap-1.5 bg-mauve text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-mauve/95 hover:scale-105 btn-active-scale transition-all shadow-md cursor-pointer"
                  >
                    Add to cart <Plus className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Other Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {serviceDetails.slice(1).map((item) => (
              <div
                key={item.name}
                className="bg-white border border-rose/15 rounded-[24px] p-6 shadow-sm hover-card-lift flex flex-col justify-between group relative overflow-hidden stagger-child"
              >
                {/* Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-rose/10 to-transparent rounded-bl-full pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-rose/15 rounded-xl flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                        {item.emoji}
                      </div>
                      <h3 className="font-playfair text-lg font-bold text-charcoal">{item.name}</h3>
                    </div>
                    <span className="font-playfair text-xl font-bold text-gold">{item.price}</span>
                  </div>
                  <p className="text-charcoal/70 text-sm font-poppins mb-4 leading-relaxed">
                    {item.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tag && (
                      <span className={`${item.tagColor} font-semibold px-2.5 py-0.5 rounded-full text-[10px] font-poppins uppercase tracking-wide`}>
                        {item.tag}
                      </span>
                    )}
                    {item.duration && (
                      <span className="bg-cream text-charcoal/70 font-medium px-2.5 py-0.5 rounded-full text-[10px] font-poppins border border-rose/10">
                        ⏱ {item.duration}
                      </span>
                    )}
                  </div>
                </div>

                {isItemInCart('Threading', item.name) ? (
                  <button
                    onClick={() => removeFromCart('Threading', item.name)}
                    className="text-gold font-semibold text-sm flex items-center gap-1 transition-colors border-t border-rose/10 pt-4 mt-auto min-h-[44px] w-full text-left cursor-pointer"
                  >
                    Selected <Check className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={() => addToCart({ category: 'Threading', name: item.name, price: item.price })}
                    className="text-mauve font-semibold text-sm flex items-center gap-1 group-hover:text-gold transition-colors border-t border-rose/10 pt-4 mt-auto min-h-[44px] w-full text-left cursor-pointer"
                  >
                    Add to cart <Plus className="w-4 h-4" />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ The Art of Precision ═══════ */}
      <section className="py-20 bg-cream border-t border-rose/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square max-h-[450px] rounded-[48px] overflow-hidden shadow-2xl border border-rose/10">
              <img
                alt="Luxury mobile salon tools and setup"
                className="w-full h-full object-cover"
                src="/images/salon-interior.png"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-rose/85 backdrop-blur-md rounded-full flex items-center justify-center p-4 text-center shadow-xl border border-rose/20 hidden sm:flex animate-float">
              <p className="font-playfair text-xs font-bold text-charcoal">
                100% Sanitized Organic Thread
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <span className="text-mauve font-poppins text-xs font-semibold uppercase tracking-widest">
              Our Promise
            </span>
            <h2 className="font-playfair text-3xl font-bold text-charcoal">The Art of Precision</h2>
            <p className="text-charcoal/75 text-sm sm:text-base leading-relaxed">
              Unlike waxing, threading offers unparalleled micro-control, allowing me to target even the finest individual root hairs without pinching or stretching your skin.
            </p>
            <div className="space-y-3">
              {[
                'Suitable for all skin types, including highly sensitive skin.',
                'Extremely high precision to achieve perfect brow symmetry.',
                'Natural, chemical-free, and pain-minimized hair removal process.',
              ].map((point) => (
                <div key={point} className="flex items-center gap-3 text-sm text-charcoal/80">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
            <div className="pt-4">
              <Link
                href="/booking?category=Threading"
                className="bg-mauve text-white px-8 py-4 rounded-full font-semibold inline-block hover:bg-mauve/95 hover:scale-105 btn-active-scale transition-all shadow-md"
              >
                Reserve Your Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
