import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  { q: "Como contratar uma agência de tráfego pago de verdade?", a: "Antes de contratar, exija um diagnóstico do seu funil atual: CPL, taxa de conversão, ticket médio e CAC. Na YourAds esse diagnóstico é gratuito e mostra exatamente onde sua empresa está perdendo clientes — antes de gastar mais um real em anúncios." },
  { q: "Qual a diferença entre agência de tráfego e empresa de marketing completa?", a: "Uma agência de tráfego cuida só dos anúncios. A YourAds integra tráfego pago, funil de vendas, CRM, automação e análise de dados — garantindo que cada lead vire oportunidade comercial e cliente." },
  { q: "Quanto custa contratar a YourAds?", a: "O investimento varia conforme o estágio da empresa, o ticket médio e a meta de crescimento. O diagnóstico inicial é 100% gratuito e, a partir dele, montamos uma proposta sob medida com previsão de retorno por canal." },
  { q: "Em quanto tempo vejo resultado?", a: "Os primeiros leads qualificados costumam aparecer entre 7 e 21 dias após o início das campanhas. Resultados consistentes de receita normalmente acontecem entre 60 e 90 dias, quando o funil completo (tráfego + comercial + CRM) está calibrado." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-[11px] font-bold uppercase tracking-[0.25em] text-primary">FAQ</div>
          <h2 className="mt-3 text-4xl md:text-5xl font-black">
            Perguntas <span className="text-gradient-primary">frequentes</span>
          </h2>
        </div>
        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const active = open === i;
            return (
              <div key={f.q} className={`rounded-2xl glass overflow-hidden transition-all ${active ? "shadow-elegant" : ""}`}>
                <button
                  onClick={() => setOpen(active ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-bold">{f.q}</span>
                  <Plus className={`size-4 shrink-0 text-primary transition-transform duration-500 ${active ? "rotate-45" : ""}`} />
                </button>
                <div className={`grid transition-all duration-500 ${active ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
