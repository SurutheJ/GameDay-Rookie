import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ProgressSteps } from "@/components/ProgressSteps";
import SEO from "@/components/SEO";
import { useToast } from "@/hooks/use-toast";

const facts = [
  "The hoop is exactly 10 feet high.",
  "Basketball was invented in 1891 in a gym with a peach basket.",
  "NBA players can jump up to 40 inches.",
  "A ‘triple-double’ means double-digit points, rebounds, and assists.",
  "The orange ball became standard in 1957 for better TV viewing.",
];

const watchTonight = [
  "LeBron closing in on a scoring record.",
  "Defensive strategy: watch the double-teams.",
  "Who controls rebounds — that’s key to the game.",
];

const CheatSheet = () => {
  const { toast } = useToast();

  const share = async () => {
    const text = `Game Night Survival Guide\n\nFacts:\n- ${facts.join("\n- ")}\n\nWatch for:\n- ${watchTonight.join("\n- ")}`;
    if (navigator.share) {
      try {
        await navigator.share({ title: "Game Night Survival Guide", text, url: location.href });
        toast({ title: "Shared!", description: "Sent to your friends." });
      } catch {}
    } else {
      await navigator.clipboard.writeText(text);
      toast({ title: "Copied!", description: "Guide copied to clipboard." });
    }
  };

  return (
    <main className="min-h-screen">
      <SEO title="Game Night Survival Guide | Sport Rookie" description="Fun facts and what to watch for — shareable cheat sheet for tonight’s game." canonical={location.href} />
      <section className="container py-10">
        <div className="mb-6">
          <ProgressSteps current={2} />
        </div>
        <header className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold">Game Night Survival Guide</h1>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>5 Fun Facts</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                {facts.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3 Things to Watch Tonight</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                {watchTonight.map((w) => (
                  <li key={w}>{w}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <Button size="lg" onClick={share}>Send to Friends 📤</Button>
        </div>

        <div className="mt-8 text-center">
          <a href="/play/pathway"><Button variant="secondary">Next: Player Pathway</Button></a>
        </div>
      </section>
    </main>
  );
};

export default CheatSheet;
