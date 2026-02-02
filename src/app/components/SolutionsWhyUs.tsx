'use client';

import { ShoppingBag, LayoutGrid, Infinity, BadgeCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export function SolutionsWhyUs() {
    const differentiators = [
        {
            icon: ShoppingBag,
            title: "Marketplace complète",
            text: "Tous les services — 1 interlocuteur unique.",
            color: "bg-[#FFA6BF]"
        },
        {
            icon: LayoutGrid,
            title: "Solution clé en main",
            text: "Plateforme + App + Experts + Formations + Suivi RH.",
            color: "bg-[#267B56]"
        },
        {
            icon: Infinity,
            title: "Vision holistique",
            text: "De la grossesse à l'adolescence : un accompagnement global.",
            color: "bg-[#FFD200]"
        },
        {
            icon: BadgeCheck,
            title: "Experts certifiés",
            text: "Uniquement des spécialistes sélectionnés pour leur expertise.",
            color: "bg-[#1F3C32]"
        }
    ];

    return (
        <section className="py-20 lg:py-32 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
                <div className="text-center mb-12 lg:mb-16">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#fae6e9] text-[#267B56] font-bold text-sm tracking-wide mb-4 uppercase">
                        Pourquoi nous ?
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F3C32] mb-4">
                        HappyDarons, la première <br className="hidden md:block" />
                        <span className="text-[#FFA6BF]">marketplace</span> de la parentalité
                    </h2>
                    <p className="text-lg md:text-xl text-[#203b31] font-medium max-w-3xl mx-auto">
                        pensée pour les entreprises.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {differentiators.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-3xl p-8 border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-200 flex flex-col items-center text-center h-full"
                        >
                            <div className={`w-20 h-20 rounded-2xl ${item.color} border-2 border-black flex items-center justify-center mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}>
                                <item.icon size={40} className={item.color === 'bg-[#1F3C32]' ? 'text-white' : 'text-[#1F3C32]'} />
                            </div>
                            <h3 className="text-xl font-bold text-[#1F3C32] mb-4">{item.title}</h3>
                            <p className="text-gray-600 font-medium leading-relaxed">
                                {item.text}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
