"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import Footer from "@/app/components/Footer"

// ─── Types ───────────────────────────────────────────────────────────────────

type Course = {
  title: string
  slug: string
  level?: string
  shortDescription: string
  duration: string
}

type Topic = {
  title: string
  courses: Course[]
}

// ─── Constants ───────────────────────────────────────────────────────────────

const LEVELS = ["All", "Beginner", "Intermediate", "Advanced"]

// ─── Component ───────────────────────────────────────────────────────────────

export default function CoursesClient({ topics }: { topics: Topic[] }) {
  const [search, setSearch] = useState("")
  const [selectedLevel, setSelectedLevel] = useState("All")

  const filterCourses = (courses: Course[]) =>
    courses.filter((course) => {
      const matchesSearch = course.title
        .toLowerCase()
        .includes(search.toLowerCase())

      const matchesLevel =
        selectedLevel === "All" || course.level === selectedLevel

      return matchesSearch && matchesLevel
    })

  return (
    <main className="min-h-screen overflow-hidden bg-cream text-primary">

      {/* Header */}
      <section className="px-6 pb-16 pt-32 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-serif text-5xl font-bold text-primary md:text-6xl"
        >
          Our Training Programs
        </motion.h1>

        <p className="mt-4 text-primary/70">
          Structured enterprise learning across key technology domains.
        </p>

        {/* Search */}
        <div className="mx-auto mt-8 max-w-xl">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search courses..."
            className="w-full rounded-full border border-primary/30 bg-white/80 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-primary/40"
          />
        </div>

        {/* Level filters */}
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {LEVELS.map((level) => {
            const isActive = selectedLevel === level
            return (
              <button
                key={level}
                onClick={() => setSelectedLevel(level)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-primary text-cream-light"
                    : "border border-primary/20 bg-white/80 text-primary hover:bg-white"
                }`}
              >
                {level}
              </button>
            )
          })}
        </div>
      </section>

      {/* Course topics */}
      <section className="space-y-24 pb-28">
        {topics.map((topic, i) => {
          const filtered = filterCourses(topic.courses)

          if (filtered.length === 0) return null

          return (
            <div key={i}>
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-8 px-6 font-serif text-3xl font-bold text-primary"
              >
                {topic.title}
              </motion.h2>

              <div className="flex gap-6 overflow-x-auto scroll-smooth px-6 md:grid md:grid-cols-4 md:gap-8 md:overflow-visible">
                {filtered.map((course, j) => (
                  <motion.div
                    key={j}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: j * 0.08 }}
                  >
                    <Link
                      href={`/courses/${course.slug}`}
                      className="flex min-w-[260px] flex-col justify-between rounded-2xl border border-primary/5 bg-cream-light/80 p-6 shadow-sm backdrop-blur transition hover:-translate-y-2 hover:shadow-md md:min-w-0"
                    >
                      <div>
                        {course.level && (
                          <span className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                            {course.level}
                          </span>
                        )}

                        <h3 className="font-serif text-lg font-semibold text-primary">
                          {course.title}
                        </h3>

                        <p className="mt-2 line-clamp-2 text-sm text-primary/60">
                          {course.shortDescription}
                        </p>
                      </div>

                      <div>
                        <p className="mt-4 text-xs font-medium text-primary">
                          Duration: {course.duration}
                        </p>

                        <span className="mt-3 inline-block text-sm font-semibold text-primary">
                          View →
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          )
        })}
      </section>

      {/* CTA */}
      <section className="bg-cream-light/60 py-20 text-center">
        <h2 className="font-serif text-3xl font-bold text-primary">
          Need a Custom Training Plan?
        </h2>

        <p className="mt-3 text-primary/70">
          We design enterprise programs tailored to your organisation.
        </p>

        <Link
          href="/contact"
          className="mt-6 inline-block rounded-full bg-primary px-8 py-3 font-medium text-cream-light transition-transform hover:scale-105"
        >
          Talk to Us
        </Link>
      </section>

      <Footer />
    </main>
  )
}