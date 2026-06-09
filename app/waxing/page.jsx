import React from 'react';
import Link from 'next/link';
import { Sparkles, Calendar, Phone, ArrowRight } from 'lucide-react';
import { services } from '@/lib/services';

export default function Waxing() {
  const data = services.waxing;
  const phone = process.env.NEXT_PUBLIC_PHONE || '+91 9999999999';

  const itemsWithImages = [
    {
      ...data.items[0],
      img: 'https://lh3.googleusercontent.com/aida/AP1WRLuH0uLAOzgb7dKgAE2ayx2OehfYkgmRwQLBdN_UPl8G4DZR1lch6gObunhrl1KtrX_UI68KAEPvqA-cDpGvi8NkHdL9qK00ZHVNaLlluc1LAAALmL5XQ4w0F4zwk_1IgQ4uL7jY6Ty_V6k6dgvAhH_E_oscohHnQBMdnfJn5v6QkAfR4_tbjIXRAvOGCApsO0FoPyflfxMz6p9dDkmXRlOz0-i36QKWoGS1UTSryQ_Znh6AZ1o5KlSQldM',
    },
    {
      ...data.items[1],
      img: 'https://lh3.googleusercontent.com/aida/AP1WRLsHu6cNDyq-S9a7qDBUhSb_u1_2k2yjbFMY4fveTKbvP17384L1nyL-dwwPJXkIkTRHmTuDXt-7uNQfq6FLz36D9Dq7MnZvlbfB3bESV5vEl2d5E2835v6aQ_IoZBLC0Y1SXer7vh31lBnVf3-RCxsOl11AroQ4KxCeFe9wPJMk_9Axqx1sCCOVlpGSTSnHDyS94trOomlq746p8h_lvjKlKUpSeFB9oI-El46S2eZTzbE7oeRq52S3Qk0',
    },
    {
      ...data.items[2],
      img: 'https://lh3.googleusercontent.com/aida/AP1WRLulqkNGsqMUOvtVNDLhpbCXxK-LjEsDXtkabD81NsP196u7jkx2GrDD77ZiZJtQmf4Hcd-F13VCpeUxLW79KZ-TUhbN73jYUz4Cd-JfXAMsLVfpr_3NMKHK9gCiIa1EOKQz6pf9z4NotHr2niG-wLscTPsblivv7Ko1TYMQt31qX9EoJtyAL8l33gv2loMucWgHsRb8vPZOe5xyLfR6yyrig42hIrbcsCjd2CW7ediDJkT5GTyblAiWlps',
    },
    {
      ...data.items[3],
      img: 'https://lh3.googleusercontent.com/aida/AP1WRLvFgMaCIsCKw3ZlIX6wxbpaHbPR88Hh2Q8hexv6otR33LF65QA5DYH2DYISbl5DmDzGyoQkNPAAZ6L7Pxn-XWVCT_D3qDlAMAovyNPowsZzlHLbcFq0woIw1QVldB6-TrIFd86BX5stByfSSLp0VmSe6NnyWPfDxh6_GSWxO8H0a6PbQE-TDaMQCntuTP3bAuaCOU2VhtHgYuFPRAqcG1XJnubEWyVWhpMKByfKoOCaxcZWQHWBHQAJZIU',
    },
  ];

  return (
    <div className="animate-fade-in font-poppins min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Waxing salon environment"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida/AP1WRLt8SwgHMwd5J7B7wuBX9NY-lH8iKa8VlwvzevaMHew73Tic9D5lhiD-GTG0jjzJ8CnUx69u5FNnLPnSI2YsCJUJVSi1_OD5YUUHOWruVj3v9wKU_Wgl4q9kAXvDQYnWMaYWFNX9Aako3JdLlUcuFLYp8XFLZ_6y12IJBHiOJEygMXLv8TL88VjDjCxVbqUT37lIssTwPNRq3hciki8pyJFqjuEk_R7L9G_J9dXRoge2C-8A-qN7_R99tZA"
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

      {/* Signature Waxes Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="pricing">
        <div className="mb-12 space-y-2">
          <h2 className="text-3xl font-playfair font-bold text-charcoal">Our Signature Waxes</h2>
          <p className="text-charcoal/70 text-sm">Tailored treatments for your unique skin needs.</p>
          <div className="w-20 h-1 bg-gold rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {itemsWithImages.map((item) => (
            <div
              key={item.name}
              className="bg-white border border-rose/15 rounded-[24px] overflow-hidden shadow-sm hover-card-effect flex flex-col h-full"
            >
              <div className="h-44 overflow-hidden border-b border-rose/10">
                <img
                  alt={item.name}
                  className="w-full h-full object-cover"
                  src={item.img}
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-playfair font-bold text-charcoal mb-2">{item.name}</h3>
                <p className="text-charcoal/70 text-xs sm:text-sm font-poppins flex-grow mb-6">
                  {item.desc}
                </p>
                <div className="flex flex-col gap-3 mt-auto">
                  <div className="text-gold font-bold text-xs uppercase tracking-wider">
                    {data.startingPrice}
                  </div>
                  <Link
                    href={`/booking?category=Waxing&service=${encodeURIComponent(item.name)}`}
                    className="w-full bg-mauve text-white py-2.5 rounded-full font-semibold text-sm hover:bg-mauve/95 transition-all text-center flex items-center justify-center gap-1.5 btn-active-scale shadow-sm"
                  >
                    <Calendar className="w-4 h-4 shrink-0" /> Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Booking CTA Banner */}
      <section className="mb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto bg-rose/20 rounded-[32px] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-rose/15">
          <div className="text-center md:text-left space-y-2">
            <h2 className="text-2xl font-playfair font-bold text-charcoal">Book Your Session</h2>
            <p className="text-charcoal/75 text-sm sm:text-base max-w-lg leading-relaxed">
              Experience the smoothest waxing in the city. Call us for custom package inquiries or book your appointment online.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto shrink-0">
            <a
              href={`tel:${phone}`}
              className="bg-white text-mauve border border-mauve px-8 py-3.5 rounded-full font-semibold text-center hover:bg-mauve hover:text-white transition-all flex items-center justify-center gap-1.5 shadow-sm"
            >
              <Phone className="w-4 h-4" /> Call for Price
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
