'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiRefresh } from 'react-icons/hi';

export default function DynamicAyat() {
  const [ayah, setAyah] = useState(null);
  const [loading, setLoading] = useState(true);
  const audioRef = useRef(null);

  const fetchRandomAyah = async () => {
    setLoading(true);
    try {
      const randomSurah = Math.floor(Math.random() * 114) + 1;
      const surahResponse = await fetch(`https://api.alquran.cloud/v1/surah/${randomSurah}`);
      const surahData = await surahResponse.json();
      const totalAyahs = surahData.data.numberOfAyahs;
      const randomAyah = Math.floor(Math.random() * totalAyahs) + 1;
      const arabicResponse = await fetch(`https://api.alquran.cloud/v1/ayah/${randomSurah}:${randomAyah}`);
      const arabicData = await arabicResponse.json();
      const translationResponse = await fetch(`https://api.alquran.cloud/v1/ayah/${randomSurah}:${randomAyah}/en.asad`);
      const translationData = await translationResponse.json();
      const audioResponse = await fetch(`https://api.alquran.cloud/v1/ayah/${randomSurah}:${randomAyah}/ar.alafasy`);
      const audioData = await audioResponse.json();
      setAyah({
        text: arabicData.data.text,
        translation: translationData.data.text,
        surahName: arabicData.data.surah.name,
        surahNameEnglish: arabicData.data.surah.englishName,
        ayahNumber: arabicData.data.numberInSurah,
        audio: audioData.data.audio,
      });
      setLoading(false);
    } catch (e) {
      console.error(e);
      setLoading(false);
    }
  };

  useEffect(() => { fetchRandomAyah(); }, []);

  return (
    <section className="relative py-14 md:py-20 px-4 overflow-hidden">
      <div className="max-w-[980px] mx-auto relative">
        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.07] text-xs font-medium text-white/70">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E8C46A]" />
            آية اليوم • من القرآن الكريم
          </span>
          <h2 className="mt-3 text-[28px] md:text-[36px] font-bold tracking-tight text-white">﴿ وَذَكِّرْ فَإِنَّ الذِّكْرَىٰ تَنفَعُ ﴾</h2>
          <p className="text-white/50 text-sm mt-1">آية عشوائية مع تلاوة — اضغط لتحديث</p>
        </motion.div>

        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center py-16 rounded-[28px] border border-white/[0.07] bg-white/[0.03] backdrop-blur-xl">
              <div className="w-10 h-10 rounded-full border-2 border-white/15 border-t-[#E8C46A] animate-spin" />
              <p className="text-white/50 text-sm mt-4">جاري تحميل الآية...</p>
            </motion.div>
          ) : ayah ? (
            <motion.div
              key="content"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-white/[0.04] backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.45)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent pointer-events-none" />
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              <div className="relative p-6 sm:p-8 md:p-10">
                {/* surah pill */}
                <div className="flex items-center justify-center">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0A1E1E] border border-white/10 text-sm">
                    <span className="w-7 h-7 rounded-full bg-[#E8C46A] flex items-center justify-center text-[#07161E] text-xs font-bold">۞</span>
                    <span className="font-bold text-white">{ayah.surahName}</span>
                    <span className="text-white/40 text-xs">• {ayah.surahNameEnglish} • آية {ayah.ayahNumber}</span>
                  </span>
                </div>

                {/* Arabic */}
                <div className="mt-8 rounded-2xl bg-[#07161E]/60 border border-white/[0.06] p-6 sm:p-8">
                  <p className="text-[22px] sm:text-[26px] md:text-[30px] leading-[1.9] text-right text-white font-arabic" dir="rtl" style={{ fontFamily: 'var(--font-amiri), serif' }}>
                    {ayah.text}
                  </p>
                </div>

                {/* Translation */}
                <div className="mt-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] p-5">
                  <p className="text-xs tracking-[0.12em] text-white/40 uppercase mb-2">Translation</p>
                  <p className="text-[14px] leading-6 text-white/70 italic">“{ayah.translation}”</p>
                </div>

                {/* Audio + actions */}
                <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
                  <audio ref={audioRef} src={ayah.audio} controls className="w-full sm:flex-1 h-11 rounded-full bg-[#07161E] border border-white/10" />
                  <button
                    onClick={fetchRandomAyah}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#07161E] text-sm font-bold hover:bg-white/90 transition shrink-0"
                  >
                    <HiRefresh />
                    آية جديدة
                  </button>
                </div>
              </div>
            </motion.div>
          ) : (
            <div className="text-center py-16 rounded-[28px] border border-white/10 bg-white/[0.03]">
              <p className="text-white/60">تعذر تحميل الآية</p>
              <button onClick={fetchRandomAyah} className="mt-4 px-6 py-2 rounded-full bg-[#E8C46A] text-[#07161E] text-sm font-bold">إعادة المحاولة</button>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
