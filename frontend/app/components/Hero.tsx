"use client"

import { motion, useMotionValue, useTransform } from "framer-motion"
import Link from "next/link"
import { useEffect } from "react"

export default function Hero() {
  // Mouse tracking for parallax
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2)
      mouseY.set(e.clientY - window.innerHeight / 2)
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  // Transform mouse to background movement
  const bgX = useTransform(mouseX, [-500, 500], [-40, 40])
  const bgY = useTransform(mouseY, [-500, 500], [-40, 40])

  const headline = "Future-Ready Learning for Modern Enterprises".split(" ")

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center bg-[#f4efe9]">

      {/* Mouse Parallax Gradient */}
      <motion.div
        style={{ x: bgX, y: bgY }}
        className="absolute inset-0 bg-gradient-to-br from-emerald-200/60 via-[#f4efe9] to-emerald-200/60"
      />

      {/* Floating Orbs */}
      <motion.div
        className="absolute top-[-6rem] left-[-6rem] w-72 h-72 rounded-full bg-emerald-300/40 blur-3xl"
        animate={{ x: [0, 80, 0], y: [0, 60, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-8rem] right-[-6rem] w-96 h-96 rounded-full bg-emerald-300/40 blur-3xl"
        animate={{ x: [0, -70, 0], y: [0, -50, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl">

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm tracking-widest uppercase text-gray-600"
        >
          Corporate Training & Consulting
        </motion.p>

        {/* Headline */}
        <h1 className="mt-6 text-5xl md:text-7xl font-bold tracking-tight text-[#304635]">
          {headline.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="inline-block mr-3"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-6 max-w-2xl mx-auto text-lg text-gray-700"
        >
          Zèle Learning delivers expert-led corporate training across technology,
          engineering and emerging industries, empowering teams to excel in a rapidly evolving landscape.
        </motion.p>

        {/* Correct Button */}
        <CTAButton />

      </div>

      {/* Scroll indicator */}
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

function CTAButton() {
  return (
    <motion.div
      className="mt-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.0, duration: 0.6 }}
    >
      <Link
        href="/courses"
        className="
          px-8 py-3 rounded-full 
          bg-[#304635] 
          text-white font-medium text-sm shadow-lg
          inline-block
          transition-transform duration-200 ease-out
          hover:scale-105
        "
      >
        Explore Programs
      </Link>
    </motion.div>
  )
}

