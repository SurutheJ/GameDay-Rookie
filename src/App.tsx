import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Landing from "./screens/Landing";
import LevelSelect from "./screens/LevelSelect";
import LearnCard from "./screens/LearnCard";
import Quiz from "./screens/Quiz";
import YoureReady from "./screens/YoureReady";

const App = () => {
  const [currentScreen, setCurrentScreen] = useState(1);
  const [currentLevel, setCurrentLevel] = useState(1);
  const [history, setHistory] = useState<number[]>([1]);

  const goTo = (screen: number) => {
    setHistory((prev) => [...prev, screen]);
    setCurrentScreen(screen);
  };

  const goBack = () => {
    if (history.length > 1) {
      const newHistory = history.slice(0, -1);
      setHistory(newHistory);
      setCurrentScreen(newHistory[newHistory.length - 1]);
    }
  };

  const goHome = () => {
    setHistory([1]);
    setCurrentScreen(1);
  };

  useEffect(() => {
    document.body.style.background = "#ffffff";
    document.body.style.fontFamily = "'Inter', system-ui, sans-serif";
    document.body.style.color = "#1A1A1A";
    document.body.style.margin = "0";
  }, []);

  return (
    <div
      style={{
        position: "relative",
        maxWidth: "390px",
        margin: "0 auto",
        minHeight: "100vh",
        overflow: "hidden",
        background: "white",
        fontFamily: "'Inter', system-ui, sans-serif",
      }}
    >
      {currentScreen === 1 && <Landing goTo={goTo} />}
      {currentScreen === 2 && (
        <>
          <NavBar onBack={goBack} onHome={goHome} showBack={true} />
          <LevelSelect goTo={goTo} setCurrentLevel={setCurrentLevel} />
        </>
      )}
      {currentScreen === 3 && (
        <>
          <NavBar onBack={goBack} onHome={goHome} showBack={true} />
          <LearnCard goTo={goTo} currentLevel={currentLevel} />
        </>
      )}
      {currentScreen === 4 && (
        <>
          <NavBar onBack={goBack} onHome={goHome} showBack={true} />
          <Quiz goTo={goTo} currentLevel={currentLevel} />
        </>
      )}
      {currentScreen === 5 && (
        <>
          <NavBar onBack={goBack} onHome={goHome} showBack={false} />
          <YoureReady
            goTo={goTo}
            goHome={goHome}
            currentLevel={currentLevel}
            setCurrentLevel={setCurrentLevel}
          />
        </>
      )}
    </div>
  );
};

export default App;
