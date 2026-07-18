'use client';

import React, { useState } from 'react';
import { Mail, Check, Paperclip } from 'lucide-react';
import { BrutalCard } from '@/components/ui/brutal-card';
import { BrutalButton } from '@/components/ui/brutal-button';

export function Sidebar() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus('success');
        setEmail('');
        // Reset to idle after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch (error) {
      console.error('Subscription error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <aside className="space-y-8 h-full">
      {/* Widget 1: Today's Note */}
      <BrutalCard className="bg-brand-lime p-6 relative">
        <Paperclip
          size={32}
          className="absolute -top-3 -right-2 rotate-12 text-black"
          strokeWidth={2}
        />

        <h3 className="font-black uppercase text-xl mb-4 tracking-tight">
          Today's Note
        </h3>

        <div className="font-mono bg-white p-4 border-4 border-black text-sm text-gray-800 shadow-[2px_2px_0_0_#000]">
          Stay curious.
          <br />
          Most interesting things happen outside the syllabus.
        </div>
      </BrutalCard>

      {/* Widget 2: What You'll Find Here */}
      <BrutalCard className="bg-brand-purple p-6 text-white">
        <h3 className="font-black uppercase text-xl mb-4 tracking-tight">
          What You'll Find Here
        </h3>

        <div className="bg-[#5B33D6] p-4 border-4 border-black text-sm font-mono space-y-3 shadow-[2px_2px_0_0_#000]">
          {[
            'Honest thoughts',
            'Technical deep dives',
            'Project build logs',
            'Unfiltered opinions',
            'Weird ideas',
            'Real experiments',
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="bg-brand-lime text-black p-0.5 rounded-sm border-2 border-black shrink-0">
                <Check size={14} strokeWidth={4} />
              </div>

              <span className="leading-tight">{item}</span>
            </div>
          ))}
        </div>
      </BrutalCard>

      {/* Widget 3: Newsletter */}
      <BrutalCard className="bg-brand-pink p-6">
        <h3 className="font-black uppercase text-xl mb-2 flex items-center gap-2 tracking-tight">
          <Mail size={22} strokeWidth={3} />
          Join My Newsletter
        </h3>

        <p className="font-mono text-sm mb-4 text-gray-900 leading-tight">
          Get new posts, ideas and random thoughts in your inbox.
        </p>

        <form className="space-y-4" onSubmit={handleSubscribe}>
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com" 
            className="w-full p-3 border-4 border-black font-mono text-sm focus:outline-none focus:ring-4 focus:ring-brand-purple focus:shadow-brutal transition-all" 
            required
            disabled={status === 'loading' || status === 'success'}
          />

          <BrutalButton 
            variant="primary" 
            className="w-full justify-center"
            type="submit"
            disabled={status === 'loading' || status === 'success'}
          >
            {status === 'loading' ? 'Subscribing...' : status === 'success' ? 'Joined! ✓' : 'Subscribe →'}
          </BrutalButton>

          {status === 'error' && (
            <p className="text-xs font-bold text-red-600 bg-white p-1 border-2 border-black inline-block">
              Failed to subscribe. Try again.
            </p>
          )}
        </form>
      </BrutalCard>
    </aside>
  );
}