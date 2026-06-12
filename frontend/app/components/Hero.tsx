"use client"

import { motion } from "framer-motion"

export default function Hero() {
  const headline = "Future-Ready Learning for Modern Enterprises".split(" ")

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center bg-[#f4efe9]">

      {/* AURORA + GLASS BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* Aurora 1 */}
        <motion.div
          className="absolute -top-40 -left-40 w-[800px] h-[800px] rounded-full blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, rgba(48,70,53,0.18) 0%, transparent 70%)",
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Aurora 2 */}
        <motion.div
          className="absolute top-[10%] right-[-10%] w-[700px] h-[700px] rounded-full blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, rgba(198,169,111,0.16) 0%, transparent 70%)",
          }}
          animate={{
            x: [0, -120, 0],
            y: [0, -60, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 34,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Aurora 3 */}
        <motion.div
          className="absolute bottom-[-20%] left-[20%] w-[600px] h-[600px] rounded-full blur-[110px]"
          style={{
            background:
              "radial-gradient(circle, rgba(108,138,113,0.14) 0%, transparent 70%)",
          }}
          animate={{
            x: [0, 60, 0],
            y: [0, -80, 0],
            scale: [1, 1.06, 1],
          }}
          transition={{
            duration: 32,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Glass Panel 1 */}
        <motion.div
          className="
            absolute
            top-[12%]
            right-[8%]
            w-[260px]
            h-[380px]
            rounded-[40px]
            border
            border-white/20
            bg-white/10
            backdrop-blur-xl
          "
          animate={{
            y: [0, -20, 0],
            rotate: [-2, 1, -2],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Glass Panel 2 */}
        <motion.div
          className="
            absolute
            bottom-[10%]
            left-[6%]
            w-[220px]
            h-[320px]
            rounded-[32px]
            border
            border-white/15
            bg-white/5
            backdrop-blur-lg
          "
          animate={{
            y: [0, 15, 0],
            rotate: [2, -1, 2],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 text-center px-6 max-w-5xl">

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
            text-sm
            tracking-[0.35em]
            uppercase
            text-[#304635]/70
          "
        >
          Corporate Training & Consulting
        </motion.p>

        <h1
          className="
            mt-6
            text-5xl
            md:text-7xl
            lg:text-8xl
            font-semibold
            tracking-tight
            text-[#304635]
            leading-[0.95]
          "
        >
          {headline.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: i * 0.05,
                duration: 0.8,
              }}
              className="inline-block mr-4"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.5,
            duration: 1,
          }}
          className="
            mt-8
            max-w-2xl
            mx-auto
            text-lg
            text-gray-700
            leading-relaxed
          "
        >
          Zèle Learning delivers expert-led corporate training across
          technology, engineering, architecture, and emerging industries,
          helping organisations build future-ready capabilities.
        </motion.p>

      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="
          absolute
          bottom-10
          text-[#304635]/60
          text-xs
          tracking-[0.3em]
          uppercase
        "
        animate={{
          y: [0, 8, 0],
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
        }}
      >
        Scroll
      </motion.div>

    </section>
  )
}