import useEmblaCarousel from 'embla-carousel-react';
import { useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import imgAvatar from "@/assets/7ce4bb020988cf532a92b2f0b3eb018d0ddc38df.webp";

const testimonials = [
	{
		quote: "Devenir parent est un grand bouleversement. Un moment de grande vulnérabilité, de réajustement, d’identité en mouvement. On le sait. Pourtant, les organisations peinent encore à accueillir cette réalité humaine avec bienveillance. Il est urgent qu’on accompagne, qu’on soutienne, qu’on crée de vraies passerelles entre parentalité et vie pro. J’aurais vraiment beaucoup aimé qu'HappyDarons existe lorsque j’ai eu mon premier enfant, cela m’aurait sûrement évité bien des batailles…",
		name: "Hortense Blondel",
		title: "Fondatrice - Coach professionnelle certifiée (PCC) & Consultante | BALANCE"
	},
	{
		quote: "Entre hommes, on ne parle jamais de ce qu’on vit pendant un accouchement. C’est comme si on devait tout garder pour nous. Moi aussi, j’aimerais pouvoir échanger avec d’autres pères, ça ferait vraiment du bien.",
		name: "Xavier Ferrat",
		title: "Directeur de projet & Dirigeant | Sephora & Arolle Conseil"
	},
	{
		quote: "L’annonce de la grossesse en entreprise est toujours un moment délicat. À partir de là, on est plus ou moins accompagnée par les RH. Mais c’est surtout le retour après le congé maternité qui représente un vrai défi. Le soutien est souvent insuffisant, et on se sent vite livrée à soi-même.",
		name: "Caroline Roullet",
		title: "Chief Marketing Officer | VivaTech & Ex - M6"
	},
	{
		quote: "J’ai pris en main toutes les démarches liées à la grossesse de ma femme, qui sa langue maternelle n'est pas le français. Heureusement, entre la Sécu et les sites publics, on a trouvé pas mal d’infos utiles. Ce qu’il nous manquait, c’était des conseils concrets du quotidien, au-delà des aspects santé.",
		name: "Brian Migot",
		title: "Manager - Business Analyst | Adone Conseil"
	},
	{
		quote: "Pendant ma procédure de PMA, j’ai souhaité informer mon employeur par souci de transparence. Entre les échographies, les prises de sang et les rendez-vous médicaux, l’emploi du temps devient vite un vrai casse-tête. Heureusement, j’ai eu la chance d’avoir un employeur compréhensif, qui m’a permis d’aménager mes horaires sans avoir à poser de jours en dehors des procédures. Mais je sais que ce n’est pas le cas pour tout le monde... Et c’est justement pour ça qu’il est essentiel que les entreprises s’emparent de ce sujet.",
		name: "Emmanuelle Flahault-Franc",
		title: "Directrice de la Communication | IRIS"
	}
];

export function Testimonials() {
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

	const scrollPrev = useCallback(() => {
		if (emblaApi) emblaApi.scrollPrev();
	}, [emblaApi]);

	const scrollNext = useCallback(() => {
		if (emblaApi) emblaApi.scrollNext();
	}, [emblaApi]);

	return (
		<section className="bg-white py-16 lg:py-24 overflow-hidden">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col md:flex-row md:items-end justify-between mb-8 lg:mb-16 gap-6">
					<div>
						<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2a2a28] mb-4 lg:mb-6">
							Pourquoi{' '}
							<span className="text-[#267b56]">Happy</span>
							<span className="text-[#ffa6bf]">Darons</span> ?
						</h2>

						<p className="text-xl sm:text-2xl lg:text-4xl text-[#2a2a28]">
							Ces témoignages parlent d'eux-mêmes !
						</p>
					</div>

					{/* Navigation Buttons */}
					<div className="flex gap-2 shrink-0">
						<button
							onClick={scrollPrev}
							className="w-10 h-10 lg:w-12 lg:h-12 border-2 border-black rounded-full flex items-center justify-center bg-white hover:bg-gray-50 transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px]"
						>
							<ChevronLeft size={24} />
						</button>
						<button
							onClick={scrollNext}
							className="w-10 h-10 lg:w-12 lg:h-12 border-2 border-black rounded-full flex items-center justify-center bg-white hover:bg-gray-50 transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px]"
						>
							<ChevronRight size={24} />
						</button>
					</div>
				</div>

				<div className="overflow-hidden" ref={emblaRef}>
					<div className="flex -ml-4 lg:-ml-6 py-4">
						{testimonials.map((testimonial, index) => (
							<div
								key={index}
								className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] pl-4 lg:pl-6 min-w-0"
							>
								<div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all h-full flex flex-col">
									<p className="text-sm lg:text-base italic text-black mb-6 leading-relaxed flex-grow">
										"{testimonial.quote}"
									</p>

									<div className="flex items-center gap-3 pt-4 border-t border-gray-100 mt-auto">
										<div className="w-10 h-10 rounded-full bg-gray-200 shrink-0 overflow-hidden border border-gray-200">
											{/* Ideally we would have real avatars for each, for now placeholder or use the imported one if specific */}
											{/* <img src={imgAvatar} alt={testimonial.name} className="w-full h-full object-cover" /> */}
											<div className="w-full h-full flex items-center justify-center bg-[#267b56] text-white font-bold text-xs">
												{testimonial.name.split(' ').map(n => n[0]).join('')}
											</div>
										</div>
										<div>
											<p className="font-bold text-sm text-[#2a2a28] leading-tight">{testimonial.name}</p>
											<p className="text-xs text-[#2a2a28]/60 font-medium mt-0.5">{testimonial.title}</p>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
