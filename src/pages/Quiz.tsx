import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { ProgressSteps } from "@/components/ProgressSteps";
import SEO from "@/components/SEO";

const questions = [
  {
    q: "How many points is a shot from beyond the arc?",
    options: ["1", "2", "3"],
    answer: "3",
  },
  {
    q: "How many seconds are on the NBA shot clock?",
    options: ["14", "24", "30"],
    answer: "24",
  },
  {
    q: "What is a common foul?",
    options: ["Hitting or pushing", "Calling timeout", "Making a pass"],
    answer: "Hitting or pushing",
  },
];

const Quiz = () => {
  const { toast } = useToast();
  const [answers, setAnswers] = useState<string[]>(Array(questions.length).fill(""));

  const submit = () => {
    const correct = answers.filter((a, i) => a === questions[i].answer).length;
    const percent = Math.round((correct / questions.length) * 100);
    toast({ title: `You scored ${correct}/${questions.length} (${percent}%)`, description: percent === 100 ? "Perfect! You're ready to watch a live game." : "Nice! Review and try again." });
  };

  return (
    <main className="min-h-screen">
      <SEO title="Basketball Quiz | Sport Rookie" description="Test your basketball basics with 3 quick questions." canonical={location.href} />
      <section className="container py-10">
        <div className="mb-6">
          <ProgressSteps current={1} />
        </div>
        <header className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold">Quick Check</h1>
          <p className="text-muted-foreground">3 questions — no pressure.</p>
        </header>
        <div className="grid gap-6 md:grid-cols-3">
          {questions.map((item, idx) => (
            <Card key={idx} className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle>Q{idx + 1}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{item.q}</p>
                <div className="space-y-2">
                  {item.options.map((opt) => (
                    <label key={opt} className="flex items-center gap-2">
                      <input
                        type="radio"
                        name={`q-${idx}`}
                        value={opt}
                        onChange={(e) => {
                          const next = [...answers];
                          next[idx] = e.target.value;
                          setAnswers(next);
                        }}
                      />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Button onClick={submit}>Submit</Button>
          <a href="/watch/live-companion"><Button variant="secondary">Next: Live Companion</Button></a>
        </div>
      </section>
    </main>
  );
};

export default Quiz;
