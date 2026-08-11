'use client';

import { motion } from 'framer-motion';
import { 
  FaHeart, 
  FaGithub, 
  FaEnvelope, 
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { HiArrowUp } from "react-icons/hi";
import Link from 'next/link';

export default function Footer() {
  const socialLinks = [
    { name: 'GitHub', icon: FaGithub, url: 'https://github.com/Mostafa2132' },
    { name: 'LinkedIn', icon: FaLinkedin, url: 'https://www.linkedin.com/in/mostafa-ebrahem-81120a288/' },
    { name: 'Twitter', icon: FaTwitter, url: 'https://x.com/Mostafa73024233' },
    { name: 'Instagram', icon: FaInstagram, url: 'https://www.instagram.com/mostafa_ebrahem_0?igsh=NG1ubW9rNXZpODdk' },
    { name: 'WhatsApp', icon: FaWhatsapp, url: 'https://wa.me/201091320767' },
    { name: 'Email', icon: FaEnvelope, url: 'mailto:12m0stafa7@gmail.com' },
  ];

  const quickLinks = [
    { name: 'الرئيسية', href: '/' },
    { name: 'مواقيت الصلاة', href: '/prayer-times' },
    { name: 'الأدعية', href: '/duas' },
    { name: 'القرآن', href: '/quran' },
    { name: 'تواصل', href: '/contact' },
  ];

  return (
    <footer className="relative border-t border-white/[0.06] overflow-hidden">
      {/* subtle top glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#E8C46A]/20 to-transparent" />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top block */}
        <div className="py-10 md:py-12 grid lg:grid-cols-[1.2fr_0.8fr_1fr] gap-8 md:gap-10 border-b border-white/[0.06]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-[#E8C46A] font-bold">ص</div>
              <div>
                <div className="text-[15px] font-bold text-white">صدقة جارية</div>
                <div className="text-[11px] tracking-[0.14em] text-white/40 uppercase">Sadka • 2026</div>
              </div>
            </div>
            <p className="text-[13.5px] leading-6 text-white/60 mt-4 max-w-[420px]">
              موقع إسلامي هادئ — قرآن، أحاديث، أدعية ومواقيت صلاة. أُنشئ كـ صدقة جارية على روح
              <span className="text-white/90"> محمد شحاته حداد</span> رحمه الله. نسألكم الدعاء له.
            </p>
            <div className="inline-flex items-center gap-2 mt-4 px-3 py-1.5 rounded-full bg-[#E8C46A]/10 border border-[#E8C46A]/15 text-xs font-medium text-[#FDEEB1]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8C46A] animate-pulse-soft" />
              مشروع خيري مفتوح المصدر
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4">استكشف</h4>
            <div className="flex flex-wrap gap-2">
              {quickLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.06] text-sm text-white/70 hover:text-white hover:bg-white/[0.08] hover:border-white/10 transition"
                >
                  {l.name}
                </Link>
              ))}
            </div>
            <div className="mt-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] p-4">
              <p className="text-center text-[#E8C46A] text-sm font-bold">﴿ وَاللَّهُ يَدْعُو إِلَىٰ دَارِ السَّلَامِ ﴾</p>
              <p className="text-center text-white/40 text-xs mt-1">يونس 25</p>
            </div>
          </div>

          {/* Developer + social */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4">تواصل</h4>
            <div className="rounded-2xl bg-white/[0.04] border border-white/[0.06] p-4 flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#1A2E2A] to-[#0F1A1A] border border-white/10 flex items-center justify-center text-white font-bold text-sm">م</div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-bold text-white truncate">Mostafa M. Ebrahem</div>
                <div className="text-xs text-white/50">Next.js Developer</div>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs text-[#FDEEB1] bg-[#E8C46A]/10 border border-[#E8C46A]/15 px-2.5 py-1 rounded-full">
                <FaHeart className="text-[#E8C46A] text-[11px]" /> لله
              </span>
            </div>

            <div className="flex flex-wrap gap-2.5 mt-4">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.07] flex items-center justify-center text-white/70 hover:text-white hover:bg-white/[0.09] hover:border-white/15 transition"
                >
                  <s.icon className="text-[16px]" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40 text-center md:text-right">
            © {new Date().getFullYear()} صدقة جارية — جميع الحقوق محفوظة • صُنع بحب لوجه الله
            <span className="mx-2 text-white/15">•</span>
            <span className="text-white/30">Next.js • Framer Motion • Tailwind</span>
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-[#07161E] text-xs font-bold hover:bg-[#F8FAFC] transition shadow-sm"
          >
            العودة للأعلى
            <HiArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}
