import React from 'react';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-4 border-black bg-white shadow-brutal mt-auto flex items-center">
      {/* Brand Section (Far Left) */}
      <div className="bg-brand-lime p-4 border-r-4 border-black font-black uppercase tracking-tighter flex items-center gap-2">
        <span>&gt;&gt;</span> PRIYA DHARSHAN
      </div>

      {/* Copyright/Middle Section (Center) */}
      <div className="flex-1 px-6 font-mono text-xs md:text-sm text-center">
        © {currentYear} Priya Dharshan. All rights reserved.
      </div>

      {/* Social Links (Far Right) */}
      <div className="flex border-l-4 border-black">
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
            className="p-4 border-l-4 border-black hover:bg-brand-pink transition-colors flex items-center justify-center"
          >
            <social.icon size={20} strokeWidth={2.5} />
          </a>
        ))}
      </div>
    </footer>
  );
}