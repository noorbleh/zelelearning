"use client";

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import { useRef } from "react";

// ─── Types ───────────────────────────────────────────────────────────────────

type Milestone = {
  index: string;
  era: string;
  title: string;
  description: string;
  detail: string;
};

type Benefit = {
  title: string;
  description: string;
};

// ─── Content ─────────────────────────────────────────────────────────────────

const milestones: Milestone[] = [
  {
    index: "I",
    era: "1980s — 1990s",
    title: "Computers",
    description:
      "A beige box arrived on the desk, and the rules of work quietly rewrote themselves.",
    detail:
      "Typewriters gave way to keyboards. Filing cabinets gave way to folders you couldn't touch. You learned a new vocabulary — and it became second nature.",
  },
  {
    index: "II",
    era: "Late 1990s — 2000s",
    title: "The Internet",
    description:
      "The world arrived through a dial-up tone, and suddenly every answer had a screen.",
    detail:
      "Letters became emails. Encyclopedias became search bars. You navigated a web that hadn't existed a year before — and made it part of daily life.",
  },
  {
    index: "III",
    era: "2007 — Present",
    title: "Smartphones",
    description:
      "A phone became a camera, a map, a bank, and a library — all in one pocket.",
    detail:
      "You learned to swipe before you learned the names of the icons. What once felt foreign became the device you now reach for first.",
  },
  {
    index: "IV",
    era: "Now",
    title: "Artificial Intelligence",
    description:
      "A new kind of tool has arrived — one that listens, drafts, and thinks alongside you.",
    detail:
      "This isn't a different kind of change. It's the same kind you've met three times already. The pattern is familiar. Only the tool is new.",
  },
];

const benefits: Benefit[] = [
  {
    title: "Beginner Friendly",
    description:
      "No prior experience assumed. Every concept is introduced from first principles, in plain language.",
  },
  {
    title: "Practical Learning",
    description:
      "Less theory, more doing. You'll work with the same tools you'll actually use afterward.",
  },
  {
    title: "Comfortable Pace",
    description:
      "Sessions are designed to be revisited. There's no rush, and no one moves on without you.",
  },
  {
    title: "Real-World Application",
    description:
      "Every lesson connects to something useful — your work, your projects, your daily life.",
  },
  {
    title: "Personalized Guidance",
    description:
      "Small groups and one-on-one support, shaped around how you learn best.",
  },
  {
    title: "Welcoming Environment",
    description:
      "A community of people exactly like you — curious, capable, and getting started together.",
  },
];

// ─── SVG Path ────────────────────────────────────────────────────────────────

const JOURNEY_PATH = `
  M 50 0
  C 50 60, 20 80, 20 140
  C 20 200, 80 220, 80 290
  C 80 360, 15 380, 15 450
  C 15 520, 85 540, 85 610
  C 85 660, 50 680, 50 740
`;

const JOURNEY_PATH_HEIGHT = 740;

const nodePositions = [
  { x: 20, y: 140 },
  { x: 80, y: 290 },
  { x: 15, y: 450 },
  { x: 85, y: 610 },
];

// ─── Sub-components ──────────────────────────────────────────────────────────

function PathNode({
  x,
  y,
  threshold,
  progress,
}: {
  x: number;
  y: number;
  threshold: number;
  progress: MotionValue<number>;
}) {
  const clampedStart = Math.max(threshold - 0.04, 0);
  const clampedEnd = Math.min(threshold + 0.02, 1);

  const opacity = useTransform(progress, [clampedStart, threshold], [0, 1]);
  const scale = useTransform(
    progress,
    [clampedStart, threshold, clampedEnd],
    [0.4, 1.6, 1]
  );
  const glowOpacity = useTransform(
    progress,
    [clampedStart, threshold],
    [0, 0.6]
  );

  return (
    <g>
      <motion.circle
        cx={x}
        cy={y}
        r="3.2"
        fill="#c6a96f"
        style={{ opacity: glowOpacity }}
      />
      <circle
        cx={x}
        cy={y}
        r="1.4"
        fill="#f4efe9"
        stroke="#304635"
        strokeOpacity="0.15"
        strokeWidth="0.3"
      />
      <motion.circle
        cx={x}
        cy={y}
        r="1.4"
        fill="#c6a96f"
        style={{
          opacity,
          scale,
          transformOrigin: `${x}px ${y}px` as any,
        }}
      />
    </g>
  );
}

