import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ProgressSteps } from "@/components/ProgressSteps";
import SEO from "@/components/SEO";
import { useToast } from "@/hooks/use-toast";

const LiveCompanion = () => {
  const { toast } = useToast();

  const explain = () => {
    toast({
      title: "Explainer",
      description: "That was a three-pointer! Steph Curry scored from beyond the arc — worth 3 points.",
    });
  };

  return (
    <main className="min-h-screen">
      <SEO title="Live Match Companion | Sport Rookie" description="Watch a game with real-time explanations and a quick glossary." canonical={location.href} />
      <section className="bg-hero text-primary-foreground">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="font-semibold">Live Now: Lakers vs Warriors</div>
            <div className="flex items-center gap-3 text-sm">
              <span className="px-3 py-1 rounded-md bg-primary-foreground/10">102:98</span>
              <span className="px-3 py-1 rounded-md bg-primary-foreground/10">Q4</span>
              <span className="px-3 py-1 rounded-md bg-primary-foreground/10">02:13 left</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-8">
        <div className="mb-6">
          <ProgressSteps current={2} />
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle>Explainer Bubble</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">“That was a three-pointer! Steph Curry scored from beyond the arc — worth 3 points.”</p>
              <Button onClick={explain}>What Just Happened?</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle>Glossary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div>
                  <div className="font-semibold">Term: Double Dribble</div>
                  <div className="text-muted-foreground">When a player dribbles, stops, then dribbles again. Not allowed.</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <a href="/cheatsheet"><Button variant="secondary">Next: Social Cheat Sheet</Button></a>
        </div>
      </section>
    </main>
  );
};

export default LiveCompanion;
