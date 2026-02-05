'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlay, FaPause, FaVolumeUp, FaRedo, FaBookOpen } from 'react-icons/fa';
import { IoSparkles } from 'react-icons/io5';
import { BsStarFill } from 'react-icons/bs';
import AudioPlayer from '../AudioPlayer/AudioPlayer';

export default function DynamicAyat() {
  const [ayah, setAyah] = useState(null);
  const [loading, setLoading] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  // جلب آية عشوائية من API
  const fetchRandomAyah = async () => {
    setLoading(true);
    try {
      // API 1: الحصول على آية عشوائية مع الترجمة
      const randomSurah = Math.floor(Math.random() * 114) + 1;
      
      // جلب معلومات السورة أولاً
      const surahResponse = await fetch(
        `https://api.alquran.cloud/v1/surah/${randomSurah}`
      );
      const surahData = await surahResponse.json();
      const totalAyahs = surahData.data.numberOfAyahs;
      
      // اختيار آية عشوائية من السورة
      const randomAyah = Math.floor(Math.random() * totalAyahs) + 1;
      
      // جلب الآية بالنص العربي
      const arabicResponse = await fetch(
        `https://api.alquran.cloud/v1/ayah/${randomSurah}:${randomAyah}`
      );
      const arabicData = await arabicResponse.json();
      
      // جلب الترجمة الإنجليزية
      const translationResponse = await fetch(
        `https://api.alquran.cloud/v1/ayah/${randomSurah}:${randomAyah}/en.asad`
      );
      const translationData = await translationResponse.json();
      
      // جلب الصوت - استخدام قارئ مشهور
      const audioResponse = await fetch(
        `https://api.alquran.cloud/v1/ayah/${randomSurah}:${randomAyah}/ar.alafasy`
      );
      const audioData = await audioResponse.json();
      
      setAyah({
        text: arabicData.data.text,
        translation: translationData.data.text,
        surahName: arabicData.data.surah.name,
        surahNameEnglish: arabicData.data.surah.englishName,
        ayahNumber: arabicData.data.numberInSurah,
        surahNumber: randomSurah,
        audio: audioData.data.audio,
        revelation: arabicData.data.surah.revelationType,
      });
      
      setLoading(false);
    } catch (error) {
      console.error('Error fetching ayah:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomAyah();
  }, []);

  // التحكم في الصوت
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => setPlaying(false);

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [ayah]);


  return (
    <div id='sec_2' className="relative min-h-screen py-20 px-4 overflow-hidden bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-950">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
              y: [0, -20, 0],
              x: Math.random() * 100 - 50,
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <BsStarFill className="text-yellow-300" size={10 + Math.random() * 10} />
          </motion.div>
        ))}
      </div>

      {/* Islamic Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="inline-block mb-4"
          >
            <FaBookOpen className="text-6xl text-yellow-300 drop-shadow-lg" />
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 bg-clip-text text-transparent">
              آية اليوم
            </span>
          </h2>
          
          <p className="text-purple-200 text-lg md:text-xl">
            من القرآن الكريم
          </p>
        </motion.div>

        {/* Main Card */}
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center py-20"
            >
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                  className="w-20 h-20 border-4 border-yellow-400 border-t-transparent rounded-full"
                />
                <IoSparkles className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-yellow-300 text-2xl" />
              </div>
              <p className="text-purple-200 mt-6 text-lg">جاري تحميل الآية...</p>
            </motion.div>
          ) : ayah ? (
            <motion.div
              key="content"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Decorative Corner Stars */}
              <IoSparkles className="absolute -top-4 -right-4 text-yellow-300 text-3xl animate-pulse z-10" />
              <IoSparkles className="absolute -top-4 -left-4 text-yellow-400 text-3xl animate-pulse delay-150 z-10" />
              <IoSparkles className="absolute -bottom-4 -right-4 text-yellow-400 text-3xl animate-pulse delay-300 z-10" />
              <IoSparkles className="absolute -bottom-4 -left-4 text-yellow-300 text-3xl animate-pulse delay-450 z-10" />

              <div className="bg-gradient-to-br from-purple-900/60 via-indigo-900/60 to-purple-900/60 backdrop-blur-xl rounded-3xl border-2 border-yellow-400/30 shadow-2xl shadow-purple-500/50 p-8 md:p-12">
                
                {/* Surah Info */}
                <div className="flex items-center justify-center gap-4 mb-8">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
                  <div className="text-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-yellow-300 mb-1">
                      {ayah.surahName}
                    </h3>
                    <p className="text-purple-200 text-sm">
                      {ayah.surahNameEnglish} • الآية {ayah.ayahNumber}
                    </p>
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
                </div>

                {/* Arabic Text */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mb-10"
                >
                  <div className="bg-gradient-to-br from-indigo-950/50 to-purple-950/50 rounded-2xl p-8 md:p-10 border border-yellow-400/20">
                    <p className="text-2xl md:text-4xl leading-loose text-right text-white font-arabic mb-4" dir="rtl">
                      {ayah.text}
                    </p>
                    
                    {/* Bismillah decoration */}
                    <div className="flex justify-center mt-6">
                      <div className="flex items-center gap-2">
                        <BsStarFill className="text-yellow-300 text-xs" />
                        <div className="h-px w-16 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
                        <BsStarFill className="text-yellow-300 text-xs" />
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Translation */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mb-8"
                >
                  <h4 className="text-yellow-300 font-semibold mb-3 flex items-center gap-2">
                    <IoSparkles />
                    Translation
                  </h4>
                  <p className="text-purple-100 text-lg leading-relaxed italic">
                    "{ayah.translation}"
                  </p>
                </motion.div>

                {/* Audio Player */}
              <AudioPlayer src={ayah.audio} />

                {/* Refresh Button */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                  className="mt-8 text-center"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={fetchRandomAyah}
                    className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-purple-900 font-bold rounded-full shadow-lg shadow-yellow-500/50 hover:shadow-yellow-400/70 transition-all flex items-center gap-3 mx-auto"
                  >
                    <FaRedo />
                    آية جديدة
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="error"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-20"
            >
              <p className="text-red-400 text-xl mb-4">حدث خطأ في تحميل الآية</p>
              <button
                onClick={fetchRandomAyah}
                className="px-6 py-3 bg-yellow-400 text-purple-900 font-bold rounded-full hover:bg-yellow-300 transition-all"
              >
                إعادة المحاولة
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}