import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { posts } from '#site/content';
import { ArrowRight } from 'lucide-react';
import { Header } from "@/components/layout/header";
import { HeroSection } from "@/components/home/hero-section";
import { CategoryGrid } from "@/components/home/category-grid";
import { Sidebar } from "@/components/layout/sidebar";
import { LatestTimeline } from "@/components/home/latest-timeline";
import { Footer } from "@/components/layout/footer";

type Post = typeof posts[number];

export default function Home() {
  const allPosts: Post[] = posts; 

  // Automatically take the latest 3 posts based on their date (newest first)
  const featuredPosts: Post[] = [...allPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  // Exact mapping using slugs and mdx filenames
  const getThumbnailPath = (slug: string) => {
    if (slug.includes('linux')) {
      return '/thumbnails/th1.png';
    }
    if (slug.includes('internet') || slug.includes('how')) {
      return '/thumbnails/th2.png';
    }
    if (slug.includes('website') || slug.includes('open') || slug.includes('wht')) {
      return '/thumbnails/th3.png';
    }
    return null;
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'under-the-hood': return 'bg-brand-purple text-white';
      case 'build-log': return 'bg-brand-lime text-black';
      case 'unfiltered': return 'bg-brand-purple text-white';
      case 'side-quests': return 'bg-brand-pink text-black';
      default: return 'bg-brand-pink text-black';
    }
  };

  return (
    <div className="min-h-screen max-w-[1400px] mx-auto px-4 py-8 flex flex-col font-sans">
      <Header />
      
      <main className="flex-1">
        <HeroSection />
        <CategoryGrid />
        
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* FEATURED POSTS CONTAINER */}
          <div className="lg:col-span-2 border-4 border-black bg-white p-6 md:p-8 shadow-brutal">
            
            {/* Header with Carousel Controls */}
            <div className="flex items-center justify-between border-b-4 border-black pb-4 mb-6">
              <h2 className="text-5xl font-black uppercase tracking-tight">
                FEATURED POSTS
              </h2>

              <div className="flex gap-1">
                <button className="w-10 h-10 border-2 border-black bg-brand-pink shadow-brutal-sm font-black">
                  &lt;
                </button>

                <button className="w-10 h-10 border-2 border-black bg-brand-pink shadow-brutal-sm font-black">
                  &gt;
                </button>
              </div>
            </div>

            {/* Posts List */}
            <div className="border-4 border-black bg-white shadow-brutal overflow-hidden">
              {featuredPosts.map((post: Post, index) => {
                const thumbnailSrc = getThumbnailPath(post.slug) || post.thumbnail;

                return (
                  <article
                    key={post.slug}
                    className={`
                      group
                      grid grid-cols-[180px_1fr]
                      gap-5
                      p-6
                      items-center
                      hover:bg-neutral-50
                      transition-colors
                      ${
                        index !== featuredPosts.length - 1
                          ? "border-b-2 border-black"
                          : ""
                      }
                    `}
                  >
                    {/* Thumbnail */}
                    <div className="relative h-[130px] border-4 border-black overflow-hidden bg-neutral-100 shadow-brutal-sm">
                      {thumbnailSrc ? (
                        <Image
                          src={thumbnailSrc}
                          alt={post.title}
                          fill
                          sizes="180px"
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center text-xs font-mono text-neutral-400">
                          [No Thumbnail]
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex flex-col justify-between h-full">
                      <div>
                        <span
                          className={`inline-block mb-3 px-2 py-1 text-[10px] font-black uppercase border-2 border-black ${getCategoryColor(
                            post.category
                          )}`}
                        >
                          {post.category.replace(/-/g, " ")}
                        </span>

                        <Link href={`/blog/${post.slug}`}>
                          <h3 className="text-3xl font-black uppercase tracking-tight leading-none hover:text-brand-purple transition-colors">
                            {post.title}
                          </h3>
                        </Link>

                        <p className="mt-3 text-sm font-mono text-neutral-700 leading-relaxed line-clamp-2">
                          {post.description}
                        </p>
                      </div>

                      <div className="mt-4 flex items-center gap-3 text-xs font-mono text-neutral-600">
                        <span>{post.readTime}</span>

                        <span>•</span>

                        <time dateTime={post.date}>
                          {new Date(post.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </time>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* View All Posts Button */}
            <div className="mt-8">
              <Link href="/blog" className="inline-flex items-center gap-2 px-6 py-3 border-4 border-black bg-brand-lime shadow-brutal hover:translate-x-0.5 hover:-translate-y-0.5 transition-transform font-black text-base uppercase tracking-tight text-black">
                VIEW ALL POSTS <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </section>
        
        <LatestTimeline />
      </main>

      <Footer />
    </div>
  );
}