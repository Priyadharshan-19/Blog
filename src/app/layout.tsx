import type { Metadata } from "next";
import "./globals.css"; 
import { CommandPalette } from "@/components/layout/command-palette";

export const metadata: Metadata = {
  title: "Priyadharshan | Think. Build. Explore.",
  description: "A place where I share my thoughts, technical stuff, unconventional ideas and everything I find interesting.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="antialiased min-h-screen relative flex flex-col">
        {/* Mount the command palette globally */}
        <CommandPalette />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
} 