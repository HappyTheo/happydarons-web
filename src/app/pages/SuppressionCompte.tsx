import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ScrollToTop } from '../components/ScrollToTop';

/**
 * Page publique de suppression de compte.
 *
 * Exigée par Google Play (formulaire « Sécurité des données ») en plus du
 * parcours dans l'application : elle doit être accessible sans connexion et
 * expliquer comment supprimer son compte, ce qui est effacé et ce qui est
 * conservé.
 */
export function SuppressionCompte() {
    return (
        <div className="min-h-screen bg-[#fae6e9] flex flex-col">
            <Header />
            <main className="flex-grow pt-32 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <h1 className="text-3xl md:text-4xl font-black uppercase mb-8 text-center">Supprimer mon compte</h1>

                    <div className="space-y-8 font-medium">
                        <section>
                            <p>
                                Cette page explique comment supprimer votre compte <strong>HappyDarons</strong>,
                                l'application éditée par HappyDarons SAS, ainsi que les données associées.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold mb-4 uppercase">Depuis l'application</h2>
                            <p className="mb-4">La suppression est immédiate et ne nécessite aucune démarche auprès de nous.</p>
                            <ol className="list-decimal pl-5 space-y-2">
                                <li>Ouvrez l'application HappyDarons et connectez-vous.</li>
                                <li>Touchez votre avatar, en haut à droite, pour ouvrir votre profil.</li>
                                <li>Touchez <strong>« Supprimer mon compte »</strong>, sous « Se déconnecter ».</li>
                                <li>Saisissez l'adresse e-mail de votre compte pour confirmer.</li>
                                <li>Touchez <strong>« Supprimer définitivement mon compte »</strong>.</li>
                            </ol>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold mb-4 uppercase">Sans accès à l'application</h2>
                            <p>
                                Écrivez-nous à <strong>hello@happydarons.fr</strong> depuis l'adresse e-mail associée
                                à votre compte, avec pour objet « Suppression de compte ». Nous traitons la demande
                                dans un délai de 30 jours et vous confirmons la suppression par retour d'e-mail.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold mb-4 uppercase">Données supprimées</h2>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>votre compte et vos informations de profil (nom, adresse e-mail, préférences) ;</li>
                                <li>les informations sur vos enfants et votre foyer, si vous en êtes le dernier membre ;</li>
                                <li>vos rendez-vous, ateliers et échanges avec l'assistant ;</li>
                                <li>votre journal d'humeur, vos notes, contenus enregistrés et rappels ;</li>
                                <li>vos notifications et calendriers connectés ;</li>
                                <li>vos crédits non utilisés, qui ne sont ni remboursables ni transférables.</li>
                            </ul>
                            <p className="mt-4">
                                Si vous partagez un foyer avec d'autres membres, les données du foyer et des enfants
                                restent accessibles aux membres restants.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold mb-4 uppercase">Données conservées</h2>
                            <p>
                                Les justificatifs de paiement (montant, date, référence de transaction) sont conservés
                                <strong> 10 ans</strong>, conformément à l'obligation légale de conservation des
                                pièces comptables (article L123-22 du Code de commerce). Ils sont dissociés de votre
                                identité au moment de la suppression : aucun lien avec votre nom ou votre adresse
                                e-mail n'est conservé.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold mb-4 uppercase">Contact</h2>
                            <p>HappyDarons SAS — 34 rue Decazes, 13007 Marseille</p>
                            <p>hello@happydarons.fr</p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
            <ScrollToTop />
        </div>
    );
}
