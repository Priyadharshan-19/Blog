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

          // Remove "posts/" from generated slug
          slug: s.path().transform((slug) =>
            slug.replace(/^posts\//, "")
          ),

          date: s.isodate(),
          category: s.string(),
          readTime: s.string(),
          description: s.string(),

          // Use s.image() to tell Velite this is an image file
          thumbnail: s.image().optional(),

          // Compile MDX
          content: s.mdx(),
          
          // Updated: Capture raw content as optional
          raw: s.string().optional().default(""),
        })
        .transform((data) => ({
          ...data,
          permalink: `/blog/${data.slug}`,
          // You may need to ensure your content is passed correctly here
          raw: data.raw || "", 
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