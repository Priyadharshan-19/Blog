import { defineConfig, s } from "velite";
import rehypePrettyCode from "rehype-pretty-code";

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

          // Remove "posts/" from generated slug
          slug: s.path().transform((slug) =>
            slug.replace(/^posts\//, "")
          ),

          date: s.isodate(),
          category: s.string(),
          readTime: s.string(),
          description: s.string(),
          
          // CHANGE 1: Use s.image() to tell Velite this is an image file
          thumbnail: s.image().optional(),

          // Compile MDX
          content: s.mdx(),
        })
        .transform((data) => ({
          ...data,
          permalink: `/blog/${data.slug}`,
        })),
    },
  },

  mdx: {
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: "github-dark",
        },
      ],
    ],
  },
});