"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function ProvaSocial() {
  const [showUserMessage, setShowUserMessage] = useState(false);
  const [userText, setUserText] = useState("");
  const [showTyping, setShowTyping] = useState(false);
  const [showBotMessage1, setShowBotMessage1] = useState(false);
  const [showBotMessage2, setShowBotMessage2] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const text = "Gastei R$ 50.00 reais no mercado hoje";
          let i = 0;
          const typingInterval = setInterval(() => {
            setUserText(text.slice(0, i + 1));
            i++;
            if (i === text.length) {
              clearInterval(typingInterval);
              setTimeout(() => {
                setShowUserMessage(true);
                setUserText(""); // Limpar o input após envio
                setTimeout(() => {
                  setShowTyping(true);
                  setTimeout(() => {
                    setShowTyping(false);
                    setShowBotMessage1(true);
                    setTimeout(() => {
                      setShowBotMessage2(true);
                    }, 3000);
                  }, 2000);
                }, 1000); // Delay para mostrar digitando após envio
              }, 500);
            }
          }, 100);
        }
      },
      { threshold: 0.5 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 relative bg-[#030712] overflow-hidden"
      id="prova-social"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Controle seus gastos pelo WhatsApp
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Adicione entradas e saídas diretamente pelo nosso bot no WhatsApp.
            Simples, rápido e sempre disponível.
          </p>
        </div>

        <div className="flex justify-start ml-30">
          {/* Mockup do Celular com Conversa WhatsApp */}
          <div className="relative w-[300px] h-[600px] bg-[#020617] rounded-[3.5rem] border-[12px] border-[#1e293b] shadow-[0_0_50px_rgba(168,85,247,0.12)] overflow-hidden z-20 transform -rotate-1">
            <div className="phone-inner h-full flex flex-col bg-[#0a0a0a]">
              {/* Header WhatsApp */}
              <div className="bg-[#1f1f1f] px-2 py-3 flex items-center gap-2 border-b border-gray-700">
                <span className="material-symbols-outlined text-gray-400 text-xs">
                  arrow_back_ios_new
                </span>
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-sm">
                    smart_toy
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-semibold text-sm truncate">
                    Bot Planejai
                  </h3>
                  <p className="text-green-400 text-xs">Online</p>
                </div>
                <span className="material-symbols-outlined text-gray-400 text-sm">
                  phone
                </span>
                <span className="material-symbols-outlined text-gray-400 text-sm">
                  video_call
                </span>
              </div>

              {/* Área de Conversa */}
              <div className="flex-1 p-4 space-y-4 bg-[#0a0a0a]">
                {/* Mensagem do Usuário */}
                <div
                  className={`flex justify-end transition-opacity duration-500 ${showUserMessage ? "opacity-100" : "opacity-0"}`}
                >
                  <div className="bg-[#005c4b] text-white px-3 py-2 rounded-lg max-w-[80%] relative shadow-sm">
                    <p className="text-sm leading-relaxed">
                      Gastei R$ 50.00 reais no mercado hoje
                    </p>
                    <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[12px] border-l-[#005c4b] border-b-[12px] border-b-transparent"></div>
                    <p className="text-[10px] text-gray-400 mt-1 text-right">
                      12:34
                    </p>
                  </div>
                </div>

                {/* Resposta do Bot */}
                <div className="flex justify-start">
                  <div
                    className={`bg-[#2a2a2a] text-white px-3 py-2 rounded-lg max-w-[80%] relative shadow-sm border border-gray-600 transition-opacity duration-500 ${showTyping || showBotMessage1 ? "opacity-100" : "opacity-0"}`}
                  >
                    {showTyping ? (
                      <div className="flex items-center gap-1">
                        <div className="flex gap-1">
                          <div
                            className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"
                            style={{ animationDelay: "0ms" }}
                          ></div>
                          <div
                            className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"
                            style={{ animationDelay: "200ms" }}
                          ></div>
                          <div
                            className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"
                            style={{ animationDelay: "400ms" }}
                          ></div>
                        </div>
                      </div>
                    ) : showBotMessage1 ? (
                      <p className="text-sm leading-relaxed">
                        ✅ Gasto adicionado com sucesso!
                        <br />
                        <strong>Categoria:</strong> Alimentação
                        <br />
                        <strong>Valor:</strong> R$ 50,00
                        <br />
                        <strong>Data:</strong> Hoje
                        <br />
                        <br />
                        Seu saldo mensal foi atualizado. 💰
                      </p>
                    ) : null}
                    <div className="absolute bottom-0 left-0 w-0 h-0 border-r-[12px] border-r-[#2a2a2a] border-b-[12px] border-b-transparent"></div>
                    {showBotMessage1 && (
                      <p className="text-[10px] text-gray-400 mt-1">12:35</p>
                    )}
                  </div>
                </div>

                {/* Outra Resposta do Bot */}
                <div
                  className={`flex justify-start transition-opacity duration-500 ${showBotMessage2 ? "opacity-100" : "opacity-0"}`}
                >
                  <div className="bg-[#2a2a2a] text-white px-3 py-2 rounded-lg max-w-[80%] relative shadow-sm border border-gray-600">
                    <p className="text-sm leading-relaxed">
                      Posso ajudar mais em alguma coisa? 😊
                    </p>
                    <div className="absolute bottom-0 left-0 w-0 h-0 border-r-[12px] border-r-[#2a2a2a] border-b-[12px] border-b-transparent"></div>
                    <p className="text-[10px] text-gray-400 mt-1">12:36</p>
                  </div>
                </div>
              </div>

              {/* Campo de Digitação */}
              <div className="bg-[#1f1f1f] px-4 py-2 flex items-center gap-2 border-t border-gray-700">
                <div className="flex-1 bg-[#2a2a2a] rounded-full px-2 py-2 flex items-center gap-1 shadow-sm border border-gray-600">
                  <span className="material-symbols-outlined text-gray-400 text-sm">
                    mood
                  </span>
                  <textarea
                    value={userText}
                    placeholder="Digite uma mensagem"
                    className="flex-1 bg-transparent text-white text-sm outline-none resize-none"
                    readOnly
                    rows={1}
                    style={{ minHeight: "1.25rem", overflow: "hidden" }}
                  />
                  <span className="material-symbols-outlined text-gray-400 text-sm">
                    photo_camera
                  </span>
                  <span className="material-symbols-outlined text-gray-400 text-sm">
                    mic
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
