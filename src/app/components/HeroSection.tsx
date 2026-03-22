export function HeroSection() {
  return (
    <section 
      className="relative w-full py-32 px-8 bg-cover bg-center"
      style={{
        backgroundImage: 'linear-gradient(rgba(139, 157, 195, 0.3), rgba(255, 183, 178, 0.2)), url(https://images.unsplash.com/photo-1768685639479-dd0f311eb36c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0JTIwcGFzdGVsJTIwYmx1ZSUyMGdyYWRpZW50JTIwcGVhY2VmdWx8ZW58MXx8fHwxNzczNTczOTc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)',
        backgroundBlendMode: 'overlay'
      }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 
          className="text-5xl mb-6 text-[#1F2937]" 
          style={{ fontWeight: 300, letterSpacing: '-0.02em' }}
        >
          Someone to listen, anytime you need.
        </h2>
        <p 
          className="text-xl text-[#1F2937]/80 max-w-2xl mx-auto" 
          style={{ fontWeight: 300 }}
        >
          Eunoia is your warm, empathetic AI companion. Talk freely, without judgment.
        </p>
      </div>
    </section>
  );
}
