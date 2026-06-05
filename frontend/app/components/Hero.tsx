"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function Hero() {
  const headline = "Future-Ready Learning for Modern Enterprises".split(" ")

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center bg-[#f4efe9]">

      {/* ✨ FLOATING STARS */}

<div className="absolute inset-0 overflow-hidden pointer-events-none">

  {/* SOFT GLOW */}

  <motion.div
    className="absolute -top-40 right-0 w-[500px] h-[500px] rounded-full"
    style={{
      background:
        "radial-gradient(circle, rgba(198,169,111,0.12) 0%, transparent 70%)",
    }}
    animate={{
      scale: [1, 1.08, 1],
    }}
    transition={{
      duration: 12,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />

  {/* STARS */}

  {[
    { left: "10%", top: "20%", size: "w-2 h-2" },
    { left: "20%", top: "65%", size: "w-1.5 h-1.5" },
    { left: "35%", top: "15%", size: "w-2 h-2" },
    { left: "48%", top: "75%", size: "w-1.5 h-1.5" },
    { left: "60%", top: "12%", size: "w-2 h-2" },
    { left: "72%", top: "25%", size: "w-1.5 h-1.5" },
    { left: "85%", top: "18%", size: "w-2 h-2" },
    { left: "90%", top: "60%", size: "w-1.5 h-1.5" },
    { left: "75%", top: "78%", size: "w-2 h-2" },
    { left: "15%", top: "40%", size: "w-1.5 h-1.5" },
    { left: "92%", top: "40%", size: "w-2 h-2" },
    { left: "5%", top: "80%", size: "w-1.5 h-1.5" },
  ].map((star, i) => (
    <motion.div
      key={i}
      className={`absolute ${star.size} rounded-full`}
      style={{
        left: star.left,
        top: star.top,
        backgroundColor: "#304635",
      }}
      animate={{
        opacity: [0.2, 1, 0.2],
        scale: [1, 1.8, 1],
      }}
      transition={{
        duration: 2 + (i % 4),
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div className="absolute inset-0 rounded-full bg-[#6c8a71]/50 blur-sm scale-[3]" />
    </motion.div>
  ))}

</div>

      {/* CONTENT */}
      <div className="relative z-10 text-center px-6 max-w-5xl">

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm tracking-widest uppercase text-gray-600"
        >
          Corporate Training & Consulting
        </motion.p>

        <h1 className="mt-6 text-5xl md:text-7xl font-bold tracking-tight text-[#304635]">
          {headline.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              className="inline-block mr-3"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6 max-w-2xl mx-auto text-lg text-gray-700"
        >
          Zèle Learning delivers expert-led corporate training across technology,
          engineering and emerging industries.
        </motion.p>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Link
            href="/courses"
            className="px-8 py-3 rounded-full bg-[#304635] text-white font-medium text-sm shadow-lg hover:scale-105 transition"
          >
            Explore Programs
          </Link>
        </motion.div>

      </div>

      {/* SCROLL */}
      <motion.div
        className="absolute bottom-10 text-gray-500 text-xs tracking-widest uppercase"
        animate={{ y: [0, 8, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2.2, repeat: Infinity }}
      >
        Scroll
      </motion.div>

    </section>
  )
}