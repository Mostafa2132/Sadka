'use client';

import { motion } from 'framer-motion';
import { 
  FaHeart, 
  FaQuran, 
  FaGithub, 
  FaEnvelope, 
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTelegram,
  FaWhatsapp,
  FaMosque,
  FaStar,
  FaMoon,
  FaLevelUpAlt
} from "react-icons/fa";
import { IoSparkles } from 'react-icons/io5';
import { BsStarFill } from 'react-icons/bs';
import Link from 'next/link';

export default function Footer() {
  const socialLinks = [
    { 
      name: 'GitHub', 
      icon: FaGithub, 
      url: 'https://github.com/Mostafa2132', 
      color: 'hover:text-gray-400',
      bgColor: 'hover:bg-gray-700'
    },
    { 
      name: 'LinkedIn', 
      icon: FaLinkedin, 
      url: 'https://www.linkedin.com/in/mostafa-ebrahem-81120a288/', 
      color: 'hover:text-blue-400',
      bgColor: 'hover:bg-blue-600'
    },
    { 
      name: 'Twitter', 
      icon: FaTwitter, 
      url: 'https://x.com/Mostafa73024233', 
      color: 'hover:text-sky-400',
      bgColor: 'hover:bg-sky-600'
    },
    { 
      name: 'Facebook', 
      icon: FaFacebook, 
      url: 'https://facebook.com/mostafa', 
      color: 'hover:text-blue-500',
      bgColor: 'hover:bg-blue-700'
    },
    { 
      name: 'Instagram', 
      icon: FaInstagram, 
      url: 'https://www.instagram.com/mostafa_ebrahem_0?igsh=NG1ubW9rNXZpODdk', 
      color: 'hover:text-pink-400',
      bgColor: 'hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600'
    },
    { 
      name: 'WhatsApp', 
      icon: FaWhatsapp, 
      url: 'https://wa.me/201091320767', 
      color: 'hover:text-green-400',
      bgColor: 'hover:bg-green-600'
    },
    { 
      name: 'Email', 
      icon: FaEnvelope, 
      url: 'mailto:12m0stafa7@gmail.com', 
      color: 'hover:text-yellow-300',
      bgColor: 'hover:bg-yellow-600'
    },
  ];

  const quickLinks = [
    { name: 'الرئيسية', href: '/' },
    { name: 'مواقيت الصلاة', href: '/prayer-times' },
    { name: 'الأدعية', href: '/duas' },
    { name: 'القرآن الكريم', href: '/quran' },
    { name: 'الأحاديث', href: '/quran' },
    { name: 'تواصل معنا', href: '/contact' },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-950 border-t-2 border-yellow-400/30 overflow-hidden">
      {/* Animated Background Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.1, 0.5, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <BsStarFill className="text-yellow-300" size={4 + Math.random() * 8} />
          </motion.div>
        ))}
      </div>

      {/* Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-400/10 blur-3xl rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 blur-3xl rounded-full pointer-events-none"></div>

      {/* Islamic Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section with Icon */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          {/* Animated Mosque Icon */}
          <div className="flex justify-center mb-6">
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative"
            >
              <div className="absolute inset-0 bg-yellow-400/20 blur-xl rounded-full"></div>
              <FaMosque className="relative text-yellow-300 text-6xl md:text-7xl drop-shadow-2xl" />
              <FaMoon className="absolute -top-2 -right-2 text-yellow-400 text-2xl animate-pulse" />
            </motion.div>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 bg-clip-text text-transparent">
              صدقة جارية
            </span>
          </h2>

          <p className="text-purple-200 text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-6">
            نسأل الله أن يجعل هذا العمل في ميزان حسناتنا وحسنات من نحب، وأن ينفع به كل من قرأ أو استمع أو تذكّر.
          </p>

          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-3 my-8">
            <IoSparkles className="text-yellow-300 text-xl" />
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
            <FaStar className="text-yellow-300 text-lg" />
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
            <IoSparkles className="text-yellow-300 text-xl" />
          </div>

          {/* Dua */}
          <motion.p
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="text-yellow-200 text-lg md:text-xl font-semibold mb-8"
          >
            اللهم اغفر لنا ولوالدينا ولجميع المسلمين 🤲
          </motion.p>
        </motion.div>

        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1: About */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center md:text-right"
          >
            <h3 className="text-2xl font-bold text-yellow-300 mb-4 flex items-center justify-center md:justify-start gap-2">
              <FaQuran />
              رمضان كريم
            </h3>
            <p className="text-purple-200 leading-relaxed mb-4">
              موقع إسلامي متكامل يقدم آيات القرآن الكريم والأحاديث النبوية الشريفة مع مواقيت الصلاة والعديد من الخدمات الإسلامية.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full text-yellow-300 text-sm">
              <IoSparkles />
              <span>مشروع خيري مفتوح المصدر</span>
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-xl font-bold text-yellow-300 mb-6">روابط سريعة</h3>
            <div className="grid grid-cols-2 gap-3">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-purple-200 hover:text-yellow-300 transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-yellow-400/10 text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Column 3: Developer Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-xl font-bold text-yellow-300 mb-4">المطور</h3>
            <div className="bg-gradient-to-br from-purple-800/40 to-indigo-900/40 backdrop-blur-sm border border-yellow-400/20 rounded-2xl p-6 mb-4">
              <p className="text-lg font-bold text-yellow-200 mb-2">
                Mostafa Mohamed Ebrahem
              </p>
              <p className="text-purple-200 text-sm mb-3">
                React.js & Next.js Developer
              </p>
              <div className="flex items-center justify-center md:justify-start gap-2 text-yellow-300 text-sm">
                <FaHeart className="text-red-400 animate-pulse" />
                <span>صُنع بحب لوجه الله</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Social Media Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-xl font-bold text-yellow-300 text-center mb-6">
            تابعنا على
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className={`group relative w-14 h-14 flex items-center justify-center bg-gradient-to-br from-purple-800/60 to-indigo-900/60 backdrop-blur-sm border-2 border-yellow-400/30 rounded-xl transition-all duration-300 ${social.bgColor}`}
              >
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/0 to-yellow-400/0 group-hover:from-yellow-400/20 group-hover:to-yellow-400/10 rounded-xl transition-all duration-300"></div>
                
                <social.icon className={`relative z-10 text-2xl text-purple-200 transition-colors duration-300 ${social.color}`} />
                
                {/* Tooltip */}
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                  {social.name}
                </span>

                {/* Sparkle Effect */}
                <IoSparkles className="absolute -top-1 -right-1 text-yellow-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <div className="relative mb-8">
          <div className="h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-indigo-950 to-purple-900 px-6">
            <FaStar className="text-yellow-300 text-xl" />
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          {/* Quranic Verse */}
          <div className="mb-6">
            <p className="text-yellow-300 text-xl md:text-2xl font-bold mb-2">
               ﴾ وَاللَّهُ يَدْعُو إِلَىٰ دَارِ السَّلَامِ ﴿
            </p>
            <p className="text-purple-300 text-sm">سورة يونس - الآية 25</p>
          </div>

          {/* Copyright */}
          <div className="space-y-2">
            <p className="text-purple-300 text-sm flex justify-center items-center gap-2 flex-wrap">
              © {new Date().getFullYear()} رمضان كريم | جميع الحقوق محفوظة
            </p>
            
            <p className="text-purple-300 text-sm flex justify-center items-center gap-2 flex-wrap">
              Made with 
              <motion.span
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                }}
              >
                <FaHeart className="text-red-400" />
              </motion.span>
              by Mostafa Mohamed Ebrahem
            </p>

            <p className="text-purple-400 text-xs">
              Built with Next.js • React • Framer Motion • Tailwind CSS
            </p>
          </div>

          {/* Back to Top Button */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-purple-900 font-bold rounded-full shadow-lg shadow-yellow-500/50 hover:shadow-yellow-400/70 transition-all inline-flex items-center gap-2"
          >
            <span>العودة للأعلى</span>
            <motion.span
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <FaLevelUpAlt />

            </motion.span>
          </motion.button>
        </motion.div>

        {/* Decorative Bottom Stars */}
        <div className="flex justify-center gap-8 mt-8 opacity-50">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -10, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            >
              <FaStar className="text-yellow-300 text-lg" />
            </motion.div>
          ))}
        </div>
      </div>
    </footer>
  );
}