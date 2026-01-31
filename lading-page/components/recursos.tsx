"use client";

export function Recursos() {
  const recursos = [
    {
      icone: "account_balance_wallet",
      titulo: "Controle de Gastos",
      descricao:
        "Monitore todas as suas despesas e receitas de forma simples e organizada. Tenha controle total sobre seu dinheiro.",
      cor: "cyan",
    },
    {
      icone: "bar_chart",
      titulo: "Análise por Categoria",
      descricao:
        "Veja seus gastos divididos por categorias para entender melhor onde seu dinheiro está indo e tomar decisões inteligentes.",
      cor: "purple",
    },
    {
      icone: "smart_toy",
      titulo: "Assistente IA",
      descricao:
        "Use nosso assistente inteligente para adicionar ou remover transações de forma rápida e intuitiva através de conversas naturais.",
      cor: "green",
    },
  ];

  const obterClassesCor = (cor: string) => {
    const mapaCores: Record<
      string,
      { bg: string; texto: string; brilho: string; bordaHover: string }
    > = {
      cyan: {
        bg: "bg-cyan-600/10",
        texto: "text-cyan-400",
        brilho: "bg-cyan-500/10 group-hover:bg-cyan-500/20",
        bordaHover: "hover:border-cyan-500/50",
      },
      purple: {
        bg: "bg-purple-600/10",
        texto: "text-purple-400",
        brilho: "bg-purple-500/10 group-hover:bg-purple-500/20",
        bordaHover: "hover:border-purple-500/50",
      },
      blue: {
        bg: "bg-blue-600/10",
        texto: "text-blue-400",
        brilho: "bg-blue-500/10 group-hover:bg-blue-500/20",
        bordaHover: "hover:border-blue-500/50",
      },
      green: {
        bg: "bg-green-600/10",
        texto: "text-green-400",
        brilho: "bg-green-500/10 group-hover:bg-green-500/20",
        bordaHover: "hover:border-green-500/50",
      },
    };
    return mapaCores[cor];
  };

  return (
    <section className="py-32 relative bg-[#030712]" id="recursos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabecalho */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-white">
            Recursos <span className="text-purple-400 italic">Gratuitos</span>{" "}
            &nbsp;para
            <br />
            todos os usuários.
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl leading-relaxed font-light">
            Desenvolvemos ferramentas poderosas e acessíveis para ajudar você a
            controlar suas finanças. Tudo gratuito, sem complicações.
          </p>
        </div>

        {/* Grid de Recursos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recursos.map((recurso, indice) => {
            const cores = obterClassesCor(recurso.cor);
            return (
              <div
                key={indice}
                className={`p-6 md:p-10 rounded-[2.5rem] bg-white/5 border border-white/10 ${cores.bordaHover} hover:bg-white/[0.08] transition-all duration-500 group relative overflow-hidden hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2 hover:rotate-1`}
                onMouseMove={(e) => {
                  const card = e.currentTarget;
                  const rect = card.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  card.style.setProperty("--mouse-x", `${x}px`);
                  card.style.setProperty("--mouse-y", `${y}px`);
                }}
                style={
                  {
                    "--mouse-x": "50%",
                    "--mouse-y": "50%",
                  } as any
                }
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
                  style={{
                    background: `radial-gradient(circle 200px at var(--mouse-x) var(--mouse-y), ${recurso.cor === "cyan" ? "rgba(6, 182, 212, 0.15)" : recurso.cor === "purple" ? "rgba(147, 51, 234, 0.15)" : recurso.cor === "green" ? "rgba(34, 197, 94, 0.15)" : "rgba(59, 130, 246, 0.15)"} 0%, transparent 70%)`,
                  }}
                ></div>
                <div
                  className={`absolute -right-8 -top-8 w-24 h-24 ${cores.brilho} rounded-full blur-2xl transition-all duration-500 group-hover:scale-150 z-0`}
                ></div>
                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 rounded-2xl ${cores.bg} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <span
                      className={`material-symbols-outlined ${cores.texto} text-3xl`}
                    >
                      {recurso.icone}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-white transition-colors duration-300">
                    {recurso.titulo}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-base font-light group-hover:text-gray-300 transition-colors duration-300">
                    {recurso.descricao}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
