"use client";

import Link from "next/link";
import { useState } from "react";

export function Navegacao() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-[#030712]/50 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center overflow-hidden">
              <img
                src="/image/logo-planejai.png"
                alt="Logo Planejai"
                className="w-8 h-8 object-contain shadow-[0_0_32px_8px_#a259ff33] rounded-none"
              />
            </div>
            <span className="font-bold text-2xl tracking-tight bg-clip-text text-transparent bg-linear-to-r from-white to-gray-400">
              Planejai
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            <Link
              href="#recursos"
              className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
            >
              Recursos
            </Link>
            <Link
              href="#chat-bot"
              className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
            >
              Chat Bot
            </Link>

            <div className="w-px bg-gray-700"></div>
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
            >
              Login
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold rounded-full text-white bg-linear-to-r from-purple-600 to-purple-700 hover:scale-105 transition-all shadow-lg shadow-purple-500/20"
            >
              Começar Agora
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
          >
            <span className="material-symbols-outlined">
              {isMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#030712]/90 backdrop-blur-xl border-t border-white/10">
            <div className="px-4 py-6 space-y-4">
              <Link
                href="#recursos"
                className="block text-gray-400 hover:text-white transition-colors text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Recursos
              </Link>
              <Link
                href="#chat-bot"
                className="block text-gray-400 hover:text-white transition-colors text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Chat Bot
              </Link>
              <div className="w-full h-px bg-gray-700"></div>
              <Link
                href="#"
                className="block text-gray-400 hover:text-white transition-colors text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                href="#"
                className="block text-gray-400 hover:text-white transition-colors text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Registrar
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
