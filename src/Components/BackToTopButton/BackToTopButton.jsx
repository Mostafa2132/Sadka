'use client';

import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function BackToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // دالة للتحقق من موقع الـ scroll
    const handleScroll = () => {
      // يظهر الزر بعد scroll 300px
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    // إضافة event listener للـ scroll
    window.addEventListener('scroll', handleScroll);

    // تنظيف الـ event listener عند unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // دالة للعودة للأعلى
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // حركة سلسة
    });
  };

  return (
    <AnimatePresence>
      {showButton && (
        <motion.button
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="
            fixed right-4 bottom-4 z-50
            w-12 h-12 
            flex items-center justify-center
            bg-gradient-to-br from-amber-400 to-amber-500
            hover:from-amber-300 hover:to-amber-400
            rounded-2xl
            shadow-lg shadow-amber-500/50
            hover:shadow-xl hover:shadow-amber-400/60
            transition-all duration-300
            group
          "
        >
          <FaArrowUp className="text-white text-xl group-hover:animate-bounce" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}