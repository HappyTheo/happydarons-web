'use client';

import { Stethoscope, HeartHandshake, BrainCircuit, Flower2, Mic2, Users2, Activity, Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function PartnerExperts() {
    const expertises = [
        { icon: Flower2, name: "Doulas & Sages-femmes" },
        { icon: HeartHandshake, name: "Consultant.e Lactation" },
        { icon: BrainCircuit, name: "Psychologue & Thérapeute" },
        { icon: Activity, name: "Diététicien.ne & Nutritionniste" },
        { icon: Sparkles, name: "Naturopathes" },
        { icon: Mic2, name: "Coach Parentalité & Stress" },
        { icon: Users2, name: "Coach RH & Managers" },
        { icon: Activity, name: "Yoga & Pilates (pré/post)" }, // Reusing Activity for variety
        { icon: Stethoscope, name: "Hypnothérapeutes" }
    ];

    const interventions = [
        {
            title: "Ateliers & Conférences",
            desc: "Animez des sessions en présentiel ou en visio dans les entreprises.",
            color: "bg-[#FFD200]"
        },
        {
            title: "Consultations",
            desc: "Proposez des rendez-vous individuels aux salarié·e·s-parents.",
            color: "bg-[#FFA6BF]"
        },
        {
            title: "Contenus Experts",
            desc: "Créez des articles, vidéos ou podcasts pour l'application.",
            color: "bg-[#267B56]"
        },
        {
            title: "Programmes",
            desc: "Participez à des parcours thématiques complets.",
            color: "bg-blue-400"
        }
    ];

    return (
        <section className="py-20 lg:py-32 bg-[#fffbf0] relative overflow-hidden">
            {/* Decorative blob */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#FFD200] rounded-full blur-[120px] opacity-10 pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 relative z-10">

                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-24">
                    <span className="text-[#d97706] font-bold text-sm tracking-widest uppercase mb-4 block">Professionnels & Experts</span>
                    <h2 className="text-3xl md:text-5xl lg:text-5xl font-bold text-[#1F3C32] mb-6">
                        Devenir expert.e HappyDarons
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Vous êtes un.e professionnel.le de la parentalité ou de la santé ?
                        Donnez plus de sens à votre pratique en intervenant directement auprès des parents en entreprise.
                    </p>
                </div>

                {/* Expertise Cloud */}
                <div className="flex flex-wrap justify-center gap-4 mb-20 lg:mb-28 max-w-5xl mx-auto">
                    {expertises.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="bg-white px-6 py-3 rounded-full shadow-sm border border-gray-100 flex items-center gap-3 hover:border-[#FFD200] hover:shadow-md transition-all cursor-default"
                        >
                            <exp.icon size={18} className="text-[#d97706]" />
                            <span className="font-bold text-gray-700">{exp.name}</span>
                        </motion.div>
                    ))}
                </div>

                {/* Intervention Modes */}
                <div className="mb-20">
                    <h3 className="text-2xl font-bold text-center text-[#1F3C32] mb-12">Comment vous intervenez</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {interventions.map((item, index) => (
                            <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full group hover:-translate-y-1 transition-transform duration-300">
                                <div className={`w-full h-2 rounded-full ${item.color} mb-6`}></div>
                                <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Final CTA Section */}
                <div className="bg-[#1F3C32] rounded-[3rem] p-8 md:p-12 lg:p-20 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[#267B56]/20 pattern-dots"></div>
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
                            Prêt.e à rejoindre l'aventure ?
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8 text-left mb-12">
                            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/5">
                                <h4 className="text-[#FFD200] font-bold text-xl mb-2">Impact Social 💛</h4>
                                <p className="text-white/80">Mettez votre expertise au service d’un impact concret auprès des familles.</p>
                            </div>
                            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/5">
                                <h4 className="text-[#FFA6BF] font-bold text-xl mb-2">Visibilité 📣</h4>
                                <p className="text-white/80">Gagnez en notoriété via notre application et auprès de nos entreprises clientes.</p>
                            </div>
                        </div>
                        <button className="bg-[#FFD200] text-[#1F3C32] text-xl font-bold py-4 px-10 rounded-2xl hover:bg-white hover:scale-105 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[4px] active:translate-y-[4px]">
                            Rejoindre HappyDarons
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}
