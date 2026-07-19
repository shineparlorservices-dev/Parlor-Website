import React from 'react';
import Link from 'next/link';
import { Phone, CheckCircle, Sparkles, MapPin, ShieldCheck, Heart, Star, ArrowRight } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
import { services } from '@/lib/services';

export default function Home() {
  const phone = process.env.NEXT_PUBLIC_PHONE || '+91 9999999999';

  /* Quick pricing highlights for the homepage */
  const quickPrices = [
    { label: 'Threading', from: services.threading.startingPrice, emoji: '🧵' },
    { label: 'Facial',    from: services.facial.startingPrice,    emoji: '✨' },
    { label: 'Waxing',    from: services.waxing.startingPrice,    emoji: '💅' },
    { label: 'Bleach',    from: services.bleach.startingPrice,    emoji: '🌟' },
  ];

  return (
    <div className="animate-fade-in font-poppins">
      {/* ═══════ Hero Section ═══════ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden py-16">
        <div className="absolute inset-0 hero-pattern opacity-50 z-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-rose/20 to-cream/95 z-0" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 bg-[#fed65b]/30 text-[#745c00] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider animate-pulse uppercase">
              Exclusive At-Home Services in Bangalore
            </div>
            <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal leading-tight">
              Luxury Salon Experience at Your <span className="gradient-text-gold">Doorstep</span>
            </h1>
            <p className="font-playfair text-xl md:text-2xl text-charcoal/80">
              Professional services in your comfort. ✨
            </p>

            {/* Quick Price Ticker */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-start pt-2">
              {quickPrices.map((item) => (
                <span
                  key={item.label}
                  className="price-tag text-xs flex items-center gap-1.5"
                >
                  <span>{item.emoji}</span>
                  <span>{item.label} from {item.from}</span>
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <Link
                href="#services"
                className="bg-mauve text-white px-8 py-4 rounded-full font-semibold text-center hover:scale-105 btn-active-scale transition-all shadow-lg hover:bg-mauve/95 animate-pulse-glow"
              >
                Our Services
              </Link>
              <a
                href={`tel:${phone}`}
                className="border-2 border-mauve text-mauve bg-white/40 backdrop-blur px-8 py-4 rounded-full font-semibold text-center hover:bg-mauve/10 btn-active-scale transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5 shrink-0" /> Call for Bangalore Service
              </a>
            </div>
          </div>
          <div className="hidden md:block relative h-[500px]">
            <div className="absolute inset-0 bg-rose/20 rounded-full blur-[80px]" />
            <img
              alt="Luxury At-Home Beauty Treatment"
              className="w-full h-full object-cover rounded-[100px] shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 border-2 border-rose/30"
              src="/images/home-hero.png"
            />
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-md px-5 py-3 rounded-2xl shadow-xl border border-rose/20 animate-float">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-gold fill-gold" />
                <span className="font-poppins text-xs font-bold text-charcoal">4.9★ Rated Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ Services Overview Section ═══════ */}
      <section className="py-20 bg-white" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-3">
            <span className="text-mauve font-poppins text-xs font-semibold uppercase tracking-widest">
              What We Offer
            </span>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-charcoal">
              Signature Home Treatments
            </h2>
            <p className="text-charcoal/70 max-w-lg mx-auto">
              Enjoy premium grooming without leaving the comfort of your home.
            </p>
            <div className="section-divider mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              title={services.threading.title}
              emoji={services.threading.emoji}
              slug={services.threading.slug}
              startingPrice={services.threading.startingPrice}
            />
            <ServiceCard
              title={services.facial.title}
              emoji={services.facial.emoji}
              slug={services.facial.slug}
              startingPrice={services.facial.startingPrice}
            />
            <ServiceCard
              title={services.waxing.title}
              emoji={services.waxing.emoji}
              slug={services.waxing.slug}
              startingPrice={services.waxing.startingPrice}
            />
            <ServiceCard
              title={services.bleach.title}
              emoji={services.bleach.emoji}
              slug={services.bleach.slug}
              startingPrice={services.bleach.startingPrice}
            />
          </div>

          {/* View All Prices CTA */}
          <div className="text-center mt-12">
            <Link
              href="/booking"
              className="inline-flex items-center gap-2 text-mauve font-semibold text-sm hover:text-gold transition-colors group"
            >
              View All Services & Prices
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════ Why Choose Us Section ═══════ */}
      <section className="py-20 bg-cream border-y border-rose/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-3">
            <span className="text-mauve font-poppins text-xs font-semibold uppercase tracking-widest">
              Why Shine Beauty
            </span>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-charcoal">
              The At-Home Shine Standard
            </h2>
            <p className="text-charcoal/70 max-w-2xl mx-auto text-base">
              I bring the luxury of a premium studio directly to your living room. A personalized 1-on-1 home visit service across Bangalore limit only.
            </p>
            <div className="section-divider mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="glass-card p-8 rounded-[24px] text-center space-y-4 shadow-sm hover:shadow-md transition-shadow hover-card-effect stagger-child">
              <div className="w-16 h-16 bg-gradient-to-br from-gold/20 to-gold/5 rounded-2xl flex items-center justify-center mx-auto">
                <Heart className="w-8 h-8 text-gold fill-gold/10" />
              </div>
              <h3 className="font-playfair text-xl font-bold text-charcoal">Your Comfort First</h3>
              <p className="text-charcoal/70 text-sm leading-relaxed">
                Skip the stressful Bangalore traffic. As an expert beautician, I travel directly to your home with a fully equipped mobile setup and premium spa supplies.
              </p>
            </div>

            {/* Card 2 - Main highlight */}
            <div className="glass-card p-8 rounded-[24px] text-center space-y-4 shadow-xl border-mauve/20 md:scale-105 z-10 bg-white animate-border-glow stagger-child">
              <div className="w-16 h-16 bg-gradient-to-br from-mauve/20 to-mauve/5 rounded-2xl flex items-center justify-center mx-auto">
                <ShieldCheck className="w-8 h-8 text-mauve" />
              </div>
              <h3 className="font-playfair text-xl font-bold text-charcoal">Hygienic Setup</h3>
              <p className="text-charcoal/70 text-sm leading-relaxed">
                I maintain clinical-grade hygiene standards in your home. Using sealed disposable kits, premium organic products, and thoroughly sterilized tools.
              </p>
            </div>

            {/* Card 3 */}
            <div className="glass-card p-8 rounded-[24px] text-center space-y-4 shadow-sm hover:shadow-md transition-shadow hover-card-effect stagger-child">
              <div className="w-16 h-16 bg-gradient-to-br from-gold/20 to-gold/5 rounded-2xl flex items-center justify-center mx-auto">
                <MapPin className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-playfair text-xl font-bold text-charcoal">Bangalore Exclusive</h3>
              <p className="text-charcoal/70 text-sm leading-relaxed">
                Localized services tailored for Bangalore's top localities including Indiranagar, Koramangala, Whitefield, HSR Layout, and Jayanagar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ How It Works Section ═══════ */}
      <section className="py-20 bg-white" id="area">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-mauve font-poppins text-xs font-semibold uppercase tracking-widest">
                How It Works
              </span>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-charcoal">
                Professional Salon, Brought to You
              </h2>
              <p className="text-charcoal/75 leading-relaxed">
                Say goodbye to travel fatigue. I deliver premium parlor treatments directly to the quiet comfort of your private residence.
              </p>

              <div className="space-y-5">
                {[
                  { step: '01', title: 'Schedule a Visit', desc: 'Choose a convenient date & hour via the online booking form.' },
                  { step: '02', title: 'Relax at Home', desc: 'I arrive on time with a complete luxury beauty service kit.' },
                  { step: '03', title: 'Personalized Care', desc: 'Sit back and enjoy your pampering session without any step-out stress.' },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4 stagger-child">
                    <div className="w-10 h-10 bg-gradient-to-br from-gold/20 to-gold/5 rounded-xl flex items-center justify-center shrink-0">
                      <span className="font-playfair text-sm font-bold text-gold">{item.step}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-charcoal text-sm">{item.title}</h4>
                      <p className="text-xs text-charcoal/60">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-rose/5 p-8 rounded-[32px] border border-rose/15 shadow-sm">
              <h3 className="font-playfair text-xl font-bold text-charcoal mb-6 text-center">Serviceable Locations</h3>
              <div className="grid grid-cols-2 gap-3">
                {['Koramangala', 'Indiranagar', 'Whitefield', 'Jayanagar', 'HSR Layout', 'Electronic City', 'Hebbal', 'Malleshwaram'].map((loc) => (
                  <div key={loc} className="p-3 bg-white text-center rounded-xl text-xs font-semibold text-charcoal shadow-sm border border-rose/10 hover:border-gold/30 hover:shadow-md transition-all">
                    {loc}
                  </div>
                ))}
              </div>
              <p className="mt-6 text-center text-xs text-charcoal/60 italic">
                Don't see your neighborhood? Contact us to verify coverage!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ CTA Section ═══════ */}
      <section className="py-16 bg-gradient-to-r from-rose/40 via-rose/30 to-rose/40 relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-0 left-1/4 w-48 h-48 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-mauve/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left relative z-10">
          <div>
            <h2 className="font-playfair text-3xl font-bold text-charcoal flex items-center justify-center md:justify-start gap-2">
              Ready to Shine at Home? <Sparkles className="w-6 h-6 text-gold fill-gold/10" />
            </h2>
            <p className="text-charcoal/85 mt-2">Book your doorstep pampering session today. Servicing Bangalore limit only.</p>
          </div>
          <Link
            href="/booking"
            className="bg-charcoal text-cream hover:bg-charcoal/90 btn-active-scale px-8 py-4 rounded-full font-semibold shadow-lg transition-transform hover:scale-105 inline-block whitespace-nowrap"
          >
            Book Home Appointment Now
          </Link>
        </div>
      </section>
    </div>
  );
}
