import React from 'react';
import Link from 'next/link';
import { posts } from '#site/content';
import { ArrowRight } from 'lucide-react';

export function LatestTimeline() {
  // Sort posts by date descending to get the latest ones
  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'inner-monologue': return 'bg-brand-yellow text-black';
      case 'tech': return 'bg-brand-pink text-black';
      case 'under-the-hood': return 'bg-brand-purple text-white';
      case 'build-log': return 'bg-brand-lime text-black';
      default: return 'bg-brand-lime text-black';
    }
  };

  const getBulletColor = (category: string) => {
    switch (category) {
      case 'inner-monologue': return 'bg-brand-purple';
      case 'tech': return 'bg-brand-pink';
      case 'under-the-hood': return 'bg-brand-lime';
      default: return 'bg-brand-purple';
    }
  };

  return (
    <section className="border-4 border-black bg-white shadow-brutal p-0 overflow-hidden flex flex-col md:flex-row mb-8">
      {/* Left Title Block */}
      <div className="bg-brand-pink p-6 md:w-64 border-b-4 md:border-b-0 md:border-r-4 border-black flex flex-col justify-center shrink-0">
        <h3 className="font-black text-2xl uppercase leading-tight mb-4 tracking-tight">
          Latest<br/>From All<br/>Categories
        </h3>
        <Link 
          href="/blog" 
          className="inline-flex items-center justify-center w-10 h-10 border-2 border-black bg-white shadow-brutal-sm hover:translate-x-0.5 hover:-translate-y-0.5 transition-transform text-black"
        >
          <ArrowRight className="w-5 h-5 stroke-[3]" />
        </Link>
      </div>

      {/* Right List Block */}
      <div className="p-6 flex-1 flex flex-col justify-center space-y-4 font-mono text-sm">
        {sortedPosts.slice(0, 4).map((post, i, arr) => (
          <div 
            key={post.slug} 
            className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
              i !== arr.length - 1 ? 'border-b-2 border-dashed border-gray-300 pb-4' : ''
            }`}
          >
            {/* Left Side: Bullet and Title */}
            <div className="flex items-center gap-4 flex-1">
              <div className={`w-3 h-3 rounded-full border-2 border-black ${getBulletColor(post.category)} shrink-0`}></div>
              <Link href={`/blog/${post.slug}`}>
                <span className="font-bold text-base md:text-sm hover:underline cursor-pointer decoration-2 underline-offset-4 line-clamp-1 uppercase tracking-tight">
                  {post.title}
                </span>
              </Link>
            </div>

            {/* Right Side: Category Badge */}
            <div>
              <span className={`inline-block px-3 py-1 border-2 border-black font-mono text-[10px] sm:text-xs font-black uppercase tracking-wider ${getCategoryColor(post.category)} shadow-brutal-sm`}>
                {post.category.replace(/-/g, ' ')}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}