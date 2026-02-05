"use client";
import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";
import StarsBackground from "../StarsBackground/StarsBackground";

export default function ContactPage() {
  return (
    <section className="relative py-28 px-4 bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-950 overflow-hidden">
      {/* Background Stars */}
      <StarsBackground />
      {/* Glow background */}
      <div className="absolute inset-0 bg-yellow-400/5 blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl py-3 font-bold mb-6 bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 bg-clip-text text-transparent"
        >
          تواصل معي
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-purple-200 max-w-2xl mx-auto mb-14 leading-relaxed"
        >
          يسعدني تواصلك معي في أي وقت، سواء لاستفسار، تعاون، أو حتى كلمة طيبة 🌙
          اختر المنصة الأنسب لك.
        </motion.p>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* WhatsApp */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="https://wa.me/qr/Z3SZKGVB4VD7I1"
            target="_blank"
            className="bg-indigo-950/70 border border-yellow-400/20 rounded-2xl p-8 backdrop-blur-xl shadow-xl shadow-purple-500/30 transition"
          >
            <FaWhatsapp className="text-5xl text-green-400 mx-auto mb-4" />
            <h3 className="text-yellow-300 text-xl font-bold mb-2">واتساب</h3>
            <p className="text-purple-200 text-sm">
              تواصل سريع ومباشر في أي وقت
            </p>
          </motion.a>

          {/* Instagram */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="https://www.instagram.com/mostafa_ebrahem_0?igsh=NG1ubW9rNXZpODdk"
            target="_blank"
            className="bg-indigo-950/70 border border-yellow-400/20 rounded-2xl p-8 backdrop-blur-xl shadow-xl shadow-purple-500/30 transition"
          >
            <FaInstagram className="text-5xl text-pink-400 mx-auto mb-4" />
            <h3 className="text-yellow-300 text-xl font-bold mb-2">إنستجرام</h3>
            <p className="text-purple-200 text-sm">تابعني وشوف أحدث الأعمال</p>
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="https://www.linkedin.com/in/mostafa-ebrahem-81120a288/"
            target="_blank"
            className="bg-indigo-950/70 border border-yellow-400/20 rounded-2xl p-8 backdrop-blur-xl shadow-xl shadow-purple-500/30 transition"
          >
            <FaLinkedin className="text-5xl text-sky-400 mx-auto mb-4" />
            <h3 className="text-yellow-300 text-xl font-bold mb-2">LinkedIn</h3>
            <p className="text-purple-200 text-sm">تواصل مهني وفرص تعاون</p>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
