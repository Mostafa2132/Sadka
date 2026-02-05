"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";

export default function MohamedShehateModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Show modal after 2 seconds (after page load)
    const timer = setTimeout(() => {
      setOpen(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ y: 50, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 40, opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative w-full max-w-md rounded-3xl bg-gradient-to-b from-indigo-950 to-slate-950 p-6 md:p-8 text-center shadow-2xl"
          >
            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 text-yellow-300 text-xl hover:text-yellow-400 transition"
              aria-label="Close"
            >
              <FaTimes />
            </button>

            {/* Image */}
            <div className="mx-auto mb-4 size-[260px] overflow-hidden rounded-full border-4 border-yellow-400/40 shadow-md">
              <Image
                src="/imgs/mohamed.jpg"
                alt="محمد شحاته حداد"
                width={260}
                height={260}
                priority
                className="h-full w-full object-cover"
              />
            </div>

            {/* Name */}
            <h2 className="mb-1 text-2xl font-bold text-yellow-300">
              محمد شحاته حداد
            </h2>

            {/* Date */}
            <p className="mb-4 text-sm text-purple-200">
              تاريخ الوفاة: 5 أغسطس 2025
            </p>

            {/* Dua */}
            <p className="mb-6 text-white leading-relaxed">
              اللهم ارحمه رحمةً واسعة، واغفر له ذنوبه، واجعل قبره روضةً من رياض
              الجنة، وألهم أهله وذويه الصبر والسلوان.
            </p>

            {/* Action */}
            <button
              onClick={() => setOpen(false)}
              className="rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 px-6 py-2 font-bold text-indigo-950 shadow-lg hover:shadow-yellow-400/50 transition"
            >
              إغلاق
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
