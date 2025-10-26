import { Button } from "@/components/ui/button";
import { ProgressSteps } from "@/components/ProgressSteps";
import SEO from "@/components/SEO";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  return (
    <main className="min-h-screen bg-hero">
      <SEO title="Hey rookie! Pick your sport | Sport Rookie" description="Choose a sport and become the friend who actually knows what's going on." canonical={location.href} />
      <section className="container py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary-foreground">Hey there, rookie! What sport do you want to dive into?</h1>
          <p className="text-primary-foreground/90 mb-8">Pick one and we'll turn you into the friend who actually knows what's going on.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button size="lg" variant="secondary" onClick={() => navigate('/guide/basketball')} className="hover:bg-secondary/80">🏀 Basketball — Let's bounce!</Button>
            <Button size="lg" onClick={() => navigate('/guide/football')} className="animate-pulse-glow shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-glow)] transition-shadow">⚽ Football</Button>
            <Button size="lg" variant="secondary" disabled className="opacity-70 cursor-not-allowed">🎾 Tennis</Button>
            <Button size="lg" variant="secondary" disabled className="opacity-70 cursor-not-allowed">🏏 Cricket</Button>
          </div>
          <div className="mt-10">
            <ProgressSteps current={1} />
            <div className="mt-2 text-primary-foreground/90 text-sm">Step 1 of 3 — Learn → Watch → Play</div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;