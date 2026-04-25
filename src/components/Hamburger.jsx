import "./Hamburger.css";

export function Hamburger({ isNavOpen, setIsNavOpen, openTheme, themColor }) {
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
