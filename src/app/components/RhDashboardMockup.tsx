import React, { useState } from 'react';
import {
    Search, Bell, LayoutDashboard, FileText, GraduationCap, Users, Settings,
    Download, TrendingUp, PieChart, FileCheck, MessageCircle, Star, Play, Video
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function RhDashboardMockup({ activeTab, onTabChange }: { activeTab?: number; onTabChange?: (tab: number) => void }) {
    const [internalTab, setInternalTab] = useState(0);

    // Use controlled state if activeTab is provided, otherwise use internal state
    const currentTab = activeTab !== undefined ? activeTab : internalTab;

    const handleTabChange = (index: number) => {
        if (onTabChange) {
            onTabChange(index);
        }
        setInternalTab(index);
    };

    return (
        <div className="relative z-10 w-full max-w-[800px] bg-white rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] border border-gray-200 overflow-hidden flex flex-col aspect-auto lg:aspect-[16/10] hover:scale-[1.01] transition-transform duration-500">

            {/* Dashboard Header */}
            <div className="h-14 border-b border-gray-100 flex items-center justify-between px-4 lg:px-6 bg-white shrink-0">
                <div className="flex items-center gap-2 lg:gap-4">
                    <div className="flex gap-1.5 shrink-0">
                        <div className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-red-400"></div>
                        <div className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="h-4 w-px bg-gray-200 mx-1 lg:mx-2 hidden sm:block"></div>
                    <div className="hidden sm:flex items-center gap-2 text-gray-400 bg-gray-50 px-3 py-1.5 rounded-lg text-xs w-48 lg:w-64">
                        <Search size={14} />
                        <span className="truncate">Rechercher...</span>
                    </div>
                </div>
                <div className="flex items-center gap-2 lg:gap-3">
                    <div className="p-2 hover:bg-gray-50 rounded-lg cursor-pointer text-gray-400 relative">
                        <Bell size={18} />
                        <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#267B56] flex items-center justify-center text-white text-xs font-bold">HR</div>
                </div>
            </div>

            <div className="flex flex-1 overflow-hidden">
                {/* Sidebar - Retracted */}
                <div className="w-12 lg:w-16 bg-gray-50 border-r border-gray-100 flex flex-col py-4 lg:py-6 shrink-0 transition-all duration-300 items-center">
                    <div className="mb-4 lg:mb-8">
                        <div className="w-8 h-8 rounded-lg bg-[#1F3C32] flex items-center justify-center font-bold text-white text-xs">HD</div>
                    </div>
                    <div className="flex flex-col gap-1 lg:gap-2 px-1 lg:px-2 w-full">
                        <div className={`flex justify-center p-2 lg:p-2.5 rounded-lg cursor-pointer ${currentTab === 0 ? 'bg-white text-[#267B56] shadow-sm' : 'text-gray-500 hover:bg-gray-100'}`} onClick={() => handleTabChange(0)} title="Tableau de bord">
                            <LayoutDashboard size={18} className="lg:w-5 lg:h-5" />
                        </div>
                        <div className={`flex justify-center p-2 lg:p-2.5 rounded-lg cursor-pointer ${currentTab === 1 ? 'bg-white text-[#FFA6BF] shadow-sm' : 'text-gray-500 hover:bg-gray-100'}`} onClick={() => handleTabChange(1)} title="Documents RH">
                            <FileText size={18} className="lg:w-5 lg:h-5" />
                        </div>
                        <div className={`flex justify-center p-2 lg:p-2.5 rounded-lg cursor-pointer ${currentTab === 2 ? 'bg-white text-[#FFD200] shadow-sm' : 'text-gray-500 hover:bg-gray-100'}`} onClick={() => handleTabChange(2)} title="Formation">
                            <GraduationCap size={18} className="lg:w-5 lg:h-5" />
                        </div>
                        <div className="mt-2 lg:mt-4 pt-2 lg:pt-4 border-t border-gray-200 w-full">
                            <div className="flex justify-center p-2 text-gray-500 hover:bg-gray-100 rounded-lg cursor-pointer" title="Collaborateurs">
                                <Users size={18} className="lg:w-[18px] lg:h-[18px]" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-auto px-1 lg:px-2 w-full">
                        <div className="flex justify-center p-2 lg:p-2.5 text-gray-500 hover:bg-gray-100 rounded-lg cursor-pointer" title="Paramètres">
                            <Settings size={18} className="lg:w-5 lg:h-5" />
                        </div>
                    </div>
                </div>

                {/* Main Content Canvas */}
                <div className="flex-1 bg-white p-4 lg:p-8 overflow-y-auto w-full relative h-[400px] lg:h-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentTab}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="h-full"
                        >
                            {/* TAB 0: PILOTER (Analytics) */}
                            {currentTab === 0 && (
                                <div className="space-y-6">
                                    <div className="flex justify-between items-end">
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-900">Vue d'ensemble</h3>
                                            <p className="text-sm text-gray-500">Données en temps réel de votre politique parentale</p>
                                        </div>
                                        <button className="flex items-center gap-2 text-xs font-bold bg-white border border-gray-200 px-3 py-2 rounded-lg hover:bg-gray-50">
                                            <Download size={14} /> Exporter
                                        </button>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-4">
                                        <div className="p-3 lg:p-4 rounded-xl border border-gray-100 bg-green-50/50">
                                            <div className="text-[10px] lg:text-xs text-gray-500 font-bold uppercase mb-1">Futurs Parents</div>
                                            <div className="text-2xl lg:text-3xl font-bold text-[#267B56]">12</div>
                                            <div className="text-[10px] text-green-600 flex items-center mt-1"><TrendingUp size={10} className="mr-1" /> +2 ce mois</div>
                                        </div>
                                        <div className="p-3 lg:p-4 rounded-xl border border-gray-100 bg-pink-50/50">
                                            <div className="text-[10px] lg:text-xs text-gray-500 font-bold uppercase mb-1">Congés Maternité</div>
                                            <div className="text-2xl lg:text-3xl font-bold text-[#FFA6BF]">8</div>
                                            <div className="text-[10px] text-gray-400 mt-1">Actuellement actifs</div>
                                        </div>
                                        <div className="p-3 lg:p-4 rounded-xl border border-gray-100 bg-blue-50/50">
                                            <div className="text-[10px] lg:text-xs text-gray-500 font-bold uppercase mb-1">Retours Post-Partum</div>
                                            <div className="text-2xl lg:text-3xl font-bold text-blue-600">5</div>
                                            <div className="text-[10px] text-blue-600 flex items-center mt-1">100% Retention</div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-3 gap-6 h-48">
                                        <div className="col-span-2 rounded-xl border border-gray-100 p-4 flex flex-col">
                                            <div className="text-sm font-bold text-gray-700 mb-4">Utilisation des Services</div>
                                            <div className="flex-1 flex items-end justify-between gap-2 px-2">
                                                {[40, 65, 30, 85, 50, 75, 60].map((h, i) => (
                                                    <div key={i} className="w-full bg-gray-100 rounded-t-sm relative group">
                                                        <div style={{ height: `${h}%` }} className="absolute bottom-0 w-full bg-[#267B56] rounded-t-sm opacity-80 group-hover:opacity-100 transition-opacity"></div>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="flex justify-between text-[10px] text-gray-400 mt-2 px-1">
                                                <span>Lun</span><span>Mar</span><span>Mer</span><span>Jeu</span><span>Ven</span><span>Sam</span><span>Dim</span>
                                            </div>
                                        </div>
                                        <div className="col-span-1 rounded-xl border border-gray-100 p-4 flex flex-col items-center justify-center relative">
                                            <div className="absolute top-4 left-4 text-sm font-bold text-gray-700">Budget</div>
                                            <PieChart className="text-gray-200 w-24 h-24" />
                                            <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-gray-400">75%</div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* TAB 1: STRUCTURER (Documents / Kits) */}
                            {currentTab === 1 && (
                                <div className="space-y-6">
                                    <div className="flex justify-between items-center mb-2">
                                        <h3 className="text-2xl font-bold text-gray-900">Kits & Documents</h3>
                                        <span className="text-xs bg-[#FFA6BF]/20 text-pink-700 font-bold px-2 py-1 rounded-md">Bibliothèque RH</span>
                                    </div>

                                    <div className="space-y-3">
                                        <div className="flex items-center p-4 rounded-xl border border-gray-100 hover:border-pink-200 hover:bg-pink-50/30 transition-colors cursor-pointer group">
                                            <div className="w-10 h-10 rounded-lg bg-pink-100 flex items-center justify-center text-pink-600 mr-4 group-hover:scale-110 transition-transform">
                                                <FileCheck size={20} />
                                            </div>
                                            <div className="flex-1">
                                                <div className="text-sm font-bold text-gray-900">Checklist Départ Congé Maternité</div>
                                                <div className="text-xs text-gray-500">Mis à jour le 24/01/2026</div>
                                            </div>
                                            <Download size={16} className="text-gray-300 group-hover:text-pink-500" />
                                        </div>

                                        <div className="flex items-center p-4 rounded-xl border border-gray-100 hover:border-pink-200 hover:bg-pink-50/30 transition-colors cursor-pointer group">
                                            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 mr-4 group-hover:scale-110 transition-transform">
                                                <MessageCircle size={20} />
                                            </div>
                                            <div className="flex-1">
                                                <div className="text-sm font-bold text-gray-900">Templates d'annonce aux équipes</div>
                                                <div className="text-xs text-gray-500">3 modèles disponibles</div>
                                            </div>
                                            <Download size={16} className="text-gray-300 group-hover:text-blue-500" />
                                        </div>

                                        <div className="flex items-center p-4 rounded-xl border border-gray-100 hover:border-pink-200 hover:bg-pink-50/30 transition-colors cursor-pointer group">
                                            <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center text-green-600 mr-4 group-hover:scale-110 transition-transform">
                                                <Star size={20} />
                                            </div>
                                            <div className="flex-1">
                                                <div className="text-sm font-bold text-gray-900">Guide de l'entretien de retour</div>
                                                <div className="text-xs text-gray-500">PDF • 12 pages</div>
                                            </div>
                                            <Download size={16} className="text-gray-300 group-hover:text-green-500" />
                                        </div>
                                    </div>

                                    <div className="p-4 bg-gray-50 rounded-xl border border-dashed border-gray-300 flex flex-col items-center justify-center text-center">
                                        <div className="text-sm font-bold text-gray-600 mb-1">Besoin d'un document spécifique ?</div>
                                        <button className="text-xs text-[#FFA6BF] font-bold hover:underline">Demander à l'expert juridique</button>
                                    </div>
                                </div>
                            )}

                            {/* TAB 2: FORMER (Managers) */}
                            {currentTab === 2 && (
                                <div className="space-y-6">
                                    <div className="flex justify-between items-center mb-2">
                                        <h3 className="text-2xl font-bold text-gray-900">Formation Managers</h3>
                                        <span className="text-xs bg-[#FFD200]/20 text-yellow-700 font-bold px-2 py-1 rounded-md">E-Learning</span>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="col-span-2 p-1 rounded-xl border border-gray-100 shadow-sm overflow-hidden group cursor-pointer hover:shadow-md transition-all">
                                            <div className="h-32 bg-gray-200 relative overflow-hidden rounded-lg">
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                                                <div className="absolute bottom-3 left-3 z-20 text-white">
                                                    <div className="text-[10px] font-bold bg-[#FFD200] text-black px-1.5 py-0.5 rounded inline-block mb-1">NOUVEAU</div>
                                                    <div className="font-bold text-sm">Réussir l'entretien de retour</div>
                                                </div>
                                                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700"></div>
                                                <div className="absolute center inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-30">
                                                    <div className="w-10 h-10 bg-white/30 backdrop-blur rounded-full flex items-center justify-center">
                                                        <Play size={20} className="fill-white text-white ml-1" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-4 rounded-xl border border-gray-100 bg-white hover:border-yellow-300 transition-colors cursor-pointer flex flex-col gap-2">
                                            <Video size={24} className="text-[#FFD200]" />
                                            <div className="font-bold text-sm leading-tight text-gray-800">Le cadre légal en 5 min</div>
                                            <div className="text-[10px] text-gray-400 mt-auto">Video • 5:00</div>
                                        </div>

                                        <div className="p-4 rounded-xl border border-gray-100 bg-white hover:border-yellow-300 transition-colors cursor-pointer flex flex-col gap-2">
                                            <MessageCircle size={24} className="text-[#FFD200]" />
                                            <div className="font-bold text-sm leading-tight text-gray-800">Cas pratiques</div>
                                            <div className="text-[10px] text-gray-400 mt-auto">Quiz • 10 min</div>
                                        </div>
                                    </div>

                                    <div className="bg-[#FFD200]/10 p-3 rounded-lg flex items-start gap-3">
                                        <div className="bg-[#FFD200] rounded-full p-1 mt-0.5 shrink-0"><Star size={12} className="text-white fill-white" /></div>
                                        <div>
                                            <div className="text-sm font-bold text-gray-900">Atelier Inclusivité</div>
                                            <div className="text-xs text-gray-600">Prochaine session le 12 Mars</div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
