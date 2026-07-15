import { Header } from "@/components/layout/header";
import { HeroSection } from "@/components/home/hero-section";
import { CategoryGrid } from "@/components/home/category-grid";
import { FeaturedPosts } from "@/components/home/featured-posts";
import { Sidebar } from "@/components/layout/sidebar";
import { LatestTimeline } from "@/components/home/latest-timeline";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="min-h-screen max-w-[1400px] mx-auto px-4 py-8 flex flex-col">
      <Header />
      
      <main className="flex-1">
        <HeroSection />
        <CategoryGrid />
        
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <FeaturedPosts />
          </div>
          
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </section>
        
        <LatestTimeline />
      </main>

      <Footer />
    </div>
  );
}