import { useState } from 'react';
import { Brain, BookOpen, Users, Briefcase, ChevronDown, Check, Wifi, Battery, Signal, Play, Pause, Heart, Calendar, MessageCircle, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function SolutionsFeatures() {
    const [activeTab, setActiveTab] = useState(0);

    // Internal state for phone interactivity simulations
    const [isPlaying, setIsPlaying] = useState(false);
    const [isBooked, setIsBooked] = useState(false);
    const [likedMessage, setLikedMessage] = useState(false);

    const features = [
        {
            id: 0,
            title: "Soulager la charge mentale",
            description: "Assistant IA intelligent, rappels automatiques et organisation familiale simplifiée pour un quotidien plus fluide.",
            details: [
                "Assistant IA intelligent",
                "Rappels automatiques (admin & médical)",
                "Agenda partagé & gestion du budget"
            ],
            benefit: "Un quotidien fluide, moins de stress, moins d’oublis.",
            icon: Brain,
            color: "#FFA6BF"
        },
        {
            id: 1,
            title: "S’informer & se former facilement",
            description: "Catalogue de ressources personnalisées et mini-programmes thématiques pour répondre à toutes vos questions.",
            details: [
                "Catalogue de ressources (Sommeil, émotions...)",
                "Mini-programmes thématiques",
                "Audios bien-être"
            ],
            benefit: "L’information juste, au bon moment.",
            icon: BookOpen,
            color: "#267B56"
        },
        {
            id: 2,
            title: "Ne plus jamais être seul.e",
            description: "Consultations d’experts, ateliers et une communauté bienveillante pour échanger et partager.",
            details: [
                "Consultations d’experts",
                "Ateliers & groupes de parole",
                "Communauté de parents"
            ],
            benefit: "Se sentir soutenu, compris et accompagné.",
            icon: Users,
            color: "#FFD200"
        },
        {
            id: 3,
            title: "Accéder à des services concrets",
            description: "Garde d’enfants, soutien scolaire, ménage... Des services partenaires fiables à portée de main.",
            details: [
                "Garde d’enfants & Soutien scolaire",
                "Ménage & Aide à domicile",
                "Livraison de repas post-partum"
            ],
            benefit: "Des solutions utiles, simples à activer.",
            icon: Briefcase,
            color: "#267B56"
        }
    ];

    return (
        <section className="relative pt-20 pb-20 lg:pt-32 lg:pb-32 bg-white overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000000 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 relative z-10">

                {/* Header Section */}
                <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-24">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#fae6e9] text-[#267B56] font-bold text-sm tracking-wide mb-6 uppercase">
                        APP MOBILE
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1F3C32] mb-6 leading-tight">
                        Tout ce dont un parent a besoin, <br className="hidden md:block" />
                        <span className="relative inline-block">
                            au même endroit.
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#FFA6BF]" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                            </svg>
                        </span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                        L’app qui allège la charge mentale et accompagne chaque parent, du projet bébé à l’adolescence.
                        Des ressources personnalisées. Des services pratiques. Des experts à portée de main.
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                    {/* Left Column: Interactive Tabs */}
                    <div className="lg:col-span-5 flex flex-col gap-4">
                        {features.map((feature, index) => (
                            <div
                                key={feature.id}
                                onClick={() => setActiveTab(index)}
                                className={`
                                    group cursor-pointer rounded-2xl p-6 transition-all duration-300 border-2
                                    ${activeTab === index
                                        ? 'bg-white border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] translate-x-[-2px] translate-y-[-2px]'
                                        : 'bg-white/50 border-gray-100 hover:bg-white hover:border-gray-200'
                                    }
                                `}
                            >
                                <div className="flex items-start gap-5">
                                    <div className={`
                                        w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 border-2 border-black
                                        ${activeTab === index ? 'bg-[#FFA6BF]' : 'bg-[#fae6e9]'}
                                    `}>
                                        <feature.icon size={24} className="text-black" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className={`text-2xl font-bold ${activeTab === index ? 'text-black' : 'text-gray-500 group-hover:text-black'}`}>
                                                {feature.title}
                                            </h3>
                                            {activeTab === index && (
                                                <ChevronDown className="bg-black text-white rounded-full p-1 w-6 h-6 rotate-[-90deg]" />
                                            )}
                                        </div>
                                        <AnimatePresence>
                                            {activeTab === index && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    className="overflow-hidden"
                                                >
                                                    <p className="text-gray-600 text-lg leading-relaxed mb-4">
                                                        {feature.description}
                                                    </p>
                                                    <ul className="space-y-2 mb-4">
                                                        {feature.details.map((detail, i) => (
                                                            <li key={i} className="flex items-center text-base font-medium text-gray-700">
                                                                <Check size={18} className="text-[#267B56] mr-3" />
                                                                {detail}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                    <div className="text-base font-bold text-[#267B56] bg-[#fae6e9] p-3 rounded-xl inline-block">
                                                        ✨ {feature.benefit}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                        {activeTab !== index && (
                                            <p className="text-gray-400 text-lg line-clamp-1">
                                                {feature.description}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}

                        <div className="mt-8 text-center lg:text-left pl-2">
                            <button
                                className="
                                    px-8 py-4 rounded-xl border-2 border-black
                                    shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                                    hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
                                    hover:translate-x-[2px] hover:translate-y-[2px]
                                    active:shadow-none active:translate-x-[4px] active:translate-y-[4px]
                                    transition-all duration-200
                                    text-white text-xl font-bold bg-[#FFA6BF]
                                "
                            >
                                Demander une démo
                            </button>
                        </div>
                    </div>

                    {/* Right Column: Phone Mockup Container */}
                    <div className="lg:col-span-7 flex justify-center items-center relative min-h-[750px] overflow-visible">

                        {/* Blurry Blobs Background - Resized Larger */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[#267B56] rounded-full blur-[150px] opacity-[0.12] z-0 pointer-events-none"></div>
                        <div className="absolute top-[20%] right-[-10%] w-[700px] h-[700px] bg-[#FFA6BF] rounded-full blur-[130px] opacity-[0.18] z-0 animate-pulse-slow pointer-events-none"></div>
                        <div className="absolute bottom-[5%] left-[5%] w-[600px] h-[600px] bg-[#FFD200] rounded-full blur-[110px] opacity-[0.12] z-0 pointer-events-none"></div>

                        {/* THE PHONE MOCKUP - REVERTED TO SMALLER SIZE (640x320) */}
                        <div className="relative z-10 border-gray-900 bg-gray-900 border-[12px] rounded-[3rem] h-[640px] w-[320px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] flex flex-col items-center select-none transform hover:scale-[1.02] transition-transform duration-500">
                            {/* Physical buttons */}
                            <div className="h-[32px] w-[3px] bg-gray-800 absolute -start-[15px] top-[72px] rounded-s-lg"></div>
                            <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[15px] top-[124px] rounded-s-lg"></div>
                            <div className="h-[46px] w-[3px] bg-gray-800 absolute -end-[15px] top-[142px] rounded-e-lg"></div>

                            {/* Screen */}
                            <div className="rounded-[2.2rem] overflow-hidden w-full h-full bg-white relative flex flex-col">
                                {/* Status Bar */}
                                <div className="h-8 bg-white flex items-center justify-between px-6 pt-2 pb-1 text-xs font-medium text-gray-900 z-20">
                                    <span>9:41</span>
                                    <div className="flex items-center gap-1.5">
                                        <Signal size={12} className="fill-current" />
                                        <Wifi size={12} />
                                        <Battery size={14} className="fill-current" />
                                    </div>
                                </div>

                                {/* Dynamic App Content */}
                                <div className="flex-1 overflow-y-auto overflow-x-hidden relative bg-gray-50">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={activeTab}
                                            initial={{ opacity: 0, scale: 0.98 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 1.02 }}
                                            transition={{ duration: 0.3 }}
                                            className="h-full w-full"
                                        >
                                            {/* 1. Charge Mentale - App Home + AI Chat */}
                                            {activeTab === 0 && (
                                                <div className="flex flex-col h-full bg-[#f8fafc]">
                                                    <div className="bg-[#FFA6BF] p-8 pb-10 rounded-b-[2.5rem] shadow-sm relative">
                                                        <div className="flex justify-between items-center mb-6">
                                                            <div className="w-10 h-10 bg-white/30 rounded-full flex items-center justify-center">
                                                                <Brain size={20} className="text-white" />
                                                            </div>
                                                            <div className="w-10 h-10 bg-white/30 rounded-full flex items-center justify-center">
                                                                <Briefcase size={20} className="text-white" />
                                                            </div>
                                                        </div>
                                                        <h3 className="text-2xl font-bold text-black leading-tight mb-2">Bonjour Marie,<br />prête pour aujourd'hui ?</h3>
                                                    </div>

                                                    <div className="px-6 -mt-8 flex-1 flex flex-col gap-4">
                                                        {/* AI Notification Bubble */}
                                                        <div className="bg-white p-5 rounded-2xl border-2 border-[#FFA6BF] shadow-lg relative animate-bounce-subtle">
                                                            <div className="absolute -top-3 left-4 bg-[#FFA6BF] text-black text-xs font-bold px-3 py-1 rounded-full border border-black flex items-center gap-1.5">
                                                                <Brain size={12} />
                                                                AI ASSISTANT
                                                            </div>
                                                            <div className="text-sm font-medium mt-2 text-gray-800">
                                                                "J'ai remarqué le rappel pédiatre de Léo à 14h. Veux-tu que j'ajoute le temps de trajet à ton agenda ?"
                                                            </div>
                                                            <div className="flex gap-3 mt-3">
                                                                <button className="bg-black text-white text-xs font-bold px-4 py-2 rounded-xl active:scale-95 transition-transform hover:bg-gray-800">Oui, merci</button>
                                                                <button className="bg-gray-100 text-gray-500 text-xs font-bold px-4 py-2 rounded-xl active:scale-95 transition-transform hover:bg-gray-200">Non</button>
                                                            </div>
                                                        </div>

                                                        {/* Reminder Card */}
                                                        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm cursor-pointer hover:bg-gray-50 transition-colors group">
                                                            <div className="flex justify-between items-start mb-2">
                                                                <span className="bg-red-100 text-red-600 text-[10px] font-bold px-2 py-0.5 rounded-full">URGENT</span>
                                                                <span className="text-sm text-gray-400 font-medium">14:00</span>
                                                            </div>
                                                            <div className="font-bold text-base mb-2 group-hover:text-[#267B56] transition-colors">Rdv Pédiatre - Léo</div>
                                                            <div className="flex items-center text-xs text-gray-500 gap-1.5">
                                                                <Briefcase size={14} />
                                                                <span>N'oublie pas le carnet de santé !</span>
                                                            </div>
                                                        </div>

                                                        {/* Routine Card */}
                                                        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex-1">
                                                            <div className="font-bold text-base mb-4">Ma To-Do Famille</div>
                                                            <div className="space-y-3">
                                                                <div className="flex items-center gap-3 cursor-pointer group">
                                                                    <div className="w-5 h-5 border-2 border-[#267B56] rounded-full flex items-center justify-center group-hover:bg-[#267B56]/10 transition-colors">
                                                                        <div className="w-2.5 h-2.5 bg-[#267B56] rounded-full"></div>
                                                                    </div>
                                                                    <span className="text-sm line-through text-gray-400">Inscription crèche</span>
                                                                </div>
                                                                <div className="flex items-center gap-3 cursor-pointer group">
                                                                    <div className="w-5 h-5 border-2 border-gray-300 rounded-full group-hover:border-[#267B56] transition-colors"></div>
                                                                    <span className="text-sm text-gray-700 font-medium group-hover:text-black transition-colors">Acheter couches T4</span>
                                                                </div>
                                                                <div className="flex items-center gap-3 cursor-pointer group">
                                                                    <div className="w-5 h-5 border-2 border-gray-300 rounded-full group-hover:border-[#267B56] transition-colors"></div>
                                                                    <span className="text-sm text-gray-700 font-medium group-hover:text-black transition-colors">Rdv Banque</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            {/* 2. Formation - Learning Hub + Audio Player */}
                                            {activeTab === 1 && (
                                                <div className="flex flex-col h-full bg-white relative">
                                                    <div className="p-6 border-b border-gray-100 bg-white sticky top-0 z-10">
                                                        <h3 className="text-xl font-bold text-gray-900">Bibliothèque 📚</h3>
                                                        <p className="text-sm text-gray-500">Vos parcours personnalisés</p>
                                                    </div>
                                                    <div className="p-6 space-y-5 pb-24 overflow-y-auto">
                                                        {/* Featured Course */}
                                                        <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#267B56] shadow-lg group cursor-pointer hover:shadow-xl transition-shadow">
                                                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center opacity-40 group-hover:opacity-50 transition-opacity"></div>
                                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                                                            <div className="absolute bottom-5 left-5 right-5">
                                                                <div className="text-[10px] text-[#FFD200] font-bold mb-1.5 uppercase tracking-wider">Module en cours</div>
                                                                <h4 className="text-white font-bold text-xl mb-2 leading-tight">Gestion des émotions de l'enfant</h4>
                                                                <div className="w-full h-1.5 bg-white/30 rounded-full overflow-hidden">
                                                                    <div className="w-[60%] h-full bg-[#FFD200]"></div>
                                                                </div>
                                                                <div className="flex justify-between text-[10px] text-gray-300 mt-1">
                                                                    <span>3/5 Leçons</span>
                                                                    <span>60%</span>
                                                                </div>
                                                            </div>
                                                            <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-xl">
                                                                <BookOpen size={18} className="text-white" />
                                                            </div>
                                                        </div>

                                                        {/* Categories */}
                                                        <div>
                                                            <h4 className="font-bold text-gray-900 mb-3">Catégories</h4>
                                                            <div className="grid grid-cols-2 gap-4">
                                                                <div className="bg-[#fae6e9] p-4 rounded-2xl cursor-pointer hover:bg-[#fae6e9]/80 transition-colors flex flex-col gap-2">
                                                                    <div className="text-2xl">😴</div>
                                                                    <div className="text-sm font-bold text-[#203b31]">Sommeil</div>
                                                                </div>
                                                                <div className="bg-[#e0f2fe] p-4 rounded-2xl cursor-pointer hover:bg-[#e0f2fe]/80 transition-colors flex flex-col gap-2">
                                                                    <div className="text-2xl">🧘‍♀️</div>
                                                                    <div className="text-sm font-bold text-[#0c4a6e]">Bien-être</div>
                                                                </div>
                                                                <div className="bg-[#f3e8ff] p-4 rounded-2xl cursor-pointer hover:bg-[#f3e8ff]/80 transition-colors flex flex-col gap-2">
                                                                    <div className="text-2xl">🍼</div>
                                                                    <div className="text-sm font-bold text-[#581c87]">Post-partum</div>
                                                                </div>
                                                                <div className="bg-[#ffedd5] p-4 rounded-2xl cursor-pointer hover:bg-[#ffedd5]/80 transition-colors flex flex-col gap-2">
                                                                    <div className="text-2xl">🏫</div>
                                                                    <div className="text-sm font-bold text-[#7c2d12]">Scolarité</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Mini Audio Player Sticky Bottom */}
                                                    <div className="absolute bottom-4 left-4 right-4 bg-[#203b31] rounded-2xl p-4 shadow-xl flex items-center justify-between text-white cursor-pointer hover:scale-[1.02] transition-transform border border-white/10" onClick={() => setIsPlaying(!isPlaying)}>
                                                        <div className="flex items-center gap-3">
                                                            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                                                                <div className="flex gap-[3px] items-end h-5">
                                                                    <motion.div animate={{ height: isPlaying ? [5, 15, 8, 18] : 5 }} transition={{ repeat: Infinity, duration: 0.5 }} className="w-1.5 bg-[#FFD200] rounded-full"></motion.div>
                                                                    <motion.div animate={{ height: isPlaying ? [12, 6, 18, 10] : 10 }} transition={{ repeat: Infinity, duration: 0.4 }} className="w-1.5 bg-[#FFD200] rounded-full"></motion.div>
                                                                    <motion.div animate={{ height: isPlaying ? [8, 18, 10, 15] : 8 }} transition={{ repeat: Infinity, duration: 0.6 }} className="w-1.5 bg-[#FFD200] rounded-full"></motion.div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="text-sm font-bold line-clamp-1">Podcast: Lâcher prise</div>
                                                                <div className="text-xs text-gray-400">Épisode 3 • 12 min</div>
                                                            </div>
                                                        </div>
                                                        <div className="w-10 h-10 bg-[#FFD200] rounded-full flex items-center justify-center text-[#203b31] hover:bg-white transition-colors">
                                                            {isPlaying ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" className="ml-1" />}
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            {/* 3. Community - Live Workshop Card */}
                                            {activeTab === 2 && (
                                                <div className="flex flex-col h-full bg-[#f8fafc]">
                                                    <div className="bg-white p-5 border-b border-gray-100 sticky top-0 z-10 shadow-sm">
                                                        <div className="flex items-center gap-4">
                                                            <div className="w-12 h-12 bg-[#FFD200] rounded-full border-2 border-black flex items-center justify-center font-bold text-sm overflow-hidden shadow-sm">
                                                                <Users size={22} />
                                                            </div>
                                                            <div>
                                                                <h3 className="font-bold text-base text-gray-900">Parents Zen 🧘‍♀️</h3>
                                                                <p className="text-xs text-green-600 font-bold flex items-center gap-1.5">
                                                                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                                                    12 membres en ligne
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="flex-1 p-5 space-y-6 overflow-y-auto">

                                                        {/* LIVE WORKSHOP CARD */}
                                                        <div className="bg-gradient-to-br from-[#267B56] to-[#1a2f27] rounded-2xl p-4 text-white shadow-lg relative overflow-hidden group cursor-pointer hover:scale-[1.02] transition-transform">
                                                            <div className="absolute top-0 right-0 bg-[#ef4444] text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl animate-pulse shadow-sm">LIVE REC</div>
                                                            <div className="relative z-10 flex gap-4 items-center">
                                                                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/10">
                                                                    <Calendar size={20} className="text-[#FFD200]" />
                                                                </div>
                                                                <div>
                                                                    <div className="text-[10px] text-[#FFD200] font-bold mb-1 uppercase tracking-wider">EN CE MOMENT</div>
                                                                    <div className="text-sm font-bold mb-0.5">Atelier : Le Sommeil de Bébé</div>
                                                                    <div className="text-[10px] text-gray-300">Avec Dr. Martin • 34 participants</div>
                                                                </div>
                                                            </div>
                                                            <button className="w-full mt-4 bg-white text-[#203b31] text-xs font-bold py-2.5 rounded-xl active:scale-95 transition-transform hover:bg-gray-100 shadow-sm">
                                                                Rejoindre le direct
                                                            </button>
                                                        </div>

                                                        {/* Date Separator */}
                                                        <div className="flex justify-center">
                                                            <span className="text-[10px] uppercase font-bold text-gray-400 bg-gray-100 px-3 py-1 rounded-full">Aujourd'hui</span>
                                                        </div>

                                                        {/* Messages */}
                                                        <div className="flex gap-3">
                                                            <div className="w-8 h-8 rounded-full bg-blue-100 flex-shrink-0 border border-white shadow-sm flex items-center justify-center text-xs font-bold">T</div>
                                                            <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-gray-100 shadow-sm text-sm text-gray-700 max-w-[85%] hover:bg-gray-50 transition-colors">
                                                                Hello les darons ! Quelqu'un a testé l'atelier sommeil ?
                                                                <div className="text-[10px] text-gray-300 mt-1 text-right">10:21</div>
                                                            </div>
                                                        </div>
                                                        <div className="flex gap-3 flex-row-reverse group cursor-pointer" onClick={() => setLikedMessage(!likedMessage)}>
                                                            <div className="w-8 h-8 rounded-full bg-[#fae6e9] flex-shrink-0 border border-white shadow-sm flex items-center justify-center text-xs font-bold">M</div>
                                                            <div className="bg-[#267B56] text-white p-4 rounded-2xl rounded-tr-none shadow-md text-sm max-w-[85%] relative">
                                                                Oui !! C'était top, je recommande à 100%. On dort enfin ! 😴
                                                                <div className="text-[10px] text-white/60 mt-1 text-right">10:24</div>
                                                                {likedMessage && (
                                                                    <div className="absolute -bottom-2 -left-2 bg-white rounded-full p-1 shadow-md animate-bounce-subtle">
                                                                        <Heart size={12} className="text-red-500 fill-red-500" />
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Input Area */}
                                                    <div className="p-4 bg-white border-t border-gray-100">
                                                        <div className="h-12 bg-gray-50 rounded-full border border-gray-200 w-full px-5 flex items-center text-sm text-gray-400 gap-3 cursor-text hover:border-gray-300 hover:bg-white transition-all shadow-inner">
                                                            <MessageCircle size={18} />
                                                            <span>Écrivez votre message...</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            {/* 4. Services - Credits Header */}
                                            {activeTab === 3 && (
                                                <div className="flex flex-col h-full bg-gray-50">
                                                    {/* Credit Balance Header */}
                                                    <div className="bg-[#267B56] p-6 pb-8 text-white rounded-b-[2rem] shadow-md relative overflow-hidden">
                                                        <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                                                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#FFD200]/20 rounded-full -ml-10 -mb-10 blur-xl"></div>

                                                        <div className="relative z-10 flex justify-between items-center mb-1">
                                                            <span className="text-xs font-bold tracking-wide text-green-100 uppercase">Mon Solde</span>
                                                            <div className="bg-[#FFD200] text-[#203b31] text-[9px] font-bold px-2 py-0.5 rounded-full shadow-sm">+50 offerts</div>
                                                        </div>
                                                        <div className="text-4xl font-bold mb-1 tracking-tight">150 <span className="text-base font-medium opacity-80">Crédits</span></div>
                                                        <div className="text-[10px] text-green-100 font-medium">Renouvellement le 01/03</div>
                                                    </div>

                                                    <div className="p-4 -mt-6 flex-1 overflow-y-auto no-scrollbar">
                                                        <div className="grid grid-cols-2 gap-3 pb-4">
                                                            {[
                                                                { name: "Garde", sub: "Yoopala", icon: "🧸", color: "bg-blue-50", text: "text-blue-600" },
                                                                { name: "Ménage", sub: "Domicile", icon: "🧹", color: "bg-green-50", text: "text-green-600" },
                                                                { name: "Soutien", sub: "Scolaire", icon: "🎓", color: "bg-yellow-50", text: "text-yellow-600" },
                                                                { name: "Repas", sub: "Post-partum", icon: "🍲", color: "bg-purple-50", text: "text-purple-600" },
                                                                { name: "Loisirs", sub: "Famille", icon: "🎨", color: "bg-pink-50", text: "text-pink-600" },
                                                                { name: "Transport", sub: "École", icon: "🚗", color: "bg-orange-50", text: "text-orange-600" }
                                                            ].map((service, i) => (
                                                                <motion.div
                                                                    key={i}
                                                                    initial={{ opacity: 0, y: 20 }}
                                                                    animate={{ opacity: 1, y: 0 }}
                                                                    transition={{ delay: 0.1 * i, duration: 0.3 }}
                                                                    className="bg-white p-4 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center justify-center gap-2 aspect-square cursor-pointer hover:shadow-lg hover:border-[#267B56]/30 hover:-translate-y-1 transition-all active:scale-95 group relative overflow-hidden"
                                                                    onClick={() => setIsBooked(true)}
                                                                >
                                                                    <div className={`w-12 h-12 ${service.color} rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform shadow-xs`}>{service.icon}</div>
                                                                    <div className="text-center z-10 w-full">
                                                                        <span className="text-sm font-bold block text-gray-900 truncate">{service.name}</span>
                                                                        <span className="text-[10px] text-gray-400 font-medium uppercase tracking-wide truncate block">{service.sub}</span>
                                                                    </div>
                                                                    <div className="mt-1 bg-gray-50 text-gray-600 text-[10px] font-bold px-2 py-1 rounded-lg group-hover:bg-[#267B56] group-hover:text-white transition-colors">
                                                                        20 crédits
                                                                    </div>
                                                                </motion.div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </motion.div>
                                    </AnimatePresence>
                                </div>

                                {/* Home Bar */}
                                <div className="h-8 bg-white w-full flex justify-center items-center z-20">
                                    <div className="w-40 h-1.5 bg-gray-200 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
