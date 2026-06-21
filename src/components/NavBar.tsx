type Props = {
  onBack: () => void;
  onHome: () => void;
  showBack: boolean;
};

const NavBar = ({ onBack, onHome, showBack }: Props) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 24px",
        borderBottom: "0.5px solid #E8E8E4",
        background: "white",
      }}
    >
      {showBack ? (
        <button
          onClick={onBack}
          aria-label="Back"
          style={{
            background: "none",
            border: "none",
            fontSize: "20px",
            color: "#1A1A1A",
            cursor: "pointer",
            width: "28px",
            textAlign: "left",
            padding: 0,
          }}
        >
          ←
        </button>
      ) : (
        <div style={{ width: "28px" }} />
      )}

      <button
        onClick={onHome}
        style={{
          background: "none",
          border: "none",
          fontSize: "11px",
          fontWeight: 700,
          color: "#E8593C",
          letterSpacing: "1.5px",
          cursor: "pointer",
        }}
      >
        GAMEDAY ROOKIE
      </button>

      <div style={{ width: "28px" }} />
    </div>
  );
};

export default NavBar;
