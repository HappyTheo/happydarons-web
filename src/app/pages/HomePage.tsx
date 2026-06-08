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
import { Link } from 'react-router-dom';

export function HomePage() {
    return (
        <div className="min-h-screen bg-[#fae6e9]">
            <div className="bg-brand-green text-white text-center py-2 text-sm font-bold relative z-[60]">
                🚀 Retrouvez-nous à Vivatech ! <Link to="/vivatech" className="underline ml-1">Découvrir notre stand</Link>
            </div>
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
