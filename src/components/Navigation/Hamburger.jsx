import "./Hamburger.css";
import { useTheme } from "../../hooks/useTheme";

export function Hamburger() {
  const { isNavOpen, setIsNavOpen, openTheme, themColor } = useTheme();

  return (
    <div className={`hamburger ${isNavOpen ? "hamburger-open hamburger" : ""}`}>
      <button
        className={`${openTheme ? `hamburger-btn-${themColor}` : `hamburger-btn-light-${themColor}`}`}
        onClick={() => setIsNavOpen(!isNavOpen)}
      >
        {isNavOpen ? "✕" : "☰"}
      </button>
    </div>
  );
}
