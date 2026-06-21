type Props = { goTo: (n: number) => void };

const Landing = ({ goTo }: Props) => {
  return (
    <div
      style={{
        background: "#0F0F0F",
        minHeight: "100vh",
        padding: "0 24px",
        position: "relative",
      }}
    >
      <div style={{ paddingTop: "60px", textAlign: "center" }}>
        <span
          style={{
            display: "inline-block",
            background: "rgba(232,89,60,0.15)",
            border: "1px solid #E8593C",
            color: "#E8593C",
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.15em",
            padding: "6px 16px",
            borderRadius: "9999px",
          }}
        >
          GAMEDAY ROOKIE
        </span>

        <h1
          style={{
            marginTop: "24px",
            fontSize: "36px",
            fontWeight: 800,
            lineHeight: 1.1,
            color: "white",
            textAlign: "center",
          }}
        >
          Hey there, rookie!
          <br />
          Got a basketball game
          <br />
          <span style={{ color: "#E8593C" }}>coming up?</span>
        </h1>

        <p
          style={{
            marginTop: "16px",
            fontSize: "14px",
            color: "#888888",
            lineHeight: 1.6,
            textAlign: "center",
            maxWidth: "280px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          We'll get you ready before the first whistle blows. 15 minutes. No
          textbooks. Just the good stuff.
        </p>

        <div
          onClick={() => goTo(2)}
          className="mx-auto mt-8 w-[280px] h-[160px] bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl overflow-hidden relative cursor-pointer transition-colors duration-200 hover:bg-[#222222] hover:border-[#E8593C] group"
        >
          <svg viewBox="0 0 280 160" width="280" height="160">
            <rect x="10" y="10" width="260" height="140" rx="8" fill="none" stroke="#E8593C" strokeWidth="1" opacity="0.4" />
            <line x1="140" y1="10" x2="140" y2="150" stroke="#E8593C" strokeWidth="1" opacity="0.4" />
            <circle cx="140" cy="80" r="28" fill="none" stroke="#E8593C" strokeWidth="1" opacity="0.4" />
            <rect x="10" y="52" width="50" height="56" fill="none" stroke="#E8593C" strokeWidth="1" opacity="0.3" />
            <rect x="220" y="52" width="50" height="56" fill="none" stroke="#E8593C" strokeWidth="1" opacity="0.3" />
            <path d="M 10,35 Q 85,80 10,125" fill="none" stroke="#E8593C" strokeWidth="1" opacity="0.4" />
            <path d="M 270,35 Q 195,80 270,125" fill="none" stroke="#E8593C" strokeWidth="1" opacity="0.4" />
            <circle cx="16" cy="80" r="6" fill="none" stroke="#E8593C" strokeWidth="1.5" opacity="0.8" />
            <circle cx="264" cy="80" r="6" fill="none" stroke="#E8593C" strokeWidth="1.5" opacity="0.8" />
            <circle cx="140" cy="80" r="3" fill="#E8593C" opacity="0.6" />
          </svg>
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              fontSize: "12px",
              fontWeight: 700,
              color: "white",
              opacity: 0.3,
              letterSpacing: "0.15em",
              textAlign: "center",
            }}
          >
            TAP TO BEGIN
          </div>
        </div>

        <div
          style={{
            fontSize: "12px",
            color: "#888888",
            textAlign: "center",
            marginTop: "8px",
            fontWeight: 500,
          }}
        >
          🏀 Basketball
        </div>

        <div
          style={{
            marginTop: "24px",
            background: "#1A1A1A",
            borderLeft: "3px solid #E8593C",
            borderRadius: "0 12px 12px 0",
            padding: "14px 16px",
            fontSize: "14px",
            color: "#CCCCCC",
            lineHeight: 1.6,
            textAlign: "left",
          }}
        >
          Let's turn you into a fan who actually knows what's going on.
        </div>
      </div>

      <div style={{ height: "180px" }} />

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "24px 24px 40px",
          background: "linear-gradient(to bottom, transparent, #0F0F0F)",
        }}
      >
        <button
          onClick={() => goTo(2)}
          style={{
            width: "100%",
            height: "56px",
            background: "#E8593C",
            borderRadius: "16px",
            color: "white",
            fontWeight: 700,
            fontSize: "16px",
            border: "none",
            boxShadow: "0 0 0 4px rgba(232,89,60,0.2)",
            cursor: "pointer",
          }}
        >
          Get me ready — let's go
        </button>
        <div
          style={{
            textAlign: "center",
            fontSize: "12px",
            color: "#555555",
            marginTop: "12px",
          }}
        >
          No sign up. No downloads. Just you and the game.
        </div>
      </div>
    </div>
  );
};

export default Landing;
