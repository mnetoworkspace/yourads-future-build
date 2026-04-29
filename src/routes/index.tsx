import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/yourads/Header";
import { Hero } from "@/components/yourads/Hero";
import { Problem } from "@/components/yourads/Problem";
import { CTA } from "@/components/yourads/CTA";
import { Funnel } from "@/components/yourads/Funnel";
import { Method } from "@/components/yourads/Method";
import { Results } from "@/components/yourads/Results";
import { Niches } from "@/components/yourads/Niches";
import { Fit } from "@/components/yourads/Fit";
import { FAQ } from "@/components/yourads/FAQ";
import { Footer } from "@/components/yourads/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased overflow-x-clip">
      <Header />
      <main>
        <Hero />
        <Problem />
        <CTA />
        <Funnel />
        <Method />
        <Results />
        <Niches />
        <Fit />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
