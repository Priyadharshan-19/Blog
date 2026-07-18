import { posts } from '#site/content';

export async function GET() {
  const baseUrl = 'https://yourdomain.com'; // Change this when you launch!
  
  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
      <channel>
        <title>Priya Dharshan | Think. Build. Explore.</title>
        <link>${baseUrl}</link>
        <description>A place where I share my thoughts, technical stuff, unconventional ideas and everything I find interesting.</description>
        ${posts
          .map(
            (post) => `
          <item>
            <title><![CDATA[${post.title}]]></title>
            <link>${baseUrl}${post.permalink}</link>
            <pubDate>${new Date(post.date).toUTCString()}</pubDate>
          </item>
        `
          )
          .join('')}
      </channel>
    </rss>`;

  return new Response(rss, {
    headers: { 'Content-Type': 'text/xml' },
  });
}