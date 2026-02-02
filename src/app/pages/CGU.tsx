import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ScrollToTop } from '../components/ScrollToTop';

export function CGU() {
    return (
        <div className="min-h-screen bg-[#fae6e9] flex flex-col">
            <Header />
            <main className="flex-grow pt-32 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <h1 className="text-3xl md:text-4xl font-black uppercase mb-4 text-center">Conditions Générales d'Utilisation</h1>
                    <p className="text-center text-gray-600 mb-8 font-medium">Mise à jour le 12 novembre 2025</p>

                    <div className="space-y-8 font-medium">
                        <section>
                            <h2 className="text-xl md:text-2xl font-bold mb-4 uppercase">OBJET</h2>
                            <p className="mb-2">Les présentes Conditions Générales d’Utilisation (ci-après « CGU ») ont pour objet de définir :</p>
                            <ul className="list-disc pl-5 mt-2 mb-4 space-y-1">
                                <li>i) les conditions d’accès et d’utilisation du site internet www.happydarons.fr (ci-après le « Site ») par toute personne y accédant (ci-après « l’Utilisateur »),</li>
                                <li>ii) les droits et obligations respectifs de la société HappyDarons SAS et de l’Utilisateur.</li>
                            </ul>
                            <p className="mb-4">Le Site a pour vocation de présenter les activités, les offres et les services proposés par HappyDarons, notamment : des accompagnements professionnels autour de la parentalité, du bien-être et de l’équilibre vie professionnelle / vie personnelle, ainsi que des informations sur ses programmes, ateliers et actualités.</p>
                            <p className="mb-4">L’accès et l’utilisation du Site impliquent l’acceptation pleine et entière des présentes CGU.</p>
                            <p>En cas de désaccord avec celles-ci, l’Utilisateur doit cesser immédiatement toute utilisation du Site.</p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold mb-4 uppercase">IDENTITÉ DE L’ÉDITEUR</h2>
                            <p>HappyDarons SAS</p>
                            <p>Société par actions simplifiée au capital de 1 000 euros</p>
                            <p>Immatriculée au RCS de Marseille sous le numéro 992 896 928</p>
                            <p>Siège social : 34 RUE DECAZES, 13007 MARSEILLE</p>
                            <p>Numéro de TVA intracommunautaire : FR52992896928</p>
                            <p>Contact : hello@happydarons.fr</p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold mb-4 uppercase">CONDITIONS D’ACCÈS AUX SERVICES</h2>
                            <p className="mb-4">L’accès au Site est libre et gratuit pour tout Utilisateur disposant d’un accès à Internet.</p>
                            <p className="mb-4">Tous les frais liés à l’accès au Site (matériel informatique, connexion Internet, logiciels, etc.) sont à la charge de l’Utilisateur.</p>
                            <p className="mb-4">HappyDarons s’efforce d’assurer un accès continu au Site, mais ne peut garantir son fonctionnement ininterrompu, notamment en cas de maintenance, de mises à jour ou de pannes techniques.</p>
                            <p>HappyDarons se réserve le droit de suspendre ou de modifier le Site, à tout moment et sans préavis, sans que cela ne puisse engager sa responsabilité.</p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold mb-4 uppercase">SERVICES PROPOSÉS</h2>
                            <p className="mb-2">Le Site peut présenter différents contenus et services proposés par HappyDarons :</p>
                            <ul className="list-disc pl-5 mt-2 mb-4 space-y-1">
                                <li>articles, ressources et contenus informatifs sur la parentalité et le bien-être,</li>
                                <li>informations sur les programmes, ateliers et accompagnements proposés,</li>
                                <li>formulaires de contact ou de demande d’informations,</li>
                                <li>liens externes vers des prestataires partenaires ou des pages d’inscription.</li>
                            </ul>
                            <p className="mb-4">Certains services peuvent être gratuits, d’autres payants.</p>
                            <p>Lorsqu’un service payant est proposé, l’Utilisateur est redirigé vers un prestataire externe et accepte les Conditions Générales de Vente de ce dernier.</p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold mb-4 uppercase">CRÉATION D’UN COMPTE UTILISATEUR (le cas échéant)</h2>
                            <p className="mb-4">Dans le cadre de futurs services nécessitant un accès personnalisé, l’Utilisateur pourra être invité à créer un compte utilisateur.</p>
                            <p className="mb-4">Il devra alors fournir des informations exactes, complètes et à jour.</p>
                            <p className="mb-4">L’Utilisateur s’engage à ne pas usurper l’identité d’un tiers et à maintenir la confidentialité de ses identifiants.</p>
                            <p>HappyDarons pourra suspendre ou supprimer un compte en cas d’utilisation frauduleuse ou de non-respect des CGU.</p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold mb-4 uppercase">RESPONSABILITÉ DE HAPPYDARONS</h2>
                            <p className="mb-4">HappyDarons met tout en œuvre pour assurer la fiabilité des informations diffusées sur le Site.</p>
                            <p className="mb-4">Cependant, ces informations sont fournies à titre indicatif et ne sauraient engager la responsabilité de HappyDarons en cas d’erreur, d’omission ou d’indisponibilité temporaire.</p>
                            <p className="mb-4">HappyDarons n’est pas un professionnel de santé et ne fournit pas de diagnostic médical.</p>
                            <p className="mb-4">Les contenus publiés sur le Site ont une vocation informative et de sensibilisation.</p>
                            <p className="mb-4">Ils ne remplacent en aucun cas un avis, un diagnostic ou un suivi médical effectué par un professionnel compétent.</p>
                            <p>HappyDarons ne pourra être tenue responsable des dommages directs ou indirects résultant de l’utilisation du Site ou des informations qui y figurent.</p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold mb-4 uppercase">OBLIGATIONS DE L’UTILISATEUR</h2>
                            <p className="mb-2">L’Utilisateur s’engage à :</p>
                            <ul className="list-disc pl-5 mt-2 mb-4 space-y-1">
                                <li>respecter les lois et règlements en vigueur,</li>
                                <li>ne pas utiliser le Site à des fins illicites, commerciales ou publicitaires sans autorisation,</li>
                                <li>ne pas nuire au bon fonctionnement du Site ni porter atteinte à son image,</li>
                                <li>fournir des informations exactes lorsqu’il utilise les formulaires du Site.</li>
                            </ul>
                            <p>Toute utilisation abusive ou frauduleuse pourra entraîner une suspension d’accès au Site ou des poursuites judiciaires.</p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold mb-4 uppercase">DONNÉES PERSONNELLES</h2>
                            <p className="mb-4">L’ensemble des contenus (textes, images, vidéos, logos, icônes, graphismes, documents téléchargeables, etc.) présents sur le Site est protégé par le droit de la propriété intellectuelle et appartient à HappyDarons, sauf mention contraire.</p>
                            <p className="mb-4">Toute reproduction, représentation, modification ou exploitation, totale ou partielle, sans autorisation écrite préalable de HappyDarons est strictement interdite.</p>
                            <p>Toute violation pourra donner lieu à des poursuites conformément aux articles L.335-2 et suivants du Code de la propriété intellectuelle.</p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold mb-4 uppercase">LIENS HYPERTEXTES</h2>
                            <p className="mb-4">Le Site peut contenir des liens vers d’autres sites internet.</p>
                            <p className="mb-4">HappyDarons ne contrôle pas le contenu de ces sites et ne saurait être tenue responsable de leur disponibilité, de leur contenu ni des pratiques de confidentialité qu’ils appliquent.</p>
                            <p>La création d’un lien hypertexte vers le Site est autorisée uniquement avec l’accord écrit préalable de HappyDarons.</p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold mb-4 uppercase">SUSPENSION / RÉSILIATION</h2>
                            <p className="mb-4">HappyDarons se réserve le droit de suspendre temporairement ou définitivement l’accès au Site en cas de non-respect des présentes CGU ou de comportement préjudiciable.</p>
                            <p>L’Utilisateur peut également demander la suppression de son compte ou de ses données à tout moment, en adressant une demande à hello@happydarons.fr.</p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold mb-4 uppercase">DROIT APPLICABLE – LITIGES</h2>
                            <p className="mb-2">Les présentes CGU sont régies par le droit français.</p>
                            <p className="mb-2">En cas de différend, les Parties s’efforceront de le résoudre à l’amiable.</p>
                            <p>À défaut, les tribunaux compétents de Marseille (France) seront seuls compétents.</p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold mb-4 uppercase">CONTACT</h2>
                            <p>Pour toute question relative au Site ou aux présentes CGU, vous pouvez contacter : <a href="mailto:hello@happydarons.fr" className="underline hover:text-[#ffa6bf]">hello@happydarons.fr</a></p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
            <ScrollToTop />
        </div>
    );
}
