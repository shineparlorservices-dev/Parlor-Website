'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, Calendar, Phone, ArrowRight, CheckCircle2, Plus, Check } from 'lucide-react';
import { services } from '@/lib/services';
import { useCart } from '@/lib/CartContext';

export default function Waxing() {
  const data = services.waxing;
  const phone = process.env.NEXT_PUBLIC_PHONE || '+91 9999999999';
  const { addToCart, removeFromCart, isItemInCart } = useCart();

  const sectionMeta = [
    { emoji: '🦵', color: 'from-rose/15 to-cream',      accent: 'bg-rose/20',    desc: 'Smooth, silky legs with long-lasting professional results.' },
    { emoji: '💪', color: 'from-gold/5 to-cream',        accent: 'bg-gold/15',    desc: 'Complete arm waxing for a flawless, hair-free finish.' },
    { emoji: '🙌', color: 'from-mauve/10 to-cream',      accent: 'bg-mauve/15',   desc: 'Quick & gentle removal for sensitive underarm skin.' },
    { emoji: '✨', color: 'from-[#c2dbbd]/15 to-cream',  accent: 'bg-[#c2dbbd]/25', desc: 'Save more with our hand + leg combo bundles.' },
  ];

  return (
    <div className="animate-fade-in font-poppins min-h-screen bg-cream">
      {/* ═══════ Hero Section ═══════ */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Waxing salon environment"
            className="w-full h-full object-cover"
            src="/images/waxing-hero.png"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/70 to-transparent z-0" />
        </div>
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 w-full max-w-7xl mx-auto">
          <div className="max-w-xl space-y-4">
            <span className="inline-block py-1.5 px-4 bg-rose/30 text-mauve rounded-full font-semibold text-xs uppercase tracking-widest">
              Premium Care
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-charcoal">
              Waxing Services {data.emoji}
            </h1>
            <p className="text-charcoal/85 text-sm sm:text-base leading-relaxed">
              Smooth, clean, and long-lasting results. Discover our range of specialized waxes designed for even the most sensitive skin.
            </p>
            {/* Price pill */}
            <div className="inline-flex items-center gap-2 price-tag text-sm">
              Starting from <span className="font-playfair font-bold text-lg">{data.startingPrice}</span>
            </div>
            <div className="flex gap-4 pt-2">
              <Link
                href="/booking?category=Waxing"
                className="bg-mauve text-white px-6 py-3 rounded-full font-semibold hover:bg-mauve/95 transition-transform hover:scale-105 btn-active-scale shadow-md"
              >
                Book Waxing
              </Link>
              <a
                href="#pricing"
                className="border-2 border-mauve text-mauve px-6 py-3 rounded-full font-semibold hover:bg-mauve/10 transition-colors text-center"
              >
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ Pricing Sections ═══════ */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="pricing">
        <div className="text-center mb-16 space-y-3">
          <span className="text-mauve font-poppins text-xs font-semibold uppercase tracking-widest">
            Transparent Pricing
          </span>
          <h2 className="text-3xl font-playfair font-bold text-charcoal">Waxing Price Menu</h2>
          <p className="text-charcoal/70 text-sm max-w-md mx-auto">Choose your area and wax type. All prices are fixed — no hidden charges.</p>
          <div className="section-divider mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.sections.map((section, sIdx) => {
            const meta = sectionMeta[sIdx] || sectionMeta[0];
            return (
              <div
                key={section.heading}
                className={`bg-gradient-to-br ${meta.color} border border-rose/15 rounded-[28px] p-6 sm:p-8 shadow-sm hover-card-lift relative overflow-hidden stagger-child`}
              >
                {/* Accent circle */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gold/5 rounded-full blur-2xl pointer-events-none" />

                <div className="flex items-center gap-3 mb-6 relative z-10">
                  <div className={`w-12 h-12 ${meta.accent} rounded-2xl flex items-center justify-center text-2xl shrink-0 shadow-sm`}>
                    {meta.emoji}
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-bold text-charcoal">{section.heading}</h3>
                    <p className="text-charcoal/60 text-xs font-poppins mt-0.5">{meta.desc}</p>
                  </div>
                </div>

                <div className="space-y-0 relative z-10">
                  {section.items.map((item, iIdx) => {
                    const cartName = `${section.heading} - ${item.name}`;
                    return (
                      <div
                        key={item.name}
                        className={`flex justify-between items-center py-3.5 group hover:bg-white/50 px-3 -mx-3 rounded-xl transition-colors ${
                          iIdx < section.items.length - 1 ? 'border-b border-rose/10' : ''
                        }`}
                      >
                        <span className="font-poppins text-charcoal/80 group-hover:text-charcoal font-medium text-sm">
                          {item.name}
                        </span>
                        <div className="flex items-center gap-3">
                          <span className="font-playfair text-lg font-bold text-gold">{item.price}</span>
                          {isItemInCart('Waxing', cartName) ? (
                            <button
                              onClick={() => removeFromCart('Waxing', cartName)}
                              className="bg-gold text-white text-xs px-2.5 py-1 rounded-full flex items-center gap-0.5 cursor-pointer font-semibold"
                            >
                              Selected <Check className="w-3 h-3" />
                            </button>
                          ) : (
                            <button
                              onClick={() => addToCart({ category: 'Waxing', name: cartName, price: item.price })}
                              className="bg-mauve hover:bg-mauve/95 text-white text-xs px-2.5 py-1 rounded-full flex items-center gap-0.5 cursor-pointer font-semibold"
                            >
                              Add <Plus className="w-3 h-3" />
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Quick book link */}
                <div className="mt-6 pt-4 border-t border-rose/10 relative z-10">
                  <Link
                    href="/booking?category=Waxing"
                    className="text-mauve font-semibold text-sm flex items-center gap-1 hover:text-gold transition-colors"
                  >
                    Book {section.heading} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ═══════ Why Choose Our Waxing ═══════ */}
      <section className="py-16 bg-white border-t border-rose/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: '🌿', title: 'Natural Ingredients', desc: 'Premium waxes enriched with natural ingredients for gentle, skin-friendly hair removal.' },
              { icon: '⏱', title: 'Quick Sessions', desc: 'Most waxing sessions completed in under 30 minutes at your home.' },
              { icon: '💎', title: 'Long-Lasting Results', desc: 'Stay smooth for 3-6 weeks with our professional-grade wax application.' },
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

      {/* ═══════ Booking CTA Banner ═══════ */}
      <section className="mb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto bg-gradient-to-r from-rose/25 via-rose/15 to-rose/25 rounded-[32px] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-rose/15 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
          <div className="text-center md:text-left space-y-2 relative z-10">
            <h2 className="text-2xl font-playfair font-bold text-charcoal">Book Your Session</h2>
            <p className="text-charcoal/75 text-sm sm:text-base max-w-lg leading-relaxed">
              Experience the smoothest waxing in the city. Call us for custom package inquiries or book your appointment online.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto shrink-0 relative z-10">
            <a
              href={`tel:${phone}`}
              className="bg-white text-mauve border border-mauve px-8 py-3.5 rounded-full font-semibold text-center hover:bg-mauve hover:text-white transition-all flex items-center justify-center gap-1.5 shadow-sm"
            >
              <Phone className="w-4 h-4" /> Call Us
            </a>
            <Link
              href="/booking?category=Waxing"
              className="bg-mauve text-white px-8 py-3.5 rounded-full font-semibold text-center hover:bg-mauve/95 transition-all shadow-md inline-block hover:scale-105"
            >
              Book Waxing Online
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
