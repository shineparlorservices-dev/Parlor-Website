import React from 'react';
import { Calendar, Clock, MessageSquare, CheckCircle, Hourglass, CheckSquare, XCircle, AlertCircle } from 'lucide-react';

export default function BookingCard({ category, subService, date, time, status, notes }) {
  const getStatusStyles = (statusName) => {
    const s = (statusName || 'Pending').toLowerCase();
    if (s.includes('pending')) return 'bg-[#ffe088] text-[#241a00]';
    if (s.includes('confirmed')) return 'bg-[#c2dbbd] text-[#0c200d]';
    if (s.includes('done') || s.includes('completed')) return 'bg-[#e9e0e1] text-[#4f4446]';
    if (s.includes('cancelled')) return 'bg-[#ffdad6] text-[#93000a]';
    return 'bg-cream text-charcoal/85 border border-charcoal/20';
  };

  const getStatusIcon = (statusName) => {
    const s = (statusName || 'Pending').toLowerCase();
    if (s.includes('pending')) return <Hourglass className="w-3.5 h-3.5" />;
    if (s.includes('confirmed')) return <CheckCircle className="w-3.5 h-3.5" />;
    if (s.includes('done') || s.includes('completed')) return <CheckSquare className="w-3.5 h-3.5" />;
    if (s.includes('cancelled')) return <XCircle className="w-3.5 h-3.5" />;
    return <AlertCircle className="w-3.5 h-3.5" />;
  };

  const formatDate = (dateStr) => {
    try {
      const d = new Date(dateStr);
      if (isNaN(d.getTime())) return dateStr;
      return d.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    } catch {
      return dateStr;
    }
  };

  return (
    <div className="bg-white border border-rose/25 rounded-[24px] p-6 shadow-sm hover-card-effect flex flex-col gap-4 animate-slide-up">
      <div className="flex justify-between items-center">
        <div className="bg-rose/10 px-3 py-1 rounded-lg">
          <p className="font-poppins text-xs font-bold text-mauve uppercase tracking-wider">
            {category}
          </p>
        </div>
        <span className={`px-3 py-1 rounded-full font-poppins text-xs font-semibold flex items-center gap-1.5 ${getStatusStyles(status)}`}>
          {getStatusIcon(status)}
          {status}
        </span>
      </div>

      <div className="space-y-1">
        <h3 className="font-playfair text-lg font-bold text-charcoal">{subService}</h3>
      </div>

      <div className="flex flex-col gap-2.5 mt-2 border-t border-rose/10 pt-4">
        <div className="flex items-center gap-3 text-charcoal/70">
          <Calendar className="w-4 h-4 text-gold" />
          <span className="text-sm font-poppins">{formatDate(date)}</span>
        </div>
        <div className="flex items-center gap-3 text-charcoal/70">
          <Clock className="w-4 h-4 text-gold" />
          <span className="text-sm font-poppins">{time}</span>
        </div>
        {notes && (
          <div className="flex items-start gap-3 text-charcoal/70 mt-1.5 bg-cream/60 p-3 rounded-xl border border-rose/10">
            <MessageSquare className="w-4 h-4 text-mauve mt-0.5 shrink-0" />
            <p className="text-xs font-poppins leading-relaxed">{notes}</p>
          </div>
        )}
      </div>
    </div>
  );
}
