import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ScrollToTop } from '../components/ScrollToTop';

export function PolitiqueConfidentialite() {
    return (
        <div className="min-h-screen bg-[#fae6e9] flex flex-col">
            <Header />
            <main className="flex-grow pt-32 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <h1 className="text-3xl md:text-4xl font-black uppercase mb-4 text-center">Politique de confidentialité</h1>
                    <p className="text-center text-gray-600 mb-8 font-medium">Mise à jour le 12 novembre 2025</p>

                    <div className="space-y-8 font-medium">
                        <section>
                            <h2 className="text-xl md:text-2xl font-bold mb-4 uppercase">PRÉAMBULE</h2>
                            <p className="mb-4">La présente politique de confidentialité (ci-après la « Politique ») s’applique à la relation entre la société HappyDarons, société par actions simplifiée, et toute personne naviguant sur le site internet www.happydarons.fr (ci-après le « Site »).</p>
                            <p className="mb-4">Elle précise les conditions dans lesquelles HappyDarons collecte, utilise, conserve et protège les données à caractère personnel des visiteurs et utilisateurs du Site.</p>
                            <p className="mb-4">Cette Politique s’inscrit dans le cadre des Conditions Générales d’Utilisation du Site accessibles ici.</p>
                            <p>HappyDarons agit en qualité de responsable de traitement au sens du Règlement (UE) 2016/679 du 27 avril 2016 (RGPD) et de la loi « Informatique et Libertés » du 6 janvier 1978 modifiée.</p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold mb-4 uppercase">IDENTITÉ DU RESPONSABLE DE TRAITEMENT</h2>
                            <p>HappyDarons SAS</p>
                            <p>Société par actions simplifiée au capital de 1 000 euros</p>
                            <p>Siège social : 34 RUE DECAZES, 13007 MARSEILLE</p>
                            <p>Immatriculée au RCS de Marseille sous le numéro 992 896 928</p>
                            <p>Numéro de TVA intracommunautaire : FR52992896928</p>
                            <p>📧 Contact : hello@happydarons.fr</p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold mb-4 uppercase">NATURE DES DONNÉES COLLECTÉES</h2>
                            <p>HappyDarons peut être amenée à collecter les données suivantes :</p>
                            <ul className="list-disc pl-5 mt-2 mb-4 space-y-1">
                                <li>Nom et prénom,</li>
                                <li>Adresse e-mail,</li>
                                <li>Contenu du message envoyé via le formulaire de contact,</li>
                                <li>Données de navigation (adresse IP, identifiant de l’appareil, navigateur utilisé),</li>
                                <li>Données statistiques relatives à la fréquentation du Site (via Google Analytics ou équivalent).</li>
                            </ul>
                            <p>HappyDarons veille à limiter la collecte des données personnelles au strict nécessaire pour les finalités décrites ci-dessous.</p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold mb-4 uppercase">FINALITÉS ET BASES LÉGALES DES TRAITEMENTS</h2>
                            <p className="mb-2">Les données collectées sur le Site sont utilisées pour :</p>
                            <ul className="list-disc pl-5 mt-2 mb-4 space-y-1">
                                <li>répondre aux demandes adressées via le formulaire de contact,</li>
                                <li>gérer les inscriptions à la newsletter ou aux communications d’information,</li>
                                <li>améliorer le contenu et la navigation du Site.</li>
                            </ul>
                            <p className="mb-2">Les traitements reposent sur :</p>
                            <ul className="list-disc pl-5 mt-2 mb-4 space-y-1">
                                <li>le consentement de la personne concernée (article 6-1 a) du RGPD),</li>
                                <li>l’intérêt légitime de HappyDarons à promouvoir son activité et améliorer ses services (article 6-1 f) du RGPD),</li>
                                <li>ou le respect d’obligations légales (article 6-1 c) du RGPD).</li>
                            </ul>
                            <p>Le consentement peut être retiré à tout moment en écrivant à : <a href="mailto:hello@happydarons.fr" className="underline hover:text-[#ffa6bf]">hello@happydarons.fr</a></p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold mb-4 uppercase">MESURES DE SÉCURITÉ</h2>
                            <p className="mb-4">HappyDarons met en œuvre des mesures techniques et organisationnelles appropriées pour assurer la sécurité, la confidentialité et l’intégrité des données personnelles collectées, afin d’éviter toute perte, altération ou accès non autorisé.</p>
                            <p>L’accès aux données est strictement limité aux personnes habilitées et aux prestataires techniques nécessaires au fonctionnement du Site.</p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold mb-4 uppercase">DESTINATAIRES ET TRANSFERT DES DONNÉES</h2>
                            <p className="mb-2">Les données sont susceptibles d’être communiquées uniquement :</p>
                            <ul className="list-disc pl-5 mt-2 mb-4 space-y-1">
                                <li>aux membres autorisés de l’équipe HappyDarons,</li>
                                <li>à l’hébergeur du site : Infomaniak Network SA, Rue Eugène-Marziano 25, 1227 Les Acacias (Genève), Suisse,</li>
                                <li>à des prestataires techniques intervenant pour la maintenance du Site,</li>
                                <li>aux autorités administratives ou judiciaires, sur demande légale.</li>
                            </ul>
                            <p>Les données sont hébergées en Suisse, un pays reconnu par la Commission européenne comme assurant un niveau de protection adéquat des données personnelles.</p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold mb-4 uppercase">DURÉE DE CONSERVATION</h2>
                            <p className="mb-2">Les données sont conservées uniquement le temps nécessaire à la finalité du traitement :</p>
                            <ul className="list-disc pl-5 mt-2 mb-4 space-y-1">
                                <li>Formulaire de contact : jusqu’à 3 ans après le dernier échange,</li>
                                <li>Newsletter : jusqu’à la désinscription de l’utilisateur,</li>
                                <li>Cookies et statistiques : 13 mois maximum.</li>
                            </ul>
                            <p>Au-delà de ces durées, les données sont supprimées ou anonymisées.</p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold mb-4 uppercase">DROITS DES UTILISATEURS</h2>
                            <p className="mb-2">Conformément au RGPD, toute personne concernée dispose des droits suivants :</p>
                            <ul className="list-disc pl-5 mt-2 mb-4 space-y-1">
                                <li>droit d’accès, de rectification ou d’effacement de ses données,</li>
                                <li>droit à la limitation du traitement ou à l’opposition,</li>
                                <li>droit à la portabilité des données,</li>
                                <li>droit de définir des directives sur le sort de ses données après son décès.</li>
                            </ul>
                            <div className="mb-4">
                                <p>Pour exercer ces droits :</p>
                                <p>📧 <a href="mailto:hello@happydarons.fr" className="underline hover:text-[#ffa6bf]">hello@happydarons.fr</a></p>
                                <p>Par courrier : HappyDarons – 34 RUE DECAZES, 13007 MARSEILLE</p>
                            </div>
                            <p className="mb-4">HappyDarons répondra à toute demande dans un délai d’un mois (prolongeable de deux mois selon la complexité du dossier).</p>
                            <p>En cas de désaccord, l’utilisateur peut introduire une réclamation auprès de la CNIL (www.cnil.fr).</p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold mb-4 uppercase">COOKIES</h2>
                            <p className="mb-4">Lors de la navigation sur le Site, des cookies peuvent être déposés sur le terminal de l’utilisateur.</p>
                            <p className="mb-2">Types de cookies utilisés :</p>
                            <ul className="list-disc pl-5 mt-2 mb-4 space-y-1">
                                <li>Cookies techniques : nécessaires au bon fonctionnement du Site,</li>
                                <li>Cookies de confort : permettent d’enregistrer les préférences de navigation,</li>
                                <li>Cookies de mesure d’audience : servent à analyser la fréquentation du Site et améliorer l’expérience utilisateur.</li>
                            </ul>
                            <p className="mb-4">Un bandeau d’information s’affiche dès la première visite, permettant d’accepter ou de refuser les cookies non essentiels.</p>
                            <p className="mb-2">La durée maximale de conservation des cookies est de 13 mois.</p>
                            <p className="mb-4">Les données issues de la mesure d’audience sont conservées 24 mois maximum.</p>
                            <p className="mb-4">L’utilisateur peut gérer ses préférences à tout moment depuis son navigateur.</p>
                            <p>Pour plus d’informations, consulter le site de la CNIL : www.cnil.fr.</p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold mb-4 uppercase">MODIFICATION DE LA POLITIQUE</h2>
                            <p>HappyDarons se réserve le droit de modifier la présente Politique à tout moment.</p>
                            <p>Toute mise à jour fera l’objet d’une mention spécifique sur le Site, accompagnée de la nouvelle date de mise à jour.</p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
            <ScrollToTop />
        </div>
    );
}
