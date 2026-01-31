import { Hero } from "@/components/sections/hero";
import { Navegacao } from "@/components/sections/navegacao";
import { ChatBot } from "@/components/sections/chat-bot";
import { Recursos } from "@/components/sections/recursos";
import { Rodape } from "@/components/sections/rodape";

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
