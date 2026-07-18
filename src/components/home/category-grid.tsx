'use client';

import React from 'react';
import { ArrowRight, Brain, Code, Landmark, Wrench, Rocket, Mic, Lightbulb, Gamepad2 } from 'lucide-react';
import { BrutalCard } from '@/components/ui/brutal-card';
import { motion } from 'framer-motion';
import Link from 'next/link';

export function CategoryGrid() {
  const categories = [
    { title: "Inner Monologue", slug: "inner-monologue", icon: Brain, bg: "bg-[#FFD166]" },
    { title: "Tech", slug: "tech", icon: Code, bg: "bg-brand-pink" },
    { title: "அரசியல்", slug: "அரசியல்", icon: Landmark, bg: "bg-brand-lime" },
    { title: "Under the Hood", slug: "under-the-hood", icon: Wrench, bg: "bg-brand-purple" },
    { title: "Build Log", slug: "build-log", icon: Rocket, bg: "bg-[#06D6A0]" },
    { title: "Unfiltered", slug: "unfiltered", icon: Mic, bg: "bg-[#FFD166]" },
    { title: "Thought Experiments", slug: "thought-experiments", icon: Lightbulb, bg: "bg-brand-pink" },
    { title: "Side Quests", slug: "side-quests", icon: Gamepad2, bg: "bg-[#F77F00]" }
  ];

  return (
    <section className="flex flex-col md:flex-row gap-4 mb-8">
      {/* Left Title Card */}
      <BrutalCard className="bg-brand-purple text-white p-8 flex flex-col justify-between w-full md:w-64 shrink-0 shadow-brutal-sm">
        <h2 className="text-3xl font-black uppercase tracking-tight">Explore<br/>Categories</h2>
        <ArrowRight size={32} className="mt-8" strokeWidth={3} />
      </BrutalCard>

      {/* Right Grid of Categories */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
        {categories.map((cat, i) => (
          <Link href={`/category/${cat.slug}`} key={i}>
            <motion.div
              whileHover={{ y: -8, x: -4, transition: { type: "spring", stiffness: 300 } }}
              whileTap={{ y: 0, x: 0 }}
              className="h-full"
            >
              <BrutalCard 
                className={`${cat.bg} p-4 flex flex-col items-center justify-center text-center min-h-[120px] group border-4 border-black h-full shadow-[4px_4px_0_0_#000] hover:shadow-[8px_8px_0_0_#000]`}
              >
                {/* The text changes to black or white depending on the background for contrast */}
                <div className={`${cat.bg === 'bg-brand-purple' ? 'text-white' : 'text-black'} flex flex-col items-center`}>
                  <cat.icon size={32} className="mb-3" strokeWidth={2} />
                  <span className="font-bold uppercase text-xs sm:text-sm tracking-wide">{cat.title}</span>
                </div>
              </BrutalCard>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}