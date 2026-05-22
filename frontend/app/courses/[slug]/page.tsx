import { sanity } from "@/lib/sanity"
import { notFound } from "next/navigation"
import Link from "next/link"
import NeuralScene from "@/app/components/course/NeuralScene"

async function getCourse(slug: string) {
  const query = `
    *[_type=="course" && slug.current == $slug][0]{
      title,
      shortDescription,
      duration,
      level,
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

export default async function CourseDetail({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const course = await getCourse(slug)

  if (!course) return notFound()

  return (
    <main className="bg-[#f4efe9] text-[#304635] min-h-screen overflow-hidden">

      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">

        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: course.topic?.bannerImage
              ? `url(${course.topic.bannerImage})`
              : `url("https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2000&auto=format&fit=crop")`,
          }}
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 z-10 bg-[#304635]/55" />

        {/* PARTICLES */}
        <div className="absolute inset-0 z-20">
          <NeuralScene />
        </div>

        {/* SOFT GRADIENT */}
        <div className="absolute inset-0 z-20 bg-gradient-to-b from-black/10 via-transparent to-[#f4efe9]" />

        {/* CONTENT */}
        <div className="relative z-30 max-w-7xl mx-auto px-6 w-full pt-32 pb-40">

          {/* BACK */}
          <Link
            href="/courses"
            className="text-[#dfe7d8] hover:text-white transition"
          >
            ← Back to Courses
          </Link>

          {/* TOPIC */}
          <div className="mt-8">
            <span className="px-4 py-2 rounded-full bg-white/15 backdrop-blur border border-white/10 text-white text-sm uppercase tracking-[0.2em]">
              {course.topic?.title}
            </span>
          </div>

          {/* TITLE */}
          <h1 className="mt-8 max-w-4xl text-5xl md:text-7xl font-bold text-white leading-[0.95] tracking-tight">
            {course.title}
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-8 text-lg md:text-xl text-[#e8efe4] leading-relaxed max-w-3xl">
            {course.shortDescription ||
              "Premium enterprise learning experience designed for future-focused teams."}
          </p>

          {/* META */}
          <div className="mt-10 flex flex-wrap gap-4">

            {course.duration && (
              <div className="px-5 py-3 rounded-2xl bg-white/15 backdrop-blur text-white border border-white/10">
                {course.duration}
              </div>
            )}

            {course.level && (
              <div className="px-5 py-3 rounded-2xl bg-[#dce7d4] text-[#304635] font-semibold">
                {course.level}
              </div>
            )}

          </div>

          {/* BUTTONS */}
          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              href="/contact"
              className="px-8 py-4 rounded-full bg-[#dce7d4] text-[#304635] font-semibold hover:scale-105 transition-transform"
            >
              Enquire Now
            </Link>

            <Link
              href="/courses"
              className="px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white/10 transition"
            >
              Explore Courses
            </Link>

          </div>

        </div>
      </section>

      {/* CONTENT */}
      <section className="relative z-20 -mt-8 px-6 pb-28">

        <div className="max-w-7xl mx-auto grid xl:grid-cols-3 gap-10">

          {/* LEFT */}
          <div className="xl:col-span-2 space-y-8">

            {/* OUTCOMES */}
            <div className="bg-white/80 backdrop-blur rounded-[32px] p-10 border border-black/5 shadow-sm">

              <h2 className="text-3xl font-bold">
                Learning Outcomes
              </h2>

              <div className="mt-8 space-y-5">

                {course.outcomes?.length ? (
                  course.outcomes.map(
                    (item: string, i: number) => (
                      <div
                        key={i}
                        className="flex gap-4"
                      >
                        <div className="w-7 h-7 rounded-full bg-[#dce7d4] flex items-center justify-center text-sm font-bold">
                          ✓
                        </div>

                        <p className="text-gray-700 text-lg leading-relaxed">
                          {item}
                        </p>
                      </div>
                    )
                  )
                ) : (
                  <p className="text-gray-600">
                    Outcomes will be updated soon.
                  </p>
                )}

              </div>

            </div>

            {/* PREREQUISITES */}
            <div className="bg-white/80 backdrop-blur rounded-[32px] p-10 border border-black/5 shadow-sm">

              <h2 className="text-3xl font-bold">
                Prerequisites
              </h2>

              <p className="mt-6 text-gray-700 text-lg leading-relaxed">
                {course.prerequisites ||
                  "No mandatory prerequisites required."}
              </p>

            </div>

          </div>

          {/* SIDEBAR */}
          <div>

            <div className="sticky top-28 bg-white/80 backdrop-blur rounded-[32px] p-8 border border-black/5 shadow-sm">

              <h3 className="text-2xl font-bold">
                Enterprise Learning
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Tailored learning experiences for enterprises,
                institutions, and professional cohorts.
              </p>

              <div className="mt-8 space-y-4">

                <Link
                  href="/contact"
                  className="block text-center px-6 py-4 rounded-2xl bg-[#304635] text-white font-medium hover:scale-[1.02] transition-transform"
                >
                  Contact Zèle
                </Link>

                <Link
                  href="/courses"
                  className="block text-center px-6 py-4 rounded-2xl border border-[#304635]/10 font-medium hover:bg-[#f8f6f2]"
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