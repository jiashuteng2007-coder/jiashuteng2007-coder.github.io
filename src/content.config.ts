import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const writing = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/writing" }),
  schema: z.object({
    locale: z.enum(["en", "zh", "both"]),
    slug: z.string(),
    title: z.string(),
    date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    excerpt: z.string(),
    image: z.string(),
    imageAlt: z.string(),
    imageFit: z.enum(["cover", "contain"]).optional(),
    imageBackground: z.string().optional(),
    imagePosition: z.string().optional(),
  }),
});

export const collections = { writing };
