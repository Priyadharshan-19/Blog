import React from 'react';
import { cn } from '@/lib/utils';

interface BrutalCardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
  children: React.ReactNode;
}

export function BrutalCard({ 
  className, 
  hoverEffect = false, 
  children, 
  ...props 
}: BrutalCardProps) {
  return (
    <div
      className={cn(
        "brutal-card p-6",
        hoverEffect && "brutal-hover cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}