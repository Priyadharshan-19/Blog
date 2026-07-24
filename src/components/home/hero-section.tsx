'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown, Github, Linkedin, Instagram, Mail } from 'lucide-react';
import { BrutalButton } from '@/components/ui/brutal-button';
import { BrutalBadge } from '@/components/ui/brutal-badge';

export function HeroSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-0 border-4 border-black rounded-[10px] overflow-hidden bg-white shadow-brutal mb-8">
      {/* Left Column */}
      <div className="p-8 md:p-12 flex flex-col justify-center bg-transparent">
        <BrutalBadge variant="accent" className="mb-6 rounded-[4px] border-none shadow-none text-xs">
          WELCOME TO MY BLOG 👋
        </BrutalBadge>
        
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.9] tracking-tighter mb-6">
          Think.<br />Build.<br />Explore.
        </h1>
        
        <p className="font-mono text-base md:text-lg mb-8 max-w-md leading-relaxed text-gray-800">
          A place where I share my thoughts, technical stuff, unconventional ideas and everything I find interesting.
        </p>
        
        <div className="flex flex-wrap gap-4 mb-8">
          <Link href="/blog">
            <BrutalButton variant="primary">
              Explore Posts <ArrowRight size={18} strokeWidth={3} />
            </BrutalButton>
          </Link>
          
          <Link href="/about">
            <BrutalButton variant="neutral">
              About Me <ArrowDown size={18} strokeWidth={3} />
            </BrutalButton>
          </Link>
        </div>
        
        {/* Social Icons (Footer of Hero Left) */}
        <div className="flex gap-4 items-center mt-auto">
          <span className="text-xs font-bold uppercase tracking-wider">Join the conversation</span>
          <div className="flex gap-2">
            {[
              { icon: Github, href: "https://github.com/Priyadharshan-19" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/m-priyadharshan" },
              { icon: Instagram, href: "https://www.instagram.com/__itz_dharshan__?igsh=M3FpbjU5NDVoMDgz" },
              { icon: Mail, href: "mailto:priyadharshan80q@gmail.com" }
            ].map((social, i) => (
              <a 
                key={i} 
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="border-4 border-black p-2 bg-white rounded-[5px] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-brutal-sm transition-all shadow-[2px_2px_0_0_#000] cursor-pointer"
              >
                <social.icon size={18} strokeWidth={2.5} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="bg-brand-pink border-t-4 md:border-t-0 md:border-l-4 border-black p-8 md:p-12 relative flex items-center justify-center min-h-[500px] overflow-hidden">
        <div className="absolute top-6 right-6">
          <svg width="40" height="40" viewBox="0 0 100 100" className="opacity-100">
            <line x1="20" y1="50" x2="60" y2="20" stroke="black" strokeWidth="6" strokeLinecap="round"/>
            <line x1="40" y1="80" x2="80" y2="50" stroke="black" strokeWidth="6" strokeLinecap="round"/>
            <line x1="60" y1="90" x2="90" y2="70" stroke="black" strokeWidth="6" strokeLinecap="round"/>
          </svg>
        </div>
        
        <div className="relative w-full max-w-[320px] aspect-[4/5] z-10">
          <div className="absolute inset-0 bg-brand-lime border-4 border-black translate-x-4 translate-y-4"></div>
          <motion.div 
            whileHover={{ scale: 1.02, rotate: -2, transition: { type: "spring", stiffness: 200 } }}
            className="absolute inset-0 border-4 border-black bg-gray-800 overflow-hidden z-10"
          >
            <img 
              src="/image_a5b3a6.jpg" 
              alt="Priya Dharshan" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>
        </div>
        
        <div className="absolute bottom-8 right-4 md:right-8 z-20 border-4 border-black bg-brand-purple text-white p-6 w-[280px] shadow-brutal transition-transform hover:-translate-y-2 hover:-translate-x-2 hover:shadow-brutal-hover">
          <div className="font-mono text-brand-lime mb-4 text-sm font-bold">&gt; whoami</div>
          <div className="font-mono text-sm space-y-2">
            <div className="flex"><span className="w-16 opacity-80">name:</span> <span>Priyadharshan</span></div>
            <div className="flex"><span className="w-16 opacity-80">role:</span> <span>Student & Builder</span></div>
            <div className="flex"><span className="w-16 opacity-80">focus:</span> <span>Tech | Ideas | Impact</span></div>
            <div className="flex"><span className="w-16 opacity-80">motto:</span> <span>Keep Exploring</span></div>
          </div>
          <div className="w-3 h-4 bg-brand-lime animate-pulse mt-4"></div>
        </div>
      </div>
    </section>
  );
}