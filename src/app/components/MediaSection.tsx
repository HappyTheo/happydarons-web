import imgScreenshot from "@/assets/90244d577a7747340e414db6f25df307bbc6a503.webp";
import imgMedia1 from "@/assets/e12a97d8767dbbbcbea7c9b9f5b3461c84d7ffdc.webp";
import imgMedia2 from "@/assets/0677cfaba7a6985a87d2c604e633d84514b29183.webp";
import imgMedia3 from "@/assets/cf3bed17333e2d556c05fa1ebd739ce008a92543.webp";
import imgMedia4 from "@/assets/b43351f51581ad734046b9a55ef4c1d7945c0170.webp";
import imgMedia5 from "@/assets/b7447ecd483703e0e4833c09323e1fb78b5dff31.webp";
import imgMedia6 from "@/assets/8efb45ff1f355d5d979c2edf6bbbc0ff1f2b9c32.webp";

export function MediaSection() {
	const mediaLogos = [imgMedia1, imgMedia2, imgMedia3, imgMedia4, imgMedia5, imgMedia6];

	return (
		<section className="bg-[#fae6e9] py-16 lg:py-24">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Desktop/Tablet Preview */}
				<div className="mb-16 lg:mb-24">
					<div className="relative max-w-4xl mx-auto">
						<div className="bg-black rounded-3xl p-1 lg:p-2 shadow-2xl">
							<img
								src={imgScreenshot}
								alt="Platform preview"
								className="w-full h-auto rounded-2xl border border-black"
							/>
						</div>
					</div>
				</div>

				{/* Media Mentions */}
				<div>
					<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-black mb-12 lg:mb-16">
						Ils parlent de nous
					</h2>

					<div className="flex flex-wrap items-center justify-center gap-6 lg:gap-8">
						{mediaLogos.map((logo, index) => (
							<div
								key={index}
								className="w-20 h-20 lg:w-28 lg:h-28 rounded-2xl overflow-hidden border-2 border-black/10 hover:border-black/30 transition-all hover:scale-105"
							>
								<img
									src={logo}
									alt={`Media ${index + 1}`}
									className="w-full h-full object-cover"
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
