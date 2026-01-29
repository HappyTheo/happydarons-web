import { useState } from 'react';
import { LayoutDashboard, GraduationCap, Smartphone, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function SolutionsFeatures() {
    const [activeTab, setActiveTab] = useState(0);

    const features = [
        {
            id: 0,
            title: "Pilotage RH Simplifié",
            description: "Un dashboard complet pour suivre les indicateurs clés de parentalité et piloter votre politique QVT en toute simplicité.",
            icon: LayoutDashboard,
            imageColor: "#267B56"
        },
        {
            id: 1,
            title: "Formation & Culture",
            description: "Des parcours de sensibilisation pour les managers et des contenus éducatifs pour ancrer une culture bienveillante.",
            icon: GraduationCap,
            imageColor: "#FFA6BF"
        },
        {
            id: 2,
            title: "App Compagnon",
            description: "Une application mobile dédiée pour accompagner les collaborateurs parents au quotidien dans leurs défis.",
            icon: Smartphone,
            imageColor: "#FFD200" // Adding a pop of yellow for variety or stick to brand
        }
    ];

    return (
        <section className="relative pt-20 pb-20 lg:pt-32 lg:pb-32 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">

                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#fae6e9] text-[#267B56] font-bold text-sm tracking-wide mb-6 uppercase">
                        NOS SOLUTIONS
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1F3C32] mb-6 leading-tight">
                        Une suite complète pour <br className="hidden md:block" />
                        <span className="relative inline-block">
                            soutenir la parentalité
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#FFA6BF]" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                            </svg>
                        </span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600">
                        La plateforme tout-en-un qui connecte les besoins des salariés-parents
                        avec les objectifs RSE de votre entreprise.
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">

                    {/* Left Column: Interactive Tabs */}
                    <div className="lg:col-span-5 flex flex-col gap-6">
                        {features.map((feature, index) => (
                            <div
                                key={feature.id}
                                onClick={() => setActiveTab(index)}
                                className={`
                                    group cursor-pointer rounded-2xl p-6 transition-all duration-300 border-2
                                    ${activeTab === index
                                        ? 'bg-white border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] translate-x-[-2px] translate-y-[-2px]'
                                        : 'bg-transparent border-transparent hover:bg-gray-50'
                                    }
                                `}
                            >
                                <div className="flex items-start gap-4">
                                    <div className={`
                                        w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 border-2 border-black
                                        ${activeTab === index ? 'bg-[#FFA6BF]' : 'bg-[#fae6e9]'}
                                    `}>
                                        <feature.icon size={24} className="text-black" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className={`text-xl font-bold ${activeTab === index ? 'text-black' : 'text-gray-500 group-hover:text-black'}`}>
                                                {feature.title}
                                            </h3>
                                            {activeTab === index && (
                                                <ChevronDown className="bg-black text-white rounded-full p-1 w-6 h-6 rotate-[-90deg]" />
                                            )}
                                        </div>
                                        <AnimatePresence>
                                            {activeTab === index && (
                                                <motion.p
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    className="text-gray-600 leading-relaxed overflow-hidden"
                                                >
                                                    {feature.description}
                                                </motion.p>
                                            )}
                                        </AnimatePresence>
                                        {activeTab !== index && (
                                            <p className="text-gray-400 line-clamp-1">
                                                {feature.description}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Column: Dynamic Image/Preview */}
                    <div className="lg:col-span-7 relative h-[400px] lg:h-[600px] w-full">
                        <div className="absolute inset-0 bg-[#fae6e9] rounded-[32px] border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
                            {/* Decorative header of the "app window" */}
                            <div className="h-8 border-b-2 border-black bg-white flex items-center px-4 space-x-2">
                                <div className="w-3 h-3 rounded-full bg-red-400 border border-black"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-400 border border-black"></div>
                                <div className="w-3 h-3 rounded-full bg-green-400 border border-black"></div>
                            </div>

                            {/* Dynamic Content Area */}
                            <div className="relative h-full w-full bg-gray-50 flex items-center justify-center p-8">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeTab}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.3 }}
                                        className="text-center"
                                    >
                                        {/* Placeholder illustration for now - ideally actual screenshots */}
                                        <div className="relative">
                                            {activeTab === 0 && (
                                                <div className="bg-white p-6 rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] max-w-sm mx-auto">
                                                    <div className="flex items-center gap-3 mb-4">
                                                        <div className="w-10 h-10 rounded-full bg-[#267B56] flex items-center justify-center text-white font-bold">85%</div>
                                                        <div className="text-left">
                                                            <div className="text-sm font-bold">Score QVT</div>
                                                            <div className="text-xs text-gray-500">Mise à jour hier</div>
                                                        </div>
                                                    </div>
                                                    <div className="h-32 bg-gray-100 rounded-lg mb-4 flex items-end justify-between p-2">
                                                        <div className="w-8 bg-[#FFA6BF] h-[40%] rounded-t"></div>
                                                        <div className="w-8 bg-[#267B56] h-[70%] rounded-t"></div>
                                                        <div className="w-8 bg-[#FFA6BF] h-[50%] rounded-t"></div>
                                                        <div className="w-8 bg-[#267B56] h-[90%] rounded-t"></div>
                                                    </div>
                                                    <p className="text-sm font-medium">Analyse en temps réel de votre impact.</p>
                                                </div>
                                            )}

                                            {activeTab === 1 && (
                                                <div className="bg-white p-6 rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] max-w-sm mx-auto">
                                                    <div className="mb-4">
                                                        <span className="bg-[#FFA6BF] px-3 py-1 rounded-full text-xs font-bold border border-black">Module 1</span>
                                                    </div>
                                                    <h4 className="text-xl font-bold mb-2">Comprendre la charge mentale</h4>
                                                    <div className="flex -space-x-2 mb-4 justify-center">
                                                        {[1, 2, 3].map(i => (
                                                            <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white"></div>
                                                        ))}
                                                    </div>
                                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                                        <div className="bg-[#267B56] h-2 rounded-full w-[60%]"></div>
                                                    </div>
                                                </div>
                                            )}

                                            {activeTab === 2 && (
                                                <div className="relative mx-auto border-gray-800 bg-gray-800 border-[8px] rounded-[2.5rem] h-[300px] w-[180px] shadow-xl flex flex-col">
                                                    <div className="h-[32px] w-[3px] bg-gray-800 absolute -start-[10px] top-[72px] rounded-s-lg"></div>
                                                    <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[10px] top-[124px] rounded-s-lg"></div>
                                                    <div className="h-[46px] w-[3px] bg-gray-800 absolute -end-[10px] top-[142px] rounded-e-lg"></div>
                                                    <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white relative">
                                                        <div className="bg-[#267B56] h-1/3 w-full p-4 text-white">
                                                            <div className="text-xs">Bonjour,</div>
                                                            <div className="font-bold text-lg">Marie</div>
                                                        </div>
                                                        <div className="p-4">
                                                            <div className="bg-[#fae6e9] p-2 rounded-lg mb-2">
                                                                <div className="h-2 w-16 bg-gray-300 rounded mb-1"></div>
                                                                <div className="h-2 w-24 bg-gray-300 rounded"></div>
                                                            </div>
                                                            <div className="bg-gray-100 p-2 rounded-lg">
                                                                <div className="h-2 w-12 bg-gray-300 rounded mb-1"></div>
                                                                <div className="h-2 w-20 bg-gray-300 rounded"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Floating Decorative Elements */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#267B56] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#FFA6BF] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
