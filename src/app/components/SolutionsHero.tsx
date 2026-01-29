import heroImage from '@/assets/template2 1.webp';

export function SolutionsHero() {
    const features = [
        "Une app pour les parents.",
        "Une plateforme RH pour piloter.",
        "Un catalogue de formations pour sensibiliser.",
    ];

    // Elegant oval petals bullet - 3 ovals fanning out
    const PetalBullet = () => (
        <div className="relative w-6 h-6 mr-3 flex-shrink-0 flex items-center justify-center">
            {/* 3 oval petals in a fan/arc arrangement */}
            <div
                className="absolute w-[6px] h-[18px] rounded-full -rotate-[40deg] -translate-x-[4px] -translate-y-[3px]"
                style={{ backgroundColor: '#267B56' }}
            />
            <div
                className="absolute w-[7px] h-[21px] rounded-full -translate-y-[6px]"
                style={{ backgroundColor: '#FFA6BF' }}
            />
            <div
                className="absolute w-[6px] h-[18px] rounded-full rotate-[40deg] translate-x-[4px] -translate-y-[3px]"
                style={{ backgroundColor: '#267B56' }}
            />
        </div>
    );

    return (
        <section
            className="relative overflow-hidden pt-40 lg:pt-56 pb-20 lg:pb-32"
            style={{
                backgroundColor: '#1F3C32',
                borderBottomLeftRadius: '48px',
                borderBottomRightRadius: '48px'
            }}
        >
            {/* Subtle gradient overlay */}
            <div
                className="absolute inset-0"
                style={{
                    background: 'radial-gradient(ellipse at top right, rgba(38, 123, 86, 0.3) 0%, transparent 50%), radial-gradient(ellipse at bottom left, rgba(255, 166, 191, 0.1) 0%, transparent 40%)'
                }}
            />

            {/* Content - Two column layout */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
                <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12 xl:gap-16">

                    {/* Left side - Text content */}
                    <div className="lg:w-1/2 lg:pr-4 flex flex-col items-center">
                        {/* Main Title */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] xl:text-5xl 2xl:text-6xl font-bold text-white leading-[1.15] mb-10 lg:mb-12 text-center">
                            La <span style={{ color: '#FFA6BF' }}>solution</span> qui prend soin<br />
                            de celles et ceux qui<br />
                            prennent soin des autres.
                        </h1>

                        {/* Feature list with flower petal bullet points */}
                        <div className="space-y-5 mb-10 lg:mb-12 w-fit">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="flex items-center"
                                >
                                    <PetalBullet />
                                    <span className="text-white text-base md:text-lg lg:text-xl xl:text-2xl font-medium tracking-tight">
                                        {feature}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Tagline */}
                        <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold mb-10 lg:mb-12 text-center" style={{ color: '#FFA6BF' }}>
                            Une seule solution : HappyDarons
                        </p>

                        {/* CTA Button - Pink with neobrutalism style */}
                        <button
                            className="
								px-8 py-4 lg:px-10 lg:py-5
								rounded-xl lg:rounded-2xl
								border-2 border-black
								shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
								hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
								hover:translate-x-[2px] hover:translate-y-[2px]
								active:shadow-none active:translate-x-[4px] active:translate-y-[4px]
								transition-all duration-200
								text-white text-lg lg:text-xl font-semibold
                                mx-auto
							"
                            style={{ backgroundColor: '#FFA6BF' }}
                        >
                            Demander une démo
                        </button>
                    </div>

                    {/* Right side - Image */}
                    <div className="lg:w-1/2 mt-12 lg:mt-0">
                        <div className="relative">
                            {/* Decorative background shape */}
                            <div
                                className="absolute -inset-4 rounded-[32px] opacity-20"
                                style={{ backgroundColor: '#267B56' }}
                            />
                            {/* Main image */}
                            <img
                                src={heroImage}
                                alt="Parent heureux avec son enfant"
                                className="relative w-full h-auto rounded-[24px] lg:rounded-[32px] shadow-2xl object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
