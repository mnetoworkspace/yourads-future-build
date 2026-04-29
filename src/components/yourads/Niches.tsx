const niches = [
  "Clínicas Odonto & Estética",
  "Imobiliárias",
  "Psicólogos & Terapeutas",
  "E-commerce",
  "Contabilidade",
  "Semijoias",
  "Transportes",
  "Prestadores de serviço",
  "Educação",
  "Saúde",
  "Indústria",
  "Tecnologia",
];

export function Niches() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-[11px] font-bold uppercase tracking-[0.25em] text-primary">Prova</div>
        <h2 className="mt-3 text-3xl md:text-4xl font-black">
          Empresas que <span className="text-gradient-primary">confiam na YourAds</span>
        </h2>
        <p className="mt-3 text-muted-foreground">Método validado em diversos segmentos — sempre focado em receita, não em vaidade.</p>
      </div>

      <div className="mt-10 relative overflow-hidden mask-marquee">
        <div className="flex gap-3 w-max animate-marquee">
          {[...niches, ...niches].map((n, i) => (
            <span
              key={`${n}-${i}`}
              className="shrink-0 rounded-full glass px-5 py-2.5 text-sm font-medium hover:text-primary transition"
            >
              {n}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-14 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-5">
        <div className="rounded-3xl glass-strong p-7 text-center shadow-elegant">
          <div className="text-[11px] uppercase tracking-[0.2em] text-primary font-bold">Empresas atendidas</div>
          <div className="mt-3 text-5xl font-black font-display text-gradient-primary">+50</div>
          <p className="mt-2 text-sm text-muted-foreground">PMEs e médias empresas em todo o Brasil</p>
        </div>
        <div className="rounded-3xl glass-strong p-7 text-center shadow-elegant">
          <div className="text-[11px] uppercase tracking-[0.2em] text-primary font-bold">Nichos atendidos</div>
          <div className="mt-3 text-5xl font-black font-display text-gradient-primary">+15</div>
          <p className="mt-2 text-sm text-muted-foreground">Diferentes segmentos e modelos de negócio</p>
        </div>
        <div className="rounded-3xl glass-strong p-7 text-center shadow-elegant">
          <div className="text-[11px] uppercase tracking-[0.2em] text-primary font-bold">Avaliação Google</div>
          <div className="mt-3 text-5xl font-black font-display text-gradient-primary">5.0</div>
          <p className="mt-2 text-sm text-muted-foreground">Baseado em 24 avaliações</p>
        </div>
      </div>
    </section>
  );
}
