import { Heart } from 'lucide-react';

export function Header() {
  return (
    <header className="w-full py-6 px-8 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#8B9DC3] to-[#FFB7B2] flex items-center justify-center">
            <Heart className="w-5 h-5 text-white" fill="white" />
          </div>
          <div>
            <h1 className="text-2xl tracking-wide text-[#1F2937]" style={{ fontWeight: 300 }}>Eunoia</h1>
            <p className="text-xs text-[#1F2937]/60">A calming space for your mind and emotions</p>
          </div>
        </div>
        
        <nav className="flex gap-8">
          <a href="#home" className="text-[#1F2937]/70 hover:text-[#8B9DC3] transition-colors" style={{ fontWeight: 300 }}>
            Home
          </a>
          <a href="#resources" className="text-[#1F2937]/70 hover:text-[#8B9DC3] transition-colors" style={{ fontWeight: 300 }}>
            Resources
          </a>
          <a href="#about" className="text-[#1F2937]/70 hover:text-[#8B9DC3] transition-colors" style={{ fontWeight: 300 }}>
            About
          </a>
        </nav>
      </div>
    </header>
  );
}
