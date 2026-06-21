import { useEffect, useState } from "react";

type Q = {
  question: string;
  options: string[];
  correct: number;
  feedback: string;
};

const level1Questions: Q[] = [
  {
    question: "The crowd just erupted. A player shot from way behind the line. How many points?",
    options: ["3 points. That's a 3-pointer", "2 points. Any basket counts", "Depends on the player"],
    correct: 0,
    feedback: "Behind the arc = 3 points. You'll hear the whole arena count it.",
  },
  {
    question: "Play stops and everyone walks to a line at one end. What's happening?",
    options: ["Free throws. Someone got fouled", "Half time break", "A timeout was called"],
    correct: 0,
    feedback: "Foul = free throws. Unopposed shots from the line. The crowd goes quiet for these.",
  },
  {
    question: "The shot clock shows 3 seconds. What's about to happen?",
    options: ["Panic. They must shoot now or lose the ball", "The quarter ends", "The coach calls a timeout"],
    correct: 0,
    feedback: "24 seconds to shoot. Under 5 and the crowd starts counting. Under 3 means chaos.",
  },
  {
    question: "Your team scores from inside the arc. How do you react?",
    options: ["Cheer. 2 points just went up", "Wait. Only 3-pointers count", "Check the scoreboard first"],
    correct: 0,
    feedback: "Every basket counts. Inside = 2. Outside = 3. Either way cheer.",
  },
];

const level2Questions: Q[] = [
  {
    question: "Your team just scored 8 points in a row and the other team looks rattled. What just happened?",
    options: ["A run. Momentum has completely shifted", "A timeout was called", "The quarter just ended"],
    correct: 0,
    feedback: "A run changes everything. The crowd feels it before the scoreboard shows it.",
  },
  {
    question: "Play stops and the coach talks intensely to players. It's the last 2 minutes of a close game. What does this mean?",
    options: ["A timeout. This is a chess move now", "A player got injured", "Halftime"],
    correct: 0,
    feedback: "Late game timeouts aren't rest breaks. They're strategy. Watch what happens right after.",
  },
  {
    question: "The crowd groans and your team looks frustrated. No one scored. What probably happened?",
    options: ["A turnover. They lost the ball", "A foul on the other team", "A timeout"],
    correct: 0,
    feedback: "Turnovers hurt. That groan means wasted possession. Watch who lost it.",
  },
  {
    question: "One player seems to touch the ball every possession and directs everyone else. Who are they?",
    options: ["The Point Guard. They run the show", "The Center. Biggest player", "The coach's favourite"],
    correct: 0,
    feedback: "Find the Point Guard and you'll always know where the play is going next.",
  },
];

const level3Questions: Q[] = [
  {
    question: "It's tight with 45 seconds left. Your team's best player gets the ball. The crowd holds its breath. Why?",
    options: ["This is a clutch moment. Heroes are made here", "They probably just got fouled", "The coach called a timeout"],
    correct: 0,
    feedback: "Clutch moments define careers. The crowd knows this before the shot goes up.",
  },
  {
    question: "The star player just picked up their 4th foul in the 3rd quarter. The coach immediately benches them. Why?",
    options: ["Protecting them. 6 fouls means ejection", "They played badly this quarter", "Standard rotation"],
    correct: 0,
    feedback: "6 fouls = out of the game. Coaches bank their stars for the final minutes.",
  },
  {
    question: "Your team is down 18 with 7 minutes left. Should you worry?",
    options: ["Not yet. Basketball comebacks happen fast", "Yes. It's basically over", "Depends on who has the ball"],
    correct: 0,
    feedback: "A 10-0 run takes under 3 minutes. Down 18 is serious but never over.",
  },
  {
    question: "A moment happens and you feel it before you understand it. What should you do?",
    options: ["Feel it. That's the whole point of being here", "Google what just happened", "Ask your friend to explain"],
    correct: 0,
    feedback: "You came for the feeling not the knowledge. The knowledge just makes the feeling bigger.",
  },
];

type Props = { goTo: (n: number) => void; currentLevel: number };

const Quiz = ({ goTo, currentLevel }: Props) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    setQuestionIndex(0);
    setSelected(null);
  }, [currentLevel]);

  const questions =
    currentLevel === 1 ? level1Questions : currentLevel === 2 ? level2Questions : level3Questions;
  const q = questions[questionIndex];
  const isCorrect = selected !== null && selected === q.correct;

  const onPrimary = () => {
    if (questionIndex < 3) {
      setQuestionIndex(questionIndex + 1);
      setSelected(null);
    } else {
      goTo(5);
    }
  };

  return (
    <div style={{ padding: "16px 24px 200px" }}>
      <div style={{ fontSize: "12px", fontWeight: 600, color: "#AAAAAA", letterSpacing: "0.15em" }}>
        QUICK CHECK. YOU'VE GOT THIS.
      </div>

      <div style={{ marginTop: "16px", display: "flex", gap: "8px", alignItems: "center" }}>
        {[0, 1, 2, 3].map((i) => {
          const active = i === questionIndex;
          return (
            <div
              key={i}
              style={{
                width: active ? "20px" : "8px",
                height: "8px",
                background: active ? "#E8593C" : "#E8E8E4",
                borderRadius: "9999px",
                transition: "all 0.3s",
              }}
            />
          );
        })}
      </div>

      <div style={{ marginTop: "24px", fontSize: "20px", fontWeight: 700, color: "#1A1A1A", lineHeight: 1.3 }}>
        {q.question}
      </div>

      <div style={{ marginTop: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
        {q.options.map((opt, i) => {
          const chosen = selected === i;
          const correct = chosen && i === q.correct;
          const wrong = chosen && i !== q.correct;
          const style: React.CSSProperties = {
            background: correct ? "#EAF3DE" : wrong ? "#FCEBEB" : "#F8F7F4",
            borderRadius: "16px",
            padding: "16px",
            fontSize: "14px",
            color: correct ? "#27500A" : wrong ? "#791F1F" : "#1A1A1A",
            cursor: selected === null ? "pointer" : "default",
            border: correct
              ? "2px solid #3B6D11"
              : wrong
              ? "2px solid #A32D2D"
              : "2px solid transparent",
            fontWeight: correct ? 600 : 400,
            textAlign: "left",
            width: "100%",
          };
          return (
            <button
              key={i}
              disabled={selected !== null}
              onClick={() => setSelected(i)}
              style={style}
            >
              {opt}
            </button>
          );
        })}
      </div>

      {selected !== null && (
        <div
          style={{
            marginTop: "16px",
            borderRadius: "16px",
            padding: "16px",
            background: isCorrect ? "#EAF3DE" : "#FCEBEB",
          }}
        >
          <div style={{ fontSize: "14px", fontWeight: 700, color: isCorrect ? "#27500A" : "#A32D2D" }}>
            {isCorrect ? "Exactly right." : "Not quite. But now you know."}
          </div>
          <div
            style={{
              marginTop: "4px",
              fontSize: "12px",
              color: isCorrect ? "#3B6D11" : "#791F1F",
              lineHeight: 1.6,
            }}
          >
            {q.feedback}
          </div>
        </div>
      )}

      {selected !== null && (
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: "16px 24px 32px",
            background: "white",
          }}
        >
          <button
            onClick={onPrimary}
            style={{
              width: "100%",
              height: "56px",
              background: "#E8593C",
              borderRadius: "16px",
              color: "white",
              fontWeight: 700,
              fontSize: "16px",
              border: "none",
              cursor: "pointer",
            }}
          >
            {questionIndex < 3 ? "Next question" : "See how I did"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
