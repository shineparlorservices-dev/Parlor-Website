'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, ArrowRight, Phone, CheckCircle2, Plus, Check } from 'lucide-react';
import { services } from '@/lib/services';
import { useCart } from '@/lib/CartContext';

export default function Facial() {
  const data = services.facial;
  const raagaSection = data.sections[0];
  const lotusSection = data.sections[1];
  const phone = process.env.NEXT_PUBLIC_PHONE || '+91 9999999999';
  const { addToCart, removeFromCart, isItemInCart } = useCart();

  return (
    <div className="animate-fade-in font-poppins min-h-screen bg-cream">
      {/* ═══════ Hero Section ═══════ */}
      <section
        className="relative h-[55vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            'url("/images/facial-hero.png")',
        }}
      >
        <div className="absolute inset-0 bg-charcoal/40 bg-gradient-to-b from-transparent to-cream/95 z-0" />
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <div className="inline-flex items-center gap-1.5 bg-[#fed65b]/30 text-[#745c00] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider animate-pulse uppercase mb-4">
            Luxury Skin Transformation
          </div>
          <h1 className="font-playfair text-4xl sm:text-5xl font-bold text-white drop-shadow-md mb-4">
            Facial Services {data.emoji}
          </h1>
          <p className="text-white font-medium text-sm sm:text-base leading-relaxed drop-shadow-sm max-w-2xl mx-auto mb-6">
            Glow, rejuvenate, and transform your skin with our curated selection of luxury facial treatments designed for ultimate skin health.
          </p>
          {/* Price pill */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white border border-white/30 rounded-full px-5 py-2 text-sm font-semibold">
            Starting from <span className="font-playfair font-bold text-lg">{data.startingPrice}</span>
          </div>
        </div>
      </section>

      {/* ═══════ Raaga Facials Bento Grid ═══════ */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-mauve font-poppins text-xs font-semibold uppercase tracking-widest">
              Premium Selection
            </span>
            <h2 className="font-playfair text-3xl font-bold text-charcoal mt-1">Raaga Facials</h2>
            <div className="section-divider mt-3" />
          </div>
          <p className="text-charcoal/70 max-w-md font-poppins text-sm leading-relaxed">
            Advanced dermatological solutions for specific skin concerns including anti-ageing, hyperpigmentation, acne reduction, and deep skin rejuvenation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {raagaSection.items.map((item, idx) => {
            const isPopular = item.name === 'Clean Up Fruit' || item.name === 'O3+ Bridal Facial';
            const emojis = ['💆‍♀️', '✨', '🌸', '🌿', '💎', '👑', '🌟', '🪷', '☀️'];
            return (
              <div
                key={item.name}
                className="bg-white border border-rose/15 rounded-[28px] p-6 flex flex-col justify-between shadow-sm hover-card-lift relative overflow-hidden group stagger-child"
              >
                {/* Accent corner */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-rose/10 to-transparent rounded-bl-full pointer-events-none" />

                {isPopular && (
                  <div className="absolute top-0 right-0 pt-4 pr-4 z-10">
                    <span className="bg-[#fed65b] text-[#745c00] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider font-poppins shadow-sm">
                      Popular
                    </span>
                  </div>
                )}
                <div className="relative z-10">
                  <div className="mb-4 w-10 h-10 bg-rose/15 rounded-xl flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                    {emojis[idx] || '✨'}
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-charcoal mb-2">{item.name}</h3>
                  <p className="text-charcoal/70 text-sm font-poppins mb-6 leading-relaxed">{item.desc}</p>
                </div>
                <div className="flex justify-between items-center border-t border-rose/10 pt-4 mt-auto">
                  <span className="font-playfair text-xl font-bold text-gold">{item.price}</span>
                  {isItemInCart('Facial', item.name) ? (
                    <button
                      onClick={() => removeFromCart('Facial', item.name)}
                      className="text-gold font-semibold text-sm hover:text-mauve transition-colors flex items-center gap-1 min-h-[48px] cursor-pointer"
                    >
                      Selected <Check className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      onClick={() => addToCart({ category: 'Facial', name: item.name, price: item.price })}
                      className="text-mauve font-semibold text-sm hover:text-gold transition-colors flex items-center gap-1 min-h-[48px] cursor-pointer"
                    >
                      Add to cart <Plus className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ═══════ Lotus Facials Section ═══════ */}
      <section className="bg-gradient-to-b from-rose/10 to-rose/5 py-20 border-y border-rose/15 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image Col */}
            <div className="relative">
              <div className="aspect-[4/5] max-h-[500px] rounded-[32px] overflow-hidden shadow-2xl border border-rose/20">
                <img
                  alt="Spa Treatment"
                  className="w-full h-full object-cover"
                  src="/images/spa-treatment.png"
                />
                <div className="absolute inset-0 border-[12px] border-white/20 pointer-events-none rounded-[32px]" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-white/90 backdrop-blur-md px-5 py-3 rounded-2xl shadow-xl border border-rose/20 animate-float hidden sm:block">
                <p className="font-poppins text-xs font-bold text-charcoal flex items-center gap-1.5">
                  🪷 Botanical Formulas
                </p>
              </div>
            </div>

            {/* List Col */}
            <div className="space-y-8">
              <div>
                <span className="text-mauve font-poppins text-xs font-semibold uppercase tracking-widest">
                  Botanical Luxury
                </span>
                <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-charcoal mt-1">
                  Lotus Facials
                </h2>
                <div className="section-divider mt-3" />
              </div>

              <div className="space-y-0">
                {lotusSection.items.map((item, idx) => {
                  const isCallPrice = item.price.toLowerCase().includes('call');
                  return (
                    <div
                      key={item.name}
                      className={`flex justify-between items-center py-4 group hover:bg-white/50 px-3 -mx-3 rounded-xl transition-colors stagger-child ${
                        idx < lotusSection.items.length - 1 ? 'border-b border-rose/15' : ''
                      }`}
                    >
                      <div>
                        <span className="font-poppins text-charcoal/80 group-hover:text-charcoal font-medium">
                          {item.name}
                        </span>
                        {item.desc && (
                          <p className="text-[10px] text-charcoal/50 font-poppins mt-0.5">{item.desc}</p>
                        )}
                      </div>
                      {isCallPrice ? (
                        <a
                          href={`tel:${phone}`}
                          className="font-poppins text-xs font-semibold text-mauve border border-mauve px-3 py-1.5 rounded-full hover:bg-mauve hover:text-white transition-colors shrink-0"
                        >
                          Call to Inquire
                        </a>
                      ) : isItemInCart('Facial', item.name) ? (
                        <button
                          onClick={() => removeFromCart('Facial', item.name)}
                          className="font-poppins text-xs font-semibold text-gold border border-gold px-3 py-1.5 rounded-full hover:bg-gold hover:text-white transition-colors shrink-0 flex items-center gap-1 cursor-pointer"
                        >
                          Selected <Check className="w-3.5 h-3.5" />
                        </button>
                      ) : (
                        <button
                          onClick={() => addToCart({ category: 'Facial', name: item.name, price: item.price })}
                          className="font-poppins text-xs font-semibold text-mauve border border-mauve px-3 py-1.5 rounded-full hover:bg-mauve hover:text-white transition-colors shrink-0 flex items-center gap-1 cursor-pointer"
                        >
                          Add {item.price} <Plus className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="pt-4">
                <Link
                  href="/booking?category=Facial"
                  className="bg-mauve text-white px-8 py-4 rounded-full font-semibold text-center hover:bg-mauve/95 transition-all shadow-lg hover:scale-105 inline-block"
                >
                  Book a Lotus Facial
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ Quick Benefits ═══════ */}
      <section className="py-16 bg-white border-b border-rose/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: '🧴', title: 'Premium Products', desc: 'I use only Raaga, Lotus, and O3+ professional-grade facial kits.' },
              { icon: '👩‍⚕️', title: 'Trained Beautician', desc: 'Certified skin specialist (owner) with years of experience delivering premium facial treatments.' },
              { icon: '🏠', title: 'At Your Doorstep', desc: 'Full spa-quality facial experience in the comfort of your home.' },
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

      {/* ═══════ Gallery / Visual Grid ═══════ */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-2">
            <span className="text-mauve font-poppins text-xs font-semibold uppercase tracking-widest">
              Our Ingredients
            </span>
            <h2 className="font-playfair text-2xl font-bold text-charcoal">Natural & Premium</h2>
            <div className="section-divider mx-auto" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="rounded-[24px] overflow-hidden aspect-square border border-rose/10 shadow-sm hover:scale-[1.02] transition-transform duration-300">
              <img
                alt="Organic skincare ingredients"
                className="w-full h-full object-cover"
                src="/images/skincare-products.png"
              />
            </div>
            <div className="rounded-[24px] overflow-hidden aspect-square border border-rose/10 shadow-sm hover:scale-[1.02] transition-transform duration-300">
              <img
                alt="Gold mask application"
                className="w-full h-full object-cover"
                src="/images/gold-mask.png"
              />
            </div>
            <div className="rounded-[24px] overflow-hidden aspect-square border border-rose/10 shadow-sm hover:scale-[1.02] transition-transform duration-300">
              <img
                alt="Facial treatment bed"
                className="w-full h-full object-cover"
                src="/images/spa-treatment.png"
              />
            </div>
            <div className="rounded-[24px] overflow-hidden aspect-square border border-rose/10 shadow-sm hover:scale-[1.02] transition-transform duration-300">
              <img
                alt="Water droplets on lotus"
                className="w-full h-full object-cover"
                src="/images/skincare-products.png"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
