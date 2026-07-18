'use client';

import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="absolute top-3 right-3 p-2 bg-white border-2 border-black hover:bg-brand-lime hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[2px_2px_0_0_#000] transition-all z-10"
      aria-label="Copy code"
    >
      {copied ? <Check size={16} strokeWidth={3} /> : <Copy size={16} strokeWidth={3} />}
    </button>
  );
}