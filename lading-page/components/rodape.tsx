"use client";

import Link from "next/link";

export function Rodape() {
  return (
    <footer className="relative bg-white/5 backdrop-blur-xl border-t border-white/10">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-purple-600/20 rounded-xl flex items-center justify-center">
                <span className="text-purple-400 font-bold text-xl">P</span>
              </div>
              <span className="text-white font-bold text-xl">Planejai</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Sua experiência definitiva em gestão pessoal. Planeje metas,
              acompanhe gastos e veja seu patrimônio crescer com elegância.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#hero"
                  className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  href="#recursos"
                  className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                >
                  Recursos
                </Link>
              </li>
              <li>
                <Link
                  href="#prova-social"
                  className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                >
                  Como Funciona
                </Link>
              </li>
              <li>
                <Link
                  href="#contato"
                  className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Social & Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Conecte-se</h3>
            <div className="flex gap-3 mb-4">
              <a
                href="#"
                className="w-8 h-8 bg-purple-600/10 hover:bg-purple-600/20 rounded-lg flex items-center justify-center text-purple-400 hover:text-purple-300 transition-all hover:scale-110"
              >
                <span className="material-symbols-outlined text-sm">share</span>
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-purple-600/10 hover:bg-purple-600/20 rounded-lg flex items-center justify-center text-purple-400 hover:text-purple-300 transition-all hover:scale-110"
              >
                <span className="material-symbols-outlined text-sm">mail</span>
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-purple-600/10 hover:bg-purple-600/20 rounded-lg flex items-center justify-center text-purple-400 hover:text-purple-300 transition-all hover:scale-110"
              >
                <span className="material-symbols-outlined text-sm">phone</span>
              </a>
            </div>
            <div className="space-y-2">
              <Link
                href="#"
                className="block text-gray-400 hover:text-purple-400 transition-colors text-sm"
              >
                Política de Privacidade
              </Link>
              <Link
                href="#"
                className="block text-gray-400 hover:text-purple-400 transition-colors text-sm"
              >
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Planejai. Todos os direitos
              reservados.
            </p>
            <p className="text-gray-500 text-xs">
              Feito com ❤️ para sua liberdade financeira
            </p>
          </div>
        </div>
      </div>

      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(120,119,198,0.05),transparent_50%)] pointer-events-none"></div>
    </footer>
  );
}
