"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function VacationLearning() {
  return (
    <section className="relative py-24 px-6 bg-[#f6f4ef] text-center overflow-hidden">

      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-72 h-72 bg-green-100 opacity-20 rounded-full blur-3xl absolute top-10 left-10 animate-pulse"></div>
      </div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-semibold text-[#2f4f3f] mb-4 relative z-10"
      >
        Vacation Learning Experiences
      </motion.h2>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className="text-lg text-gray-700 mb-6 relative z-10"
      >
        Learn. Travel. Transform.
      </motion.p>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-gray-600 leading-relaxed mb-10 relative z-10"
      >
        At Zèle Learning, we offer destination-based corporate training experiences
        where teams learn in inspiring global environments. From beach retreats to
        mountain escapes, we combine professional development with immersive,
        real-world experiences.
      </motion.p>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10 relative z-10">
        {[
          "Global destinations",
          "Customized programs",
          "Experiential learning",
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="bg-white rounded-2xl shadow-sm p-5 text-sm text-gray-700 transition duration-300 hover:shadow-lg cursor-pointer"
          >
            ✔ {item}
          </motion.div>
        ))}
      </div>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
        className="relative z-10"
      >
        <Link
          href="/vacation-learning"
          className="inline-block px-7 py-3 bg-[#2f4f3f] text-white rounded-full transition duration-300 hover:scale-105 hover:shadow-md active:scale-95"
        >
          View More
        </Link>
      </motion.div>
    </section>
  )
}