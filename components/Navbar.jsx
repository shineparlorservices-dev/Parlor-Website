'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, ShoppingBag, Trash2, Calendar } from 'lucide-react';
import { useCart } from '@/lib/CartContext';

export default function Navbar() {
  const pathname = usePathname();
  const { cart, removeFromCart, getCartTotal, isLoaded } = useCart();

  const [isOpen, setIsOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Book Now', href: '/booking' },
    { name: 'My Bookings', href: '/my-bookings' },
    { name: 'Contact', href: '/contact' },
  ];

  const services = [
    { name: 'Threading', href: '/threading' },
    { name: 'Facial', href: '/facial' },
    { name: 'Waxing', href: '/waxing' },
    { name: 'Bleach', href: '/bleach' },
  ];

  const isActive = (href) => {
    if (href === '/' && pathname !== '/') return false;
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 bg-cream/95 backdrop-blur-md border-b-2 border-gold/20 ${
          hasShadow ? 'shadow-md py-3' : 'py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-xl md:text-2xl font-bold font-playfair text-charcoal hover:scale-[1.02] transition-transform duration-200"
          >
            <span className="text-2xl animate-pulse">🌸</span>
            <span className="text-charcoal font-semibold">Shine Beauty Services</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className={`font-poppins text-sm font-semibold transition-all duration-200 hover:text-gold ${
                pathname === '/'
                  ? 'text-gold border-b-2 border-gold pb-1'
                  : 'text-charcoal/80'
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button
                className={`flex items-center gap-1 font-poppins text-sm font-semibold transition-all duration-200 hover:text-gold ${
                  ['/threading', '/facial', '/waxing', '/bleach'].includes(pathname)
                    ? 'text-gold'
                    : 'text-charcoal/80'
                }`}
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white border border-rose/30 rounded-2xl shadow-xl py-2 animate-fade-in">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      onClick={() => setIsDropdownOpen(false)}
                      className={`block px-4 py-3 text-sm font-poppins hover:bg-cream hover:text-gold transition-colors ${
                        pathname === service.href ? 'text-gold font-bold bg-cream' : 'text-charcoal/80'
                      }`}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-poppins text-sm font-semibold transition-all duration-200 hover:text-gold ${
                  isActive(link.href)
                    ? 'text-gold border-b-2 border-gold pb-1'
                    : 'text-charcoal/80'
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Cart Header Trigger */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 bg-rose/10 hover:bg-rose/20 rounded-full text-mauve hover:text-gold transition-all duration-200 flex items-center justify-center shadow-sm"
              aria-label="Open Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {isLoaded && cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-gold text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center animate-pulse">
                  {cart.length}
                </span>
              )}
            </button>

            <Link
              href="/booking"
              className="bg-primary text-on-primary bg-mauve text-white hover:bg-mauve/90 btn-active-scale px-6 py-2.5 rounded-full font-poppins text-sm font-semibold hover:scale-105 transition-all shadow-md"
            >
              Book Home Visit
            </Link>
          </nav>

          {/* Mobile Right Bar */}
          <div className="flex items-center gap-3 md:hidden">
            {/* Cart Button for Mobile */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 bg-rose/10 rounded-full text-mauve"
              aria-label="Open Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {isLoaded && cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-gold text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-charcoal hover:text-gold p-2 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Overlay Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-cream/98 backdrop-blur-lg md:hidden animate-slide-down">
          <div className="flex flex-col p-6 gap-6 pt-24 h-full">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className={`text-lg font-poppins font-semibold border-b border-rose/10 pb-2 ${
                pathname === '/' ? 'text-gold font-bold' : 'text-charcoal/80'
              }`}
            >
              Home
            </Link>

            {/* Services Submenu on Mobile */}
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold text-mauve uppercase tracking-widest font-poppins">Services</span>
              <div className="grid grid-cols-2 gap-3 pl-2">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-sm font-poppins font-medium py-1 ${
                      pathname === service.href ? 'text-gold font-semibold' : 'text-charcoal/70'
                    }`}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-poppins font-semibold border-b border-rose/10 pb-2 ${
                  isActive(link.href) ? 'text-gold font-bold' : 'text-charcoal/80'
                }`}
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/booking"
              onClick={() => setIsOpen(false)}
              className="mt-6 w-full text-center bg-mauve text-white hover:bg-mauve/90 py-3 rounded-full font-poppins font-semibold shadow-lg"
            >
              Book Home Appointment
            </Link>
          </div>
        </div>
      )}

      {/* Sliding Cart Drawer Overlay */}
      {isCartOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end animate-fade-in">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-charcoal/40 backdrop-blur-xs transition-opacity duration-300"
            onClick={() => setIsCartOpen(false)}
          />

          {/* Drawer Panel */}
          <div className="relative w-full max-w-md h-full bg-white shadow-2xl flex flex-col z-10 border-l border-rose/20 animate-slide-in">
            {/* Header */}
            <div className="p-6 border-b border-rose/10 flex justify-between items-center bg-cream/40">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-mauve" />
                <h3 className="font-playfair text-xl font-bold text-charcoal">Selected Services</h3>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-1 hover:bg-rose/10 rounded-full transition-colors text-charcoal/60 hover:text-charcoal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-16 h-16 bg-cream rounded-full flex items-center justify-center text-3xl">
                    🛍
                  </div>
                  <div>
                    <h4 className="font-playfair text-lg font-bold text-charcoal">Your cart is empty</h4>
                    <p className="text-xs text-charcoal/60 max-w-[240px] mx-auto mt-1 leading-relaxed">
                      Explore my services to add personalized treatments to your doorstep visit.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setIsCartOpen(false);
                    }}
                    className="text-xs font-bold text-mauve underline underline-offset-4"
                  >
                    Browse Services
                  </button>
                </div>
              ) : (
                cart.map((item, idx) => (
                  <div
                    key={`${item.category}-${item.name}-${idx}`}
                    className="flex justify-between items-center p-4 bg-cream/40 border border-rose/10 rounded-2xl group hover:border-gold/30 hover:shadow-sm transition-all"
                  >
                    <div>
                      <span className="text-[10px] uppercase font-bold text-mauve tracking-wide bg-rose/15 px-2 py-0.5 rounded-md">
                        {item.category}
                      </span>
                      <h4 className="font-playfair text-base font-bold text-charcoal mt-1.5">{item.name}</h4>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-playfair text-base font-bold text-gold">{item.price}</span>
                      <button
                        onClick={() => removeFromCart(item.category, item.name)}
                        className="text-charcoal/40 hover:text-red-500 p-1 hover:bg-red-50 rounded-full transition-all"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer Summary */}
            {cart.length > 0 && (
              <div className="p-6 border-t border-rose/10 bg-cream/30 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-charcoal/70">Estimated Total:</span>
                  <span className="font-playfair text-2xl font-bold text-gold">₹{getCartTotal().toLocaleString()}</span>
                </div>
                <div className="text-[10px] text-charcoal/50 leading-relaxed font-poppins">
                  *I will bring all required professional products and tools directly to your home in Bangalore.
                </div>
                <Link
                  href="/booking"
                  onClick={() => setIsCartOpen(false)}
                  className="w-full bg-mauve text-white py-4 rounded-full font-semibold text-center block hover:bg-mauve/95 transition-all shadow-md flex items-center justify-center gap-2 hover:scale-[1.01]"
                >
                  Proceed to Book Visit <Calendar className="w-4 h-4" />
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
