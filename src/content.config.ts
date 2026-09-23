import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * One folder per project:  src/content/projects/<slug>/index.md
 * Put the cover picture (and any pictures used in the text) next to index.md.
 * GIFs and videos go to public/projects/<slug>/ (see GUIDE.md, section 7).
 */
const projects = defineCollection({
  loader: glob({ pattern: '*/index.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      // One sentence, shown on the project card and used as the page description.
      summary: z.string().max(200),
      // Used for sorting (newest first). Format: YYYY-MM-DD or YYYY-MM.
      date: z.coerce.date(),
      // Show on the project list. Set to true to hide while you are still writing.
      draft: z.boolean().default(false),
      // Pin to the top of the list, regardless of date.
      featured: z.boolean().default(false),
      // Short honest label, e.g. "Research", "Learning project", "Purpose-driven, AI-assisted".
      kind: z.string().optional(),
      // Your role: "Solo" or what you personally did in a team.
      role: z.string().optional(),
      tags: z.array(z.string()).default([]),
      // The picture shown on the card and at the top of the page.
      cover: image(),
      coverAlt: z.string(),
      // Optional: animated GIF and video. Paths are relative to public/.
      gif: z.object({ src: z.string(), alt: z.string() }).optional(),
      video: z
        .object({
          src: z.string(),
          poster: z.string().optional(),
          caption: z.string().optional(),
        })
        .optional(),
      // Optional: link to the code. Leave out for private projects.
      repo: z.url().optional(),
      // Optional: link to a live demo / paper / report.
      links: z.array(z.object({ label: z.string(), url: z.url() })).default([]),
    }),
});

export const collections = { projects };
