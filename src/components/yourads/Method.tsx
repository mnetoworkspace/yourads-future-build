const pillars = [
  { letter: "P", title: "Previsibilidade", text: "Você sabe exatamente quanto custa cada cliente. Decisão baseada em dados, não em achismos.", note: "CAC claro, LTV projetado, meta atingível." },
  { letter: "A", title: "Aceleração", text: "Escalamos o que funciona e cortamos o desperdício em tempo real. Cada real trabalha a favor.", note: "Otimização contínua com base em números reais." },
  { letter: "S", title: "Solidez", text: "Criamos processo, estrutura e cultura de crescimento. O que construímos vira patrimônio.", note: "Processo que roda mesmo sem depender de ninguém." },
];

export function Method() {
  return (
    <section id="metodo" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-[11px] font-bold uppercase tracking-[0.25em] text-primary">Nosso método</div>
          <h2 className="mt-3 text-4xl md:text-5xl font-black tracking-tight">
            O método <span className="text-gradient-primary">PAS</span> de crescimento
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Três pilares que transformam marketing em uma máquina de receita previsível.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {pillars.map((p) => (
            <div key={p.letter} className="group relative rounded-3xl glass p-8 overflow-hidden hover:shadow-elegant transition-all duration-500">
              <div className="absolute -top-10 -right-10 text-[10rem] font-display font-black leading-none text-white/[0.04] group-hover:text-gradient-primary transition">
                {p.letter}
              </div>
              <div className="relative">
                <div className="grid size-14 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground font-black text-xl shadow-glow">
                  {p.letter}
                </div>
                <h3 className="mt-5 text-2xl font-black">{p.title}</h3>
                <p className="mt-2 text-muted-foreground">{p.text}</p>
                <div className="mt-5 pt-5 border-t border-white/10">
                  <div className="text-[11px] uppercase tracking-wider text-primary font-bold">Na prática</div>
                  <p className="mt-1 text-sm text-foreground">{p.note}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
