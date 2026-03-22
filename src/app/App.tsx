import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { HowItWorks } from './components/HowItWorks';
import { Resources } from './components/Resources';
import { CrisisSupport } from './components/CrisisSupport';
import { Footer } from './components/Footer';
import { ElevenLabsWidget } from './components/ElevenLabsWidget';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <Header />
      <main>
        <HeroSection />
        <HowItWorks />
        <Resources />
        <CrisisSupport />
      </main>
      <Footer />
      <ElevenLabsWidget />
    </div>
  );
}
