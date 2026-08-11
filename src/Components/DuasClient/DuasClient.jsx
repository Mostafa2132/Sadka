"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiRefresh } from "react-icons/hi";
import StarsBackground from "../StarsBackground/StarsBackground";
import AudioPlayerDua from './AudioPlayerDua';

export default function DuasClient({ duasData, error }) {
  const [currentDua, setCurrentDua] = useState(
    duasData ? duasData[Math.floor(Math.random() * duasData.length)] : null
  );

  const getNewDua = () => {
    if (duasData && duasData.length > 0) {
      setCurrentDua(duasData[Math.floor(Math.random() * duasData.length)]);
    }
  };

  if (error) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4 py-16">
        <div className="text-center rounded-2xl border border-red-500/20 bg-red-500/5 p-8">
          <p className="text-red-300">حدث خطأ في تحميل الأدعية</p>
          <p className="text-white/50 text-sm mt-2">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden py-10 md:py-14 px-4">
      <StarsBackground />
      <div className="relative max-w-[980px] mx-auto">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.07] text-xs font-medium text-white/70">🤲 الأدعية المأثورة</span>
          <h1 className="mt-3 text-[30px] md:text-[42px] font-bold tracking-tight text-white">أدعية من الكتاب والسنة</h1>
          <p className="text-white/50 text-sm mt-1">أذكار الصباح والمساء • اضغط للتحديث</p>
        </motion.div>

        <AnimatePresence mode="wait">
          {currentDua ? (
            <motion.div key={currentDua.ID} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} className="relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-white/[0.04] backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.4)]">
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent pointer-events-none" />
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <div className="relative p-6 md:p-8">
                <div className="rounded-2xl bg-[#07161E]/60 border border-white/[0.06] p-6 md:p-8 relative overflow-hidden">
                  <span className="absolute top-3 right-4 text-white/10 text-3xl">”</span>
                  <p className="relative text-[18px] md:text-[22px] leading-[1.9] text-right text-white font-arabic" dir="rtl" style={{ fontFamily: 'var(--font-amiri), serif' }}>
                    {currentDua.ARABIC_TEXT}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mt-5">
                  <div className="rounded-2xl bg-[#E8C46A]/10 border border-[#E8C46A]/15 p-5 text-center">
                    <div className="text-xs tracking-[0.12em] text-[#E8C46A]/70 uppercase">التكرار</div>
                    <div className="text-2xl font-bold text-[#FDEEB1] mt-1">{currentDua.REPEAT} <span className="text-sm font-medium text-[#E8C46A]/70">مرة</span></div>
                  </div>
                  <AudioPlayerDua audioUrl={currentDua.AUDIO} />
                </div>

                <div className="flex justify-center mt-6">
                  <button onClick={getNewDua} className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#07161E] text-sm font-bold hover:bg-white/90 transition">
                    <HiRefresh />
                    دعاء جديد
                  </button>
                </div>
              </div>
            </motion.div>
          ) : (
            <div className="text-center py-16 rounded-[28px] border border-white/10 bg-white/[0.03]">جاري التحميل...</div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
