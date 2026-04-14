"use client"
export const metadata = {
  title: "Corporate Training Programs | Zele Learning",
  description: "Corporate training through travel-based learning experiences for teams and organizations.",
}


import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

export default function VacationLearningPage() {
  const router = useRouter()

  return (
    <main className="bg-[#f5f5f2] text-[#1d1d1f] overflow-x-hidden">

      {/* ================= HERO ================= */}
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">

        {/* Background Image */}
        <img
          src="/vacation.jpg"
          alt="corporate training vacation learning program"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-20 px-6 w-full flex justify-center"
        >
          <div className="
            bg-white/10 
            backdrop-blur-xl 
            border border-white/20 
            rounded-3xl 
            px-10 py-12 
            shadow-[0_20px_80px_rgba(0,0,0,0.4)]
            max-w-2xl
          ">
            <h1 className="text-5xl md:text-6xl font-serif text-white mb-4">
              Vacation Learning
            </h1>

            <p className="text-white/80 text-lg">
              Learn. Travel. Transform.
            </p>
          </div>
        </motion.div>

      </section>

      {/* ================= STORY ================= */}
      <section className="py-32 px-6 text-center max-w-4xl mx-auto">

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-2xl leading-relaxed text-gray-700"
        >
          Corporate training should not feel like a task.  
          It should feel like an experience worth remembering.
        </motion.p>

      </section>

      {/* ================= SPLIT ================= */}
      <section className="py-32 px-6">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">

          <motion.img
            src="https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg"
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
            <h2 className="text-4xl font-serif mb-6">
              The world becomes your classroom
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              Move beyond traditional spaces into environments that inspire
              creativity, strengthen collaboration, and drive transformation.
            </p>
          </motion.div>

        </div>

      </section>

      {/* ================= FULL BLEED ================= */}
      <section className="relative h-[90vh] overflow-hidden">

        <motion.img
          src="https://images.pexels.com/photos/460621/pexels-photo-460621.jpeg"
          loading="lazy"
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/20" />

        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <h2 className="text-5xl font-serif text-white max-w-2xl leading-tight">
            Not training.  
            <br />An experience.
          </h2>
        </div>

      </section>

      {/* ================= FLOW ================= */}
      <section className="py-32 px-6 text-center max-w-3xl mx-auto space-y-16">

        {[
          {
            title: "Choose your destination",
            desc: "Beach retreats, mountain escapes, or global cities.",
          },
          {
            title: "We design your journey",
            desc: "Custom programs aligned with your goals.",
          },
          {
            title: "We deliver immersive learning",
            desc: "Seamless blend of learning and experience.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-2xl font-serif mb-2">{item.title}</h3>
            <p className="text-gray-500">{item.desc}</p>
          </motion.div>
        ))}

      </section>

      {/* ================= CARDS ================= */}
      <section className="py-32 px-6 bg-[#f8f7f4]">

        <h2 className="text-center text-4xl font-serif mb-20">
          Why It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

          {[
            {
              title: "Engagement",
              desc: "Immersive environments increase focus and participation.",
            },
            {
              title: "Collaboration",
              desc: "Teams connect more deeply outside traditional settings.",
            },
            {
              title: "Creativity",
              desc: "New environments unlock fresh thinking.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white border border-[#eae7e2] p-8 rounded-2xl shadow-sm hover:shadow-lg transition"
            >
              <h3 className="text-xs tracking-widest text-[#2f4f3f] mb-3 uppercase">
                {item.title}
              </h3>

              <p className="text-gray-600">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>

      </section>

      {/* ================= CTA ================= */}
      <section className="relative h-[80vh] flex items-center justify-center">

        <motion.img
          src="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg"
          loading="lazy"
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/30" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="relative z-10 text-center text-white"
        >
          <h2 className="text-4xl font-serif mb-4">
            Design your experience
          </h2>

          <p className="mb-6 text-white/80">
            Tell us where you want to go, we’ll create the journey.
          </p>

          <button
            onClick={() => router.push("/contact")}
            className="px-8 py-3 bg-white text-black rounded-full hover:scale-105 transition"
          >
            Get Started
          </button>
        </motion.div>

      </section>

    </main>
  )
}