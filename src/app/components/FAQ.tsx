'use client';

import { useState, useRef, useEffect } from 'react';
import {
  ChevronDown,
  Heart,
  Smartphone,
  Coins,
  Handshake,
  Building2,
  Receipt,
  Shield,
  Headphones
} from 'lucide-react';

// Icônes pour chaque catégorie
const categoryIcons = [
  Heart,
  Smartphone,
  Coins,
  Handshake,
  Building2,
  Receipt,
  Shield,
  Headphones
];

// Labels courts pour les onglets
const categoryLabels = [
  "HappyDarons",
  "Application",
  "Crédits",
  "Partenaires",
  "Entreprises",
  "Financement",
  "RGPD",
  "Support"
];

const faqs = [
  {
    category: "À propos d'HappyDarons",
    items: [
      {
        question: "Qu'est-ce qu'HappyDarons ?",
        answer: "HappyDarons est une solution complète qui soutient les salarié.e.s-parents à chaque étape de la parentalité et aide les entreprises à structurer une politique parentale inclusive et durable."
      },
      {
        question: "À qui s'adresse HappyDarons ?",
        answer: "Aux parents, futurs parents (PMA, adoption, pré-conception), RH, managers et entreprises souhaitant améliorer l'équilibre vie pro / vie perso et réduire la charge mentale."
      },
      {
        question: "Quel problème HappyDarons résout ?",
        answer: "HappyDarons aide les parents au quotidien et réduit les impacts RH majeurs : désengagement, turnover, surcharge mentale, absentéisme."
      }
    ]
  },
  {
    category: "Fonctionnement de l'application",
    items: [
      {
        question: "Que trouve-t-on dans l'app ?",
        answer: "Ressources personnalisées, Programmes thématiques, Chatbot IA 24/7, Rappels & organisation familiale, Ateliers & groupes de parole, Consultations individuelles, Services partenaires (garde d'enfants, assistance, ménage…)."
      },
      {
        question: "Puis-je utiliser HappyDarons si je ne suis pas encore parent ?",
        answer: "Oui, la solution accompagne aussi les personnes en projet d'enfant ou parcours PMA."
      },
      {
        question: "Est-ce que je peux souscrire individuellement à HappyDarons, sans mon entreprise ?",
        answer: "Pour le moment, HappyDarons est disponible uniquement via votre entreprise. Si vous souhaitez en bénéficier, vous pouvez nous recommander à votre RH ou manager, nous vous fournissons un message clé-en-main pour les contacter."
      }
    ]
  },
  {
    category: "Le système de crédits",
    items: [
      {
        question: "Qu'est-ce que les crédits HappyDarons ?",
        answer: "Les crédits sont une monnaie interne offerte par l'entreprise pour réserver des consultations, ateliers et services du quotidien."
      },
      {
        question: "Comment fonctionne le système de crédits ?",
        answer: "Les collaborateurs disposent d'un nombre de crédits annuel. Ils choisissent librement comment les utiliser selon leurs besoins : soutien émotionnel, administratif, parental, organisationnel."
      },
      {
        question: "Les crédits sont-ils renouvelés automatiquement ?",
        answer: "Ils sont valables pendant la durée du contrat entreprise (12 mois). L'entreprise peut ajuster les modalités si nécessaire. Vous pouvez également rajouter des crédits par vous-même si vous le souhaitez."
      },
      {
        question: "L'entreprise peut-elle payer une partie des services, comme GymLib ?",
        answer: "Oui. Tout comme GymLib, l'entreprise peut : financer 100 % des crédits, ou choisir un co-financement : une partie financée par l'entreprise, une partie par le collaborateur. Cela permet de démocratiser l'accès tout en maîtrisant les coûts."
      }
    ]
  },
  {
    category: "Services partenaires",
    items: [
      {
        question: "Quels services partenaires proposez-vous ?",
        answer: "Selon le pack choisi : Garde d'enfants (Yoopala), Aide à domicile / ménage, Soutien scolaire, Services du quotidien (administratif, vie pratique…) et d'autres partenaires sélectionnés pour leur qualité et fiabilité."
      },
      {
        question: "Comment fonctionnent les services partenaires via l'app ?",
        answer: "Les salarié.e.s réservent en quelques clics. Sur certains services, ils utilisent leurs crédits ; sur d'autres, un tarif négocié HappyDarons s'applique."
      }
    ]
  },
  {
    category: "Pour les entreprises, RH & managers",
    items: [
      {
        question: "Comment HappyDarons aide-t-il les RH ?",
        answer: "Nous fournissons : un tableau de bord complet, un suivi anonymisé du bien-être parental, un diagnostic des besoins, des outils de communication interne, des formations et sensibilisations pour les managers."
      },
      {
        question: "Quels types d'entreprises peuvent utiliser HappyDarons ?",
        answer: "HappyDarons accompagne : Startups, TPE & PME, ETI, Grands groupes, Collectivités et organisations publiques. Nous adaptons nos packs à la taille, au secteur et au nombre de parents."
      },
      {
        question: "Quelles sont vos solutions entreprise ?",
        answer: "Plateforme RH & tableau de bord, Programmes d'accompagnement pour les parents, Ateliers / conférences / groupes de parole, Suivi de l'impact & reporting, Packs de crédits, Formations managers."
      },
      {
        question: "Comment se déroule l'implémentation ?",
        answer: "Mise en place en 3 semaines, Supports de communication fournis, Paramétrage des crédits, Onboarding équipes RH / managers, Lancement auprès des collaborateurs."
      }
    ]
  },
  {
    category: "Financement & Crédit d'Impôt Famille (CIF)",
    items: [
      {
        question: "HappyDarons est-il éligible au Crédit d'Impôt Famille ?",
        answer: "Oui. Les entreprises peuvent bénéficier du Crédit d'Impôt Famille (CIF) pour financer une partie de la solution HappyDarons, selon les modalités prévues par l'administration fiscale."
      },
      {
        question: "Comment fonctionne le CIF pour HappyDarons ?",
        answer: "Certaines prestations (ateliers, accompagnements, services liés à la parentalité) peuvent être partiellement remboursées par le CIF. Nous fournissons une attestation et un guide pour aider l'entreprise à optimiser son dispositif."
      },
      {
        question: "L'entreprise peut-elle combiner CIF + co-financement ?",
        answer: "Oui. C'est même l'une des options les plus avantageuses pour réduire les coûts tout en offrant une belle expérience aux salariés."
      }
    ]
  },
  {
    category: "Confidentialité & sécurité (RGPD)",
    items: [
      {
        question: "Mes données sont-elles partagées avec mon employeur ?",
        answer: "Non. Les RH n'ont jamais accès à vos données personnelles ni à vos consultations."
      },
      {
        question: "Comment garantissez-vous la confidentialité ?",
        answer: "Toutes les données sont anonymisées, stockées en France et conformes au RGPD."
      }
    ]
  },
  {
    category: "Support & assistance",
    items: [
      {
        question: "Comment contacter HappyDarons ?",
        answer: "Directement depuis l'app ou par email à cette adresse : hello@happydarons.fr"
      },
      {
        question: "Proposez-vous un accompagnement pour le déploiement ?",
        answer: "Oui, un Customer Success vous accompagne à chaque étape."
      }
    ]
  }
];

