import React from 'react';
import { cn } from '@/lib/utils';

interface BrutalButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'neutral';
  children: React.ReactNode;
}

export function BrutalButton({ 
  className, 
  variant = 'neutral', 
  children, 
  ...props 
}: BrutalButtonProps) {
  
  const variants = {
    primary: 'bg-brand-lime text-black',
    secondary: 'bg-brand-pink text-black',
    accent: 'bg-brand-purple text-white',
    neutral: 'bg-white text-black',
  };

  return (
    <button
      className={cn(
        "brutal-button px-6 py-3 flex items-center justify-center gap-2 w-max",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}