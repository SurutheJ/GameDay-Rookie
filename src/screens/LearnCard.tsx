import { useEffect, useState } from "react";

type Card = {
  tag: string;
  headline: string;
  body: string;
  watchFor: string;
  more: string;
};

const level1Cards: Card[] = [
  {
    tag: "THE COURT",
    headline: "Two teams, one goal.",
    body: "Five players each side. One team attacks, one defends. Simple as that but everything happens at full speed.",
    watchFor: "Watch which end your team is attacking. When they score, the crowd nearest that hoop goes loudest.",
    more: "Each team has 5 players on the court at a time but rosters have 15 players. Coaches rotate players in and out constantly called substitutions. The starters are the best 5 but the bench players can change a game completely when they come in fresh against tired defenders.",
  },
  {
    tag: "SCORING",
    headline: "Points aren't all equal.",
    body: "Inside that curved line? 2 points. Behind it? 3 points and the crowd goes louder for those. Free throws at the line? 1 each.",
    watchFor: "When a player steps behind that arc and shoots that's a 3-pointer. The whole arena holds its breath.",
    more: "The three point line is the most important line on the court right now. Modern basketball is obsessed with 3-pointers because the math works. Two 3-pointers equals three 2-pointers. Teams that shoot more threes win more games. When you see a team celebrate a 3-pointer louder than a dunk that's why.",
  },
  {
    tag: "THE CLOCK",
    headline: "Every second matters.",
    body: "4 quarters, 12 minutes each. The shot clock gives teams 24 seconds to shoot. If they don't, possession switches.",
    watchFor: "Watch the shot clock in the corner when it drops under 5. That's when things get desperate.",
    more: "The shot clock resets to 24 seconds every time possession changes. But it resets to 14 seconds after an offensive rebound. So if your team misses a shot but gets the ball back they only get 14 more seconds. That's why offensive rebounds are so valuable and why the crowd reacts so strongly to them.",
  },
  {
    tag: "FOULS",
    headline: "Some hits aren't allowed.",
    body: "Push, shove or hit a shooter and it's a foul. Too many fouls and the other team shoots free throws from the line.",
    watchFor: "When play stops and everyone walks to the line that's free throws. Each one counts. The crowd goes quiet.",
    more: "Not all fouls are equal. A blocking foul is called on the defender. A charging foul is called on the attacker. These two calls look almost identical and referees get them wrong constantly. When the crowd screams at a ref it's usually one of these two.",
  },
];

const level2Cards: Card[] = [
  {
    tag: "THE PLAYERS",
    headline: "Five players, five jobs.",
    body: "The Point Guard runs the show. Think of them as the quarterback. The Center is the big one near the hoop. You only need to know one player on your team tonight.",
    watchFor: "Find the Point Guard. They touch the ball most. When they drive toward the hoop something is always about to happen.",
    more: "The five positions are Point Guard, Shooting Guard, Small Forward, Power Forward and Center. But modern basketball has mostly abandoned strict positions. The best teams now play positionless basketball meaning anyone can do anything. The only position that still means something specific is Point Guard. They are always the floor general.",
  },
  {
    tag: "POSSESSIONS",
    headline: "Losing the ball is a big deal.",
    body: "Every time your team loses the ball without scoring that is a turnover. Every time they get it back without the other team scoring that is a steal. The crowd reacts hard to both.",
    watchFor: "Listen for the crowd groan. That is a turnover. Listen for the sudden roar out of nowhere. That is a steal. Two completely different energies.",
    more: "Teams average around 100 possessions per game. Every single possession matters mathematically. The best teams in the league turn the ball over fewer than 13 times per game. When a team hits 18 or 20 turnovers in a game they almost never win. Protecting the ball is as important as scoring.",
  },
  {
    tag: "TIMEOUTS",
    headline: "When it stops, it's getting serious.",
    body: "Coaches call timeouts to stop the bleeding when their team is losing momentum fast. Each team gets 7 per game. In the last 2 minutes every timeout is a chess move.",
    watchFor: "When a timeout gets called and the crowd gets louder instead of quieter the losing team just stopped a run. That is a big moment.",
    more: "There are two types of timeouts. Full timeouts let coaches draw up plays on a whiteboard. 20-second timeouts are just to stop the clock or settle nerves. In the NBA the last 2 minutes of a close game can take 20 real minutes to play because of timeouts, fouls and free throws. That final stretch is its own separate drama.",
  },
  {
    tag: "THE RUN",
    headline: "Momentum is everything.",
    body: "A run is when one team scores several times in a row without the other team answering. A 10-0 run can flip a game completely. The arena feels it before the scoreboard shows it.",
    watchFor: "When one side of the arena goes from loud to very quiet a run just happened against them. That silence is louder than noise.",
    more: "The biggest run in NBA history was 33-0 by the Cleveland Cavaliers in 1995. In a single game, runs of 10-0 or 12-0 are considered momentum shifting. Coaches call timeouts specifically to stop the other team's run even when their own team hasn't done anything wrong. Sometimes just breaking the rhythm is enough.",
  },
];

