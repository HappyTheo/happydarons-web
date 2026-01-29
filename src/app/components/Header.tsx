'use client';

import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Smartphone, Monitor } from 'lucide-react';
import imgLogo from "@/assets/a53373c6f54724bb26f457eaf113f430222a0ad5.webp";

export function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const [solutionsOpen, setSolutionsOpen] = useState(false);
	const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);
	const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	// Close dropdown when clicking outside
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
				setSolutionsOpen(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, []);

	const handleMouseEnter = () => {
		if (dropdownTimeoutRef.current) {
			clearTimeout(dropdownTimeoutRef.current);
		}
		setSolutionsOpen(true);
	};

	const handleMouseLeave = () => {
		dropdownTimeoutRef.current = setTimeout(() => {
			setSolutionsOpen(false);
		}, 150);
	};

	const navItems = [
		{ label: 'Nos Solutions', href: '/nos-solutions', hasDropdown: true },
		{ label: 'Devenir Partenaire', href: '#devenir-partenaire', hasDropdown: false },
		{ label: 'Notre Équipe', href: '#equipe', hasDropdown: false },
		{ label: 'FAQ', href: '#faq', hasDropdown: false },
	];

	const solutionsDropdownItems = [
		{
			icon: Smartphone,
			title: 'Application salariés parents',
			description: 'Une app mobile pour accompagner les parents au quotidien',
			href: '#',
		},
		{
			icon: Monitor,
			title: 'SaaS RH',
			description: 'Une plateforme complète pour vos équipes RH',
			href: '#',
		},
	];

	return (
		<header
			className={`
				fixed z-50 transition-[top,left,right,background-color,border-color,box-shadow,backdrop-filter] duration-500 ease-in-out
				${isScrolled || mobileMenuOpen
					? `top-6 left-[2%] right-[2%] md:left-[5%] md:right-[5%] lg:left-[10%] lg:right-[10%] xl:left-[15%] xl:right-[15%] 
						${mobileMenuOpen ? 'bg-[#1f3c32] rounded-3xl' : 'bg-[#1f3c32]/30 rounded-full'} 
						backdrop-blur-[50px] backdrop-saturate-150 shadow-[0_8px_32px_0_rgba(31,60,50,0.37)] border border-white/10 ring-1 ring-white/5`
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
					{/* Logo */}
					<div className="flex-shrink-0">
						<Link to="/">
							<img
								src={imgLogo}
								alt="HappyDarons"
								className={`
									w-auto transition-all duration-500 ease-out cursor-pointer hover:opacity-90
									${isScrolled ? 'h-20 lg:h-20' : 'h-32 lg:h-40'}
								`}
							/>
						</Link>
					</div>

					{/* Desktop Navigation */}
					<nav className="hidden lg:flex items-center gap-6 xl:gap-10">
						{navItems.map((item) => (
							item.hasDropdown ? (
								<div
									key={item.label}
									ref={dropdownRef}
									className="relative"
									onMouseEnter={handleMouseEnter}
									onMouseLeave={handleMouseLeave}
								>
									<button
										className={`
											flex items-center gap-1.5 text-white font-medium transition-all duration-300
											hover:text-[#ffa6bf] 
											${isScrolled ? 'text-lg' : 'text-xl'}
										`}
									>
										{item.label}
										<ChevronDown
											size={18}
											className={`transition-transform duration-300 ${solutionsOpen ? 'rotate-180' : ''}`}
										/>
									</button>

									{/* Dropdown Menu - Premium Design */}
									<div
										className={`
											absolute top-full left-1/2 -translate-x-1/2 pt-4
											transition-all duration-300 ease-out
											${solutionsOpen
												? 'opacity-100 visible translate-y-0'
												: 'opacity-0 invisible -translate-y-2 pointer-events-none'
											}
										`}
									>
										{/* Arrow indicator */}
										<div className="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#1f3c32]/95 rotate-45 border-l border-t border-white/20" />

										<div className="
											relative min-w-[340px] p-2
											bg-[#1f3c32]/95 backdrop-blur-xl
											rounded-2xl border border-white/15
											shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]
											ring-1 ring-white/10
										">
											{/* Decorative gradient */}
											<div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#ffa6bf]/5 via-transparent to-[#1f3c32]/50 pointer-events-none" />

											<div className="relative space-y-1">
												{solutionsDropdownItems.map((solution, index) => (
													<a
														key={solution.title}
														href={solution.href}
														className="
															group flex items-start gap-4 p-4 rounded-xl
															transition-all duration-300 ease-out
															hover:bg-white/10
														"
													>
														{/* Icon container with gradient */}
														<div className="
															flex-shrink-0 w-12 h-12 rounded-xl
															bg-gradient-to-br from-[#ffa6bf]/20 to-[#ff8faa]/10
															flex items-center justify-center
															border border-[#ffa6bf]/20
															group-hover:border-[#ffa6bf]/40
															group-hover:from-[#ffa6bf]/30 group-hover:to-[#ff8faa]/20
															transition-all duration-300
															group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#ffa6bf]/20
														">
															<solution.icon
																size={22}
																className="text-[#ffa6bf] transition-transform duration-300 group-hover:scale-110"
															/>
														</div>

														<div className="flex-1 min-w-0">
															<div className="flex items-center gap-2">
																<span className="text-white font-semibold text-base group-hover:text-[#ffa6bf] transition-colors duration-300">
																	{solution.title}
																</span>
															</div>
															<p className="text-white/60 text-sm mt-0.5 leading-relaxed group-hover:text-white/80 transition-colors duration-300">
																{solution.description}
															</p>
														</div>

														{/* Arrow indicator on hover */}
														<div className="
															flex-shrink-0 w-6 h-6 rounded-full
															flex items-center justify-center
															opacity-0 -translate-x-2
															group-hover:opacity-100 group-hover:translate-x-0
															transition-all duration-300
															bg-[#ffa6bf]/20
														">
															<svg
																className="w-3 h-3 text-[#ffa6bf]"
																fill="none"
																viewBox="0 0 24 24"
																stroke="currentColor"
															>
																<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
															</svg>
														</div>
													</a>
												))}
											</div>

											{/* Bottom CTA section */}
											<div className="relative mt-2 pt-3 border-t border-white/10">
												<Link
													to="/nos-solutions"
													className="
											flex items-center justify-center gap-2 p-3 rounded-xl
											text-white/70 text-sm font-medium
											hover:bg-white/5 hover:text-[#ffa6bf]
											transition-all duration-300
										"
												>
													<span>Découvrir toutes nos solutions</span>
													<svg
														className="w-4 h-4"
														fill="none"
														viewBox="0 0 24 24"
														stroke="currentColor"
													>
														<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
													</svg>
												</Link>
											</div>
										</div>
									</div>
								</div>
							) : (
								<a
									key={item.label}
									href={item.href}
									className={`
										text-white font-medium transition-all duration-300
										hover:text-[#ffa6bf] hover:scale-105
										relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 
										after:w-0 after:h-0.5 after:bg-[#ffa6bf] after:transition-all after:duration-300
										hover:after:w-full
										${item.href === '#' ? 'opacity-60 cursor-default hover:opacity-60 hover:scale-100 after:hidden' : ''}
										${isScrolled ? 'text-lg' : 'text-xl'}
									`}

								>
									{item.label}
								</a>
							)
						))}
					</nav>

					{/* CTA Button - Desktop */}
					<button
						className={`
							hidden lg:block bg-gradient-to-r from-[#ffa6bf] to-[#ff8faa] 
							text-white font-semibold rounded-xl
							hover:from-[#ff8faa] hover:to-[#ff7a99] 
							transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#ffa6bf]/30
							${isScrolled ? 'px-6 py-2.5 text-base' : 'px-8 py-3 text-lg'}
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

				{/* Mobile Navigation */}
				<div className={`
					lg:hidden overflow-hidden transition-all duration-500 ease-out
					${mobileMenuOpen ? 'max-h-[600px] opacity-100 pb-6' : 'max-h-0 opacity-0'}
				`}>
					<nav className="space-y-1 pt-2">
						{/* Nos Solutions with sub-menu */}
						<div>
							<button
								onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
								className="
									w-full flex items-center justify-between text-white text-lg font-medium py-3 px-4 
									rounded-xl transition-all duration-300
									hover:bg-white/10 hover:text-[#ffa6bf]
								"
							>
								<span>Nos Solutions</span>
								<ChevronDown
									size={20}
									className={`transition-transform duration-300 ${mobileSolutionsOpen ? 'rotate-180' : ''}`}
								/>
							</button>

							{/* Mobile dropdown */}
							<div className={`
								overflow-hidden transition-all duration-300 ease-out
								${mobileSolutionsOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}
							`}>
								<div className="pl-4 pr-2 py-2 space-y-2">
									{solutionsDropdownItems.map((solution) => (
										<a
											key={solution.title}
											href={solution.href}
											onClick={() => setMobileMenuOpen(false)}
											className="
												group flex items-center gap-3 p-3 rounded-xl
												bg-white/5 border border-white/10
												transition-all duration-300
												hover:bg-white/10 hover:border-[#ffa6bf]/30
											"
										>
											<div className="
												w-10 h-10 rounded-lg
												bg-gradient-to-br from-[#ffa6bf]/20 to-[#ff8faa]/10
												flex items-center justify-center
												border border-[#ffa6bf]/20
											">
												<solution.icon size={18} className="text-[#ffa6bf]" />
											</div>
											<div className="flex-1">
												<div className="flex items-center gap-2">
													<span className="text-white font-medium text-sm">
														{solution.title}
													</span>
												</div>
												<p className="text-white/50 text-xs mt-0.5">
													{solution.description}
												</p>
											</div>
										</a>
									))}
								</div>
							</div>
						</div>

						{/* Other nav items */}
						{navItems.slice(1).map((item) => (
							<a
								key={item.label}
								href={item.href}
								onClick={() => setMobileMenuOpen(false)}
								className="
									block text-white text-lg font-medium py-3 px-4 
									rounded-xl transition-all duration-300
									hover:bg-white/10 hover:text-[#ffa6bf] hover:pl-6
								"
							>
								{item.label}
							</a>
						))}

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
