"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SurahModal from "./SurahModal";
import StarsBackground from "../StarsBackground/StarsBackground";

export default function QuranClient({ surahs, error }) {
  const [selectedSurahNumber, setSelectedSurahNumber] = useState(null);
  const [surahPage, setSurahPage] = useState(1);
  const surahPerPage = 12;
  const indexOfLastSurah = surahPage * surahPerPage;
  const indexOfFirstSurah = indexOfLastSurah - surahPerPage;
  const currentSurahs = surahs.slice(indexOfFirstSurah, indexOfLastSurah);
  const totalSurahPages = Math.ceil(surahs.length / surahPerPage);
  const nextSurahPage = () => setSurahPage((prev) => Math.min(prev + 1, totalSurahPages));
  const prevSurahPage = () => setSurahPage((prev) => Math.max(prev - 1, 1));

  if (error) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4 py-16">
        <div className="text-center rounded-2xl border border-red-500/20 bg-red-500/5 p-8">
          <p className="text-red-300">حدث خطأ في تحميل السور</p>
          <p className="text-white/50 text-sm mt-2">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden py-10 md:py-14 px-4">
      <StarsBackground />
      <div className="relative max-w-[1280px] mx-auto">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.07] text-xs font-medium text-white/70">
            ۞ القرآن الكريم
          </span>
          <h1 className="mt-3 text-[30px] md:text-[44px] font-bold tracking-tight text-white">تصفح السور</h1>
          <p className="text-white/50 text-sm mt-1">{surahs.length} سورة • تلاوة الشيخ مشاري العفاسي</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 mb-8">
          {currentSurahs.map((surah, index) => (
            <motion.button
              key={surah.number}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.03 }}
              onClick={() => setSelectedSurahNumber(surah.number)}
              className="group relative text-right overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.04] backdrop-blur-xl p-5 hover:bg-white/[0.07] hover:border-white/15 transition text-left"
            >
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition" />
              <div className="flex items-start justify-between gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#0A1E1E] border border-white/10 flex items-center justify-center text-[#E8C46A] text-xs font-bold">{surah.number}</div>
                <span className="px-2 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-[11px] text-white/50">{surah.revelationType === 'Meccan' ? 'مكية' : 'مدنية'} • {surah.numberOfAyahs} آيات</span>
              </div>
              <div className="mt-3">
                <div className="text-[18px] font-bold text-white">{surah.name}</div>
                <div className="text-xs text-white/50 mt-0.5">{surah.englishName} • {surah.englishNameTranslation}</div>
              </div>
              <div className="mt-3 inline-flex text-xs text-[#E8C46A] group-hover:gap-1.5 gap-1 transition-all">استماع وتلاوة <span>←</span></div>
            </motion.button>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
          <button onClick={prevSurahPage} disabled={surahPage === 1} className="px-5 py-2.5 rounded-full bg-white/[0.06] border border-white/10 text-white text-sm font-medium hover:bg-white/[0.10] disabled:opacity-30 disabled:cursor-not-allowed transition">← السابق</button>
          <div className="px-4 py-2 rounded-full bg-[#E8C46A]/10 border border-[#E8C46A]/15 text-sm text-white/70">صفحة <span className="text-[#FDEEB1] font-bold">{surahPage}</span> من {totalSurahPages}</div>
          <button onClick={nextSurahPage} disabled={surahPage === totalSurahPages} className="px-5 py-2.5 rounded-full bg-white/[0.06] border border-white/10 text-white text-sm font-medium hover:bg-white/[0.10] disabled:opacity-30 disabled:cursor-not-allowed transition">التالي →</button>
        </div>
      </div>

      {selectedSurahNumber && (
        <SurahModal surahNumber={selectedSurahNumber} onClose={() => setSelectedSurahNumber(null)} />
      )}
    </div>
  );
}
