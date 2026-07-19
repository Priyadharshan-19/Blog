"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BookOpen, Check } from "lucide-react";
import { TocItem } from "@/lib/toc";

interface TableOfContentsProps {
  toc: TocItem[];
}

export function TableOfContents({ toc }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    if (!toc.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-15% 0px -65% 0px",
        threshold: [0.2, 0.5],
      }
    );

    toc.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [toc]);

  if (!toc.length) return null;

  const activeIndex = toc.findIndex((t) => t.id === activeId);
  
  // UPDATED: Now includes all items in the progress bar
  const topLevel = toc; 

  return (
    <aside className="sticky top-24 w-[270px]">
      <div className="overflow-hidden rounded-2xl border-[3px] border-black bg-white shadow-[6px_6px_0_theme(colors.brand.pink)]">
        {/* Header */}
        <div className="flex items-center gap-2 border-b-[3px] border-black bg-brand-purple px-5 py-4 text-white">
          <BookOpen size={17} strokeWidth={2.5} />
          <h2 className="text-sm font-black uppercase tracking-[0.1em]">
            Article map
          </h2>
        </div>

        {/* Progress bar */}
        <div className="flex h-2.5 border-b-[3px] border-black">
          {topLevel.map((item, i) => {
            const globalIndex = toc.findIndex((t) => t.id === item.id);
            const passed = activeIndex !== -1 && globalIndex <= activeIndex;
            return (
              <div
                key={item.id}
                className={`flex-1 ${
                  passed ? "bg-black" : "bg-white"
                } ${i !== topLevel.length - 1 ? "border-r-[2px] border-black" : ""}`}
              />
            );
          })}
        </div>

        {/* Now reading */}
        {activeIndex !== -1 && (
          <div className="border-b-[3px] border-black px-5 py-3">
            <p className="mb-1 font-mono text-[10px] font-bold text-black/50">
              {String(activeIndex + 1).padStart(2, "0")} / {String(toc.length).padStart(2, "0")}
            </p>
            <p className="text-[13px] font-black leading-snug">
              {toc[activeIndex].text}
            </p>
          </div>
        )}

        {/* Full list */}
        <ul className="flex flex-col px-5 py-3">
          {toc.map((item, index) => {
            const active = item.id === activeId;
            const visited = activeIndex !== -1 && index < activeIndex;
            const isSub = item.level === 3;

            return (
              <li key={item.id}>
                <Link
                  href={`#${item.id}`}
                  className={`
                    flex items-center gap-2 py-1.5
                    ${isSub ? "pl-6" : ""}
                    ${active ? "text-black" : "text-black/70 hover:text-black"}
                  `}
                >
                  {visited && !active ? (
                    <Check size={12} strokeWidth={3} className="shrink-0 text-brand-teal" />
                  ) : (
                    <span className="w-3 shrink-0 font-mono text-[10px] font-bold">
                      {active ? "•" : ""}
                    </span>
                  )}
                  <span
                    className={`
                      ${isSub ? "text-[12px]" : "text-[13px]"}
                      ${active ? "font-black" : "font-medium"}
                      leading-snug
                    `}
                  >
                    {item.text}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}