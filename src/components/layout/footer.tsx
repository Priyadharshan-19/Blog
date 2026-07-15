import React from 'react';
import Link from 'next/link';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="brutal-border bg-white flex flex-col md:flex-row items-center justify-between overflow-hidden shadow-brutal-sm mt-auto">
      {/* Left Logo */}
      <Link
        href="/"
        className="bg-brand-lime font-black uppercase px-6 py-4 border-b-4 md:border-b-0 md:border-r-4 border-black w-full md:w-auto text-center hover:bg-[#b5f02c] transition-colors"
      >
        &gt;&gt; PRIYA DHARSHAN
      </Link>

      {/* Center Copyright */}
      <div className="font-mono text-xs py-4 px-6 font-bold text-center w-full md:w-auto">
        &copy; {currentYear} Priya Dharshan. All rights reserved.
      </div>

      {/* Right Socials */}
      <div className="flex border-t-4 md:border-t-0 md:border-l-4 border-black w-full md:w-auto shrink-0">
        <a
          href="#"
          className="p-4 border-r-4 border-black hover:bg-brand-pink transition-colors flex-1 flex justify-center"
        >
          <FaGithub size={20} />
        </a>

        <a
          href="#"
          className="p-4 border-r-4 border-black hover:bg-brand-purple hover:text-white transition-colors flex-1 flex justify-center"
        >
          <FaLinkedin size={20} />
        </a>

        <a
          href="#"
          className="p-4 border-r-4 border-black hover:bg-[#FFD166] transition-colors flex-1 flex justify-center"
        >
          <FaXTwitter size={20} />
        </a>

        <a
          href="#"
          className="p-4 hover:bg-brand-lime transition-colors flex-1 flex justify-center"
        >
          <Mail size={20} strokeWidth={2.5} />
        </a>
      </div>
    </footer>
  );
}