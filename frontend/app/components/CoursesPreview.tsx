"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const row1 = [
  "Corporate Training",
  "Executive Education",
  "Leadership Development",
  "Professional Certification",
]

const row2 = [
  "Industry Programs",
  "Workforce Upskilling",
  "Strategic Consulting",
  "Future-Ready Learning",
]

export default function ProgramsPreview() {
  return (
    <section className="relative py-32 overflow-hidden bg-[#f4efe9]">
      {/* Aurora Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-0 w-[700px] h-[700px] rounded-full blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, rgba(48,70,53,0.10) 0%, transparent 70%)",
          }}
          animate={{
            x: [0, 120, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute right-0 bottom-0 w-[700px] h-[700px] rounded-full blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, rgba(198,169,111,0.08) 0%, transparent 70%)",
          }}
          animate={{
            x: [0, -120, 0],
            y: [0, -60, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 px-8"
        >
          <p className="uppercase tracking-[0.35em] text-xs text-[#304635]/60">
            Discover
          </p>

          <h2 className="mt-6 text-5xl md:text-7xl font-semibold text-[#304635]">
            Explore Our
            <br />
            Programs
          </h2>

          <p className="mt-8 max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed">
            Designed for organisations, leaders, and professionals
            committed to building the capabilities required for
            tomorrow&apos;s challenges.
          </p>
        </motion.div>

        <motion.div
          animate={{ x: ["0%", "-25%"] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          className="flex gap-10 mb-10 w-max"
        >
          {[...row1, ...row1].map((item, i) => (
                        <motion.div
              key={i}
              whileHover={{
                y: -16,
                scale: 1.03,
              }}
              transition={{
                duration: 0.4,
              }}
              className="
                group
                relative
                overflow-hidden
                min-w-[420px]
                h-[280px]
                rounded-[40px]
                border border-[#c6a96f]/15
                bg-gradient-to-br
                from-[#304635]
                via-[#38513d]
                to-[#1f2c22]
                px-12
                py-12
                shadow-[0_40px_100px_rgba(48,70,53,0.30)]
              "
            >
              <div className="absolute inset-0 rounded-[40px] border border-white/5" />

              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className="
                    absolute
                    left-[-40%]
                    top-0
                    h-full
                    w-[35%]
                    rotate-[25deg]
                    bg-gradient-to-r
                    from-transparent
                    via-white/10
                    to-transparent
                  "
                  animate={{
                    left: ["-40%", "140%"],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                />
              </motion.div>

              <motion.div
                className="
                  absolute
                  -top-24
                  -right-24
                  w-56
                  h-56
                  rounded-full
                  blur-3xl
                "
                style={{
                  background: "rgba(198,169,111,0.25)",
                }}
                animate={{
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                }}
              />

              <motion.div
                className="
                  absolute
                  -bottom-20
                  -left-20
                  w-40
                  h-40
                  rounded-full
                  blur-3xl
                "
                style={{
                  background: "rgba(255,255,255,0.05)",
                }}
                animate={{
                  scale: [1.1, 1, 1.1],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                }}
              />

              <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                  <span className="text-[#c6a96f] text-xs tracking-[0.35em] uppercase">
                    Executive Program
                  </span>
                </div>

                <div>
                  <h3 className="text-4xl font-semibold leading-tight text-[#f4efe9] max-w-[280px]">
                    {item}
                  </h3>

                  <div className="mt-8 flex items-center gap-4">
                    <div className="h-px w-14 bg-[#c6a96f]/60" />

                    <span className="text-[#c6a96f] text-sm tracking-wider">
                      Discover
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
                      ))}
        </motion.div>

        <div className="text-center py-14">
          <Link href="/courses">
            <motion.div
              whileHover={{
                scale: 1.05,
              }}
              className="
                inline-flex
                items-center
                gap-4
                text-[#304635]
                text-xl
                font-medium
                cursor-pointer
              "
            >
              Explore All Programs

              <motion.span
                animate={{ x: [0, 8, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                →
              </motion.span>
            </motion.div>
          </Link>
        </div>

        <motion.div
          animate={{ x: ["-25%", "0%"] }}
          transition={{
            duration: 22,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          className="flex gap-10 w-max"
        >
          {[...row2, ...row2].map((item, i) => (
                        <motion.div
              key={i}
              whileHover={{
                y: -16,
                scale: 1.03,
              }}
              transition={{
                duration: 0.4,
              }}
              className="
                group
                relative
                overflow-hidden
                min-w-[420px]
                h-[280px]
                rounded-[40px]
                border border-[#c6a96f]/15
                bg-gradient-to-br
                from-[#304635]
                via-[#38513d]
                to-[#1f2c22]
                px-12
                py-12
                shadow-[0_40px_100px_rgba(48,70,53,0.30)]
              "
            >
              <div className="absolute inset-0 rounded-[40px] border border-white/5" />

              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className="
                    absolute
                    left-[-40%]
                    top-0
                    h-full
                    w-[35%]
                    rotate-[25deg]
                    bg-gradient-to-r
                    from-transparent
                    via-white/10
                    to-transparent
                  "
                  animate={{
                    left: ["-40%", "140%"],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                />
              </motion.div>

              <motion.div
                className="
                  absolute
                  -top-24
                  -right-24
                  w-56
                  h-56
                  rounded-full
                  blur-3xl
                "
                style={{
                  background: "rgba(198,169,111,0.25)",
                }}
                animate={{
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                }}
              />

              <motion.div
                className="
                  absolute
                  -bottom-20
                  -left-20
                  w-40
                  h-40
                  rounded-full
                  blur-3xl
                "
                style={{
                  background: "rgba(255,255,255,0.05)",
                }}
                animate={{
                  scale: [1.1, 1, 1.1],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                }}
              />

              <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                  <span className="text-[#c6a96f] text-xs tracking-[0.35em] uppercase">
                    Executive Program
                  </span>
                </div>

                <div>
                  <h3 className="text-4xl font-semibold leading-tight text-[#f4efe9] max-w-[280px]">
                    {item}
                  </h3>

                  <div className="mt-8 flex items-center gap-4">
                    <div className="h-px w-14 bg-[#c6a96f]/60" />

                    <span className="text-[#c6a96f] text-sm tracking-wider">
                      Discover
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
                      ))}
        </motion.div>
      </div>
    </section>
  )
}