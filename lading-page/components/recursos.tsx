"use client";

export function Recursos() {
  const recursos = [
    {
      icone: "insights",
      titulo: "Analise Preditiva",
      descricao:
        "Nossa IA analisa seus habitos e avisa quando voce esta prestes a ultrapassar seu orcamento planejado.",
      cor: "cyan",
    },
    {
      icone: "sync_alt",
      titulo: "Sincronizacao Total",
      descricao:
        "Conecte suas contas e tenha atualizacao automatica. Chega de planilhas manuais e perda de tempo.",
      cor: "purple",
    },
    {
      icone: "account_balance",
      titulo: "Multi-patrimonio",
      descricao:
        "Gerencie investimentos, imoveis, cripto e contas bancarias em um so lugar. Visao 360 do seu dinheiro.",
      cor: "blue",
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
    };
    return mapaCores[cor];
  };

  return (
    <section className="py-32 relative bg-[#030712]" id="recursos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabecalho */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-white">
            Recursos <span className="text-cyan-400 italic">Premium</span> para
            <br />
            usuarios exigentes.
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl leading-relaxed font-light">
            Desenvolvemos ferramentas robustas envoltas em uma interface
            minimalista. Foco total no que importa: seu crescimento.
          </p>
        </div>

        {/* Grid de Recursos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recursos.map((recurso, indice) => {
            const cores = obterClassesCor(recurso.cor);
            return (
              <div
                key={indice}
                className={`p-10 rounded-[2.5rem] bg-white/5 border border-white/10 ${cores.bordaHover} hover:bg-white/[0.08] transition-all group relative overflow-hidden`}
              >
                <div
                  className={`absolute -right-8 -top-8 w-24 h-24 ${cores.brilho} rounded-full blur-2xl transition-all`}
                ></div>
                <div
                  className={`w-16 h-16 rounded-2xl ${cores.bg} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}
                >
                  <span
                    className={`material-symbols-outlined ${cores.texto} text-3xl`}
                  >
                    {recurso.icone}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {recurso.titulo}
                </h3>
                <p className="text-gray-400 leading-relaxed text-base font-light">
                  {recurso.descricao}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
