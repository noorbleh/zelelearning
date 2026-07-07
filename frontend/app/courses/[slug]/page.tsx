import { sanity } from "@/lib/sanity"
import { notFound } from "next/navigation"
import Link from "next/link"
import NeuralScene from "@/app/components/course/NeuralScene"

// ─── Types ───────────────────────────────────────────────────────────────────

type Course = {
  title: string
  shortDescription?: string
  duration?: string
  level?: string
  overview?: string
  outcomes?: string[]
  prerequisites?: string
  topic?: {
    title: string
    bannerImage?: string
  }
}

// ─── Data ─────────────────────────────────────────────────────────────────────

async function getCourse(slug: string): Promise<Course | null> {
  const query = `
    *[_type=="course" && slug.current == $slug][0]{
      title,
      shortDescription,
      duration,
      level,
      overview,
      outcomes,
      prerequisites,
      topic->{
        title,
        "bannerImage": bannerImage.asset->url
      }
    }
  `
  return await sanity.fetch(query, { slug })
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function CourseDetail({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const course = await getCourse(slug)

  if (!course) return notFound()

  const bannerImage =
    course.topic?.bannerImage ??
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2000&auto=format&fit=crop"

  return (
    <main className="min-h-screen overflow-hidden bg-cream text-primary">

      {/* Hero */}
      <section className="relative flex min-h-[92vh] items-center overflow-hidden">

        {/* Background image */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bannerImage})` }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 z-10 bg-primary/55" />

        {/* Particles */}
        <div className="absolute inset-0 z-20">
          <NeuralScene />
        </div>

        {/* Gradient fade to page background */}
        <div className="absolute inset-0 z-20 bg-gradient-to-b from-black/10 via-transparent to-cream" />

        {/* Content */}
        <div className="relative z-30 mx-auto w-full max-w-7xl px-6 pb-40 pt-32">

          <Link
            href="/courses"
            className="text-cream/70 transition hover:text-cream-light"
          >
            ← Back to Courses
          </Link>

          {course.topic?.title && (
            <div className="mt-8">
              <span className="rounded-full border border-white/10 bg-white/15 px-4 py-2 text-sm uppercase tracking-[0.2em] text-white backdrop-blur">
                {course.topic.title}
              </span>
            </div>
          )}

          <h1 className="mt-8 max-w-4xl font-serif text-5xl font-bold leading-[0.95] tracking-tight text-white md:text-7xl">
            {course.title}
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-cream/80 md:text-xl">
            {course.shortDescription ??
              "Premium enterprise learning experience designed for future-focused teams."}
          </p>

          {/* Meta badges */}
          <div className="mt-10 flex flex-wrap gap-4">
            {course.duration && (
              <div className="rounded-2xl border border-white/10 bg-white/15 px-5 py-3 text-white backdrop-blur">
                {course.duration}
              </div>
            )}
            {course.level && (
              <div className="rounded-2xl bg-cream/90 px-5 py-3 font-semibold text-primary">
                {course.level}
              </div>
            )}
          </div>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-cream px-8 py-4 font-semibold text-primary transition-transform hover:scale-105"
            >
              Enquire Now
            </Link>
            <Link
              href="/courses"
              className="rounded-full border border-white/20 px-8 py-4 text-white transition hover:bg-white/10"
            >
              Explore Courses
            </Link>
          </div>

        </div>
      </section>

      {/* Course content */}
      <section className="relative z-20 -mt-8 px-6 pb-28">
        <div className="mx-auto grid max-w-7xl gap-10 xl:grid-cols-3">

          {/* Main content */}
          <div className="space-y-8 xl:col-span-2">

            {/* Course overview */}
            <div className="rounded-[32px] border border-primary/5 bg-cream-light/80 p-10 shadow-sm backdrop-blur">
              <h2 className="font-serif text-3xl font-bold text-primary">
                Course Overview
              </h2>
              <p className="mt-6 whitespace-pre-line text-lg leading-relaxed text-primary/70">
                {course.overview ?? "Course overview will be updated soon."}
              </p>
            </div>

            {/* Learning outcomes */}
            <div className="rounded-[32px] border border-primary/5 bg-cream-light/80 p-10 shadow-sm backdrop-blur">
              <h2 className="font-serif text-3xl font-bold text-primary">
                Learning Outcomes
              </h2>

              <div className="mt-8 space-y-5">
                {course.outcomes?.length ? (
                  course.outcomes.map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                        ✓
                      </div>
                      <p className="text-lg leading-relaxed text-primary/70">
                        {item}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="text-primary/60">
                    Outcomes will be updated soon.
                  </p>
                )}
              </div>
            </div>

            {/* Prerequisites */}
            <div className="rounded-[32px] border border-primary/5 bg-cream-light/80 p-10 shadow-sm backdrop-blur">
              <h2 className="font-serif text-3xl font-bold text-primary">
                Prerequisites
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-primary/70">
                {course.prerequisites ??
                  "No mandatory prerequisites required."}
              </p>
            </div>

          </div>

          {/* Sidebar */}
          <div>
            <div className="sticky top-28 rounded-[32px] border border-primary/5 bg-cream-light/80 p-8 shadow-sm backdrop-blur">
              <h3 className="font-serif text-2xl font-bold text-primary">
                Enterprise Learning
              </h3>

              <p className="mt-4 leading-relaxed text-primary/60">
                Tailored learning experiences for enterprises,
                institutions, and professional cohorts.
              </p>

              <div className="mt-8 space-y-4">
                <Link
                  href="/contact"
                  className="block rounded-2xl bg-primary px-6 py-4 text-center font-medium text-cream-light transition-transform hover:scale-[1.02]"
                >
                  Contact Zèle
                </Link>
                <Link
                  href="/courses"
                  className="block rounded-2xl border border-primary/10 px-6 py-4 text-center font-medium text-primary transition hover:bg-cream"
                >
                  Browse Courses
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

    </main>
  )
}