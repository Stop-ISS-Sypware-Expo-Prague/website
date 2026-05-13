import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  // Load Markdown and MDX files in the `src/content/companies/` directory.
  loader: glob({ base: "./src/content/companies/cz", pattern: "*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      logo: z.optional(image()),
      order: z.int(),
    }),
});

const blog_en = defineCollection({
  // Load Markdown and MDX files in the `src/content/companies/` directory.
  loader: glob({ base: "./src/content/companies/en", pattern: "*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      logo: z.optional(image()),
      order: z.int(),
    }),
});

export const collections = { blog, blog_en };
