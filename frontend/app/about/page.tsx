"use client"

import { motion } from "framer-motion"
import Footer from "@/app/components/Footer"

// ─── Types ───────────────────────────────────────────────────────────────────

type DeemStep = {
  letter: string
  title: string
  description: string
}

// ─── Content ─────────────────────────────────────────────────────────────────

const deemSteps: DeemStep[] = [
  {
    letter: "D",
    title: "Discover",
    description: "Understand organisational objectives, challenges and readiness.",
  },
  {
    letter: "E",
    title: "Engage",
    description: "Consult with industry experts to design the right learning path.",
  },
  {
    letter: "E",
    title: "Enable",
    description: "Deliver hands-on training with real business workflows.",
  },
  {
    letter: "M",
    title: "Measure",
    description: "Track performance improvement and business outcomes.",
  },
]

const deliveryModes = [
  "On-site Corporate Training",
  "Live Online Instructor-Led",
  "Public Training Programs",
  "Private Enterprise Programs",
  "Immersive Bootcamps",
  "Global Delivery Capability",
]

// ─── Component ───────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-cream text-primary">

      {/* Hero */}
      <section className="relative flex min-h-[85vh] items-center overflow-hidden px-6 pt-28 md:pt-32">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/20 via-cream to-primary/20"
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          style={{ backgroundSize: "200% 200%" }}
        />

        <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">

          {/* Text */}
          <div className="text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="font-serif text-5xl font-bold text-primary md:text-7xl"
            >
              About Zèle Learning
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="mx-auto mt-6 max-w-md text-lg text-primary/70 md:mx-0"
            >
              Growing enterprise capability through expert-led learning experiences.
            </motion.p>
          </div>

          {/* Orb */}
          <div className="flex justify-center">
            <motion.div
              className="relative h-[260px] w-[260px] rounded-full border border-primary/40"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              aria-hidden
            >
              <motion.div
                className="absolute inset-6 rounded-full border border-primary/60"
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />

              <motion.div
                className="absolute inset-[35%] rounded-full bg-primary"
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />

              <motion.span
                className="absolute h-3 w-3 rounded-full bg-primary"
                style={{ top: "12%", left: "50%" }}
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              />

              <motion.span
                className="absolute h-3 w-3 rounded-full bg-primary/70"
                style={{ bottom: "18%", left: "20%" }}
                animate={{ rotate: -360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          </div>

        </div>
      </section>

      {/* Who We Are */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl font-bold text-primary"
          >
            Who We Are
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mx-auto mt-6 max-w-4xl text-lg leading-relaxed text-primary/70"
          >
            Zèle Learning is a corporate training and consulting organisation
            delivering high-impact professional programs across technology,
            engineering, architecture and emerging industries.
            We build capability that directly transforms business performance.
          </motion.p>
        </div>
      </section>

      {/* Why Zèle */}
      <section className="py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-8 md:grid-cols-2">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-serif text-4xl font-bold text-primary">
              Why Zèle Exists
            </h2>

            <p className="mt-6 leading-relaxed text-primary/70">
              Traditional corporate training delivers knowledge — but often
              fails to deliver implementation. Teams attend workshops yet
              struggle to apply learning inside real business environments.
            </p>

            <p className="mt-4 leading-relaxed text-primary/70">
              Zèle Learning closes this gap through direct engagement with
              industry experts, hands-on project-based training, and
              outcome-driven program design.
            </p>
          </motion.div>

          {/* Bridge diagram */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
            aria-hidden
          >
            <svg viewBox="0 0 500 260" className="w-full">
              <motion.path
                d="M40,220 C140,40 360,40 460,220"
                fill="none"
                stroke="#304635"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4 }}
              />
              <circle cx="40" cy="220" r="8" fill="#304635" />
              <circle cx="250" cy="110" r="8" fill="#304635" />
              <circle cx="460" cy="220" r="8" fill="#304635" />
            </svg>

            <p className="absolute left-0 top-[92%] text-sm text-primary/70">
              Traditional Training
            </p>
            <p className="absolute left-[38%] top-[46%] text-sm text-primary/70">
              Expert Engagement
            </p>
            <p className="absolute right-0 top-[92%] text-right text-sm text-primary/70">
              Business Impact
            </p>
          </motion.div>

        </div>
      </section>

      {/* DEEM Model */}
      <section className="bg-cream-light/60 py-28">
        <div className="mx-auto max-w-6xl px-8">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 text-center font-serif text-4xl font-bold text-primary"
          >
            The DEEM Model
          </motion.h2>

          <div className="space-y-10">
            {deemSteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex items-start gap-6 md:items-center"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary text-xl font-bold text-cream-light">
                  {step.letter}
                </div>

                <div>
                  <h3 className="font-serif text-xl font-semibold text-primary">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-primary/70">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* How We Deliver */}
      <section className="py-28">
        <div className="mx-auto max-w-6xl px-8 text-center">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl font-bold text-primary"
          >
            How We Deliver Training
          </motion.h2>

          <p className="mx-auto mt-6 max-w-3xl text-primary/70">
            We deliver flexible enterprise training across locations,
            formats and engagement styles — ensuring seamless adoption at scale.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {deliveryModes.map((mode) => (
              <motion.div
                key={mode}
                whileHover={{ scale: 1.06 }}
                className="rounded-full border border-primary/40 bg-cream px-6 py-3 font-medium text-primary"
              >
                {mode}
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}