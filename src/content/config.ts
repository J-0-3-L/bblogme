import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    info: z.string(),
    date: z.date(),
    tags: z.array(z.string()).optional(),
    slug: z.string()
  })
})

export const collections = {
  blog: blogCollection
}
