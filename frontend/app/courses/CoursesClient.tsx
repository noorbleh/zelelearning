"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import Footer from "@/app/components/Footer"

export default function CoursesClient({ topics }: { topics: any[] }) {
  const [search, setSearch] = useState("")

  return (
    <main className="bg-[#f4efe9] min-h-screen text-gray-800 overflow-hidden">

      {/* HEADER */}
      <section className="pt-32 pb-16 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold text-[#304635]"
        >
          Our Training Programs
        </motion.h1>

        <p className="mt-4 text-gray-700">
          Structured enterprise learning across key technology domains.
        </p>

        {/* Search */}
        <div className="mt-8 max-w-xl mx-auto">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search courses..."
            className="
              w-full px-5 py-3 rounded-full
              border border-[#304635]/30
              bg-white/80
              focus:outline-none focus:ring-2 focus:ring-[#304635]/40
            "
          />
        </div>
      </section>

      {/* TOPICS */}
      <section className="space-y-24 pb-28">

        {topics.map((topic, i) => {
          // Filter courses by search
          const filtered = topic.courses.filter((c: any) =>
            c.title.toLowerCase().includes(search.toLowerCase())
          )

          if (filtered.length === 0) return null

          return (
            <div key={i}>

              {/* Topic Heading */}
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-[#304635] mb-8 px-6"
              >
                {topic.title}
              </motion.h2>

              {/* Mobile Swipe / Desktop Grid */}
              <div
                className="
                  flex gap-6 px-6 overflow-x-auto scroll-smooth
                  md:grid md:grid-cols-4 md:gap-8 md:overflow-visible
                "
              >
                {filtered.map((course: any, j: number) => (
                  <motion.div
                    key={j}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: j * 0.08 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={`/courses/${course.slug}`}
                      className="
                        min-w-[260px] md:min-w-0
                        bg-white/80 backdrop-blur
                        border border-black/5
                        rounded-2xl p-6 shadow-sm
                        flex flex-col justify-between
                        hover:-translate-y-2 hover:shadow-md
                        transition
                      "
                    >
                      <div>
                        <h3 className="text-lg font-semibold text-[#304635]">
                          {course.title}
                        </h3>

                        <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                          {course.shortDescription}
                        </p>
                      </div>

                      <p className="mt-4 text-xs font-medium text-[#304635]">
                        Duration: {course.duration}
                      </p>

                      <span className="mt-3 text-sm font-semibold text-[#304635]">
                        View →
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>

            </div>
          )
        })}

      </section>

      {/* CTA */}
      <section className="py-20 bg-white/60 text-center">
        <h2 className="text-3xl font-bold text-[#304635]">
          Need a Custom Training Plan?
        </h2>
        <p className="mt-3 text-gray-700">
          We design enterprise programs tailored to your organisation.
        </p>

        <Link
          href="/contact"
          className="mt-6 inline-block px-8 py-3 rounded-full bg-[#304635] text-white font-medium hover:scale-105 transition-transform"
        >
          Talk to Us
        </Link>
      </section>

      <Footer />
    </main>
  )
}