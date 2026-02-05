"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BsStarFill } from "react-icons/bs";
import { FaBookOpen } from "react-icons/fa";
import SurahModal from "./SurahModal";
import StarsBackground from "../StarsBackground/StarsBackground";

export default function QuranClient({ surahs, error }) {
  const [selectedSurahNumber, setSelectedSurahNumber] = useState(null);
  const [surahPage, setSurahPage] = useState(1);
  
  const surahPerPage = 12; // زودت العدد عشان أفضل

  // حساب السور للصفحة الحالية
  const indexOfLastSurah = surahPage * surahPerPage;
  const indexOfFirstSurah = indexOfLastSurah - surahPerPage;
  const currentSurahs = surahs.slice(indexOfFirstSurah, indexOfLastSurah);
  const totalSurahPages = Math.ceil(surahs.length / surahPerPage);

  const nextSurahPage = () => setSurahPage((prev) => Math.min(prev + 1, totalSurahPages));
  const prevSurahPage = () => setSurahPage((prev) => Math.max(prev - 1, 1));

  // عرض الخطأ
  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-950 flex items-center justify-center px-4">
        <div className="text-center">
          <p className="text-red-400 text-xl mb-4">حدث خطأ في تحميل السور</p>
          <p className="text-purple-300">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-950 py-24 px-4 relative overflow-hidden">
      {/* Background Stars */}
    <StarsBackground/>

      {/* Blur Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl animate-pulse-slow pointer-events-none" style={{ animationDelay: '1.5s' }} />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -40 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <FaBookOpen className="mx-auto text-7xl text-yellow-300 mb-6 drop-shadow-2xl" />
          </motion.div>
          
          <h1 className="text-5xl md:text-6xl py-3 font-bold bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 bg-clip-text text-transparent mb-3">
            القرآن الكريم
          </h1>
          
          <p className="text-purple-200 text-lg">
            اختر السورة لتصفح الآيات والاستماع إليها
          </p>

          <div className="flex items-center justify-center gap-2 mt-4">
            <BsStarFill className="text-yellow-300 text-xs" />
            <p className="text-purple-300 text-sm">
              {surahs.length} سورة • بصوت الشيخ مشاري العفاسي
            </p>
            <BsStarFill className="text-yellow-300 text-xs" />
          </div>
        </motion.div>

        {/* Surah Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-10"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {currentSurahs.map((surah, index) => (
              <motion.button
                key={surah.number}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedSurahNumber(surah.number)}
                className="
                  relative
                  bg-gradient-to-br from-indigo-950/80 to-purple-900/80
                  backdrop-blur-sm
                  border-2 border-yellow-400/30
                  rounded-2xl
                  p-6
                  hover:border-yellow-400/60
                  hover:shadow-xl hover:shadow-yellow-400/20
                  transition-all duration-300
                  group
                  overflow-hidden
                "
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity">
                  <div className="w-full h-full" style={{
                    backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                  }} />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Surah Number */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-purple-900 font-bold text-sm shadow-lg">
                    {surah.number}
                  </div>

                  {/* Surah Name */}
                  <h3 className="text-white text-2xl font-bold mb-2 text-center">
                    {surah.name}
                  </h3>

                  {/* English Name */}
                  <p className="text-yellow-300 text-sm mb-2">
                    {surah.englishName}
                  </p>

                  {/* Ayahs Count */}
                  <div className="flex items-center justify-center gap-2 text-purple-200 text-xs">
                    <BsStarFill className="text-yellow-300/50 text-xs" />
                    <span>{surah.numberOfAyahs} آية</span>
                  </div>

                  {/* Revelation Type */}
                  <div className="mt-2 inline-block px-3 py-1 bg-yellow-400/10 border border-yellow-400/30 rounded-full text-yellow-300 text-xs">
                    {surah.revelationType === 'Meccan' ? 'مكية' : 'مدنية'}
                  </div>
                </div>

                {/* Corner Stars */}
                <BsStarFill className="absolute top-2 left-2 text-yellow-300/20 text-xs group-hover:text-yellow-300/40 transition-colors" />
                <BsStarFill className="absolute bottom-2 right-2 text-yellow-300/20 text-xs group-hover:text-yellow-300/40 transition-colors" />
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Pagination */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <button
            onClick={prevSurahPage}
            disabled={surahPage === 1}
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
              disabled:hover:shadow-none
            "
          >
            ← السابق
          </button>

          <div className="px-6 py-3 bg-yellow-400/10 border border-yellow-400/30 rounded-xl">
            <span className="text-purple-200">
              صفحة <span className="text-yellow-300 font-bold">{surahPage}</span> من <span className="text-yellow-300 font-bold">{totalSurahPages}</span>
            </span>
          </div>

          <button
            onClick={nextSurahPage}
            disabled={surahPage === totalSurahPages}
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
              disabled:hover:shadow-none
            "
          >
            التالي →
          </button>
        </motion.div>
      </div>

      {/* Surah Modal */}
      {selectedSurahNumber && (
        <SurahModal
          surahNumber={selectedSurahNumber}
          onClose={() => setSelectedSurahNumber(null)}
        />
      )}

    
    </div>
  );
}