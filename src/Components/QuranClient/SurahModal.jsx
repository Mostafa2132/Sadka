"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiX } from "react-icons/hi";
import AudioPlayer from "../AudioPlayer/AudioPlayer";

export default function SurahModal({ surahNumber, onClose }) {
  const [surahData, setSurahData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [ayahPage, setAyahPage] = useState(1);
  const ayahsPerPage = 6;

  useEffect(() => {
    const fetchSurah = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://api.alquran.cloud/v1/surah/${surahNumber}/ar.alafasy`);
        const data = await res.json();
        setSurahData(data.data);
      } catch (err) { console.error(err); }
      finally { setLoading(false); }
    };
    if (surahNumber) { fetchSurah(); setAyahPage(1); }
  }, [surahNumber]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const indexOfLastAyah = ayahPage * ayahsPerPage;
  const indexOfFirstAyah = indexOfLastAyah - ayahsPerPage;
  const currentAyahs = surahData?.ayahs.slice(indexOfFirstAyah, indexOfLastAyah);
  const totalAyahPages = surahData ? Math.ceil(surahData.ayahs.length / ayahsPerPage) : 0;
  const nextAyahPage = () => setAyahPage((prev) => Math.min(prev + 1, totalAyahPages));
  const prevAyahPage = () => setAyahPage((prev) => Math.max(prev - 1, 1));

  return (
    <AnimatePresence>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 bg-[#040C12]/75 backdrop-blur-[12px] z-[9999] flex justify-center items-start p-4 overflow-y-auto">
        <motion.div
          initial={{ y: 20, opacity: 0, scale: 0.97 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 12, opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-[1120px] my-6 rounded-[28px] border border-white/10 bg-[#0A1720]/90 backdrop-blur-2xl shadow-[0_20px_64px_rgba(0,0,0,0.5)] overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-transparent pointer-events-none" />
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#E8C46A]/20 to-transparent" />

          <button onClick={onClose} className="absolute left-4 top-4 z-20 w-8 h-8 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/[0.10] transition">
            <HiX />
          </button>

          {loading ? (
            <div className="text-center py-20 px-6">
              <div className="w-10 h-10 rounded-full border-2 border-white/15 border-t-[#E8C46A] animate-spin mx-auto" />
              <p className="text-white/50 text-sm mt-4">جاري تحميل الآيات...</p>
            </div>
          ) : surahData ? (
            <div className="relative p-6 md:p-8">
              <div className="text-center">
                <span className="inline-flex px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-xs text-white/60">سورة رقم {surahData.number}</span>
                <h2 className="mt-3 text-[26px] md:text-[32px] font-bold text-white">{surahData.name}</h2>
                <p className="text-[#E8C46A] text-sm">{surahData.englishName} • {surahData.revelationType === 'Meccan' ? 'مكية' : 'مدنية'} • {surahData.ayahs.length} آية</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 max-h-[58vh] overflow-y-auto pr-1">
                {currentAyahs?.map((ayah, idx) => (
                  <motion.div key={ayah.number} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.04 }}>
                    <AudioPlayer src={ayah.audio} title={`${ayah.text} — آية ${ayah.numberInSurah}`} />
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mt-6">
                <button onClick={prevAyahPage} disabled={ayahPage === 1} className="px-5 py-2.5 rounded-full bg-white/[0.06] border border-white/10 text-white text-sm hover:bg-white/[0.10] disabled:opacity-30 transition">← السابقة</button>
                <div className="px-4 py-2 rounded-full bg-[#E8C46A]/10 border border-[#E8C46A]/15 text-sm text-white/70">صفحة <span className="text-[#FDEEB1] font-bold">{ayahPage}</span> من {totalAyahPages}</div>
                <button onClick={nextAyahPage} disabled={ayahPage === totalAyahPages} className="px-5 py-2.5 rounded-full bg-white/[0.06] border border-white/10 text-white text-sm hover:bg-white/[0.10] disabled:opacity-30 transition">التالية →</button>
              </div>
              <p className="text-center text-xs text-white/30 mt-4">🎙️ بصوت الشيخ مشاري العفاسي</p>
            </div>
          ) : (
            <div className="text-center py-20"><p className="text-red-300">حدث خطأ في تحميل السورة</p></div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
