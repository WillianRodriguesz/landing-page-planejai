"use client";
import "./etapasBarra.css";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
// import { useScrollReveal } from "./useScrollReveal";

export function ChatBot() {
  // Animação das etapas
  const [etapa, setEtapa] = useState(0);
  useEffect(() => {
    let timeout1: any, timeout2: any, timeout3: any;
    setEtapa(0);
    timeout1 = setTimeout(() => setEtapa(1), 1200);
    timeout2 = setTimeout(() => setEtapa(2), 2400);
    timeout3 = setTimeout(() => setEtapa(3), 3600);
    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
    };
  }, []);
  // Estados para animação DESKTOP
  const [showUserMessage, setShowUserMessage] = useState(false);
  const [userText, setUserText] = useState("");
  const [showTyping, setShowTyping] = useState(false);
  const [showTyping2, setShowTyping2] = useState(false);
  const [showBotMessage1, setShowBotMessage1] = useState(false);
  const [showBotMessage2, setShowBotMessage2] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Estados para animação MOBILE
  const [showUserMessageMobile, setShowUserMessageMobile] = useState(false);
  const [userTextMobile, setUserTextMobile] = useState("");
  const [showTypingMobile, setShowTypingMobile] = useState(false);
  const [showTyping2Mobile, setShowTyping2Mobile] = useState(false);
  const [showBotMessage1Mobile, setShowBotMessage1Mobile] = useState(false);
  const [showBotMessage2Mobile, setShowBotMessage2Mobile] = useState(false);
  const [hasAnimatedMobile, setHasAnimatedMobile] = useState(false);
  const sectionRefMobile = useRef<HTMLDivElement>(null);

  // Animação DESKTOP
  useEffect(() => {
    let resetTimeout: any, restartTimeout: any;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          observer.disconnect();
          const text = "Gastei R$ 50.00 reais no mercado hoje";
          let i = 0;
          const startTyping = () => {
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
                        setShowTyping2(true);
                        setTimeout(() => {
                          setShowTyping2(false);
                          setShowBotMessage2(true);
                          // Aguarda 4s e reinicia animação
                          resetTimeout = setTimeout(() => {
                            setShowUserMessage(false);
                            setShowTyping(false);
                            setShowBotMessage1(false);
                            setShowTyping2(false);
                            setShowBotMessage2(false);
                            // Aguarda mais tempo antes de reiniciar a digitação
                            restartTimeout = setTimeout(() => {
                              setHasAnimated(false);
                            }, 1200); // 1.2s extra
                          }, 4000);
                        }, 800);
                      }, 400);
                    }, 800);
                  }, 400); // Delay para mostrar digitando após envio
                }, 400);
              }
            }, 30);
          };
          startTyping();
        }
      },
      { threshold: 0.5 },
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      observer.disconnect();
      clearTimeout(resetTimeout);
      clearTimeout(restartTimeout);
    };
  }, [hasAnimated]);

  // Animação MOBILE
  useEffect(() => {
    let resetTimeout: any, restartTimeout: any;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimatedMobile) {
          setHasAnimatedMobile(true);
          observer.disconnect();
          const text = "Gastei R$ 50.00 reais no mercado hoje";
          let i = 0;
          const startTyping = () => {
            const typingInterval = setInterval(() => {
              setUserTextMobile(text.slice(0, i + 1));
              i++;
              if (i === text.length) {
                clearInterval(typingInterval);
                setTimeout(() => {
                  setShowUserMessageMobile(true);
                  setUserTextMobile("");
                  setTimeout(() => {
                    setShowTypingMobile(true);
                    setTimeout(() => {
                      setShowTypingMobile(false);
                      setShowBotMessage1Mobile(true);
                      setTimeout(() => {
                        setShowTyping2Mobile(true);
                        setTimeout(() => {
                          setShowTyping2Mobile(false);
                          setShowBotMessage2Mobile(true);
                          // Aguarda 4s e reinicia animação
                          resetTimeout = setTimeout(() => {
                            setShowUserMessageMobile(false);
                            setShowTypingMobile(false);
                            setShowBotMessage1Mobile(false);
                            setShowTyping2Mobile(false);
                            setShowBotMessage2Mobile(false);
                            // Aguarda mais tempo antes de reiniciar a digitação
                            restartTimeout = setTimeout(() => {
                              setHasAnimatedMobile(false);
                            }, 1200); // 1.2s extra
                          }, 4000);
                        }, 800);
                      }, 400);
                    }, 800);
                  }, 400);
                }, 400);
              }
            }, 30);
          };
          startTyping();
        }
      },
      { threshold: 0.5 },
    );
    if (sectionRefMobile.current) {
      observer.observe(sectionRefMobile.current);
    }
    return () => {
      observer.disconnect();
      clearTimeout(resetTimeout);
      clearTimeout(restartTimeout);
    };
  }, [hasAnimatedMobile]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#030712] overflow-hidden scroll-mt-24"
      id="chat-bot"
    >
      <style>{`
        textarea::placeholder {
          text-align: center;
          line-height: 2.5rem;
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 -mt-8">
        <div className="text-center mb-8">
          {/* Título e parágrafo removidos */}
        </div>

        {/* DESKTOP: fluxo original mantido */}
        <div className="hidden lg:flex justify-between items-center">
          {/* Mockup do Celular com Conversa WhatsApp */}
          <div className="relative w-75 h-150 bg-[#020617] rounded-[3.5rem] border-12 border-[#1e293b] shadow-[0_0_50px_rgba(168,85,247,0.12)] overflow-hidden z-20 transform -rotate-1 ml-30">
            <div className="phone-inner h-full flex flex-col bg-[#04091b]">
              {/* Header WhatsApp */}
              <div className="bg-[#0f172a] px-2 py-3 flex items-center gap-2 border-b border-gray-700">
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
              <div className="flex-1 p-4 space-y-2 bg-[#04091b]">
                {/* Mensagem do Usuário */}
                <div
                  className={`flex justify-end transition-opacity duration-500 ${showUserMessage ? "opacity-100" : "opacity-0"}`}
                >
                  <div className="bg-[#005c4b] text-white px-3 py-2 rounded-lg max-w-[80%] relative shadow-sm">
                    <p className="text-sm leading-relaxed">
                      Gastei R$ 50.00 reais no mercado hoje
                    </p>
                    <div className="absolute bottom-0 right-0 w-0 h-0 border-l-12 border-l-[#005c4b] border-b-12 border-b-transparent"></div>
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
                    <div className="absolute bottom-0 left-0 w-0 h-0 border-r-12 border-r-[#2a2a2a] border-b-12 border-b-transparent"></div>
                    {showBotMessage1 && (
                      <p className="text-[10px] text-gray-400 mt-1">12:35</p>
                    )}
                  </div>
                </div>

                {/* Outra Resposta do Bot */}
                <div className="flex justify-start">
                  <div
                    className={`bg-[#2a2a2a] text-white px-3 py-2 rounded-lg max-w-[80%] relative shadow-sm border border-gray-600 transition-opacity duration-500 ${showTyping2 || showBotMessage2 ? "opacity-100" : "opacity-0"}`}
                  >
                    {showTyping2 ? (
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
                    ) : showBotMessage2 ? (
                      <p className="text-sm leading-relaxed">
                        Posso ajudar em mais alguma coisa? 😊
                      </p>
                    ) : null}
                    <div className="absolute bottom-0 left-0 w-0 h-0 border-r-12 border-r-[#2a2a2a] border-b-12 border-b-transparent"></div>
                    {showBotMessage2 && (
                      <p className="text-[10px] text-gray-400 mt-1">12:36</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="bg-[#0f172a] p-2 flex items-center border-t border-gray-700">
                <div className="flex-1 bg-[#0f172a] rounded-full p-1 px-2 flex items-center gap-0.5 shadow-sm border border-gray-600">
                  <span
                    className="material-symbols-outlined text-gray-400"
                    style={{ fontSize: "20px" }}
                  >
                    mood
                  </span>
                  <textarea
                    value={userText}
                    placeholder="Digite uma mensagem"
                    className={`flex-1 bg-transparent text-white outline-none resize-none self-center ${userText ? "text-xs" : "text-sm"}`}
                    readOnly
                    rows={2}
                    style={{
                      minHeight: "1.4rem",
                      overflow: "hidden",
                      lineHeight: "1.20rem",
                    }}
                  />
                  <span
                    className="material-symbols-outlined text-gray-400"
                    style={{ fontSize: "20px" }}
                  >
                    photo_camera
                  </span>
                  <span
                    className="material-symbols-outlined text-gray-400"
                    style={{ fontSize: "20px" }}
                  >
                    mic
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Conteúdo Direito */}
          <div className="lg:w-1/2 text-center lg:text-left mr-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-bold uppercase tracking-wider mb-6 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-400"></span>
              </span>
              Inteligente e Simples
            </div>
            <h2 className="text-4xl font-extrabold mb-6 leading-tight text-white">
              Gerencie seus gastos em{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-blue-500">
                segundos
              </span>
            </h2>
            <p className="text-gray-400 text-lg mb-12 max-w-xl">
              Esqueça planilhas complicadas. Use o nosso bot para registrar suas
              finanças através de conversas naturais, de forma rápida e sempre
              disponível.
            </p>

            <div className="space-y-8 relative">
              {/* Barra animada */}
              <div className="etapas-barra">
                <div
                  className="etapas-barra-inner"
                  style={{
                    height:
                      etapa === 0
                        ? "0%"
                        : etapa === 1
                          ? "33%"
                          : etapa === 2
                            ? "66%"
                            : "100%",
                    transitionDelay:
                      etapa === 0
                        ? "0ms"
                        : etapa === 1
                          ? "0ms"
                          : etapa === 2
                            ? "0ms"
                            : "0ms",
                  }}
                ></div>
              </div>

              {/* Etapa 1 */}
              <div className="flex gap-6 relative group">
                <div
                  className={`shrink-0 w-12 h-12 rounded-2xl bg-purple-500 flex items-center justify-center text-white shadow-lg transition-transform z-10 etapas-icone${etapa >= 1 ? " ativa" : ""}`}
                >
                  <span className="material-symbols-outlined">chat</span>
                </div>
                <div className={`etapas-texto${etapa >= 1 ? " ativa" : ""}`}>
                  <h3 className="text-xl font-bold mb-2 text-white">
                    1. Mande uma mensagem
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Diga o que você comprou e quanto custou, como se estivesse
                    conversando com um amigo.
                  </p>
                </div>
              </div>

              {/* Etapa 2 */}
              <div className="flex gap-6 relative group">
                <div
                  className={`shrink-0 w-12 h-12 rounded-2xl bg-blue-500 flex items-center justify-center text-white shadow-lg transition-transform z-10 etapas-icone${etapa >= 2 ? " ativa" : ""}`}
                >
                  <span className="material-symbols-outlined">query_stats</span>
                </div>
                <div className={`etapas-texto${etapa >= 2 ? " ativa" : ""}`}>
                  <h3 className="text-xl font-bold mb-2 text-white">
                    2. O bot processa os dados
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Nossa IA identifica automaticamente a categoria e o valor,
                    organizando tudo para você.
                  </p>
                </div>
              </div>

              {/* Etapa 3 */}
              <div className="flex gap-6 relative group">
                <div
                  className={`shrink-0 w-12 h-12 rounded-2xl bg-indigo-500 flex items-center justify-center text-white shadow-lg transition-transform z-10 etapas-icone${etapa >= 3 ? " ativa" : ""}`}
                >
                  <span className="material-symbols-outlined">insights</span>
                </div>
                <div className={`etapas-texto${etapa >= 3 ? " ativa" : ""}`}>
                  <h3 className="text-xl font-bold mb-2 text-white">
                    3. Veja seus gráficos
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Acompanhe sua saúde financeira através de relatórios
                    detalhados e fáceis de entender.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE: ordem e conteúdo conforme solicitado */}
        <div className="lg:hidden flex flex-col items-center">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-bold uppercase tracking-wider mb-6 w-fit mx-auto">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-400"></span>
              </span>
              Inteligente e Simples
            </div>
            <h2 className="text-3xl font-extrabold mb-6 leading-tight text-white">
              Gerencie seus gastos em{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-blue-500">
                segundos
              </span>
            </h2>
            <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto">
              Esqueça planilhas complicadas. Use o nosso bot para registrar suas
              finanças através de conversas naturais, de forma rápida e sempre
              disponível.
            </p>
          </div>
          {/* MOCKUP DO CELULAR COM CONVERSA DO BOT */}
          <div
            ref={sectionRefMobile}
            className="relative w-75 h-150 bg-[#020617] rounded-[3.5rem] border-12 border-[#1e293b] shadow-[0_0_50px_rgba(168,85,247,0.12)] overflow-hidden z-20 transform -rotate-1 mx-auto mb-8"
          >
            <div className="phone-inner h-full flex flex-col bg-[#04091b]">
              {/* Header WhatsApp */}
              <div className="bg-[#0f172a] px-2 py-3 flex items-center gap-2 border-b border-gray-700">
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
              <div className="flex-1 p-4 space-y-2 bg-[#04091b]">
                {/* Mensagem do Usuário */}
                <div
                  className={`flex justify-end transition-opacity duration-500 ${showUserMessageMobile ? "opacity-100" : "opacity-0"}`}
                >
                  <div className="bg-[#005c4b] text-white px-3 py-2 rounded-lg max-w-[80%] relative shadow-sm">
                    <p className="text-sm leading-relaxed">
                      Gastei R$ 50.00 reais no mercado hoje
                    </p>
                    <div className="absolute bottom-0 right-0 w-0 h-0 border-l-12 border-l-[#005c4b] border-b-12 border-b-transparent"></div>
                    <p className="text-[10px] text-gray-400 mt-1 text-right">
                      12:34
                    </p>
                  </div>
                </div>

                {/* Resposta do Bot */}
                <div className="flex justify-start">
                  <div
                    className={`bg-[#2a2a2a] text-white px-3 py-2 rounded-lg max-w-[80%] relative shadow-sm border border-gray-600 transition-opacity duration-500 ${showTypingMobile || showBotMessage1Mobile ? "opacity-100" : "opacity-0"}`}
                  >
                    {showTypingMobile ? (
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
                    ) : showBotMessage1Mobile ? (
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
                    <div className="absolute bottom-0 left-0 w-0 h-0 border-r-12 border-r-[#2a2a2a] border-b-12 border-b-transparent"></div>
                    {showBotMessage1Mobile && (
                      <p className="text-[10px] text-gray-400 mt-1">12:35</p>
                    )}
                  </div>
                </div>

                {/* Outra Resposta do Bot */}
                <div className="flex justify-start">
                  <div
                    className={`bg-[#2a2a2a] text-white px-3 py-2 rounded-lg max-w-[80%] relative shadow-sm border border-gray-600 transition-opacity duration-500 ${showTyping2Mobile || showBotMessage2Mobile ? "opacity-100" : "opacity-0"}`}
                  >
                    {showTyping2Mobile ? (
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
                    ) : showBotMessage2Mobile ? (
                      <p className="text-sm leading-relaxed">
                        Posso ajudar em mais alguma coisa? 😊
                      </p>
                    ) : null}
                    <div className="absolute bottom-0 left-0 w-0 h-0 border-r-12 border-r-[#2a2a2a] border-b-12 border-b-transparent"></div>
                    {showBotMessage2Mobile && (
                      <p className="text-[10px] text-gray-400 mt-1">12:36</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="bg-[#0f172a] p-2 flex items-center border-t border-gray-700">
                <div className="flex-1 bg-[#0f172a] rounded-full p-1 px-2 flex items-center gap-0.5 shadow-sm border border-gray-600">
                  <span
                    className="material-symbols-outlined text-gray-400"
                    style={{ fontSize: "20px" }}
                  >
                    mood
                  </span>
                  <textarea
                    value={userTextMobile}
                    placeholder="Digite uma mensagem"
                    className={`flex-1 bg-transparent text-white outline-none resize-none self-center ${userTextMobile ? "text-xs" : "text-sm"}`}
                    readOnly
                    rows={2}
                    style={{
                      minHeight: "1.4rem",
                      overflow: "hidden",
                      lineHeight: "1.20rem",
                    }}
                  />
                  <span
                    className="material-symbols-outlined text-gray-400"
                    style={{ fontSize: "20px" }}
                  >
                    photo_camera
                  </span>
                  <span
                    className="material-symbols-outlined text-gray-400"
                    style={{ fontSize: "20px" }}
                  >
                    mic
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* CARDS DA SEÇÃO DE CONTEÚDO DIREITO */}
          <div className="w-full space-y-8 relative mt-8">
            <div className="absolute left-6 top-8 bottom-8 w-px bg-gray-700"></div>
            {/* Card 1 */}
            <div className="flex gap-4 relative group">
              <div className="shrink-0 w-12 h-12 rounded-2xl bg-purple-500 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform z-10">
                <span className="material-symbols-outlined">chat</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">
                  1. Mande uma mensagem
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Diga o que você comprou e quanto custou, como se estivesse
                  conversando com um amigo.
                </p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="flex gap-4 relative group">
              <div className="shrink-0 w-12 h-12 rounded-2xl bg-blue-500 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform z-10">
                <span className="material-symbols-outlined">query_stats</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">
                  2. O bot processa os dados
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Nossa IA identifica automaticamente a categoria e o valor,
                  organizando tudo para você.
                </p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="flex gap-4 relative group">
              <div className="shrink-0 w-12 h-12 rounded-2xl bg-indigo-500 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform z-10">
                <span className="material-symbols-outlined">insights</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">
                  3. Veja seus gráficos
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Acompanhe sua saúde financeira através de relatórios
                  detalhados e fáceis de entender.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
