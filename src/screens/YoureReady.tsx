type Props = {
  goTo: (n: number) => void;
  goHome: () => void;
  currentLevel: number;
  setCurrentLevel: (n: number) => void;
};

const YoureReady = ({ goTo, goHome, currentLevel, setCurrentLevel }: Props) => {
  const subtext =
    currentLevel === 1
      ? "You now know more than half the people walking into that arena."
      : currentLevel === 2
      ? "You're not just watching anymore. You're reading the game."
      : "You're no longer a rookie. You walked in knowing nothing. You leave knowing things most fans take years to figure out.";

  const deeperTitle =
    currentLevel === 1
      ? "Want to go deeper?"
      : currentLevel === 2
      ? "One more level."
      : "You're done. Go enjoy it.";

  const deeperBody =
    currentLevel === 1
      ? "Level 2 covers players, momentum and what to actually say out loud. 8 minutes."
      : currentLevel === 2
      ? "Level 3 is about clutch moments, comebacks and feeling the game like a real fan. 6 minutes."
      : "Everything else you learn tonight you'll learn from the game itself. That's the best teacher.";

  const primaryText =
    currentLevel === 1
      ? "Take me to level 2"
      : currentLevel === 2
      ? "Take me to level 3"
      : "Let's go watch.";

  const onPrimary = () => {
    if (currentLevel === 1) {
      setCurrentLevel(2);
      goTo(3);
    } else if (currentLevel === 2) {
      setCurrentLevel(3);
      goTo(3);
    } else {
      goHome();
    }
  };

  return (
    <div style={{ padding: "32px 24px 32px", textAlign: "center" }}>
      <div
        style={{
          marginTop: "16px",
          width: "80px",
          height: "80px",
          borderRadius: "9999px",
          background: "#FEF0ED",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: "auto",
          marginRight: "auto",
          fontSize: "36px",
        }}
      >
        🏆
      </div>

      <h1
        style={{
          marginTop: "24px",
          fontSize: "28px",
          fontWeight: 800,
          color: "#1A1A1A",
        }}
      >
        You're ready, rookie.
      </h1>

      <p
        style={{
          marginTop: "12px",
          fontSize: "14px",
          color: "#6B6B6B",
          lineHeight: 1.6,
          maxWidth: "320px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {subtext}
      </p>

      <div style={{ marginTop: "32px", display: "flex", gap: "12px" }}>
        <div
          style={{
            flex: 1,
            background: "#F8F7F4",
            borderRadius: "16px",
            padding: "16px",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: "24px", fontWeight: 800, color: "#E8593C" }}>4</div>
          <div style={{ fontSize: "12px", color: "#AAAAAA", marginTop: "4px" }}>things learned</div>
        </div>
        <div
          style={{
            flex: 1,
            background: "#F8F7F4",
            borderRadius: "16px",
            padding: "16px",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: "20px", fontWeight: 800, color: "#E8593C" }}>4/4</div>
          <div style={{ fontSize: "12px", color: "#AAAAAA", marginTop: "4px" }}>nailed it</div>
        </div>
      </div>

      <div
        style={{
          marginTop: "24px",
          background: "#FEF0ED",
          borderRadius: "16px",
          padding: "16px",
          textAlign: "left",
        }}
      >
        <div style={{ fontSize: "14px", fontWeight: 700, color: "#993C1D" }}>{deeperTitle}</div>
        <div style={{ marginTop: "4px", fontSize: "12px", color: "#712B13", lineHeight: 1.6 }}>
          {deeperBody}
        </div>
      </div>

      <div style={{ marginTop: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
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
          {primaryText}
        </button>
        {currentLevel < 3 && (
          <button
            onClick={goHome}
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
            I'm good. Enjoy the game.
          </button>
        )}
      </div>
    </div>
  );
};

export default YoureReady;
