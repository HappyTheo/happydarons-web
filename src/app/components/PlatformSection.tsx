export function PlatformSection() {
	return (
		<section className="relative bg-gradient-to-b from-[#fae6e9] via-[#fff5f7] to-[#fae6e9] py-16 lg:py-24 overflow-hidden">
			{/* Decorative leaves */}
			<div className="absolute top-0 left-0 w-32 h-32 lg:w-48 lg:h-48 opacity-30 pointer-events-none">
				<svg viewBox="0 0 100 100" className="w-full h-full text-[rgba(38,123,86,1)]">
					<ellipse cx="20" cy="50" rx="8" ry="25" fill="currentColor" transform="rotate(-30 20 50)" />
					<ellipse cx="35" cy="45" rx="6" ry="20" fill="currentColor" transform="rotate(-15 35 45)" />
					<ellipse cx="50" cy="40" rx="5" ry="15" fill="currentColor" transform="rotate(0 50 40)" />
				</svg>
			</div>
			<div className="absolute top-0 right-0 w-32 h-32 lg:w-48 lg:h-48 opacity-30 pointer-events-none transform scale-x-[-1]">
				<svg viewBox="0 0 100 100" className="w-full h-full text-[rgba(38,123,86,1)]">
					<ellipse cx="20" cy="50" rx="8" ry="25" fill="currentColor" transform="rotate(-30 20 50)" />
					<ellipse cx="35" cy="45" rx="6" ry="20" fill="currentColor" transform="rotate(-15 35 45)" />
					<ellipse cx="50" cy="40" rx="5" ry="15" fill="currentColor" transform="rotate(0 50 40)" />
				</svg>
			</div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<div className="text-center mb-12 lg:mb-16">
					<h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 lg:mb-8 leading-tight">
						<span className="text-[#ffa6bf]">Happy</span>
						<span className="text-[#267b56]">Darons</span>
						<span className="text-[#203b31]">, la plateforme qui prend soin de celles et ceux qui prennent soin des autres.</span>
					</h2>
				</div>

				<div className="max-w-5xl mx-auto space-y-6 text-center text-lg lg:text-xl text-[#203b31]">
					<p>
						On aide les entreprises à mieux accompagner leurs salarié·e·s-parents à chaque étape, grâce à une solution qui allège leur charge mentale et les aide à concilier vie pro et vie perso.
					</p>
					<p className="text-base lg:text-lg text-[#203b31]/70">
						Le tout pour mieux attirer, engager et fidéliser vos talents… et enfin construire une culture d'entreprise plus inclusive, humaine et durable.
					</p>
				</div>

			</div>
		</section>
	);
}
