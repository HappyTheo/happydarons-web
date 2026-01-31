import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import confetti from "canvas-confetti";
import imgHero from "@/assets/1dbc17ebcbcc9a9e6bd2200ca3c80b6af952eb95.webp";
import imgHeroBg from "@/assets/40b3b75ab6b28adeae2dec5506df869ea93e0f8d.webp";
import imgLogo1 from "@/assets/dfeeb57e51fd516a0374fc221864e4890eb4d8f0.webp";
import imgLogo2 from "@/assets/39a652a1f8d82824c98570dc063a819885b107bc.webp";

const stats = [
	{
		icon: "📈",
		value: "+8%",
		label: "ROI grâce à une politique de parentalité efficace",
		highlight: "ROI",
		source: "Source : Étude interne HappyDarons",
	},
	{
		icon: "💰",
		value: "-50%",
		label: "finançables via le Crédit d'Impôt Famille",
		highlight: "Crédit d'Impôt Famille",
		source: "Source : Code Général des Impôts",
	},
	{
		icon: "📋",
		value: "-30%",
		label: "d'absentéisme évitable lié à la parentalité",
		highlight: "d'absentéisme",
		source: "Source : Baromètre Absentéisme 2023",
	},
	{
		icon: "🎯",
		value: "15 à 25K€",
		label: "économisés grâce à la baisse du turnover",
		highlight: "turnover",
		source: "Source : Étude Work Institute",
	},
	{
		icon: "👥",
		value: "",
		label: "Applicable à toutes les catégories de salariés (cadres, ouvriers, etc.)",
		highlight: "catégories de salariés",
		source: "Source : Politique RH inclusive",
	},
	{
		icon: "💚",
		value: "",
		label: "Améliorer sa marque employeur",
		highlight: "marque employeur",
		source: "Source : Marque Employeur 2024",
	},
];

const logos = [imgLogo1, imgLogo2, imgLogo1, imgLogo2, imgLogo1, imgLogo2, imgLogo1, imgLogo2];

function StatCard({ icon, value, label, highlight, source }: { icon: string; value: string; label: string; highlight: string; source: string }) {
	const [isFlipped, setIsFlipped] = useState(false);
	const parts = label.split(highlight);

	const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (isFlipped) {
			setIsFlipped(false);
			return;
		}

		setIsFlipped(true);

		const rect = e.currentTarget.getBoundingClientRect();
		const x = (rect.left + rect.width / 2) / window.innerWidth;
		const y = (rect.top + rect.height / 2) / window.innerHeight;

		confetti({
			origin: { x, y },
			particleCount: 100,
			spread: 70,
			zIndex: 100,
		});

		// Auto-reset after 1.8 seconds
		setTimeout(() => {
			setIsFlipped(false);
		}, 1800);
	};

	return (
		<div onClick={handleClick} className="group perspective-1000 select-none cursor-pointer w-[160px] lg:w-[200px] h-[140px] lg:h-[160px]">
			<div className={`relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)_translateY(4px)] shadow-[0px_0px_0px_0px_rgba(0,0,0,1)]' : 'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1'} rounded-lg`}>
				{/* Front Face */}
				<div className="absolute inset-0 bg-white rounded-lg p-3 lg:p-4 border-2 border-black flex flex-col items-center justify-center gap-2 lg:gap-3 text-center [backface-visibility:hidden]">
					<div className="w-8 h-8 lg:w-12 lg:h-12 rounded-full bg-[#fae6e9] flex items-center justify-center text-sm lg:text-xl flex-shrink-0">
						{icon}
					</div>
					<div className="w-full">
						{value && (
							<p className="text-base lg:text-xl font-bold text-[#203b31] mb-1">{value}</p>
						)}
						<p className="text-[10px] lg:text-sm text-gray-600 leading-tight">
							{parts[0]}
							<span className="font-semibold text-[#267b56]">{highlight}</span>
							{parts[1]}
						</p>
					</div>
				</div>

				{/* Back Face */}
				<div className="absolute inset-0 bg-[#fae6e9] rounded-lg p-4 border-2 border-black flex items-center justify-center text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
					<p className="text-xs lg:text-sm font-medium text-[#203b31]">
						{source}
					</p>
				</div>
			</div>
		</div>
	);
}

