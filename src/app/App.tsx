import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustedBy } from './components/TrustedBy';
import { PlatformSection } from './components/PlatformSection';
import { ForParents } from './components/ForParents';
import { ConstatSection } from './components/ConstatSection';
import { ForHR } from './components/ForHR';
import { MediaSection } from './components/MediaSection';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { ContactCTA } from './components/ContactCTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#fae6e9]">
      <Header />
      <main>
        <Hero />
        <TrustedBy />
        <PlatformSection />
        <ForParents />
        <ConstatSection />
        <ForHR />
        <MediaSection />
        <Testimonials />
        <FAQ />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
