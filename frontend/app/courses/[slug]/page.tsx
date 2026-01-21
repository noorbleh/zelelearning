import { sanity } from "@/lib/sanity"
import { notFound } from "next/navigation"
import Link from "next/link"

async function getCourse(slug: string) {
  const query = `
    *[_type=="course" && slug.current == $slug][0]{
      title,
      description,
      duration,
      category
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
    <main className="bg-[#f4efe9] min-h-screen pt-28 pb-20 px-6">

      {/* Page Container */}
      <div className="max-w-6xl mx-auto">

        {/* Back link */}
        <Link
          href="/courses"
          className="text-sm text-[#304635] font-medium hover:underline"
        >
          ← Back to Courses
        </Link>

        {/* Hero Card */}
        <div className="mt-6 bg-white/80 backdrop-blur border border-black/5 rounded-3xl shadow-sm p-10">

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-[#304635]">
            {course.title}
          </h1>

          {/* Meta Info Pills */}
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            {course.duration && (
              <span className="px-3 py-1 rounded-full bg-[#304635]/10 text-[#304635] font-medium">
                Duration: {course.duration}
              </span>
            )}

            {course.category && (
              <span className="px-3 py-1 rounded-full bg-black/5 text-gray-700 font-medium">
                {course.category}
              </span>
            )}
          </div>

          {/* Divider */}
          <div className="mt-6 h-px bg-black/5" />

          {/* Description */}
          <p className="mt-6 text-gray-700 leading-relaxed max-w-3xl">
            {course.description || "Detailed course curriculum coming soon."}
          </p>

          {/* CTA */}
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block px-6 py-3 rounded-full bg-[#304635] text-white font-medium hover:scale-105 transition-transform"
            >
              Enquire about this course →
            </Link>
          </div>

        </div>
      </div>
    </main>
  )
}