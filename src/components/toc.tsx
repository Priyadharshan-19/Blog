"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
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
        const visibleHeading = entries.find((entry) => entry.isIntersecting);

        if (visibleHeading) {
          setActiveId(visibleHeading.target.id);
        }
      },
      {
        rootMargin: "-20% 0px -70% 0px",
      }
    );

    toc.forEach((heading) => {
      const element = document.getElementById(heading.id);

      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [toc]);

  if (!toc.length) return null;

  return (
    <nav className="border-4 border-black bg-white shadow-brutal p-5 rounded-md">
      <h2 className="mb-5 text-sm font-black uppercase tracking-wide">
        Table of Contents
      </h2>

      <ul className="space-y-2">
        {toc.map((item) => {
          const active = activeId === item.id;

          return (
            <li
              key={item.id}
              className={item.level === 3 ? "ml-5" : ""}
            >
              <Link
                href={`#${item.id}`}
                className={`
                  block
                  rounded
                  border-2
                  border-black
                  px-3
                  py-2
                  text-xs
                  font-bold
                  uppercase
                  transition-all
                  duration-150

                  ${
                    active
                      ? "bg-brand-lime shadow-[3px_3px_0_0_#000] -translate-x-[2px] -translate-y-[2px]"
                      : "bg-white hover:bg-brand-pink hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[3px_3px_0_0_#000]"
                  }
                `}
              >
                {item.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}