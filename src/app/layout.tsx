import type { Metadata } from "next";
import "./globals.css"; // Adjust path if your globals.css is in app/

export const metadata: Metadata = {
  title: "Priya Dharshan | Think. Build. Explore.",
  description: "A place where I share my thoughts, technical stuff, unconventional ideas and everything I find interesting.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen">
        {/* We will inject Header, CommandPalette, and Footer here in Phase 2 */}
        <main>{children}</main>
      </body>
    </html>
  );
}