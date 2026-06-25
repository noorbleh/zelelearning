"use client"

import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

// ─── Types ───────────────────────────────────────────────────────────────────

type Step = {
  title: string
  description: string
}

type Reason = {
  title: string
  description: string
}

// ─── Content ─────────────────────────────────────────────────────────────────

const steps: Step[] = [
  {
    title: "Choose your destination",
    description: "Beach retreats, mountain escapes, or global cities.",
  },
  {
    title: "We design your journey",
    description: "Custom programs aligned with your goals.",
  },
  {
    title: "We deliver immersive learning",
    description: "Seamless blend of learning and experience.",
  },
]

const reasons: Reason[] = [
  {
    title: "Engagement",
    description: "Immersive environments increase focus and participation.",
  },
  {
    title: "Collaboration",
    description: "Teams connect more deeply outside traditional settings.",
  },
  {
    title: "Creativity",
    description: "New environments unlock fresh thinking.",
  },
]

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 1 },
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function VacationLearningClient() {
  const router = useRouter()

  return (
    <main className="overflow-x-hidden bg-cream-light text-primary">

      {/* Hero */}
      <section className="relative flex h-screen items-center justify-center overflow-hidden text-center">
        <img
          src="/vacation.jpg"
          alt="Vacation learning program destination"
          className="absolute inset-0 z-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 z-10 bg-black/50" />

        <motion.div
          {...fadeUp}
          transition={{ duration: 1 }}
          className="relative z-20 flex w-full justify-center px-6"
        >
          <div className="max-w-2xl rounded-3xl border border-white/20 bg-white/10 px-10 py-12 shadow-[0_20px_80px_rgba(0,0,0,0.4)] backdrop-blur-xl">
            <h1 className="mb-4 font-serif text-5xl text-white md:text-6xl">
              Vacation Learning
            </h1>
            <p className="text-lg text-white/80">
              Learn. Travel. Transform.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-4xl px-6 py-32 text-center">
        <motion.p
          {...fadeUp}
          className="text-2xl leading-relaxed text-primary/70"
        >
          Corporate training should not feel like a task.
          It should feel like an experience worth remembering.
        </motion.p>
      </section>

      {/* Split — image + text */}
      <section className="px-6 py-32">
        <div className="mx-auto grid max-w-6xl items-center gap-20 md:grid-cols-2">
          <motion.img
            src="https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg"
            alt="Learning in an inspiring destination"
            loading="lazy"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
          />

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="mb-6 font-serif text-4xl text-primary">
              The world becomes your classroom
            </h2>
            <p className="text-lg leading-relaxed text-primary/60">
              Move beyond traditional spaces into environments that inspire
              creativity, strengthen collaboration, and drive transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Full bleed image */}
      <section className="relative h-[90vh] overflow-hidden">
        <motion.img
          src="https://images.pexels.com/photos/460621/pexels-photo-460621.jpeg"
          alt="Immersive learning experience"
          loading="lazy"
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/20" />

        <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
          <h2 className="max-w-2xl font-serif text-5xl leading-tight text-white">
            Not training.
            <br />
            An experience.
          </h2>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-3xl space-y-16 px-6 py-32 text-center">
        {steps.map((step, i) => (
          <motion.div key={i} {...fadeUp}>
            <h3 className="mb-2 font-serif text-2xl text-primary">{step.title}</h3>
            <p className="text-primary/50">{step.description}</p>
          </motion.div>
        ))}
      </section>

      {/* Why it works */}
      <section className="bg-cream px-6 py-32">
        <h2 className="mb-20 text-center font-serif text-4xl text-primary">
          Why It Works
        </h2>

        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="rounded-2xl border border-primary/10 bg-cream-light p-8 shadow-sm transition hover:shadow-lg"
            >
              <h3 className="mb-3 text-xs uppercase tracking-widest text-primary">
                {reason.title}
              </h3>
              <p className="text-primary/60">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative flex h-[80vh] items-center justify-center">
        <motion.img
          src="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg"
          alt="Start your vacation learning journey"
          loading="lazy"
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/30" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white"
        >
          <h2 className="mb-4 font-serif text-4xl">
            Design your experience
          </h2>
          <p className="mb-6 text-white/80">
            Tell us where you want to go, we&rsquo;ll create the journey.
          </p>
          <button
            onClick={() => router.push("/contact")}
            className="rounded-full bg-cream-light px-8 py-3 text-primary transition hover:scale-105"
          >
            Get Started
          </button>
        </motion.div>
      </section>

    </main>
  )
}