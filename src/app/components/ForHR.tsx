import imgHR from "@/assets/e12a97d8767dbbbcbea7c9b9f5b3461c84d7ffdc.webp";

export function ForHR() {
	return (
		<section className="relative bg-gradient-to-b from-[#fff5f7] to-[#fae6e9] py-16 lg:py-24 overflow-hidden">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
					{/* Image - Left */}
					<div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
						<div className="relative w-full max-w-md lg:max-w-lg">
							<img
								src={imgHR}
								alt="Dashboard HappyDarons pour RH"
								className="w-full h-auto rounded-3xl shadow-2xl"
							/>
						</div>
					</div>

					{/* Content - Right */}
					<div className="space-y-6 order-1 lg:order-2">
						<div className="inline-block bg-[#ffa6bf]/30 border border-[#ffa6bf]/50 rounded-full px-5 py-2">
							<span className="text-[#203b31] font-semibold text-sm lg:text-base">Pour les RH et managers</span>
						</div>

						<h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#203b31] leading-tight">
							La plateforme qui structure, pilote et valorise votre{' '}
							<span className="text-[#ffa6bf]">politique parentale</span> !
						</h2>

						<p className="text-base lg:text-lg text-[#203b31]/80 max-w-lg">
							Formez vos managers, sensibilisez vos équipes et pilotez en temps réel le bien-être parental pour mieux comprendre les besoins et mesurer l'impact de vos actions.
						</p>

						<button className="bg-transparent text-[#ffa6bf] px-6 py-3 rounded-full border-2 border-[#ffa6bf] hover:bg-[#ffa6bf] hover:text-white transition-colors text-base font-medium">
							Découvrir nos solutions
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
