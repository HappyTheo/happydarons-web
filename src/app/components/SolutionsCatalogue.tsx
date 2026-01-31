'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Users, Briefcase, Sparkles, Send, Phone, Mail, User, Building, Check, X, Clock, Target, Heart, Brain, Baby, MessageCircle, Moon, Scale, Stethoscope } from 'lucide-react';

// Enhanced data for workshops with images and details
const ateliersEssentiels = [
    {
        id: 1,
        title: "Parentalité en entreprise",
        desc: "comprendre les enjeux et faire évoluer les pratiques",
        details: "Un atelier de sensibilisation pour comprendre les défis de la parentalité au travail et mettre en place des pratiques inclusives.",
        duration: "1h30",
        format: "Présentiel ou visio",
        icon: Users,
        color: "#FFA6BF"
    },
    {
        id: 2,
        title: "Charge mentale",
        desc: "identifier, partager, alléger",
        details: "Apprenez à reconnaître les signes de surcharge mentale et découvrez des stratégies concrètes pour mieux répartir les responsabilités.",
        duration: "2h",
        format: "Présentiel ou visio",
        icon: Brain,
        color: "#267B56"
    },
    {
        id: 3,
        title: "Retour de congé maternité / paternité",
        desc: "mieux accompagner",
        details: "Un guide pratique pour faciliter la réintégration des parents après un congé, côté RH et côté manager.",
        duration: "1h30",
        format: "Présentiel",
        icon: Baby,
        color: "#FFD200"
    },
    {
        id: 4,
        title: "Communication & co-parentalité",
        desc: "mieux concilier vie pro et vie perso",
        details: "Techniques de communication efficace pour une meilleure coordination entre partenaires et une organisation familiale plus sereine.",
        duration: "2h",
        format: "Présentiel ou visio",
        icon: MessageCircle,
        color: "#FFA6BF"
    },
    {
        id: 5,
        title: "Équilibre vie pro / vie perso",
        desc: "prévenir l'épuisement",
        details: "Identifiez vos priorités, posez des limites saines et créez un équilibre durable entre vos différentes sphères de vie.",
        duration: "1h30",
        format: "Présentiel ou visio",
        icon: Scale,
        color: "#267B56"
    },
    {
        id: 6,
        title: "Stress & émotions",
        desc: "mieux gérer la pression du quotidien",
        details: "Outils pratiques de gestion du stress et régulation émotionnelle adaptés aux réalités des parents actifs.",
        duration: "2h",
        format: "Présentiel",
        icon: Heart,
        color: "#FFD200"
    },
    {
        id: 7,
        title: "Sommeil et parentalité",
        desc: "retrouver un équilibre durable",
        details: "Conseils de nos experts pour améliorer la qualité du sommeil des parents et celui de leurs enfants.",
        duration: "1h30",
        format: "Visio",
        icon: Moon,
        color: "#FFA6BF"
    },
    {
        id: 8,
        title: "Deuil périnatal & santé mentale",
        desc: "accompagner avec bienveillance",
        details: "Sensibilisation aux situations difficiles et formation à l'accompagnement bienveillant des collaborateurs concernés.",
        duration: "2h",
        format: "Présentiel",
        icon: Stethoscope,
        color: "#267B56"
    }
];

