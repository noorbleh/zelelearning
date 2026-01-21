"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function About() {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  // Main content parallax
  const yContent = useTransform(scrollYProgress, [0, 1], [80, -80])
  const opacityContent = useTransform(scrollYProgress, [0, 0.2], [0, 1])

  // Floating accents parallax
  const yAccent1 = useTransform(scrollYProgress, [0, 1], [0, -120])
  const yAccent2 = useTransform(scrollYProgress, [0, 1], [0, 120])

  return (
    <section
      ref={ref}
      className="relative py-32 overflow-hidden bg-[#f4efe9] -mt-20"
    >
      {/* Inverted background gradient for seamless blend */}
      {/* <div className="absolute inset-0 bg-gradient-to-bl from-emerald-200/35 via-[#f4efe9] to-emerald-200/35 blur-3xl" /> */}

      {/* Parallax floating accents */}
      {/* <motion.div
        style={{ y: yAccent1 }}
        className="absolute top-20 right-16 w-40 h-40 rounded-full bg-emerald-600/40 blur-3xl"
      /> */}

      {/* <motion.div
        style={{ y: yAccent2 }}
        className="absolute bottom-24 left-20 w-56 h-56 rounded-full bg-emerald-600/40 blur-3xl"
      /> */}

      {/* Content */}
      <motion.div
        style={{ y: yContent, opacity: opacityContent }}
        className="relative max-w-6xl mx-auto px-8 text-center"
      >
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-[#304635]"
        >
          About Zèle Learning
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-6 max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed"
        >
          Zèle Learning is a modern corporate training and consulting organisation
          delivering high-quality professional programs across technology,
          architecture, engineering, and emerging industries. Our focus is on
          expert-led engagement that equips professionals with skills directly
          applicable to real business challenges.
        </motion.p>

        {/* Feature Cards */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.25 } },
          }}
          className="mt-14 grid md:grid-cols-3 gap-8"
        >
          {[
            ["Expert-Led Training", "Delivered by real industry professionals"],
            ["Corporate-Focused", "Programs designed for direct business impact"],
            ["Future-Ready Skills", "Aligned with emerging technologies"],
          ].map(([title, desc], i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="p-6 rounded-xl bg-white/70 backdrop-blur border border-black/5 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-[#304635]">
                {title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">
                {desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
