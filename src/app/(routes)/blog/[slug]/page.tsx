import { formatDate } from '@/lib/format-date';
import { notFound } from 'next/navigation';
import { posts } from '#site/content'; // This is the auto-generated Velite path
import { MDXContent } from '@/components/ui/mdx-components';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { BrutalBadge } from '@/components/ui/brutal-badge';
import { Metadata } from 'next';

// 1. DYNAMIC METADATA GENERATION
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) return {};

  return {
    title: `${post.title} | Priya Dharshan`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      url: `https://yourdomain.com${post.permalink}`,
      // images: [{ url: post.thumbnail }] // Uncomment when you have real images
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  };
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  // React 19 / Next 15 awaits params
  const { slug } = await params;
  
  const post = posts.find((p) => p.slug === slug);
  if (!post) {
    notFound();
  }

  // 2. JSON-LD STRUCTURED DATA FOR GOOGLE
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: [{ '@type': 'Person', 'name': 'Priya Dharshan' }],
  };

  return (
    <div className="min-h-screen max-w-[1400px] mx-auto px-4 py-8 flex flex-col">
      {/* Inject JSON-LD into the DOM */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <Header />
      
      <main className="flex-1 max-w-4xl mx-auto w-full mb-16">
        {/* Post Header */}
        <header className="mb-12 pt-8">
          <div className="flex gap-4 items-center mb-6">
            <BrutalBadge variant="accent">{post.category}</BrutalBadge>
            <span className="font-mono font-bold text-sm">{formatDate(post.date)}</span>
            <span className="font-mono font-bold text-sm text-gray-500">• {post.readTime}</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black uppercase leading-[0.9] tracking-tighter mb-6">
            {post.title}
          </h1>
          <p className="font-mono text-xl text-gray-700 bg-white p-4 border-4 border-black shadow-[4px_4px_0_0_#000]">
            {post.description}
          </p>
        </header>

        {/* Post Content */}
        <article className="brutal-card p-8 md:p-12 bg-white">
          <MDXContent code={post.content} />
        </article>
      </main>

      <Footer />
    </div>
  );
}