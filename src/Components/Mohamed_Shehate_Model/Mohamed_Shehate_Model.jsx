"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { HiX } from "react-icons/hi";

export default function MohamedShehateModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 2200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* backdrop */}
          <motion.div
            className="absolute inset-0 bg-[#040C12]/75 backdrop-blur-[14px]"
            onClick={() => setOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          {/* glow */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full bg-[#E8C46A]/10 blur-[80px]" />
          </div>

          <motion.div
            initial={{ y: 24, opacity: 0, scale: 0.97 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 16, opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
            className="relative w-full max-w-[420px] overflow-hidden rounded-[28px] border border-white/10 bg-[#0A1720]/90 backdrop-blur-2xl shadow-[0_20px_64px_rgba(0,0,0,0.5),0_1px_0_rgba(255,255,255,0.06)_inset]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.07] via-transparent to-transparent pointer-events-none" />
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#E8C46A]/25 to-transparent" />

            <button
              onClick={() => setOpen(false)}
              aria-label="إغلاق"
              className="absolute left-3 top-3 z-10 w-8 h-8 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/[0.10] transition"
            >
              <HiX className="w-4 h-4" />
            </button>

            <div className="relative p-7 sm:p-8 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8C46A]/10 border border-[#E8C46A]/15 text-[11px] font-bold tracking-[0.12em] text-[#FDEEB1] uppercase">
                صدقة جارية
              </div>

              <div className="relative mx-auto mt-6 w-[132px] h-[132px]">
                <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-[#E8C46A]/30 to-[#10B981]/20 blur-xl opacity-60" />
                <div className="relative w-full h-full rounded-full overflow-hidden border border-white/15 shadow-[0_12px_32px_rgba(0,0,0,0.35)]">
                  <Image
                    src="/imgs/mohamed.jpg"
                    alt="محمد شحاته حداد"
                    width={260}
                    height={260}
                    priority
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-full bg-[#07161E] border border-white/10 text-[10px] font-bold text-[#E8C46A] whitespace-nowrap">
                  رحمه الله — 05.08.2025
                </span>
              </div>

              <h2 className="mt-6 text-[22px] font-bold tracking-tight text-white">محمد شحاته حداد</h2>
              <p className="mt-1 text-xs tracking-[0.14em] text-white/40 uppercase">في ذمة الله</p>

              <div className="mt-5 rounded-2xl bg-white/[0.04] border border-white/[0.07] p-4">
                <p className="text-[13.5px] leading-7 text-white/80">
                  اللهم اغفر له وارحمه، وعافه واعف عنه، وأكرم نزله ووسّع مدخله، واغسله بالماء والثلج والبرد، واجعل قبره روضة من رياض الجنة.
                </p>
              </div>

              <p className="mt-3 text-xs text-white/35">نسألكم الدعاء له في كل حين — ولا تنسوه من صالح دعائكم 🤍</p>

              <div className="grid grid-cols-2 gap-3 mt-6">
                <button
                  onClick={() => setOpen(false)}
                  className="py-3 rounded-full bg-[#E8C46A] text-[#07161E] text-sm font-bold hover:bg-[#F0D27A] transition shadow-[0_8px_20px_rgba(232,196,106,0.28)]"
                >
                  ادعُ له
                </button>
                <button
                  onClick={() => setOpen(false)}
                  className="py-3 rounded-full bg-white/[0.06] border border-white/10 text-white text-sm font-medium hover:bg-white/[0.10] transition"
                >
                  متابعة
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
