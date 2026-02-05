"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaCopy, FaCheckCircle } from "react-icons/fa";
import { MdPhone } from "react-icons/md";
import { SiVodafone, SiGooglepay } from "react-icons/si";
import { IoSparkles, IoHeartSharp } from "react-icons/io5";
import { BsStarFill } from "react-icons/bs";
import { useState, useEffect } from "react";

export default function DonateModal({ modalStatus, setModalStatus }) {
  const [copiedField, setCopiedField] = useState(null);

  // 🔒 قفل الاسكرول اللي ورا المودال
  useEffect(() => {
    if (modalStatus) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modalStatus]);

  // نسخ
  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  if (!modalStatus) return null;

  const paymentMethods = [
    {
      id: "vodafone",
      title: "Vodafone Cash",
      icon: SiVodafone,
      iconColor: "text-red-500",
      gradientFrom: "from-red-500/20",
      gradientTo: "to-red-600/10",
      borderColor: "border-red-400/30",
      glowColor: "shadow-red-500/20",
      hoverGlow: "hover:shadow-red-400/40",
      label: "رقم المحفظة",
      value: "01080054892",
    },
    {
      id: "instapay",
      title: "InstaPay",
      icon: SiGooglepay,
      iconColor: "text-sky-400",
      gradientFrom: "from-sky-500/20",
      gradientTo: "to-sky-600/10",
      borderColor: "border-sky-400/30",
      glowColor: "shadow-sky-500/20",
      hoverGlow: "hover:shadow-sky-400/40",
      label: "اسم المستخدم",
      value: "mkhier159@instapay",
    },
    {
      id: "contact",
      title: "للتواصل المباشر",
      icon: MdPhone,
      iconColor: "text-green-400",
      gradientFrom: "from-green-500/20",
      gradientTo: "to-green-600/10",
      borderColor: "border-green-400/30",
      glowColor: "shadow-green-500/20",
      hoverGlow: "hover:shadow-green-400/40",
      label: "واتساب أو اتصال",
      value: "+201091320767",
    },
  ];

  return (
    <AnimatePresence>
      {modalStatus && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-md flex items-center justify-center px-4"
          onClick={() => setModalStatus(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="
              relative
              w-full max-w-5xl
              max-h-[90vh] overflow-y-auto
              overscroll-contain
              scrollbar-thin scrollbar-thumb-yellow-400/40 scrollbar-track-transparent
              bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-950
              rounded-3xl
              border-2 border-yellow-400/30
              shadow-2xl shadow-purple-500/50
              p-6 sm:p-8 md:p-12
            "
          >
            {/* نجوم خلفية */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  animate={{
                    opacity: [0.2, 0.5, 0.2],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                  }}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                >
                  <BsStarFill
                    className="text-yellow-300"
                    size={8 + Math.random() * 12}
                  />
                </motion.div>
              ))}
            </div>

            {/* زر الإغلاق */}
            <button
              onClick={() => setModalStatus(false)}
              className="absolute top-4 right-4 z-10 w-11 h-11 flex items-center justify-center
              bg-red-500/20 border border-red-400/30 rounded-full text-red-300 hover:text-red-200"
            >
              <FaTimes />
            </button>

            {/* الهيدر */}
            <div className="text-center mb-10">
              <div className="flex justify-center mb-6">
                <div className="bg-yellow-400 p-5 rounded-full shadow-2xl shadow-yellow-500/50">
                  <IoHeartSharp className="text-5xl text-purple-900" />
                </div>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent">
                صدقة جارية
              </h2>

              <p className="text-purple-200 mt-4 max-w-2xl mx-auto">
                تبرعك يصل أجره بإذن الله، وهو صدقة جارية بنية الرحمة والمغفرة
              </p>
            </div>

            {/* طرق الدفع */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {paymentMethods.map((method) => (
                <div
                  key={method.id}
                  className={`bg-gradient-to-br ${method.gradientFrom} ${method.gradientTo}
                  border-2 ${method.borderColor} rounded-2xl p-6 text-center shadow-xl`}
                >
                  <method.icon
                    className={`${method.iconColor} text-6xl mx-auto mb-4`}
                  />

                  <h3 className="text-yellow-300 font-bold text-xl mb-2">
                    {method.title}
                  </h3>

                  <p className="text-purple-200 text-sm mb-2">
                    {method.label}
                  </p>

                  <div className="bg-indigo-950/50 border border-yellow-400/20 rounded-xl p-3 mb-3">
                    <p className="text-white font-semibold" dir="ltr">
                      {method.value}
                    </p>
                  </div>

                  <button
                    onClick={() =>
                      copyToClipboard(method.value, method.id)
                    }
                    className={`w-full py-3 rounded-xl font-bold transition
                      ${
                        copiedField === method.id
                          ? "bg-green-500 text-white"
                          : "bg-yellow-400 text-purple-900 hover:bg-yellow-300"
                      }`}
                  >
                    {copiedField === method.id ? "تم النسخ ✓" : "نسخ"}
                  </button>
                </div>
              ))}
            </div>

            {/* دعاء */}
            <div className="text-center">
              <p className="text-purple-200">
                🤲 اللهم تقبل منا ومنكم، واجعل هذا العمل خالصًا لوجهك الكريم
              </p>
              <p className="text-yellow-300 font-semibold mt-3">
                بارك الله فيكم وجزاكم الله خيراً
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
