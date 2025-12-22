import imgLogo from "@/assets/72b7dddaa744944635f5576ce7978d57d9c26b9b.webp";

export function PlatformSection() {
	return (
		<section className="bg-[#fae6e9] py-16 lg:py-24">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-12 lg:mb-16">
					<h2 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold mb-6 lg:mb-8 leading-tight">
						<span className="text-[#ffa6bf]">Happy</span>
						<span className="text-[#267b56]">Darons</span>
						<span className="text-[#203b31]">, la plateforme qui prend soin de celles et ceux qui prennent soin des autres.​​</span>
					</h2>
				</div>

				<div className="max-w-5xl mx-auto space-y-6 text-center text-lg lg:text-2xl text-[#203b31]">
					<p>
						On aide les entreprises à mieux accompagner leurs salarié·e·s-parents à chaque étape, grâce à une solution qui allège leur charge mentale et les aide à concilier vie pro et vie perso.
					</p>
					<p>
						Le tout pour mieux attirer, engager et fidéliser vos talents… et enfin construire une culture d'entreprise plus inclusive, humaine et durable.
					</p>
				</div>

				{/* Background logo */}
				<div className="absolute left-1/2 -translate-x-1/2 opacity-20 pointer-events-none mt-12 lg:mt-20">
					<img
						src={imgLogo}
						alt=""
						className="w-full max-w-2xl lg:max-w-4xl h-auto"
					/>
				</div>
			</div>
		</section>
	);
}
