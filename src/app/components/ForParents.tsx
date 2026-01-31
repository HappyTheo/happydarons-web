import { useNavigate } from 'react-router-dom';
import imgParents from "@/assets/89f67d87f20fb0ca0f1bb876745537a1c6f2ed29.webp";

export function ForParents() {
	const navigate = useNavigate();
	return (
		<section className="relative bg-gradient-to-b from-[#fae6e9] to-[#fff5f7] py-16 lg:py-24 overflow-hidden">


			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
					{/* Content - Left */}
					<div className="space-y-6">
						<div className="inline-flex px-4 py-2 rounded-full bg-[#ffa6bf] text-[#267B56] font-bold text-sm tracking-wide uppercase shadow-sm">
							Pour vos collaborateurs
						</div>

						<h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#203b31] leading-tight">
							L'appli qui propose des solutions concrètes pour tous les{' '}
							<span className="text-[#ffa6bf]">parents</span> !
						</h2>

						<p className="text-base lg:text-lg text-[#203b31]/80 max-w-lg">
							Du projet bébé (parcours PMA, adoption) à l'adolescence : contenus, services, assistant familial et soutien émotionnel.
						</p>

						<button
							onClick={() => navigate('/nos-solutions#app-mobile')}
							className="bg-[#267b56] text-white px-6 py-3 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all text-base font-medium"
						>
							Découvrir nos solutions
						</button>
					</div>

					{/* Image - Right */}
					<div className="relative flex justify-center lg:justify-end">
						<div className="relative w-full max-w-md lg:max-w-lg flex justify-center items-center">
							{/* Green blurred spot behind the image */}
							<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] aspect-square lg:w-[90%] lg:h-[90%] lg:aspect-auto bg-[#267B56] blur-[50px] opacity-60 rounded-full" />
							<img
								src={imgParents}
								alt="Application mobile HappyDarons"
								className="relative z-10 w-full h-auto"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
