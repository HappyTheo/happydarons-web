'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import imgLogo from "@/assets/a53373c6f54724bb26f457eaf113f430222a0ad5.webp";

export function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			// Active l'effet après 50px de scroll
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<header
			className={`
				fixed z-50 transition-[top,left,right,background-color,border-color,box-shadow,backdrop-filter] duration-500 ease-in-out
				${isScrolled || mobileMenuOpen
					? `top-6 left-[2%] right-[2%] md:left-[5%] md:right-[5%] lg:left-[10%] lg:right-[10%] xl:left-[15%] xl:right-[15%] 
						${mobileMenuOpen ? 'bg-[#1f3c32] rounded-3xl' : 'bg-[#1f3c32]/60 rounded-full'} 
						backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(31,60,50,0.37)] border border-white/20`
					: 'top-0 left-0 right-0 bg-transparent backdrop-blur-none shadow-none'
				}
			`}
		>
			<div className={`
				max-w-7xl mx-auto transition-all duration-500 ease-out
				${isScrolled ? 'px-4 sm:px-6' : 'px-4 sm:px-6 lg:px-8'}
			`}>
				<div className={`
					flex items-center justify-between transition-all duration-500 ease-out
					${isScrolled ? 'h-20 lg:h-24' : 'h-32 lg:h-48'}
				`}>
					{/* Logo - Agrandi encore x1.5 */}
					<div className="flex-shrink-0">
						<img
							src={imgLogo}
							alt="HappyDarons"
							className={`
								w-auto transition-all duration-500 ease-out
								${isScrolled ? 'h-14 lg:h-20' : 'h-24 lg:h-40'}
							`}
						/>
					</div>

					{/* Desktop Navigation - Texte plus gros */}
					<nav className="hidden lg:flex items-center gap-8 xl:gap-12">
						{['Solutions', 'Pour qui ?', "L'équipe", 'À propos', 'FAQ'].map((item, index) => {
							const hrefs = ['#solutions', '#pour-qui', '#equipe', '#a-propos', '#faq'];
							return (
								<a
									key={item}
									href={hrefs[index]}
									className={`
										text-white font-medium transition-all duration-300
										hover:text-[#ffa6bf] hover:scale-105
										relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 
										after:w-0 after:h-0.5 after:bg-[#ffa6bf] after:transition-all after:duration-300
										hover:after:w-full
										${isScrolled ? 'text-xl' : 'text-2xl'}
									`}
								>
									{item}
								</a>
							);
						})}
					</nav>

					{/* CTA Button - Desktop */}
					<button
						className={`
							hidden lg:block bg-gradient-to-r from-[#ffa6bf] to-[#ff8faa] 
							text-white font-semibold rounded-xl
							hover:from-[#ff8faa] hover:to-[#ff7a99] 
							transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#ffa6bf]/30
							${isScrolled ? 'px-8 py-3 text-lg' : 'px-10 py-4 text-xl'}
						`}
					>
						Nous contacter
					</button>

					{/* Mobile menu button */}
					<button
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
						className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
						aria-label="Toggle menu"
					>
						<div className="relative w-6 h-6">
							<Menu
								size={24}
								className={`absolute inset-0 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`}
							/>
							<X
								size={24}
								className={`absolute inset-0 transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`}
							/>
						</div>
					</button>
				</div>

				{/* Mobile Navigation - Amélioré */}
				<div className={`
					lg:hidden overflow-hidden transition-all duration-500 ease-out
					${mobileMenuOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}
				`}>
					<nav className="space-y-1 pt-2">
						{['Solutions', 'Pour qui ?', "L'équipe", 'À propos', 'FAQ'].map((item, index) => {
							const hrefs = ['#solutions', '#pour-qui', '#equipe', '#a-propos', '#faq'];
							return (
								<a
									key={item}
									href={hrefs[index]}
									onClick={() => setMobileMenuOpen(false)}
									className="
										block text-white text-lg font-medium py-3 px-4 
										rounded-xl transition-all duration-300
										hover:bg-white/10 hover:text-[#ffa6bf] hover:pl-6
									"
								>
									{item}
								</a>
							);
						})}
						<button
							className="
								w-full mt-4 bg-gradient-to-r from-[#ffa6bf] to-[#ff8faa] 
								text-white text-lg font-semibold px-6 py-4 rounded-xl 
								hover:from-[#ff8faa] hover:to-[#ff7a99] 
								transition-all duration-300 hover:scale-[1.02] 
								shadow-lg shadow-[#ffa6bf]/20
							"
						>
							Nous contacter
						</button>
					</nav>
				</div>
			</div>
		</header>
	);
}
