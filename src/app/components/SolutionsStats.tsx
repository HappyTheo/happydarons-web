'use client';

import { Baby, PersonStanding, Users, Landmark } from 'lucide-react';
import { useState } from 'react';

// Card Data Interface
interface StatData {
    icon: React.ElementType;
    title: string;
    text: string;
    source: string;
}

const statsData: StatData[] = [
    {
        icon: Baby, // Biberon / Bébé
        title: "82%",
        text: "des salarié·e·s-parents envisagent de quitter leur poste par manque de soutien.",
        source: "Source : Baromètre de la Parentalité en Entreprise 2023"
    },
    {
        icon: PersonStanding, // Femme enceinte context - using PersonStanding as placeholder for pregnant woman or similar
        title: "1er facteur",
        text: "de turnover chez les femmes : la maternité.",
        source: "Source : Étude Work Institute"
    },
    {
        icon: Users, // Couple
        title: "89%",
        text: "des salariés sont parents.",
        source: "Source : Observatoire de la QVT"
    },
    {
        icon: Landmark, // Etat / Institution
        title: "Crédit d’impôt familles",
        text: "jusqu'à 50 % de vos dépenses éligibles remboursées.",
        source: "Source : Code Général des Impôts"
    }
];

function StatCard({ data }: { data: StatData }) {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            className="group perspective-1000 w-full h-[320px] cursor-pointer active:scale-95 transition-transform duration-200"
            onClick={() => setIsFlipped(!isFlipped)}
            onMouseLeave={() => setIsFlipped(false)}
        >
            <div className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] rounded-2xl ${isFlipped ? '[transform:rotateY(180deg)]' : 'group-hover:[transform:rotateY(180deg)]'}`}>

                {/* Front Face */}
                <div className="absolute inset-0 bg-white rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center justify-start pt-10 px-6 pb-6 text-center [backface-visibility:hidden]">
                    {/* Icon Circle */}
                    <div className="w-14 h-14 rounded-full bg-[#fae6e9] flex items-center justify-center mb-8 flex-shrink-0 border-2 border-transparent transform scale-110">
                        <data.icon size={28} className="text-[#203b31]" />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-xl font-bold text-[#203b31]">{data.title}</h3>
                        <p className="text-sm font-medium text-gray-600 leading-tight">
                            {data.text}
                        </p>
                    </div>
                </div>

                {/* Back Face - Source */}
                <div className="absolute inset-0 bg-white rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center p-6 text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <p className="text-sm font-semibold text-[#203b31] italic">
                        {data.source}
                    </p>
                </div>
            </div>
        </div>
    );
}

export function SolutionsStats() {
    return (
        <section className="py-16 px-4 md:px-8 bg-[#fae6e9]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 font-outfit">
                        Pourquoi <span className="text-[#FFA6BF]">Happy</span><span className="text-[#267B56]">Darons</span> ?
                    </h2>
                    <p className="text-lg md:text-xl text-[#203b31] font-medium max-w-3xl mx-auto">
                        La parentalité : un enjeu majeur pour vos équipes… et pour votre entreprise.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {statsData.map((stat, index) => (
                        <StatCard key={index} data={stat} />
                    ))}
                </div>
            </div>
        </section>
    );
}
