'use client';

import { Brain, Scale, Users, Target, Heart, BarChart3, Gift, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';

export function SolutionsBenefits() {
    const teamBenefits = [
        {
            icon: Brain,
            title: "Alléger la charge mentale",
            text: "Des outils simples, un assistant IA, des services pratiques, des rappels.",
            color: "bg-[#FFA6BF]"
        },
        {
            icon: Scale,
            title: "Faciliter l’équilibre vie pro / vie perso",
            text: "Un accompagnement global, disponible à tout moment.",
            color: "bg-[#267B56]"
        },
        {
            icon: Users,
            title: "Ne plus jamais être seul.e",
            text: "Experts, programmes, et communauté bienveillante.",
            color: "bg-[#FFD200]"
        }
    ];

    const companyBenefits = [
        {
            icon: Target,
            title: "Engagement & fidélisation",
            text: "Des équipes plus sereines, concentrées et présentes.",
            color: "text-[#267B56]",
            bgColor: "bg-[#267B56]/10",
            borderColor: "border-[#267B56]/20"
        },
        {
            icon: Leaf, // Plant/Leaf for Brand
            title: "Marque employeur renforcée",
            text: "Vous devenez une entreprise réellement inclusive.",
            color: "text-[#FFA6BF]",
            bgColor: "bg-[#FFA6BF]/10",
            borderColor: "border-[#FFA6BF]/20"
        },
        {
            icon: BarChart3,
            title: "Politique parentale structurée & mesurable",
            text: "Déploiement simple, pilotage clair, indicateurs concrets.",
            color: "text-[#FFD200]",
            bgColor: "bg-[#FFD200]/10",
            borderColor: "border-[#FFD200]/20"
        },
        {
            icon: Gift,
            title: "Crédit d’impôt familles",
            text: "Des actions financées jusqu’à 50 %.",
            color: "text-purple-600",
            bgColor: "bg-purple-50",
            borderColor: "border-purple-100"
        }
    ];

    return (
        <section className="py-20 lg:py-32 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 space-y-20 lg:space-y-32">

                {/* Section 1: Salariés-Parents */}
                <div>
                    <div className="text-center mb-12 lg:mb-16">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#fae6e9] text-[#267B56] font-bold text-sm tracking-wide mb-4 uppercase">
                            Avantages pour vos équipes
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F3C32] mb-4">
                            ⭐ Les avantages pour vos <br className="hidden md:block" />
                            <span className="text-[#FFA6BF]">salarié.e.s-parents</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {teamBenefits.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-3xl p-8 border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-200 flex flex-col items-center text-center h-full"
                            >
                                <div className={`w-20 h-20 rounded-2xl ${item.color} border-2 border-black flex items-center justify-center mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}>
                                    <item.icon size={40} className="text-[#1F3C32]" />
                                </div>
                                <h3 className="text-xl font-bold text-[#1F3C32] mb-4">{item.title}</h3>
                                <p className="text-gray-600 font-medium leading-relaxed">
                                    {item.text}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Section 2: Organisation */}
                <div>
                    <div className="text-center mb-12 lg:mb-16">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#e0f2fe] text-[#0c4a6e] font-bold text-sm tracking-wide mb-4 uppercase">
                            Bénéfices pour l&apos;entreprise
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F3C32] mb-4">
                            ⭐ Les bénéfices pour votre <br className="hidden md:block" />
                            <span className="text-[#267B56]">organisation</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {companyBenefits.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={`rounded-3xl p-6 border ${item.borderColor} ${item.bgColor} hover:bg-white hover:border-[#267B56] hover:shadow-lg transition-all duration-300 group cursor-default`}
                            >
                                <div className="mb-4">
                                    <item.icon size={32} className={`${item.color} group-hover:scale-110 transition-transform duration-300`} />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-600 leading-snug">
                                    {item.text}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
