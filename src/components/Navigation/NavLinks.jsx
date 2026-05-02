import "./NavLinks.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faBriefcase,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../../hooks/useTheme";

export function NavLinks() {
  const { isNavOpen, openTheme, themColor, setIsNavOpen } = useTheme();

  return (
    <div
      className={` ${isNavOpen ? "show-menu" : ""} ${openTheme ? "nav-links" : "nav-links-light"}`}
    >
      <div className="logo">
        <div className={`logo-style-right logo-style-right-${themColor}`}></div>
        <h1>Richstar</h1>
        <div className={`logo-style-left logo-style-left-${themColor}`}></div>
      </div>
      <div className="links">
        <NavLink
          to="/Portfolio/"
          className={({ isActive }) => (isActive ? "nav-link-active" : "")}
          onClick={() => setIsNavOpen(false)}
        >
          <div className={`link-holder link-holder-${themColor}`}>
            <FontAwesomeIcon icon={faHouse} /> Home
          </div>
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "nav-link-active" : "")}
          onClick={() => setIsNavOpen(false)}
        >
          <div className={`link-holder link-holder-${themColor}`}>
            <FontAwesomeIcon icon={faUser} /> About
          </div>
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) => (isActive ? "nav-link-active" : "")}
          onClick={() => setIsNavOpen(false)}
        >
          <div className={`link-holder link-holder-${themColor}`}>
            <FontAwesomeIcon icon={faBriefcase} /> Projects
          </div>
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "nav-link-active" : "")}
          onClick={() => setIsNavOpen(false)}
        >
          <div className={`link-holder link-holder-${themColor}`}>
            <FontAwesomeIcon icon={faEnvelope} /> Contact
          </div>
        </NavLink>
      </div>
    </div>
  );
}
