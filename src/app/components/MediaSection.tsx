import { useEffect, useRef, useState, useCallback } from "react";
import imgMedia1 from "@/assets/9efc920c42477400b0616e6072efe0ebf2f34d96.webp";
import imgMedia2 from "@/assets/0677cfaba7a6985a87d2c604e633d84514b29183.webp";
import imgMedia3 from "@/assets/cf3bed17333e2d556c05fa1ebd739ce008a92543.webp";
import imgMedia4 from "@/assets/b43351f51581ad734046b9a55ef4c1d7945c0170.webp";
import imgMedia5 from "@/assets/b7447ecd483703e0e4833c09323e1fb78b5dff31.webp";
import imgMedia6 from "@/assets/8efb45ff1f355d5d979c2edf6bbbc0ff1f2b9c32.webp";

export function MediaSection() {
	const mediaLogos = [imgMedia1, imgMedia2, imgMedia3, imgMedia4, imgMedia5, imgMedia6];
	const iframeRef = useRef<HTMLIFrameElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const playerRef = useRef<any>(null);
	const [isPlaying, setIsPlaying] = useState(false);
	const [isMuted, setIsMuted] = useState(true);
	const [showControls, setShowControls] = useState(true);
	const [isInView, setIsInView] = useState(false);
	const [playerReady, setPlayerReady] = useState(false);
	const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);
	const hasAutoPlayedRef = useRef(false);

	// Hide controls after 3 seconds of inactivity
	const resetControlsTimer = useCallback(() => {
		setShowControls(true);
		if (controlsTimeoutRef.current) {
			clearTimeout(controlsTimeoutRef.current);
		}
		controlsTimeoutRef.current = setTimeout(() => {
			if (isPlaying) {
				setShowControls(false);
			}
		}, 3000);
	}, [isPlaying]);

	// Intersection Observer for autoplay on scroll
	useEffect(() => {
		if (!containerRef.current) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					setIsInView(entry.isIntersecting);
				});
			},
			{
				threshold: 0.5, // Trigger when 50% of video is visible
				rootMargin: "0px",
			}
		);

		observer.observe(containerRef.current);

		return () => {
			observer.disconnect();
		};
	}, []);

	// Auto play/pause based on visibility
	useEffect(() => {
		if (!playerRef.current || !playerReady) return;

		if (isInView && !isPlaying) {
			// Video comes into view - autoplay (muted required by browsers)
			playerRef.current.play().catch(() => {
				// Autoplay might be blocked, that's fine
			});
			hasAutoPlayedRef.current = true;
		} else if (!isInView && hasAutoPlayedRef.current) {
			// Video leaves view - pause
			playerRef.current.pause().catch(() => { });
		}
	}, [isInView, playerReady, isPlaying]);

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

				// Mark player as ready
				playerRef.current.ready().then(() => {
					setPlayerReady(true);
				});
			}
		};

		if (script) {
			script.onload = initPlayer;
		} else {
			// Script already loaded
			setTimeout(initPlayer, 100);
		}

		return () => {
			if (controlsTimeoutRef.current) {
				clearTimeout(controlsTimeoutRef.current);
			}
		};
	}, []);

	const togglePlayPause = async () => {
		if (playerRef.current) {
			if (isPlaying) {
				await playerRef.current.pause();
			} else {
				await playerRef.current.play();
			}
		}
		resetControlsTimer();
	};

	const isTogglingRef = useRef(false);

	const toggleMute = (e: React.MouseEvent) => {
		e.stopPropagation();

		// Debounce to prevent double-tap on mobile
		if (isTogglingRef.current) return;
		isTogglingRef.current = true;

		if (playerRef.current) {
			if (isMuted) {
				playerRef.current.setVolume(1);
				setIsMuted(false);
			} else {
				playerRef.current.setVolume(0);
				setIsMuted(true);
			}
		}
		resetControlsTimer();

		// Reset debounce after 300ms
		setTimeout(() => {
			isTogglingRef.current = false;
		}, 300);
	};

	return (
		<section className="bg-white py-16 lg:py-24">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Media Mentions */}
				<div className="mb-16 lg:mb-24">
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

				{/* Video Player */}
				<div>
					<div className="relative max-w-4xl mx-auto">
						<div
							ref={containerRef}
							className="bg-black rounded-3xl p-1 lg:p-2 shadow-2xl"
							onMouseMove={resetControlsTimer}
							onMouseEnter={() => setShowControls(true)}
						>
							<div
								style={{
									padding: "56.25% 0 0 0",
									position: "relative",
								}}
								className="rounded-2xl overflow-hidden"
							>
								<iframe
									ref={iframeRef}
									src="https://player.vimeo.com/video/1156430670?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=0&muted=1&loop=1&controls=0&title=0&byline=0&portrait=0"
									frameBorder="0"
									allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
									referrerPolicy="strict-origin-when-cross-origin"
									style={{
										position: "absolute",
										top: 0,
										left: 0,
										width: "100%",
										height: "100%",
									}}
									title="BFM-Marseille-Provence"
									className="rounded-2xl"
									allowFullScreen
								/>

								{/* Main Click Handler (Mute/Unmute) */}
								{/* Main Click Handler (Mute/Unmute) */}
								{isPlaying && (
									<button
										onClick={toggleMute}
										className={`absolute inset-0 z-10 flex items-center justify-center transition-all cursor-pointer touch-manipulation group ${isMuted ? "bg-black/30 backdrop-blur-[2px]" : "bg-transparent"
											}`}
										aria-label={isMuted ? "Activer le son" : "Couper le son"}
									>
										{isMuted ? (
											<div className="flex items-center gap-3 bg-white/95 text-black px-6 py-3 rounded-full shadow-xl animate-pulse">
												<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
													<path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
												</svg>
												<span className="font-semibold text-sm">Cliquer pour activer le son</span>
											</div>
										) : (
											<div className="bg-black/40 backdrop-blur-sm p-6 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-90 group-hover:scale-100">
												<svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
													<path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
												</svg>
											</div>
										)}
									</button>
								)}

								{/* Minimalist bottom control bar */}
								<div
									className={`absolute bottom-0 left-0 right-0 px-4 py-3 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300 z-20 ${showControls && !isMuted ? "opacity-100" : "opacity-0"
										}`}
								>
									<div className="flex items-center justify-end gap-3">
										{/* Mute/Unmute button */}
										<button
											onClick={toggleMute}
											className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all touch-manipulation"
											aria-label={isMuted ? "Activer le son" : "Couper le son"}
										>
											{isMuted ? (
												<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
													<path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
													<path strokeLinecap="round" strokeLinejoin="round" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
												</svg>
											) : (
												<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
													<path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
												</svg>
											)}
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
