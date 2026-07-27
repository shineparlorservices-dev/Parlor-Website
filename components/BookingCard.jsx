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
    if (!dateStr) return '';
    try {
      if (typeof dateStr === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(dateStr.trim())) {
        const [year, month, day] = dateStr.trim().split('-').map(Number);
        const d = new Date(year, month - 1, day);
        return d.toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        });
      }
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

  const formatTime = (timeStr) => {
    if (!timeStr) return '';
    const str = String(timeStr).trim();

    // 1. If it's already a 12-hour formatted time string (e.g., "09:00 AM", "9:00 AM", "11:00 AM", "03:00 PM")
    if (/^\d{1,2}:\d{2}\s*(AM|PM)$/i.test(str)) {
      return str;
    }

    // 2. If it's a 24-hour formatted time string (e.g., "09:00", "14:30", "19:00")
    if (/^\d{1,2}:\d{2}$/.test(str)) {
      const [hStr, mStr] = str.split(':');
      let hours = parseInt(hStr, 10);
      const minutes = mStr;
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12 || 12;
      return `${hours}:${minutes} ${ampm}`;
    }

    // 3. If it's an ISO date-time string (e.g., from Google Apps Script / Google Sheets 1899 epoch date)
    if (str.includes('T')) {
      try {
        const d = new Date(str);
        if (!isNaN(d.getTime())) {
          // Check for 1899/1900 Apps Script serialized epoch dates
          if (str.startsWith('1899-') || str.startsWith('1900-')) {
            // Apps Script serialized a Google Sheets time cell in IST to UTC ISO string.
            // e.g., 09:00 AM IST converted to UTC 03:21:00.000Z.
            // Convert UTC timestamp back to IST (+330 mins) and round to nearest 30 mins to correct 1899 historical offset differences.
            const utcMinutes = d.getUTCHours() * 60 + d.getUTCMinutes();
            const istMinutes = utcMinutes + 330;
            const roundedTotalMinutes = Math.round(istMinutes / 30) * 30;
            const totalMins = (roundedTotalMinutes % 1440 + 1440) % 1440;
            let hours = Math.floor(totalMins / 60);
            const minutes = totalMins % 60;
            const ampm = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12 || 12;
            const minStr = String(minutes).padStart(2, '0');
            return `${hours}:${minStr} ${ampm}`;
          }

          return d.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true,
          });
        }
      } catch {
        return str;
      }
    }

    return str;
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
          <span className="text-sm font-poppins">{formatTime(time)}</span>
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
