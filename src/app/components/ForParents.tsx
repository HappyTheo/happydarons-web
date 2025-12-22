import imgParents from "@/assets/89f67d87f20fb0ca0f1bb876745537a1c6f2ed29.webp";

export function ForParents() {
	return (
		<section className="relative bg-gradient-to-b from-[#fae6e9] to-[#fff5f7] py-16 lg:py-24 overflow-hidden">
			{/* Decorative leaf left */}
			<div className="absolute top-1/4 left-0 w-16 h-32 lg:w-24 lg:h-48 opacity-30 pointer-events-none">
				<svg viewBox="0 0 50 100" className="w-full h-full text-[#267b56]">
					<ellipse cx="15" cy="30" rx="6" ry="20" fill="currentColor" transform="rotate(-20 15 30)" />
					<ellipse cx="20" cy="55" rx="5" ry="18" fill="currentColor" transform="rotate(-10 20 55)" />
					<ellipse cx="18" cy="80" rx="4" ry="15" fill="currentColor" transform="rotate(5 18 80)" />
				</svg>
			</div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
					{/* Content - Left */}
					<div className="space-y-6">
						<div className="inline-block bg-[#267b56]/20 border border-[#267b56]/40 rounded-full px-5 py-2">
							<span className="text-[#267b56] font-semibold text-sm lg:text-base">Pour vos collaborateurs</span>
						</div>

						<h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#203b31] leading-tight">
							L'appli qui propose des solutions concrètes pour tous les{' '}
							<span className="text-[#ffa6bf]">parents</span> !
						</h2>

						<p className="text-base lg:text-lg text-[#203b31]/80 max-w-lg">
							Du projet bébé (parcours PMA, adoption) à l'adolescence : contenus, services, assistant familial et soutien émotionnel.
						</p>

						<button className="bg-[#267b56] text-white px-6 py-3 rounded-full border border-[#203b31] hover:bg-[#1e6045] transition-colors text-base font-medium shadow-md">
							Découvrir nos solutions
						</button>
					</div>

					{/* Image - Right */}
					<div className="relative flex justify-center lg:justify-end">
						<div className="relative w-full max-w-md lg:max-w-lg">
							<img
								src={imgParents}
								alt="Application mobile HappyDarons"
								className="w-full h-auto rounded-3xl shadow-2xl"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
