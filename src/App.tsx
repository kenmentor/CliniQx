import SiteHeader from '@/Components/Landing/SiteHeader';
import Hero from '@/Components/Landing/Hero';
import EcosystemStrip from '@/Components/Landing/EcosystemStrip';
import Challenges from '@/Components/Landing/Challenges';
import Pillars from '@/Components/Landing/Pillars';
import { Markets, Impact } from '@/Components/Landing/Depth';
import Proof from '@/Components/Landing/Proof';
import { FinalCTA, SiteFooter } from '@/Components/Landing/Closing';

// Public scroll only — builder sections (Domains, Architecture, Roadmap,
// Partnership) live in the partner room, never in front of patients.
function App() {
  return (
    <div className="min-w-[280px] min-h-screen bg-background text-ink antialiased">
      <SiteHeader />
      <main>
        <Hero />
        <EcosystemStrip />
        <Challenges />
        <Pillars />
        <Markets />
        <Impact />
        <Proof />
        <FinalCTA />
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;
