import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Users, Heart, Star, Briefcase, Smile, Award } from 'lucide-react';
import teamHeroImg from '@/assets/JPEG image.webp';
import storyImg from '@/assets/JPEG image(1).webp';
import imgAaricia from '@/assets/Aaricia Lejour.webp';
import imgValentine from '@/assets/Valentine - Clothilde Valade (c)-2.webp';
import imgMaud from '@/assets/Maud_HD-21 (1).webp';
import imgBerenice from '@/assets/IMG_9139_heic.webp';
import imgHelena from '@/assets/Helena R.webp';
import imgLeonore from '@/assets/WhatsApp Image 2025-03-11 at 20_43_29.webp';
import imgAlexandra from '@/assets/portrait_retouche.webp';
import imgCharlotte from '@/assets/charlotte_brunel_.webp';
import imgClaire from '@/assets/Claire.webp';
import imgMorgane from '@/assets/Morgane P.webp';
import imgAurelie from '@/assets/Aurelie.webp';
import imgCaroline from '@/assets/photo pro_JPG.webp';
import imgInes from '@/assets/Photo trombi Grine.webp';
import imgSasha from '@/assets/Sasha R.webp';
import imgSolene from '@/assets/Solene.webp';
import imgGilles from '@/assets/gilles atelier du futuur papa.webp';
import imgTess from '@/assets/Tess.webp';
import imgTheo from '@/assets/Theo.webp';
import imgLaureen from '@/assets/Laureen.webp';

// Placeholder for missing images
const PlaceholderImage = ({ title, className }: { title: string; className?: string }) => (
    <div className={`flex items-center justify-center bg-[#1F3C32]/10 text-[#1F3C32] font-medium p-4 text-center ${className}`}>
        {title}
    </div>
);

const experts = [
    { name: "Aaricia Lejour", role: "Doula, formée à la méthode Rebozo et hypnopraticienne périnatale", image: imgAaricia },
    { name: "Valentine Brugère", role: "Psychopraticienne en thérapie brève, coach parental", image: imgValentine },
    { name: "Maud Virey", role: "Hypnothérapeute", image: imgMaud },
    { name: "Bérénice Pasbeau", role: "Sexothérapeute", image: imgBerenice },
    { name: "Helena Rad", role: "Sage-femme et gynécologue", image: imgHelena },
    { name: "Léonore Metral", role: "Psychologue intégrative", image: imgLeonore },
    { name: "Alexandra Jacob", role: "Accompagnante parentale", image: imgAlexandra },
    { name: "Charlotte Brunel", role: "Naturopathe, spécialisée en équilibre hormonal", image: imgCharlotte },
    { name: "Claire Doray", role: "Diététicienne-Nutritionniste", image: imgClaire },
    { name: "Morgane Polard", role: "Accompagnante en parentalité et périnatalité", image: imgMorgane },
    { name: "Aurelie Collura", role: "Professeure de yoga pré & postnatal", image: imgAurelie },
    { name: "Caroline Diaz", role: "Accompagnante parentale spécialisée parcours PMA", image: imgCaroline },
    { name: "Ines Grine", role: "Professeure de yoga holistique", image: imgInes },
    { name: "Sasha Romary", role: "Accompagnante en parentalité - sommeil & propreté", image: imgSasha },
    { name: "Solène Brixy", role: "Energéticienne - accompagnatrice en évolution", image: imgSolene },
    { name: "Gilles Vaquier de Labaume", role: "Fondateur et conférencier atelier futurs papas", image: imgGilles },
];

const founders = [
    {
        name: "Tess",
        description: [
            "Tess cumule plus de 5 ans d’expérience en tant que cheffe de projet, dont plus de 3 ans au cœur de VivaTech.",
            "Elle allie une véritable sensibilité humaine à une vision business solide, avec un objectif clair : mettre l’innovation au service du bien-être et de l’impact social.",
            "Son moteur ? Créer du lien, mobiliser les bonnes personnes, et faire avancer les projets qui comptent.",
            "Tess, c’est l’énergie incarnée, toujours en mouvement, toujours positive.",
            "Passionnée de kitesurf, de course à pied, danse et d’aventures collectives."
        ],
        image: imgTess
    },
    {
        name: "Laureen",
        description: [
            "Laureen, c’est la douceur et la rigueur en parfaite harmonie.",
            "Elle a travaillé plus de 6 ans en tant que consultante en stratégie digitale, spécialisée en e-commerce et transformation numérique.",
            "Elle a accompagné de grandes entreprises et des Maisons de luxe dans le pilotage de projets digitaux à fort enjeu.",
            "Son superpouvoir : écouter, analyser et structurer.",
            "Solaire, elle capte rapidement les enjeux de ses interlocuteurs.",
            "Sportive elle aussi, elle partage son temps entre golf, surf et course à pied."
        ],
        image: imgLaureen
    }
];

