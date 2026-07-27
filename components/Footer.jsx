import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const phone = process.env.NEXT_PUBLIC_PHONE || '+91 8073670366';
  const email = process.env.NEXT_PUBLIC_EMAIL || 'shineparlorservices@gmail.com';
  const instagram = 'YOUR_INSTAGRAM_URL';

  return (
    <footer className="bg-charcoal text-cream pt-16 pb-8 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Col */}
          <div className="space-y-4">
            <h3 className="font-playfair text-2xl font-bold text-gold">Shine Beauty Services</h3>
            <p className="text-cream/70 text-sm leading-relaxed max-w-sm">
              Personalized At-Home Luxury Salon Services in Bangalore. Delivered directly to your doorstep by the owner with premium, high-quality products.
            </p>
            <div className="pt-2">
              <p className="text-xs text-rose font-semibold uppercase tracking-wider">Service Mode</p>
              <p className="text-sm text-cream/80">100% Home Visit Service (No physical shop)</p>
              <p className="text-xs text-cream/50 mt-1">Serving all major residential areas of Bangalore</p>
            </div>
          </div>

          {/* Quick Links Col */}
          <div className="flex flex-col gap-3">
            <h4 className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">Services</h4>
            <Link href="/threading" className="text-cream/70 hover:text-gold text-sm transition-colors">
              Threading Shaping
            </Link>
            <Link href="/facial" className="text-cream/70 hover:text-gold text-sm transition-colors">
              Facial Skincare
            </Link>
            <Link href="/waxing" className="text-cream/70 hover:text-gold text-sm transition-colors">
              Waxing Hair Removal
            </Link>
            <Link href="/bleach" className="text-cream/70 hover:text-gold text-sm transition-colors">
              Brightening Bleach
            </Link>
            <Link href="/booking" className="text-cream/70 hover:text-gold text-sm transition-colors mt-2">
              Book Home Appointment
            </Link>
          </div>

          {/* Contact & Connect Col */}
          <div className="flex flex-col gap-3">
            <h4 className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">Connect With Us</h4>
            <p className="text-sm text-cream/80">
              <span className="text-gold font-medium">Phone:</span>{' '}
              <a href={`tel:${phone}`} className="hover:underline">
                {phone}
              </a>
            </p>
            <p className="text-sm text-cream/80">
              <span className="text-gold font-medium">Email:</span>{' '}
              <a href={`mailto:${email}`} className="hover:underline">
                {email}
              </a>
            </p>
            <div className="flex gap-4 pt-4">
              <a
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/70 hover:text-rose transition-colors flex items-center gap-1.5 text-sm"
              >
              {/* Instagram */}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cream/10 mt-16 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p className="text-xs text-cream/50">
            © {new Date().getFullYear()} Shine Beauty At-Home Services. Bangalore, India.
          </p>
          <div className="flex gap-6 text-xs text-cream/50">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
