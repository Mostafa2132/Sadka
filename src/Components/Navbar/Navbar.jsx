"use client";

import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Du3aMarque from "../Du3aMarque/Du3aMarque";
import DonateModal from "../DonateModal/DonateModal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { name: "الرئيسية", href: "/" },
    { name: "مواقيت الصلاة", href: "/prayer-times" },
    { name: "الأدعية", href: "/duas" },
    { name: "القرآن", href: "/quran" },
    { name: "تواصل", href: "/contact" },
  ];

  const pathname = usePathname();

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50">
        <Du3aMarque />
        <nav
          className={`transition-all duration-500 border-b ${
            scrolled
              ? "bg-[#050F14]/80 backdrop-blur-2xl border-white/[0.07] shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
              : "bg-[#050F14]/60 backdrop-blur-xl border-white/[0.05]"
          }`}
        >
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-[64px]">
              {/* Logo - 2026 minimal */}
              <Link href="/" className="flex items-center gap-3 group">
                <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-[#1A2E2A] to-[#0F1E1A] border border-white/10 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#E8C46A]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="relative text-[16px] font-bold text-[#E8C46A] tracking-tight">ص</span>
                  <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#10B981] border-2 border-[#0F1E1A]" />
                </div>
                <div className="flex flex-col leading-none">
                  <span className="text-[15px] font-bold tracking-tight text-white group-hover:text-[#FDEEB1] transition-colors">
                    صدقة جارية
                  </span>
                  <span className="text-[11px] font-medium tracking-[0.14em] text-white/45 uppercase">
                    Sadka 2026
                  </span>
                </div>
              </Link>

              {/* Desktop nav – pill */}
              <div className="hidden lg:flex items-center">
                <div className="flex items-center gap-1 p-1 rounded-full bg-white/[0.04] border border-white/[0.06] backdrop-blur-md">
                  {navLinks.map((link) => {
                    const active = pathname === link.href;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`relative px-4 py-[7px] rounded-full text-[13.5px] font-medium transition-all duration-300 ${
                          active
                            ? "bg-white text-[#07161E] shadow-sm"
                            : "text-white/70 hover:text-white hover:bg-white/[0.06]"
                        }`}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Actions */}
              <div className="hidden lg:flex items-center gap-3">
                <span className="hidden xl:inline-flex items-center gap-2 text-xs text-white/50 mr-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-soft" />
                  مباشر
                </span>
                <button
                  onClick={() => setIsDonateModalOpen(true)}
                  className="inline-flex items-center justify-center px-5 py-[9px] rounded-full bg-[#E8C46A] text-[#0A1A18] text-[13.5px] font-bold hover:bg-[#F0D27A] transition-all shadow-[0_4px_18px_rgba(232,196,106,0.3)] hover:shadow-[0_6px_24px_rgba(232,196,106,0.4)] hover:-translate-y-px active:translate-y-0"
                >
                  تبرع الآن
                </button>
              </div>

              {/* Mobile toggle */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Menu"
                className="lg:hidden w-9 h-9 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-white hover:bg-white/[0.10] transition"
              >
                {isOpen ? <HiX className="w-5 h-5" /> : <HiMenu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile drawer */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] border-t border-white/[0.06] bg-[#070F17]/95 backdrop-blur-2xl ${
              isOpen ? "max-h-[380px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-4 py-5 space-y-1">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-[14px] font-medium transition ${
                      active
                        ? "bg-white text-[#07161E]"
                        : "text-white/80 bg-white/[0.04] hover:bg-white/[0.08] hover:text-white"
                    }`}
                  >
                    <span>{link.name}</span>
                    {active && <span className="w-1.5 h-1.5 rounded-full bg-[#07161E]" />}
                  </Link>
                );
              })}
              <button
                onClick={() => {
                  setIsOpen(false);
                  setIsDonateModalOpen(true);
                }}
                className="w-full mt-3 py-3 rounded-xl bg-[#E8C46A] text-[#07161E] font-bold text-[14px] hover:bg-[#F0D27A] transition flex items-center justify-center gap-2"
              >
                <span>تبرع الآن</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#07161E]/60" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {isDonateModalOpen && (
        <DonateModal modalStatus={isDonateModalOpen} setModalStatus={setIsDonateModalOpen} />
      )}
    </>
  );
}
