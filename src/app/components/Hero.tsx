import imgHero from "@/assets/1dbc17ebcbcc9a9e6bd2200ca3c80b6af952eb95.webp";

export function Hero() {
	return (
		<section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#203b31] via-[#2b5d47] to-[#357f5d] overflow-hidden pt-20 lg:pt-24">
			{/* Background blur effect */}
			<div className="absolute inset-0 opacity-50">
				<div className="absolute inset-0 bg-gradient-radial from-[#357f5d] via-[#2b5d47] to-[#203b31]" />
			</div>

			{/* Background image with blur */}
			<div className="absolute inset-0 flex items-center justify-center opacity-70 blur-sm">
				<img
					src={imgHero}
					alt=""
					className="w-full max-w-4xl h-auto object-contain"
				/>
			</div>

			{/* Content */}
			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 lg:py-32">
				<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 lg:mb-8 leading-tight">
					Faites de la{' '}
					<span className="text-[#ffa6bf]">parentalité</span>
					<br className="hidden sm:block" />
					{' '}un levier d'engagement !
				</h1>

				<p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#fae6e9] max-w-4xl mx-auto mb-8 lg:mb-12 px-4">
					La solution qui soutient le quotidien des parents et simplifie la vie des RH.
				</p>

				<button className="bg-[#ffa6bf] text-white px-8 py-4 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all text-lg font-medium">
					Découvrir nos solutions
				</button>
			</div>
		</section>
	);
}