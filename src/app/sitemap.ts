import { MetadataRoute } from 'next';
import { posts } from '#site/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://yourdomain.com'; // Change this when you launch!

  const blogUrls = posts.map((post) => ({
    url: `${baseUrl}${post.permalink}`,
    lastModified: new Date(post.date),
  }));

  return [
    { url: baseUrl, lastModified: new Date() },
    ...blogUrls,
  ];
}