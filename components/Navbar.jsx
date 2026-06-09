'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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

            <Link
              href="/booking"
              className="bg-primary text-on-primary bg-mauve text-white hover:bg-mauve/90 btn-active-scale px-6 py-2.5 rounded-full font-poppins text-sm font-semibold hover:scale-105 transition-all shadow-md"
            >
              Book Home Visit
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-charcoal hover:text-gold p-2 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
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
    </>
  );
}
