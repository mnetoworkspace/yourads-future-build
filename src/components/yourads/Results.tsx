import { TrendingUp, MessageCircle } from "lucide-react";

const cards = [
  { tag: "Meta Ads", metric: "R$ 6.160", label: "investidos · 772 conversas no WhatsApp" },
  { tag: "Google Ads", metric: "1.300 conversões", label: "CPA médio de R$ 13,97" },
  { tag: "E-commerce", metric: "+R$ 71 mil", label: "em receita em um único período" },
  { tag: "Instalações", metric: "+157%", label: "crescimento ano contra ano (249 → 641)" },
];

const messages = [
  { who: "Psicóloga · Consultório", title: "4 pacientes novos em 1 semana", text: "“O Google tá dando certo. Essa semana apareceu 4 pacientes novos que fecharam de uma só vez.”" },
  { who: "Empresa de instalações", title: "92 instalações em março", text: "“Mês de março fechado: 92 instalações. Essa última semana entrou bastante.”" },
  { who: "Empresa de instalações", title: "164 instalações em 2 meses", text: "“Pra deixar anotado: fechamos janeiro com 86 e fevereiro com 78.”" },
];

export function Results() {
  return (
    <section id="resultados" className="relative scroll-mt-24 py-24 md:py-32 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-20 right-1/4 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="text-[11px] font-bold uppercase tracking-[0.25em] text-primary">Prova real</div>
          <h2 className="mt-3 text-4xl md:text-5xl font-black tracking-tight">
            Não é projeção. <span className="text-gradient-primary">São campanhas rodando.</span>
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Métricas reais das contas de tráfego e vendas dos clientes YourAds.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((c) => (
            <div key={c.tag} className="group relative rounded-3xl glass p-6 hover:shadow-elegant transition-all duration-500 hover:-translate-y-1">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 border border-primary/30 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary">
                  {c.tag}
                </span>
                <TrendingUp className="size-4 text-primary opacity-50 group-hover:opacity-100 transition" />
              </div>
              <div className="mt-6 text-3xl font-black font-display text-gradient-primary">{c.metric}</div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.label}</p>
            </div>
          ))}
        </div>

        {/* Comparativo */}
        <div className="mt-12 grid md:grid-cols-3 gap-5">
          <div className="md:col-span-1 rounded-3xl glass-strong p-7 shadow-elegant">
            <div className="text-[11px] uppercase tracking-[0.2em] text-primary font-bold">Antes vs depois</div>
            <h3 className="mt-2 text-2xl font-black">Empresa de instalações</h3>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div>
                <div className="text-xs text-muted-foreground">2024 sem YourAds</div>
                <div className="mt-1 text-3xl font-black">249</div>
                <div className="text-[11px] text-muted-foreground">instalações/ano</div>
              </div>
              <div>
                <div className="text-xs text-primary">2025 com YourAds</div>
                <div className="mt-1 text-3xl font-black text-gradient-primary">641</div>
                <div className="text-[11px] text-muted-foreground">instalações/ano</div>
              </div>
            </div>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-success/10 border border-success/30 px-3 py-1 text-xs font-bold text-success">
              <TrendingUp className="size-3.5" /> +157% de crescimento
            </div>
          </div>
          {messages.map((m) => (
            <div key={m.title} className="rounded-3xl glass p-6 hover:shadow-elegant transition">
              <div className="flex items-center gap-2 text-success">
                <MessageCircle className="size-4" />
                <span className="text-[11px] font-bold uppercase tracking-wider">WhatsApp</span>
              </div>
              <h4 className="mt-3 font-black">{m.title}</h4>
              <p className="mt-2 text-sm text-muted-foreground italic leading-relaxed">{m.text}</p>
              <div className="mt-4 pt-4 border-t border-white/10 text-[11px] text-muted-foreground">{m.who}</div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-[11px] text-muted-foreground max-w-3xl">
          * Em conformidade com a LGPD, nomes, fotos e dados de identificação foram ocultados ou desfocados. Resultados variam conforme nicho, oferta e investimento.
        </p>
      </div>
    </section>
  );
}
