import { Header } from '../components/Header';
import { SolutionsCatalogue } from '../components/SolutionsCatalogue';
import { SolutionsStats } from '../components/SolutionsStats';
import { MediaSection } from '../components/MediaSection';
import { Footer } from '../components/Footer';
import { ScrollToTop } from '../components/ScrollToTop';

export function NosSolutions() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main>
                <SolutionsCatalogue />
            </main>
            <Footer />
            <ScrollToTop />
        </div>
    );
}
