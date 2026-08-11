"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiArrowLeft } from "react-icons/hi";
import { BsStars } from "react-icons/bs";
import { IoTimeOutline } from "react-icons/io5";
import StarsBackground from "../StarsBackground/StarsBackground";

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calc = () => {
      const ramadanDate = new Date("2026-02-18T00:00:00");
      const diff = ramadanDate - new Date();
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    };
    calc();
    const t = setInterval(calc, 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative overflow-hidden">
      <StarsBackground />

      {/* subtle mesh orbs */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[520px] bg-gradient-to-b from-[#10B981]/[0.08] to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-10 md:pt-14 md:pb-14">
        {/* top label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.08] backdrop-blur-md text-xs font-medium text-white/80">
            <BsStars className="text-[#E8C46A]" />
            صدقة جارية • إحياء لذكرى طيبة
            <span className="hidden sm:inline-flex w-px h-3 bg-white/15 mx-1" />
            <span className="hidden sm:inline text-white/50">رمضان 1447هـ</span>
          </span>
        </motion.div>

        {/* Bento grid */}
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-5 md:gap-6">
          {/* Left – main hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="relative overflow-hidden rounded-[28px] md:rounded-[32px] border border-white/[0.08] bg-gradient-to-br from-white/[0.07] via-white/[0.03] to-white/[0.02] backdrop-blur-xl p-6 sm:p-8 md:p-10 flex flex-col"
          >
            {/* inner highlight */}
            <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-gradient-to-br from-white/[0.08] via-transparent to-transparent" />
            {/* gold accent line */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#E8C46A]/30 to-transparent" />

            <div className="relative">
              <h1 className="font-bold leading-[0.95] tracking-tight">
                <span className="block text-[34px] sm:text-[42px] md:text-[52px] text-white">صدقة جارية</span>
                <span className="block text-[34px] sm:text-[42px] md:text-[52px] text-gold mt-1">على روح محمد</span>
                <span className="block text-[18px] sm:text-[20px] font-medium tracking-[0.08em] text-white/45 mt-3">
                  Mohamed Shehate Haddad — 05.08.2025
                </span>
              </h1>

              <p className="mt-5 text-[15px] md:text-[16.5px] leading-7 text-white/70 max-w-[560px]">
                موقع تذكاري هادئ يجمع <span className="text-white font-medium">القرآن الكريم</span> و
                <span className="text-white font-medium"> الأحاديث</span> و<span className="text-white font-medium">الأدعية</span> ومواقيت الصلاة —
                نسألكم الدعاء له بالرحمة والمغفرة، وأن يكون هذا العمل نورًا له في قبره.
              </p>

              <div className="flex flex-wrap gap-3 mt-7">
                <Link
                  href="/quran"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#E8C46A] text-[#0A1A18] text-sm font-bold hover:bg-[#F0D27A] transition shadow-[0_8px_24px_rgba(232,196,106,0.28)]"
                >
                  ابدأ القراءة
                  <HiArrowLeft className="text-base rotate-180" />
                </Link>
                <Link
                  href="/duas"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.06] border border-white/10 text-white text-sm font-medium hover:bg-white/[0.10] backdrop-blur-md transition"
                >
                  <BsStars className="text-[#E8C46A]" />
                  أدعية مختارة
                </Link>
                <Link
                  href="/prayer-times"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-transparent border border-white/10 text-white/80 text-sm font-medium hover:bg-white/[0.06] hover:text-white transition"
                >
                  <IoTimeOutline />
                  مواقيت الصلاة
                </Link>
              </div>

              {/* mini stats */}
              <div className="grid grid-cols-3 gap-3 mt-8">
                {[
                  { k: "114", l: "سورة" },
                  { k: "أذكار", l: "يومية" },
                  { k: "5", l: "صلوات" },
                ].map((s) => (
                  <div key={s.l} className="rounded-2xl bg-white/[0.04] border border-white/[0.06] px-3 py-3 text-center">
                    <div className="text-lg font-bold text-white">{s.k}</div>
                    <div className="text-[11px] tracking-widest text-white/50 uppercase">{s.l}</div>
                  </div>
                ))}
              </div>

              {/* Dua strip */}
              <div className="mt-6 rounded-2xl bg-[#0C1F1E]/70 border border-[#E8C46A]/15 p-4 flex gap-3 items-start">
                <span className="mt-1 w-8 h-8 rounded-full bg-[#E8C46A]/15 border border-[#E8C46A]/20 flex items-center justify-center text-[#E8C46A] text-sm">﷽</span>
                <div>
                  <p className="text-[13px] leading-6 text-[#FDEEB1] font-medium">
                    اللهم ارحمه رحمة واسعة، واجعل قبره روضة من رياض الجنة، ونوّر له فيه، واجمعنا به في الفردوس الأعلى.
                  </p>
                  <p className="text-xs text-white/40 mt-1">— دعاء محب</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right column */}
          <div className="flex flex-col gap-5 md:gap-6">
            {/* Memorial card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.14 }}
              className="relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-gradient-to-br from-white/[0.06] to-white/[0.02] backdrop-blur-xl p-5 sm:p-6"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#E8C46A]/[0.06] via-transparent to-[#10B981]/[0.05]" />
              <div className="relative flex gap-4 items-start">
                <div className="relative shrink-0">
                  <div className="absolute -inset-1 rounded-[20px] bg-gradient-to-br from-[#E8C46A]/30 to-[#10B981]/20 blur-xl opacity-60" />
                  <div className="relative w-[96px] h-[96px] sm:w-[112px] sm:h-[112px] rounded-[18px] overflow-hidden border border-white/15 bg-[#0A1A18]">
                    <Image
                      src="/imgs/mohamed.jpg"
                      alt="محمد شحاته حداد"
                      width={224}
                      height={224}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                  <span className="absolute -bottom-1 -right-1 px-2 py-1 rounded-full bg-[#0A1A18] border border-white/10 text-[10px] font-bold tracking-widest text-[#E8C46A]">رحمه الله</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-[18px] font-bold text-white leading-none">محمد شحاته حداد</h3>
                  <p className="text-xs text-white/50 mt-1.5">05 أغسطس 2025 • ذكرى لا تُنسى</p>
                  <p className="text-[13px] leading-6 text-white/75 mt-3 line-clamp-3">
                    “كان طيّب القلب، حسن الخلق، محبوبًا بين الناس. نسأل الله أن يجعل كل حرف يُقرأ هنا في ميزان حسناته.”
                  </p>
                  <div className="flex items-center gap-2 mt-3 text-xs text-[#E8C46A]/90">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E8C46A]" />
                    ادعُ له الآن
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Countdown – 2026 minimal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="rounded-[28px] border border-white/[0.08] bg-[#0A1C1A]/70 backdrop-blur-xl p-5 sm:p-6 overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent pointer-events-none" />
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <span className="w-7 h-7 rounded-full bg-[#E8C46A]/15 border border-[#E8C46A]/20 flex items-center justify-center text-[#E8C46A]">◐</span>
                    العد التنازلي لرمضان
                  </h4>
                  <span className="text-[11px] tracking-[0.14em] text-white/40 uppercase">18 Feb 2026</span>
                </div>

                <div className="grid grid-cols-4 gap-2 sm:gap-3">
                  {[
                    { label: "يوم", value: timeLeft.days },
                    { label: "ساعة", value: timeLeft.hours },
                    { label: "دقيقة", value: timeLeft.minutes },
                    { label: "ثانية", value: timeLeft.seconds },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="relative rounded-2xl bg-white/[0.05] border border-white/[0.07] p-3 sm:p-4 text-center overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.06] to-transparent" />
                      <div className="relative text-[24px] sm:text-[28px] font-bold tracking-tight text-white tabular-nums">
                        {String(item.value).padStart(2, "0")}
                      </div>
                      <div className="relative text-[11px] font-medium tracking-widest text-white/50 uppercase mt-1">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-center text-xs text-white/45 mt-3">اللهم بلغنا رمضان وبارك لنا فيه</p>
              </div>
            </motion.div>

            {/* Quick actions bento */}
            <div className="grid grid-cols-2 gap-3">
              <Link
                href="/quran"
                className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.04] backdrop-blur-md p-4 hover:bg-white/[0.07] transition"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#E8C46A]/10 to-transparent opacity-0 group-hover:opacity-100 transition" />
                <div className="relative">
                  <div className="w-8 h-8 rounded-xl bg-[#E8C46A] flex items-center justify-center text-[#0A1A18] text-sm">۞</div>
                  <div className="text-sm font-bold text-white mt-3">القرآن الكريم</div>
                  <div className="text-xs text-white/50 mt-1">114 سورة • تلاوة وبحث</div>
                </div>
              </Link>
              <Link
                href="/prayer-times"
                className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.04] backdrop-blur-md p-4 hover:bg-white/[0.07] transition"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#10B981]/10 to-transparent opacity-0 group-hover:opacity-100 transition" />
                <div className="relative">
                  <div className="w-8 h-8 rounded-xl bg-[#0F2E2A] border border-white/10 flex items-center justify-center text-[#6EE7B7] text-sm">
                    <IoTimeOutline />
                  </div>
                  <div className="text-sm font-bold text-white mt-3">مواقيت الصلاة</div>
                  <div className="text-xs text-white/50 mt-1">حسب موقعك • دقيقة</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
