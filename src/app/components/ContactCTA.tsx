import { useState, useEffect } from "react";
import { PopupModal } from "react-calendly";

export function ContactCTA() {
  const [isOpen, setIsOpen] = useState(false);
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

  // Elegant oval petals bullet - 3 ovals fanning out
  const PetalBullet = () => (
    <div className="relative w-6 h-6 mr-3 flex-shrink-0 flex items-center justify-center translate-y-[2px]">
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

  useEffect(() => {
    // Wait for the component to be mounted before setting the root element
    // ensuring we are on client side and 'root' exists
    setRootElement(document.getElementById("root"));
  }, []);

  return (
    <section className="bg-[#fae6e9] py-16 lg:py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[rgba(251,229,223,0.7)] border-2 border-black rounded-3xl p-8 lg:p-12 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2a2a28] mb-4 lg:mb-6">
            Prêt.e à mieux accompagner vos salarié.e.s-parents ?
          </h2>

          <p className="text-lg lg:text-xl text-black mb-8 lg:mb-12">
            Donnez à vos équipes l'accompagnement qu'elles méritent.
            <br />
            HappyDarons vous aide à mettre en place des actions concrètes, humaines et durables, sans complexité ni jargon.
          </p>

          <div className="bg-white/70 rounded-3xl p-6 lg:p-8 mb-8">
            <h3 className="text-3xl lg:text-4xl font-bold text-[#2a2a28] mb-6">
              Echangeons ensemble !
            </h3>

            <div className="space-y-4 text-left text-sm lg:text-base text-black mb-6">
              <div className="flex items-start">
                <PetalBullet />
                <span>ateliers concrets et engageants</span>
              </div>
              <div className="flex items-start">
                <PetalBullet />
                <span>programmes adaptés</span>
              </div>
              <div className="flex items-start">
                <PetalBullet />
                <span>accompagnement simple et humain pour vos équipes</span>
              </div>
              <div className="flex items-start">
                <PetalBullet />
                <span>mise en place rapide et sans friction</span>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(true)}
              className="w-full sm:w-auto bg-[#ffa6bf] text-white px-8 py-4 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all text-lg font-medium"
            >
              Réserve une démo !
            </button>

            {rootElement && (
              <PopupModal
                url="https://calendly.com/tess-cevaer-happydarons/happydarons-rendez-vous-clone"
                onModalClose={() => setIsOpen(false)}
                open={isOpen}
                rootElement={rootElement}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
