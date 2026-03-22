import { MessageCircle, Type, Heart } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      icon: MessageCircle,
      title: 'Tap the chat bubble',
      description: 'Start a conversation whenever you need support'
    },
    {
      icon: Type,
      title: 'Speak or type your thoughts',
      description: 'Express yourself in whatever way feels comfortable'
    },
    {
      icon: Heart,
      title: 'Eunoia listens and responds with warmth',
      description: 'Receive empathetic, thoughtful responses tailored to you'
    }
  ];

  return (
    <section className="w-full py-20 px-8 bg-[#FAF9F6]">
      <div className="max-w-6xl mx-auto">
        <h3 
          className="text-3xl text-center mb-16 text-[#1F2937]" 
          style={{ fontWeight: 300 }}
        >
          How It Works
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#8B9DC3] to-[#8dc1e3] flex items-center justify-center mb-6 shadow-lg">
                <step.icon className="w-10 h-10 text-white" />
              </div>
              <h4 className="mb-3 text-[#1F2937]" style={{ fontWeight: 400 }}>
                {step.title}
              </h4>
              <p className="text-[#1F2937]/70" style={{ fontWeight: 300 }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
