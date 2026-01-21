"use client"

import { motion, useMotionValue, useTransform } from "framer-motion"
import Link from "next/link"

const courses = [
  { title: "AI & Machine Learning", desc: "Corporate AI upskilling programs" },
  { title: "Cloud Architecture", desc: "Modern cloud infrastructure training" },
  { title: "Data Engineering", desc: "Enterprise data pipeline mastery" },
  { title: "Cybersecurity", desc: "Security-first organisational training" },
  { title: "DevOps", desc: "Automation & deployment excellence" },
  { title: "Product Management", desc: "Strategic product thinking for teams" },
]

function InteractiveCard({ course }: any) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useTransform(y, [-40, 40], [6, -6])
  const rotateY = useTransform(x, [-40, 40], [-6, 6])

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    x.set(e.clientX - rect.left - rect.width / 2)
    y.set(e.clientY - rect.top - rect.height / 2)
  }

  function handleLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY }}
      whileHover={{ y: -6 }}
      className="
        relative p-7 rounded-xl 
        bg-white/80 backdrop-blur 
        border border-black/5 
        shadow-sm 
        transition
      "
    >
      {/* soft interactive glow */}
      <motion.div
        style={{ x, y }}
        className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br from-emerald-200/40 via-transparent to-lime-200/40 opacity-0 group-hover:opacity-100 transition"
      />

      <h3 className="text-lg font-semibold text-[#304635]">
        {course.title}
      </h3>

      <p className="mt-3 text-gray-600 text-sm leading-relaxed">
        {course.desc}
      </p>

      <Link
        href="/courses"
        className="mt-4 inline-block text-sm font-medium text-[#304635]"
      >
        View Program →
      </Link>
    </motion.div>
  )
}

export default function CoursesPreview() {
  return (
    <section className="relative py-28 bg-[#f4efe9] overflow-hidden">

      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-200/25 via-[#f4efe9] to-emerald-200/25 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f3d2e]">
            Our Programs
          </h2>
          <p className="mt-4 text-gray-600">
            Designed for modern enterprise teams.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {courses.map((course, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              viewport={{ once: true }}
            >
              <InteractiveCard course={course} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
