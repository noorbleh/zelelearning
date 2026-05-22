export default {
  name: "course",
  title: "Courses",
  type: "document",

  fields: [
    {
      name: "title",
      title: "Course Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },

    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },

    {
      name: "topic",
      title: "Topic",
      type: "reference",
      to: [{ type: "topic" }],
      validation: (Rule) => Rule.required(),
    },

    {
      name: "level",
      title: "Level",
      type: "string",
      options: {
        list: [
          { title: "Beginner", value: "Beginner" },
          { title: "Intermediate", value: "Intermediate" },
          { title: "Advanced", value: "Advanced" },
        ],
        layout: "dropdown",
      },
    },

    {
      name: "order",
      title: "Course Order",
      type: "number",
      description:
        "Lower numbers appear first on the website.",
    },

    {
      name: "shortDescription",
      title: "Short Description",
      type: "text",
      rows: 3,
    },

    {
      name: "description",
      title: "Full Description",
      type: "text",
      rows: 6,
    },

    {
      name: "duration",
      title: "Duration",
      type: "string",
    },

    {
      name: "overview",
      title: "Course Overview",
      type: "text",
      rows: 8,
    },

    {
      name: "outcomes",
      title: "Learning Outcomes",
      type: "array",
      of: [{ type: "string" }],
    },

    {
      name: "prerequisites",
      title: "Prerequisites",
      type: "text",
      rows: 4,
    },
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "level",
    },
  },
}