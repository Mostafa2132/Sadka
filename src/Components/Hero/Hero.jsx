"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaMoon, FaStar, FaMosque, FaArrowUp } from "react-icons/fa";
import { IoSparkles } from "react-icons/io5";
import { BsMoonStarsFill, BsStarFill } from "react-icons/bs";
import Link from "next/link";
import StarsBackground from "../StarsBackground/StarsBackground";

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // حساب الأيام المتبقية على رمضان
  useEffect(() => {
    const calculateTimeLeft = () => {
      // تاريخ بداية رمضان 2026 (1Feb 18, 2026)
      const ramadanDate = new Date("2026-02-18T00:00:00");
      const now = new Date();
      const difference = ramadanDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);


  // أنيميشن الفوانيس
  const lanterns = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    x: i * 20 + 10,
  }));

  return (
    <>
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-950">
        {/* Stars Background  */}
        <StarsBackground />

        {/* Animated Gradient Orbs */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Lanterns Decoration */}
        <div className="absolute top-8 left-0 right-0 flex justify-around px-4">
          {lanterns.map((lantern, index) => (
            <motion.div
              key={lantern.id}
              className="relative"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: index * 0.2,
                duration: 1,
                type: "spring",
              }}
            >
              <motion.div
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, 5, 0, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.3,
                }}
                className="relative"
              >
                {/* Lantern String */}
                <div className="w-0.5 h-12 bg-gradient-to-b from-yellow-600 to-yellow-400 mx-auto" />

                {/* Lantern Body */}
                <div className="w-16 h-20 bg-gradient-to-b from-yellow-400 via-yellow-500 to-yellow-600 rounded-lg relative shadow-lg shadow-yellow-500/50">
                  <div className="absolute inset-2 bg-yellow-300/30 rounded-lg" />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <BsMoonStarsFill className="text-yellow-200 text-xl animate-pulse" />
                  </div>
                </div>

                {/* Lantern Bottom */}
                <div className="w-12 h-4 bg-gradient-to-b from-yellow-600 to-yellow-700 mx-auto rounded-b-lg" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pt-34 pb-20">
          {/* Animated Moon Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              duration: 1,
              type: "spring",
              bounce: 0.5,
            }}
            className="relative mb-8"
          >
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 -m-6"
            >
              {[...Array(8)].map((_, i) => (
                <FaStar
                  key={i}
                  className="absolute text-yellow-300 text-sm"
                  style={{
                    left: `${50 + 40 * Math.cos((i * Math.PI) / 4)}%`,
                    top: `${50 + 40 * Math.sin((i * Math.PI) / 4)}%`,
                  }}
                />
              ))}
            </motion.div>

            <div className="relative bg-gradient-to-br from-yellow-300 to-yellow-500 p-8 rounded-full shadow-2xl shadow-yellow-500/50">
              <BsMoonStarsFill className="text-6xl text-purple-900" />
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mb-6"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 ">
              <motion.span
                className="inline-block py-4 bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0%", "100%", "0%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
              >
                رمضان كريم
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl text-purple-200 font-arabic"
            >
              شهر الخير والبركات
            </motion.p>
          </motion.div>

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-12"
          >
            <div className="text-center mb-6">
              <motion.p
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="text-yellow-300 text-lg md:text-xl font-semibold mb-2"
              >
                الوقت المتبقي على رمضان
              </motion.p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "يوم", value: timeLeft.days },
                { label: "ساعة", value: timeLeft.hours },
                { label: "دقيقة", value: timeLeft.minutes },
                { label: "ثانية", value: timeLeft.seconds },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="relative"
                >
                  <div className="bg-gradient-to-br from-purple-800/80 to-indigo-900/80 backdrop-blur-xl p-6 md:p-8 rounded-2xl border-2 border-yellow-400/30 shadow-2xl shadow-purple-500/30 min-w-[100px] md:min-w-[130px]">
                    <motion.div
                      key={item.value}
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="text-4xl md:text-6xl font-bold bg-gradient-to-br from-yellow-300 to-yellow-500 bg-clip-text text-transparent mb-2"
                    >
                      {String(item.value).padStart(2, "0")}
                    </motion.div>
                    <div className="text-purple-200 text-sm md:text-base font-semibold">
                      {item.label}
                    </div>
                  </div>

                  {/* Decorative Corner Stars */}
                  <IoSparkles className="absolute -top-2 -right-2 text-yellow-300 text-xl animate-pulse" />
                  <IoSparkles className="absolute -bottom-2 -left-2 text-yellow-400 text-xl animate-pulse delay-300" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Link
              href="/prayer-times"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-purple-900 font-bold text-lg rounded-full shadow-2xl shadow-yellow-500/50 overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-400"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10 flex items-center gap-2">
                <FaMosque />
                مواقيت الصلاة
              </span>
            </Link>

            <Link
              href={"/duas"}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border-2 border-yellow-400 text-yellow-300 font-bold text-lg rounded-full hover:bg-yellow-400/10 transition-all duration-300 shadow-lg shadow-yellow-400/20"
            >
              <span className="flex items-center gap-2">
                <FaMoon />
                أدعية رمضان
              </span>
            </Link>
          </motion.div>

          {/* Islamic Pattern Decoration */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-yellow-400/20 to-transparent"
            style={{
              maskImage:
                "repeating-linear-gradient(90deg, transparent, transparent 10px, black 10px, black 20px)",
              WebkitMaskImage:
                "repeating-linear-gradient(90deg, transparent, transparent 10px, black 10px, black 20px)",
            }}
          />

          {/* Bottom Decorative Elements */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="flex gap-8 items-center justify-center opacity-50"
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              >
                <FaStar className="text-yellow-300 text-2xl" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Floating Mosque Silhouettes */}
        <div className="absolute bottom-0 left-0 right-0 opacity-20">
          <svg
            viewBox="0 0 1200 200"
            className="w-full h-auto"
            preserveAspectRatio="none"
          >
            <path
              d="M0,100 L200,80 L300,90 L400,70 L600,85 L800,75 L1000,90 L1200,80 L1200,200 L0,200 Z"
              fill="url(#mosque-gradient)"
            />
            <defs>
              <linearGradient
                id="mosque-gradient"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#4c1d95" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#581c87" stopOpacity="1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </>
  );
}
