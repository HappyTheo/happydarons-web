import { Header } from '../components/Header';
import { SolutionsHero } from '../components/SolutionsHero';
import { SolutionsStats } from '../components/SolutionsStats';
import { SolutionsFeatures } from '../components/SolutionsFeatures';
import { SolutionsCatalogue } from '../components/SolutionsCatalogue';
import { SolutionsBenefits } from '../components/SolutionsBenefits';
import { SolutionsWhyUs } from '../components/SolutionsWhyUs';
import { Footer } from '../components/Footer';
import { ScrollToTop } from '../components/ScrollToTop';

export function NosSolutions() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main>
                <SolutionsHero />
                <SolutionsWhyUs />
                <SolutionsFeatures />
                <SolutionsCatalogue />
                <SolutionsBenefits />
                <SolutionsStats />
            </main>
            <Footer />
            <ScrollToTop />
        </div>
    );
}
