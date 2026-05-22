export default {
  name: "topic",
  title: "Topic",
  type: "document",

  fields: [
    {
      name: "title",
      title: "Topic Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },

    {
      name: "displayOrder",
      title: "Display Order",
      type: "number",
      description:
        "Lower numbers appear first on the website.",
    },

    {
      name: "description",
      title: "Topic Description",
      type: "text",
      rows: 4,
    },

    {
      name: "bannerImage",
      title: "Banner Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],

  preview: {
    select: {
      title: "title",
      media: "bannerImage",
    },
  },
}