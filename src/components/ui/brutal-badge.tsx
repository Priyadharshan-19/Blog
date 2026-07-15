import React from 'react';
import { cn } from '@/lib/utils';

interface BrutalBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'warning';
  children: React.ReactNode;
}

export function BrutalBadge({ 
  className, 
  variant = 'accent', 
  children, 
  ...props 
}: BrutalBadgeProps) {
  
  const variants = {
    primary: 'bg-brand-lime text-black',
    secondary: 'bg-brand-pink text-black',
    accent: 'bg-brand-purple text-white',
    warning: 'bg-[#FFD166] text-black',
  };

  return (
    <span
      className={cn(
        "text-xs font-bold uppercase px-3 py-1 rounded inline-flex w-max border-2 border-black",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}