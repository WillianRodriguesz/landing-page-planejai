"use client";

import Link from "next/link";
import Image from "next/image";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import "../../styles/scrollRevealAnimations.css";
export function Hero() {
  const { ref, revealed } = useScrollReveal({ threshold: 0.15, repeat: true });
  return (
    <section
      ref={ref as any}
      className={`relative min-h-screen flex items-center pt-24 overflow-hidden bg-grid pb-0 reveal${revealed ? " revealed" : ""}`}
    >
      <div className="hero-glow-1"></div>
      <div className="hero-glow-2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
          {/* Conteudo Esquerdo */}
          <div className="lg:w-1/2 text-center lg:text-left">
            {/* Titulo Principal */}
            <h1 className="text-5xl md:text-6xl lg:text-[5.5rem] font-extrabold tracking-tight mb-8 leading-[1] text-white">
              Planeje Seu <br />{" "}
              <span className="text-gradient">Futuro Financeiro</span>
            </h1>

            {/* Subtitulo */}
            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
              A experiencia definitiva em gestao pessoal. Planeje metas,
              acompanhe gastos e veja seu patrimonio crescer com a elegancia que
              voce merece.
            </p>

            {/* Botoes CTA */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <Link
                href="#"
                className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold rounded-2xl text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 shadow-2xl shadow-blue-500/20 transition-all transform hover:-translate-y-1"
              >
                Começar Agora
                <span className="material-symbols-outlined ml-2">
                  rocket_launch
                </span>
              </Link>
              <Link
                href="#recursos"
                className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold rounded-2xl text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-all backdrop-blur-md"
              >
                Saiba Mais
              </Link>
            </div>

            {/* Indicadores de Confianca */}
            <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-purple-400">
                  verified_user
                </span>
                <span className="text-sm font-medium text-white">
                  Totalmente Seguro
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-purple-400">
                  devices
                </span>
                <span className="text-sm font-medium text-white">
                  Disponível em todas as plataformas
                </span>
              </div>
            </div>
          </div>

          {/* Conteudo Direito - Mockup do Celular */}
          <div className="lg:w-1/2 relative flex justify-center mockup-container">
            {/* Card Flutuante Esquerdo */}
            <div className="absolute -left-4 top-20 z-30 neon-card neon-purple-glow p-5 rounded-3xl w-48 animate-float-slow hidden lg:block">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-blue-400">
                    savings
                  </span>
                </div>
                <span className="font-bold text-sm text-white">Economia</span>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] text-gray-400">Este mes</p>
                <p className="text-lg font-bold text-blue-400">R$ 450,00</p>
              </div>
            </div>

            {/* Card Flutuante Direito */}
            <div className="absolute -right-8 bottom-24 z-30 neon-card neon-purple-glow p-5 rounded-3xl w-52 animate-float-medium hidden lg:block">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-purple-400">
                    emoji_events
                  </span>
                </div>
                <span className="font-bold text-sm text-white">
                  Meta: Viagem
                </span>
              </div>
              <div className="w-full bg-white/10 h-2 rounded-full mb-2">
                <div className="bg-purple-500 h-full rounded-full w-[75%]"></div>
              </div>
              <p className="text-[10px] text-right text-purple-300">
                75% concluido
              </p>
            </div>

            {/* Mockup do Celular */}
            <div className="relative w-[300px] h-[610px] bg-[#020617] rounded-[3.5rem] border-[12px] border-[#1e293b] shadow-[0_0_50px_rgba(168,85,247,0.12)] overflow-hidden z-20 transform rotate-1">
              <div className="phone-inner h-full flex flex-col">
                {/* Header do App */}
                <div className="bg-[#0f172a] px-5 py-4 flex items-center justify-between border-b-2 border-purple-600">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 bg-purple-600/30 rounded-lg flex items-center justify-center overflow-hidden">
                      <img
                        src="/image/logo-planejai.png"
                        alt="Logo Planejai"
                        className="w-6 h-6 object-contain"
                      />
                    </div>
                    <span className="text-purple-400 font-bold text-lg">
                      Planejai
                    </span>
                  </div>
                  <span className="material-symbols-outlined text-gray-400 text-xl">
                    logout
                  </span>
                </div>

                {/* Seletor de Mes */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#0f172a]">
                  <span className="material-symbols-outlined text-gray-500 text-lg">
                    chevron_left
                  </span>
                  <div className="flex items-center gap-4">
                    <span className="text-gray-500 text-xs">Nov</span>
                    <span className="text-gray-500 text-xs">Dez</span>
                    <span className="text-white text-xs font-bold bg-white/10 px-3 py-1 rounded-full">
                      Jan
                    </span>
                    <span className="text-gray-500 text-xs">Fev</span>
                    <span className="text-gray-500 text-xs">Mar</span>
                  </div>
                  <span className="material-symbols-outlined text-gray-500 text-lg">
                    chevron_right
                  </span>
                </div>

                {/* Card Resumo Mensal */}
                <div className="mx-4 mt-2 p-4 rounded-2xl bg-[#0f172a] border border-white/5 transform-gpu transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                  <p className="text-gray-400 text-xs mb-1">
                    <span className="text-white font-semibold">janeiro</span> /
                    2026
                  </p>
                  <p className="text-gray-500 text-[10px] mt-2">Saldo do mes</p>
                  <p className="text-white text-2xl font-bold mt-1">
                    R$ 3.020,00
                  </p>
                  <div className="flex justify-between mt-2">
                    <div className="transform-gpu transition-transform duration-300 rounded-md p-1">
                      <p className="text-gray-500 text-[10px]">Entradas</p>
                      <p className="text-emerald-400 text-sm font-semibold">
                        R$ 3.600,00
                      </p>
                    </div>
                    <div className="text-right transform-gpu transition-transform duration-300 rounded-md p-1">
                      <p className="text-gray-500 text-[10px]">Saidas</p>
                      <p className="text-red-500 text-sm font-semibold">
                        R$ 580,00
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card Gastos por Categoria */}
                <div className="mx-4 mt-2 p-3 rounded-2xl bg-[#0f172a] border border-white/5 transform-gpu transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-white text-xs font-semibold">
                      Gastos por Categoria{" "}
                      <span className="text-gray-500 font-normal">
                        janeiro/2026
                      </span>
                    </p>
                    <span className="material-symbols-outlined text-gray-500 text-lg">
                      chevron_right
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    {/* Grafico Donut */}
                    <div className="relative w-24 h-24">
                      <svg
                        viewBox="0 0 36 36"
                        className="w-full h-full -rotate-90"
                      >
                        {/* Cartão - 69% */}
                        <circle
                          cx="18"
                          cy="18"
                          r="12"
                          fill="none"
                          stroke="#a855f7"
                          strokeWidth="6"
                          strokeDasharray="52.0 23.4"
                          strokeDashoffset="0"
                        />
                        {/* Academia - 13.8% */}
                        <circle
                          cx="18"
                          cy="18"
                          r="12"
                          fill="none"
                          stroke="#22d3ee"
                          strokeWidth="6"
                          strokeDasharray="10.4 64.9"
                          strokeDashoffset="-52.0"
                        />
                        {/* Assinaturas - 8.6% */}
                        <circle
                          cx="18"
                          cy="18"
                          r="12"
                          fill="none"
                          stroke="#facc15"
                          strokeWidth="6"
                          strokeDasharray="6.5 68.9"
                          strokeDashoffset="-62.4"
                        />
                        {/* Alimentacao - 8.6% */}
                        <circle
                          cx="18"
                          cy="18"
                          r="12"
                          fill="none"
                          stroke="#22c55e"
                          strokeWidth="6"
                          strokeDasharray="6.5 68.9"
                          strokeDashoffset="-68.9"
                        />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-gray-500 text-[8px]">Total</span>
                        <span className="text-white text-xs font-bold">
                          R$ 580
                        </span>
                      </div>
                    </div>

                    {/* Legenda */}
                    <div className="flex-1 space-y-1.5">
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                          <span className="text-gray-400 text-[10px]">
                            Cartão
                          </span>
                        </div>
                        <span className="text-white text-[10px] font-medium">
                          69.0%
                        </span>
                      </div>
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                          <span className="text-gray-400 text-[10px]">
                            academia
                          </span>
                        </div>
                        <span className="text-white text-[10px] font-medium">
                          13.8%
                        </span>
                      </div>
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                          <span className="text-gray-400 text-[10px]">
                            assinaturas
                          </span>
                        </div>
                        <span className="text-white text-[10px] font-medium">
                          8.6%
                        </span>
                      </div>
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-green-500"></div>
                          <span className="text-gray-400 text-[10px]">
                            alimentacao
                          </span>
                        </div>
                        <span className="text-white text-[10px] font-medium">
                          8.6%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Espacador flexivel */}
                <div className="flex-1"></div>

                {/* Navegacao Inferior */}
                <div className="relative px-6 py-4 bg-[#0f172a] border-t border-white/5">
                  <div className="flex items-center justify-center">
                    <div className="flex flex-col items-center gap-1 mr-14 transform-gpu transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                      <span className="material-symbols-outlined text-gray-500 text-xl">
                        person
                      </span>
                      <span className="text-gray-500 text-[9px]">Perfil</span>
                    </div>
                    <div className="absolute left-1/2 -translate-x-1/2 -top-7 transform-gpu transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                      <div className="w-14 h-14 rounded-full bg-purple-600 flex items-center justify-center shadow-[0_0_20px_rgba(147,51,234,0.6)]">
                        <span className="material-symbols-outlined text-white text-2xl">
                          add
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col items-center gap-1 ml-14 transform-gpu transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                      <span className="material-symbols-outlined text-gray-500 text-xl">
                        bar_chart
                      </span>
                      <span className="text-gray-500 text-[9px]">Gastos</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Brilho de Fundo */}
            <div className="absolute inset-0 z-0 flex items-center justify-center">
              <div className="w-[400px] h-[400px] bg-purple-500/10 blur-[100px] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Gradiente de transição para a próxima seção */}
      <div className="absolute bottom-0 left-0 w-full h-10 bg-linear-to-b from-transparent to-[#030712]"></div>
    </section>
  );
}
