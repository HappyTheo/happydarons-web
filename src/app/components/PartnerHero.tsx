'use client';

import { motion } from 'framer-motion';

export function PartnerHero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#1F3C32]">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#267B56] rounded-full blur-[120px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#FFA6BF] rounded-full blur-[100px] opacity-10 translate-y-1/4 -translate-x-1/4"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#FFA6BF]/20 text-[#FFA6BF] font-bold text-sm tracking-wide mb-8 uppercase backdrop-blur-sm border border-[#FFA6BF]/30">
                        Rejoignez l'écosystème
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                        Devenir partenaire <br />
                        <span className="text-[#FFA6BF]">HappyDarons</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-12">
                        Chez HappyDarons, nous croyons à une parentalité mieux accompagnée, plus humaine et plus sereine pour les parents comme pour les entreprises.
                        <br className="hidden md:block" />
                        C’est pourquoi nous construisons un <span className="text-white font-bold">écosystème engagé</span> d’expert.e.s et de partenaires de confiance, au service du bien-être des salarié.e.s-parents.
                    </p>
                </motion.div>
            </div>

            {/* Curve separator */}
            <div className="absolute bottom-0 left-0 w-full h-16 bg-white rounded-t-[50%] scale-x-150 translate-y-8"></div>
        </section>
    );
}
