import imgHR from "@/assets/e12a97d8767dbbbcbea7c9b9f5b3461c84d7ffdc.webp";

export function ForHR() {
	return (
		<section className="bg-[#fae6e9] py-16 lg:py-24">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
					{/* Content */}
					<div className="space-y-6">
						<div className="inline-block bg-[rgba(255,166,191,0.54)] border-2 border-black rounded-full px-6 py-2">
							<span className="text-black font-bold text-lg lg:text-xl">Pour les RH et managers</span>
						</div>

						<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2a2a28] leading-tight">
							La plateforme qui structure, pilote et valorise votre{' '}
							<span className="text-[#ffaac1]">politique parentale</span> !
						</h2>

						<p className="text-lg lg:text-xl text-black">
							Formez vos managers, sensibilisez vos équipes et pilotez en temps réel le bien-être parental pour mieux comprendre les besoins et mesurer l'impact de vos actions.
						</p>

						<button className="bg-[#ffa6bf] text-white px-8 py-4 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all text-lg font-medium">
							Découvrir nos solutions
						</button>
					</div>

					{/* Images Grid */}
					<div className="grid grid-cols-2 gap-4">
						<img src={imgHR} alt="" className="w-full h-auto rounded-2xl shadow-lg" />
						<img src={imgHR} alt="" className="w-full h-auto rounded-2xl shadow-lg mt-8" />
						<img src={imgHR} alt="" className="w-full h-auto rounded-2xl shadow-lg" />
						<img src={imgHR} alt="" className="w-full h-auto rounded-2xl shadow-lg mt-8" />
					</div>
				</div>
			</div>
		</section>
	);
}
