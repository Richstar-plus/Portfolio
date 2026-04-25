import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faSliders, faMoon } from "@fortawesome/free-solid-svg-icons";
import "./Settings.css";

export function Settings({
  openColors,
  setOpenColors,
  openTheme,
  handleThemeOpen,
  handleThemeColor,
}) {
  return (
    <div className="settings">
      <div className="settings-colors">
        <div
          className={`${openTheme ? "gear-holder" : "gear-holder-dark"} ${openColors ? "gear-holder-open" : ""}`}
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
              onClick={() => handleThemeColor("red")}
            />
            <div
              className="color-option"
              style={{ backgroundColor: "#3da02a" }}
              onClick={() => handleThemeColor("green")}
            />
            <div
              className="color-option"
              style={{ backgroundColor: "#2c2caa" }}
              onClick={() => handleThemeColor("blue")}
            />
            <div
              className="color-option"
              style={{ backgroundColor: "rgb(255, 115, 0)" }}
              onClick={() => handleThemeColor("default")}
            />
          </div>
        </div>
      </div>
      <div
        className={`${openTheme ? "settings-theme" : "settings-theme-dark"}`}
        onClick={() => handleThemeOpen()}
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
