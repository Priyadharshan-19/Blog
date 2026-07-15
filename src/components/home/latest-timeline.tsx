import React from 'react';
import { ArrowRight } from 'lucide-react';
import { BrutalBadge } from '@/components/ui/brutal-badge';

export function LatestTimeline() {
  const latestPosts = [
    {
      title: "The future of college in the age of AI",
      category: "Inner Monologue",
      dotColor: "bg-brand-purple",
      badgeVariant: "warning" as const
    },
    {
      title: "My favorite VS Code extensions in 2026",
      category: "Tech",
      dotColor: "bg-brand-pink",
      badgeVariant: "secondary" as const
    },
    {
      title: "Digital privacy: a political issue we ignore",
      category: "அரசியல்",
      dotColor: "bg-brand-lime",
      badgeVariant: "primary" as const
    },
    {
      title: "How LLMs actually work",
      category: "Under the Hood",
      dotColor: "bg-brand-purple",
      badgeVariant: "accent" as const
    }
  ];

  return (
    <section className="brutal-card bg-white p-0 overflow-hidden flex flex-col md:flex-row mb-8">
      {/* Left Title Block */}
      <div className="bg-brand-pink p-6 md:w-64 border-b-4 md:border-b-0 md:border-r-4 border-black flex flex-col justify-center shrink-0">
        <h3 className="font-black text-2xl uppercase leading-tight mb-4 tracking-tight">
          Latest<br/>From All<br/>Categories
        </h3>
        <ArrowRight strokeWidth={3} />
      </div>
      
      {/* Right List Block */}
      <div className="p-6 flex-1 flex flex-col justify-center space-y-4 font-mono text-sm">
        {latestPosts.map((post, i) => (
          <div 
            key={i} 
            className={`flex flex-col sm:flex-row sm:items-center gap-4 ${
              i !== latestPosts.length - 1 ? 'border-b-2 border-dashed border-gray-300 pb-4' : ''
            }`}
          >
            <div className="flex items-center gap-4 flex-1">
              <div className={`w-3 h-3 rounded-full border-2 border-black ${post.dotColor} shrink-0`}></div>
              <span className="font-bold text-base md:text-sm hover:underline cursor-pointer decoration-2 underline-offset-4 line-clamp-1">
                {post.title}
              </span>
            </div>
            <BrutalBadge variant={post.badgeVariant} className="text-[10px] sm:text-xs">
              {post.category}
            </BrutalBadge>
          </div>
        ))}
      </div>
    </section>
  );
}