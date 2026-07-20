'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingBag, ArrowRight, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import { useCart } from '@/lib/CartContext';

export default function CartPopup() {
  const pathname = usePathname();
  const { cart, getCartTotal, isLoaded } = useCart();
  const [isMinimized, setIsMinimized] = useState(false);
  const [lastCartLength, setLastCartLength] = useState(0);
  const [justAdded, setJustAdded] = useState(false);

  // Trigger brief bounce animation whenever a new item is added to cart
  useEffect(() => {
    if (cart.length > lastCartLength) {
      setIsMinimized(false);
      setJustAdded(true);
      const timer = setTimeout(() => setJustAdded(false), 2500);
      return () => clearTimeout(timer);
    }
    setLastCartLength(cart.length);
  }, [cart.length, lastCartLength]);

  // Hide on booking page or if cart is empty or not loaded
  if (!isLoaded || cart.length === 0 || pathname === '/booking') {
    return null;
  }

  const latestItem = cart[cart.length - 1];

  return (
    <div className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 w-[92%] sm:w-auto sm:min-w-[420px] max-w-xl transition-all duration-300 animate-slide-up">
      {isMinimized ? (
        /* Minimized Floating Pill */
        <button
          onClick={() => setIsMinimized(false)}
          className="bg-charcoal text-cream border-2 border-gold/40 px-5 py-3 rounded-full shadow-2xl flex items-center justify-between gap-4 mx-auto hover:scale-105 transition-all group cursor-pointer"
        >
          <div className="flex items-center gap-2">
            <div className="relative">
              <ShoppingBag className="w-5 h-5 text-gold animate-bounce" />
              <span className="absolute -top-1.5 -right-2 bg-mauve text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cart.length}
              </span>
            </div>
            <span className="font-playfair font-bold text-sm text-gold">₹{getCartTotal().toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-1 text-xs font-poppins font-semibold text-rose group-hover:text-white transition-colors">
            <span>View Cart</span>
            <ChevronUp className="w-4 h-4" />
          </div>
        </button>
      ) : (
        /* Full Floating Pop-up Banner */
        <div className="bg-charcoal/95 backdrop-blur-md text-white border-2 border-gold/40 rounded-[28px] p-4 sm:p-5 shadow-2xl relative overflow-hidden">
          {/* Subtle gold glow accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-2xl pointer-events-none" />

          {/* Just added notification bar */}
          {justAdded && (
            <div className="bg-gradient-to-r from-gold/30 via-rose/30 to-gold/30 text-white text-[11px] font-semibold font-poppins py-1 px-3 rounded-full mb-3 text-center flex items-center justify-center gap-1.5 animate-pulse">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span>Added to Cart! Service selected for home visit</span>
            </div>
          )}

          <div className="flex items-center justify-between gap-3 sm:gap-6">
            {/* Left Info Section */}
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 bg-gradient-to-br from-mauve to-deep-rose rounded-2xl flex items-center justify-center shrink-0 shadow-md">
                <ShoppingBag className="w-6 h-6 text-white" />
                <span className="absolute -top-1 -right-1 bg-gold text-charcoal font-bold text-xs w-5 h-5 rounded-full flex items-center justify-center border-2 border-charcoal">
                  {cart.length}
                </span>
              </div>
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <span className="font-playfair text-lg font-bold text-gold">
                    ₹{getCartTotal().toLocaleString()}
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-rose bg-rose/15 px-2 py-0.5 rounded-full font-poppins">
                    {cart.length} {cart.length === 1 ? 'Service' : 'Services'}
                  </span>
                </div>
                {latestItem && (
                  <p className="text-xs text-cream/70 font-poppins truncate max-w-[180px] sm:max-w-[220px]">
                    Last: <span className="text-cream font-medium">{latestItem.name}</span>
                  </p>
                )}
              </div>
            </div>

            {/* Right Action Section */}
            <div className="flex items-center gap-2 shrink-0">
              <Link
                href="/booking"
                className="bg-gradient-to-r from-gold to-[#e8d48b] text-charcoal hover:brightness-110 px-5 py-3 rounded-full font-poppins text-xs sm:text-sm font-bold transition-all shadow-lg flex items-center gap-1.5 hover:scale-105 btn-active-scale"
              >
                <span>Proceed to Booking</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                onClick={() => setIsMinimized(true)}
                className="p-1.5 hover:bg-white/10 rounded-full transition-colors text-cream/60 hover:text-cream cursor-pointer"
                title="Minimize popup"
                aria-label="Minimize"
              >
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
