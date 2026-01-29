import { Header } from '../components/Header';
import { SolutionsHero } from '../components/SolutionsHero';
import { SolutionsStats } from '../components/SolutionsStats';
import { SolutionsFeatures } from '../components/SolutionsFeatures';
import { Footer } from '../components/Footer';
import { ScrollToTop } from '../components/ScrollToTop';

export function NosSolutions() {
    return (
        <div className="min-h-screen bg-[#fae6e9]">
            <Header />
            <main>
                <SolutionsHero />
                <SolutionsStats />
                <SolutionsFeatures />
            </main>
            <Footer />
            <ScrollToTop />
        </div>
    );
}
