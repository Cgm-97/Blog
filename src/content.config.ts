import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const BlogPostSchema = z.object({
  title: z.string(),
  sticky: z.number().default(0),
  cover: z.string().optional(),
  categories: z.string(),
  tags: z.union([z.string(), z.array(z.string())]).optional(),
  abbrlink: z.string(),
  description: z.string().optional(),
  date: z.coerce.date(),
  updated: z.coerce.date(),
});

const BoardSchema = z.object({
  title: z.string(),
});

const articles = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./content/articles" }),
  schema: BlogPostSchema,
});

const about = defineCollection({
  loader: glob({ pattern: '*.md', base: "./content/about" }),
  schema: BoardSchema,
});
export const collections = { articles, about };
