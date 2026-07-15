import React from 'react';
import { ArrowRight, Brain, Code, Landmark, Wrench, Rocket, Mic, Lightbulb, Gamepad2 } from 'lucide-react';
import { BrutalCard } from '@/components/ui/brutal-card';

export function CategoryGrid() {
  const categories = [
    { title: "Inner Monologue", icon: Brain, bg: "bg-[#FFD166]" },
    { title: "Tech", icon: Code, bg: "bg-brand-pink" },
    { title: "அரசியல்", icon: Landmark, bg: "bg-brand-lime" },
    { title: "Under the Hood", icon: Wrench, bg: "bg-brand-purple" },
    { title: "Build Log", icon: Rocket, bg: "bg-[#06D6A0]" },
    { title: "Unfiltered", icon: Mic, bg: "bg-[#FFD166]" },
    { title: "Thought Experiments", icon: Lightbulb, bg: "bg-brand-pink" },
    { title: "Side Quests", icon: Gamepad2, bg: "bg-[#F77F00]" }
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
          <BrutalCard 
            key={i} 
            hoverEffect 
            className={`${cat.bg} p-4 flex flex-col items-center justify-center text-center min-h-[120px] group border-4 border-black`}
          >
            {/* The text changes to black or white depending on the background for contrast */}
            <div className={`${cat.bg === 'bg-brand-purple' ? 'text-white' : 'text-black'} flex flex-col items-center`}>
              <cat.icon 
                size={32} 
                className="mb-3 group-hover:-translate-y-1 group-hover:scale-110 transition-all duration-200" 
                strokeWidth={2} 
              />
              <span className="font-bold uppercase text-xs sm:text-sm tracking-wide">{cat.title}</span>
            </div>
          </BrutalCard>
        ))}
      </div>
    </section>
  );
}