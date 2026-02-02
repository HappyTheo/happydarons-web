import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ScrollToTop } from '../components/ScrollToTop';

export function MentionsLegales() {
    return (
        <div className="min-h-screen bg-[#fae6e9] flex flex-col">
            <Header />
            <main className="flex-grow pt-32 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <h1 className="text-3xl md:text-4xl font-black uppercase mb-8 text-center">Mentions Légales</h1>

                    <div className="space-y-8 font-medium">
                        <section>
                            <h2 className="text-xl md:text-2xl font-bold mb-4 uppercase">Informations générales</h2>
                            <p><strong>Site internet :</strong> https://happydarons.fr</p>
                            <p><strong>Éditeur du site :</strong> HappyDarons SAS</p>
                            <p><strong>Forme juridique :</strong> Société par actions simplifiée (SAS)</p>
                            <p><strong>Capital social :</strong> 1 000 euros</p>
                            <p><strong>Siège social :</strong> 34 RUE DECAZES, 13007 MARSEILLE</p>
                            <p><strong>Immatriculation :</strong> 992 896 928 R.C.S. Marseille</p>
                            <p><strong>Numéro de TVA intracommunautaire :</strong> FR52992896928</p>
                            <p><strong>Email de contact :</strong> hello@happydarons.fr</p>
                            <div className="mt-4">
                                <p><strong>Directrice de la publication :</strong> Laureen Cévaër, Tess Cévaër, co-fondatrices de HappyDarons</p>
                                <p><strong>Responsable de la rédaction :</strong> Laureen Cévaër, Tess Cévaër, co-fondatrices de HappyDarons</p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold mb-4 uppercase">Hébergement du site</h2>
                            <p>Le site happydarons.fr est hébergé par :</p>
                            <p className="mt-2 text-lg font-bold">Infomaniak Network SA</p>
                            <p>Rue Eugène-Marziano 25, 1227 Les Acacias (Genève), Suisse</p>
                            <p>📧 support@infomaniak.com | 🌐 www.infomaniak.com</p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold mb-4 uppercase">Propriété intellectuelle</h2>
                            <p className="mb-4">L’ensemble du contenu présent sur ce site (textes, images, graphismes, logos, icônes, sons, logiciels, etc.) est la propriété exclusive de HappyDarons, sauf mention contraire.</p>
                            <p className="mb-4">Toute reproduction, représentation, modification, publication ou adaptation, totale ou partielle, des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de HappyDarons.</p>
                            <p className="mb-4">Les images, photographies et illustrations utilisées sur ce site sont soit issues de créations internes, soit libres de droits, soit utilisées avec l’accord explicite de leur auteur.</p>
                            <p>Toute utilisation non autorisée est susceptible de constituer une contrefaçon au sens des articles L.335-2 et suivants du Code de la propriété intellectuelle.</p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold mb-4 uppercase">Données personnelles</h2>
                            <p className="mb-4">Conformément au Règlement Général sur la Protection des Données (RGPD), HappyDarons s’engage à assurer le meilleur niveau de protection de vos données personnelles.</p>

                            <h3 className="text-lg font-bold mt-4 mb-2">Responsable du traitement</h3>
                            <p>HappyDarons SAS</p>
                            <p>Email : hello@happydarons.fr</p>

                            <h3 className="text-lg font-bold mt-4 mb-2">Finalités de la collecte</h3>
                            <p>Les données collectées sur ce site ont pour objet :</p>
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                                <li>de répondre aux demandes adressées via le formulaire de contact,</li>
                                <li>de gérer les inscriptions à la newsletter ou aux communications d’information,</li>
                                <li>d’améliorer la qualité du contenu et la navigation sur le site.</li>
                            </ul>

                            <h3 className="text-lg font-bold mt-4 mb-2">Base légale du traitement</h3>
                            <p>Les traitements reposent :</p>
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                                <li>sur votre consentement (formulaires, newsletter),</li>
                                <li>ou sur l’intérêt légitime de HappyDarons à communiquer sur ses activités.</li>
                            </ul>

                            <h3 className="text-lg font-bold mt-4 mb-2">Durée de conservation</h3>
                            <p>Les données sont conservées pour une durée maximale de 3 ans après le dernier contact, sauf obligation légale contraire.</p>

                            <h3 className="text-lg font-bold mt-4 mb-2">Vos droits</h3>
                            <p className="mb-2">Conformément au RGPD et à la loi « Informatique et Libertés » modifiée, vous disposez des droits suivants :</p>
                            <ul className="list-disc pl-5 mt-2 mb-4 space-y-1">
                                <li>droit d’accès, de rectification, d’effacement et de portabilité de vos données,</li>
                                <li>droit d’opposition et de limitation du traitement,</li>
                                <li>droit de définir le sort de vos données après votre décès.</li>
                            </ul>
                            <p>Pour exercer vos droits, vous pouvez écrire à : <a href="mailto:hello@happydarons.fr" className="underline hover:text-[#ffa6bf]">hello@happydarons.fr</a></p>
                            <p>Vous pouvez également déposer une réclamation auprès de la CNIL (www.cnil.fr).</p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold mb-4 uppercase">Cookies</h2>
                            <p>Le site happydarons.fr utilise des cookies pour :</p>
                            <ul className="list-disc pl-5 mt-2 mb-4 space-y-1">
                                <li>mesurer l’audience et améliorer l’expérience utilisateur,</li>
                                <li>permettre le partage de contenus sur les réseaux sociaux,</li>
                                <li>personnaliser certaines fonctionnalités.</li>
                            </ul>
                            <p className="mb-2">Lors de votre première visite, un bandeau d’information vous permet d’accepter ou de refuser les cookies non essentiels.</p>
                            <p className="mb-2">Vous pouvez à tout moment modifier vos préférences dans les paramètres de votre navigateur.</p>
                            <p>Pour en savoir plus, consultez notre Politique de confidentialité et de gestion des cookies.</p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold mb-4 uppercase">Limitation de responsabilité</h2>
                            <p className="mb-2">HappyDarons ne saurait être tenue responsable des erreurs, omissions ou d’une indisponibilité temporaire du service.</p>
                            <p className="mb-2">HappyDarons s’efforce de fournir des informations aussi précises et à jour que possible mais ne garantit pas leur exhaustivité.</p>
                            <p>L’utilisation du site se fait sous la seule responsabilité de l’utilisateur.</p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold mb-4 uppercase">Droit applicable</h2>
                            <p className="mb-2">Les présentes mentions légales sont régies par le droit français.</p>
                            <p>En cas de litige, et à défaut de résolution amiable, les tribunaux compétents seront ceux de Marseille (France).</p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
            <ScrollToTop />
        </div>
    );
}
