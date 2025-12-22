export function ConstatSection() {
  return (
    <section className="bg-[#1f3c32] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-white mb-12 lg:mb-16">
          Notre constat
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Stat Cards */}
          {[
            {
              title: "70%",
              description: "des parents se sentent dépassés par la charge mentale"
            },
            {
              title: "85%",
              description: "des RH cherchent des solutions pour soutenir les parents"
            },
            {
              title: "92%",
              description: "estiment qu'une meilleure conciliation vie pro/perso améliore l'engagement"
            }
          ].map((stat, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-3xl p-8 text-center hover:bg-white/20 transition-all"
            >
              <p className="text-5xl lg:text-6xl font-bold text-[#ffa6bf] mb-4">
                {stat.title}
              </p>
              <p className="text-lg lg:text-xl text-white">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
