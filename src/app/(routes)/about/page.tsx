import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { BrutalCard } from '@/components/ui/brutal-card';

export default function AboutPage() {
  return (
    <div className="min-h-screen max-w-[1400px] mx-auto px-4 py-8 flex flex-col">
      <Header />
      
      <main className="flex-1 w-full max-w-4xl mx-auto mb-16 pt-8">
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter border-b-4 border-black pb-8 mb-8">
          ABOUT ME
        </h1>
        
        <BrutalCard className="p-8 md:p-12 bg-white space-y-6 font-mono text-lg leading-relaxed">
          <p>
            Hey, I'm <span className="font-black bg-brand-lime px-2 border-2 border-black">Priya Dharshan</span>.
          </p>
          <p>
            I am a Student & Builder focusing on Tech, Ideas, and Impact. This space is my digital garden where I document my technical deep dives, project build logs, and unfiltered thoughts on everything from AI to politics.
          </p>
          <p>
            When I'm not coding, I'm usually exploring unconventional ideas or going on random side quests. 
          </p>
          <div className="pt-8 border-t-4 border-black mt-8">
            <h3 className="font-black text-2xl uppercase mb-4 font-sans">Let's Connect</h3>
            <ul className="space-y-2">
              <li>&gt; <a href="mailto:priyadharshan80q@gmail.com" className="font-bold underline decoration-4 decoration-brand-pink underline-offset-4 hover:bg-brand-pink">priyadharshan80q@gmail.com</a></li>
              <li>&gt; <a href="https://github.com/Priyadharshan-19" target="_blank" className="font-bold underline decoration-4 decoration-brand-pink underline-offset-4 hover:bg-brand-pink">GitHub</a></li>
              <li>&gt; <a href="https://www.linkedin.com/in/m-priyadharshan" target="_blank" className="font-bold underline decoration-4 decoration-brand-pink underline-offset-4 hover:bg-brand-pink">LinkedIn</a></li>
            </ul>
          </div>
        </BrutalCard>
      </main>

      <Footer />
    </div>
  );
}