"use client";

import { motion, AnimatePresence } from "framer-motion";
import { HiX } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function DonateModal({ modalStatus, setModalStatus }) {
  const [copiedField, setCopiedField] = useState(null);

  useEffect(() => {
    document.body.style.overflow = modalStatus ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [modalStatus]);

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  if (!modalStatus) return null;

  const methods = [
    { id: "vodafone", title: "Vodafone Cash", label: "رقم المحفظة", value: "01080054892", accent: "from-[#E30613]/20 to-[#A00A12]/10" },
    { id: "instapay", title: "InstaPay", label: "اسم المستخدم", value: "mkhier159@instapay", accent: "from-[#0EA5E9]/20 to-[#0369A1]/10" },
    { id: "contact", title: "تواصل مباشر", label: "واتساب / اتصال", value: "+201091320767", accent: "from-[#10B981]/20 to-[#065F46]/10" },
  ];

  return (
    <AnimatePresence>
      {modalStatus && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] bg-[#040C12]/75 backdrop-blur-[12px] flex items-center justify-center p-4"
          onClick={() => setModalStatus(false)}
        >
          <motion.div
            initial={{ y: 20, opacity: 0, scale: 0.97 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 12, opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[880px] max-h-[90vh] overflow-auto rounded-[28px] border border-white/10 bg-[#0A1720]/90 backdrop-blur-2xl shadow-[0_20px_64px_rgba(0,0,0,0.5)]"
          >
            <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-white/[0.06] via-transparent to-transparent pointer-events-none" />
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#E8C46A]/25 to-transparent" />

            <button
              onClick={() => setModalStatus(false)}
              className="absolute left-4 top-4 w-8 h-8 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/[0.10] transition"
            >
              <HiX />
            </button>

            <div className="relative p-6 sm:p-8">
              <div className="text-center max-w-[560px] mx-auto">
                <div className="mx-auto w-12 h-12 rounded-2xl bg-[#E8C46A] flex items-center justify-center text-[#07161E] shadow-[0_8px_20px_rgba(232,196,106,0.3)]">
                  <FaHeart />
                </div>
                <h2 className="mt-4 text-[24px] md:text-[26px] font-bold text-white">صدقة جارية</h2>
                <p className="mt-2 text-[13.5px] leading-6 text-white/60">
                  تبرعك يصل أجره بإذن الله — صدقة جارية بنية الرحمة والمغفرة. اختر الوسيلة الأنسب لك.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mt-8">
                {methods.map((m) => (
                  <div
                    key={m.id}
                    className={`relative overflow-hidden rounded-2xl border border-white/[0.07] bg-gradient-to-br ${m.accent} backdrop-blur-md p-5 text-center`}
                  >
                    <div className="absolute inset-0 bg-white/[0.03]" />
                    <div className="relative">
                      <div className="text-sm font-bold text-white">{m.title}</div>
                      <div className="text-xs text-white/50 mt-1">{m.label}</div>
                      <div className="mt-3 rounded-xl bg-[#07161E]/70 border border-white/10 px-3 py-3">
                        <p className="text-sm font-bold tracking-wide text-[#FDEEB1]" dir="ltr">{m.value}</p>
                      </div>
                      <button
                        onClick={() => copyToClipboard(m.value, m.id)}
                        className={`mt-3 w-full py-2.5 rounded-full text-sm font-bold transition border ${
                          copiedField === m.id
                            ? "bg-[#10B981] text-white border-[#10B981]"
                            : "bg-[#E8C46A] text-[#07161E] border-[#E8C46A] hover:bg-[#F0D27A]"
                        }`}
                      >
                        {copiedField === m.id ? "تم النسخ ✓" : "نسخ"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] p-4 text-center">
                <p className="text-sm text-white/70">🤲 اللهم تقبل منا ومنكم واجعله خالصًا لوجهك الكريم</p>
                <p className="text-xs text-[#E8C46A] mt-1 font-medium">بارك الله فيكم وجزاكم خيرًا</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
