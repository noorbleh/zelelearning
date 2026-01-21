"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Footer from "@/app/components/Footer"

const green = "#304635"

export default function AboutPage() {
  return (
    <main className="bg-[#f4efe9] text-gray-800 overflow-hidden">

      {/* ===== HERO SECTION ===== */}
<section className="relative min-h-[85vh] flex items-center px-6 pt-28 md:pt-32 bg-[#f4efe9] overflow-hidden">

  {/* Soft gradient background */}
  <motion.div
    className="absolute inset-0 bg-gradient-to-br from-[#304635]/20 via-[#f4efe9] to-[#304635]/20"
    animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
    transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
    style={{ backgroundSize: "200% 200%" }}
  />

  <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

    {/* LEFT TEXT */}
    <div className="text-center md:text-left">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="text-5xl md:text-7xl font-bold text-[#304635]"
      >
        About Zèle Learning
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-6 text-lg text-gray-700 max-w-md mx-auto md:mx-0"
      >
        Growing enterprise capability through expert-led learning experiences.
      </motion.p>
    </div>

    {/* RIGHT ORB ANIMATION */}
    <div className="flex justify-center">

      <motion.div
        className="w-[260px] h-[260px] rounded-full border border-[#304635]/40 relative"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {/* Inner ring */}
        <motion.div
          className="absolute inset-6 rounded-full border border-[#304635]/60"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Center orb */}
        <motion.div
          className="absolute inset-[35%] rounded-full bg-[#304635]"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Orbiting dots */}
        <motion.span
          className="absolute w-3 h-3 rounded-full bg-[#304635]"
          style={{ top: "12%", left: "50%" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />
        <motion.span
          className="absolute w-3 h-3 rounded-full bg-[#304635]/70"
          style={{ bottom: "18%", left: "20%" }}
          animate={{ rotate: -360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

    </div>
  </div>
</section>

      {/* ===== WHO WE ARE ===== */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-[#304635]"
          >
            Who We Are
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-6 text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto"
          >
            Zèle Learning is a corporate training and consulting organisation
            delivering high-impact professional programs across technology,
            engineering, architecture and emerging industries.
            We build capability that directly transforms business performance.
          </motion.p>
        </div>
      </section>

      {/* ===== WHY ZÈLE ===== */}
      <section className="py-24">

        <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-14 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-[#304635]">
              Why Zèle Exists
            </h2>

            <p className="mt-6 text-gray-700 leading-relaxed">
              Traditional corporate training delivers knowledge —
              but often fails to deliver implementation.
              Teams attend workshops yet struggle to apply learning
              inside real business environments.
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed">
              Zèle Learning closes this gap through direct engagement
              with industry experts, hands-on project-based training,
              and outcome-driven program design.
            </p>
          </motion.div>

          {/* Curved bridge diagram */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <svg viewBox="0 0 500 260" className="w-full">
              <motion.path
                d="M40,220 C140,40 360,40 460,220"
                fill="none"
                stroke={green}
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.4 }}
                viewport={{ once: true }}
              />
              <circle cx="40" cy="220" r="8" fill={green} />
              <circle cx="250" cy="110" r="8" fill={green} />
              <circle cx="460" cy="220" r="8" fill={green} />
            </svg>

            <div className="absolute left-0 top-[92%] text-sm text-gray-700">
              Traditional Training
            </div>
            <div className="absolute left-[38%] top-[46%] text-sm text-gray-700">
              Expert Engagement
            </div>
            <div className="absolute right-0 top-[92%] text-sm text-gray-700 text-right">
              Business Impact
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== DEEM MODEL ===== */}
      <section className="py-28 bg-white/60">

        <div className="max-w-6xl mx-auto px-8">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-[#304635] text-center mb-14"
          >
            The DEEM Model
          </motion.h2>

          <div className="space-y-10">
            {[
              {
                letter: "D",
                title: "Discover",
                desc: "Understand organisational objectives, challenges and readiness.",
              },
              {
                letter: "E",
                title: "Engage",
                desc: "Consult with industry experts to design the right learning path.",
              },
              {
                letter: "E",
                title: "Enable",
                desc: "Deliver hands-on training with real business workflows.",
              },
              {
                letter: "M",
                title: "Measure",
                desc: "Track performance improvement and business outcomes.",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-start md:items-center gap-6"
              >
                <div className="w-14 h-14 rounded-full bg-[#304635] text-white flex items-center justify-center text-xl font-bold shrink-0">
                  {step.letter}
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#304635]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-gray-700">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TRAINING DELIVERY ===== */}
      <section className="py-28">
        <div className="max-w-6xl mx-auto px-8 text-center">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-[#304635]"
          >
            How We Deliver Training
          </motion.h2>

          <p className="mt-6 text-gray-700 max-w-3xl mx-auto">
            We deliver flexible enterprise training across locations,
            formats and engagement styles — ensuring seamless adoption at scale.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              "On-site Corporate Training",
              "Live Online Instructor-Led",
              "Public Training Programs",
              "Private Enterprise Programs",
              "Immersive Bootcamps",
              "Global Delivery Capability",
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.06 }}
                className="px-6 py-3 bg-[#f4efe9] border border-[#304635]/40 rounded-full text-[#304635] font-medium"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
