import { Heroi } from "@/components/heroi";
import { Navegacao } from "@/components/navegacao";
import { ProvaSocial } from "@/components/prova-social";
import { Recursos } from "@/components/recursos";
import { Rodape } from "@/components/rodape";


export default function Pagina() {
  return (
    <main className="selection:bg-cyan-500/30">
      <Navegacao />
      <Heroi />
      <ProvaSocial />
      <Recursos />
      <Rodape />
    </main>
  );
}
