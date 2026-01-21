import { sanity } from "@/lib/sanity"
import CoursesClient from "./CoursesClient"

async function getTopicsWithCourses() {
  const query = `
    *[_type=="topic"]{
      title,
      "courses": *[_type=="course" && references(^._id)]{
        title,
        shortDescription,
        "slug": slug.current
      }
    }
  `
  return await sanity.fetch(query)
}

export default async function CoursesPage() {
  const topics = await getTopicsWithCourses()
  return <CoursesClient topics={topics} />
}