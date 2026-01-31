import { Hero } from "@/components/hero";
import { Navegacao } from "@/components/navegacao";
import { ChatBot } from "@/components/chat-bot";
import { Recursos } from "@/components/recursos";
import { Rodape } from "@/components/rodape";

export default function Pagina() {
  return (
    <main className="selection:bg-purple-500/30">
      <Navegacao />
      <Hero />
      <ChatBot />
      <Recursos />
      <Rodape />
    </main>
  );
}
