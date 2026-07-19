'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Search, CalendarDays, Loader2, Sparkles, PhoneCall } from 'lucide-react';
import BookingCard from '@/components/BookingCard';

function MyBookingsContent() {
  const searchParams = useSearchParams();
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState('');
  const [isDemo, setIsDemo] = useState(false);

  const scriptUrl = process.env.NEXT_PUBLIC_SCRIPT_URL || 'YOUR_APPS_SCRIPT_URL';
  const ownerPhone = process.env.NEXT_PUBLIC_PHONE || '+91 9999999999';

  // Read phone search param on mount and auto-trigger search
  useEffect(() => {
    const paramPhone = searchParams.get('phone');
    if (paramPhone) {
      setPhone(paramPhone);
      triggerSearch(paramPhone);
    }
  }, [searchParams]);

  const handleSearchForm = (e) => {
    e.preventDefault();
    triggerSearch(phone);
  };

  const triggerSearch = async (searchPhone) => {
    setError('');
    setIsDemo(false);
    
    if (!searchPhone) {
      setError('Please enter a phone number.');
      return;
    }

    setLoading(true);
    setSearched(false);

    // Read local bookings from localStorage
    let storedLocal = [];
    const localBookingsStr = localStorage.getItem('shine_beauty_local_bookings');
    if (localBookingsStr) {
      try {
        const parsed = JSON.parse(localBookingsStr);
        const cleanSearch = searchPhone.replace(/[^\d]/g, '');
        storedLocal = parsed.filter(b => b.phone.replace(/[^\d]/g, '') === cleanSearch);
      } catch (e) {
        console.error('Failed to parse local bookings:', e);
      }
    }

    // Process local bookings (change status to 'Completed' if date is in the past)
    const processBookings = (list) => {
      const todayStr = new Date().toISOString().split('T')[0];
      return list.map(b => {
        if (b.date < todayStr) {
          return { ...b, status: 'Completed' };
        }
        return b;
      });
    };

    // If scriptUrl is the default placeholder, fallback to demo mode
    if (scriptUrl === 'YOUR_APPS_SCRIPT_URL') {
      setTimeout(() => {
        // Mock data matching subServices and database
        const mockData = [
          {
            category: 'Threading',
            subService: 'Eyebrows',
            date: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0], // 2 days later
            time: '11:00 AM',
            status: 'Confirmed',
            notes: 'Prefer a soft arch shape please.',
          },
          {
            category: 'Facial',
            subService: 'O3+ Bridal Facial',
            date: new Date(Date.now() + 86400000 * 5).toISOString().split('T')[0], // 5 days later
            time: '02:00 PM',
            status: 'Pending',
            notes: 'First time trying this bridal pack.',
          },
          {
            category: 'Bleach',
            subService: 'Full Hand Bleach',
            date: new Date(Date.now() - 86400000 * 4).toISOString().split('T')[0], // 4 days ago
            time: '04:00 PM',
            status: 'Completed',
            notes: 'Fast service requested.',
          },
        ];
        
        // Filter by phone search length
        const rawResults = searchPhone.length > 5 ? [...storedLocal, ...mockData] : [...storedLocal];
        setBookings(processBookings(rawResults));
        setIsDemo(true);
        setSearched(true);
        setLoading(false);
      }, 1200);
      return;
    }

    try {
      const response = await fetch(`${scriptUrl}?phone=${encodeURIComponent(searchPhone)}`);
      if (!response.ok) {
        throw new Error('API request failed');
      }
      const data = await response.json();
      const remoteList = Array.isArray(data) ? data : [];

      // Deduplicate: filter out storedLocal bookings that are already in remoteList
      const filteredLocal = storedLocal.filter(local => {
        return !remoteList.some(remote => {
          const localDate = local.date;
          const remoteDate = remote.date;
          const localService = (local.subService || '').trim().toLowerCase();
          const remoteService = (remote.subService || '').trim().toLowerCase();
          return localDate === remoteDate && localService === remoteService;
        });
      });

      setBookings(processBookings([...filteredLocal, ...remoteList]));
      setSearched(true);
    } catch (err) {
      console.error('Fetch bookings error:', err);
      setError('Could not retrieve bookings from the server. Showing local and offline demo bookings instead.');
      
      // Fallback offline mock data for testing
      const mockData = [
        {
          category: 'Facial',
          subService: 'Lotus Gold',
          date: '2026-06-15',
          time: '01:00 PM',
          status: 'Completed',
          notes: 'Dull skin removal.',
        }
      ];
      setBookings(processBookings([...storedLocal, ...mockData]));
      setIsDemo(true);
      setSearched(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-cream min-h-screen py-16 px-4 font-poppins">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12 space-y-3">
        <h1 className="font-playfair text-3xl sm:text-4xl font-bold text-charcoal flex items-center justify-center gap-2">
          My Bookings <CalendarDays className="w-8 h-8 text-mauve" />
        </h1>
        <p className="text-charcoal/70 text-sm sm:text-base max-w-xl mx-auto">
          Manage your upcoming luxury treatments. Enter your registered phone number to pull up your booking history.
        </p>
      </div>

      {/* Lookup Card */}
      <div className="max-w-lg mx-auto bg-white border border-rose/25 p-6 md:p-8 rounded-[24px] shadow-xl mb-12">
        <form onSubmit={handleSearchForm} className="space-y-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="lookupPhone" className="font-poppins text-sm font-semibold text-charcoal/80">
              Registered Phone Number
            </label>
            <input
              id="lookupPhone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="e.g. +91 9876543210"
              required
              className="bg-cream border border-rose/20 rounded-xl p-3.5 h-12 text-[16px] font-poppins text-charcoal placeholder:text-charcoal/40 input-focus-gold"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-mauve text-white py-3.5 rounded-full font-semibold text-sm hover:bg-mauve/90 btn-active-scale transition-all flex items-center justify-center gap-2 hover:scale-[1.01] shadow-md cursor-pointer"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" /> Searching...
              </>
            ) : (
              <>
                Search Bookings <Search className="w-4 h-4 shrink-0" />
              </>
            )}
          </button>
        </form>
      </div>

      {/* Demo Warning Banner */}
      {searched && isDemo && (
        <div className="max-w-4xl mx-auto mb-6 p-3.5 bg-[#fed65b]/25 border border-[#fed65b]/50 rounded-xl text-center text-xs font-semibold text-[#745c00] flex items-center justify-center gap-1.5">
          <Sparkles className="w-4 h-4 text-gold fill-gold/15" /> Demo Mode: Showing simulated bookings for testing. Update process.env.NEXT_PUBLIC_SCRIPT_URL for live integrations.
        </div>
      )}

      {/* Error / Inline warning */}
      {error && (
        <div className="max-w-4xl mx-auto mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-center space-y-2">
          <p className="text-xs text-[#93000a] font-medium font-poppins">{error}</p>
          <a
            href={`tel:${ownerPhone}`}
            className="inline-flex items-center gap-1.5 text-xs text-mauve font-semibold hover:underline"
          >
            <PhoneCall className="w-3.5 h-3.5" /> Or Call Us directly: {ownerPhone}
          </a>
        </div>
      )}

      {/* Results Section */}
      {searched && (
        <section className="max-w-5xl mx-auto mt-8">
          <div className="flex items-center justify-between mb-8 border-b border-rose/20 pb-4">
            <h2 className="font-playfair text-2xl font-bold text-charcoal">Appointment Records</h2>
            <div className="text-xs font-semibold font-poppins text-mauve bg-rose/25 px-4 py-1.5 rounded-full">
              {bookings.length} {bookings.length === 1 ? 'Booking' : 'Bookings'} Found
            </div>
          </div>

          {bookings.length === 0 ? (
            <div className="text-center py-16 bg-white border border-rose/15 rounded-[24px] shadow-sm max-w-xl mx-auto p-8 space-y-6">
              <div className="w-16 h-16 bg-rose/10 text-mauve rounded-full flex items-center justify-center mx-auto">
                📅
              </div>
              <div className="space-y-1">
                <h3 className="font-playfair text-xl font-bold text-charcoal">No Bookings Found</h3>
                <p className="text-charcoal/70 text-sm font-poppins">
                  We couldn't locate any records associated with the number: <span className="font-semibold text-charcoal">{phone}</span>
                </p>
              </div>
              <Link
                href="/booking"
                className="bg-mauve text-white px-8 py-3 rounded-full font-semibold text-sm hover:bg-mauve/95 transition-all inline-block btn-active-scale shadow-sm"
              >
                Book Your First Appointment
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {bookings.map((booking, idx) => (
                <BookingCard
                  key={idx}
                  category={booking.category}
                  subService={booking.subService}
                  date={booking.date}
                  time={booking.time}
                  status={booking.status}
                  notes={booking.notes}
                />
              ))}
            </div>
          )}
        </section>
      )}
    </div>
  );
}

export default function MyBookings() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-cream font-poppins">
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="w-8 h-8 animate-spin text-mauve" />
          <p className="text-sm text-charcoal/60">Loading your bookings...</p>
        </div>
      </div>
    }>
      <MyBookingsContent />
    </Suspense>
  );
}
