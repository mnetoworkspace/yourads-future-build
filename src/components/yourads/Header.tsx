import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/yourads-logo.png";

const nav = [
  { href: "#metodo", label: "Método" },
  { href: "#funil", label: "Funil" },
  { href: "#resultados", label: "Resultados" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-strong border-b border-border/60" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        <a href="#top" className="flex items-center gap-2.5 group">
          <img src={logo} alt="YourAds" width={40} height={40} className="h-9 w-9 object-contain drop-shadow-[0_0_12px_color-mix(in_oklab,var(--primary)_60%,transparent)] group-hover:scale-110 transition-transform duration-500" />
          <div className="leading-none">
            <span className="font-display font-bold tracking-tight text-lg">
              Your<span className="text-gradient-primary">Ads</span>
            </span>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-0.5">
              Marketing e Tecnologia
            </div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-px after:w-0 after:bg-gradient-primary after:transition-all after:duration-500 hover:after:w-full"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="#contato"
          className="hidden md:inline-flex items-center gap-2 h-9 px-4 rounded-full bg-gradient-primary text-primary-foreground text-xs font-bold uppercase tracking-wider shadow-glow hover:scale-105 transition-transform duration-300"
        >
          Análise gratuita
        </a>
      </div>
    </header>
  );
}
