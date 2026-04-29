import { Target, Sparkles, MousePointerClick, Rocket } from "lucide-react";

const steps = [
  { n: "01", icon: Target, title: "Atrair", text: "Tráfego pago e orgânico para quem está pronto pra comprar.", items: ["Google Ads & Meta Ads", "SEO técnico e de autoridade", "Públicos qualificados"] },
  { n: "02", icon: Sparkles, title: "Engajar", text: "Conteúdo e criativos que fazem o lead se identificar com a oferta.", items: ["Criativos com copy de venda", "Remarketing inteligente", "Conteúdo de autoridade"] },
  { n: "03", icon: MousePointerClick, title: "Converter", text: "Estrutura comercial que transforma interesse em receita real.", items: ["Landing pages que vendem", "WhatsApp + CRM integrados", "Scripts de fechamento"] },
  { n: "04", icon: Rocket, title: "Escalar", text: "Otimização contínua e dados pra multiplicar o que funciona.", items: ["Painel de dados ao vivo", "Otimização semanal", "Automação e recompra"] },
];

export function Funnel() {
  return (
    <section id="funil" className="relative scroll-mt-24 py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 cyber-grid opacity-40" />
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-80 w-[60rem] bg-gradient-hero opacity-50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="text-[11px] font-bold uppercase tracking-[0.25em] text-primary">
            Sistema YourAds de Crescimento
          </div>
          <h2 className="mt-3 text-3xl md:text-5xl font-black tracking-tight leading-[1.05]">
            Um pipeline de quatro etapas que faz seu marketing{" "}
            <span className="text-gradient-primary">virar receita</span>
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Cada etapa conecta com a próxima, sem ruído, sem retrabalho, sem lead perdido no meio do caminho.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="group relative rounded-3xl glass p-6 hover:translate-y-[-6px] transition-all duration-500 hover:shadow-elegant"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-center justify-between">
                <div className="grid size-12 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow">
                  <s.icon className="size-5" />
                </div>
                <span className="font-display text-3xl font-black text-white/10 group-hover:text-gradient-primary transition-colors">
                  {s.n}
                </span>
              </div>
              <h3 className="mt-5 text-xl font-black">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.text}</p>
              <ul className="mt-4 space-y-1.5 text-sm">
                {s.items.map((it) => (
                  <li key={it} className="flex items-start gap-2 text-muted-foreground">
                    <span className="mt-1.5 size-1 rounded-full bg-primary shadow-glow" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
