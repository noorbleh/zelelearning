import { createClient } from '@sanity/client'

export const sanity = createClient({
  projectId: "uxbxtdu8",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
})
