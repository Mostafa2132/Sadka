'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBook, FaRedo, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { BsStarFill } from 'react-icons/bs';
import { GiScrollUnfurled } from 'react-icons/gi';

/* ===== أحاديث محلية ===== */
const HADITHS = [
  {
    text: 'إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى.',
    book: 'صحيح البخاري',
    number: 1,
    chapter: 'بدء الوحي',
    grade: 'صحيح',
  },
  {
    text: 'مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ.',
    book: 'صحيح مسلم',
    number: 47,
    chapter: 'الإيمان',
    grade: 'صحيح',
  },
  {
    text: 'لَا يَدْخُلُ الْجَنَّةَ مَنْ كَانَ فِي قَلْبِهِ مِثْقَالُ ذَرَّةٍ مِنْ كِبْرٍ.',
    book: 'صحيح مسلم',
    number: 91,
    chapter: 'تحريم الكبر',
    grade: 'صحيح',
  },
  {
    text: 'الدُّنْيَا سِجْنُ الْمُؤْمِنِ وَجَنَّةُ الْكَافِرِ.',
    book: 'صحيح مسلم',
    number: 2956,
    chapter: 'الزهد',
    grade: 'صحيح',
  },
];

export default function DynamicHadith() {
  const [hadith, setHadith] = useState(null);
  const [loading, setLoading] = useState(true);

  const getRandomHadith = () => {
    setLoading(true);
    setTimeout(() => {
      const random =
        HADITHS[Math.floor(Math.random() * HADITHS.length)];
      setHadith(random);
      setLoading(false);
    }, 600);
  };

  useEffect(() => {
    getRandomHadith();
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-950 py-24 px-4">
      {/* ⭐ نجوم */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{ y: [0, -30, 0], opacity: [0.2, 1, 0.2] }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
          }}
        >
          <BsStarFill className="text-yellow-300 text-sm" />
        </motion.div>
      ))}

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* العنوان */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <GiScrollUnfurled className="mx-auto text-6xl text-yellow-300 mb-4" />
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 bg-clip-text text-transparent">
            حديث اليوم
          </h2>
          <p className="text-purple-200 mt-2">
            من السنة النبوية الشريفة
          </p>
        </motion.div>

        {/* المحتوى */}
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-24"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
                className="w-20 h-20 border-4 border-yellow-400 border-t-transparent rounded-full mx-auto"
              />
              <p className="text-purple-200 mt-6">
                جاري تحميل الحديث...
              </p>
            </motion.div>
          ) : (
            hadith && (
              <motion.div
                key="hadith"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-br from-purple-800/60 to-indigo-900/60 backdrop-blur-xl rounded-3xl border-2 border-yellow-400/30 shadow-2xl shadow-purple-500/40 p-8 md:p-12"
              >
                {/* الكتاب */}
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-yellow-300 flex justify-center gap-2">
                    <FaBook />
                    {hadith.book}
                  </h3>
                  <p className="text-purple-200 text-sm mt-1">
                    حديث رقم {hadith.number}
                  </p>
                </div>

                {/* نص الحديث */}
                <div className="relative bg-indigo-950/60 rounded-2xl p-8 md:p-10 border border-yellow-400/20 mb-8">
                  <FaQuoteRight className="absolute top-4 right-4 text-yellow-300/20 text-4xl" />
                  <FaQuoteLeft className="absolute bottom-4 left-4 text-yellow-300/20 text-4xl" />

                  <p
                    className="relative z-10 text-white text-2xl leading-loose text-right font-arabic"
                    dir="rtl"
                  >
                    {hadith.text}
                  </p>
                </div>

                {/* الباب + الدرجة */}
                <div className="grid md:grid-cols-2 gap-4 mb-10">
                  <div className="bg-purple-800/40 p-5 rounded-xl border border-yellow-400/20">
                    <h4 className="text-yellow-300 font-semibold mb-1">
                      الباب
                    </h4>
                    <p className="text-purple-100">
                      {hadith.chapter}
                    </p>
                  </div>

                  <div className="bg-yellow-400/10 p-5 rounded-xl border border-yellow-400/30 text-center">
                    <p className="text-yellow-200 font-semibold">
                      الدرجة
                    </p>
                    <p className="text-yellow-300 font-bold text-lg">
                      {hadith.grade}
                    </p>
                  </div>
                </div>

                {/* زر */}
                <div className="text-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={getRandomHadith}
                    className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-purple-900 font-bold rounded-full shadow-xl flex gap-3 items-center mx-auto"
                  >
                    <FaRedo />
                    حديث جديد
                  </motion.button>
                </div>
              </motion.div>
            )
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
