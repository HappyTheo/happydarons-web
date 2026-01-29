'use client';

import { ShoppingBag, LayoutGrid, Infinity, BadgeCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export function SolutionsWhyUs() {
    const differentiators = [
        {
            icon: ShoppingBag,
            title: "Marketplace complète",
            text: "Tous les services — 1 interlocuteur unique.",
            color: "text-[#FFA6BF]"
        },
        {
            icon: LayoutGrid,
            title: "Solution clé en main",
            text: "Plateforme + App + Experts + Formations + Suivi RH.",
            color: "text-[#267B56]"
        },
        {
            icon: Infinity, // Vision holistique / Cycle 
            title: "Vision holistique",
            text: "De la grossesse à l’adolescence : un accompagnement global.",
            color: "text-[#FFD200]"
        },
        {
            icon: BadgeCheck, // Using BadgeCheck for certified experts
            title: "Experts certifiés",
            text: "Uniquement des spécialistes sélectionnés pour leur expertise.",
            color: "text-white"
        }
    ];

    return (
        <section className="py-20 lg:py-32 bg-[#1F3C32] relative overflow-hidden">
            {/* Background Details */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#267B56] rounded-full blur-[150px] opacity-20 pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#FFA6BF] rounded-full blur-[120px] opacity-10 pointer-events-none translate-y-1/3 -translate-x-1/3"></div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 relative z-10">
                <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-24">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white font-bold text-sm tracking-wide mb-6 uppercase backdrop-blur-sm border border-white/10">
                        Pourquoi nous ?
                    </div>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                        HappyDarons, la première <span className="text-[#FFD200]">marketplace</span> de la parentalité pensée pour les entreprises.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {differentiators.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors group cursor-default"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6 border border-white/5 group-hover:scale-110 transition-transform duration-300">
                                <item.icon size={32} className={item.color} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                            <p className="text-gray-300 font-medium leading-relaxed">
                                {item.text}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
