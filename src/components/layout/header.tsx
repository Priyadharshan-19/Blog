import React from 'react';
import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-4 z-50 brutal-border bg-white flex flex-col md:flex-row items-center justify-between rounded-[10px] overflow-hidden mb-8 shadow-brutal-sm">
      {/* Logo Section */}
      <Link 
        href="/" 
        className="bg-brand-lime font-black uppercase px-6 py-4 border-b-4 md:border-b-0 md:border-r-4 border-black flex items-center gap-2 w-full md:w-auto hover:bg-[#b5f02c] transition-colors"
      >
        <span>&gt;&gt;</span> PRIYA DHARSHAN
      </Link>
      
      {/* Navigation Links */}
      <nav className="hidden lg:flex gap-6 px-6 text-sm font-bold uppercase overflow-x-auto whitespace-nowrap">
        <Link href="/category/inner-monologue" className="hover:underline decoration-4 underline-offset-4">Inner Monologue</Link>
        <Link href="/category/tech" className="hover:underline decoration-4 underline-offset-4">Tech</Link>
        <Link href="/category/politics" className="hover:underline decoration-4 underline-offset-4">அரசியல்</Link>
        <Link href="/category/under-the-hood" className="hover:underline decoration-4 underline-offset-4">Under the Hood</Link>
        <Link href="/category/build-log" className="hover:underline decoration-4 underline-offset-4">Build Log</Link>
        <Link href="/category/unfiltered" className="hover:underline decoration-4 underline-offset-4">Unfiltered</Link>
        <div className="group relative cursor-pointer flex items-center gap-1 hover:underline decoration-4 underline-offset-4">
          <span>More</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
        </div>
      </nav>

      {/* Subscribe Button */}
      <button className="bg-brand-purple text-white px-8 py-4 font-black uppercase border-t-4 md:border-t-0 md:border-l-4 border-black hover:bg-[#6839eb] transition-colors w-full md:w-auto flex items-center justify-center gap-2 cursor-pointer">
        Subscribe &rarr;
      </button>
    </header>
  );
}