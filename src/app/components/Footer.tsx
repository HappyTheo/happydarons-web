import { Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#fae6e9] border-t border-black/25 py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a 
              href="#" 
              className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white border-2 border-black flex items-center justify-center hover:bg-[#ffa6bf] hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 lg:w-6 lg:h-6" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white border-2 border-black flex items-center justify-center hover:bg-[#ffa6bf] hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 lg:w-6 lg:h-6" />
            </a>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-6 text-sm lg:text-base text-black text-center">
            <a href="#" className="hover:text-[#ffa6bf] transition-colors">Mentions légales</a>
            <span className="hidden sm:inline">|</span>
            <a href="#" className="hover:text-[#ffa6bf] transition-colors">Politique de confidentialité</a>
            <span className="hidden sm:inline">|</span>
            <a href="#" className="hover:text-[#ffa6bf] transition-colors">Conditions d'utilisation</a>
          </div>

          {/* Copyright */}
          <p className="text-sm lg:text-base text-black text-center">
            Tous droits réservés. @2026 HappyDarons
          </p>
        </div>
      </div>
    </footer>
  );
}
