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

const research = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/research" }),
  schema: z.object({
    locale: z.enum(["en", "zh"]),
    slug: z.string(),
    title: z.string(),
    period: z.string(),
    excerpt: z.string(),
    image: z.string(),
    imageAlt: z.string(),
    status: z.string(),
    state: z.enum(["completed", "pending"]),
  }),
});

export const collections = { writing, research };
