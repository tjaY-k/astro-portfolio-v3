import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    slug: z.string().optional(),
    pubDate: z.string().or(z.date()).transform((val) => new Date(val)),
    year: z.number(),
    featured: z.boolean().default(false),
    cover_image: z.string().optional(),
    tech: z.array(z.string()),
    external_link: z.string().url().optional(),
    video_url: z.string().url().optional(),          // ← добавлено
    github_link: z.string().url().optional(),
    app_store: z.string().url().optional(),
    google_play: z.string().url().optional(),
    made_at: z.string().optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
};