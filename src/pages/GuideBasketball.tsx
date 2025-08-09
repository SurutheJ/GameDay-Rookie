import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ProgressSteps } from "@/components/ProgressSteps";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";

const GuideBasketball = () => {
  return (
    <main className="min-h-screen">
      <SEO title="Basketball: The Basics | Sport Rookie" description="Learn the court, scoring, clock, and fouls in minutes. Then take a 3-question quiz." canonical={location.href} />
      <section className="container py-10">
        <div className="mb-6">
          <ProgressSteps current={1} />
        </div>
        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Basketball: <span className="text-gradient-brand">The Basics</span></h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">“Basketball in 15 Minutes” Beginner Guide</p>
        </header>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="hover:shadow-xl transition-shadow" aria-label="The Court">
            <CardHeader>
              <CardTitle>The Court</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Two hoops, one on each end. Your mission: get the ball in the other team’s hoop.</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-shadow" aria-label="Scoring">
            <CardHeader>
              <CardTitle>Scoring</CardTitle>
            </CardHeader>
            <CardContent>
              <p>2 points for a shot inside the arc, 3 for outside, 1 for free throws.</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-shadow" aria-label="The Clock">
            <CardHeader>
              <CardTitle>The Clock</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Games are split into 4 quarters, 12 minutes each in the NBA. Shot clock is 24 seconds.</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-shadow" aria-label="Common Fouls">
            <CardHeader>
              <CardTitle>Common Fouls</CardTitle>
            </CardHeader>
            <CardContent>
              <p>No pushing, hitting, or blocking someone’s freedom to move.</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-10 text-center">
          <Link to="/guide/basketball/quiz">
            <Button size="lg">Think you got it? Let’s test your skills!</Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default GuideBasketball;
