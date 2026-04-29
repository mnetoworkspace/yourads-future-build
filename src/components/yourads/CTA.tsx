import { ArrowRight, Sparkles } from "lucide-react";

export function CTA() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16">
      <div className="relative mx-auto max-w-5xl rounded-[2rem] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-90" />
        <div className="absolute inset-0 cyber-grid opacity-20" />
        <div className="absolute -top-20 -right-20 size-80 rounded-full bg-white/20 blur-3xl" />
        <div className="relative px-8 md:px-12 py-12 md:py-14 flex flex-col md:flex-row items-center justify-between gap-6 text-primary-foreground">
          <div className="flex items-start gap-4 text-center md:text-left">
            <div className="hidden md:grid place-items-center size-12 rounded-2xl bg-white/15 backdrop-blur-md shrink-0">
              <Sparkles className="size-5" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-black leading-tight">
                Receba uma análise de como melhorar a performance da sua empresa
              </h3>
              <p className="mt-2 text-sm opacity-80">Diagnóstico gratuito · Resposta em 24h</p>
            </div>
          </div>
          <a
            href="#contato"
            className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full bg-background text-foreground font-bold shadow-elegant hover:scale-105 transition-transform shrink-0"
          >
            Quero minha análise <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
