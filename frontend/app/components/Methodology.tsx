"use client"

import { motion } from "framer-motion"

const steps = [
  "Assess team skill gaps",
  "Design custom curriculum",
  "Deliver expert-led sessions",
  "Hands-on real projects",
  "Measure business impact",
]

export default function Methodology() {
  return (
    <section className="relative py-28 bg-[#f4efe9] overflow-hidden">

      <div className="max-w-6xl mx-auto px-8 text-center">

        <h2 className="text-4xl md:text-5xl font-bold text-[#304635]">
          How We Work
        </h2>

        <div className="mt-16 space-y-12">
          {steps.map((step, i) => {
            // creates left-right wave offset
            const waveOffset = i % 2 === 0 ? "-translate-x-6" : "translate-x-6"

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true }}
                className={`flex items-center gap-6 justify-center ${waveOffset}`}
              >
                {/* Number circle */}
                <div className="w-9 h-9 rounded-full bg-[#304635] text-white flex items-center justify-center font-medium shadow-md">
                  {i + 1}
                </div>

                {/* Text */}
                <p className="text-lg text-gray-700 max-w-md text-left">
                  {step}
                </p>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
