export default {
  name: "course",
  title: "Course",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Course Title",
      type: "string",
      validation: (Rule) => Rule.required()
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (Rule) => Rule.required()
    },
    {
      name: "shortDescription",
      title: "Short Description",
      type: "text",
      rows: 3
    },
    {
      name: "duration",
      title: "Duration",
      type: "string",
      description: "Example: 8 weeks, 3 days, 40 hours"
    },
    {
      name: "topic",
      title: "Topic",
      type: "reference",
      to: [{ type: "topic" }],
      validation: (Rule) => Rule.required()
    }
  ]
}
