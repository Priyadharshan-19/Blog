import React from 'react';
import { ArrowRight } from 'lucide-react';
import { BrutalCard } from '@/components/ui/brutal-card';
import { BrutalBadge } from '@/components/ui/brutal-badge';
import { BrutalButton } from '@/components/ui/brutal-button';

export function FeaturedPosts() {
  const posts = [
    {
      title: "Is AI Making Us Smarter or Just Lazier?",
      category: "Unfiltered",
      badgeVariant: "accent" as const,
      description: "My take on how AI is changing the way we think, learn and create.",
      readTime: "5 min read",
      date: "Jul 14, 2026",
      imageBg: "bg-black",
      imageUrl: "/api/placeholder/300/200" // We'll swap this with real Cloudinary/local images later
    },
    {
      title: "How Linux Boots - Under the Hood",
      category: "Under the Hood",
      badgeVariant: "accent" as const,
      description: "A deep dive into what really happens when you turn on your computer.",
      readTime: "8 min read",
      date: "Jul 12, 2026",
      imageBg: "bg-brand-lime",
      imageUrl: "/api/placeholder/300/200"
    }
  ];

  return (
    <BrutalCard className="p-6">
      {/* Header with Navigation */}
      <div className="flex justify-between items-center mb-8 border-b-4 border-black pb-4">
        <h2 className="text-3xl font-black uppercase tracking-tight">Featured Posts</h2>
        <div className="flex gap-2">
          <button className="brutal-border px-3 py-1 bg-brand-pink hover:bg-brand-lime transition-colors cursor-pointer font-bold">&lt;</button>
          <button className="brutal-border px-3 py-1 bg-brand-pink hover:bg-brand-lime transition-colors cursor-pointer font-bold">&gt;</button>
        </div>
      </div>

      {/* Post List */}
      <div className="space-y-8 mb-8">
        {posts.map((post, index) => (
          <article key={index} className="group flex flex-col sm:flex-row gap-6 cursor-pointer">
            {/* Thumbnail */}
            <div className={`brutal-border w-full sm:w-48 h-32 ${post.imageBg} shrink-0 relative overflow-hidden transition-all duration-200 group-hover:-translate-y-1 group-hover:-translate-x-1 group-hover:shadow-brutal-sm`}>
               <img 
                 src={post.imageUrl} 
                 alt={post.title} 
                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-80 group-hover:opacity-100" 
               />
            </div>
            
            {/* Content */}
            <div className="flex flex-col justify-center flex-1">
              <h3 className="text-2xl font-black mb-3 group-hover:underline decoration-4 underline-offset-4 leading-tight">
                {post.title}
              </h3>
              <BrutalBadge variant={post.badgeVariant} className="mb-3">
                {post.category}
              </BrutalBadge>
              <p className="font-mono text-sm text-gray-800 mb-3 line-clamp-2">
                {post.description}
              </p>
              <div className="font-mono text-xs text-gray-500 font-bold">
                {post.readTime} • {post.date}
              </div>
            </div>
          </article>
        ))}
      </div>
      
      {/* Action Button */}
      <BrutalButton variant="primary" className="mt-4">
        View All Posts <ArrowRight size={18} strokeWidth={3} />
      </BrutalButton>
    </BrutalCard>
  );
}