// Composant pour un item FAQ avec animation
function FAQItem({
  faq,
  isOpen,
  onToggle
}: {
  faq: { question: string; answer: string };
  isOpen: boolean;
  onToggle: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [isOpen]);

  return (
    <div
      className={`
        bg-white rounded-2xl overflow-hidden
        border-2 transition-all duration-200
        ${isOpen
          ? 'border-[#ffa6bf] shadow-[2px_2px_0px_0px_rgba(255,166,191,1)] translate-x-[2px] translate-y-[2px]'
          : 'border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px]'
        }
      `}
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between p-4 lg:p-5 text-left"
      >
        <span className={`
          text-base lg:text-lg font-medium pr-4 transition-colors duration-200
          ${isOpen ? 'text-[#ffa6bf]' : 'text-[#203b31]'}
        `}>
          {faq.question}
        </span>
        <span className={`
          flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center
          border-2 border-black transition-all duration-200
          ${isOpen
            ? 'bg-[#ffa6bf] text-white rotate-180 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
            : 'bg-[#fae6e9] text-[#203b31] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
          }
        `}>
          <ChevronDown className="w-5 h-5" />
        </span>
      </button>

      <div
        className="overflow-hidden transition-all duration-300 ease-out"
        style={{ height: isOpen ? height : 0 }}
      >
        <div ref={contentRef} className="px-4 lg:px-5 pb-4 lg:pb-5">
          <div className="pt-3 border-t-2 border-dashed border-black/20">
            <p className="text-base text-[#203b31]/80 leading-relaxed pt-3">
              {faq.answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FAQ() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const tabsRef = useRef<HTMLDivElement>(null);

  // Reset open question when changing category
  useEffect(() => {
    setOpenIndex(null);
  }, [activeCategory]);

  const currentCategory = faqs[activeCategory];
  const CategoryIcon = categoryIcons[activeCategory];

  return (
    <section id="faq" className="bg-[#fae6e9] py-16 lg:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 lg:mb-14">
          <div className="inline-flex px-4 py-2 rounded-full bg-[#267B56] text-[#ffa6bf] font-bold text-sm tracking-wide uppercase shadow-sm mb-6">
            FAQ
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#203b31]">
            Questions fréquentes
          </h2>
          <p className="mt-4 text-lg text-[#203b31]/60 max-w-2xl mx-auto">
            Trouvez rapidement les réponses à vos questions
          </p>
        </div>

        {/* Category Tabs - Desktop */}
        <div className="hidden lg:block mb-10">
          <div className="flex flex-wrap justify-center gap-3">
            {faqs.map((_, index) => {
              const Icon = categoryIcons[index];
              const isActive = activeCategory === index;

              return (
                <button
                  key={index}
                  onClick={() => setActiveCategory(index)}
                  className={`
                    flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium text-sm
                    border-2 transition-all duration-200
                    ${isActive
                      ? 'bg-[#ffa6bf] text-white border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] translate-x-[2px] translate-y-[2px]'
                      : 'bg-white text-[#203b31] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px]'
                    }
                  `}
                >
                  <Icon className="w-4 h-4" />
                  {categoryLabels[index]}
                </button>
              );
            })}
          </div>
        </div>

        {/* Category Tabs - Mobile (Horizontal Scroll) */}
        <div className="lg:hidden mb-8 -mx-4 px-4">
          <div
            ref={tabsRef}
            className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {faqs.map((_, index) => {
              const Icon = categoryIcons[index];
              const isActive = activeCategory === index;

              return (
                <button
                  key={index}
                  onClick={() => setActiveCategory(index)}
                  className={`
                    flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium text-sm
                    border-2 transition-all duration-200 snap-start
                    ${isActive
                      ? 'bg-[#ffa6bf] text-white border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                      : 'bg-white text-[#203b31] border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'
                    }
                  `}
                >
                  <Icon className="w-4 h-4" />
                  {categoryLabels[index]}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Category Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#267b56] text-white border-2 border-[#1a5a3e] shadow-[3px_3px_0px_0px_rgba(26,90,62,1)]">
            <CategoryIcon className="w-5 h-5" />
          </span>
          <h3 className="text-xl lg:text-2xl font-bold text-[#203b31]">
            {currentCategory.category}
          </h3>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4" role="region" aria-label="Questions fréquentes">
          {currentCategory.items.map((faq, itemIndex) => (
            <FAQItem
              key={`${activeCategory}-${itemIndex}`}
              faq={faq}
              isOpen={openIndex === itemIndex}
              onToggle={() => setOpenIndex(openIndex === itemIndex ? null : itemIndex)}
            />
          ))}
        </div>

        {/* Category Navigation Dots */}
        <div className="flex justify-center gap-2 mt-10">
          {faqs.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              aria-label={`Voir la catégorie ${categoryLabels[index]}`}
              className={`
                h-3 rounded-full border-2 border-black transition-all duration-300
                ${activeCategory === index
                  ? 'w-8 bg-[#ffa6bf]'
                  : 'w-3 bg-white hover:bg-[#fae6e9]'
                }
              `}
            />
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center p-6 lg:p-8 bg-white rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <p className="text-[#203b31]/80 mb-4">
            Vous ne trouvez pas la réponse à votre question ?
          </p>
          <a
            href="mailto:hello@happydarons.fr"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#ffa6bf] text-white font-semibold rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all"
          >
            <Headphones className="w-5 h-5" />
            Contactez-nous
          </a>
        </div>
      </div>
    </section>
  );
}
