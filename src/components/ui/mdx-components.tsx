import React from "react";
import * as runtime from "react/jsx-runtime";
import { CopyButton } from './copy-button'; // Added import for the copy button

const components = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className="mt-8 mb-6 text-4xl md:text-5xl font-black uppercase tracking-tight leading-tight"
      {...props}
    />
  ),

  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="mt-10 mb-4 border-b-4 border-black pb-2 text-3xl font-black uppercase tracking-tight"
      {...props}
    />
  ),

  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className="mt-8 mb-4 text-2xl font-black uppercase"
      {...props}
    />
  ),

  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className="mb-6 font-mono text-base leading-relaxed text-gray-900 md:text-lg"
      {...props}
    />
  ),

  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      className="font-bold underline decoration-4 decoration-brand-pink underline-offset-4 hover:bg-brand-pink transition-colors"
      {...props}
    />
  ),

  blockquote: (
    props: React.BlockquoteHTMLAttributes<HTMLQuoteElement>
  ) => (
    <blockquote
      className="my-8 border-4 border-black bg-brand-lime p-6 text-xl font-bold shadow-brutal-sm"
      {...props}
    />
  ),

  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul
      className="mb-6 ml-6 list-disc space-y-2 font-mono"
      {...props}
    />
  ),

  li: (props: React.LiHTMLAttributes<HTMLLIElement>) => (
    <li
      className="ml-4 marker:text-brand-purple marker:font-bold"
      {...props}
    />
  ),

  /* ---------------- Inline code ---------------- */

  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code
      className="rounded border-2 border-black bg-brand-purple px-1.5 py-0.5 font-mono text-sm text-white"
      {...props}
    />
  ),

  /* ---------------- rehype-pretty-code ---------------- */

  figure: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <figure 
      className="mb-6 mt-4 border-4 border-black bg-[#0d1117] shadow-brutal overflow-hidden relative group" 
      {...props} 
    />
  ),

  figcaption: (props: React.HTMLAttributes<HTMLElement>) => (
    <figcaption
      className="flex items-center justify-between border-b-4 border-black bg-brand-purple px-4 py-2 font-mono text-xs text-white"
      {...props}
    />
  ),

  pre: ({ className, children, ...props }: React.HTMLAttributes<HTMLPreElement>) => {
    // Extract the raw text from the code block to pass to our copy button
    // @ts-ignore - React nodes can be tricky to type safely here
    const rawText = children?.props?.children?.toString() || '';
    
    return (
      <>
        <CopyButton text={rawText} />
        <pre className="p-4 pt-12 overflow-x-auto text-sm font-mono leading-relaxed text-gray-100" {...props}>
          {children}
        </pre>
      </>
    );
  },
};

interface MDXContentProps {
  code: string;
}

export function MDXContent({ code }: MDXContentProps) {
  const fn = new Function(code);

  const { default: Component } = fn(runtime);

  return (
    <div className="prose prose-neutral max-w-none">
      <Component components={components} />
    </div>
  );
}