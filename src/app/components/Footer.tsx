export function Footer() {
  return (
    <footer className="w-full py-12 px-8 bg-[#FAF9F6] border-t border-[#1F2937]/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-[#1F2937]/60 text-sm" style={{ fontWeight: 300 }}>
              © 2026 Eunoia. All rights reserved.
            </p>
          </div>
          
          <div className="flex gap-8">
            <a 
              href="#privacy" 
              className="text-[#1F2937]/60 hover:text-[#8B9DC3] text-sm transition-colors"
              style={{ fontWeight: 300 }}
            >
              Privacy Policy
            </a>
            <a 
              href="#terms" 
              className="text-[#1F2937]/60 hover:text-[#8B9DC3] text-sm transition-colors"
              style={{ fontWeight: 300 }}
            >
              Terms of Use
            </a>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-[#1F2937]/60 text-sm" style={{ fontWeight: 300 }}>
              Powered by ElevenLabs Agents
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
