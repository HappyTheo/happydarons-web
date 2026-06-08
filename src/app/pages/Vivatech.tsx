import React, { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { HomePhoneMockup } from '../components/HomePhoneMockup';
import { Smartphone, Zap, Heart, ShieldCheck, Sparkles, Utensils, Users, GraduationCap, TicketPercent, Share, PlusSquare, MoreVertical, X, ArrowRight, Chrome } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AppleLogo = ({ size = 24, className = "" }) => (
    <img 
        src="https://img.icons8.com/ios11/512/FFFFFF/mac-os.png" 
        alt="Apple" 
        style={{ width: size, height: size }} 
        className={className} 
    />
);

const AndroidIcon = ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M17.523 15.3414C17.0609 15.3414 16.6917 14.9653 16.6917 14.4962C16.6917 14.0271 17.0609 13.651 17.523 13.651C17.9851 13.651 18.3543 14.0271 18.3543 14.4962C18.3543 14.9653 17.9851 15.3414 17.523 15.3414ZM6.477 15.3414C6.0149 15.3414 5.6457 14.9653 5.6457 14.4962C5.6457 14.0271 6.0149 13.651 6.477 13.651C6.9391 13.651 7.3083 14.0271 7.3083 14.4962C7.3083 14.9653 6.9391 15.3414 6.477 15.3414ZM17.9892 10.3702L19.7436 7.2847C19.8665 7.0691 19.7915 6.7917 19.5794 6.6669C19.3643 6.5435 19.0911 6.6186 18.9663 6.8329L17.1895 9.954C15.6983 9.2721 14.0456 8.8914 12.3083 8.8914C10.571 8.8914 8.9184 9.2721 7.4271 9.954L5.6503 6.8329C5.5255 6.6186 5.2523 6.5435 5.0372 6.6669C4.8251 6.7917 4.7501 7.0691 4.873 7.2847L6.6274 10.3702C3.1207 12.1648 0.7303 15.7267 0.3083 19.9142H23.6917C23.2697 15.7267 20.8793 12.1648 17.9892 10.3702Z" />
    </svg>
);

