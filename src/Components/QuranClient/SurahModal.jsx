"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import { IoSparkles } from "react-icons/io5";
import { BsStarFill } from "react-icons/bs";
import AudioPlayer from "@/components/AudioPlayer/AudioPlayer";

export default function SurahModal({ surahNumber, onClose }) {
  const [surahData, setSurahData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [ayahPage, setAyahPage] = useState(1);
  
  const ayahsPerPage = 6;

  // جلب بيانات السورة
  useEffect(() => {
    const fetchSurah = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://api.alquran.cloud/v1/surah/${surahNumber}/ar.alafasy`
        );
        const data = await res.json();
        setSurahData(data.data);
      } catch (err) {
        console.error('Error fetching surah:', err);
      } finally {
        setLoading(false);
      }
    };

    if (surahNumber) {
      fetchSurah();
      setAyahPage(1); // إعادة تعيين الصفحة عند فتح سورة جديدة
    }
  }, [surahNumber]);

  // حساب الآيات للصفحة الحالية
  const indexOfLastAyah = ayahPage * ayahsPerPage;
  const indexOfFirstAyah = indexOfLastAyah - ayahsPerPage;
  const currentAyahs = surahData?.ayahs.slice(indexOfFirstAyah, indexOfLastAyah);
  const totalAyahPages = surahData ? Math.ceil(surahData.ayahs.length / ayahsPerPage) : 0;

  const nextAyahPage = () => setAyahPage((prev) => Math.min(prev + 1, totalAyahPages));
  const prevAyahPage = () => setAyahPage((prev) => Math.max(prev - 1, 1));

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] flex justify-center items-center px-4 py-8 overflow-y-auto"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 50 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          className="
            relative
            bg-gradient-to-br from-indigo-950/95 via-purple-900/95 to-indigo-950/95
            backdrop-blur-xl
            rounded-3xl
            border-2 border-yellow-400/40
            shadow-2xl shadow-purple-500/50
            p-6 md:p-10
            w-full max-w-7xl
            my-8
          "
        >
          {/* Corner Sparkles */}
          <IoSparkles className="absolute -top-3 -right-3 text-yellow-300 text-3xl animate-pulse z-10" />
          <IoSparkles className="absolute -top-3 -left-3 text-yellow-400 text-3xl animate-pulse delay-150 z-10" />
          <IoSparkles className="absolute -bottom-3 -right-3 text-yellow-400 text-3xl animate-pulse delay-300 z-10" />
          <IoSparkles className="absolute -bottom-3 -left-3 text-yellow-300 text-3xl animate-pulse delay-450 z-10" />

          {/* Close Button */}
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="
              absolute top-4 right-4 z-20
              w-10 h-10
              flex items-center justify-center
              bg-red-500/20
              border-2 border-red-400/30
              rounded-full
              text-red-300
              hover:text-red-200
              hover:bg-red-500/30
              text-2xl
              transition-all
              shadow-lg
            "
          >
            <FaTimes />
          </motion.button>

          {/* Loading State */}
          {loading ? (
            <div className="text-center py-20">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                className="w-20 h-20 border-4 border-yellow-400 border-t-transparent rounded-full mx-auto mb-4"
              />
              <p className="text-purple-200 text-lg">جاري تحميل الآيات...</p>
            </div>
          ) : surahData ? (
            <>
              {/* Header */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
                  <BsStarFill className="text-yellow-300 text-lg" />
                  <div className="h-px flex-1 bg-gradient-to-l from-transparent via-yellow-400 to-transparent" />
                </div>

                <h2 className="text-3xl md:text-4xl font-bold mb-2">
                  <span className="bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 bg-clip-text text-transparent">
                    {surahData.name}
                  </span>
                </h2>

                <p className="text-yellow-300 text-lg mb-2">
                  {surahData.englishName}
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4 text-purple-200 text-sm">
                  <span className="px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full">
                    {surahData.ayahs.length} آية
                  </span>
                  <span className="px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full">
                    {surahData.revelationType === 'Meccan' ? 'مكية' : 'مدنية'}
                  </span>
                  <span className="px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full">
                    سورة رقم {surahData.number}
                  </span>
                </div>

                <div className="flex items-center justify-center gap-3 mt-4">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
                  <BsStarFill className="text-yellow-300 text-lg" />
                  <div className="h-px flex-1 bg-gradient-to-l from-transparent via-yellow-400 to-transparent" />
                </div>
              </div>

              {/* Ayahs Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 max-h-[60vh] overflow-y-auto px-2">
                {currentAyahs?.map((ayah, index) => (
                  <motion.div
                    key={ayah.number}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <AudioPlayer 
                      src={ayah.audio} 
                      title={ayah.text}
                      ayahNumber={ayah.numberInSurah}
                    />
                  </motion.div>
                ))}
              </div>

              {/* Pagination */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8"
              >
                <button
                  onClick={prevAyahPage}
                  disabled={ayahPage === 1}
                  className="
                    px-6 py-3
                    bg-gradient-to-r from-purple-800/60 to-indigo-900/60
                    backdrop-blur-sm
                    border-2 border-yellow-400/30
                    rounded-xl
                    text-yellow-300
                    font-semibold
                    hover:border-yellow-400/60
                    hover:shadow-lg hover:shadow-yellow-400/20
                    transition-all
                    disabled:opacity-30
                    disabled:cursor-not-allowed
                  "
                >
                  ← الآيات السابقة
                </button>

                <div className="px-6 py-3 bg-yellow-400/10 border border-yellow-400/30 rounded-xl">
                  <span className="text-purple-200">
                    صفحة <span className="text-yellow-300 font-bold">{ayahPage}</span> من <span className="text-yellow-300 font-bold">{totalAyahPages}</span>
                  </span>
                </div>

                <button
                  onClick={nextAyahPage}
                  disabled={ayahPage === totalAyahPages}
                  className="
                    px-6 py-3
                    bg-gradient-to-r from-purple-800/60 to-indigo-900/60
                    backdrop-blur-sm
                    border-2 border-yellow-400/30
                    rounded-xl
                    text-yellow-300
                    font-semibold
                    hover:border-yellow-400/60
                    hover:shadow-lg hover:shadow-yellow-400/20
                    transition-all
                    disabled:opacity-30
                    disabled:cursor-not-allowed
                  "
                >
                  الآيات التالية →
                </button>
              </motion.div>

              {/* Bottom Note */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-center mt-8"
              >
                <p className="text-purple-300 text-sm">
                  🎙️ بصوت الشيخ مشاري العفاسي
                </p>
              </motion.div>
            </>
          ) : (
            <div className="text-center py-20">
              <p className="text-red-400 text-xl">حدث خطأ في تحميل السورة</p>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}