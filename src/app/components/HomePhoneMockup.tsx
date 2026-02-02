import React from 'react';
import { Signal, Wifi, Battery, Brain, Briefcase } from 'lucide-react';

export function HomePhoneMockup() {
    return (
        <div className="relative z-10 border-gray-900 bg-gray-900 border-[12px] rounded-[3rem] h-[640px] w-[320px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] flex flex-col items-center select-none transform hover:scale-[1.02] transition-transform duration-500 origin-center scale-90 sm:scale-100">
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

                {/* App Content - Bonjour Marie Screen */}
                <div className="flex-1 overflow-y-auto overflow-x-hidden relative bg-gray-50">
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
                </div>

                {/* Home Bar */}
                <div className="h-8 bg-white w-full flex justify-center items-center z-20">
                    <div className="w-40 h-1.5 bg-gray-200 rounded-full"></div>
                </div>
            </div>
        </div>
    );
}
