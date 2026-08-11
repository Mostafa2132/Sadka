'use client';

import { useState, useEffect } from 'react';
import { HiArrowUp } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

export default function BackToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowButton(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <AnimatePresence>
      {showButton && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 12 }}
          whileHover={{ scale: 1.06, y: -2 }}
          whileTap={{ scale: 0.96 }}
          onClick={scrollToTop}
          aria-label="العودة للأعلى"
          className="fixed left-4 sm:left-6 bottom-4 sm:bottom-6 z-50 w-11 h-11 rounded-full bg-white text-[#07161E] shadow-[0_8px_24px_rgba(0,0,0,0.35)] border border-black/5 flex items-center justify-center hover:bg-[#F8FAFC] transition"
        >
          <HiArrowUp className="text-[16px]" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
