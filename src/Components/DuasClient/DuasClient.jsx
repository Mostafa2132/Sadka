"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {  FaHandSparkles, FaHandsWash, FaMosque, FaQuoteLeft, FaQuoteRight, FaRedoAlt } from "react-icons/fa";
import { IoSparkles } from "react-icons/io5";
import { BsStarFill } from "react-icons/bs";
import AudioPlayerDua from './AudioPlayerDua';


export default function DuasClient({ duasData, error }) {
  const [currentDua, setCurrentDua] = useState(
    duasData ? duasData[Math.floor(Math.random() * duasData.length)] : null
  );

  const getNewDua = () => {
    if (duasData && duasData.length > 0) {
      const newDua = duasData[Math.floor(Math.random() * duasData.length)];
      setCurrentDua(newDua);
    }
  };

  // عرض الخطأ
  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-950 flex items-center justify-center px-4">
        <div className="text-center">
          <p className="text-red-400 text-xl mb-4">حدث خطأ في تحميل الأدعية</p>
          <p className="text-purple-300">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-950 py-24 px-4">
      {/* Background Stars */}
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <BsStarFill
            className="text-yellow-300"
            style={{ fontSize: `${6 + Math.random() * 10}px` }}
          />
        </motion.div>
      ))}

      {/* Animated Blur Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl animate-pulse-slow pointer-events-none" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse-slow pointer-events-none" style={{ animationDelay: '3s' }} />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* Animated Icon */}
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative inline-block mb-6"
          >
            <div className="absolute inset-0 bg-yellow-400/20 blur-2xl rounded-full" />
            <FaMosque className="relative text-7xl text-yellow-300 drop-shadow-2xl" />
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 bg-clip-text text-transparent">
              الأدعية المأثورة
            </span>
          </h1>

          <p className="text-purple-200 text-lg md:text-xl mb-4">
            أدعية من القرآن والسنة النبوية الشريفة
          </p>

          <div className="flex items-center justify-center gap-2 mt-4">
            <BsStarFill className="text-yellow-300 text-xs" />
            <p className="text-purple-300 text-sm">
              أذكار الصباح والمساء
            </p>
            <BsStarFill className="text-yellow-300 text-xs" />
          </div>
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {currentDua ? (
            <motion.div
              key={currentDua.ID}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -30 }}
              transition={{ duration: 0.5, type: "spring" }}
            >
              {/* Main Card */}
              <div className="bg-gradient-to-br from-purple-800/60 via-indigo-900/60 to-purple-800/60 backdrop-blur-xl rounded-3xl border-2 border-yellow-400/40 shadow-2xl shadow-purple-500/50 p-6 md:p-10 relative overflow-hidden">
                {/* Corner Decorations */}
                <IoSparkles className="absolute -top-3 -right-3 text-yellow-300 text-4xl animate-pulse z-10" />
                <IoSparkles className="absolute -top-3 -left-3 text-yellow-400 text-4xl animate-pulse delay-150 z-10" />
                <IoSparkles className="absolute -bottom-3 -right-3 text-yellow-400 text-4xl animate-pulse delay-300 z-10" />
                <IoSparkles className="absolute -bottom-3 -left-3 text-yellow-300 text-4xl animate-pulse delay-450 z-10" />

                {/* Dua Text Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="relative bg-gradient-to-br from-indigo-950/80 to-purple-950/80 rounded-2xl p-8 md:p-12 border-2 border-yellow-400/30 mb-8 overflow-hidden"
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div
                      className="w-full h-full"
                      style={{
                        backgroundImage: 'radial-gradient(circle, currentColor 2px, transparent 2px)',
                        backgroundSize: '30px 30px',
                      }}
                    />
                  </div>

                  {/* Quote Icons */}
                  <FaQuoteRight className="absolute top-4 right-4 text-yellow-300/20 text-5xl" />
                  <FaQuoteLeft className="absolute bottom-4 left-4 text-yellow-300/20 text-5xl" />

                  {/* Arabic Text */}
                  <p
                    className="relative z-10 text-white text-2xl md:text-3xl leading-loose text-right font-arabic"
                    dir="rtl"
                  >
                    {currentDua.ARABIC_TEXT}
                  </p>

                  {/* Decorative Line */}
                  <div className="flex items-center justify-center gap-3 mt-8">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
                    <BsStarFill className="text-yellow-300 text-sm" />
                    <div className="h-px flex-1 bg-gradient-to-l from-transparent via-yellow-400 to-transparent" />
                  </div>
                </motion.div>

                {/* Details Grid */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="grid md:grid-cols-2 gap-6 mb-8"
                >
                  {/* Repeat Count Card */}
                  <motion.div
                    whileHover={{ scale: 1.03, y: -5 }}
                    className="bg-gradient-to-br from-yellow-400/20 to-yellow-500/10 backdrop-blur-sm p-8 rounded-2xl border-2 border-yellow-400/40 shadow-xl shadow-yellow-500/20 text-center relative overflow-hidden group"
                  >
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/0 to-yellow-400/0 group-hover:from-yellow-400/10 group-hover:to-yellow-400/5 transition-all duration-300" />

                    <div className="relative z-10">
                      <p className="text-yellow-300 font-bold text-lg mb-3 flex items-center justify-center gap-2">
                        <BsStarFill className="text-sm" />
                        عدد التكرار
                        <BsStarFill className="text-sm" />
                      </p>
                      <p className="text-white text-4xl font-bold">
                        {currentDua.REPEAT}
                      </p>
                      <p className="text-yellow-200 text-sm mt-2">مرة</p>
                    </div>

                    {/* Corner Stars */}
                    <BsStarFill className="absolute top-3 left-3 text-yellow-300/30 text-xs" />
                    <BsStarFill className="absolute bottom-3 right-3 text-yellow-300/30 text-xs" />
                  </motion.div>

                  {/* Audio Player Card */}
                  <AudioPlayerDua audioUrl={currentDua.AUDIO} />
                </motion.div>

                {/* New Dua Button */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-center"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={getNewDua}
                    className="
                      px-10 py-4
                      bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400
                      text-purple-900
                      font-bold text-lg
                      rounded-full
                      shadow-2xl shadow-yellow-500/50
                      hover:shadow-yellow-400/70
                      transition-all
                      flex items-center gap-3 mx-auto
                      relative
                      overflow-hidden
                      group
                    "
                  >
                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                    <FaRedoAlt className="relative z-10" />
                    <span className="relative z-10">دعاء جديد</span>
                  </motion.button>

                  <p className="text-purple-300 text-sm mt-4">
                    اضغط للحصول على دعاء آخر
                  </p>
                </motion.div>

                {/* Bottom Info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="mt-8 text-center"
                >
                  <div className="inline-flex items-center gap-2 px-6 py-3 bg-purple-900/30 border border-purple-400/20 rounded-full">
                    <BsStarFill className="text-yellow-300 text-xs" />
                    <p className="text-purple-200 text-sm">
                      من حصن المسلم - أذكار الصباح والمساء
                    </p>
                    <BsStarFill className="text-yellow-300 text-xs" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-24"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                className="w-20 h-20 border-4 border-yellow-400 border-t-transparent rounded-full mx-auto mb-6"
              />
              <p className="text-purple-200 text-lg">جاري تحميل الأدعية...</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .delay-150 {
          animation-delay: 150ms;
        }
        .delay-300 {
          animation-delay: 300ms;
        }
        .delay-450 {
          animation-delay: 450ms;
        }
      `}</style>
    </div>
  );
}