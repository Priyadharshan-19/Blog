import { posts } from '#site/content';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { BrutalCard } from '@/components/ui/brutal-card';
import { BrutalBadge } from '@/components/ui/brutal-badge';
import Link from 'next/link';
import { formatDate } from '@/lib/format-date';

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // 1. Decode and normalize the URL slug for comparison
  const decodedSlug = decodeURIComponent(slug).toLowerCase();
  
  // 2. Set the display title. 
  // If the slug is 'politics' OR 'அரசியல்', force the display to be 'அரசியல்'.
  let displayCategory = decodedSlug;
  
  if (decodedSlug === 'politics' || decodedSlug === 'அரசியல்') {
    displayCategory = 'அரசியல்';
  } else {
    displayCategory = decodedSlug.replace(/-/g, ' ').toUpperCase();
  }

  // 3. Filter posts by ignoring case and replacing spaces with hyphens
  const categoryPosts = posts.filter((post) => {
    const postCategorySlug = post.category.toLowerCase().replace(/\s+/g, '-');
    // We also handle the special politics/அரசியல் mapping
    const matchesPolitics = (decodedSlug === 'politics' || decodedSlug === 'அரசியல்') && post.category === 'அரசியல்';
    return postCategorySlug === decodedSlug || matchesPolitics;
  });

  return (
    <div className="min-h-screen max-w-[1400px] mx-auto px-4 py-8 flex flex-col">
      <Header />
      
      <main className="flex-1 w-full mb-16">
        <div className="border-b-4 border-black pb-8 mb-8">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
            {displayCategory}
          </h1>
          <p className="font-mono text-xl mt-4">
            Exploring posts filed under {displayCategory}.
          </p>
        </div>

        {categoryPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categoryPosts.map((post) => (
              <Link href={post.permalink} key={post.slug}>
                <BrutalCard hoverEffect className="h-full flex flex-col">
                  <h3 className="text-2xl font-black mb-3">{post.title}</h3>
                  <p className="font-mono text-sm mb-6 flex-1">{post.description}</p>
                  <div className="flex justify-between items-center border-t-2 border-black pt-4">
                    <span className="font-mono text-xs font-bold">{formatDate(post.date)}</span>
                    <BrutalBadge variant="accent">{post.readTime}</BrutalBadge>
                  </div>
                </BrutalCard>
              </Link>
            ))}
          </div>
        ) : (
          /* THE EMPTY STATE */
          <div className="w-full flex flex-col items-center justify-center p-12 bg-brand-lime border-4 border-black shadow-[8px_8px_0_0_#000]">
            <span className="text-6xl mb-6">🚧</span>
            <h2 className="text-4xl font-black uppercase tracking-tight text-center mb-4">Nothing Here Yet</h2>
            <p className="font-mono text-lg text-center max-w-md bg-white p-4 border-4 border-black shadow-[4px_4px_0_0_#000]">
              Priya Dharshan is still brewing content for this section. The workspace is active, but the code hasn't compiled yet. Check back soon.
            </p>
            <Link href="/" className="mt-8 bg-brand-purple text-white px-6 py-3 font-bold uppercase border-4 border-black shadow-brutal hover:-translate-y-1 hover:shadow-[8px_8px_0_0_#000] transition-all">
              &larr; Back to Base
            </Link>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}   