import { Github, Linkedin, Instagram, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="brutal-border bg-white flex flex-col md:flex-row items-center justify-between rounded-[10px] overflow-hidden mb-8 shadow-brutal-sm mt-16">
      
      {/* EXPANDED GREEN BOX: Both quotes bold and enclosed in quotes */}
      <div className="bg-brand-lime font-black uppercase px-6 py-4 border-b-4 md:border-b-0 md:border-r-4 border-black flex items-center gap-4 w-full md:w-auto">
        <span className="text-lg">›_</span>
        <span className="tracking-tighter whitespace-nowrap">
          "கற்றது  கைமண்ணளவு  கல்லாதது  உலகளவு"
        </span>
      </div>

      {/* WHITE BOX: Copyright */}
      <div className="flex-1 px-6 py-4 text-xs font-mono font-bold text-black uppercase text-center md:text-right">
        <p>© 2026 PRIYA DHARSHAN.</p>
      </div>

      {/* Social Icons: With updated links and baby pink hover */}
      <div className="flex items-center border-t-4 md:border-t-0 md:border-l-4 border-black">
        <a href="https://github.com/Priyadharshan-19" target="_blank" rel="noopener noreferrer" className="p-4 border-r-4 border-black hover:bg-[#ffc0cb] transition-colors"><Github size={20} /></a>
        <a href="https://www.linkedin.com/in/m-priyadharshan" target="_blank" rel="noopener noreferrer" className="p-4 border-r-4 border-black hover:bg-[#ffc0cb] transition-colors"><Linkedin size={20} /></a>
        <a href="https://www.instagram.com/__itz_dharshan__?igsh=M3FpbjU5NDVoMDgz" target="_blank" rel="noopener noreferrer" className="p-4 border-r-4 border-black hover:bg-[#ffc0cb] transition-colors"><Instagram size={20} /></a>
        <a href="mailto:your@email.com" className="p-4 hover:bg-[#ffc0cb] transition-colors"><Mail size={20} /></a>
      </div>
    </footer>
  );
}