const level3Cards: Card[] = [
  {
    tag: "CLUTCH",
    headline: "Some players want the moment. Most don't.",
    body: "In the last 2 minutes of a close game, watch who the team gives the ball to. That player either wants to be the hero or has to be. The crowd knows before the shot goes up.",
    watchFor: "When it's tight with under a minute left find your team's best player. The ball will find them. Watch their face not the ball.",
    more: "The NBA actually tracks clutch stats officially defined as the last 5 minutes of a game within 5 points either way. Some players who are stars all game completely disappear in clutch moments. Others who were quiet all night suddenly take over. The ones who consistently perform in clutch moments become legends.",
  },
  {
    tag: "FOULING OUT",
    headline: "Six fouls and you're gone.",
    body: "Every player has six fouls before they are out of the game. When a star picks up their 4th foul early the coach benches them to save them for later. The crowd counts every foul on the stars.",
    watchFor: "If the arena reacts to a foul call even when it seems small check if it is on the star player. Their 4th or 5th foul changes everything.",
    more: "When a team's star player is in foul trouble the entire opposing team's strategy changes. They start running plays designed to draw fouls on that player called foul baiting. You'll see attackers jump into defenders deliberately to draw contact. It looks awkward because it is but it's completely legal and extremely effective.",
  },
  {
    tag: "THE COMEBACK",
    headline: "It's never over. Until it is.",
    body: "Basketball has the fastest comebacks in sport. Down 20 with 8 minutes left feels hopeless but a 10-0 run takes less than 3 minutes. Never leave early.",
    watchFor: "If your team is down big and the coach starts calling timeouts they haven't given up. That's the signal. Start paying attention.",
    more: "The biggest comeback in NBA playoff history was the Boston Celtics overcoming a 3-1 series deficit against the Brooklyn Nets in 2022. These comebacks share one thing. The team that was winning stopped playing their game and started protecting a lead. Protecting a lead is harder than chasing one.",
  },
  {
    tag: "YOUR MOMENT",
    headline: "You'll know it when it happens.",
    body: "There will be one moment tonight where you don't need anyone to explain what just happened. You'll feel it in the room before you understand it in your head. That's basketball.",
    watchFor: "When that moment hits remember you felt it. That feeling is the whole point. Everything else was just the setup.",
    more: "Every fan remembers their first real moment. The one that made them understand why people give so much of themselves to this game. It's never the biggest play or the most famous game. It's always something specific to where they were, who they were with, and what they felt in that exact second. Tonight you're going to make that memory.",
  },
];

type Props = { goTo: (n: number) => void; currentLevel: number };

