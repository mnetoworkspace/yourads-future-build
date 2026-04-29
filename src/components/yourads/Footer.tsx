import logo from "@/assets/yourads-logo.png";
import { Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 mt-12">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2.5">
            <img src={logo} alt="YourAds" width={36} height={36} loading="lazy" className="h-9 w-9" />
            <div>
              <div className="font-display font-bold text-lg">
                Your<span className="text-gradient-primary">Ads</span>
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Marketing e Tecnologia
              </div>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm">
            Estrutura completa de tráfego, funil e dados para empresas que querem
            crescer com previsibilidade.
          </p>
        </div>
        <div>
          <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">Navegação</div>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><a href="#metodo" className="hover:text-foreground transition">Método</a></li>
            <li><a href="#funil" className="hover:text-foreground transition">Funil</a></li>
            <li><a href="#resultados" className="hover:text-foreground transition">Resultados</a></li>
            <li><a href="#contato" className="hover:text-foreground transition">Contato</a></li>
          </ul>
        </div>
        <div>
          <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">Contato</div>
          <a href="mailto:youradsbrasil@gmail.com" className="mt-4 inline-flex items-center gap-2 text-sm hover:text-primary transition">
            <Mail className="size-4" /> youradsbrasil@gmail.com
          </a>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Av.+Raul+Lopes,+1905,+Teresina,+Piauí,+64049-548"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-start gap-2 text-sm text-muted-foreground hover:text-primary transition"
          >
            <MapPin className="size-4 shrink-0 mt-0.5" />
            <span>Av. Raul Lopes, 1905<br />CEP 64049-548 · Teresina – PI</span>
          </a>
          <p className="mt-4 text-xs text-muted-foreground">
            CNPJ 42.711.070/0001-06<br />
            Atendimento 100% remoto · Brasil
          </p>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} YourAds — Marketing e Tecnologia. Todos os direitos reservados.</span>
          <span>Feito com tecnologia e estratégia.</span>
        </div>
      </div>
    </footer>
  );
}
