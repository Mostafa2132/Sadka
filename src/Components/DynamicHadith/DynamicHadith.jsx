'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiRefresh } from 'react-icons/hi';

const HADITHS = [
  { text: 'إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى.', book: 'صحيح البخاري', number: 1, chapter: 'بدء الوحي', grade: 'صحيح' },
  { text: 'مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ.', book: 'صحيح مسلم', number: 47, chapter: 'الإيمان', grade: 'صحيح' },
  { text: 'لَا يَدْخُلُ الْجَنَّةَ مَنْ كَانَ فِي قَلْبِهِ مِثْقَالُ ذَرَّةٍ مِنْ كِبْرٍ.', book: 'صحيح مسلم', number: 91, chapter: 'تحريم الكبر', grade: 'صحيح' },
  { text: 'الدُّنْيَا سِجْنُ الْمُؤْمِنِ وَجَنَّةُ الْكَافِرِ.', book: 'صحيح مسلم', number: 2956, chapter: 'الزهد', grade: 'صحيح' },
];

export default function DynamicHadith() {
  const [hadith, setHadith] = useState(null);
  const [loading, setLoading] = useState(true);

  const getRandomHadith = () => {
    setLoading(true);
    setTimeout(() => {
      setHadith(HADITHS[Math.floor(Math.random() * HADITHS.length)]);
      setLoading(false);
    }, 450);
  };

  useEffect(() => { getRandomHadith(); }, []);

  return (
    <section className="relative py-14 md:py-20 px-4 overflow-hidden">
      <div className="max-w-[980px] mx-auto relative">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.07] text-xs font-medium text-white/70">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
            حديث اليوم • من السنة الشريفة
          </span>
          <h2 className="mt-3 text-[28px] md:text-[36px] font-bold tracking-tight text-white">حديث نبوي</h2>
          <p className="text-white/50 text-sm mt-1">حكمة نبوية تُضيء القلب</p>
        </motion.div>

        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center py-16 rounded-[28px] border border-white/[0.07] bg-white/[0.03] backdrop-blur-xl">
              <div className="w-10 h-10 rounded-full border-2 border-white/15 border-t-[#E8C46A] animate-spin" />
              <p className="text-white/50 text-sm mt-4">جاري تحميل الحديث...</p>
            </motion.div>
          ) : (
            hadith && (
              <motion.div key="hadith" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} className="relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-white/[0.04] backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.45)]">
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <div className="relative p-6 sm:p-8 md:p-10">
                  <div className="flex items-center justify-center gap-3">
                    <span className="px-3 py-1.5 rounded-full bg-[#0A1E1E] border border-white/10 text-xs font-bold text-[#E8C46A]">۞ {hadith.book}</span>
                    <span className="text-xs text-white/40">حديث {hadith.number}</span>
                  </div>

                  <div className="mt-8 rounded-2xl bg-[#07161E]/60 border border-white/[0.06] p-6 sm:p-8 relative overflow-hidden">
                    <span className="absolute top-3 right-4 text-white/10 text-3xl">”</span>
                    <span className="absolute bottom-3 left-4 text-white/10 text-3xl">“</span>
                    <p className="relative text-[20px] sm:text-[24px] leading-[1.9] text-right text-white font-arabic" dir="rtl" style={{ fontFamily: 'var(--font-amiri), serif' }}>
                      {hadith.text}
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3 mt-5">
                    <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-4">
                      <div className="text-xs tracking-[0.12em] text-white/40 uppercase">الباب</div>
                      <div className="text-sm font-medium text-white mt-1">{hadith.chapter}</div>
                    </div>
                    <div className="rounded-2xl bg-[#E8C46A]/10 border border-[#E8C46A]/15 p-4 text-center">
                      <div className="text-xs tracking-[0.12em] text-[#E8C46A]/70 uppercase">الدرجة</div>
                      <div className="text-sm font-bold text-[#FDEEB1] mt-1">{hadith.grade}</div>
                    </div>
                  </div>

                  <div className="flex justify-center mt-6">
                    <button onClick={getRandomHadith} className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#07161E] text-sm font-bold hover:bg-white/90 transition">
                      <HiRefresh />
                      حديث جديد
                    </button>
                  </div>
                </div>
              </motion.div>
            )
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
