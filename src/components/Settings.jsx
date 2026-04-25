import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faSliders, faMoon } from "@fortawesome/free-solid-svg-icons";
import "./Settings.css";

export function Settings({
  openColors,
  setOpenColors,
  openTheme,
  handleThemeOpen,
}) {
  return (
    <div className="settings">
      <div className="settings-colors">
        <div
          className={`gear-holder ${openColors ? "gear-holder-open gear-holder" : ""}`}
          onClick={() => setOpenColors(!openColors)}
        >
          <FontAwesomeIcon icon={faGear} className="gear" />
        </div>
        <div
          className={`color-options ${openColors ? "color-options-open" : ""}`}
        >
          <div className="color-heading">Theme Colors</div>
          <div className="color-holder">
            <div
              className="color-option"
              style={{ backgroundColor: "#b32020" }}
            />
            <div
              className="color-option"
              style={{ backgroundColor: "#3da02a" }}
            />
            <div
              className="color-option"
              style={{ backgroundColor: "#2c2caa" }}
            />
            <div
              className="color-option"
              style={{ backgroundColor: "rgb(255, 115, 0)" }}
            />
          </div>
        </div>
      </div>
      <div
        className="settings-theme"
       onClick={() => handleThemeOpen() }
      >
        {openTheme ? (
          <FontAwesomeIcon icon={faSliders} className="sliders" />
        ) : (
          <FontAwesomeIcon icon={faMoon} className="moon" />
        )}
      </div>
    </div>
  );
}