export function Hero() {
	const navigate = useNavigate();

	return (
		<section className="relative min-h-screen overflow-hidden pt-40 lg:pt-38" style={{ background: 'radial-gradient(circle at top right, #357F5D 0%, #203B31 60%)' }}>
			{/* Content */}
			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 lg:pt-16">
				<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 lg:mb-6 leading-tight">
					Faites de la{' '}
					<span className="text-[#ffa6bf]">parentalité</span>
					{' '}un levier{' '}
					<br className="hidden sm:block" />
					d'engagement !
				</h1>

				<p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#fae6e9] max-w-3xl mx-auto mb-6 lg:mb-8 px-4">
					La solution qui soutient le quotidien des parents et simplifie la vie des RH.
				</p>

				<button
					onClick={() => navigate('/nos-solutions')}
					className="w-auto bg-[#ffa6bf] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all text-base sm:text-lg font-medium mb-8 lg:mb-12"
				>
					Découvrir nos solutions
				</button>
			</div>

			{/* Hero image with stat cards */}
			{/* Hero image with stat cards */}
			<div className="relative max-w-6xl mx-auto px-4 pb-8 lg:pb-16 min-h-[400px]">
				{/* Image and Background Wrapper for Alignment */}
				<div className="relative flex justify-center items-end">
					{/* Background photo - Truly in the background */}
					<div className="absolute inset-0 z-0 flex items-end justify-center">
						<div className="relative w-full h-[85%] rounded-[100px] lg:rounded-[200px] overflow-hidden border-2 lg:border-4 border-[#7ab8a0]/30 shadow-2xl blur-[2px] lg:blur-[6px]">
							<img
								src={imgHeroBg}
								alt=""
								className="w-full h-full object-cover scale-110 opacity-40 lg:opacity-60"
							/>
							<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#203b31]/80" />
						</div>
					</div>

					{/* Central hero image */}
					<div className="relative z-10 flex justify-center">
						<img
							src={imgHero}
							alt="Parent avec enfant"
							className="w-full max-w-[280px] sm:max-w-sm lg:max-w-xl h-auto object-contain scale-110 origin-bottom"
						/>
					</div>
				</div>

				{/* Stat cards - Desktop layout */}
				<div className="hidden lg:block">
					{/* Left side cards */}
					<div className="absolute left-0 top-[5%] z-20">
						<StatCard {...stats[0]} />
					</div>
					<div className="absolute left-0 top-[35%] z-20">
						<StatCard {...stats[2]} />
					</div>
					<div className="absolute left-4 top-[65%] z-20">
						<StatCard {...stats[4]} />
					</div>

					{/* Right side cards */}
					<div className="absolute right-0 top-[5%] z-20">
						<StatCard {...stats[1]} />
					</div>
					<div className="absolute right-0 top-[35%] z-20">
						<StatCard {...stats[3]} />
					</div>
					<div className="absolute right-4 top-[70%] z-20">
						<StatCard {...stats[5]} />
					</div>
				</div>

				{/* Stat cards - Mobile layout - In front of background */}
				<div className="lg:hidden relative z-20 mt-4 -mx-4 px-4 overflow-x-auto pb-4 no-scrollbar">
					<div className="flex gap-4 w-max px-4">
						{stats.map((stat, index) => (
							<StatCard key={index} {...stat} />
						))}
					</div>
				</div>
			</div>

			{/* Trusted By Section */}
			<div className="relative z-10 pb-12 lg:pb-16 lg:-mt-8">
				<h2 className="text-lg lg:text-xl font-bold text-center mb-8 lg:mb-10 text-white opacity-90">
					Ils nous font confiance
				</h2>

				{/* Infinite scroll logos */}
				<div className="relative overflow-hidden w-full">
					<div className="flex animate-scroll w-max">
						{/* First set of logos */}
						<div className="flex items-center gap-12 lg:gap-24 px-6 lg:px-12">
							{logos.map((logo, index) => (
								<div key={`set1-${index}`} className="flex-shrink-0">
									<img
										src={logo}
										alt="Partner Logo"
										className="h-8 lg:h-12 w-auto object-contain filter grayscale brightness-0 invert opacity-60 hover:opacity-100 transition-opacity"
									/>
								</div>
							))}
						</div>
						{/* Duplicate set for seamless loop */}
						<div className="flex items-center gap-12 lg:gap-24 px-6 lg:px-12">
							{logos.map((logo, index) => (
								<div key={`set2-${index}`} className="flex-shrink-0">
									<img
										src={logo}
										alt="Partner Logo"
										className="h-8 lg:h-12 w-auto object-contain filter grayscale brightness-0 invert opacity-60 hover:opacity-100 transition-opacity"
									/>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}