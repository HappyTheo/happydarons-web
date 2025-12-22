import imgParents from "@/assets/89f67d87f20fb0ca0f1bb876745537a1c6f2ed29.webp";

export function ForParents() {
	return (
		<section className="bg-[#fae6e9] py-16 lg:py-24">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
					{/* Image */}
					<div className="order-2 lg:order-1">
						<img
							src={imgParents}
							alt="Parents"
							className="w-full h-auto rounded-3xl shadow-2xl"
						/>
					</div>

					{/* Content */}
					<div className="order-1 lg:order-2 space-y-6">
						<div className="inline-block bg-[rgba(38,123,86,0.68)] border-2 border-black rounded-full px-6 py-2">
							<span className="text-black font-bold text-lg lg:text-xl">Pour vos collaborateurs</span>
						</div>

						<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#203b31] leading-tight">
							L'appli qui propose des solutions concrètes pour tous les{' '}
							<span className="text-[#ffa6bf]">parents</span> !
						</h2>

						<p className="text-lg lg:text-xl text-[#203b31]">
							Du projet bébé (parcours PMA, adoption) à l'adolescence : contenus, services, assistant familial et soutien émotionnel.
						</p>

						<button className="bg-[#267b56] text-white px-8 py-4 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all text-lg font-medium">
							Découvrir nos solutions
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