const PWAInstructions = ({ isModal = false }) => (
    <div className={`grid ${isModal ? 'grid-cols-1' : 'lg:grid-cols-2'} gap-12`}>
        {/* iOS */}
        <div className="bg-white p-12 rounded-[4rem] border-2 border-brand-pink shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-pink/20 rounded-bl-full" />
            <div className="flex items-center gap-5 mb-10">
                <div className="bg-black text-white p-4 rounded-2xl shadow-lg">
                    <AppleLogo size={32} />
                </div>
                <h3 className="text-3xl font-bold text-brand-green uppercase font-londrina tracking-wider">Sur iPhone</h3>
            </div>
            <ol className="space-y-6">
                {[
                    { step: 1, text: <>Ouvrez <strong>app.happydarons.fr</strong> dans Safari.</> },
                    { step: 2, text: <>Appuyez sur le bouton <strong>Partager</strong> <span className="inline-flex mx-1 p-1.5 bg-brand-pink rounded-lg border border-brand-green/10"><Share size={18} className="text-brand-green" /></span> (en bas).</> },
                    { step: 3, text: <>Appuyez sur <strong>Sur l'écran d'accueil</strong> <PlusSquare size={18} className="inline mx-1 text-brand-green" />.</> },
                    { step: 4, text: <>Validez en appuyant sur <strong>Ajouter</strong> en haut à droite.</> },
                ].map((item) => (
                    <li key={item.step} className="flex gap-6 items-start text-lg font-medium text-brand-dark-green">
                        <span className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold shadow-md">{item.step}</span>
                        <p className="pt-1">{item.text}</p>
                    </li>
                ))}
            </ol>
        </div>

        {/* Android */}
        <div className="bg-white p-12 rounded-[4rem] border-2 border-brand-green/10 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-green/5 rounded-bl-full" />
            <div className="flex items-center gap-5 mb-10">
                <div className="bg-[#3DDC84] text-white p-4 rounded-2xl shadow-lg">
                    <AndroidIcon size={32} />
                </div>
                <h3 className="text-3xl font-bold text-brand-green uppercase font-londrina tracking-wider">Sur Android</h3>
            </div>
            <ol className="space-y-6">
                {[
                    { step: 1, text: <>Ouvrez <strong>app.happydarons.fr</strong> dans Chrome.</> },
                    { step: 2, text: <>Appuyez sur les <strong>trois points</strong> <span className="inline-flex mx-1 p-1.5 bg-brand-pink rounded-lg border border-brand-green/10"><MoreVertical size={18} className="text-brand-green" /></span> en haut à droite.</> },
                    { step: 3, text: <>Appuyez sur <strong>Installer l'application</strong> ou <strong>Sur l'écran d'accueil</strong>.</> },
                    { step: 4, text: <>Confirmez l'installation.</> },
                ].map((item) => (
                    <li key={item.step} className="flex gap-6 items-start text-lg font-medium text-brand-dark-green">
                        <span className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold shadow-md">{item.step}</span>
                        <p className="pt-1">{item.text}</p>
                    </li>
                ))}
            </ol>
        </div>
    </div>
);

export function Vivatech() {
    const [showRedirectModal, setShowRedirectModal] = useState(false);
    const [countdown, setCountdown] = useState(15);
    const appUrl = "https://app.happydarons.fr";
    const qrUrl = "https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=" + appUrl + "&color=267b56&format=svg";

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (showRedirectModal && countdown > 0) {
            timer = setTimeout(() => setCountdown(countdown - 1), 1000);
        } else if (showRedirectModal && countdown === 0) {
            window.location.href = appUrl;
        }
        return () => clearTimeout(timer);
    }, [showRedirectModal, countdown]);

    const handleOpenApp = (e: React.MouseEvent) => {
        e.preventDefault();
        setShowRedirectModal(true);
        setCountdown(15);
    };

    return (
        <div className="min-h-screen bg-brand-cream text-brand-dark-green font-montserrat overflow-x-hidden">
            <Header />
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-brand-pink/40 rounded-full blur-3xl opacity-50" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-brand-pink/30 rounded-full blur-3xl opacity-50" />
            </div>

            <main className="pt-32 pb-20 relative z-10">
                <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20 text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <div className="inline-flex items-center gap-2 bg-brand-pink text-brand-green px-6 py-2 rounded-full font-bold mb-6 border-2 border-brand-green/10 shadow-sm">
                            <Sparkles size={18} /> VIVATECH 2026 • STAND HAPPYDARONS
                        </div>
                        <h1 className="text-6xl md:text-8xl font-londrina text-brand-green mb-8 leading-[0.9]">L'Écosystème qui libère<br />les parents salariés</h1>
                        <p className="text-xl md:text-2xl text-brand-dark-green max-w-3xl mx-auto mb-12 leading-relaxed font-medium">Plus qu'une app, un véritable compagnon de vie. <span className="text-brand-green font-bold text-2xl">HappyDarons</span> centralise tout.</p>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center mt-12 max-w-6xl mx-auto">
                        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
                            className="bg-white p-12 rounded-[4rem] shadow-[0_32px_64px_-16px_rgba(38,123,86,0.15)] border-4 border-brand-pink relative overflow-hidden">
                            <h3 className="text-3xl font-londrina text-brand-green mb-8 text-center">Scanner pour tester</h3>
                            <div className="bg-brand-pink-light p-6 rounded-[2.5rem] mb-8 inline-block shadow-inner border-2 border-brand-pink relative">
                                <img src={qrUrl} alt="QR Code" className="w-[260px] h-[260px] rounded-2xl relative z-10 mix-blend-multiply" />
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                                    <div className="bg-white p-2 rounded-2xl shadow-xl border-2 border-brand-pink"><div className="w-10 h-10 bg-brand-green rounded-xl flex items-center justify-center"><Heart size={20} className="text-white" fill="white" /></div></div>
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <button onClick={handleOpenApp} className="inline-flex items-center gap-3 text-white bg-brand-green px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-all shadow-lg shadow-brand-green/20">
                                    <Smartphone size={22} /> app.happydarons.fr
                                </button>
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="hidden lg:flex justify-center"><HomePhoneMockup /></motion.div>
                    </div>
                </section>

                <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    <div className="text-center mb-16"><h2 className="text-5xl font-londrina text-brand-green mb-4">Un écosystème à 360°</h2></div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-[3rem] border-2 border-brand-pink shadow-sm">
                            <div className="w-16 h-16 bg-brand-green rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-brand-green/20"><GraduationCap className="text-white" size={32} /></div>
                            <h3 className="text-2xl font-bold text-brand-green mb-4 text-center">Programmes Vidéo</h3>
                            <p className="text-brand-dark-green/80 font-medium">Une bibliothèque géante de contenus experts thématiques.</p>
                        </div>
                        <div className="bg-white p-8 rounded-[3rem] border-2 border-brand-pink shadow-sm">
                            <div className="w-16 h-16 bg-brand-accent rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-brand-accent/20"><Utensils className="text-white" size={32} /></div>
                            <h3 className="text-2xl font-bold text-brand-green mb-4 text-center">Family Hub</h3>
                            <p className="text-brand-dark-green/80 font-medium">Centralisez repas, courses et calendriers partagés.</p>
                        </div>
                        <div className="bg-white p-8 rounded-[3rem] border-2 border-brand-pink shadow-sm">
                            <div className="w-16 h-16 bg-brand-green rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-brand-green/20"><TicketPercent className="text-white" size={32} /></div>
                            <h3 className="text-2xl font-bold text-brand-green mb-4 text-center">Avantages Exclusifs</h3>
                            <p className="text-brand-dark-green/80 font-medium">Bénéficiez de crédits financés par votre employeur.</p>
                        </div>
                    </div>
                </section>

                <section id="instructions" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
                    <div className="text-center mb-16"><h2 className="text-5xl font-londrina text-brand-green mb-6 uppercase tracking-wider">Comment l'installer ?</h2></div>
                    <PWAInstructions />
                </section>
            </main>

            <AnimatePresence>
                {showRedirectModal && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-12">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowRedirectModal(false)} className="absolute inset-0 bg-brand-dark-green/80 backdrop-blur-xl" />
                        
                        <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
                            className="bg-brand-cream w-full max-w-7xl rounded-[4rem] shadow-2xl relative overflow-hidden border-4 border-brand-green overflow-y-auto max-h-[95vh]">
                            <button onClick={() => setShowRedirectModal(false)} className="absolute top-8 right-8 p-3 bg-brand-green/10 hover:bg-brand-pink rounded-full transition-colors z-20"><X size={32} className="text-brand-green" /></button>

                            <div className="p-8 sm:p-12 lg:p-20">
                                <div className="text-center mb-16">
                                    <h2 className="text-5xl md:text-6xl font-londrina text-brand-green mb-6 uppercase tracking-widest">Conseil d'installation</h2>
                                    <p className="text-2xl font-medium text-brand-dark-green/80">Redirection dans <span className="text-brand-green font-bold text-4xl">{countdown}s</span></p>
                                    <div className="w-full max-w-2xl mx-auto bg-brand-pink h-3 rounded-full mt-8 overflow-hidden">
                                        <motion.div initial={{ width: "100%" }} animate={{ width: "0%" }} transition={{ duration: 15, ease: "linear" }} className="bg-brand-green h-full" />
                                    </div>
                                </div>

                                <PWAInstructions isModal={true} />

                                <div className="flex flex-col sm:flex-row gap-8 justify-center mt-16">
                                    <a href={appUrl} className="bg-brand-green text-white px-12 py-6 rounded-3xl font-bold text-2xl flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-2xl shadow-brand-green/30">
                                        Aller maintenant <ArrowRight size={28} />
                                    </a>
                                    <button onClick={() => setShowRedirectModal(false)} className="bg-brand-pink text-brand-green border-2 border-brand-green px-12 py-6 rounded-3xl font-bold text-2xl hover:bg-brand-pink/60 transition-all">
                                        Rester sur le site
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <Footer />
        </div>
    );
}
