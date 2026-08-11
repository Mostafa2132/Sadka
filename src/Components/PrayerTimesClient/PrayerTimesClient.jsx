"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IoTimeOutline } from "react-icons/io5";
import StarsBackground from "../StarsBackground/StarsBackground";

const PRAYERS = [
  { key: "Fajr", label: "الفجر", sub: "Fajr" },
  { key: "Dhuhr", label: "الظهر", sub: "Dhuhr" },
  { key: "Asr", label: "العصر", sub: "Asr" },
  { key: "Maghrib", label: "المغرب", sub: "Maghrib" },
  { key: "Isha", label: "العشاء", sub: "Isha" },
];

export default function PrayerTimesClient({ times, meta, dates, error }) {
  const [nextPrayer, setNextPrayer] = useState(null);

  const detectNextPrayer = (timings) => {
    if (!timings) return null;
    const now = new Date();
    for (let p of PRAYERS) {
      const [h, m] = timings[p.key].split(":");
      const d = new Date();
      d.setHours(parseInt(h), parseInt(m), 0, 0);
      if (d > now) return p.key;
    }
    return "Fajr";
  };

  useEffect(() => {
    if (!times) return;
    setNextPrayer(detectNextPrayer(times));
    const id = setInterval(() => setNextPrayer(detectNextPrayer(times)), 60000);
    return () => clearInterval(id);
  }, [times]);

  if (error) {
    return (
      <div className="relative min-h-[60vh] flex items-center justify-center px-4 py-24">
        <div className="text-center rounded-2xl border border-red-500/20 bg-red-500/5 p-8">
          <p className="text-red-300 font-medium">تعذر تحميل أوقات الصلاة</p>
          <p className="text-white/50 text-sm mt-2">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden py-10 md:py-14 px-4">
      <StarsBackground />
      <div className="relative max-w-[1100px] mx-auto">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.07] text-xs font-medium text-white/70">
            <IoTimeOutline className="text-[#E8C46A]" />
            مواقيت الصلاة
          </span>
          <h1 className="mt-3 text-[28px] md:text-[42px] font-bold tracking-tight text-white">أوقات الصلاة</h1>
          {meta && <p className="text-white/45 text-sm mt-1">{meta.timezone} • القاهرة</p>}
        </motion.div>

        {dates && (
          <div className="grid md:grid-cols-2 gap-3 mb-6">
            <div className="rounded-2xl bg-white/[0.04] border border-white/[0.07] backdrop-blur-xl p-4 text-center">
              <div className="text-xs tracking-[0.12em] text-white/40 uppercase">ميلادي</div>
              <div className="text-sm font-bold text-white mt-1">{dates.gregorian.date}</div>
            </div>
            <div className="rounded-2xl bg-white/[0.04] border border-white/[0.07] backdrop-blur-xl p-4 text-center">
              <div className="text-xs tracking-[0.12em] text-white/40 uppercase">هجري</div>
              <div className="text-sm font-bold text-white mt-1">{dates.hijri.day} {dates.hijri.month.ar} {dates.hijri.year}هـ</div>
            </div>
          </div>
        )}

        {times ? (
          <div className="rounded-[28px] border border-white/[0.08] bg-white/[0.04] backdrop-blur-xl p-4 sm:p-6 md:p-8 shadow-[0_12px_40px_rgba(0,0,0,0.4)]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-4">
              {PRAYERS.map((p, idx) => {
                const active = p.key === nextPrayer;
                return (
                  <motion.div
                    key={p.key}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.06 }}
                    className={`relative rounded-2xl p-5 text-center border transition ${
                      active
                        ? "bg-[#E8C46A] border-[#E8C46A] text-[#07161E] shadow-[0_8px_24px_rgba(232,196,106,0.35)]"
                        : "bg-[#07161E]/60 border-white/[0.07] text-white"
                    }`}
                  >
                    {active && (
                      <span className="absolute -top-2 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-full bg-[#07161E] text-[#E8C46A] text-[10px] font-bold tracking-widest border border-white/10 whitespace-nowrap">
                        القادمة
                      </span>
                    )}
                    <div className={`text-[13px] font-bold tracking-wide ${active ? "text-[#07161E]/70" : "text-white/50"}`}>{p.label}</div>
                    <div className={`text-[26px] font-bold tabular-nums mt-1 ${active ? "text-[#07161E]" : "text-white"}`}>{times[p.key]}</div>
                    <div className={`text-[10px] tracking-[0.14em] uppercase mt-1 ${active ? "text-[#07161E]/50" : "text-white/30"}`}>{p.sub}</div>
                  </motion.div>
                );
              })}
            </div>
            <p className="text-center text-xs text-white/35 mt-6">التوقيت حسب المنطقة الزمنية المحلية — يُحدّث تلقائيًا</p>
          </div>
        ) : (
          <div className="flex flex-col items-center py-16 rounded-[28px] border border-white/[0.07] bg-white/[0.03]">
            <div className="w-10 h-10 rounded-full border-2 border-white/15 border-t-[#E8C46A] animate-spin" />
            <p className="text-white/50 text-sm mt-4">جاري تحميل المواقيت...</p>
          </div>
        )}
      </div>
    </div>
  );
}
