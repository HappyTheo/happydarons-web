import { useEffect, useRef, useState } from "react";
import imgMedia1 from "@/assets/e12a97d8767dbbbcbea7c9b9f5b3461c84d7ffdc.webp";
import imgMedia2 from "@/assets/0677cfaba7a6985a87d2c604e633d84514b29183.webp";
import imgMedia3 from "@/assets/cf3bed17333e2d556c05fa1ebd739ce008a92543.webp";
import imgMedia4 from "@/assets/b43351f51581ad734046b9a55ef4c1d7945c0170.webp";
import imgMedia5 from "@/assets/b7447ecd483703e0e4833c09323e1fb78b5dff31.webp";
import imgMedia6 from "@/assets/8efb45ff1f355d5d979c2edf6bbbc0ff1f2b9c32.webp";

export function MediaSection() {
	const mediaLogos = [imgMedia1, imgMedia2, imgMedia3, imgMedia4, imgMedia5, imgMedia6];
	const iframeRef = useRef<HTMLIFrameElement>(null);
	const playerRef = useRef<any>(null);
	const [isPlaying, setIsPlaying] = useState(true);

	useEffect(() => {
		// Load Vimeo player script if not already loaded
		const loadScript = () => {
			if (!document.querySelector('script[src="https://player.vimeo.com/api/player.js"]')) {
				const script = document.createElement("script");
				script.src = "https://player.vimeo.com/api/player.js";
				script.async = true;
				document.body.appendChild(script);
				return script;
			}
			return null;
		};

		const script = loadScript();

		// Initialize Vimeo player once script is loaded
		const initPlayer = () => {
			if (iframeRef.current && (window as any).Vimeo?.Player) {
				playerRef.current = new (window as any).Vimeo.Player(iframeRef.current);
				
				// Listen to play/pause events
				playerRef.current.on("play", () => setIsPlaying(true));
				playerRef.current.on("pause", () => setIsPlaying(false));
			}
		};

		if (script) {
			script.onload = initPlayer;
		} else {
			// Script already loaded
			setTimeout(initPlayer, 100);
		}
	}, []);

	const togglePlayPause = async () => {
		if (playerRef.current) {
			if (isPlaying) {
				await playerRef.current.pause();
			} else {
				await playerRef.current.play();
			}
		}
	};

	return (
		<section className="bg-[#fae6e9] py-16 lg:py-24">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Desktop/Tablet Preview */}
				<div className="mb-16 lg:mb-24">
					<div className="relative max-w-4xl mx-auto">
						<div className="bg-black rounded-3xl p-1 lg:p-2 shadow-2xl">
							<div
								style={{
									padding: "56.25% 0 0 0",
									position: "relative",
								}}
								className="rounded-2xl overflow-hidden group"
							>
								<iframe
									ref={iframeRef}
									src="https://player.vimeo.com/video/1156430670?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&controls=0&title=0&byline=0&portrait=0&background=1"
									frameBorder="0"
									allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
									referrerPolicy="strict-origin-when-cross-origin"
									style={{
										position: "absolute",
										top: 0,
										left: 0,
										width: "100%",
										height: "100%",
									}}
									title="BFM-Marseille-Provence-le-mercredi-5-novembre-2025-11-34"
									className="rounded-2xl"
									allowFullScreen
								/>
								<button
									onClick={togglePlayPause}
									className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 rounded-2xl"
									aria-label={isPlaying ? "Pause" : "Play"}
								>
									<div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg transition-transform hover:scale-110">
										{isPlaying ? (
											<svg
												className="w-6 h-6 lg:w-8 lg:h-8 text-black ml-1"
												fill="currentColor"
												viewBox="0 0 24 24"
											>
												<path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
											</svg>
										) : (
											<svg
												className="w-6 h-6 lg:w-8 lg:h-8 text-black ml-1"
												fill="currentColor"
												viewBox="0 0 24 24"
											>
												<path d="M8 5v14l11-7z" />
											</svg>
										)}
									</div>
								</button>
							</div>
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
