"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BsStarFill } from "react-icons/bs";
import { FaMosque } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import StarsBackground from "../StarsBackground/StarsBackground";

const PRAYERS = [
  { key: "Fajr", label: "الفجر" },
  { key: "Dhuhr", label: "الظهر" },
  { key: "Asr", label: "العصر" },
  { key: "Maghrib", label: "المغرب" },
  { key: "Isha", label: "العشاء" },
];

export default function PrayerTimesClient({ times, meta, dates, error }) {
  const [nextPrayer, setNextPrayer] = useState(null);

  // حساب الصلاة القادمة
  const detectNextPrayer = (timings) => {
    if (!timings) return null;
    
    const now = new Date();
    for (let p of PRAYERS) {
      const [h, m] = timings[p.key].split(":");
      const prayerTime = new Date();
      prayerTime.setHours(h, m, 0);
      if (prayerTime > now) {
        return p.key;
      }
    }
    return "Fajr"; // إذا انتهى اليوم، الصلاة القادمة هي الفجر
  };

  useEffect(() => {
    if (times) {
      setNextPrayer(detectNextPrayer(times));
      
      // تحديث كل دقيقة
      const interval = setInterval(() => {
        setNextPrayer(detectNextPrayer(times));
      }, 60000);

      return () => clearInterval(interval);
    }
  }, [times]);

  // عرض الخطأ
  if (error) {
    return (
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-950 py-24 px-4 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-400 text-xl mb-4">حدث خطأ في تحميل أوقات الصلاة</p>
          <p className="text-purple-300">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-950 py-24 px-4">
      {/* ⭐ نجوم متحركة */}
     <StarsBackground/>

      {/* كرات Blur في الخلفية */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl animate-pulse-slow pointer-events-none" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 max-w-5xl mx-auto">
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
            <FaMosque className="mx-auto text-6xl text-yellow-300 mb-4 drop-shadow-lg" />
          </motion.div>
          
          <h1 className="text-5xl py-3 md:text-6xl font-bold bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 bg-clip-text text-transparent">
            أوقات الصلاة
          </h1>
          
          {meta && (
            <p className="text-purple-200 mt-2 text-lg">{meta.timezone}</p>
          )}
        </motion.div>

        {/* Date Info */}
        {dates && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-4 mb-10"
          >
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-purple-800/60 to-purple-900/60 backdrop-blur-sm p-6 rounded-2xl border-2 border-yellow-400/30 text-center shadow-lg"
            >
              <p className="text-yellow-300 font-semibold text-lg mb-2">التاريخ الميلادي</p>
              <p className="text-white text-xl font-bold">{dates.gregorian.date}</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-purple-800/60 to-purple-900/60 backdrop-blur-sm p-6 rounded-2xl border-2 border-yellow-400/30 text-center shadow-lg"
            >
              <p className="text-yellow-300 font-semibold text-lg mb-2">التاريخ الهجري</p>
              <p className="text-white text-xl font-bold">
                {dates.hijri.day} {dates.hijri.month.ar} {dates.hijri.year}
              </p>
            </motion.div>
          </motion.div>
        )}

        {/* Prayer Times Grid */}
        {times ? (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-br from-purple-800/60 to-indigo-900/60 backdrop-blur-xl rounded-3xl border-2 border-yellow-400/30 shadow-2xl shadow-purple-500/40 p-8 md:p-12"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {PRAYERS.map((p, index) => {
                const active = p.key === nextPrayer;
                
                return (
                  <motion.div
                    key={p.key}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className={`
                      relative rounded-2xl p-6 text-center 
                      transition-all duration-300
                      ${active
                        ? "bg-gradient-to-br from-yellow-400/30 to-yellow-500/20 border-2 border-yellow-400 shadow-xl shadow-yellow-400/30"
                        : "bg-gradient-to-br from-indigo-950/80 to-purple-950/80 border-2 border-yellow-400/20"
                      }
                    `}
                  >
                    {/* أيقونة الصلاة القادمة */}
                    {active && (
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        className="absolute -top-4 left-1/2 -translate-x-1/2"
                      >
                        <div className="bg-yellow-400 rounded-full p-2 shadow-lg">
                          <IoTimeOutline className="text-purple-900 text-2xl" />
                        </div>
                      </motion.div>
                    )}

                    {/* اسم الصلاة */}
                    <h3 className={`text-2xl md:text-3xl font-bold mb-3 ${
                      active ? "text-yellow-200" : "text-yellow-300"
                    }`}>
                      {p.label}
                    </h3>

                    {/* الوقت */}
                    <p className={`text-3xl md:text-4xl font-bold mb-2 ${
                      active ? "text-white" : "text-purple-100"
                    }`}>
                      {times[p.key]}
                    </p>

                    {/* نص الصلاة القادمة */}
                    {active && (
                      <motion.p
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-yellow-200 mt-2 text-sm font-semibold"
                      >
                        🕌 الصلاة القادمة
                      </motion.p>
                    )}

                    {/* نجوم زينة */}
                    <div className="absolute top-2 right-2">
                      <BsStarFill className={`text-xs ${active ? "text-yellow-300" : "text-yellow-300/30"}`} />
                    </div>
                    <div className="absolute bottom-2 left-2">
                      <BsStarFill className={`text-xs ${active ? "text-yellow-300" : "text-yellow-300/30"}`} />
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* ملاحظة في الأسفل */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="mt-10 text-center"
            >
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-400/10 border border-yellow-400/30 rounded-full">
                <BsStarFill className="text-yellow-300 text-sm" />
                <p className="text-purple-200 text-sm">
                  الأوقات حسب توقيت القاهرة - مصر
                </p>
                <BsStarFill className="text-yellow-300 text-sm" />
              </div>
            </motion.div>
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
              className="w-20 h-20 border-4 border-yellow-400 border-t-transparent rounded-full mx-auto"
            />
            <p className="text-purple-200 mt-6 text-lg">جاري تحميل أوقات الصلاة...</p>
          </motion.div>
        )}
      </div>

      {/* Custom CSS for pulse animation */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}