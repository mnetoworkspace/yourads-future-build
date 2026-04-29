import { Megaphone, Layers } from "lucide-react";

export function Problem() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[28rem] w-[60rem] rounded-full bg-primary/10 blur-3xl" />
      </div>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
          A verdade que ninguém te conta
        </div>
        <h2 className="mt-6 text-4xl md:text-6xl font-black leading-[1.05]">
          O problema{" "}
          <span className="line-through decoration-destructive decoration-[6px] underline-offset-2">
            não é
          </span>{" "}
          o anúncio.
          <br />
          <span className="text-gradient-primary">É a falta de estrutura.</span>
        </h2>
        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Trocar de agência, mudar criativo ou aumentar verba não resolve. O que muda o jogo é ter{" "}
          <strong className="text-foreground">processo</strong>,{" "}
          <strong className="text-foreground">funil</strong> e{" "}
          <strong className="text-foreground">dados</strong> conversando entre si.
        </p>

        <div className="mt-14 grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto text-left">
          <div className="group rounded-3xl glass p-7 hover:translate-y-[-4px] transition-transform duration-500">
            <div className="grid size-12 place-items-center rounded-2xl bg-destructive/15 text-destructive">
              <Megaphone className="size-5" />
            </div>
            <div className="mt-5 text-[11px] font-bold uppercase tracking-[0.2em] text-destructive">
              Sem estrutura
            </div>
            <h3 className="mt-1.5 font-black text-xl">Anúncio sozinho</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Gera clique, gasta verba, gera lead frio. O comercial não dá conta, ninguém acompanha e a venda não acontece.
            </p>
          </div>
          <div className="group relative rounded-3xl p-7 glass-strong shadow-elegant hover:translate-y-[-4px] transition-transform duration-500">
            <div className="absolute -inset-px rounded-3xl bg-gradient-primary opacity-30 blur-md -z-10" />
            <div className="grid size-12 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow">
              <Layers className="size-5" />
            </div>
            <div className="mt-5 text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
              Com YourAds
            </div>
            <h3 className="mt-1.5 font-black text-xl">Marketing + Vendas + Tecnologia</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Cada etapa medida, cada lead nutrido, cada venda rastreada. Marketing deixa de ser custo e vira{" "}
              <strong className="text-foreground">investimento</strong>.
            </p>
          </div>
        </div>

        <p className="mt-14 text-2xl md:text-3xl font-black tracking-tight max-w-3xl mx-auto leading-tight">
          Quando o processo está certo, o marketing deixa de ser custo e{" "}
          <span className="text-gradient-primary">vira investimento.</span>
        </p>
      </div>
    </section>
  );
}
