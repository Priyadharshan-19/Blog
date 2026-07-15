import React from 'react';
import Image from 'next/image';

const components = {
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="mt-8 mb-6 text-4xl md:text-5xl font-black uppercase tracking-tight leading-tight" {...props} />
  ),
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="mt-10 mb-4 text-3xl font-black uppercase tracking-tight border-b-4 border-black pb-2" {...props} />
  ),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="mt-8 mb-4 text-2xl font-black uppercase" {...props} />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="mb-6 font-mono text-base md:text-lg leading-relaxed text-gray-900" {...props} />
  ),
  a: ({ className, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className="font-bold underline decoration-4 decoration-brand-pink underline-offset-4 hover:bg-brand-pink transition-colors" {...props} />
  ),
  blockquote: ({ className, ...props }: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => (
    <blockquote className="my-8 border-4 border-black bg-brand-lime p-6 text-xl font-bold shadow-brutal-sm" {...props} />
  ),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="mb-6 ml-6 list-none space-y-2 font-mono" {...props}>
      {React.Children.map(props.children, (child) => (
        <li className="flex gap-2">
          <span className="text-brand-purple font-black mt-1">>&gt;</span> 
          <span>{child}</span>
        </li>
      ))}
    </ul>
  ),
  code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <code className="bg-brand-purple text-white px-1.5 py-0.5 font-mono text-sm border-2 border-black" {...props} />
  ),
  pre: ({ className, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
    <pre className="mb-6 mt-4 overflow-x-auto border-4 border-black bg-gray-900 p-6 shadow-brutal text-brand-lime font-mono text-sm" {...props} />
  ),
};

interface MdxProps {
  code: string;
}

export function MDXContent({ code }: MdxProps) {
  // Velite compiles the MDX into a React function we can evaluate
  const Component = new Function('require', code)(require);
  
  return (
    <div className="w-full">
      <Component components={components} />
    </div>
  );
}