"use client";

import Link from "next/link";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { useState, useRef } from "react";
import "../../styles/scrollRevealAnimations.css";

export function Rodape() {
  const { ref, revealed } = useScrollReveal({ threshold: 0.15, repeat: true });

  return (
    <footer
      ref={ref}
      className={`relative bg-white/5 backdrop-blur-xl border-t border-white/10 reveal${revealed ? " revealed" : ""} group`}
      style={{ overflow: "hidden" }}
    >
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-purple-500/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <div
                  className="absolute inset-0 rounded-full pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(105,3,149,0.18) 60%, transparent 100%)",
                  }}
                ></div>
                <img
                  src="/image/logo-planejai.png"
                  alt="Logo Planejai"
                  className="w-8 h-8 object-contain relative z-10"
                />
              </div>
              <span className="text-white font-bold text-xl">Planejai</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Sua experiência definitiva em gestão pessoal. Planeje metas,
              acompanhe gastos e veja seu patrimônio crescer com elegância.
            </p>
          </div>

          {/* Agrupamento para mobile: Links Rápidos + Conecte-se */}
          <div className="grid grid-cols-2 gap-6 md:contents">
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
                  href="https://github.com/WillianRodriguesz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-purple-600/10 hover:bg-purple-600/20 rounded-lg flex items-center justify-center text-purple-400 hover:text-purple-300 transition-all hover:scale-110"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.468-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.218.694.825.576C20.565 21.796 24 17.299 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=willianrdriguesz@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-purple-600/10 hover:bg-purple-600/20 rounded-lg flex items-center justify-center text-purple-400 hover:text-purple-300 transition-all hover:scale-110"
                >
                  <span className="material-symbols-outlined text-sm">
                    mail
                  </span>
                </a>
                <a
                  href="https://www.linkedin.com/in/willianrdrigues/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-purple-600/10 hover:bg-purple-600/20 rounded-lg flex items-center justify-center text-purple-400 hover:text-purple-300 transition-all hover:scale-110"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 10.268h-3v-4.604c0-1.099-.021-2.513-1.531-2.513-1.531 0-1.767 1.197-1.767 2.434v4.683h-3v-9h2.881v1.233h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.599v4.731z" />
                  </svg>
                </a>
              </div>
              <div className="space-y-2">
                <Link
                  href="https://app.planejai.cloud/termos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-400 hover:text-purple-400 transition-colors text-sm"
                >
                  Política de Privacidade
                </Link>
                <Link
                  href="https://app.planejai.cloud/termos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-400 hover:text-purple-400 transition-colors text-sm"
                >
                  Termos de Uso
                </Link>
              </div>
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
            <p className="text-gray-500 text-xs flex items-center gap-1">
              Feito com <span className="text-red-500">❤️</span> para sua
              liberdade financeira
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Desenvolvido por Willian Rodrigues
            </p>
          </div>
        </div>
      </div>

      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(120,119,198,0.05),transparent_50%)] pointer-events-none"></div>
    </footer>
  );
}
