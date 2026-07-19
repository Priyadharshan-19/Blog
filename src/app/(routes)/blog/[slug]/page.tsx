import { formatDate } from "@/lib/format-date";
import { notFound } from "next/navigation";
import { posts } from "#site/content";
import { MDXContent } from "@/components/ui/mdx-components";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { BrutalBadge } from "@/components/ui/brutal-badge";
import { Metadata } from "next";

import { TableOfContents } from "@/components/toc";
import { getTableOfContents } from "@/lib/toc";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: `${post.title} | Priya Dharshan`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      url: `https://yourdomain.com${post.permalink}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const toc = getTableOfContents(post.raw);

  return (
    <div className="min-h-screen max-w-[1400px] mx-auto px-4 py-8 flex flex-col">
      <Header />

      {/* UPDATED: Centered layout using Flexbox */}
      <div className="mt-8 flex justify-center gap-8">
        
        {/* ARTICLE */}
        <main className="w-full max-w-[900px]">
          <header className="mb-12 pt-6">
            <div className="flex gap-4 items-center mb-6">
              <BrutalBadge variant="accent">{post.category}</BrutalBadge>
              <span className="font-mono font-bold text-sm">{formatDate(post.date)}</span>
              <span className="font-mono text-sm text-gray-500">• {post.readTime}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black uppercase leading-[0.9] tracking-tight mb-6">
              {post.title}
            </h1>
            <p className="font-mono text-xl text-gray-700 bg-white p-4 border-4 border-black shadow-[4px_4px_0_0_#000]">
              {post.description}
            </p>
          </header>

          <article className="brutal-card bg-white p-8 md:p-12">
            <MDXContent code={post.content} />
          </article>
        </main>

        {/* RIGHT TOC COLUMN: Hidden on smaller screens */}
        <aside className="hidden xl:block w-[250px] shrink-0">
          <div className="sticky top-28">
            <TableOfContents toc={toc} />
          </div>
        </aside>
        
      </div>

      <div className="mt-16">
        <Footer />
      </div>
    </div>
  );
}