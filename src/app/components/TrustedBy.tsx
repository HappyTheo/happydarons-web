import imgLogo1 from "@/assets/dfeeb57e51fd516a0374fc221864e4890eb4d8f0.webp";
import imgLogo2 from "@/assets/39a652a1f8d82824c98570dc063a819885b107bc.webp";

export function TrustedBy() {
	return (
		<section className="bg-[#fae6e9] py-12 lg:py-16">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-xl lg:text-2xl font-bold text-center mb-8 lg:mb-12 text-[#203b31]">
					Ils nous font confiance
				</h2>

				<div className="flex flex-wrap items-center justify-center gap-6 lg:gap-12">
					{[imgLogo1, imgLogo2, imgLogo1, imgLogo2, imgLogo1, imgLogo2].map((logo, index) => (
						<div key={index} className="opacity-70 hover:opacity-100 transition-opacity">
							<img
								src={logo}
								alt={`Partner ${index + 1}`}
								className="h-10 lg:h-14 w-auto object-contain"
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
