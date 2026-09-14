import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { PlatformSection } from '../components/PlatformSection';
import { ForParents } from '../components/ForParents';
import { ForHR } from '../components/ForHR';
import { ConstatSection } from '../components/ConstatSection';
import { MediaSection } from '../components/MediaSection';
import { Testimonials } from '../components/Testimonials';
import { FAQ } from '../components/FAQ';
import { ContactCTA } from '../components/ContactCTA';
import { Footer } from '../components/Footer';
import { ScrollToTop } from '../components/ScrollToTop';

export function HomePage() {
    return (
        <div className="min-h-screen bg-[#fae6e9]">
            <Header />
            <main>
                <Hero />
                <PlatformSection />
                <ForParents />
                <ForHR />
                <ConstatSection />
                <Testimonials />
                <MediaSection />
                <FAQ />
                <ContactCTA />
            </main>
            <Footer />
            <ScrollToTop />
        </div>
    );
}
