import { Check, X } from "lucide-react";

const yes = [
  "Empresas que querem crescer com estrutura",
  "Negócios que já investem em marketing e querem mais retorno",
  "Quem busca previsibilidade de receita",
  "Times abertos a processo, CRM e dados",
];
const no = [
  "Quem quer resultado imediato sem processo",
  "Quem não acompanha números nem indicadores",
  "Empresas sem mínima operação comercial",
  "Quem busca apenas gestor de tráfego barato",
];

export function Fit() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-[11px] font-bold uppercase tracking-[0.25em] text-primary">Filtro de fit</div>
          <h2 className="mt-3 text-4xl md:text-5xl font-black">
            Para quem é essa <span className="text-gradient-primary">solução?</span>
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Preferimos ser honestos: não atendemos todo mundo. Trabalhamos com quem quer construir uma máquina séria de receita.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-5">
          <div className="rounded-3xl glass-strong p-7 shadow-elegant">
            <div className="text-sm font-black text-success uppercase tracking-wider">É pra você se...</div>
            <ul className="mt-5 space-y-3">
              {yes.map((y) => (
                <li key={y} className="flex items-start gap-3">
                  <span className="mt-0.5 grid place-items-center size-6 rounded-full bg-success/15 text-success shrink-0">
                    <Check className="size-3.5" />
                  </span>
                  <span>{y}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl glass p-7">
            <div className="text-sm font-black text-destructive uppercase tracking-wider">Não é pra você se...</div>
            <ul className="mt-5 space-y-3">
              {no.map((y) => (
                <li key={y} className="flex items-start gap-3 text-muted-foreground">
                  <span className="mt-0.5 grid place-items-center size-6 rounded-full bg-destructive/15 text-destructive shrink-0">
                    <X className="size-3.5" />
                  </span>
                  <span>{y}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
