import { defineConfig, s } from 'velite';

export default defineConfig({
  root: 'src/content',
  output: {
    data: '.velite',
    assets: 'public/static',
    base: '/static/',
    name: '[name]-[hash:6].[ext]',
    clean: true,
  },
  collections: {
    posts: {
      name: 'Post',
      pattern: 'posts/**/*.mdx',
      schema: s.object({
        title: s.string().max(99),
        slug: s.path(), // Auto-generates slug from filename
        date: s.isodate(),
        category: s.string(),
        readTime: s.string(),
        description: s.string(),
        thumbnail: s.string().optional(),
        content: s.mdx(),
      }).transform((data) => ({ ...data, permalink: `/blog/${data.slug}` }))
    }
  }
});