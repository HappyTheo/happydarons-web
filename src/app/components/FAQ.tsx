import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "HappyDarons, c'est pour qui exactement ?",
    answer: "HappyDarons s'adresse aux entreprises qui souhaitent accompagner leurs salarié·e·s-parents et aux parents qui cherchent du soutien au quotidien."
  },
  {
    question: "HappyDarons, c'est pour qui exactement ?",
    answer: "HappyDarons s'adresse aux entreprises qui souhaitent accompagner leurs salarié·e·s-parents et aux parents qui cherchent du soutien au quotidien."
  },
  {
    question: "HappyDarons, c'est pour qui exactement ?",
    answer: "HappyDarons s'adresse aux entreprises qui souhaitent accompagner leurs salarié·e·s-parents et aux parents qui cherchent du soutien au quotidien."
  },
  {
    question: "HappyDarons, c'est pour qui exactement ?",
    answer: "HappyDarons s'adresse aux entreprises qui souhaitent accompagner leurs salarié·e·s-parents et aux parents qui cherchent du soutien au quotidien."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-[#fae6e9] py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-[#2a2a28] mb-12 lg:mb-16">
          Questions fréquentes
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white/75 backdrop-blur-sm border-2 border-black/40 rounded-[32px] overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 lg:p-8 text-left hover:bg-white/50 transition-colors"
              >
                <span className="text-lg lg:text-2xl font-medium text-black pr-4">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`flex-shrink-0 w-6 h-6 lg:w-8 lg:h-8 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {openIndex === index && (
                <div className="px-6 lg:px-8 pb-6 lg:pb-8">
                  <p className="text-base lg:text-lg text-black/80">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
