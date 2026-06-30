import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Astro 7 Content Layer API: markdown files loaded via the glob loader.
// entry.id == filename without extension == the URL slug.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    order: z.number().default(99), // controls display order (lower = first)
    role: z.string(),
    period: z.string(), // e.g. "2020 – Present"
    platforms: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]), // filter chips: MMO / Solo / WebGL / Live-ops / Tools ...
    featured: z.boolean().default(false), // shown on the home page
    summary: z.string(), // one-line description for cards
    cover: z.string().optional(), // card thumbnail under /img/projects (blank => placeholder)
    icon: z.string().optional(), // square app icon shown beside the detail-page title
    gallery: z.array(z.string()).default([]), // screenshot grid on the detail page
    hero: z
      .object({
        type: z.enum(['webgl', 'video', 'image']).default('image'),
        src: z.string().optional(), // webgl folder (/games/<slug>/) | youtube id | image path
        poster: z.string().optional(), // poster image for the play/video button
      })
      .default({ type: 'image' }),
    tech: z.array(z.string()).default([]), // tech-stack chips on the detail page
    links: z
      .object({
        playstore: z.string().optional(),
        appstore: z.string().optional(),
        github: z.string().optional(),
        play: z.string().optional(), // external playable URL
        video: z.string().optional(), // youtube / trailer URL
        facebook: z.string().optional(), // official facebook page
        facebookGroup: z.string().optional(), // community group
        site: z.string().optional(),
      })
      .default({}),
    status: z.string().default('Shipped'), // display badge: "Live" | "Shipped" | "In development" | ...
  }),
});

export const collections = { projects };
