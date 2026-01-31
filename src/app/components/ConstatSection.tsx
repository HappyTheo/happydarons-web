import imgStat1 from "@/assets/72b7dddaa744944635f5576ce7978d57d9c26b9b.webp";
import imgStat2 from "@/assets/89f67d87f20fb0ca0f1bb876745537a1c6f2ed29.webp";
import imgStat3 from "@/assets/e7735b3aedbf5169bf49e748550486f14119364f.webp";
import imgStat4 from "@/assets/a64e74d3f1ace1918bec136b5fb6a805b33dfde4.webp";
import imgStat5 from "@/assets/4499a7c1968115278ed08cd022561c52eb95d692.webp";

export function ConstatSection() {
	return (
		<section className="relative bg-[#fae6e9] py-16 lg:py-24 overflow-hidden">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<div className="text-center mb-10 lg:mb-16">
					<div className="inline-flex px-4 py-2 rounded-full bg-[#ffa6bf] text-[#267B56] font-bold text-sm tracking-wide uppercase shadow-sm mb-6">
						Notre constat
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
					{/* Column with 82% and image stacked vertically */}
					<div className="col-span-1 row-span-2 flex flex-col gap-3 lg:gap-6">
						{/* Card 1 - 82% */}
						<div className="flex-1 bg-[#f5eafa] rounded-2xl p-3 lg:p-5 text-white border-2 border-[#8965a7] shadow-[3px_3px_0px_0px_rgba(137,101,167,1)] lg:shadow-[5px_5px_0px_0px_rgba(137,101,167,1)] active:shadow-[1px_1px_0px_0px_rgba(137,101,167,1)] active:translate-x-[2px] active:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(137,101,167,1)] hover:translate-x-[3px] hover:translate-y-[3px] transition-all cursor-pointer">
							<p className="text-2xl lg:text-4xl font-bold mb-1 lg:mb-2 text-[#8965a7]">82 %</p>
							<p className="text-[10px] lg:text-sm font-semibold leading-snug mb-1 lg:mb-2 text-[#203b31]">
								des salariés parents sont prêts à changer d'entreprise pour bénéficier de plus de services parentalité.
							</p>
							<p className="text-[7px] lg:text-[10px] opacity-70 text-[#203b31]">
								Source : Étude Les Parents Zens (2024), citée par Décideurs RH
							</p>
						</div>

						{/* Image 4 */}
						<div className="flex-1 rounded-2xl overflow-hidden border-2 border-[#203b31]/20 shadow-[3px_3px_0px_0px_rgba(32,59,49,0.3)] lg:shadow-[4px_4px_0px_0px_rgba(32,59,49,0.3)] active:shadow-[1px_1px_0px_0px_rgba(32,59,49,0.3)] active:translate-x-[2px] active:translate-y-[2px] transition-all">
							<img src={imgStat4} alt="" className="w-full h-full object-cover" />
						</div>
					</div>

					{/* Image 1 - Kids with paint */}
					<div className="col-span-1 rounded-2xl overflow-hidden border-2 border-[#203b31]/20 shadow-[3px_3px_0px_0px_rgba(32,59,49,0.3)] lg:shadow-[4px_4px_0px_0px_rgba(32,59,49,0.3)] active:shadow-[1px_1px_0px_0px_rgba(32,59,49,0.3)] active:translate-x-[2px] active:translate-y-[2px] transition-all">
						<img src={imgStat1} alt="" className="w-full h-full object-cover" />
					</div>

					{/* Column with 70%, Image 3, and 44% stacked vertically */}
					<div className="col-span-1 row-span-2 flex flex-col gap-3 lg:gap-6">
						{/* Card 2 - 70% */}
						<div className="flex-1 bg-[#267b56] rounded-2xl p-3 lg:p-5 text-white border-2 border-[#1a5a3e] shadow-[3px_3px_0px_0px_rgba(26,90,62,1)] lg:shadow-[5px_5px_0px_0px_rgba(26,90,62,1)] active:shadow-[1px_1px_0px_0px_rgba(26,90,62,1)] active:translate-x-[2px] active:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(26,90,62,1)] hover:translate-x-[3px] hover:translate-y-[3px] transition-all cursor-pointer">
							<p className="text-2xl lg:text-4xl font-bold mb-1 lg:mb-2">13 250 €</p>
							<p className="text-[10px] lg:text-sm leading-snug mb-1 lg:mb-2">
								Coût annuel estimé du désengagement par salarié en France.
							</p>
							<p className="text-[7px] lg:text-[10px] opacity-70">
								Source : Mozart Consulting, Groupe AESIO, (2024)
							</p>
						</div>

						{/* Image 3 - Kid surprised */}
						<div className="flex-1 rounded-2xl overflow-hidden border-2 border-[#203b31]/20 shadow-[3px_3px_0px_0px_rgba(32,59,49,0.3)] lg:shadow-[4px_4px_0px_0px_rgba(32,59,49,0.3)] active:shadow-[1px_1px_0px_0px_rgba(32,59,49,0.3)] active:translate-x-[2px] active:translate-y-[2px] transition-all">
							<img src={imgStat3} alt="" className="w-full h-full object-cover" />
						</div>

						{/* Card 5 - 44% */}
						<div className="flex-1 bg-[#D2F3FF] rounded-2xl p-3 lg:p-5 text-[#203b31] border-2 border-[#87b6c7] shadow-[3px_3px_0px_0px_rgba(135,182,199,1)] lg:shadow-[5px_5px_0px_0px_rgba(135,182,199,1)] active:shadow-[1px_1px_0px_0px_rgba(135,182,199,1)] active:translate-x-[2px] active:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(135,182,199,1)] hover:translate-x-[3px] hover:translate-y-[3px] transition-all cursor-pointer">
							<p className="text-2xl lg:text-4xl font-bold mb-1 lg:mb-2 text-[#006080]">44 %</p>
							<p className="text-[10px] lg:text-sm leading-snug mb-1 lg:mb-2">
								des femmes refusent des postes à responsabilité pour des raisons familiales.
							</p>
							<p className="text-[7px] lg:text-[10px] opacity-70">
								Source : Étude Viviane de Beaufort – ESSEC, 2022
							</p>
						</div>
					</div>

					{/* Column with 9/10 and image stacked vertically */}
					<div className="col-span-1 row-span-2 flex flex-col gap-3 lg:gap-6">
						{/* Card 3 - 9/10 - White card */}
						<div className="flex-1 bg-white rounded-2xl p-3 lg:p-5 border-2 border-[#ffa6bf] shadow-[3px_3px_0px_0px_rgba(255,166,191,1)] lg:shadow-[5px_5px_0px_0px_rgba(255,166,191,1)] active:shadow-[1px_1px_0px_0px_rgba(255,166,191,1)] active:translate-x-[2px] active:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(255,166,191,1)] hover:translate-x-[3px] hover:translate-y-[3px] transition-all cursor-pointer flex flex-col">
							<p className="text-xl lg:text-3xl font-bold text-[#ffa6bf]">9 salariés</p>
							<p className="text-lg lg:text-2xl font-bold text-[#ffa6bf] mb-1 lg:mb-2">sur 10</p>
							<p className="text-[10px] lg:text-sm text-[#203b31] leading-snug mb-1 lg:mb-2">
								en France sont parents.
							</p>
							<p className="text-[7px] lg:text-[10px] text-gray-500 mt-auto">
								Source : Baromètre parentalité en entreprise, Les Parents Zens / HelloWorkplace, 2023
							</p>
						</div>

						{/* Image 5 */}
						<div className="flex-1 rounded-2xl overflow-hidden border-2 border-[#203b31]/20 shadow-[3px_3px_0px_0px_rgba(32,59,49,0.3)] lg:shadow-[4px_4px_0px_0px_rgba(32,59,49,0.3)] active:shadow-[1px_1px_0px_0px_rgba(32,59,49,0.3)] active:translate-x-[2px] active:translate-y-[2px] transition-all">
							<img src={imgStat5} alt="" className="w-full h-full object-cover" />
						</div>
					</div>

					{/* Card 4 - 65 % */}
					<div className="col-span-1 bg-[#FFA6BF] rounded-2xl p-3 lg:p-5 text-[#203b31] border-2 border-[#e88ba5] shadow-[3px_3px_0px_0px_rgba(232,139,165,1)] lg:shadow-[5px_5px_0px_0px_rgba(232,139,165,1)] active:shadow-[1px_1px_0px_0px_rgba(232,139,165,1)] active:translate-x-[2px] active:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(232,139,165,1)] hover:translate-x-[3px] hover:translate-y-[3px] transition-all cursor-pointer">
						<p className="text-[10px] lg:text-sm mb-1 opacity-90">Les femmes réalisent</p>
						<p className="text-2xl lg:text-4xl font-bold mb-1 lg:mb-2">65 %</p>
						<p className="text-[10px] lg:text-sm leading-snug mb-1 lg:mb-2">
							des tâches parentales.
						</p>
						<p className="text-[7px] lg:text-[10px] opacity-70">
							Source : INSEE – Répartition des tâches parentales, 2020
						</p>
					</div>


				</div>
			</div>
		</section>
	);
}
