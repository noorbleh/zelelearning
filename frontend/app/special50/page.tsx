"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const journey = [
  {
    year: "1980s",
    emoji: "⌨️",
    title: "The Computer Era",
    text: "You learned to work with computers when they first entered offices and homes.",
  },
  {
    year: "1990s",
    emoji: "🌐",
    title: "The Internet Era",
    text: "You adapted to email, websites and a connected world.",
  },
  {
    year: "2000s",
    emoji: "📱",
    title: "The Smartphone Era",
    text: "You embraced mobile technology and digital communication.",
  },
  {
    year: "Today",
    emoji: "🤖",
    title: "The AI Era",
    text: "Now it's time to discover artificial intelligence and modern digital tools.",
  },
];

export default function Special50Page() {
  const [active, setActive] = useState(0);
  const [openedEnvelope, setOpenedEnvelope] = useState(false);
const [checked, setChecked] = useState<string[]>([]);

  return (
    <main className="min-h-screen bg-[#f8f5f0] text-[#304635]">
      {/* HERO */}

      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="uppercase tracking-[0.3em] text-sm mb-6 text-[#304635]/60">
              Special 50+
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Learn.
              <br />
              Upgrade.
              <br />
              Thrive.
            </h1>

            <p className="mt-8 text-xl text-[#304635]/70">
              Technology is evolving fast and learning doesn't stop at any age.
            </p>

            <Link
              href="/contact"
              className="inline-block mt-8 px-8 py-4 rounded-full bg-[#304635] text-white"
            >
              Start Exploring
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-[40px] p-10 shadow-lg"
          >
            <h2 className="text-3xl font-bold mb-6">
              Your Technology Journey
            </h2>

            <div className="flex justify-between text-5xl mb-8">
              <span>☎️</span>
              <span>💻</span>
              <span>🌐</span>
              <span>📱</span>
              <span>🤖</span>
            </div>

            <p className="text-[#304635]/70">
              From landlines to AI, you've adapted through every major
              technological revolution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* TECHNOLOGY JOURNEY */}

      <section className="py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold text-[#304635] mb-6">
            You've Adapted Before.
          </h2>

          <p className="text-xl text-[#304635]/70 mb-16">
            Click through your technology journey.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {journey.map((item, index) => (
              <motion.button
                key={item.year}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActive(index)}
                className={`px-6 py-3 rounded-full transition-all ${
                  active === index
                    ? "bg-[#304635] text-white"
                    : "bg-[#f8f5f0] text-[#304635]"
                }`}
              >
                {item.year}
              </motion.button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="bg-[#f8f5f0] rounded-[40px] p-12 max-w-4xl mx-auto"
            >
              <div className="text-8xl mb-6">{journey[active].emoji}</div>

              <h3 className="text-4xl font-bold mb-4">
                {journey[active].title}
              </h3>

              <p className="text-lg text-[#304635]/70">
                {journey[active].text}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CURIOUS NOTEBOOK */}

<section className="py-40 px-6">

  <div className="max-w-5xl mx-auto">

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="bg-white rounded-[40px] p-10 md:p-16 shadow-xl"
    >

      <p className="uppercase tracking-[0.4em] text-sm text-[#304635]/50 mb-6">
        A little notebook
      </p>

      <h2 className="text-4xl md:text-6xl font-bold mb-12">
        Things I'd love to understand...
      </h2>

      <div className="space-y-5">

        {[
          "Artificial Intelligence",
          "ChatGPT",
          "Digital Tools",
          "Modern Business Software",
          "New Technology",
        ].map((item) => (

          <motion.button
            key={item}
            whileHover={{ x: 8 }}
            onClick={() => {
              if (checked.includes(item)) {
                setChecked(checked.filter((i) => i !== item));
              } else {
                setChecked([...checked, item]);
              }
            }}
            className="flex items-center gap-4 text-left text-xl md:text-2xl"
          >
            <div className="text-3xl">
              {checked.includes(item) ? "✅" : "☐"}
            </div>

            <span>{item}</span>
          </motion.button>

        ))}

      </div>

      {checked.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-12 p-8 bg-[#f8f5f0] rounded-3xl"
        >
          <p className="text-2xl font-medium">
            Looks like you're ready for your next chapter.
          </p>
        </motion.div>
      )}

    </motion.div>

  </div>

</section>

{/* ENVELOPE */}

<section className="py-40 px-6">

  <div className="max-w-4xl mx-auto text-center">

    <p className="uppercase tracking-[0.4em] text-sm mb-8">
      A little gift for staying curious
    </p>

    {!openedEnvelope ? (
      <motion.div
        whileHover={{
          scale: 1.08,
          rotate: [-2, 2, -2],
        }}
        onClick={() => setOpenedEnvelope(true)}
        className="cursor-pointer"
      >
        <div className="text-[10rem]">
          ✉️
        </div>

        <p className="text-xl mt-6">
          Open me
        </p>
      </motion.div>
    ) : (
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        className="bg-[#304635] text-white rounded-[40px] p-12"
      >

        <p className="uppercase tracking-[0.4em] text-sm mb-6">
          Surprise
        </p>

        <h2 className="text-7xl md:text-9xl font-bold">
          10%
        </h2>

        <p className="text-2xl mt-6">
          Exclusive discount for learners aged 50+
        </p>

        <div className="mt-12 space-y-4 text-left max-w-md mx-auto">

          <p>✓ Personalized guidance</p>
          <p>✓ Structured learning</p>
          <p>✓ Welcoming environment</p>

        </div>

      </motion.div>
    )}

  </div>

</section>

{/* FINAL CTA */}

<section className="pb-40 px-6 text-center">

  <h2 className="text-5xl md:text-8xl font-bold leading-tight">

    Experience
    <br />
    +
    <br />
    Modern Skills

  </h2>

  <p className="text-2xl text-[#304635]/70 mt-10 max-w-3xl mx-auto">
    Take the step.
    Upgrade your skills.
    Stay empowered.
  </p>

  <Link
    href="/contact"
    className="inline-block mt-12 px-10 py-5 rounded-full bg-[#304635] text-white text-lg"
  >
    Enroll Today →
  </Link>

</section>
    </main>
  );
}