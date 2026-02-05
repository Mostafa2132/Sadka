"use client";
import { motion } from "framer-motion";
import { BsStarFill } from "react-icons/bs";
export default function StarsBackground() {
  return (
    <>
      {/* Background Stars */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <BsStarFill
            className="text-yellow-300"
            style={{ fontSize: `${8 + Math.random() * 8}px` }}
          />
        </motion.div>
      ))}
    </>
  );
}