const LearnCard = ({ goTo, currentLevel }: Props) => {
  const [cardIndex, setCardIndex] = useState(0);
  const [showSheet, setShowSheet] = useState(false);

  useEffect(() => {
    setCardIndex(0);
    setShowSheet(false);
  }, [currentLevel]);

  const cards =
    currentLevel === 1 ? level1Cards : currentLevel === 2 ? level2Cards : level3Cards;
  const card = cards[cardIndex];

  const onPrimary = () => {
    if (cardIndex < 3) {
      setCardIndex(cardIndex + 1);
      setShowSheet(false);
    } else {
      goTo(4);
    }
  };

  return (
    <div style={{ padding: "16px 24px 200px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontSize: "12px", color: "#AAAAAA" }}>{cardIndex + 1} of 4</div>
      </div>

      <div
        style={{
          marginTop: "12px",
          width: "100%",
          height: "4px",
          background: "#E8E8E4",
          borderRadius: "9999px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${((cardIndex + 1) / 4) * 100}%`,
            background: "#E8593C",
            height: "100%",
            borderRadius: "9999px",
            transition: "width 0.3s",
          }}
        />
      </div>

      <span
        style={{
          display: "inline-block",
          marginTop: "24px",
          background: "#FEF0ED",
          color: "#993C1D",
          fontSize: "11px",
          fontWeight: 700,
          padding: "4px 12px",
          borderRadius: "8px",
          letterSpacing: "0.08em",
        }}
      >
        {card.tag}
      </span>

      <h1 style={{ marginTop: "12px", fontSize: "28px", fontWeight: 800, color: "#1A1A1A", lineHeight: 1.15 }}>
        {card.headline}
      </h1>

      <p style={{ marginTop: "16px", fontSize: "14px", color: "#6B6B6B", lineHeight: 1.6 }}>
        {card.body}
      </p>

      <div
        style={{
          marginTop: "24px",
          background: "#FEF0ED",
          borderLeft: "4px solid #E8593C",
          borderRadius: "0 14px 14px 0",
          padding: "14px 16px",
        }}
      >
        <div style={{ fontSize: "11px", fontWeight: 700, color: "#993C1D", letterSpacing: "0.05em" }}>
          WATCH FOR THIS
        </div>
        <div style={{ marginTop: "8px", fontSize: "12px", color: "#712B13", lineHeight: 1.6 }}>
          {card.watchFor}
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "16px 24px 32px",
          background: "white",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
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
          {cardIndex < 3 ? "Got it — next" : "I'm ready — test me"}
        </button>
        <button
          onClick={() => setShowSheet(true)}
          style={{
            width: "100%",
            height: "48px",
            background: "white",
            border: "1.5px solid #E8E8E4",
            borderRadius: "16px",
            fontSize: "14px",
            fontWeight: 600,
            color: "#6B6B6B",
            cursor: "pointer",
          }}
        >
          Tell me more
        </button>
      </div>

      {showSheet && (
        <>
          <div
            onClick={() => setShowSheet(false)}
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(0,0,0,0.5)",
              zIndex: 40,
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              width: "100%",
              background: "white",
              borderRadius: "24px 24px 0 0",
              padding: "24px",
              zIndex: 50,
              maxHeight: "65vh",
              overflowY: "auto",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "4px",
                background: "#E8E8E4",
                borderRadius: "9999px",
                margin: "0 auto 16px",
              }}
            />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
              <span
                style={{
                  display: "inline-block",
                  background: "#FEF0ED",
                  color: "#993C1D",
                  fontSize: "11px",
                  fontWeight: 700,
                  padding: "4px 12px",
                  borderRadius: "8px",
                  letterSpacing: "0.08em",
                }}
              >
                {card.tag}
              </span>
              <button
                onClick={() => setShowSheet(false)}
                style={{
                  background: "none",
                  border: "none",
                  fontSize: "20px",
                  color: "#AAAAAA",
                  cursor: "pointer",
                }}
              >
                ✕
              </button>
            </div>
            <div style={{ fontSize: "14px", color: "#1A1A1A", lineHeight: 1.6 }}>
              {card.more}
            </div>
            <div style={{ marginTop: "24px", fontSize: "12px", color: "#AAAAAA", textAlign: "center" }}>
              tap anywhere outside to close
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default LearnCard;
