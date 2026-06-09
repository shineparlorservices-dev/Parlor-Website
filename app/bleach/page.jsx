import React from 'react';
import Link from 'next/link';
import { Sparkles, ArrowRight, ShieldCheck, UserCheck, Droplets } from 'lucide-react';
import { services } from '@/lib/services';

export default function Bleach() {
  const data = services.bleach;

  const bleachItems = [
    {
      name: 'Oxy Life Bleach',
      tag: 'Skin Face',
      desc: 'Advanced active oxygen formula for instant glow and gentle removal of stubborn sun tan from facial skin.',
      img: 'https://lh3.googleusercontent.com/aida/AP1WRLuXJob5lsoSuy2nIWhHs7qXUgXmTGdfgDSJQ790pBkzMf4APuN6fdHmFpuUbeCFR9WkvdZKoQFFF2_mi9qM6J29xI8JAxYeJdLQoY4lU6Mp8LHcVKlZkyY2Ts34Mvrq5FMd5bnw1Ewhjo8L1LyrZhr-UAIsNG0O9LS249eltuNQ85_sq6NlyW7_4Njzwai8rIbCnHRSEdEiu5zV0u4SJRe_t2gcmiFVydA3NLSQCApM_SvY1MwzOQ38cBk',
    },
    {
      name: 'Underarm Bleach',
      tag: 'Body Care',
      desc: 'Gentle, soothing skin-lightening treatment for sensitive underarm skin to reduce dark spots and hyperpigmentation.',
      img: 'https://lh3.googleusercontent.com/aida/AP1WRLvPWDbYezHZKjoWk7iZ-55a0AiTBcmw94P4V0jnOb2dJwswzR77Cs_EDerXB01U9LxZplULjPLmW6kDjnIKCqUMsoczGmCwudy0ix8bgelp0D79kdFtsgfp68528bsyi9F0RXPnMQlIbgCTu9KHfQM4Rccsj3MRhdjiQlijpVXom85aRaE3hcoFZlLpcgrkaVt0tGcsI8wV1NOU-nbYO80pbsjs5A-Rp0bZYsa6wVVsO9pMThAdnVs5ppk',
    },
    {
      name: 'Full Hand Bleach',
      tag: 'Arms',
      desc: 'Comprehensive bleaching coverage for full arms, removing intense sun tan and evening skin coloration.',
      img: 'https://lh3.googleusercontent.com/aida/AP1WRLvm4Qb93mX9qzg8mm2NaSNXcaq-Bl2srzLZI8z5iuHH6OIhR1dsEl3dOeNXIHW7PNQzptzE0Wl1hETPfGEXOGidkz0rrYMK9H5w8QNACUfTfnL5i67fwpb9ve939e7Z5TmlGRxLDYX4QMDHs6cTifkTlAiy3pj3BiPr_n8bWIBXu1YW6SC4Ah7hcRguVB_0coCD-6BmkVVSsV-aFa45Bf5bFyBiHC-j53ChgrikYDlZPoTYLIhgiNZ-h_0',
    },
    {
      name: 'Half Arm Bleach',
      tag: 'Arms',
      desc: 'Targeted treatment for lower or upper arms to safely eliminate discoloration and restore natural skin tones.',
      img: 'https://lh3.googleusercontent.com/aida/AP1WRLtrFub-gTCznoJ1sZGb1Kde9Ci0dtDyKRhpLnDEsrXI6W4bxXlmQ3jhXYMB3BAhLriX3vX-7CvdaR72jatW1fYdcOZaWMUGkp4L2106XKOsMkguFQIYQ8UdeXwqJMwog0eisHJHsgksj5OB9H164b769ix9f2MxSfN9byuJYv2YoMowgkLtZa85dETdS0aXK-Pfe5xeQ4EA6eS7_Y6RVK72GFUly41e5WUkNO7JEZNtWRqzVunsulVO3z0',
    },
    {
      name: 'Full Leg Bleach',
      tag: 'Legs',
      desc: 'Deep brightening treatment for entire legs, perfect for achieving occasion-ready smooth and glowing skin.',
      img: 'https://lh3.googleusercontent.com/aida/AP1WRLvuoTblMxo28k6cFZaNiQLq0uu62sPRQLBhVkkAPGYGE9z49izzXx1NAeR2H1LLFQKleMTnv9r7Ot1PgQgIgsrX8CpbcgHR5Buo3XXTNNMku48ieM_nPWLTGZLgbdPkNdbaytbPJbPDEZCZF1DJvwv3GaL3exM_1Xx6kkY9eSSvKXzkTG2svKgvLRDymDrbfG2l5CB5C3UghQNfM_sgSdP5VklykgoMPnR6b5BF5XPWVNDGibinpbZfAPs',
    },
    {
      name: 'Half Leg Bleach',
      tag: 'Legs',
      desc: 'Quick and effective tan removal for half legs, ensuring smooth, even, and luminous results.',
      img: 'https://lh3.googleusercontent.com/aida/AP1WRLv_OHzw7gA_yD4F3ycK_65v8iolVS8BcIM1XOP5SZhR4EpVMlgzyKd3UwDuBBGdJFTqcnTHMOQIAOW6cmzYvNu2lCVl38rzx1kIqZTONOQtAYK4XQ5Ha6iYDyUwWrTO0Vhhj3p16YcS0ZOhPwDKwUe6aMm6OyDEfQLWo1FK-Qth3tfIcaHfKkwQJyWrHeNkztccrHG6wNhidh4NWdFJ7blgi54B5ubv7hnZIdjkNgf7dsrzNof6yCMV5A',
    },
  ];

  return (
    <div className="animate-fade-in font-poppins min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="relative h-[45vh] flex items-center justify-center overflow-hidden bg-rose/10">
        <div className="absolute inset-0 z-0">
          <img
            alt="Luxury beauty products"
            className="w-full h-full object-cover opacity-20 scale-105"
            src="https://lh3.googleusercontent.com/aida/AP1WRLt_z_-0RQHlRWNgLkNtLqWWKTUaL7c4k-b6mRudCYmTJblLjBsuadvKYM59hXm75_SCO0v9VoKh4Ti1_lg0vRCH5Q5ehQUqG0W_S1lrheMHVjrFqh4qTAPkU8ct5NYIY6GxwffLCYWuJZUfeFCJ_USY8nlsyWKYrmDZuGKT0me_d0AuW9pL1L2p7R_uCDX72HX80sMR9U2_sjq89o7B07Sq3OEvZN7yiOVyrZ_6ptNw5uV_ORnYpFgF7xM"
          />
        </div>
        <div className="container relative z-10 px-4 text-center">
          <div className="inline-flex items-center gap-1.5 bg-rose/30 text-mauve px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 font-poppins">
            <Sparkles className="w-3.5 h-3.5 text-gold" /> Skin Brightening Care
          </div>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Bleach Services {data.emoji}
          </h1>
          <p className="text-charcoal/80 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Brighten and even your skin tone with our professional-grade formulas, designed for gentle yet effective results.
          </p>
          <div className="mt-6">
            <Link
              href="/booking?category=Bleach"
              className="bg-mauve text-white px-8 py-3.5 rounded-full font-semibold inline-block hover:bg-mauve/95 hover:scale-105 btn-active-scale transition-all shadow-md text-sm"
            >
              Book Bleach Service
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bleachItems.map((item) => (
            <div
              key={item.name}
              className="group bg-white rounded-[24px] p-5 border border-rose/15 shadow-sm hover-card-effect flex flex-col justify-between"
            >
              <div>
                <div className="h-60 rounded-[20px] overflow-hidden mb-6 border border-rose/10">
                  <img
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={item.img}
                  />
                </div>
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-playfair text-lg sm:text-xl font-bold text-charcoal">{item.name}</h3>
                  <span className="font-poppins text-[10px] font-bold bg-rose/20 text-mauve px-2.5 py-1 rounded-full uppercase tracking-wide">
                    {item.tag}
                  </span>
                </div>
                <p className="text-charcoal/70 text-sm font-poppins mb-6 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-rose/10 pt-4 mt-auto">
                <span className="font-poppins font-bold text-sm text-gold">On Request</span>
                <Link
                  href={`/booking?category=Bleach&service=${encodeURIComponent(item.name)}`}
                  className="text-mauve hover:text-gold transition-colors flex items-center gap-1.5 font-semibold text-sm min-h-[48px]"
                >
                  Book Online <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quality Promise Section */}
      <section className="py-20 bg-rose/10 border-t border-rose/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-playfair text-3xl font-bold text-charcoal">Our Gentle Approach</h2>
            <p className="text-charcoal/75 text-sm sm:text-base leading-relaxed">
              At Shine Beauty, bleaching is performed with extreme care. We use premium, dermatologically tested, pH-balanced bleaching formulas that lift skin color without strip-drying.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5.5 h-5.5 text-gold shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-semibold text-charcoal text-sm">Gentle, Skin-Safe Formulas</h5>
                  <p className="text-xs text-charcoal/60">Enriched with natural aloe vera and active oxygen to calm the skin.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <UserCheck className="w-5.5 h-5.5 text-gold shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-semibold text-charcoal text-sm">Expert Application</h5>
                  <p className="text-xs text-charcoal/60">Applied exactly where needed, keeping sensitivity mapping in mind.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Droplets className="w-5.5 h-5.5 text-gold shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-semibold text-charcoal text-sm">Post-Treatment Hydration</h5>
                  <p className="text-xs text-charcoal/60">Every bleach treatment concludes with a cooling moisture lock massage.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative rounded-[24px] overflow-hidden shadow-2xl h-80 md:h-[400px] border border-rose/20">
            <img
              alt="Luxury spa treatment room"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida/AP1WRLvdrPIL0wQg1bnYq2XyCk4Tj6OSKMp8PiqPnjAAEa1PpCM61EHcVgYiBkdZqR-5YNGelsNVKea94brY5Z4rT8QQWwYOKQcYT_YyR2pbCH8lw7M60StTB6gfdWOXGCFTNOwEa6ztJxuksQOz4lSL2lMGWD4D0TMwMgP2sfvhO7aSu6g3cj0e5u-elN55xKTJ4ZiQoxg0FXAeLhfTY-o5KJm6Q2CH0uqbBqqZ2bvrsoSeNN5YcAWOPZYMA0I"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
