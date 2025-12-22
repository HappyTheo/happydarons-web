import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import imgLogo from "@/assets/a53373c6f54724bb26f457eaf113f430222a0ad5.webp";

export function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<header className="fixed top-0 left-0 right-0 z-50 bg-[#1f3c32]/95 backdrop-blur-sm">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-20 lg:h-24">
					{/* Logo */}
					<div className="flex-shrink-0">
						<img src={imgLogo} alt="HappyDarons" className="h-12 lg:h-16 w-auto" />
					</div>

					{/* Desktop Navigation */}
					<nav className="hidden lg:flex items-center gap-8 xl:gap-16">
						<a href="#solutions" className="text-white hover:text-[#ffa6bf] transition-colors">Solutions</a>
						<a href="#pour-qui" className="text-white hover:text-[#ffa6bf] transition-colors">Pour qui ?</a>
						<a href="#equipe" className="text-white hover:text-[#ffa6bf] transition-colors">L'équipe</a>
						<a href="#a-propos" className="text-white hover:text-[#ffa6bf] transition-colors">À propos</a>
						<a href="#faq" className="text-white hover:text-[#ffa6bf] transition-colors">FAQ</a>
					</nav>

					{/* CTA Button - Desktop */}
					<button className="hidden lg:block bg-[#ffa6bf] text-white px-6 py-3 rounded-lg hover:bg-[#ff8faa] transition-colors">
						Nous contacter
					</button>

					{/* Mobile menu button */}
					<button
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
						className="lg:hidden text-white p-2"
						aria-label="Toggle menu"
					>
						{mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>

				{/* Mobile Navigation */}
				{mobileMenuOpen && (
					<nav className="lg:hidden pb-4 space-y-3">
						<a href="#solutions" className="block text-white hover:text-[#ffa6bf] py-2">Solutions</a>
						<a href="#pour-qui" className="block text-white hover:text-[#ffa6bf] py-2">Pour qui ?</a>
						<a href="#equipe" className="block text-white hover:text-[#ffa6bf] py-2">L'équipe</a>
						<a href="#a-propos" className="block text-white hover:text-[#ffa6bf] py-2">À propos</a>
						<a href="#faq" className="block text-white hover:text-[#ffa6bf] py-2">FAQ</a>
						<button className="w-full bg-[#ffa6bf] text-white px-6 py-3 rounded-lg hover:bg-[#ff8faa] transition-colors mt-3">
							Nous contacter
						</button>
					</nav>
				)}
			</div>
		</header>
	);
}
