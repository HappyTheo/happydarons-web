import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ScrollToTop } from '../components/ScrollToTop';
import { PartnerHero } from '../components/PartnerHero';
import { PartnerServices } from '../components/PartnerServices';
import { PartnerExperts } from '../components/PartnerExperts';

export function BecomePartner() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main>
                <PartnerHero />
                <PartnerServices />
                <PartnerExperts />
            </main>
            <Footer />
            <ScrollToTop />
        </div>
    );
}
