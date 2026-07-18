import { posts } from '#site/content';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { BrutalCard } from '@/components/ui/brutal-card';
import { BrutalBadge } from '@/components/ui/brutal-badge';
import Link from 'next/link';
import { formatDate } from '@/lib/format-date';

export default function BlogArchive() {
  // Sort posts by date, newest first
  const sortedPosts = posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="min-h-screen max-w-[1400px] mx-auto px-4 py-8 flex flex-col">
      <Header />
      
      <main className="flex-1 w-full mb-16">
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter border-b-4 border-black pb-8 mb-8">
          ALL POSTS
        </h1>

        {sortedPosts.length > 0 ? (
           <div className="grid grid-cols-1 gap-8 max-w-4xl">
           {sortedPosts.map((post) => (
             <Link href={post.permalink} key={post.slug} className="group">
               <BrutalCard className="group-hover:-translate-y-2 group-hover:-translate-x-2 group-hover:shadow-[8px_8px_0_0_#000] transition-all">
                 <div className="flex gap-4 items-center mb-4">
                   <BrutalBadge variant="accent">{post.category}</BrutalBadge>
                   <span className="font-mono text-xs font-bold text-gray-500">{formatDate(post.date)}</span>
                 </div>
                 <h2 className="text-3xl font-black mb-4 group-hover:underline decoration-4 underline-offset-4">{post.title}</h2>
                 <p className="font-mono">{post.description}</p>
               </BrutalCard>
             </Link>
           ))}
         </div>
        ) : (
          <div className="p-8 bg-brand-pink border-4 border-black shadow-brutal font-mono text-center">
            No posts published yet.
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}