export default {
  name: "course",
  title: "Course",
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
      options: { source: "title" },
      validation: (Rule) => Rule.required(),
    },

    {
      name: "shortDescription",
      title: "Short Description",
      type: "text",
      rows: 3,
      description: "Shown on course cards and hero section",
      validation: (Rule) => Rule.required(),
    },

    {
      name: "longDescription",
      title: "Detailed Course Description",
      type: "array",
      of: [{ type: "block" }],
      description: "Full description shown on the course detail page",
      validation: (Rule) => Rule.required(),
    },

    {
      name: "duration",
      title: "Duration",
      type: "string",
      description: "Example: 8 weeks, 40 hours",
    },

    {
      name: "deliveryMode",
      title: "Delivery Mode",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Online", value: "Online" },
          { title: "Offline", value: "Offline" },
          { title: "Hybrid", value: "Hybrid" },
        ],
      },
      description: "How this course is delivered",
      validation: (Rule) => Rule.required(),
    },

    {
      name: "category",
      title: "Category",
      type: "string",
      description: "Architecture, Interior Design, BIM, AI, Finance, etc.",
    },

    {
      name: "software",
      title: "Software Covered",
      type: "array",
      of: [{ type: "string" }],
      description: "Example: SketchUp, Revit, Rhino",
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
        layout: "radio",
      },
    },

    {
      name: "targetAudience",
      title: "Target Audience",
      type: "array",
      of: [{ type: "string" }],
      description: "Architects, Interior Designers, Engineers, Students, etc.",
    },

    {
      name: "outcomes",
      title: "Learning Outcomes",
      type: "array",
      of: [{ type: "string" }],
      description: "What the learner will be able to do after completing the course",
    },

    {
      name: "topic",
      title: "Topic",
      type: "reference",
      to: [{ type: "topic" }],
      validation: (Rule) => Rule.required(),
    },
  ],
};
