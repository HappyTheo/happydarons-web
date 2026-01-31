import { useNavigate } from 'react-router-dom';
import imgHR from "@/assets/e12a97d8767dbbbcbea7c9b9f5b3461c84d7ffdc.webp";

export function ForHR() {
	const navigate = useNavigate();
	return (
		<section className="relative bg-gradient-to-b from-[#fff5f7] to-[#fae6e9] py-16 lg:py-24 overflow-hidden">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
					{/* Image - Left */}
					<div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
						<div className="relative w-full max-w-md lg:max-w-lg flex justify-center items-center">
							{/* Pink blurred spot behind the image */}
							<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-[#FFA6BF] blur-[50px] opacity-[0.54] rounded-full" />
							<img
								src={imgHR}
								alt="Dashboard HappyDarons pour RH"
								className="relative z-10 w-full h-auto"
							/>
						</div>
					</div>

					{/* Content - Right */}
					<div className="space-y-6 order-1 lg:order-2">
						<div className="inline-flex px-4 py-2 rounded-full bg-[#267B56] text-[#ffa6bf] font-bold text-sm tracking-wide uppercase shadow-sm">
							Pour les RH et managers
						</div>

						<h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#203b31] leading-tight">
							La plateforme qui structure, pilote et valorise votre{' '}
							<span className="text-[#ffa6bf]">politique parentale</span> !
						</h2>

						<p className="text-base lg:text-lg text-[#203b31]/80 max-w-lg">
							Formez vos managers, sensibilisez vos équipes et pilotez en temps réel le bien-être parental pour mieux comprendre les besoins et mesurer l'impact de vos actions.
						</p>

						<button
							onClick={() => navigate('/nos-solutions#plateforme-rh')}
							className="bg-[#ffa6bf] text-white px-6 py-3 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all text-base font-medium"
						>
							Découvrir nos solutions
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
