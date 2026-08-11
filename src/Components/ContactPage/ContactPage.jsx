"use client";
import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";
import StarsBackground from "../StarsBackground/StarsBackground";

export default function ContactPage() {
  const cards = [
    { href: "https://wa.me/qr/Z3SZKGVB4VD7I1", icon: FaWhatsapp, title: "واتساب", desc: "تواصل سريع ومباشر", color: "text-[#25D366]" },
    { href: "https://www.instagram.com/mostafa_ebrahem_0?igsh=NG1ubW9rNXZpODdk", icon: FaInstagram, title: "إنستجرام", desc: "تابع أحدث الأعمال", color: "text-[#E4405F]" },
    { href: "https://www.linkedin.com/in/mostafa-ebrahem-81120a288/", icon: FaLinkedin, title: "LinkedIn", desc: "تواصل مهني", color: "text-[#0A66C2]" },
  ];
  return (
    <section className="relative py-10 md:py-14 px-4 overflow-hidden min-h-[70vh]">
      <StarsBackground />
      <div className="relative max-w-[960px] mx-auto">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <span className="inline-flex px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.07] text-xs text-white/70">تواصل معنا</span>
          <h2 className="mt-3 text-[30px] md:text-[42px] font-bold tracking-tight text-white">نسعد بتواصلك</h2>
          <p className="text-white/50 text-sm mt-1 max-w-[560px] mx-auto leading-6">لأي استفسار أو تعاون أو كلمة طيبة — اختر المنصة الأنسب لك، ونرد عليك في أقرب وقت بإذن الله.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {cards.map((c, i) => (
            <motion.a
              key={c.title}
              href={c.href}
              target="_blank"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-[24px] border border-white/[0.07] bg-white/[0.04] backdrop-blur-xl p-6 text-center hover:bg-white/[0.07] hover:border-white/15 transition flex flex-col items-center"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/[0.06] border border-white/10 flex items-center justify-center">
                <c.icon className={`text-2xl ${c.color}`} />
              </div>
              <h3 className="text-white font-bold mt-4">{c.title}</h3>
              <p className="text-white/50 text-sm mt-1">{c.desc}</p>
              <span className="mt-4 inline-flex text-xs font-medium text-white/60 group-hover:text-white transition">فتح الرابط ←</span>
            </motion.a>
          ))}
        </div>

        <div className="mt-8 rounded-2xl bg-[#E8C46A]/10 border border-[#E8C46A]/15 p-4 text-center">
          <p className="text-sm text-[#FDEEB1]">🤲 اللهم اجعل هذا العمل خالصًا لوجهك، وانفع به من قرأه</p>
          <p className="text-xs text-white/40 mt-1">نرحب برسائلكم واقتراحاتكم دائمًا</p>
        </div>
      </div>
    </section>
  );
}
