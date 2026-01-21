"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function CTA() {
  return (
    <section className="relative py-28 bg-[#f4efe9] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-200/40 via-[#f4efe9] to-lime-200/40 blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-8 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-[#304635]"
        >
          Ready to Upskill Your Team?
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-4 text-gray-700"
        >
          Let’s design a training program tailored to your organisation.
        </motion.p>

        {/* Button */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Link
            href="/contact"
            className="
              px-8 py-3 rounded-full 
              bg-[#304635] 
              text-white font-medium shadow-lg
              inline-block
              transition-transform duration-200 ease-out
              hover:scale-105
            "
          >
            Start a Conversation
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