const formationsManagers = [
    {
        id: 1,
        title: "Manager des salarié.e.s-parents",
        subtitle: "avec bienveillance et efficacité",
        details: "Formation complète pour développer un management inclusif et performant adapté aux réalités parentales.",
        duration: "Demi-journée",
        icon: Users
    },
    {
        id: 2,
        title: "Accompagner le retour de congé",
        subtitle: "maternité / paternité",
        details: "Méthodologie et outils pour préparer, accueillir et suivre le retour de vos collaborateurs parents.",
        duration: "2h",
        icon: Baby
    },
    {
        id: 3,
        title: "Identifier et prévenir",
        subtitle: "la surcharge mentale et l'épuisement parental",
        details: "Repérer les signaux faibles et mettre en place des actions préventives au sein de votre équipe.",
        duration: "2h",
        icon: Brain
    },
    {
        id: 4,
        title: "Adapter son management",
        subtitle: "aux réalités de la parentalité",
        details: "Flexibilité, communication, organisation : les clés d'un management adapté sans perte de performance.",
        duration: "Demi-journée",
        icon: Target
    },
    {
        id: 5,
        title: "Adopter la bonne posture",
        subtitle: "face aux situations sensibles (PMA, deuil périnatal)",
        details: "Formation à l'écoute active et aux bonnes pratiques face aux situations de vulnérabilité.",
        duration: "2h",
        icon: Heart
    },
    {
        id: 6,
        title: "Faire de la parentalité",
        subtitle: "un levier d'engagement et de performance durable",
        details: "Transformer les défis de la parentalité en opportunités de fidélisation et d'innovation RH.",
        duration: "Demi-journée",
        icon: Sparkles
    }
];

// Card configuration with uniform top offsets for perfect stacking
const cardConfigs = [
    { id: 0, topOffset: 120, bgColor: 'bg-[#fae6e9]', borderColor: 'border-[#FFA6BF]' },
    { id: 1, topOffset: 120, bgColor: 'bg-[#e8f5ef]', borderColor: 'border-[#267B56]' },
    { id: 2, topOffset: 120, bgColor: 'bg-[#FFF9E5]', borderColor: 'border-[#FFD200]' },
];

