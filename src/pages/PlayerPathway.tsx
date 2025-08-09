import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ProgressSteps } from "@/components/ProgressSteps";
import SEO from "@/components/SEO";
import { useState } from "react";

const skills = [
  { icon: "🏀", title: "Free Throw Drill", desc: "Make 10 in a row from the line." },
  { icon: "🏃", title: "Dribbling Basics", desc: "Keep your head up and alternate hands." },
  { icon: "🚀", title: "Layup Practice", desc: "Approach from the right, jump off the left foot." },
  { icon: "🛡️", title: "Defensive Stance", desc: "Low hips, active hands, shuffle feet." },
  { icon: "🎯", title: "Spot-up Shooting", desc: "Feet set, follow-through, hold your form." },
];

const PlayerPathway = () => {
  const [unlocked, setUnlocked] = useState(3);

  const start = () => {
    setUnlocked((u) => Math.min(u + 1, skills.length));
  };

  return (
    <main className="min-h-screen">
      <SEO title="Player Pathway | Sport Rookie" description="Unlock drills and track your progress from Rookie to Game Ready." canonical={location.href} />
      <section className="container py-10">
        <div className="mb-6">
          <ProgressSteps current={3} />
        </div>
        <header className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold">Ready to hit the court?</h1>
          <p className="text-muted-foreground">Level 1: Rookie — {unlocked} of {skills.length} skills unlocked.</p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          {skills.map((s, idx) => (
            <Card key={s.title} className={idx < unlocked ? "border-primary" : "opacity-70"}>
              <CardHeader>
                <CardTitle>
                  <span className="mr-2" aria-hidden>{s.icon}</span>
                  {s.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{s.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button size="lg" onClick={start}>Start First Drill</Button>
        </div>
      </section>
    </main>
  );
};

export default PlayerPathway;
