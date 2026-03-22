import { Phone, AlertCircle } from 'lucide-react';

export function CrisisSupport() {
  return (
    <section className="w-full py-16 px-8 bg-gradient-to-br from-[#8B9DC3]/5 to-[#FFB7B2]/5">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-[#FFB7B2]/20 flex items-center justify-center">
            <AlertCircle className="w-8 h-8 text-[#FFB7B2]" />
          </div>
        </div>
        
        <h3 
          className="text-2xl mb-6 text-[#1F2937]" 
          style={{ fontWeight: 300 }}
        >
          If you need immediate support
        </h3>
        
        <div 
          className="inline-flex items-center gap-3 px-8 py-4 bg-white mb-6 shadow-md"
          style={{ borderRadius: '20px' }}
        >
          <Phone className="w-6 h-6 text-[#8B9DC3]" />
          <span className="text-2xl text-[#1F2937]" style={{ fontWeight: 400 }}>
            1-800-273-8255
          </span>
        </div>
        
        <p className="text-[#1F2937]/70 max-w-2xl mx-auto" style={{ fontWeight: 300 }}>
          Eunoia is a companion, not a crisis service. If you're experiencing a mental health crisis 
          or thoughts of self-harm, please reach out to professional crisis services immediately. 
          You deserve immediate, qualified support.
        </p>
      </div>
    </section>
  );
}
