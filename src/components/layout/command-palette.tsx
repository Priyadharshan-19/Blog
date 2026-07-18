'use client';

import React, { useState, useEffect } from 'react';
import { Command } from 'cmdk';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';
import { posts } from '#site/content';

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  // Listen for Ctrl+K / Cmd+K
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  if (!open) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-start justify-center p-4 pt-[15vh] bg-black/60 backdrop-blur-sm" 
      onClick={() => setOpen(false)}
    >
      <div 
        className="brutal-card w-full max-w-2xl bg-white p-0 overflow-hidden shadow-brutal-hover animate-in fade-in zoom-in-95 duration-200" 
        onClick={(e) => e.stopPropagation()}
      >
        <Command label="Global Command Menu" className="flex flex-col w-full h-full max-h-[60vh]">
          {/* Search Input Header */}
          <div className="flex items-center border-b-4 border-black px-4 py-4 bg-brand-lime">
            <Search className="mr-3 text-black" strokeWidth={3} size={24} />
            <Command.Input
              autoFocus
              placeholder="Search posts..."
              className="flex-1 bg-transparent font-mono text-lg outline-none placeholder:text-black/50 font-black text-black"
            />
            <kbd className="ml-2 bg-white px-2 py-1 border-2 border-black font-mono text-xs font-bold shadow-[2px_2px_0_0_#000]">
              ESC
            </kbd>
          </div>

          {/* Search Results */}
          <Command.List className="overflow-y-auto p-4 font-mono">
            <Command.Empty className="p-8 text-center font-black text-gray-500 uppercase text-lg">
              No results found.
            </Command.Empty>

            <Command.Group heading="Articles" className="[&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-black [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:text-gray-400 [&_[cmdk-group-heading]]:mb-2">
              {posts.map((post) => (
                <Command.Item
                  key={post.slug}
                  value={post.title}
                  onSelect={() => {
                    router.push(post.permalink);
                    setOpen(false);
                  }}
                  // Using data-[selected=true] which is applied by cmdk automatically on hover/arrow keys
                  className="px-4 py-3 cursor-pointer border-2 border-transparent font-bold text-base transition-all mb-2 flex items-center justify-between data-[selected=true]:bg-brand-pink data-[selected=true]:border-black data-[selected=true]:shadow-[4px_4px_0_0_#000] data-[selected=true]:-translate-y-0.5 data-[selected=true]:-translate-x-0.5"
                >
                  <span className="line-clamp-1">{post.title}</span>
                  <span className="text-xs border-2 border-black bg-white px-2 py-1 ml-4 shrink-0">
                    {post.category}
                  </span>
                </Command.Item>
              ))}
            </Command.Group>
          </Command.List>
        </Command>
      </div>
    </div>
  );
}