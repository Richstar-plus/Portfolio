import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faSliders } from "@fortawesome/free-solid-svg-icons";
import "./Settings.css";

export function Settings() {
  return (
    <div className="settings">
      <div className="settings-colors">
        <div className="gear-holder">
          <FontAwesomeIcon icon={faGear} className="gear" />
        </div>
        <div className="color-options">
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
      <div className="settings-theme">
        <FontAwesomeIcon icon={faSliders} className="sliders" />
      </div>
    </div>
  );
}
