"use client";

import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { FaMosque } from "react-icons/fa";
import { FaMoon, FaStar } from "react-icons/fa";
import { BsStarFill } from "react-icons/bs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Du3aMarque from "../Du3aMarque/Du3aMarque";
import DonateModal from "../DonateModal/DonateModal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "الرئيسية", href: "/" },
    { name: "مواقيت الصلاة", href: "/prayer-times" },
    { name: "الأدعية", href: "/duas" },
    { name: "القرآن الكريم", href: "/quran" },
    { name: "تواصل معنا", href: "/contact" },
  ];

  const pathname = usePathname();
  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-gradient-to-r from-purple-900/95 via-indigo-900/95 to-purple-900/95 backdrop-blur-md shadow-lg shadow-purple-500/20"
            : "bg-gradient-to-r from-purple-900/80 via-indigo-900/80 to-purple-900/80 backdrop-blur-sm"
        }`}
      >
        {/* Decorative Stars */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <BsStarFill className="absolute top-2 left-10 text-yellow-300 text-xs animate-pulse" />
          <BsStarFill className="absolute top-4 right-20 text-yellow-200 text-xs animate-pulse delay-100" />
          <FaStar className="absolute bottom-2 left-1/4 text-yellow-300 text-xs animate-pulse delay-200" />
          <FaStar className="absolute top-3 right-1/3 text-yellow-200 text-xs animate-pulse delay-300" />
        </div>
        <Du3aMarque />

        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo Section */}
            <div className="flex items-center space-x-3 space-x-reverse group cursor-pointer">
              <div className="relative">
                <FaMosque className="text-yellow-300 text-4xl group-hover:text-yellow-200 transition-colors duration-300" />
                <FaMoon className="absolute -top-1 -right-1 text-yellow-400 text-sm animate-pulse" />
              </div>
              <div className="flex flex-col">
                <span className="text-white text-2xl font-bold bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent">
                  رمضان كريم
                </span>
                <span className="text-yellow-200 text-xs">١٤٤٦ هـ</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1 space-x-reverse">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className={`relative px-4 py-2 text-white font-medium text-sm hover:text-yellow-300 transition-all duration-300 group ${
                    pathname === link.href
                      ? "text-yellow-300 bg-white/10 rounded-lg before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-3/4 before:h-0.5 before:bg-yellow-400"
                      : ""
                  }`}
                >
                  <span className="relative z-10">{link.name}</span>
                  <span className="absolute inset-0 bg-white/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 ease-out" />
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-yellow-300 to-yellow-500 group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden md:flex items-center space-x-3 space-x-reverse">
              <button
                onClick={() => setIsDonateModalOpen(!isDonateModalOpen)}
                className="relative px-6 py-2.5 bg-gradient-to-r from-yellow-400 to-yellow-500 text-purple-900 font-bold rounded-full hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 shadow-lg shadow-yellow-500/50 hover:shadow-yellow-400/60 hover:scale-105 overflow-hidden group"
              >
                <span className="relative z-10 flex items-center space-x-2 space-x-reverse">
                  <span>تبرع الآن</span>
                </span>
                <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors duration-300"
            >
              {isOpen ? (
                <HiX className="h-7 w-7" />
              ) : (
                <HiMenu className="h-7 w-7" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 pt-2 pb-6 space-y-2 bg-gradient-to-b from-purple-900/95 to-indigo-900/95 backdrop-blur-md border-t border-white/10">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block ${
                  pathname === link.href
                    ? "text-yellow-300 bg-white/10 rounded-lg before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-3/4 before:h-0.5 before:bg-yellow-400"
                    : ""
                } px-4 py-3 text-white font-medium rounded-lg hover:bg-white/10 hover:text-yellow-300 transition-all duration-300 text-right`}
              >
                {link.name}
              </Link>
            ))}
            <button onClick={() => setIsDonateModalOpen(!isDonateModalOpen)} className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-purple-900 font-bold rounded-full hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 shadow-lg shadow-yellow-500/50 flex items-center justify-center space-x-2 space-x-reverse">
              <span>تبرع الآن</span>
            </button>
          </div>
        </div>

        {/* Bottom Decorative Border */}
        <div className="h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-50"></div>
      </nav>

      {/* Donate Modal */}
      {isDonateModalOpen && (
        <DonateModal
          modalStatus={isDonateModalOpen}
          setModalStatus={setIsDonateModalOpen}
        />
      )}
    </>
  );
}
