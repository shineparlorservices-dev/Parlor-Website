'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { subServices } from '@/lib/services';
import { Sparkles, Calendar, Clock, Phone, Loader2, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '@/lib/CartContext';

export default function BookingForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { cart, removeFromCart, clearCart, getCartTotal } = useCart();

  // Form states
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [category, setCategory] = useState('');
  const [subService, setSubService] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [notes, setNotes] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Constants
  const ownerPhone = process.env.NEXT_PUBLIC_PHONE || '+91 8073670366';
  const scriptUrl = process.env.NEXT_PUBLIC_SCRIPT_URL || 'YOUR_APPS_SCRIPT_URL';

  // Get current date string for input minimum (formatted as YYYY-MM-DD in client timezone)
  const [minDate, setMinDate] = useState('');
  useEffect(() => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    setMinDate(`${yyyy}-${mm}-${dd}`);
  }, []);

  // Pre-select category and service from URL params (if cart is empty)
  useEffect(() => {
    if (cart.length > 0) return; // Cart overrides single URL select

    const paramCategory = searchParams.get('category');
    const paramService = searchParams.get('service');

    if (paramCategory) {
      // Normalize category (should match drop down keys, e.g. capitalized or exact)
      const normalizedCat = paramCategory.charAt(0).toUpperCase() + paramCategory.slice(1).toLowerCase();
      if (['Threading', 'Facial', 'Waxing', 'Bleach'].includes(normalizedCat)) {
        setCategory(normalizedCat);
      }
    }

    if (paramService) {
      setSubService(paramService);
    }
  }, [searchParams, cart]);

  // Handle category change
  const handleCategoryChange = (e) => {
    const selectedCat = e.target.value;
    setCategory(selectedCat);
    setSubService(''); // reset subservice
  };

  // Get sub-service options based on selected category
  const subServiceOptions = category ? subServices[category] || [] : [];

  // Generating hours options: 9:00 AM to 7:00 PM, 1hr intervals
  const timeSlots = [
    { value: '09:00 AM', label: '9:00 AM' },
    { value: '10:00 AM', label: '10:00 AM' },
    { value: '11:00 AM', label: '11:00 AM' },
    { value: '12:00 PM', label: '12:00 PM' },
    { value: '01:00 PM', label: '1:00 PM' },
    { value: '02:00 PM', label: '2:00 PM' },
    { value: '03:00 PM', label: '3:00 PM' },
    { value: '04:00 PM', label: '4:00 PM' },
    { value: '05:00 PM', label: '5:00 PM' },
    { value: '06:00 PM', label: '6:00 PM' },
    { value: '07:00 PM', label: '7:00 PM' },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // If cart is empty, user must have selected category and subService via dropdown
    const isCartBooking = cart.length > 0;
    const finalCategory = isCartBooking ? cart.map(i => i.category).join(', ') : category;
    const finalSubService = isCartBooking ? cart.map(i => i.name).join(', ') : subService;

    // Basic Validation
    if (!name || !phone || !address || !finalCategory || !finalSubService || !date || !time) {
      setError('Please fill in all required fields.');
      return;
    }

    setLoading(true);

    const payload = {
      name,
      phone,
      address,
      category: finalCategory,
      subService: finalSubService,
      date,
      time,
      notes: isCartBooking ? `Cart Total: ₹${getCartTotal().toLocaleString()}. ${notes}` : notes,
      status: 'Pending',
    };

    try {
      // POST request to Google Apps Script
      if (scriptUrl !== 'YOUR_APPS_SCRIPT_URL') {
        await fetch(scriptUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          mode: 'no-cors',
          body: JSON.stringify(payload),
        });
      }

      // Always save booking locally to localStorage for "My Bookings" page lookup compatibility
      const localBookingsStr = localStorage.getItem('shine_beauty_local_bookings');
      let localBookings = [];
      if (localBookingsStr) {
        try {
          localBookings = JSON.parse(localBookingsStr);
        } catch {
          localBookings = [];
        }
      }
      localBookings.push(payload);
      localStorage.setItem('shine_beauty_local_bookings', JSON.stringify(localBookings));

      // Show success modal since no-cors resolved means the fetch executed.
      setShowSuccessModal(true);
    } catch (err) {
      console.error('Booking submission error:', err);
      setError('Failed to book online. Please check your connection or contact us directly.');
    } finally {
      setLoading(false);
    }
  };

  const handleSuccessConfirm = () => {
    setShowSuccessModal(false);
    clearCart(); // Clear cart after successful booking
    router.push(`/my-bookings?phone=${encodeURIComponent(phone)}`);
  };

  const isCartBooking = cart.length > 0;

  return (
    <>
      <div className="bg-white border border-rose/25 rounded-[24px] shadow-xl p-6 md:p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="font-poppins text-sm font-semibold text-charcoal/80">
                Full Name*
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Priyanshi Sharma"
                required
                className="bg-cream border border-rose/20 rounded-xl p-3.5 h-12 text-[16px] font-poppins text-charcoal placeholder:text-charcoal/40 input-focus-gold"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="phone" className="font-poppins text-sm font-semibold text-charcoal/80">
                Phone Number*
              </label>
              <input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="e.g. +91 9876543210"
                required
                className="bg-cream border border-rose/20 rounded-xl p-3.5 h-12 text-[16px] font-poppins text-charcoal placeholder:text-charcoal/40 input-focus-gold"
              />
            </div>
          </div>

          {/* Home Address (Bangalore Only) */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="address" className="font-poppins text-sm font-semibold text-charcoal/80">
              Bangalore Home Address* (No shop walk-ins available)
            </label>
            <input
              id="address"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="e.g. Flat 302, Green Glen Layout, Bellandur, Bangalore"
              required
              className="bg-cream border border-rose/20 rounded-xl p-3.5 h-12 text-[16px] font-poppins text-charcoal placeholder:text-charcoal/40 input-focus-gold"
            />
          </div>

          {/* Service items display */}
          {isCartBooking ? (
            <div className="bg-cream/50 border border-rose/15 rounded-2xl p-5 space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-rose/10">
                <ShoppingBag className="w-5 h-5 text-mauve" />
                <h3 className="font-playfair text-base font-bold text-charcoal">Selected Services in Cart</h3>
              </div>
              <div className="max-h-60 overflow-y-auto space-y-3 pr-2">
                {cart.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center bg-white p-3 rounded-xl border border-rose/5 shadow-2xs">
                    <div>
                      <span className="text-[9px] font-bold text-mauve uppercase bg-rose/15 px-1.5 py-0.5 rounded-md">
                        {item.category}
                      </span>
                      <h4 className="font-poppins text-xs font-semibold text-charcoal mt-1">{item.name}</h4>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-playfair text-sm font-bold text-gold">{item.price}</span>
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.category, item.name)}
                        className="text-charcoal/40 hover:text-red-500 p-1 hover:bg-red-50 rounded-full transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between items-center pt-3 border-t border-rose/10 font-poppins text-sm font-semibold">
                <span className="text-charcoal/70">Estimated Total:</span>
                <span className="font-playfair text-lg font-bold text-gold">₹{getCartTotal().toLocaleString()}</span>
              </div>
            </div>
          ) : (
            /* Fallback Single Service Category & Sub-Service Grid if Cart is Empty */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="category" className="font-poppins text-sm font-semibold text-charcoal/80">
                  Service Category*
                </label>
                <select
                  id="category"
                  value={category}
                  onChange={handleCategoryChange}
                  required={!isCartBooking}
                  className="bg-cream border border-rose/20 rounded-xl px-3 h-12 text-[16px] font-poppins text-charcoal input-focus-gold"
                >
                  <option value="" disabled>
                    Select Category
                  </option>
                  <option value="Threading">Threading</option>
                  <option value="Facial">Facial</option>
                  <option value="Waxing">Waxing</option>
                  <option value="Bleach">Bleach</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="subService" className="font-poppins text-sm font-semibold text-charcoal/80">
                  Sub-Service*
                </label>
                <select
                  id="subService"
                  value={subService}
                  onChange={(e) => setSubService(e.target.value)}
                  required={!isCartBooking}
                  disabled={!category}
                  className="bg-cream border border-rose/20 rounded-xl px-3 h-12 text-[16px] font-poppins text-charcoal input-focus-gold disabled:opacity-50"
                >
                  <option value="" disabled>
                    {category ? 'Select Sub-Service' : 'Choose a category first'}
                  </option>
                  {subServiceOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {/* Date & Time Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="date" className="font-poppins text-sm font-semibold text-charcoal/80 flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-gold" /> Preferred Date*
              </label>
              <input
                id="date"
                type="date"
                value={date}
                min={minDate}
                onChange={(e) => setDate(e.target.value)}
                required
                className="bg-cream border border-rose/20 rounded-xl p-3.5 h-12 text-[16px] font-poppins text-charcoal input-focus-gold"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="time" className="font-poppins text-sm font-semibold text-charcoal/80 flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-gold" /> Preferred Time*
              </label>
              <select
                id="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
                className="bg-cream border border-rose/20 rounded-xl px-3 h-12 text-[16px] font-poppins text-charcoal input-focus-gold"
              >
                <option value="" disabled>
                  Select Time
                </option>
                {timeSlots.map((slot) => (
                  <option key={slot.value} value={slot.value}>
                    {slot.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Special Notes */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="notes" className="font-poppins text-sm font-semibold text-charcoal/80">
              Special Notes / Requests
            </label>
            <textarea
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Any specific requests, allergies, or instructions for the beautician..."
              rows={4}
              className="bg-cream border border-rose/20 rounded-xl p-4 text-[16px] font-poppins text-charcoal placeholder:text-charcoal/40 input-focus-gold resize-none"
            />
          </div>

          {/* Error Message */}
          {error && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-xl space-y-3">
              <p className="text-sm font-poppins text-[#93000a] font-medium">{error}</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={`tel:${ownerPhone}`}
                  className="bg-mauve text-white px-4 py-2 rounded-full font-poppins text-xs font-semibold flex items-center gap-1.5 hover:bg-mauve/95 transition-colors shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5" /> Call {ownerPhone}
                </a>
              </div>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-mauve text-white py-4 rounded-full font-poppins font-semibold text-base shadow-lg hover:bg-mauve/90 btn-active-scale transition-all flex items-center justify-center gap-2 hover:scale-[1.01]"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" /> Scheduling...
              </>
            ) : (
              <>
                Book Doorstep Visit <Sparkles className="w-5 h-5 text-gold shrink-0" />
              </>
            )}
          </button>
        </form>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 animate-fade-in">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-charcoal/40 backdrop-blur-sm" onClick={handleSuccessConfirm} />

          {/* Modal Content */}
          <div className="bg-white rounded-[32px] p-8 max-w-sm w-full relative z-10 shadow-2xl text-center animate-modal-bounce border border-rose/20">
            <div className="w-20 h-20 bg-[#c2dbbd] text-[#0c200d] rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">🎉</span>
            </div>
            <h3 className="font-playfair text-2xl font-bold text-charcoal mb-2">Booking Received!</h3>
            <p className="font-poppins text-sm text-charcoal/70 mb-6 leading-relaxed">
              I have received your doorstep visit request and will call you shortly to confirm your luxury appointment.
            </p>
            <button
              onClick={handleSuccessConfirm}
              className="w-full bg-mauve text-white py-3.5 rounded-full font-poppins font-semibold hover:bg-mauve/90 transition-all hover:scale-105 btn-active-scale shadow-md cursor-pointer"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
}
