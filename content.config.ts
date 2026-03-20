import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'blog/**/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        excerpt: z.string(),
        date: z.string(),
        updated: z.string().optional(),
        category: z.string(),
        question: z.string().optional(),
        image: z.string().optional(),
        imageAlt: z.string().optional(),
        author: z.string().default('The Froggy Studio'),
        published: z.boolean().default(true),
      }),
    }),
  },
})
