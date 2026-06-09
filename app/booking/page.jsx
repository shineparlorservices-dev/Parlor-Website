import React, { Suspense } from 'react';
import BookingForm from '@/components/BookingForm';

export default function BookingPage() {
  return (
    <div className="bg-cream min-h-screen py-16 px-4 font-poppins">
      {/* Hero Header */}
      <div className="max-w-4xl mx-auto text-center mb-12 space-y-3">
        <h1 className="font-playfair text-3xl sm:text-4xl font-bold text-charcoal">
          Book Your Appointment 📅
        </h1>
        <p className="text-charcoal/70 text-sm sm:text-base max-w-xl mx-auto">
          Fill in the details below and we will contact you shortly to confirm. Experience graceful luxury tailored specifically for your needs.
        </p>
      </div>

      {/* Form Container */}
      <div className="max-w-3xl mx-auto relative z-10">
        <Suspense
          fallback={
            <div className="text-center py-20 text-charcoal/60 font-medium">
              Loading booking system...
            </div>
          }
        >
          <BookingForm />
        </Suspense>
      </div>

      {/* Decorative blurred backdrops */}
      <div className="absolute top-24 left-1/4 w-72 h-72 bg-rose/10 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-24 right-1/4 w-72 h-72 bg-gold/5 rounded-full blur-3xl -z-10 pointer-events-none" />
    </div>
  );
}
