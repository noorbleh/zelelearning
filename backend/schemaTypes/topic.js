export default {
  name: "topic",
  title: "Topic",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Topic Title",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      name: "order",
      title: "Display Order",
      type: "number"
    }
  ]
}
