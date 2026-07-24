import { defineConfig, s } from "velite";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";

export default defineConfig({
  root: "src/content",

  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },

  collections: {
    posts: {
      name: "Post",
      pattern: "posts/**/*.mdx",

      schema: s
        .object({
          title: s.string().max(99),

          slug: s.path().transform((slug) =>
            slug.replace(/^posts\//, "")
          ),

          date: s.isodate(),
          category: s.string(),
          readTime: s.string(),
          description: s.string(),

          thumbnail: s.string().optional(),

          // MDX
          content: s.mdx(),

          // ✅ Raw markdown body
          raw: s.raw(),

          // ✅ Built-in TOC
          toc: s.toc(),
        })
        .transform((data) => ({
          ...data,
          permalink: `/blog/${data.slug}`,
        })),
    },
  },

  mdx: {
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: "github-dark",
        },
      ],
    ],
  },
});