export function SolutionsCatalogue() {
    // Initialize with first item selected
    const [selectedAtelier, setSelectedAtelier] = useState<number>(1);
    const [selectedFormation, setSelectedFormation] = useState<number>(1);
    const [isAtelierPaused, setIsAtelierPaused] = useState(false);
    const [isFormationPaused, setIsFormationPaused] = useState(false);

    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        fonction: '',
        email: '',
        telephone: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Mobile Modal States
    const [showMobileAtelierDetails, setShowMobileAtelierDetails] = useState(false);
    const [showMobileFormationDetails, setShowMobileFormationDetails] = useState(false);

    // Auto-rotation for Ateliers
    useEffect(() => {
        if (isAtelierPaused) return;

        const interval = setInterval(() => {
            setSelectedAtelier(prev => {
                const currentIndex = ateliersEssentiels.findIndex(a => a.id === prev);
                const nextIndex = (currentIndex + 1) % ateliersEssentiels.length;
                return ateliersEssentiels[nextIndex].id;
            });
        }, 10000);

        return () => clearInterval(interval);
    }, [isAtelierPaused, selectedAtelier]);

    // Auto-rotation for Formations
    useEffect(() => {
        if (isFormationPaused) return;

        const interval = setInterval(() => {
            setSelectedFormation(prev => {
                const currentIndex = formationsManagers.findIndex(f => f.id === prev);
                const nextIndex = (currentIndex + 1) % formationsManagers.length;
                return formationsManagers[nextIndex].id;
            });
        }, 10000);

        return () => clearInterval(interval);
    }, [isFormationPaused, selectedFormation]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ nom: '', prenom: '', fonction: '', email: '', telephone: '' });
        }, 3000);
    };

    const activeAtelier = ateliersEssentiels.find(a => a.id === selectedAtelier);
    const activeFormation = formationsManagers.find(f => f.id === selectedFormation);

    return (
        <section className="relative bg-white overflow-visible">
            {/* Background Pattern */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#000000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 relative z-10">

                {/* Header Section */}
                <div className="text-center max-w-4xl mx-auto pt-20 lg:pt-32 pb-12 lg:pb-16">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#FFD200]/20 text-[#1F3C32] font-bold text-sm tracking-wide mb-6 uppercase">
                        <GraduationCap size={18} className="mr-2" />
                        CATALOGUE
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1F3C32] mb-6 leading-tight">
                        Un catalogue complet d'ateliers, <br className="hidden md:block" />
                        <span className="relative inline-block">
                            conférences et programmes.
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#FFD200]" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                            </svg>
                        </span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Animés par nos spécialistes : <span className="text-[#FFA6BF] font-semibold">psychologues</span>, <span className="text-[#267B56] font-semibold">doulas</span>, <span className="text-[#FFD200] font-semibold">sage-femmes</span>, <span className="text-[#FFA6BF] font-semibold">naturopathes</span>, <span className="text-[#267B56] font-semibold">nutritionnistes</span>…
                    </p>
                </div>

                {/* Stacking Cards Container */}
                <div className="relative pb-32">

                    {/* Card 1: Ateliers & Conférences */}
                    <div
                        className="relative lg:sticky mb-12 lg:mb-32 lg:top-[120px]"
                        style={{ zIndex: 10 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className={`
                                w-full h-auto lg:min-h-[750px] rounded-3xl p-5 md:p-8 lg:p-10
                                border-2 ${cardConfigs[0].borderColor} 
                                shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
                                ${cardConfigs[0].bgColor}
                            `}
                        >
                            <div className="flex flex-col h-full">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-[#FFA6BF] border-2 border-black flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                                        <Users size={24} className="text-black" />
                                    </div>
                                    <div>
                                        <span className="text-xs font-bold text-[#FFA6BF] uppercase tracking-wider">Essentiel</span>
                                        <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-[#1F3C32]">
                                            Ateliers & Conférences de sensibilisation
                                        </h3>
                                    </div>
                                </div>

                                <div className="flex flex-col lg:flex-row gap-6 items-stretch h-full flex-grow">
                                    {/* Left: Grid of ateliers */}
                                    <div className="flex-1 grid grid-cols-2 lg:grid-cols-4 gap-4 w-full content-stretch">
                                        {ateliersEssentiels.map((atelier) => {
                                            const IconComponent = atelier.icon;
                                            const isActive = selectedAtelier === atelier.id;
                                            return (
                                                <div key={atelier.id} className="relative h-full">
                                                    <motion.button
                                                        onClick={() => {
                                                            setSelectedAtelier(atelier.id);
                                                            setIsAtelierPaused(true);
                                                            setShowMobileAtelierDetails(true);
                                                        }}
                                                        whileHover={{ scale: 1.02 }}
                                                        whileTap={{ scale: 0.98 }}
                                                        className={`
                                                            w-full h-full p-5 rounded-2xl border-2 border-black text-left transition-all flex flex-col justify-between relative overflow-hidden group
                                                            ${isActive
                                                                ? 'bg-[#1F3C32] text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] translate-x-[2px] translate-y-[2px]'
                                                                : 'bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px]'
                                                            }
                                                        `}
                                                    >
                                                        <div className="flex justify-between items-start w-full">
                                                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${isActive ? 'bg-white/20' : ''}`} style={{ backgroundColor: isActive ? 'rgba(255,255,255,0.2)' : `${atelier.color}20` }}>
                                                                <IconComponent size={20} className={isActive ? 'text-white' : 'text-[#1F3C32]'} />
                                                            </div>
                                                            {isActive && (
                                                                <div className="hidden lg:block">
                                                                    <div className="w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[12px] border-l-[#FFD200]"></div>
                                                                </div>
                                                            )}
                                                        </div>

                                                        <div className="mt-4">
                                                            <h4 className={`font-bold text-sm md:text-base leading-tight mb-2 ${isActive ? 'text-white' : 'text-[#1F3C32]'}`}>
                                                                {atelier.title}
                                                            </h4>
                                                            {!isActive && (
                                                                <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400 group-hover:text-[#1F3C32] transition-colors">
                                                                    En savoir plus
                                                                </span>
                                                            )}
                                                        </div>

                                                        {/* Progress Bar */}
                                                        {isActive && !isAtelierPaused && (
                                                            <motion.div
                                                                initial={{ width: "0%" }}
                                                                animate={{ width: "100%" }}
                                                                transition={{ duration: 10, ease: "linear" }}
                                                                className="absolute bottom-0 left-0 h-1.5 bg-[#FFD200]"
                                                            />
                                                        )}
                                                    </motion.button>
                                                </div>
                                            );
                                        })}
                                    </div>

                                    {/* Mobile Modal for Atelier Details */}
                                    <AnimatePresence>
                                        {showMobileAtelierDetails && activeAtelier && (
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                className="fixed inset-0 z-[60] lg:hidden flex items-end sm:items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                                                onClick={() => setShowMobileAtelierDetails(false)}
                                            >
                                                <motion.div
                                                    initial={{ y: "100%" }}
                                                    animate={{ y: 0 }}
                                                    exit={{ y: "100%" }}
                                                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                                                    onClick={(e) => e.stopPropagation()}
                                                    className="bg-white w-full max-w-lg rounded-3xl p-6 shadow-2xl overflow-y-auto max-h-[85vh] relative"
                                                >
                                                    <button
                                                        onClick={() => setShowMobileAtelierDetails(false)}
                                                        className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                                                    >
                                                        <X size={20} className="text-gray-600" />
                                                    </button>

                                                    <div className="flex items-center gap-4 mb-6 pr-10">
                                                        <div className="w-14 h-14 rounded-2xl flex items-center justify-center border-2 border-black bg-white" style={{ backgroundColor: `${activeAtelier.color}20` }}>
                                                            <activeAtelier.icon size={28} style={{ color: activeAtelier.color }} />
                                                        </div>
                                                        <div>
                                                            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Atelier</span>
                                                            <h4 className="font-bold text-lg text-[#1F3C32] leading-tight">{activeAtelier.title}</h4>
                                                        </div>
                                                    </div>

                                                    <p className="text-sm text-gray-600 mb-6 italic border-l-4 pl-4" style={{ borderColor: activeAtelier.color }}>
                                                        "{activeAtelier.desc}"
                                                    </p>

                                                    <div className="space-y-6">
                                                        <div className="bg-gray-50 p-5 rounded-2xl border-2 border-gray-100">
                                                            <h5 className="font-bold text-[#1F3C32] mb-2 flex items-center gap-2 text-sm">
                                                                <Sparkles size={14} className="text-[#FFD200]" />
                                                                Au programme
                                                            </h5>
                                                            <p className="text-sm text-gray-700 leading-relaxed">{activeAtelier.details}</p>
                                                        </div>

                                                        <div className="flex gap-3 flex-wrap">
                                                            <div className="inline-flex items-center gap-2 bg-white border border-black px-3 py-1.5 rounded-xl text-xs font-bold text-[#1F3C32]">
                                                                <Clock size={14} /> {activeAtelier.duration}
                                                            </div>
                                                            <div className="inline-flex items-center gap-2 bg-[#1F3C32] px-3 py-1.5 rounded-xl text-xs font-bold text-white">
                                                                <Target size={14} /> {activeAtelier.format}
                                                            </div>
                                                        </div>

                                                        <button
                                                            onClick={() => setShowMobileAtelierDetails(false)}
                                                            className="w-full py-3 bg-[#1F3C32] text-white rounded-xl font-bold text-sm mt-4"
                                                        >
                                                            Fermer
                                                        </button>
                                                    </div>
                                                </motion.div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {/* Right: Detail Panel - Desktop Only */}
                                    <div className="hidden lg:flex w-full lg:w-96 shrink-0 relative flex-col min-h-[450px]">
                                        <AnimatePresence mode="wait">
                                            {activeAtelier && (
                                                <motion.div
                                                    key={activeAtelier.id}
                                                    initial={{ opacity: 0, x: 20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    exit={{ opacity: 0, x: -20 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="w-full h-full bg-white rounded-2xl border-2 border-black p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] absolute inset-0 overflow-y-auto flex flex-col"
                                                >
                                                    <div className="flex items-center gap-4 mb-6 shrink-0">
                                                        <div className="w-16 h-16 rounded-2xl flex items-center justify-center border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" style={{ backgroundColor: `${activeAtelier.color}30` }}>
                                                            <activeAtelier.icon size={32} style={{ color: activeAtelier.color }} />
                                                        </div>
                                                        <div>
                                                            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Atelier</span>
                                                            <h4 className="font-bold text-xl md:text-2xl text-[#1F3C32] leading-tight">{activeAtelier.title}</h4>
                                                        </div>
                                                    </div>

                                                    <p className="text-base text-gray-600 mb-8 italic border-l-4 pl-4" style={{ borderColor: activeAtelier.color }}>
                                                        "{activeAtelier.desc}"
                                                    </p>

                                                    <div className="space-y-6 flex-grow">
                                                        <div className="bg-gray-50 p-6 rounded-2xl border-2 border-gray-100 h-full">
                                                            <h5 className="font-bold text-[#1F3C32] mb-3 flex items-center gap-2">
                                                                <Sparkles size={16} className="text-[#FFD200]" />
                                                                Au programme
                                                            </h5>
                                                            <p className="text-sm md:text-base text-gray-700 leading-relaxed">{activeAtelier.details}</p>
                                                        </div>

                                                        <div className="flex gap-3 flex-wrap pt-2">
                                                            <div className="inline-flex items-center gap-2 bg-white border border-black px-4 py-2 rounded-xl text-sm font-bold text-[#1F3C32] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                                                <Clock size={16} /> {activeAtelier.duration}
                                                            </div>
                                                            <div className="inline-flex items-center gap-2 bg-[#1F3C32] px-4 py-2 rounded-xl text-sm font-bold text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                                                <Target size={16} /> {activeAtelier.format}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Card 2: Formations Managers */}
                    <div
                        className="relative lg:sticky mb-12 lg:mb-32 lg:top-[120px]"
                        style={{ zIndex: 20 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className={`
                                w-full h-auto lg:min-h-[750px] rounded-3xl p-5 md:p-8 lg:p-10
                                border-2 ${cardConfigs[1].borderColor} 
                                shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
                                ${cardConfigs[1].bgColor}
                            `}
                        >
                            <div className="flex flex-col h-full">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-[#267B56] border-2 border-black flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                                        <Briefcase size={24} className="text-white" />
                                    </div>
                                    <div>
                                        <span className="text-xs font-bold text-[#267B56] uppercase tracking-wider">Leadership</span>
                                        <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-[#1F3C32]">
                                            Formations Managers
                                        </h3>
                                    </div>
                                </div>

                                <div className="flex flex-col lg:flex-row gap-8 items-stretch h-full flex-grow">
                                    {/* Left: Grid of formations */}
                                    <div className="flex-1 grid grid-cols-2 lg:grid-cols-3 gap-4 w-full content-stretch">
                                        {formationsManagers.map((formation) => {
                                            const IconComponent = formation.icon;
                                            const isActive = selectedFormation === formation.id;
                                            return (
                                                <div key={formation.id} className="relative h-full">
                                                    <motion.button
                                                        onClick={() => {
                                                            setSelectedFormation(formation.id);
                                                            setIsFormationPaused(true);
                                                            setShowMobileFormationDetails(true);
                                                        }}
                                                        whileHover={{ scale: 1.02 }}
                                                        whileTap={{ scale: 0.98 }}
                                                        className={`
                                                            w-full h-full p-5 rounded-2xl border-2 border-black text-left transition-all flex flex-col justify-between relative overflow-hidden group
                                                            ${isActive
                                                                ? 'bg-[#267B56] text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] translate-x-[2px] translate-y-[2px]'
                                                                : 'bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px]'
                                                            }
                                                        `}
                                                    >
                                                        <div className="flex justify-between items-start w-full">
                                                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${isActive ? 'bg-white/20' : 'bg-[#267B56]/10'}`}>
                                                                <IconComponent size={20} className={isActive ? 'text-white' : 'text-[#267B56]'} />
                                                            </div>
                                                            {isActive && (
                                                                <div className="hidden lg:block">
                                                                    <div className="w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[12px] border-l-[#FFD200]"></div>
                                                                </div>
                                                            )}
                                                        </div>

                                                        <div className="mt-4">
                                                            <h4 className={`font-bold text-sm md:text-base leading-tight mb-1 ${isActive ? 'text-white' : 'text-[#1F3C32]'}`}>
                                                                {formation.title}
                                                            </h4>
                                                            <p className={`text-[10px] uppercase font-bold tracking-wide mt-2 ${isActive ? 'text-white/70' : 'text-gray-400 group-hover:text-[#267B56] transition-colors'}`}>
                                                                {isActive ? 'En cours...' : formation.subtitle.substring(0, 20) + '...'}
                                                            </p>
                                                        </div>

                                                        {/* Progress Bar */}
                                                        {isActive && !isFormationPaused && (
                                                            <motion.div
                                                                initial={{ width: "0%" }}
                                                                animate={{ width: "100%" }}
                                                                transition={{ duration: 10, ease: "linear" }}
                                                                className="absolute bottom-0 left-0 h-1.5 bg-[#FFD200]"
                                                            />
                                                        )}
                                                    </motion.button>
                                                </div>
                                            );
                                        })}
                                    </div>

                                    {/* Mobile Modal for Formation Details */}
                                    <AnimatePresence>
                                        {showMobileFormationDetails && activeFormation && (
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                className="fixed inset-0 z-[60] lg:hidden flex items-end sm:items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                                                onClick={() => setShowMobileFormationDetails(false)}
                                            >
                                                <motion.div
                                                    initial={{ y: "100%" }}
                                                    animate={{ y: 0 }}
                                                    exit={{ y: "100%" }}
                                                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                                                    onClick={(e) => e.stopPropagation()}
                                                    className="bg-white w-full max-w-lg rounded-3xl p-6 shadow-2xl overflow-y-auto max-h-[85vh] relative"
                                                >
                                                    <button
                                                        onClick={() => setShowMobileFormationDetails(false)}
                                                        className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                                                    >
                                                        <X size={20} className="text-gray-600" />
                                                    </button>

                                                    <div className="flex items-center gap-4 mb-6 pr-10">
                                                        <div className="w-14 h-14 rounded-2xl flex items-center justify-center border-2 border-black bg-[#267B56]/10">
                                                            <activeFormation.icon size={28} className="text-[#267B56]" />
                                                        </div>
                                                        <div>
                                                            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Formation</span>
                                                            <h4 className="font-bold text-lg text-[#1F3C32] leading-tight">{activeFormation.title}</h4>
                                                        </div>
                                                    </div>

                                                    <p className="text-sm font-bold text-[#267B56] uppercase tracking-wide mb-6 border-l-4 border-[#267B56] pl-4">
                                                        {activeFormation.subtitle}
                                                    </p>

                                                    <div className="space-y-6">
                                                        <div className="bg-gray-50 p-5 rounded-2xl border-2 border-gray-100">
                                                            <h5 className="font-bold text-[#1F3C32] mb-2 flex items-center gap-2 text-sm">
                                                                <Target size={14} className="text-[#267B56]" />
                                                                Objectifs pédagogiques
                                                            </h5>
                                                            <p className="text-sm text-gray-700 leading-relaxed">{activeFormation.details}</p>
                                                        </div>

                                                        <div className="inline-flex items-center gap-2 bg-[#267B56] px-3 py-1.5 rounded-xl text-xs font-bold text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                                            <Clock size={14} /> Durée : {activeFormation.duration}
                                                        </div>

                                                        <button
                                                            onClick={() => setShowMobileFormationDetails(false)}
                                                            className="w-full py-3 bg-[#1F3C32] text-white rounded-xl font-bold text-sm mt-4"
                                                        >
                                                            Fermer
                                                        </button>
                                                    </div>
                                                </motion.div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {/* Right: Detail Panel - Desktop Only */}
                                    <div className="hidden lg:flex w-full lg:w-96 shrink-0 relative flex-col min-h-[450px]">
                                        <AnimatePresence mode="wait">
                                            {activeFormation && (
                                                <motion.div
                                                    key={activeFormation.id}
                                                    initial={{ opacity: 0, x: 20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    exit={{ opacity: 0, x: -20 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="w-full h-full bg-white rounded-2xl border-2 border-black p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] absolute inset-0 overflow-y-auto flex flex-col"
                                                >
                                                    <div className="flex items-center gap-4 mb-6 shrink-0">
                                                        <div className="w-16 h-16 rounded-2xl flex items-center justify-center border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-[#267B56]/10">
                                                            <activeFormation.icon size={32} className="text-[#267B56]" />
                                                        </div>
                                                        <div>
                                                            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Formation</span>
                                                            <h4 className="font-bold text-xl md:text-2xl text-[#1F3C32] leading-tight">{activeFormation.title}</h4>
                                                        </div>
                                                    </div>

                                                    <p className="text-sm font-bold text-[#267B56] uppercase tracking-wide mb-6 border-l-4 border-[#267B56] pl-4">
                                                        {activeFormation.subtitle}
                                                    </p>

                                                    <div className="space-y-6 flex-grow">
                                                        <div className="bg-gray-50 p-6 rounded-2xl border-2 border-gray-100 h-full">
                                                            <h5 className="font-bold text-[#1F3C32] mb-3 flex items-center gap-2">
                                                                <Target size={16} className="text-[#267B56]" />
                                                                Objectifs pédagogiques
                                                            </h5>
                                                            <p className="text-sm md:text-base text-gray-700 leading-relaxed">{activeFormation.details}</p>
                                                        </div>

                                                        <div className="flex gap-3 pt-2">
                                                            <div className="inline-flex items-center gap-2 bg-[#267B56] px-4 py-2 rounded-xl text-sm font-bold text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                                                <Clock size={16} /> Durée : {activeFormation.duration}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div >

                    {/* Card 3: Download Form */}
                    <div
                        className="relative lg:sticky pb-32 lg:top-[120px]"
                        style={{ zIndex: 30 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className={`
                                w-full h-auto lg:min-h-[750px] rounded-3xl p-5 md:p-8 lg:p-10
                                border-2 ${cardConfigs[2].borderColor} 
                                shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
                                ${cardConfigs[2].bgColor}
                            `}
                        >
                            <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-center h-full justify-center">
                                {/* Left: Text */}
                                <div className="flex-1 max-w-lg">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-[#FFD200] border-2 border-black flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                                            <Sparkles size={24} className="text-black" />
                                        </div>
                                        <span className="text-xs font-bold text-[#1F3C32]/70 uppercase tracking-wider">Téléchargement</span>
                                    </div>
                                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F3C32] mb-6 leading-tight">
                                        ➡️ Télécharger le catalogue complet
                                    </h3>
                                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                        Recevez instantanément par email notre catalogue détaillé comprenant :
                                    </p>

                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3 bg-white/50 p-3 rounded-xl border border-black/5">
                                            <div className="w-8 h-8 rounded-full bg-[#267B56]/20 flex items-center justify-center shrink-0">
                                                <Check size={16} className="text-[#267B56]" />
                                            </div>
                                            <span className="text-gray-800 font-medium">Le détail de tous nos ateliers et conférences</span>
                                        </div>
                                        <div className="flex items-center gap-3 bg-white/50 p-3 rounded-xl border border-black/5">
                                            <div className="w-8 h-8 rounded-full bg-[#267B56]/20 flex items-center justify-center shrink-0">
                                                <Check size={16} className="text-[#267B56]" />
                                            </div>
                                            <span className="text-gray-800 font-medium">Nos tarifs et forfaits entreprises</span>
                                        </div>
                                        <div className="flex items-center gap-3 bg-white/50 p-3 rounded-xl border border-black/5">
                                            <div className="w-8 h-8 rounded-full bg-[#267B56]/20 flex items-center justify-center shrink-0">
                                                <Check size={16} className="text-[#267B56]" />
                                            </div>
                                            <span className="text-gray-800 font-medium">Les bios de nos experts intervenants</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Right: Form */}
                                <div className="flex-1 w-full max-w-md">
                                    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                                        {isSubmitted ? (
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                className="text-center py-12"
                                            >
                                                <div className="w-20 h-20 bg-[#267B56] rounded-full flex items-center justify-center mx-auto mb-6">
                                                    <Check size={40} className="text-white" />
                                                </div>
                                                <h4 className="text-2xl font-bold text-[#1F3C32] mb-2">Merci !</h4>
                                                <p className="text-gray-600 text-lg">Votre catalogue a été envoyé par email.</p>
                                                <p className="text-sm text-gray-400 mt-4">Pensez à vérifier vos spams</p>
                                            </motion.div>
                                        ) : (
                                            <>
                                                <div className="grid grid-cols-2 gap-3 mb-3">
                                                    <div>
                                                        <label className="block text-xs font-bold text-[#1F3C32] mb-1.5">Prénom *</label>
                                                        <div className="relative">
                                                            <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                                            <input
                                                                type="text"
                                                                name="prenom"
                                                                value={formData.prenom}
                                                                onChange={handleInputChange}
                                                                required
                                                                className="w-full pl-9 pr-3 py-2.5 rounded-xl border-2 border-gray-200 focus:border-[#FFD200] focus:outline-none transition-colors bg-gray-50 text-sm"
                                                                placeholder="Marie"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <label className="block text-xs font-bold text-[#1F3C32] mb-1.5">Nom *</label>
                                                        <div className="relative">
                                                            <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                                            <input
                                                                type="text"
                                                                name="nom"
                                                                value={formData.nom}
                                                                onChange={handleInputChange}
                                                                required
                                                                className="w-full pl-9 pr-3 py-2.5 rounded-xl border-2 border-gray-200 focus:border-[#FFD200] focus:outline-none transition-colors bg-gray-50 text-sm"
                                                                placeholder="Dupont"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="mb-3">
                                                    <label className="block text-xs font-bold text-[#1F3C32] mb-1.5">Email *</label>
                                                    <div className="relative">
                                                        <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                                        <input
                                                            type="email"
                                                            name="email"
                                                            value={formData.email}
                                                            onChange={handleInputChange}
                                                            required
                                                            className="w-full pl-9 pr-3 py-2.5 rounded-xl border-2 border-gray-200 focus:border-[#FFD200] focus:outline-none transition-colors bg-gray-50 text-sm"
                                                            placeholder="marie@entreprise.com"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="mb-4">
                                                    <label className="block text-xs font-bold text-[#1F3C32] mb-1.5">Fonction</label>
                                                    <div className="relative">
                                                        <Building size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                                        <input
                                                            type="text"
                                                            name="fonction"
                                                            value={formData.fonction}
                                                            onChange={handleInputChange}
                                                            className="w-full pl-9 pr-3 py-2.5 rounded-xl border-2 border-gray-200 focus:border-[#FFD200] focus:outline-none transition-colors bg-gray-50 text-sm"
                                                            placeholder="DRH, Manager..."
                                                        />
                                                    </div>
                                                </div>

                                                <button
                                                    type="submit"
                                                    disabled={isSubmitting}
                                                    className="
                                                        w-full py-3.5 rounded-xl border-2 border-black
                                                        bg-[#FFD200] text-black font-bold text-base
                                                        shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                                                        hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
                                                        hover:translate-x-[2px] hover:translate-y-[2px]
                                                        active:shadow-none active:translate-x-[4px] active:translate-y-[4px]
                                                        transition-all duration-200
                                                        disabled:opacity-50 disabled:cursor-not-allowed
                                                        flex items-center justify-center gap-2
                                                    "
                                                >
                                                    {isSubmitting ? (
                                                        <>
                                                            <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                                                            Envoi...
                                                        </>
                                                    ) : (
                                                        <>
                                                            <Send size={18} />
                                                            Recevoir le catalogue
                                                        </>
                                                    )}
                                                </button>
                                            </>
                                        )}
                                    </form>
                                </div>
                            </div>
                        </motion.div>
                    </div >

                </div >
            </div >
        </section >
    );
}
