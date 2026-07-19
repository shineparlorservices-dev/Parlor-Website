'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, ArrowRight, ShieldCheck, UserCheck, Droplets, Plus, Check } from 'lucide-react';
import { services } from '@/lib/services';
import { useCart } from '@/lib/CartContext';

export default function Bleach() {
  const data = services.bleach;
  const { addToCart, removeFromCart, isItemInCart } = useCart();

  return (
    <div className="animate-fade-in font-poppins min-h-screen bg-cream">
      {/* ═══════ Hero Section ═══════ */}
      <section className="relative h-[45vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-rose/15 to-cream">
        <div className="absolute inset-0 z-0">
          <img
            alt="Luxury beauty products flat lay"
            className="w-full h-full object-cover opacity-15 scale-105"
            src="/images/bleach-hero.png"
          />
        </div>
        <div className="container relative z-10 px-4 text-center">
          <div className="inline-flex items-center gap-1.5 bg-rose/30 text-mauve px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 font-poppins">
            <Sparkles className="w-3.5 h-3.5 text-gold" /> Skin Brightening Care
          </div>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Bleach Services {data.emoji}
          </h1>
          <p className="text-charcoal/80 max-w-xl mx-auto text-sm sm:text-base leading-relaxed mb-6">
            Brighten and even your skin tone with our professional-grade formulas, designed for gentle yet effective results.
          </p>
          {/* Price pill */}
          <div className="inline-flex items-center gap-2 price-tag text-sm mb-6">
            Starting from <span className="font-playfair font-bold text-lg">{data.startingPrice}</span>
          </div>
          <div className="block">
            <Link
              href="/booking?category=Bleach"
              className="bg-mauve text-white px-8 py-3.5 rounded-full font-semibold inline-block hover:bg-mauve/95 hover:scale-105 btn-active-scale transition-all shadow-md text-sm"
            >
              Book Bleach Service
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════ Pricing Comparison Table ═══════ */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 space-y-3">
          <span className="text-mauve font-poppins text-xs font-semibold uppercase tracking-widest">
            Compare Brands
          </span>
          <h2 className="font-playfair text-3xl font-bold text-charcoal">Bleach Price Menu</h2>
          <p className="text-charcoal/70 text-sm max-w-md mx-auto">
            Choose between Oxy Life and Raaga — two trusted brands for every skin type.
          </p>
          <div className="section-divider mx-auto" />
        </div>

        <div className="bg-white border border-rose/15 rounded-[28px] overflow-hidden shadow-md">
          {/* Table Header */}
          <div className="grid grid-cols-3 bg-gradient-to-r from-rose/10 via-rose/15 to-rose/10 border-b border-rose/20">
            <div className="p-5 sm:p-6 font-playfair font-bold text-charcoal text-sm sm:text-base flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-gold" /> Service
            </div>
            <div className="p-5 sm:p-6 text-center">
              <span className="font-playfair font-bold text-charcoal text-sm sm:text-base">Oxy Life</span>
              <p className="text-[10px] text-charcoal/50 font-poppins mt-0.5">Active Oxygen</p>
            </div>
            <div className="p-5 sm:p-6 text-center">
              <span className="font-playfair font-bold text-charcoal text-sm sm:text-base">Raaga</span>
              <p className="text-[10px] text-charcoal/50 font-poppins mt-0.5">Premium Range</p>
            </div>
          </div>

          {/* Table Body */}
          {data.items.map((item, idx) => {
            const oxyName = `Oxy Life - ${item.name}`;
            const raagaName = `Raaga - ${item.name}`;

            return (
              <div
                key={item.name}
                className={`grid grid-cols-3 group hover:bg-rose/5 transition-colors table-row-stripe ${
                  idx < data.items.length - 1 ? 'border-b border-rose/10' : ''
                }`}
              >
                <div className="p-4 sm:p-5 font-poppins text-charcoal/80 group-hover:text-charcoal font-medium text-sm flex items-center">
                  {item.name}
                </div>
                <div className="p-4 sm:p-5 text-center flex flex-col items-center justify-center gap-1.5">
                  <span className="font-playfair font-bold text-gold text-lg group-hover:scale-105 transition-transform inline-block">
                    {item.oxyLife}
                  </span>
                  {isItemInCart('Bleach', oxyName) ? (
                    <button
                      onClick={() => removeFromCart('Bleach', oxyName)}
                      className="bg-gold text-white text-[10px] px-2 py-0.5 rounded-full flex items-center gap-0.5 cursor-pointer font-semibold"
                    >
                      Selected <Check className="w-2.5 h-2.5" />
                    </button>
                  ) : (
                    <button
                      onClick={() => addToCart({ category: 'Bleach', name: oxyName, price: item.oxyLife })}
                      className="bg-mauve hover:bg-mauve/95 text-white text-[10px] px-2 py-0.5 rounded-full flex items-center gap-0.5 cursor-pointer font-semibold animate-fade-in"
                    >
                      Add <Plus className="w-2.5 h-2.5" />
                    </button>
                  )}
                </div>
                <div className="p-4 sm:p-5 text-center flex flex-col items-center justify-center gap-1.5">
                  <span className="font-playfair font-bold text-gold text-lg group-hover:scale-105 transition-transform inline-block">
                    {item.raaga}
                  </span>
                  {isItemInCart('Bleach', raagaName) ? (
                    <button
                      onClick={() => removeFromCart('Bleach', raagaName)}
                      className="bg-gold text-white text-[10px] px-2 py-0.5 rounded-full flex items-center gap-0.5 cursor-pointer font-semibold"
                    >
                      Selected <Check className="w-2.5 h-2.5" />
                    </button>
                  ) : (
                    <button
                      onClick={() => addToCart({ category: 'Bleach', name: raagaName, price: item.raaga })}
                      className="bg-mauve hover:bg-mauve/95 text-white text-[10px] px-2 py-0.5 rounded-full flex items-center gap-0.5 cursor-pointer font-semibold animate-fade-in"
                    >
                      Add <Plus className="w-2.5 h-2.5" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/booking?category=Bleach"
            className="bg-mauve text-white px-8 py-4 rounded-full font-semibold inline-block hover:bg-mauve/95 hover:scale-105 btn-active-scale transition-all shadow-md"
          >
            Book Your Bleach Treatment
          </Link>
        </div>
      </section>

      {/* ═══════ Quick Benefits ═══════ */}
      <section className="py-16 bg-white border-y border-rose/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: '🌿', title: 'Skin-Safe Formulas', desc: 'pH-balanced bleach enriched with aloe vera and active oxygen.' },
              { icon: '🎯', title: 'Expert Application', desc: 'Applied precisely where needed with sensitivity mapping.' },
              { icon: '💧', title: 'Post-Treatment Care', desc: 'Concludes with a cooling moisture lock massage.' },
            ].map((item) => (
              <div key={item.title} className="text-center space-y-3 p-6 rounded-2xl hover:bg-cream/50 transition-colors stagger-child">
                <div className="text-3xl">{item.icon}</div>
                <h4 className="font-playfair text-base font-bold text-charcoal">{item.title}</h4>
                <p className="text-charcoal/60 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ Quality Promise Section ═══════ */}
      <section className="py-20 bg-gradient-to-b from-cream to-rose/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-mauve font-poppins text-xs font-semibold uppercase tracking-widest">
              Our Approach
            </span>
            <h2 className="font-playfair text-3xl font-bold text-charcoal">Gentle & Effective</h2>
            <p className="text-charcoal/75 text-sm sm:text-base leading-relaxed">
              I perform every bleach treatment with extreme care. I use premium, dermatologically tested, pH-balanced bleaching formulas that lift skin color without strip-drying.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3 stagger-child">
                <div className="w-8 h-8 bg-gold/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <h5 className="font-semibold text-charcoal text-sm">Gentle, Skin-Safe Formulas</h5>
                  <p className="text-xs text-charcoal/60">Enriched with natural aloe vera and active oxygen to calm the skin.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 stagger-child">
                <div className="w-8 h-8 bg-gold/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                  <UserCheck className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <h5 className="font-semibold text-charcoal text-sm">Expert Application</h5>
                  <p className="text-xs text-charcoal/60">Applied exactly where needed, keeping sensitivity mapping in mind.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 stagger-child">
                <div className="w-8 h-8 bg-gold/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                  <Droplets className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <h5 className="font-semibold text-charcoal text-sm">Post-Treatment Hydration</h5>
                  <p className="text-xs text-charcoal/60">Every bleach treatment concludes with a cooling moisture lock massage.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative rounded-[28px] overflow-hidden shadow-2xl h-80 md:h-[400px] border border-rose/20">
            <img
              alt="Premium skincare products"
              className="w-full h-full object-cover"
              src="/images/skincare-products.png"
            />
            {/* Floating trust badge */}
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-lg border border-rose/15 animate-float">
              <p className="font-poppins text-xs font-bold text-charcoal flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-gold" /> Dermatologist Approved
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
