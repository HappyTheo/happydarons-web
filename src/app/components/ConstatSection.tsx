import imgStat1 from "@/assets/c36fabb80383f929b4fa1ece95ad1a51bb94916e.webp";
import imgStat2 from "@/assets/89f67d87f20fb0ca0f1bb876745537a1c6f2ed29.webp";
import imgStat3 from "@/assets/a53373c6f54724bb26f457eaf113f430222a0ad5.webp";

export function ConstatSection() {
	return (
		<section className="relative bg-[#fae6e9] py-16 lg:py-24 overflow-hidden">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<div className="text-center mb-10 lg:mb-16">
					<div className="inline-block bg-[#267b56] text-white px-6 py-2 rounded-full mb-6 border-2 border-[#1a5a3e] shadow-[4px_4px_0px_0px_rgba(26,90,62,1)] active:shadow-[2px_2px_0px_0px_rgba(26,90,62,1)] active:translate-x-[2px] active:translate-y-[2px] transition-all">
						<span className="font-semibold text-sm lg:text-base">Notre constat</span>
					</div>

					<h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#203b31] leading-tight max-w-4xl mx-auto">
						En 2026, trop de parents doivent encore choisir entre leur carrière et leur vie de famille.
						<br className="hidden sm:block" />
						<span className="text-[#203b31]/70">
							La parentalité reste l'un des premiers facteurs de désengagement et de turnover.
						</span>
					</h2>
				</div>

				{/* Bento Grid */}
				<div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
					{/* Card 1 - 82% - Tall */}
					<div className="col-span-1 row-span-2 bg-[#267b56] rounded-2xl p-4 lg:p-6 text-white border-2 border-[#1a5a3e] shadow-[4px_4px_0px_0px_rgba(26,90,62,1)] lg:shadow-[6px_6px_0px_0px_rgba(26,90,62,1)] active:shadow-[2px_2px_0px_0px_rgba(26,90,62,1)] active:translate-x-[2px] active:translate-y-[2px] hover:shadow-[3px_3px_0px_0px_rgba(26,90,62,1)] hover:translate-x-[3px] hover:translate-y-[3px] transition-all cursor-pointer">
						<p className="text-3xl lg:text-5xl font-bold mb-2 lg:mb-3">82 %</p>
						<p className="text-xs lg:text-base leading-snug mb-3 lg:mb-4">
							des salariés parents sont prêts à changer d'entreprise pour bénéficier de plus de services parentalité.
						</p>
						<p className="text-[8px] lg:text-xs opacity-70 mt-auto">
							Source : Étude Les Parents Zens (2024), citée par Décideurs RH
						</p>
					</div>

					{/* Image 1 - Kids with paint */}
					<div className="col-span-1 rounded-2xl overflow-hidden border-2 border-[#203b31]/20 shadow-[3px_3px_0px_0px_rgba(32,59,49,0.3)] lg:shadow-[4px_4px_0px_0px_rgba(32,59,49,0.3)] active:shadow-[1px_1px_0px_0px_rgba(32,59,49,0.3)] active:translate-x-[2px] active:translate-y-[2px] transition-all">
						<img src={imgStat1} alt="" className="w-full h-full object-cover" />
					</div>

					{/* Card 2 - 70% */}
					<div className="col-span-1 bg-[#267b56] rounded-2xl p-3 lg:p-5 text-white border-2 border-[#1a5a3e] shadow-[3px_3px_0px_0px_rgba(26,90,62,1)] lg:shadow-[5px_5px_0px_0px_rgba(26,90,62,1)] active:shadow-[1px_1px_0px_0px_rgba(26,90,62,1)] active:translate-x-[2px] active:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(26,90,62,1)] hover:translate-x-[3px] hover:translate-y-[3px] transition-all cursor-pointer">
						<p className="text-2xl lg:text-4xl font-bold mb-1 lg:mb-2">70 %</p>
						<p className="text-[10px] lg:text-sm leading-snug mb-1 lg:mb-2">
							de la charge du quotidien repose encore sur les femmes.
						</p>
						<p className="text-[7px] lg:text-[10px] opacity-70">
							Source : INSEE – Enquête sur l'emploi du temps (2020)
						</p>
					</div>

					{/* Card 3 - 9/10 - White card */}
					<div className="col-span-1 row-span-2 bg-white rounded-2xl p-4 lg:p-6 border-2 border-[#ffa6bf] shadow-[4px_4px_0px_0px_rgba(255,166,191,1)] lg:shadow-[6px_6px_0px_0px_rgba(255,166,191,1)] active:shadow-[2px_2px_0px_0px_rgba(255,166,191,1)] active:translate-x-[2px] active:translate-y-[2px] hover:shadow-[3px_3px_0px_0px_rgba(255,166,191,1)] hover:translate-x-[3px] hover:translate-y-[3px] transition-all cursor-pointer flex flex-col">
						<p className="text-2xl lg:text-4xl font-bold text-[#ffa6bf]">9 salariés</p>
						<p className="text-xl lg:text-3xl font-bold text-[#ffa6bf] mb-2 lg:mb-3">sur 10</p>
						<p className="text-xs lg:text-base text-[#203b31] leading-snug mb-3 lg:mb-4">
							en France sont parents.
						</p>
						<p className="text-[8px] lg:text-xs text-gray-500 mt-auto">
							Source : Baromètre parentalité en entreprise, Les Parents Zens / HelloWorkplace, 2023
						</p>
					</div>

					{/* Image 2 - Mom with baby */}
					<div className="col-span-1 rounded-2xl overflow-hidden border-2 border-[#203b31]/20 shadow-[3px_3px_0px_0px_rgba(32,59,49,0.3)] lg:shadow-[4px_4px_0px_0px_rgba(32,59,49,0.3)] active:shadow-[1px_1px_0px_0px_rgba(32,59,49,0.3)] active:translate-x-[2px] active:translate-y-[2px] transition-all">
						<img src={imgStat2} alt="" className="w-full h-full object-cover" />
					</div>

					{/* Image 3 - Kid surprised */}
					<div className="col-span-1 rounded-2xl overflow-hidden border-2 border-[#203b31]/20 shadow-[3px_3px_0px_0px_rgba(32,59,49,0.3)] lg:shadow-[4px_4px_0px_0px_rgba(32,59,49,0.3)] active:shadow-[1px_1px_0px_0px_rgba(32,59,49,0.3)] active:translate-x-[2px] active:translate-y-[2px] transition-all">
						<img src={imgStat3} alt="" className="w-full h-full object-cover" />
					</div>

					{/* Card 4 - 65% */}
					<div className="col-span-1 bg-[#267b56] rounded-2xl p-3 lg:p-5 text-white border-2 border-[#1a5a3e] shadow-[3px_3px_0px_0px_rgba(26,90,62,1)] lg:shadow-[5px_5px_0px_0px_rgba(26,90,62,1)] active:shadow-[1px_1px_0px_0px_rgba(26,90,62,1)] active:translate-x-[2px] active:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(26,90,62,1)] hover:translate-x-[3px] hover:translate-y-[3px] transition-all cursor-pointer">
						<p className="text-[10px] lg:text-sm mb-1 opacity-90">Les femmes réalisent</p>
						<p className="text-2xl lg:text-4xl font-bold mb-1 lg:mb-2">65 %</p>
						<p className="text-[10px] lg:text-sm leading-snug mb-1 lg:mb-2">
							des tâches parentales.
						</p>
						<p className="text-[7px] lg:text-[10px] opacity-70">
							Source : INSEE – Répartition des tâches parentales, 2020
						</p>
					</div>

					{/* Card 5 - 44% - Wide */}
					<div className="col-span-2 bg-[#267b56] rounded-2xl p-4 lg:p-6 text-white border-2 border-[#1a5a3e] shadow-[4px_4px_0px_0px_rgba(26,90,62,1)] lg:shadow-[6px_6px_0px_0px_rgba(26,90,62,1)] active:shadow-[2px_2px_0px_0px_rgba(26,90,62,1)] active:translate-x-[2px] active:translate-y-[2px] hover:shadow-[3px_3px_0px_0px_rgba(26,90,62,1)] hover:translate-x-[3px] hover:translate-y-[3px] transition-all cursor-pointer">
						<div className="flex flex-col lg:flex-row lg:items-center lg:gap-6">
							<p className="text-3xl lg:text-5xl font-bold mb-1 lg:mb-0">44 %</p>
							<div>
								<p className="text-xs lg:text-base leading-snug mb-1 lg:mb-2">
									des femmes refusent des postes à responsabilité pour des raisons familiales.
								</p>
								<p className="text-[8px] lg:text-xs opacity-70">
									Source : Étude Viviane de Beaufort – ESSEC, 2022
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
