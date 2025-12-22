import imgAvatar from "@/assets/7ce4bb020988cf532a92b2f0b3eb018d0ddc38df.webp";

const testimonials = [
	{
		quote: "Entre hommes, on ne parle jamais de ce qu'on vit pendant un accouchement. C'est comme si on devait tout garder pour nous. Moi aussi, j'aimerais pouvoir échanger avec d'autres pères, ça ferait vraiment du bien.",
		name: "Xavier Ferrat",
		title: "Directeur de projet & Dirigeant | Sephora & Arolle Conseil"
	},
	{
		quote: "Entre hommes, on ne parle jamais de ce qu'on vit pendant un accouchement. C'est comme si on devait tout garder pour nous. Moi aussi, j'aimerais pouvoir échanger avec d'autres pères, ça ferait vraiment du bien.",
		name: "Xavier Ferrat",
		title: "Directeur de projet & Dirigeant | Sephora & Arolle Conseil"
	},
	{
		quote: "Entre hommes, on ne parle jamais de ce qu'on vit pendant un accouchement. C'est comme si on devait tout garder pour nous. Moi aussi, j'aimerais pouvoir échanger avec d'autres pères, ça ferait vraiment du bien.",
		name: "Xavier Ferrat",
		title: "Directeur de projet & Dirigeant | Sephora & Arolle Conseil"
	}
];

export function Testimonials() {
	return (
		<section className="bg-[#fae6e9] py-16 lg:py-24">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2a2a28] mb-4 lg:mb-6">
					Pourquoi{' '}
					<span className="text-[#267b56]">Happy</span>
					<span className="text-[#ffa6bf]">Darons</span> ?
				</h2>

				<p className="text-3xl lg:text-4xl text-[#2a2a28] mb-12 lg:mb-16">
					Ces témoignages parlent d'eux-mêmes !
				</p>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
					{testimonials.map((testimonial, index) => (
						<div
							key={index}
							className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all"
						>
							<p className="text-sm lg:text-base italic text-black mb-6 leading-relaxed">
								"{testimonial.quote}"
							</p>

							<div className="flex items-center gap-4">
								<img
									src={imgAvatar}
									alt={testimonial.name}
									className="w-16 h-16 rounded-full"
								/>
								<div>
									<p className="font-semibold text-[#2a2a28]">{testimonial.name}</p>
									<p className="text-sm text-[#2a2a28] font-extralight">{testimonial.title}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