function MilestoneCard({
  milestone,
  side,
}: {
  milestone: Milestone;
  side: "left" | "right";
}) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "start 0.35"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [40, 0]);
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [side === "left" ? -28 : 28, 0]
  );

  const alignment =
    side === "left"
      ? "justify-start sm:mr-auto sm:ml-[6%]"
      : "justify-end sm:ml-auto sm:mr-[6%]";

  return (
    <div
      ref={ref}
      className={`relative flex w-full items-center ${
        side === "left" ? "justify-start" : "justify-end"
      }`}
    >
      <motion.div
        style={{ opacity, y, x }}
        className={`relative w-full max-w-md rounded-[28px] border border-gold/15 bg-cream-light/90 p-8 shadow-[0_30px_80px_-40px_rgba(36,51,40,0.45)] backdrop-blur-sm sm:p-10 ${alignment}`}
      >
        <div className="mb-6 flex items-baseline justify-between">
          <span className="font-serif text-sm italic tracking-wide text-gold">
            {milestone.index}
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-primary/40">
            {milestone.era}
          </span>
        </div>

        <h3 className="font-serif text-3xl font-light leading-tight text-primary sm:text-4xl">
          {milestone.title}
        </h3>

        <p className="mt-4 text-base leading-relaxed text-primary/70">
          {milestone.description}
        </p>

        <div className="mt-6 h-px w-12 bg-gold/40" />

        <p className="mt-6 text-sm leading-relaxed text-primary/55">
          {milestone.detail}
        </p>
      </motion.div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Special50Page() {
  const heroRef = useRef<HTMLDivElement>(null);
  const journeyRef = useRef<HTMLDivElement>(null);
  const destRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const { scrollYProgress: journeyProgress } = useScroll({
    target: journeyRef,
    offset: ["start start", "end end"],
  });

  const { scrollYProgress: destProgress } = useScroll({
    target: destRef,
    offset: ["start end", "end start"],
  });

  // Hero transforms
  const heroY = useTransform(heroProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(heroProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(heroProgress, [0, 1], [1, 1.08]);

  // Journey path
  const pathLength = useSpring(journeyProgress, {
    stiffness: 80,
    damping: 30,
    restDelta: 0.001,
  });

  // Destination transforms
  const destScale = useTransform(destProgress, [0.2, 0.5], [0.92, 1]);
  const destOpacity = useTransform(destProgress, [0.15, 0.45], [0, 1]);
  const destLineWidth = useTransform(destProgress, [0.3, 0.6], ["0%", "100%"]);
  const destGlow = useTransform(destProgress, [0.2, 0.5, 0.8], [0, 0.5, 0.2]);

  return (
    <main className="relative bg-cream font-sans text-primary">

      {/* Hero */}
      <section
        ref={heroRef}
        className="grain relative h-[100vh] overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #304635 0%, #3b5440 45%, #243328 100%)",
        }}
      >
        <motion.div
          style={{ y: heroY, scale: heroScale }}
          className="absolute inset-0"
          aria-hidden
        >
          <div className="absolute left-1/2 top-1/2 h-[60vmax] w-[60vmax] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.07] blur-[120px]" />
          <div className="absolute -left-1/4 top-1/4 h-[40vmax] w-[40vmax] rounded-full bg-primary-mid/40 blur-[140px]" />
        </motion.div>

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #f4efe9 1px, transparent 1px), linear-gradient(to bottom, #f4efe9 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
          aria-hidden
        />

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
        >
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 font-mono text-[11px] uppercase tracking-[0.28em] text-gold/80"
          >
            Zèle Learning — Special 50+
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl font-serif text-[clamp(2.75rem,7vw,6rem)] font-light leading-[1.05] text-cream-light"
          >
            You&rsquo;ve been here
            <br />
            <span className="italic text-gold">before.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 max-w-xl text-base leading-relaxed text-cream-light/70 sm:text-lg"
          >
            Computers. The internet. Smartphones. Every time the world changed
            its language, you learned to speak it. AI is simply the next
            conversation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 flex flex-col items-center gap-3"
          >
            <div className="h-px w-px rounded-full bg-gold" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream-light/40">
              Scroll to begin the journey
            </span>
            <motion.div
              animate={{ height: ["0px", "48px", "0px"] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              className="w-px bg-gradient-to-b from-gold to-transparent"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Journey */}
      <section
        ref={journeyRef}
        className="relative bg-cream"
        aria-label="The technology journey"
      >
        <div className="relative mx-auto max-w-3xl px-6 pb-16 pt-28 text-center sm:pt-40">
          <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-primary/40">
            The Journey
          </span>
          <h2 className="mt-6 font-serif text-[clamp(2rem,5vw,3.75rem)] font-light leading-tight text-primary">
            Four revolutions.
            <br />
            <span className="italic text-gold">One traveler.</span>
          </h2>
        </div>

        <div className="relative mx-auto max-w-5xl px-6">
          <svg
            viewBox={`0 0 100 ${JOURNEY_PATH_HEIGHT}`}
            preserveAspectRatio="none"
            className="pointer-events-none absolute left-0 top-0 h-full w-full"
            aria-hidden
          >
            {/* faint track */}
            <path
              d={JOURNEY_PATH}
              fill="none"
              stroke="#304635"
              strokeOpacity="0.08"
              strokeWidth="0.4"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
            {/* glow layer */}
            <motion.path
              d={JOURNEY_PATH}
              fill="none"
              stroke="#c6a96f"
              strokeOpacity="0.25"
              strokeWidth="1.2"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              style={{ pathLength }}
              pathLength={1}
            />
            {/* crisp top layer */}
            <motion.path
              d={JOURNEY_PATH}
              fill="none"
              stroke="#c6a96f"
              strokeWidth="0.5"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              style={{ pathLength }}
              pathLength={1}
            />
            {nodePositions.map((pos, i) => (
              <PathNode
                key={i}
                x={pos.x}
                y={pos.y}
                threshold={pos.y / JOURNEY_PATH_HEIGHT}
                progress={pathLength}
              />
            ))}
          </svg>

          <div className="relative flex flex-col gap-[18vh] py-[14vh] sm:gap-[24vh] sm:py-[18vh]">
            {milestones.map((m, i) => (
              <div key={m.title} className="min-h-[40vh]">
                <MilestoneCard
                  milestone={m}
                  side={i % 2 === 0 ? "left" : "right"}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destination */}
      <section
        ref={destRef}
        className="grain relative flex min-h-[110vh] items-center justify-center overflow-hidden px-6 py-32"
        style={{
          background: "linear-gradient(160deg, #304635 0%, #3b5440 45%, #243328 100%)",
        }}
      >
        <motion.div
          style={{ opacity: destGlow }}
          className="absolute left-1/2 top-1/2 h-[70vmax] w-[70vmax] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[140px]"
          aria-hidden
        />

        <motion.div
          style={{ scale: destScale, opacity: destOpacity }}
          className="relative z-10 mx-auto max-w-3xl text-center"
        >
          <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-cream-light/50">
            The Destination
          </span>

          <h2 className="mt-8 font-serif text-[clamp(2.25rem,6vw,5rem)] font-light leading-[1.15] text-cream-light">
            You&rsquo;ve adapted before.
            <br />
            <span className="italic text-gold">You can adapt again.</span>
          </h2>

          <motion.div
            style={{ width: destLineWidth }}
            className="mx-auto mt-10 h-px max-w-xs bg-gradient-to-r from-transparent via-gold to-transparent"
          />

          <p className="mx-auto mt-10 max-w-xl text-base leading-relaxed text-cream-light/65 sm:text-lg">
            Four times now, the world has handed you something new and
            unfamiliar. Four times, you learned it — at your own pace, in your
            own way. That same person is still here.
          </p>
        </motion.div>
      </section>

      {/* Discount */}
      <section className="relative overflow-hidden bg-cream px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-[32px] border border-gold/20 bg-primary px-8 py-14 text-center sm:px-16 sm:py-20"
          >
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 h-[60vmax] w-[60vmax] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[140px]"
              aria-hidden
            />

            <span className="relative font-mono text-[11px] uppercase tracking-[0.28em] text-gold/80">
              A Welcome Gesture
            </span>

            <h2 className="relative mt-6 font-serif text-[clamp(2.25rem,6vw,4.5rem)] font-light leading-tight text-cream-light">
              <span className="italic text-gold">10% off</span> your first
              program
            </h2>

            <p className="relative mx-auto mt-6 max-w-xl text-base leading-relaxed text-cream-light/65 sm:text-lg">
              For learners 50 and above, every Special 50+ program begins with
              a small thank-you for showing up — and a head start on the
              journey ahead.
            </p>

            <div className="relative mx-auto mt-10 h-px max-w-xs bg-gradient-to-r from-transparent via-gold to-transparent" />

            <motion.a
              href="/contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="relative mt-10 inline-block rounded-full bg-gold px-10 py-4 font-mono text-xs uppercase tracking-[0.25em] text-primary-deep shadow-[0_20px_50px_-20px_rgba(198,169,111,0.5)] transition-colors hover:bg-cream-light"
            >
              Claim Your Discount
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="relative bg-cream-light px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-primary/40">
              Special 50+
            </span>
            <h2 className="mt-6 font-serif text-[clamp(2rem,5vw,3.5rem)] font-light leading-tight text-primary">
              Built for how you
              <br />
              <span className="italic text-gold">actually learn.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-primary/60 sm:text-lg">
              The program is shaped around the journey you&rsquo;ve already
              taken — and the one you&rsquo;re ready to take next.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-[28px] border border-primary/10 bg-primary/10 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative flex flex-col gap-4 bg-cream-light p-8 transition-colors duration-500 hover:bg-cream sm:p-10"
              >
                <span className="font-serif text-sm italic text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-xl font-light text-primary sm:text-2xl">
                  {b.title}
                </h3>
                <p className="text-sm leading-relaxed text-primary/60 sm:text-[15px]">
                  {b.description}
                </p>
                <span className="absolute bottom-0 left-8 right-8 h-px origin-left scale-x-0 bg-gold/50 transition-transform duration-500 group-hover:scale-x-100 sm:left-10 sm:right-10" />
              </motion.div>
            ))}
          </div>

          <div className="mt-20 flex flex-col items-center text-center sm:mt-28">
            <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-primary/40">
              Begin When Ready
            </span>
            <h3 className="mt-6 max-w-xl font-serif text-2xl font-light leading-snug text-primary sm:text-3xl">
              The next revolution doesn&rsquo;t need to feel like one.
            </h3>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="mt-10 rounded-full bg-primary px-10 py-4 font-mono text-xs uppercase tracking-[0.25em] text-cream-light shadow-[0_20px_50px_-20px_rgba(48,70,53,0.6)] transition-colors hover:bg-primary-deep"
            >
              Reserve Your Place
            </motion.a>
          </div>
        </div>
      </section>

    </main>
  );
}