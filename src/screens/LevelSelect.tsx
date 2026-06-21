type Props = {
  goTo: (n: number) => void;
  setCurrentLevel: (n: number) => void;
};

const LevelSelect = ({ goTo, setCurrentLevel }: Props) => {
  const start = () => {
    setCurrentLevel(1);
    goTo(3);
  };

  return (
    <div style={{ padding: "0 24px", paddingBottom: "120px" }}>
      <div
        style={{
          marginTop: "32px",
          fontSize: "12px",
          fontWeight: 600,
          color: "#AAAAAA",
          letterSpacing: "0.15em",
        }}
      >
        BASKETBALL
      </div>
      <h1 style={{ marginTop: "4px", fontSize: "28px", fontWeight: 800, color: "#1A1A1A" }}>
        Pick your starting point.
      </h1>
      <p style={{ marginTop: "8px", fontSize: "14px", color: "#6B6B6B", lineHeight: 1.6 }}>
        Honest answer only. Judgement-free zone.
      </p>

      <div style={{ marginTop: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
        <div
          onClick={start}
          style={{
            background: "#FEF0ED",
            border: "2px solid #E8593C",
            borderRadius: "16px",
            padding: "16px",
            cursor: "pointer",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: "11px", fontWeight: 700, color: "#E8593C", letterSpacing: "0.05em" }}>
              START HERE
            </div>
            <div style={{ marginTop: "4px", fontSize: "16px", fontWeight: 700, color: "#1A1A1A" }}>
              Total rookie
            </div>
            <div style={{ marginTop: "4px", fontSize: "12px", color: "#6B6B6B" }}>
              Never watched a game. That's perfectly fine.
            </div>
          </div>
          <div
            style={{
              width: "32px",
              height: "32px",
              background: "#E8593C",
              borderRadius: "9999px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "14px",
              flexShrink: 0,
            }}
          >
            →
          </div>
        </div>

        {[
          { label: "LEVEL 2", title: "I've seen a few games", sub: "Know the basics. Fuzzy on the rest." },
          { label: "LEVEL 3", title: "I kind of get it", sub: "Fill the gaps before the game." },
        ].map((c) => (
          <div
            key={c.label}
            style={{
              background: "#F8F7F4",
              border: "1px solid #E8E8E4",
              borderRadius: "16px",
              padding: "16px",
              opacity: 0.5,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: "11px", fontWeight: 700, color: "#AAAAAA" }}>{c.label}</div>
              <div style={{ marginTop: "4px", fontSize: "16px", fontWeight: 700, color: "#1A1A1A" }}>
                {c.title}
              </div>
              <div style={{ marginTop: "4px", fontSize: "12px", color: "#6B6B6B" }}>{c.sub}</div>
            </div>
            <div style={{ color: "#AAAAAA", fontSize: "16px" }}>🔒</div>
          </div>
        ))}
      </div>

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
          onClick={start}
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
          Start as total rookie
        </button>
      </div>
    </div>
  );
};

export default LevelSelect;