export function Team() {
    return (
        <div className="min-h-screen bg-[#FAE6E9]">
            <Header />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                <div className="absolute inset-0 bg-[#1F3C32]" />

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        <div className="lg:w-1/2 text-center lg:text-left">
                            <span className="inline-block py-1 px-3 rounded-full bg-[#FFA6BF]/20 text-[#FFA6BF] text-sm font-semibold mb-6">
                                DERRIÈRE HAPPYDARONS
                            </span>
                            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                                Qui sommes-<span className="text-[#FFA6BF]">nous?</span>
                            </h1>
                            <p className="text-lg lg:text-xl text-gray-200 mb-8 leading-relaxed">
                                Chez HappyDarons, nous croyons que jongler entre boulot, dodos (souvent trop courts), et marmots peut devenir une expérience bienveillante et enrichissante, pour peu qu’on soit bien accompagné !
                            </p>
                        </div>
                        <div className="lg:w-1/2">
                            {/* Use a placeholder div for now as the generated image path is not yet valid until tool runs */}
                            <div className="w-full h-64 lg:h-96 bg-white/10 rounded-3xl flex items-center justify-center text-white/50">
                                <img src={teamHeroImg} alt="Equipe HappyDarons" className="w-full h-full object-cover rounded-3xl" onError={(e) => (e.currentTarget.style.display = 'none')} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24">
                        <div className="lg:w-1/2">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-[#FFA6BF] rounded-[32px] rotate-3 opacity-20"></div>
                                <div className="w-full h-64 lg:h-96 bg-gray-100 rounded-[32px] overflow-hidden flex items-center justify-center">
                                    <img src={storyImg} alt="Notre histoire" className="w-full h-full object-cover" onError={(e) => (e.currentTarget.style.display = 'none')} />
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-1/2">
                            <h2 className="text-3xl lg:text-5xl font-bold text-[#1F3C32] mb-8">
                                Notre <span className="text-[#FFA6BF]">histoire</span>
                                <br />
                                Nous connaître 💛
                            </h2>
                            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                Nous avons imaginé HappyDarons comme une solution clé-en-main pour les entreprises et leurs salarié.es parents.
                            </p>
                            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                Trop souvent, les parents doivent choisir entre leur carrière et leur vie de famille.
                            </p>

                            <div className="space-y-4 mt-8">
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-[#FAF3F5] rounded-lg text-[#FFA6BF]"><Star size={20} /></div>
                                    <p className="text-gray-700">Un allié pour les parents qui jonglent avec leur quotidien.</p>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-[#FAF3F5] rounded-lg text-[#FFA6BF]"><Briefcase size={20} /></div>
                                    <p className="text-gray-700">Un levier pour des entreprises plus inclusives et humaines.</p>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-[#FAF3F5] rounded-lg text-[#FFA6BF]"><Heart size={20} /></div>
                                    <p className="text-gray-700">Une plateforme pensée pour simplifier la vie des parents et des DRH.</p>
                                </div>
                            </div>

                            <div className="mt-12 p-6 bg-[#1F3C32] rounded-2xl text-white">
                                <p className="font-semibold text-xl mb-2">Parce qu’en 2024, les chiffres parlent d’eux-mêmes</p>
                                <p className="text-[#FFA6BF] text-3xl font-bold">82 %</p>
                                <p className="text-gray-300">des parents seraient prêts à quitter leur entreprise pour un meilleur équilibre vie pro/vie perso.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Founders Section */}
            <section className="py-20 bg-[#FAF3F5]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl lg:text-5xl font-bold text-[#1F3C32] text-center mb-16">
                        Les <span className="text-[#FFA6BF]">Fondatrices</span>
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12">
                        {founders.map((founder, idx) => (
                            <div key={idx} className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100 flex flex-col items-center text-center">
                                <div className="w-40 h-40 lg:w-48 lg:h-48 rounded-full bg-[#1F3C32]/5 mb-8 overflow-hidden">
                                    <img src={founder.image} alt={founder.name} className="w-full h-full object-cover" />
                                </div>
                                <h3 className="text-2xl lg:text-3xl font-bold text-[#1F3C32] mb-6">{founder.name}</h3>
                                <div className="space-y-4 text-gray-600 text-left">
                                    {founder.description.map((desc, i) => (
                                        <p key={i}>{desc}</p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center max-w-3xl mx-auto">
                        <h3 className="text-2xl font-bold text-[#1F3C32] mb-4">Deux sœurs, un rêve, et une belle dose de complicité.</h3>
                        <p className="text-lg text-gray-700">
                            Ensemble, nous avons décidé d’allier nos forces et nos expériences pour créer HappyDarons, un projet qui nous ressemble et qui nous tient à cœur : accompagner des parents dans cette incroyable aventure qu’est la parentalité.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 lg:py-32 bg-[#1F3C32] text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-[#FFA6BF] opacity-5 skew-x-12 transform translate-x-1/4"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16">
                        <div>
                            <div className="inline-block p-3 rounded-xl bg-[#FFA6BF] text-[#1F3C32] mb-6">
                                <Award size={32} />
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Notre Mission</h2>
                            <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed">
                                Aider les entreprises à améliorer le bien-être de leurs salarié.e.s parents, et en faire un levier d’épanouissement et d’engagement durable.
                            </p>
                        </div>
                        <div>
                            <div className="inline-block p-3 rounded-xl bg-[#267B56] text-white mb-6">
                                <Smile size={32} />
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Notre Vision</h2>
                            <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed">
                                Créer un monde professionnel où être parent n’est plus un frein à l’égalité des chances,
                                et où les personnes, en particulier les femmes, n’aient plus à choisir entre carrière et vie familiale.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experts Grid */}
            <section className="py-20 lg:py-32 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl lg:text-5xl font-bold text-[#1F3C32] text-center mb-16">
                        Notre équipe <span className="text-[#FFA6BF]">d'expert.e.s</span>
                        <p className="text-lg text-gray-600 font-normal mt-4 max-w-2xl mx-auto">
                            Une équipe d’expert.e.s passionné.e.s pour aider chaque salarié.e parent avec des solutions sur-mesure, humaines et profondément bienveillantes.
                        </p>
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {experts.map((expert, idx) => (
                            <div key={idx} className="group bg-[#FAF3F5] rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                                <div className="w-24 h-24 mx-auto rounded-full bg-white mb-4 overflow-hidden shadow-sm">
                                    <img src={expert.image} alt={expert.name} className="w-full h-full object-cover" />
                                </div>
                                <h3 className="text-lg font-bold text-[#1F3C32] text-center mb-2">{expert.name}</h3>
                                <p className="text-sm text-gray-600 text-center">{expert.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Founding Team */}
            <section className="py-20 lg:py-32 bg-[#1F3C32] border-t border-white">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h2 className="text-3xl lg:text-5xl font-bold text-white mb-16 lg:mb-24">
                        Et pour l'Équipe Fondatrice
                    </h2>
                    <div className="flex flex-wrap justify-center gap-12 lg:gap-24">
                        <div className="flex flex-col items-center">
                            <div className="w-32 h-32 lg:w-64 lg:h-64 rounded-full bg-[#1F3C32] mb-6 lg:mb-8 overflow-hidden border-4 border-white shadow-lg">
                                <img src={imgTess} alt="Tess Cevaer" className="w-full h-full object-cover" />
                            </div>
                            <p className="font-bold text-white text-lg lg:text-3xl mb-2">Tess Cevaer</p>
                            <p className="text-sm lg:text-xl text-[#FFA6BF]">CEO</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-32 h-32 lg:w-64 lg:h-64 rounded-full bg-[#FFA6BF] mb-6 lg:mb-8 overflow-hidden border-4 border-white shadow-lg">
                                <img src={imgLaureen} alt="Laureen Cevaer" className="w-full h-full object-cover" />
                            </div>
                            <p className="font-bold text-white text-lg lg:text-3xl mb-2">Laureen Cevaer</p>
                            <p className="text-sm lg:text-xl text-[#FFA6BF]">CMO</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-32 h-32 lg:w-64 lg:h-64 rounded-full bg-[#267B56] mb-6 lg:mb-8 overflow-hidden border-4 border-white shadow-lg">
                                <img src={imgTheo} alt="Theo Schlegel" className="w-full h-full object-cover" />
                            </div>
                            <p className="font-bold text-white text-lg lg:text-3xl mb-2">Theo Schlegel</p>
                            <p className="text-sm lg:text-xl text-[#FFA6BF]">CTO</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
