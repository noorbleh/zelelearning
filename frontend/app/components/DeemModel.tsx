"use client"

import { motion } from "framer-motion"

const steps = [
  {
    letter: "D",
    title: "Discover",
    desc: "Identify business objectives and team skill gaps through strategic assessment."
  },
  {
    letter: "E",
    title: "Engage",
    desc: "Direct engagement with industry experts ensures high-value knowledge transfer."
  },
  {
    letter: "E",
    title: "Enable",
    desc: "Hands-on projects and guided practice convert learning into capability."
  },
  {
    letter: "M",
    title: "Measure",
    desc: "Track progress and business impact to deliver measurable outcomes."
  }
]

export default function DeemModel() {
  return (
    <section className="relative py-32 bg-[#f4efe9] overflow-hidden">

      {/* Soft animated background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#304635]/10 via-[#f4efe9] to-[#304635]/10 blur-3xl"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        style={{ backgroundSize: "200% 200%" }}
      />

      <div className="relative max-w-6xl mx-auto px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-sm tracking-widest uppercase text-gray-600">
            Our Framework
          </p>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#304635]">
            The DEEM Model
          </h2>
          <p className="mt-4 text-gray-700 max-w-xl mx-auto">
            Structured, immersive, outcome-driven corporate learning.
          </p>
        </motion.div>

        {/* Diagram Area */}
        <div className="relative">

          {/* === Wave Connector === */}
          <svg
            className="absolute left-1/2 -translate-x-1/2 top-10 w-full h-36 hidden md:block"
            viewBox="0 0 1200 200"
            fill="none"
          >
            <motion.path
              d="M0,120 C250,20 450,220 650,120 C850,20 1050,220 1200,120"
              stroke="#304635"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1.4 }}
              viewport={{ once: true }}
            />
          </svg>

          {/* === Cards Grid === */}
          <div className="relative grid md:grid-cols-4 gap-12 text-center">

            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="
                  relative
                  bg-white/90 backdrop-blur
                  border border-black/5
                  rounded-2xl
                  p-8 shadow-sm
                "
              >

                {/* === Tiny Illustrated Person === */}
                <motion.div
                  className="absolute -top-6 left-1/2 -translate-x-1/2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 120, delay: i * 0.2 }}
                  viewport={{ once: true }}
                >
                  <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
                    <circle cx="21" cy="10" r="4" fill="#304635" />
                    <path d="M21 14 V30" stroke="#304635" strokeWidth="3" strokeLinecap="round"/>
                    <path d="M21 20 L13 26" stroke="#304635" strokeWidth="3" strokeLinecap="round"/>
                    <path d="M21 20 L29 26" stroke="#304635" strokeWidth="3" strokeLinecap="round"/>
                  </svg>
                </motion.div>

                {/* Letter Circle */}
                <div className="w-14 h-14 mx-auto rounded-full bg-[#304635] text-white flex items-center justify-center text-xl font-bold mt-6">
                  {step.letter}
                </div>

                <h3 className="mt-5 font-semibold text-[#304635] text-lg">
                  {step.title}
                </h3>

                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {step.desc}
                </p>

              </motion.div>
            ))}

          </div>
        </div>
      </div>
    </section>
  )
}
