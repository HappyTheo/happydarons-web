'use client';

import { useState } from 'react';
import { Baby, GraduationCap, Sparkles, Utensils, PartyPopper, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { PopupModal } from "react-calendly";

export function PartnerServices() {
    const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

    const services = [
        {
            icon: Baby,
            title: "Garde d’enfants",
            desc: "Crèche, babysitting, sortie d’école...",
            color: "bg-blue-100 text-blue-600"
        },
        {
            icon: GraduationCap,
            title: "Soutien scolaire",
            desc: "Accompagnement éducatif & aide aux devoirs",
            color: "bg-yellow-100 text-yellow-600"
        },
        {
            icon: Sparkles, // Cleaning/Home
            title: "Ménage & Aide",
            desc: "Services à domicile pour alléger le quotidien",
            color: "bg-purple-100 text-purple-600"
        },
        {
            icon: Utensils,
            title: "Livraison de repas",
            desc: "Plats sains, notamment pour le post-partum",
            color: "bg-green-100 text-green-600"
        },
        {
            icon: PartyPopper,
            title: "Fêtes & Anniversaires",
            desc: "Lieux et animations pour enfants",
            color: "bg-pink-100 text-pink-600"
        }
    ];

    const benefits = [
        "Toucher une cible engagée : parents salariés & entreprises",
        "S’inscrire dans une démarche RSE & QVCT",
        "Faire partie d’un écosystème de la parentalité en pleine croissance",
        "Développer votre impact et votre notoriété"
    ];

    return (
        <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">

                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-24">
                    <span className="text-[#267B56] font-bold text-sm tracking-widest uppercase mb-4 block">Entreprises & Services</span>
                    <h2 className="text-3xl md:text-5xl lg:text-5xl font-bold text-[#1F3C32] mb-6">
                        Devenir partenaire de la parentalité
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Vous êtes une entreprise ou un service dédié aux familles ?
                        Nous cherchons à référencer des solutions utiles, concrètes et de confiance.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 lg:mb-32">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:border-[#267B56]/20 transition-all duration-300 group cursor-default"
                        >
                            <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                <service.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                            <p className="text-gray-600">{service.desc}</p>
                        </motion.div>
                    ))}

                    {/* Call to action card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="bg-[#1F3C32] rounded-2xl p-8 flex flex-col justify-center items-center text-center text-white relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#267B56] rounded-full blur-[40px] opacity-50 -translate-y-1/2 translate-x-1/2"></div>
                        <h3 className="text-2xl font-bold mb-4 relative z-10">Vous proposez un autre service ?</h3>
                        <button
                            onClick={() => setIsCalendlyOpen(true)}
                            className="bg-[#FFA6BF] text-white font-bold py-3 px-6 rounded-xl hover:bg-[#ff9eb6] transition-colors relative z-10 flex items-center gap-2"
                        >
                            Contactez-nous <ArrowRight size={18} />
                        </button>
                    </motion.div>
                </div>

                {/* Calendly Modal */}
                <PopupModal
                    url="https://calendly.com/tess-cevaer-happydarons/happydarons-rendez-vous-clone"
                    onModalClose={() => setIsCalendlyOpen(false)}
                    open={isCalendlyOpen}
                    rootElement={document.body}
                />

                {/* Benefits & How it works */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                    <div>
                        <h3 className="text-3xl font-bold text-[#1F3C32] mb-8">Pourquoi devenir partenaire ?</h3>
                        <ul className="space-y-4">
                            {benefits.map((benefit, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[#fae6e9] flex items-center justify-center">
                                        <CheckCircle2 size={16} className="text-[#267B56]" />
                                    </div>
                                    <span className="text-lg text-gray-700 font-medium">{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-[#fae6e9] rounded-3xl p-8 lg:p-12 relative">
                        <h3 className="text-2xl font-bold text-[#1F3C32] mb-6">Comment ça fonctionne</h3>
                        <div className="space-y-6 relative z-10">
                            {[
                                { step: "1", text: "Votre service est référencé sur notre plateforme" },
                                { step: "2", text: "Il est proposé aux salarié.e.s-parents via leur entreprise" },
                                { step: "3", text: "Vous bénéficiez d’une visibilité ciblée et qualifiée" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-[#267B56]/10">
                                    <div className="w-8 h-8 rounded-full bg-[#267B56] text-white flex items-center justify-center font-bold flex-shrink-0">
                                        {item.step}
                                    </div>
                                    <p className="text-gray-800 font-medium">{item.text}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 text-center font-bold text-[#267B56]">
                            Partenariats gagnant-gagnant 🤝
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
