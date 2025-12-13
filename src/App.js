import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const appStyle = {
    backgroundColor: theme === "light" ? "#ffffff" : "#111827",
    color: theme === "light" ? "#000000" : "#ffffff",
    minHeight: "100vh",
    padding: "40px",
    transition: "background-color 0.3s ease, color 0.3s ease", // smooth animation
  };

  return (
    <div style={appStyle}>
      <h1>Theme Switcher App</h1>

      <p>
        Current Theme: <strong>{theme}</strong>
      </p>

      <button
        onClick={toggleTheme}
        style={{
          marginTop: "20px",
          padding: "10px 16px",
          cursor: "pointer",
        }}
      >
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
}

export default App;
