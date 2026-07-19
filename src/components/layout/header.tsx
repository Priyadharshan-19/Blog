import React from "react";
import Link from "next/link";
import { Search } from "lucide-react";

export function Header() {
  return (
    <header className="z-50 mb-8 flex flex-col overflow-hidden rounded-[10px] brutal-border bg-white shadow-brutal-sm md:flex-row md:items-center md:justify-between">
      {/* Logo */}
      <Link
        href="/"
        className="flex w-full items-center gap-2 border-b-4 border-black bg-brand-lime px-6 py-4 font-black uppercase transition-colors hover:bg-[#b5f02c] md:w-auto md:border-b-0 md:border-r-4"
      >
        <span>&gt;&gt;</span>
        <span>PRIYA DHARSHAN</span>
      </Link>

      {/* Navigation */}
      <nav className="hidden flex-1 items-center justify-center gap-6 px-6 text-sm font-bold uppercase lg:flex">
        <Link
          href="/category/inner-monologue"
          className="hover:underline decoration-4 underline-offset-4"
        >
          Inner Monologue
        </Link>

        <Link
          href="/category/tech"
          className="hover:underline decoration-4 underline-offset-4"
        >
          Tech
        </Link>

        <Link
          href="/category/politics"
          className="hover:underline decoration-4 underline-offset-4"
        >
          அரசியல்
        </Link>

        <Link
          href="/category/under-the-hood"
          className="hover:underline decoration-4 underline-offset-4"
        >
          Under the Hood
        </Link>

        <Link
          href="/category/build-log"
          className="hover:underline decoration-4 underline-offset-4"
        >
          Build Log
        </Link>

        {/* Search Shortcut */}
        <div className="ml-4 flex items-center gap-2 text-gray-500">
          <Search size={16} strokeWidth={3} />

          <span className="rounded-sm border-2 border-gray-300 bg-gray-100 px-1.5 py-0.5 text-xs tracking-widest">
            CTRL+K
          </span>
        </div>
      </nav>

      {/* Subscribe Button */}
      <button
        type="button"
        className="flex w-full cursor-pointer items-center justify-center gap-2 border-t-4 border-black bg-brand-purple px-8 py-4 font-black uppercase text-white transition-colors hover:bg-[#6839eb] md:w-auto md:border-t-0 md:border-l-4"
      >
        Subscribe →
      </button>
    </header>
  );
}