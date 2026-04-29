import { ArrowRight, ShieldCheck, Sparkles, Zap } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* animated grid */}
      <div className="pointer-events-none absolute inset-0 -z-10 cyber-grid animate-grid-pan opacity-60" />
      {/* glow blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl animate-float" />
        <div className="absolute top-40 -right-32 h-[28rem] w-[28rem] rounded-full bg-accent/20 blur-3xl animate-float [animation-delay:1.5s]" />
      </div>
      {/* scanline */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden opacity-[0.07]">
        <div className="absolute inset-x-0 h-40 bg-gradient-to-b from-transparent via-primary to-transparent animate-scan" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
            <Sparkles className="size-3.5" /> Marketing e Tecnologia
          </div>
          <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-black leading-[1.02] tracking-tight">
            Transforme investimento em{" "}
            <span className="text-gradient-primary">clientes e faturamento</span>
            <span className="text-muted-foreground">, não só cliques.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            A YourAds conecta marketing e tecnologia em uma estrutura previsível —
            empresas crescendo até <strong className="text-foreground">+30% ao mês</strong> com tráfego, funil e CRM rodando juntos.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contato"
              className="group inline-flex items-center gap-2 h-12 px-6 rounded-full bg-gradient-primary text-primary-foreground font-bold shadow-elegant hover:shadow-glow transition-all duration-500 hover:scale-[1.03]"
            >
              Quero meu diagnóstico
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#metodo"
              className="inline-flex items-center gap-2 h-12 px-6 rounded-full glass text-foreground font-semibold hover:bg-white/5 transition"
            >
              <Zap className="size-4 text-primary" />
              Ver método
            </a>
          </div>
          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
            {["Sem custos", "Diagnóstico completo", "Resposta em 24h"].map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-success shadow-[0_0_10px_var(--success)]" />
                {t}
              </span>
            ))}
          </div>
        </div>

        <HeroCard />
      </div>
    </section>
  );
}

function HeroCard() {
  return (
    <div id="contato" className="relative animate-fade-up [animation-delay:200ms] scroll-mt-24">
      {/* orbiting dot */}
      <div className="pointer-events-none absolute inset-0 grid place-items-center">
        <div className="relative size-2 rounded-full bg-primary shadow-glow animate-orbit" />
      </div>
      <div className="relative mx-auto w-full max-w-md">
        <div className="absolute -inset-px rounded-3xl bg-gradient-primary opacity-60 blur-xl" aria-hidden />
        <form className="relative rounded-3xl glass-strong p-6 md:p-7 space-y-5 shadow-elegant">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/30 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
            <ShieldCheck className="size-3.5" />
            Diagnóstico gratuito
          </div>
          <div>
            <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
              <span>Passo 1 de 5</span>
              <span>20%</span>
            </div>
            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-1/5 rounded-full bg-gradient-primary shadow-glow" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Seu melhor e-mail
            </label>
            <input
              type="email"
              placeholder="nome@empresa.com.br"
              className="w-full h-12 rounded-xl bg-background/40 border border-white/10 px-4 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:shadow-glow transition-all"
            />
          </div>
          <button
            type="button"
            className="group w-full h-12 rounded-xl bg-gradient-primary text-primary-foreground font-bold inline-flex items-center justify-center gap-2 shadow-elegant hover:shadow-glow transition-all"
          >
            Continuar
            <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="text-[11px] text-muted-foreground text-center">
            Sem custo. Sem enrolação. Resposta em até 24h.
          </p>
        </form>
      </div>
    </div>
  );
}
