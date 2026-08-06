import { file } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const socials = defineCollection({
  loader: file('src/data/socials.json'),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    url: z.string().url(),
    icon: z.string(),
    ariaLabel: z.string(),
  }),
});

const books = defineCollection({
  loader: file('src/data/books.json'),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    author: z.string(),
    image: z.string(),
    description: z.string(),
    link: z.string(),
  }),
});

const techStack = defineCollection({
  loader: file('src/data/tech-stack.json'),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    image: z.string(),
    description: z.string(),
    link: z.string().url(),
  }),
});

const desktopSetup = defineCollection({
  loader: file('src/data/desktop-setup.json'),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    image: z.string(),
    description: z.string(),
    link: z.string(),
  }),
});

const about = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
  }),
});

const experience = defineCollection({
  type: 'content',
  schema: z.object({
    company: z.string(),
    website: z.string().url(),
    role: z.string(),
    period: z.string(),
    order: z.number(),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tech: z.array(z.string()),
    external_link: z.string().url().optional(),
    github_link: z.string().url().optional(),
    app_store: z.string().url().optional(),
    google_play: z.string().url().optional(),
    cover_image: z.string().optional(),
    featured: z.boolean().optional(),
    order: z.number().optional(),
    year: z.number(),
    made_at: z.string().optional(),
    video_url: z.string().optional(),
    location: z.string().optional(),
  }),
});

export const collections = {
  socials,
  books,
  techStack,
  desktopSetup,
  about,
  experience,
  projects,
};
