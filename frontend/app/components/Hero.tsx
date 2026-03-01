"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function Hero() {
  const headline = "Future-Ready Learning for Modern Enterprises".split(" ")

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center bg-[#f4efe9]">

      {/* 🌊 FLOW LAYER 1 (VISIBLE) */}
      <motion.div
        className="absolute w-[140%] h-[140%]"
        initial={{ x: "-30%", y: "-30%" }}
        animate={{
          x: ["-30%", "20%", "-30%"],
          y: ["-30%", "20%", "-30%"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-full h-full bg-gradient-to-br from-[#c6a96f]/40 via-transparent to-[#304635]/40 blur-[60px]" />
      </motion.div>

      {/* 🌊 FLOW LAYER 2 */}
      <motion.div
        className="absolute w-[120%] h-[120%]"
        initial={{ x: "20%", y: "20%" }}
        animate={{
          x: ["20%", "-20%", "20%"],
          y: ["20%", "-20%", "20%"],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-full h-full bg-gradient-to-tr from-[#304635]/30 via-transparent to-[#c6a96f]/30 blur-[50px]" />
      </motion.div>

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