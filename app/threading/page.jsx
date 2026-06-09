import React from 'react';
import Link from 'next/link';
import { Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { services } from '@/lib/services';

export default function Threading() {
  const data = services.threading;

  return (
    <div className="animate-fade-in font-poppins min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-[45vh] flex items-center justify-center overflow-hidden bg-rose/10">
        <div className="absolute inset-0 z-0">
          <img
            alt="Professional threading session"
            className="w-full h-full object-cover opacity-20"
            src="https://lh3.googleusercontent.com/aida/AP1WRLsZ_Ho73L2EoV5pap-w_Txuu5jyrpm956bdVpUreW40qR2RjydGVIeMxHku_CWrlMlFcGM0gvAhCUjA_WUJel1ActnSS9EO1F1mPlJ-5UWVzuQ7hFu_7g1DUdZZt8tsX8AXPxVuZhMq6cb52f1HxUshpjYr94_W-T8gUIosq5PzrXu00nqeWiQq3kyAPD9OkyB_8qkl0eqt0OXHUACchFSa9bmKiD6fYo4Tq6LY2OssWFPO5Fa2wq-xNMo"
          />
        </div>
        <div className="container relative z-10 px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-rose/30 text-mauve px-4 py-1.5 rounded-full mb-4 animate-fade-in">
            <span className="text-xs font-bold uppercase tracking-widest flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-gold" /> Precise Grooming
            </span>
          </div>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Threading Services {data.emoji}
          </h1>
          <p className="text-charcoal/80 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Precise shaping for perfect brows and more. Experience the art of traditional threading refined for modern luxury.
          </p>
        </div>
      </section>

      {/* Service Menu */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-2">
            <h2 className="font-playfair text-3xl font-bold text-charcoal">Service Menu</h2>
            <div className="h-1 w-20 bg-gold mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Eyebrows (Feature Card) */}
            <div className="md:col-span-8 bg-cream/70 rounded-[24px] p-6 border border-rose/10 shadow-sm hover-card-effect flex flex-col sm:flex-row gap-6 items-center">
              <div className="w-full sm:w-1/3 h-40 rounded-xl overflow-hidden shrink-0 border border-rose/10">
                <img
                  alt="Eyebrow threading"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida/AP1WRLtLM8yZhVkV7rhW6AAlO1XLbaWz0w1osU0qF1PjHVbY6mvpjsx94eXyBV6-4Yr7veDCKHple2Zflu3pTIBCMT1k7-AK0vs63UvcJbP0HARvAy8jUt98B6x2ygmrelDTJprgVV8zkspak2Zt5Kw34r7QLKhfG6sS5oYDDGnPPpHcdrlMiUIVynLJGx-mVs33v9NNcMPisrIeQ3XOBy2SF0eJgGLulAhgsd0b_Bh8XF7Zkb9aZex8Yr_rpA"
                />
              </div>
              <div className="flex-1 space-y-4 w-full">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="font-playfair text-xl font-bold text-charcoal">Eyebrows</h3>
                    <p className="text-charcoal/70 text-sm font-poppins mt-1">
                      Precision shaping to frame your face beautifully.
                    </p>
                  </div>
                  <span className="font-playfair text-2xl font-bold text-gold shrink-0">₹50</span>
                </div>
                <div className="flex gap-2">
                  <span className="bg-rose/25 text-charcoal font-semibold px-3 py-1 rounded-full text-xs font-poppins">
                    Most Popular
                  </span>
                  <span className="bg-[#c2dbbd] text-[#0c200d] font-semibold px-3 py-1 rounded-full text-xs font-poppins">
                    15 Mins
                  </span>
                </div>
                <Link
                  href="/booking?category=Threading&service=Eyebrows"
                  className="inline-flex items-center gap-1.5 text-mauve font-semibold text-sm hover:gap-2.5 transition-all min-h-[48px]"
                >
                  Select Service <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Upper Lips */}
            <div className="md:col-span-4 bg-white border border-rose/15 rounded-[24px] p-6 shadow-sm hover-card-effect flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-rose/20 rounded-full flex items-center justify-center text-mauve font-bold">
                  💋
                </div>
                <h3 className="font-playfair text-xl font-bold text-charcoal">Upper Lips</h3>
                <p className="text-charcoal/70 text-sm font-poppins">
                  Smooth and gentle hair removal for a flawless, clean finish.
                </p>
              </div>
              <div className="mt-8 flex justify-between items-center border-t border-rose/10 pt-4">
                <span className="font-playfair text-2xl font-bold text-gold">₹50</span>
                <Link
                  href="/booking?category=Threading&service=Upper%20Lips"
                  className="w-10 h-10 bg-rose/25 hover:bg-mauve hover:text-white rounded-full flex items-center justify-center font-semibold text-charcoal transition-all"
                >
                  +
                </Link>
              </div>
            </div>

            {/* Forehead */}
            <div className="md:col-span-4 bg-white border border-rose/15 rounded-[24px] p-6 shadow-sm hover-card-effect flex flex-col justify-between group">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-playfair text-xl font-bold text-charcoal">Forehead</h3>
                  <span className="font-playfair text-xl font-bold text-gold">₹50</span>
                </div>
                <p className="text-charcoal/70 text-sm font-poppins">
                  Clear away fine forehead baby hairs to achieve a brighter facial complexion.
                </p>
              </div>
              <div className="mt-6">
                <Link
                  href="/booking?category=Threading&service=Forehead"
                  className="text-mauve font-semibold text-sm underline underline-offset-4 group-hover:opacity-100 transition-opacity"
                >
                  Quick Book
                </Link>
              </div>
            </div>

            {/* Chin */}
            <div className="md:col-span-4 bg-white border border-rose/15 rounded-[24px] p-6 shadow-sm hover-card-effect flex flex-col justify-between group">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-playfair text-xl font-bold text-charcoal">Chin</h3>
                  <span className="font-playfair text-xl font-bold text-gold">₹30</span>
                </div>
                <p className="text-charcoal/70 text-sm font-poppins">
                  Quick and highly effective hair threading designed specifically for sensitive skin.
                </p>
              </div>
              <div className="mt-6">
                <Link
                  href="/booking?category=Threading&service=Chin"
                  className="text-mauve font-semibold text-sm underline underline-offset-4 group-hover:opacity-100 transition-opacity"
                >
                  Quick Book
                </Link>
              </div>
            </div>

            {/* Sidelocks */}
            <div className="md:col-span-4 bg-white border border-rose/15 rounded-[24px] p-6 shadow-sm hover-card-effect flex flex-col justify-between group">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-playfair text-xl font-bold text-charcoal">Sidelocks</h3>
                  <span className="font-playfair text-xl font-bold text-gold">₹30</span>
                </div>
                <p className="text-charcoal/70 text-sm font-poppins">
                  Precision sidelocks hair trimming to define your profile with clean, sharp lines.
                </p>
              </div>
              <div className="mt-6">
                <Link
                  href="/booking?category=Threading&service=Sidelocks"
                  className="text-mauve font-semibold text-sm underline underline-offset-4 group-hover:opacity-100 transition-opacity"
                >
                  Quick Book
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Art of Precision section */}
      <section className="py-20 bg-cream border-t border-rose/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square max-h-[450px] rounded-[48px] overflow-hidden shadow-2xl border border-rose/10">
              <img
                alt="Luxury salon interior decoration"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida/AP1WRLuktQyZBwONT3jeiovS9JilGHMjmElO-6hOHve5msbwadQiqDtW8Pm1GC9x9DTOAsE8ZZDteKChhK0aXUvtBT9-yxzCCvSDDdjf86d7BeLIftOtcu1W26LsbFw2w3c6FrCLyyxvQnEi6Ueocc1NC66FmHLDtj2asVro7RcuYVBrBNT3cfyLcWbhcUzn1r8s-CoplrnGkZws-Q4zRWD1OxDWREDmAvPmRxUJlzQyifdnOHbAsjzwWxZhkvg"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-rose/85 backdrop-blur-md rounded-full flex items-center justify-center p-4 text-center shadow-xl border border-rose/20 hidden sm:flex">
              <p className="font-playfair text-xs font-bold text-charcoal">
                100% Sanitized Organic Thread
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="font-playfair text-3xl font-bold text-charcoal">The Art of Precision</h2>
            <p className="text-charcoal/75 text-sm sm:text-base leading-relaxed">
              Unlike waxing, threading offers unparalleled micro-control, allowing our specialists to target even the finest individual root hairs without pinching or stretching your skin.
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
