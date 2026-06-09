import React from 'react';
import { Phone, MessageCircle, Mail, Clock, MapPin, CheckCircle, Sparkles } from 'lucide-react';

export default function Contact() {
  const phone = process.env.NEXT_PUBLIC_PHONE || '+91 9999999999';
  const email = process.env.NEXT_PUBLIC_EMAIL || 'owner@gmail.com';
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP || '919999999999';

  const contactActions = [
    {
      name: 'Call Now',
      icon: <Phone className="w-5 h-5 shrink-0" />,
      href: `tel:${phone}`,
      bg: 'bg-mauve text-white hover:bg-mauve/95',
    },
    {
      name: 'WhatsApp Us',
      icon: <MessageCircle className="w-5 h-5 shrink-0" />,
      href: `https://wa.me/${whatsappNumber}?text=Hi!%20I%20want%20to%20book%20an%20appointment%20at%20Shine%20Beauty%20Services`,
      bg: 'bg-[#25D366] text-white hover:brightness-105',
    },
    {
      name: 'Email Us',
      icon: <Mail className="w-5 h-5 shrink-0" />,
      href: `mailto:${email}`,
      bg: 'border-2 border-mauve text-mauve hover:bg-mauve/5 bg-white/40',
    },
  ];

  const locations = [
    'Indiranagar',
    'Koramangala',
    'Whitefield',
    'HSR Layout',
    'Jayanagar',
    'Malleshwaram',
    'Bannerghatta',
    'JP Nagar',
  ];

  return (
    <div className="animate-fade-in font-poppins min-h-screen">
      {/* Hero Header */}
      <section className="bg-gradient-to-br from-rose/10 to-cream py-16 px-4">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 bg-rose/30 text-mauve px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wider font-poppins">
            <Sparkles className="w-3.5 h-3.5 text-gold" /> We Are Responsive
          </div>
          <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal">
            Book At-Home Bliss 🏠
          </h1>
          <p className="text-charcoal/70 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Serving all of Bangalore — From the quiet comfort of your residence. Experience salon-quality beauty treatments without stepping outside of your door.
          </p>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Hours & Actions */}
          <div className="lg:col-span-5 space-y-8">
            {/* Action Buttons */}
            <div className="space-y-4">
              <h2 className="font-playfair text-2xl font-bold text-charcoal mb-4">Direct Contact</h2>
              {contactActions.map((action) => (
                <a
                  key={action.name}
                  href={action.href}
                  className={`flex items-center justify-between w-full p-4 rounded-[24px] font-semibold text-sm transition-all shadow-sm btn-active-scale hover:scale-[1.01] ${action.bg}`}
                >
                  <span>{action.name}</span>
                  {action.icon}
                </a>
              ))}
            </div>

            {/* Service Hours */}
            <div className="bg-white p-6 border border-rose/15 rounded-[24px] shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-5 h-5 text-gold" />
                <h3 className="font-playfair text-xl font-bold text-charcoal">Service Hours</h3>
              </div>
              <ul className="space-y-4 font-poppins">
                <li className="flex justify-between items-center pb-2 border-b border-rose/10 text-sm">
                  <span className="text-charcoal/70 font-semibold">Monday - Saturday</span>
                  <span className="text-charcoal font-bold">9:00 AM - 8:00 PM</span>
                </li>
                <li className="flex justify-between items-center text-sm">
                  <span className="text-charcoal/70 font-semibold">Sunday</span>
                  <span className="text-charcoal font-bold">10:00 AM - 6:00 PM</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right: Map/Areas & Accent Banner */}
          <div className="lg:col-span-7 space-y-8">
            {/* Service Area Card */}
            <div className="bg-white p-6 border border-rose/15 rounded-[24px] shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-5 h-5 text-gold animate-bounce" />
                <h3 className="font-playfair text-xl font-bold text-charcoal">Our Service Areas</h3>
              </div>
              <p className="text-charcoal/70 text-sm mb-6 leading-relaxed">
                We travel directly to your location. Our professional beauticians cover all major neighborhoods across Bangalore, including:
              </p>
              <div className="grid grid-cols-2 gap-4">
                {locations.map((loc) => (
                  <div key={loc} className="flex items-center gap-2 text-charcoal text-sm font-semibold">
                    <CheckCircle className="w-4 h-4 text-gold shrink-0" />
                    <span>{loc}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 bg-rose/10 rounded-2xl border border-rose/15">
                <p className="text-xs text-mauve text-center font-semibold leading-relaxed">
                  Don't see your locality? Give us a call, and we will do our best to accommodate your schedule!
                </p>
              </div>
            </div>

            {/* Visual Editorial Card */}
            <div className="relative h-64 rounded-[24px] overflow-hidden border border-rose/25 shadow-lg">
              <img
                alt="Luxury At-Home Beauty Service setup"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida/AP1WRLsbtyLdv14nB6jVi3az0TQuN8FbSZxiPLTtkYDI8cL7vfaWEh-ish-5qjIKDNXtfbxQC47wmHKIkiyXjz5ryWUG07zGgWPtvrtImo0d1o8xCeY-BdkaEBjEkz1RVyNh2R0IQ6IOin2PozYiro7QkR3v4nIKy_sF2ihgw_a4h8_AXQxyKzYiLECINhEe9mzJMO1aOuIt8o_Df8ypGUPKjoATq8SvIPDSuZ_d8q6yBCGyNMuPsOUfm2gabEM"
              />
              <div className="absolute inset-0 bg-charcoal/30 flex items-center justify-center backdrop-blur-[1px]">
                <p className="font-playfair text-2xl sm:text-3xl text-white font-bold italic text-center px-4 leading-normal drop-shadow-md">
                  Graceful Luxury, <br /> Delivered To You.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
